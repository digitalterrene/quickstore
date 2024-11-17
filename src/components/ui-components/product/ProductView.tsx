"use client";
import { useState } from "react";
import { placeholderVariations } from "@/data/products";
import ProductReviews from "./ProductReviews";
import { useCart } from "react-use-cart";
import ProductCardBasic from "./ProductCardBasic";
import useNavigation from "@/utils/handleNavigate";
import { useAuthContext } from "@/context/auth-context/AuthContext";
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { addToSet } from "@/api-calls/user-crud-operations/addToSet";
import { useRouter } from "next/navigation";
import { splitDescriptionIntoParagraphs } from "@/utils/splitDescriptionIntoParagraphs";

type Variation = {
  data_type: string;
  label: string;
  name: string;
  description: string;
  image: string;
  icon: JSX.Element;
};

type GroupedVariations = {
  [key: string]: Variation[];
};
export default function ProductView({
  product,
  product_reviews,
  related_products,
}: any) {
  const { user } = useAuthContext();
  const { updateItemQuantity, inCart, getItem, addItem } = useCart();
  const item = getItem(product?._id);
  const [productQuantity, setProductQuantity] = useState(1);
  console.log({ product: product });
  const [selectedImage, setSelectedImage] = useState(
    product?.image || product?.productImage || ""
  );
  const [selectedOptions, setSelectedOptions] = useState<any>({});
  const handleChange = (type: string, value: any) => {
    setSelectedOptions((prev: any) => ({ ...prev, [type]: value }));
  };
  const groupVariations = (variations: any): GroupedVariations => {
    // Ensure variations is an array, defaulting to an empty array if not
    const validVariations = Array.isArray(variations) ? variations : [];

    return validVariations.reduce(
      (acc: GroupedVariations, variation: Variation) => {
        if (!acc[variation.data_type]) {
          acc[variation.data_type] = [];
        }
        acc[variation.data_type].push(variation);
        return acc;
      },
      {}
    );
  };
  // const groupVariations = (variations: any): GroupedVariations => {
  //   // Ensure variations is an array, defaulting to an empty array if not
  //   const outerVariations = Array.isArray(variations) ? variations : [];

  //   // Check if the first item in outerVariations contains inner variations (as an object)
  //   const innerVariations = outerVariations[0]?.variations
  //     ? outerVariations[0].variations
  //     : [];

  //   // Combine both outer and inner variations
  //   const allVariations = [...outerVariations, ...innerVariations];

  //   // Now reduce over the combined variations to group them by data_type
  //   return allVariations.reduce(
  //     (acc: GroupedVariations, variation: Variation) => {
  //       if (!acc[variation.data_type]) {
  //         acc[variation.data_type] = [];
  //       }
  //       acc[variation.data_type].push(variation);
  //       return acc;
  //     },
  //     {}
  //   );
  // };

  const actual_images = product?.images;
  const palceholder_images = [];
  const images = actual_images || [];
  // const groupedVariations = groupVariations(
  //   product?.variations || placeholderVariations
  // );
  const groupedVariations = groupVariations(
    // Check if `product?.variations` is an array or object with nested variations
    Array.isArray(product?.variations)
      ? [...product.variations, ...(product.variations[0]?.variations || [])] // Merge outer and inner variations
      : placeholderVariations // If `product.variations` is not an array, fallback to `placeholderVariations`
  );

  // const productAttributes = Array.isArray(product?.attributes)
  //   ? product.attributes
  //   : [];
  const productAttributes = Array.isArray(product?.attributes)
    ? [...product.attributes, ...(product?.attributes[0]?.attributes || [])] // Combine outer and inner attributes
    : Array.isArray(product?.attributes?.attributes)
    ? [...product.attributes.attributes] // Handle when attributes are nested in the object
    : [];

  console.log({ productAttributes, attributes: product?.attributes });
  const currentTimestamp: Date = new Date();
  const { handleQuickNavigate } = useNavigation();
  const router = useRouter();
  const handleAddToWishlistSubmit = async () => {
    const id = toast.loading("Adding item to wishlist...");
    const res: any = await addToSet(user._id, user?._id, user?.token, {
      key_to_update: "wishlist",
      value_to_update: {
        data_type: "wishlist",
        user_id: user?._id,
        product,
        created_at: currentTimestamp?.toISOString(),
      },
    });
    if (res.response === "ok") {
      toast.update(id, {
        render: "New wishlist item added successfully",
        type: "success",
        isLoading: false,
      });
      setTimeout(() => {
        router.refresh();
        handleQuickNavigate("/", user);
      }, 3000);
    } else {
      toast.update(id, {
        render: "Failed to add item to wishlist",
        type: "error",
        isLoading: false,
      });
    }
    setTimeout(() => {
      toast.dismiss();
    }, 2000);
  };
  return (
    <div>
      <ToastContainer />
      <div className="p-8">
        <div className="mt-2 md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              View Product
            </h2>
          </div>
          <div className="inline-flex rounded-lg shadow-sm">
            <button
              type="button"
              onClick={() => {
                location.href = `/stores/${product?.user_id}/products/${product?._id}`;
              }}
              className="py-2 px-3 hover:bg-blue-500 hover:text-white inline-flex justify-center items-center gap-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              Visit In Store
            </button>
            <button
              type="button"
              onClick={() => {
                location.href = `/stores/${product?.user_id}`;
              }}
              className="py-2 px-3 hover:bg-blue-500 hover:text-white inline-flex justify-center items-center gap-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              Visit Store
            </button>
            <button
              type="button"
              onClick={() => {
                location.href = "/";
              }}
              className="py-2 px-3 inline-flex hover:bg-blue-500 hover:text-white  justify-center items-center gap-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              Goto Home
            </button>
          </div>
        </div>
      </div>
      <div className="mt-3 w-full text-center flex gap-8 sm:mt-0 px-10 sm:text-left">
        <div className="flex gap-6 items-start">
          <div className="space-y-3 w-16 max-sm:w-12 max-sm:flex max-sm:mb-4 max-sm:gap-4">
            {[product?.image, product?.productImage, ...images].map(
              (image: string, i: number) => (
                <div
                  onClick={() => setSelectedImage(image)}
                  className="cursor-pointer "
                  key={i}
                >
                  <img
                    src={image}
                    alt={`Product ${i + 1}`}
                    className={`w-full cursor-pointer rounded-md border-2 ${
                      selectedImage === image ? "border-blue-600" : ""
                    } `}
                  />
                </div>
              )
            )}
          </div>
          <img
            src={selectedImage || "/images/products/red-tshirt.webp"}
            alt={product?.imageAlt}
            className="object-cover rounded-lg shadow-lg w-[600px] h-[620px] object-center"
          />
        </div>
        <div className="sm:col-span-8 w-1/2 lg:col-span-7">
          <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
            {product?.name || product?.productNameEn}
          </h2>

          <section aria-labelledby="information-heading" className="space-y-4 ">
            <h3 id="information-heading" className="sr-only">
              Product information
            </h3>

            <p className="text-base text-gray-900">
              {product?.tagline || "descriptiom"}
            </p>
            <p className="text-2xl text-gray-900">
              ${product?.price || product?.sellPrice || 0}
            </p>
          </section>

          <section aria-labelledby="options-heading" className="mt-4">
            <h3 id="options-heading" className="sr-only">
              Product options
            </h3>

            <div className="space-y-6">
              {/* Colors */}
              <div className="space-y-6">
                {Object.entries(groupedVariations).map(([type, variations]) => (
                  <div key={type}>
                    <h4 className="text-sm mb-3 font-medium text-gray-900 capitalize">
                      {type}
                    </h4>
                    {type === "color" ? (
                      <ul className="w-full flex flex-col">
                        {variations.map((item) => (
                          <li
                            key={item.name}
                            className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white  text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
                          >
                            <div className="relative flex items-start w-full">
                              <div className="flex items-center h-5">
                                <input
                                  id={`${type}-${item.name}`}
                                  name={type}
                                  type="radio"
                                  className="border-gray-200 rounded-full disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  checked={
                                    selectedOptions[type]?.name === item.name
                                  }
                                  onChange={() => handleChange(type, item)}
                                />
                              </div>
                              <label
                                htmlFor={`${type}-${item.name}`}
                                className="ms-3   w-full text-sm text-gray-600 dark:text-neutral-500 flex items-center"
                              >
                                <span className="me-2">{item.icon}</span>
                                {item.name}
                              </label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div
                        className={`grid sm:grid-cols-${variations.length} gap-2`}
                      >
                        {variations.map((item) => (
                          <label
                            key={item.name}
                            htmlFor={`${type}-${item.name}`}
                            className={`flex p-3 w-full bg-white border ${
                              selectedOptions[type]?.name === item.name
                                ? "border-blue-500"
                                : "border-gray-200"
                            } rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400`}
                          >
                            <input
                              type="radio"
                              name={type}
                              id={`${type}-${item.name}`}
                              className={`shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 ${
                                selectedOptions[type]?.name === item.name
                                  ? "dark:checked:bg-blue-500 dark:checked:border-blue-500"
                                  : ""
                              }`}
                              checked={
                                selectedOptions[type]?.name === item.name
                              }
                              onChange={() => handleChange(type, item)}
                            />
                            <span className="ms-3 text-sm text-gray-500 dark:text-neutral-400 flex items-center">
                              {item.name}
                            </span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="  grid grid-cols-3 gap-6">
                {inCart(item?.id) && (
                  <div
                    className="py-2 px-3 h-fit bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700"
                    data-hs-input-number='{
                      "max": 10
                    }'
                  >
                    <div className="w-full flex justify-between items-center gap-x-3">
                      <input
                        className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
                        type="text"
                        value={item?.quantity}
                        min={1}
                        data-hs-input-number-input=""
                      />
                      <div className="flex justify-end items-center gap-x-1.5">
                        <button
                          type="button"
                          disabled={item?.quantity <= 1}
                          onClick={() =>
                            updateItemQuantity(item?.id, item.quantity - 1)
                          }
                          className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                          data-hs-input-number-decrement=""
                        >
                          <AiOutlineMinus className="" />
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            updateItemQuantity(item?.id, item.quantity + 1)
                          }
                          className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                          data-hs-input-number-increment=""
                        >
                          <AiOutlinePlus className="" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                <button
                  type="button"
                  disabled={!product?._id}
                  onClick={() =>
                    addItem({
                      id: product?._id,
                      image: product?.image || product?.productImage,
                      name:
                        product?.name ||
                        product?.tagline ||
                        "unititiled product",
                      price: product?.price || product?.sellPrice,
                      description: product?.tagline,
                      selected_options: selectedOptions,
                      quantity: productQuantity,
                      customer_id: user?._id,
                      store_id: product?.user_id,
                    })
                  }
                  className="py-2 justify-center px-4  flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <p className="w-fit ">Add to cart</p>
                </button>
                <button
                  type="button"
                  onClick={() => handleAddToWishlistSubmit()}
                  className="py-2 gap-6 px-4 flex items-center justify-between gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                >
                  Add to wishlist
                  <IoHeartOutline className="text-2xl" />
                </button>
              </div>
              <button
                onClick={() => handleQuickNavigate("shopping/checkout", user)}
                className="py-2 justify-center px-4 w-full flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-800 text-gray-800 hover:text-white hover:bg-gray-800 disabled:opacity-50 disabled:pointer-events-none"
              >
                <p className="w-fit ">Proceed To Checkout</p>
              </button>
            </div>
          </section>
        </div>
      </div>
      <div className="mt-12 max-w-[90%] mx-auto p-24 px-10">
        <div className="border-b border-gray-200 dark:border-neutral-700">
          <nav className="flex space-x-1" aria-label="Tabs" role="tablist">
            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 active"
              id="tabs-with-underline-item-1"
              data-hs-tab="#tabs-with-underline-1"
              aria-controls="tabs-with-underline-1"
              role="tab"
            >
              Description
            </button>
            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500"
              id="tabs-with-underline-item-2"
              data-hs-tab="#tabs-with-underline-2"
              aria-controls="tabs-with-underline-2"
              role="tab"
            >
              Features
            </button>
            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500"
              id="tabs-with-underline-item-3"
              data-hs-tab="#tabs-with-underline-3"
              aria-controls="tabs-with-underline-3"
              role="tab"
            >
              Reviews
            </button>
          </nav>
        </div>

        <div className="mt-3 ">
          <div
            id="tabs-with-underline-1"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-1"
          >
            {splitDescriptionIntoParagraphs(
              product?.description || "Long Description"
            ).map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
          <div
            id="tabs-with-underline-2"
            className="hidden"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {productAttributes?.map((feature: any) => (
                <div
                  key={feature.name}
                  className="border p-3 rounded-lg h-fit border-gray-200 pt-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="">
                      <div className="flex items-start gap-3">
                        <img
                          src={feature.icon}
                          className="w-12 h-12 rounded-lg"
                        />
                        <dt className="font-medium text-gray-900">
                          {feature.name}
                        </dt>
                      </div>
                      <div className="h-28 w-full">
                        <dd className="mt-2 text-sm text-gray-500 line-clamp-6">
                          {feature.description}
                        </dd>
                      </div>
                      <img
                        src={feature.image}
                        className="mt-2 w-full h-48 object-cover object-center rounded-lg"
                        alt={feature.name}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Reviews Tab */}
          <div
            id="tabs-with-underline-3"
            className="hidden"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-3"
          >
            <div className=" ">
              <ProductReviews
                product_id={product?._id}
                product_reviews={product_reviews}
                user_id={product?.user_id}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-6  gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {related_products?.results?.map((product: any) => (
          <ProductCardBasic key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
