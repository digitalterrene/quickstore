import { StarIcon } from "@heroicons/react/20/solid";
import React from "react";

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

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardReviewsAndComments({
  product_reviews,
}: {
  product_reviews: { results: Review[] };
}) {
  return (
    <div className="bg-white">
      <div className="mx-auto">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Your Reviews & Comments
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Check the status of recent orders, manage returns, and discover
            similar products.
          </p>
        </div>
        <div className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
          {product_reviews?.results?.map((review, index) => (
            <div
              key={index}
              className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
            >
              <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                <div className="flex items-center xl:col-span-1">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          review.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="ml-3 text-sm text-gray-700">
                    {review.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                </div>

                <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    <a
                      href={`/industries/quickshop-stores-category/products/view-product/${review?.product_id}`}
                      className="font-medium text-gray-900"
                    >
                      View Product
                    </a>
                  </h3>

                  <div
                    className="mt-3 space-y-6 text-sm text-gray-500"
                    dangerouslySetInnerHTML={{ __html: review.review }}
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                <p className="font-medium text-gray-900">
                  {review.name || review.username}
                </p>
                <time
                  dateTime={new Date(review.created_at).toISOString()}
                  className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                >
                  {new Date(review.created_at).toLocaleDateString()}
                </time>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
