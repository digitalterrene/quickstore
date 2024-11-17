"use client";
import { RiDeleteBin6Line } from "react-icons/ri";

import { useCart } from "react-use-cart";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import useNavigation from "@/utils/handleNavigate";
import { useAuthContext } from "@/context/auth-context/AuthContext";

const relatedProducts = [
  {
    id: 1,
    name: "Billfold Wallet",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-related-product-01.jpg",
    imageAlt: "Front of Billfold Wallet in natural leather.",
    price: "$118",
    color: "Natural",
  },
  // More products...
];

export default function ShoppingCartPage() {
  const {
    isEmpty,
    items: products,
    removeItem,
    cartTotal,
    updateItemQuantity,
    emptyCart,
  } = useCart();
  const calculateShipping = (subtotal: number) => {
    return (10 / 100) * subtotal;
  };
  const { user } = useAuthContext();
  const { handleQuickNavigate } = useNavigation();
  const calculateTax = (subtotal: number) => {
    return (15 / 100) * subtotal;
  };

  const calculateOrderTotal = (
    subtotal: number,
    shipping: number,
    tax: number
  ) => {
    return subtotal + shipping + tax;
  };
  const shippingTotal = calculateShipping(cartTotal);
  const taxTotal = calculateTax(cartTotal);
  const orderTotal = calculateOrderTotal(cartTotal, shippingTotal, taxTotal);
  return (
    <div className="bg-white">
      <main className="mx-auto w-full space-y-6  px-4 pb-24 ">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <div className=" flex justify-end">
          <button
            type="button"
            disabled={isEmpty}
            onClick={() => emptyCart()}
            className="py-1.5 w-fit ml-auto px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
          >
            Clear Cart
            <RiDeleteBin6Line className="text-md" />
          </button>
        </div>

        <div className="  lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul
              role="list"
              className="divide-y divide-gray-200 border-b  border-gray-200"
            >
              {products.map((product, productIdx) => (
                <li key={product.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                    />
                  </div>

                  <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className=" ">
                      <div className="flex justify-between  ">
                        <div className="pr-6 max-w-52">
                          <a
                            href={`/industries/quickshop_stores_category/products/view-product/${product?.id}`}
                            className="font-medium  text-ellipsis text-gray-700 hover:text-gray-800  "
                          >
                            {product.name}
                          </a>
                          <p className="text-gray-400 font-bold">
                            {" "}
                            $ {product.price}
                          </p>

                          {product.inStock ? (
                            <p className="text-green-500">Available</p>
                          ) : (
                            <p className="text-red-500">Out of stock</p>
                          )}
                        </div>
                        <div className="flex items-start gap-2">
                          <p className="text-right text-sm font-medium text-gray-900">
                            ${product?.itemTotal}
                          </p>
                          <button
                            type="button"
                            onClick={() => removeItem(product?.id)}
                            className="p-2 text-lg  inline-flex items-center gap-x-2  font-semibold rounded-lg border border-transparent bg-red-100 text-red-500 hover:bg-red-200 disabled:opacity-50 disabled:pointer-events-none   "
                          >
                            <RiDeleteBin6Line />
                          </button>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center sm:absolute sm:left-1/2 sm:top-0 sm:mt-0 sm:block">
                        <label
                          htmlFor={`quantity-${productIdx}`}
                          className="sr-only"
                        >
                          Quantity, {product.name}
                        </label>
                        <div className="flex border p-1.5 rounded-lg items-center gap-x-1.5">
                          <button
                            type="button"
                            disabled={
                              !product?.quantity || product.quantity <= 1
                            }
                            onClick={() =>
                              product?.quantity &&
                              updateItemQuantity(
                                product.id,
                                product.quantity - 1
                              )
                            }
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                            data-hs-input-number-decrement=""
                          >
                            <AiOutlineMinus className="" />
                          </button>
                          <input
                            className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
                            type="text"
                            value={product?.quantity}
                            data-hs-input-number-input=""
                          />
                          <button
                            type="button"
                            onClick={() =>
                              product?.quantity &&
                              updateItemQuantity(
                                product.id,
                                product.quantity + 1
                              )
                            }
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                            data-hs-input-number-increment=""
                          >
                            <AiOutlinePlus className="" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-4 text-sm text-gray-700">
                        <div className="w-full">
                          {product?.selected_options && (
                            <div className="items-start grid grid-cols-4 gap-3 ">
                              {Object.entries(product.selected_options).map(
                                ([type, item]) => {
                                  const option = item as {
                                    data_type: string;
                                    label: string;
                                    name: string;
                                    description: string;
                                    image: string;
                                    icon: string;
                                  };

                                  return (
                                    <>
                                      {option?.name && (
                                        <div key={type} className="">
                                          <h4 className="text-sm mb-4 font-medium text-gray-900 capitalize">
                                            {type}
                                          </h4>
                                          {type === "color" ? (
                                            <div
                                              key={option?.name}
                                              className="relative flex items-start w-full"
                                            >
                                              <div className="flex items-center">
                                                <span
                                                  className="w-8 h-8 rounded-md"
                                                  style={{
                                                    backgroundColor:
                                                      option?.name?.toLowerCase(),
                                                  }}
                                                ></span>
                                              </div>
                                              <label className="ms-3 w-full text-sm text-gray-600 dark:text-neutral-500 flex items-center">
                                                {option.name}
                                              </label>
                                            </div>
                                          ) : (
                                            <>
                                              {option?.name && (
                                                <div
                                                  key={option.name}
                                                  className=""
                                                >
                                                  <div>
                                                    <span className="inline-flex items-center gap-x-1.5 py-2 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                                                      {option.name}
                                                    </span>
                                                  </div>
                                                </div>
                                              )}
                                            </>
                                          )}
                                        </div>
                                      )}
                                    </>
                                  );
                                }
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <div className="  w-full col-span-5 ">
            <div className="rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8">
              <h2 className="sr-only">Order summary</h2>

              <div className="flow-root">
                <dl className="-my-4 divide-y divide-gray-200 text-sm">
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-gray-600">Subtotal</dt>
                    <dd className="font-medium text-gray-900">
                      ${cartTotal.toFixed(2)}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-gray-600">Shipping</dt>
                    <dd className="font-medium text-gray-900">
                      ${shippingTotal.toFixed(2)}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-gray-600">Tax</dt>
                    <dd className="font-medium text-gray-900">
                      ${taxTotal.toFixed(2)}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-base font-medium text-gray-900">
                      Order total
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ${orderTotal.toFixed(2)}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                onClick={() => handleQuickNavigate("shopping/checkout", user)}
                className="w-full rounded-md border border-transparent bg-gray-800 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Go to checkout
              </button>
            </div>
          </div>
        </div>

        {/* Related products */}
        <section aria-labelledby="related-heading" className="mt-24">
          <h2
            id="related-heading"
            className="text-lg font-medium text-gray-900"
          >
            You may also like&hellip;
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={relatedProduct.imageSrc}
                    alt={relatedProduct.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={relatedProduct.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {relatedProduct.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {relatedProduct.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {relatedProduct.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
