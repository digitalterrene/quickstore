import { addToSet } from "@/api-calls/store-crud-operations/addToSet";
import { useAuthContext } from "@/context/auth-context/AuthContext";
import React, { useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

interface Review {
  username: string;
  customer_id: string;
  user_id: string;
  email: string;
  product_id: string;
  created_at: string;
  rating: number;
  review: string;
  name: string;
}

interface ProductReviewsProps {
  user_id: string;
  product_reviews: any;
  product_id: string;
}

const calculateAverageRating = (reviews: Review[]) => {
  if (reviews?.length === 0) return 0;
  const total = reviews?.reduce((acc, review) => acc + review?.rating, 0);
  return total / reviews?.length;
};

const calculateRatingDistribution = (reviews: Review[]) => {
  const distribution = [0, 0, 0, 0, 0];
  reviews?.forEach((review) => {
    distribution[review?.rating - 1] += 1;
  });
  return distribution;
};

const ProductReviews: React.FC<ProductReviewsProps> = ({
  user_id,
  product_reviews,
  product_id,
}) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const { user } = useAuthContext();

  const currentTimestamp: Date = new Date();
  const [inputs, setInputs] = useState({
    username: user?.username || "anonymous",
    customer_id: user?._id || "",
    user_id,
    email: user?.email || "",
    product_id,
    created_at: currentTimestamp?.toISOString(),
    rating: "",
    review: "",
    name: "",
  });

  const averageRating = useMemo(
    () => calculateAverageRating(product_reviews?.results),
    [product_reviews?.results]
  );

  const ratingDistribution = useMemo(
    () => calculateRatingDistribution(product_reviews?.results),
    [product_reviews?.results]
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id = toast.loading("Submitting review...");
    const res: any = await addToSet(user_id, user?._id, user?.token, {
      key_to_update: "reviews",
      value_to_update: {
        data_type: "reviews",
        ...inputs,
        rating,
      },
    });
    if (res.response === "ok") {
      toast.update(id, {
        render: "Review submitted successfully",
        type: "success",
        isLoading: false,
      });
    } else {
      toast.update(id, {
        render: "Failed to submit review",
        type: "error",
        isLoading: false,
      });
    }
    setTimeout(() => {
      toast.dismiss();
    }, 2000);
  };

  const formatDate = (isoString: string | undefined): string => {
    if (!isoString) return "Invalid date";
    const date = new Date(isoString);
    return date.toLocaleDateString(); // or use toLocaleString() for more detail
  };

  return (
    <div className="mx-auto">
      <ToastContainer />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Average Rating */}
        <div className="p-6 border h-fit rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">Average Rating</h2>
          <div className="text-3xl font-semibold mb-2">
            {averageRating.toFixed(1)}{" "}
            <span className="text-yellow-500">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </span>
          </div>
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center mb-2">
              <span className="mr-2">{star}</span>
              <div className="flex-1 h-3 bg-gray-200 rounded-lg overflow-hidden">
                <div
                  className={`h-full ${
                    star === 5
                      ? "bg-green-600"
                      : star === 4
                      ? "bg-green-500"
                      : star === 3
                      ? "bg-yellow-500"
                      : star === 2
                      ? "bg-orange-500"
                      : "bg-red-500"
                  }`}
                  style={{
                    width: `${
                      (ratingDistribution[star - 1] /
                        product_reviews?.results.length) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
              <span className="ml-2">
                {(
                  (ratingDistribution[star - 1] /
                    product_reviews?.results.length) *
                  100
                ).toFixed(0)}
                %
              </span>
            </div>
          ))}
        </div>

        {/* Submit Your Review */}
        <div className="p-6 border col-span-2 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">Submit Your Review</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Add Your Rating *
              </label>
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    className={`text-2xl ${
                      rating >= index + 1 || hover >= index + 1
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                    onClick={() => setRating(index + 1)}
                    onMouseEnter={() => setHover(index + 1)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    &#9733;
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded-lg"
                placeholder="John Doe"
                required
                value={inputs.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded-lg"
                placeholder="username@quickshop.com"
                required
                value={inputs.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="review"
              >
                Write Your Review *
              </label>
              <textarea
                id="review"
                name="review"
                className="w-full p-2 border rounded-lg"
                rows={4}
                placeholder="Write here..."
                required
                value={inputs.review}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-[#1F2937] text-white rounded-lg"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>

      {/* Customer Feedbacks */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Customer Feedbacks</h2>
        {product_reviews?.results?.map((product_review: any, index: any) => (
          <div key={index} className="p-6 mb-4 border rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg capitalize font-bold">
                {product_review?.name}
              </h3>
              <span className="text-gray-500">
                {formatDate(product_review?.created_at)}
              </span>
            </div>
            <div className="flex items-center mb-2">
              {[...Array(product_review?.rating)].map((_, i) => (
                <span key={i} className="text-yellow-500">
                  &#9733;
                </span>
              ))}
              {[...Array(5 - product_review?.rating)].map((_, i) => (
                <span key={i} className="text-gray-300">
                  &#9733;
                </span>
              ))}
            </div>
            <p className="text-gray-600">{product_review?.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
