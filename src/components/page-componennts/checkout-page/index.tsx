"use client";
import { addToSet } from "@/api-calls/store-crud-operations/addToSet";
import { useAuthContext } from "@/context/auth-context/AuthContext";
import { useRouter } from "next/navigation";

import { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";

import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";

import {
  isMobile,
  isTablet,
  isDesktop,
  browserName,
  osName,
  engineName,
} from "react-device-detect";

import useNavigation from "@/utils/handleNavigate";
import { fetchData } from "@/api-calls/products/fetchData";
import { userAddToSet } from "@/api-calls/user-crud-operations/addToSet";
type UserLocation = {
  latitude: number;
  longitude: number;
} | null;

type UserInfo = {
  device: string;
  browser: string;
  os: string;
  engine: string;
};

export default function CheckoutPage() {
  const {
    updateItemQuantity,
    removeItem,
    cartTotal,
    totalItems,
    items: products,
  } = useCart();

  const generateOrderNumber = () => {
    // Get the current timestamp
    const timestamp = Date.now();
    // Convert the timestamp to a string and take the last 8 digits
    const orderNumber = timestamp.toString().slice(-8);
    return orderNumber;
  };
  const { user } = useAuthContext();
  const [billing_information, setBillingInformation] = useState<any>({});
  const [shipping_information, setShippingInformation] = useState<any>({});
  const [payment_information, setPaymentInformation] = useState<any>({
    form_of_payment: "card",
  });

  const [inputs, setInputs] = useState({
    delivery_country: "",
    delivery_street_address: "",
    delivery_city: "",
    delivery_region: "",
    delivery_postal_code: "",
    delivery_message: "",
  });

  const calculateTax = (subtotal: number) => {
    return (15 / 100) * subtotal;
  };
  const calculateShipping = (subtotal: number) => {
    return (10 / 100) * subtotal;
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
  const [userLocation, setUserLocation] = useState<UserLocation>(null);
  const { handleQuickNavigate } = useNavigation();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    device: "",
    browser: "",
    os: "",
    engine: "",
  });

  const currentTimestamp: Date = new Date();
  const router = useRouter();
  useEffect(() => {
    // Fetch user location and information using IPinfo API
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(
          `https://ipinfo.io/json?token=${process.env.IPINFO_ACCESS_TOKEN}`
        );
        const data = await response.json();
        setUserLocation(data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    // Set user information using react-device-detect
    setUserInfo({
      device: isMobile
        ? "Mobile"
        : isTablet
        ? "Tablet"
        : isDesktop
        ? "Desktop"
        : "Unknown",
      browser: browserName,
      os: osName,
      engine: engineName,
    });
  }, []);

  const handleBillingInfoChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBillingInformation({ ...billing_information, [name]: value });
  };

  const handlePaymentInfoChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPaymentInformation({
      ...payment_information,
      [name]: value,
    });
  };
  const handleShippingInfoChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setShippingInformation({
      ...shipping_information,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    const id = toast.loading("Placing an order...");
    const res: any = await addToSet(
      products[0]?.store_id,
      user?._id,
      user?.token,
      {
        key_to_update: "orders",
        value_to_update: {
          data_type: "orders",
          products,
          ...inputs,
          cart_total: cartTotal,
          total_items: totalItems,
          customer: {
            name: user?.username,
            email: user?.email,
            _id: user?._id,
            image: user?.image,
          },
          customer_id: user?._id,
          billing_information,
          payment_information,
          shipping_information,
          order_number: `${generateOrderNumber()}`,
          status: "processing",
          user_id: products[0]?.store_id,
          location: userLocation,
          user_info: userInfo,
          created_at: currentTimestamp?.toISOString(),
        },
      }
    );
    if (res.response === "ok") {
      // Saving a customer to the store that is bought from
      await addToSet(products[0]?.store_id, user?._id, user?.token, {
        key_to_update: "customers",
        value_to_update: {
          data_type: "customers",
          name: user?.username,
          email: user?.email,
          _id: user?._id,
          customer_id: user?._id,
          image: user?.image,
          location: userLocation,
          user_id: products[0]?.store_id,
          user_info: userInfo,
          created_at: currentTimestamp?.toISOString(),
        },
      });

      //Retrieving the auto message
      const orderVerificationMessage = await fetchData(
        products[0]?.store_id,
        user?._id,
        user?.token,
        "message_type",
        "auto_message_order_placed",
        "auto_messages",
        "1"
      );
      //if the auto message was retrieved successuflly,
      //save the message to the current users, messages
      await userAddToSet(user._id, user?._id, user?.token, {
        key_to_update: "messages",
        value_to_update: {
          data_type: "messages",
          user_id: user?._id,
          message: orderVerificationMessage?.data?.results[0],
          created_at: currentTimestamp?.toISOString(),
        },
      });
      toast.update(id, {
        render: "New order placed successfully",
        type: "success",
        isLoading: false,
      });
      setTimeout(() => {
        // router.refresh();
        // handleQuickNavigate("/", user);
      }, 3000);
    } else {
      toast.update(id, {
        render: "Failed to place new order",
        type: "error",
        isLoading: false,
      });
    }
    setTimeout(() => {
      toast.dismiss();
    }, 2000);
    console.log(inputs);
  };

  // Thanks for buying at the [store_name]. We are happy
  return (
    <div className=" bg-white">
      <section className="   dark:bg-dark">
        <div className=" ">
          <div>
            <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
              Checkout
            </h2>
            <p className="text-sm font-medium text-body-color dark:text-dark-6"></p>
          </div>
        </div>
      </section>
      <main className="mx-auto w-full pb-16 pt-4   ">
        <h1 className="sr-only">Checkout</h1>
        <div className="mx-auto grid  grid-cols-1 gap-x-8 gap-y-16   lg:grid-cols-3">
          <div className="mx-auto w-full col-span-2 ">
            <h2 className="sr-only">Order summary</h2>

            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {products.map((product) => (
                  <li key={product.id} className="flex space-x-6 py-6">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="h-52  w-52  flex-none rounded-md bg-gray-100 object-cover object-center"
                    />
                    <div className="flex-auto">
                      <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                        <div className="flex-auto space-y-3 text-sm font-medium">
                          <h3 className="text-gray-900">
                            <a
                              href={`${`/industries/quickshop_stores_category/products/view-product/${product?.id}`}`}
                            >
                              {product.name}
                            </a>
                          </h3>
                          <div className="flex justify-between">
                            <p className="text-gray-900 ">${product.price}</p>
                            <p className="text-red-600 ">
                              $ {product.itemTotal}
                            </p>
                          </div>
                          {product?.selected_options && (
                            <div className="  grid items-start   grid-cols-4">
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
                                    <div key={type} className="bg-white">
                                      <h4 className="text-sm  mb-4 font-medium text-gray-900 capitalize">
                                        {type}
                                      </h4>
                                      {type === "color" ? (
                                        <div
                                          key={option?.name}
                                          className="relative flex items-start w-full"
                                        >
                                          <div className="flex items-center  ">
                                            <span
                                              className="w-8 h-8 rounded-md"
                                              style={{
                                                backgroundColor:
                                                  option.name.toLowerCase(),
                                              }}
                                            ></span>
                                          </div>
                                          <label className="ms-3 w-full text-sm text-gray-600 dark:text-neutral-500 flex items-center">
                                            {option.name}
                                          </label>
                                        </div>
                                      ) : (
                                        <div key={option.name} className="">
                                          <div>
                                            <span className="inline-flex items-center gap-x-1.5 py-2 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                                              {option.name}
                                            </span>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          )}
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <p className="mb-3"> Quantity</p>
                              <div className="py-2 px-3 h-fit bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700">
                                <div className="w-full flex justify-between items-center gap-x-3">
                                  <input
                                    className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
                                    type="text"
                                    value={product?.quantity}
                                    min={1}
                                    data-hs-input-number-input=""
                                  />
                                  <div className="flex justify-end items-center gap-x-1.5">
                                    <button
                                      type="button"
                                      disabled={
                                        !product?.quantity ||
                                        product.quantity <= 1
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
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-none space-x-4">
                          <button
                            type="button"
                            className="text-sm font-medium text-blue-500 hover:text-indigo-500"
                          >
                            <IoHeartOutline />
                          </button>
                          <div className="flex border-l border-gray-300 pl-4">
                            <button
                              type="button"
                              onClick={() => removeItem(product?.id)}
                              className="text-sm flex gap-2 items-center font-medium text-blue-500 hover:text-indigo-500"
                            >
                              <RiDeleteBin6Line /> <span>Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

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
          </div>

          <div className="mx-auto w-full max-w-lg">
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-black py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              <span className="sr-only">Pay with Apple Pay</span>
              <svg
                className="h-5 w-auto"
                fill="currentColor"
                viewBox="0 0 50 20"
              >
                <path d="M9.536 2.579c-.571.675-1.485 1.208-2.4 1.132-.113-.914.334-1.884.858-2.484C8.565.533 9.564.038 10.374 0c.095.951-.276 1.884-.838 2.579zm.829 1.313c-1.324-.077-2.457.751-3.085.751-.638 0-1.6-.713-2.647-.694-1.362.019-2.628.79-3.323 2.017-1.429 2.455-.372 6.09 1.009 8.087.676.99 1.485 2.075 2.552 2.036 1.009-.038 1.409-.656 2.628-.656 1.228 0 1.58.656 2.647.637 1.104-.019 1.8-.99 2.475-1.979.771-1.122 1.086-2.217 1.105-2.274-.02-.019-2.133-.828-2.152-3.263-.02-2.036 1.666-3.007 1.742-3.064-.952-1.408-2.437-1.56-2.951-1.598zm7.645-2.76v14.834h2.305v-5.072h3.19c2.913 0 4.96-1.998 4.96-4.89 0-2.893-2.01-4.872-4.885-4.872h-5.57zm2.305 1.941h2.656c2 0 3.142 1.066 3.142 2.94 0 1.875-1.142 2.95-3.151 2.95h-2.647v-5.89zM32.673 16.08c1.448 0 2.79-.733 3.4-1.893h.047v1.779h2.133V8.582c0-2.14-1.714-3.52-4.351-3.52-2.447 0-4.256 1.399-4.323 3.32h2.076c.171-.913 1.018-1.512 2.18-1.512 1.41 0 2.2.656 2.2 1.865v.818l-2.876.171c-2.675.162-4.123 1.256-4.123 3.159 0 1.922 1.495 3.197 3.637 3.197zm.62-1.76c-1.229 0-2.01-.59-2.01-1.494 0-.933.752-1.475 2.19-1.56l2.562-.162v.837c0 1.39-1.181 2.379-2.743 2.379zM41.1 20c2.247 0 3.304-.856 4.227-3.454l4.047-11.341h-2.342l-2.714 8.763h-.047l-2.714-8.763h-2.409l3.904 10.799-.21.656c-.352 1.114-.923 1.542-1.942 1.542-.18 0-.533-.02-.676-.038v1.779c.133.038.705.057.876.057z" />
              </svg>
            </button>

            <div className="relative mt-8">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-sm font-medium text-gray-500">
                  or
                </span>
              </div>
            </div>

            <div className="  divide-y divide-gray-200 border-b   py-3 border-gray-200">
              <div className="hs-accordion-group">
                <div
                  className="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
                  id="hs-active-bordered-heading-one"
                >
                  <button
                    className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                    aria-expanded="false"
                    aria-controls="hs-basic-active-bordered-collapse-one"
                  >
                    Payment details
                    <svg
                      className="hs-accordion-active:hidden block size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                    </svg>
                  </button>
                  <div
                    id="hs-basic-active-bordered-collapse-one"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    role="region"
                    aria-labelledby="hs-active-bordered-heading-one"
                  >
                    <div className="pb-4 px-5">
                      <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
                        <label
                          htmlFor="af-payment-payment-method"
                          className="inline-block text-sm font-medium dark:text-white"
                        >
                          Payment method
                        </label>

                        <div className="mt-2 space-y-3">
                          <input
                            id="af-payment-payment-method"
                            type="text"
                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Name on Card"
                            name="name_on_card"
                            value={payment_information?.name_on_card}
                            onChange={handlePaymentInfoChange}
                            required
                          />
                          <input
                            type="text"
                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Card Number"
                            name="card_number"
                            value={payment_information?.card_number}
                            onChange={handlePaymentInfoChange}
                            required
                          />
                          <div className="grid sm:flex gap-3">
                            <input
                              type="text"
                              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                              placeholder="Expiration Date"
                              name="expiration_date"
                              value={payment_information?.expiration_date}
                              onChange={handlePaymentInfoChange}
                              required
                            />
                            <input
                              type="text"
                              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                              placeholder="CVV Code"
                              name="cvv_code"
                              value={payment_information?.cvv_code}
                              onChange={handlePaymentInfoChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="hs-accordion hs-accordion-active:border-gray-200 active bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
                  id="hs-active-bordered-heading-two"
                >
                  <button
                    className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                    aria-expanded="true"
                    aria-controls="hs-basic-active-bordered-collapse-two"
                  >
                    Shipping address
                    <svg
                      className="hs-accordion-active:hidden block size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                    </svg>
                  </button>
                  <div
                    id="hs-basic-active-bordered-collapse-two"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                    role="region"
                    aria-labelledby="hs-active-bordered-heading-two"
                  >
                    <div className="pb-4 px-5">
                      <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
                        <div className="mt-2 space-y-3">
                          <input
                            id="af-payment-billing-address"
                            type="text"
                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Street Address"
                            name="street_address"
                            value={shipping_information?.street_address}
                            onChange={handleShippingInfoChange}
                            required
                          />
                          <input
                            type="text"
                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Apt, Syuite, Building (Optional)"
                            name="apartment"
                            value={shipping_information?.apartment}
                            onChange={handleShippingInfoChange}
                          />
                          <div className="grid sm:flex gap-3">
                            <input
                              type="text"
                              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                              placeholder="Postal Code"
                              name="postal_code"
                              value={shipping_information?.postal_code}
                              onChange={handleShippingInfoChange}
                              required
                            />
                            <input
                              type="text"
                              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                              placeholder="City"
                              name="city"
                              value={shipping_information?.city}
                              onChange={handleShippingInfoChange}
                              required
                            />
                            <input
                              type="text"
                              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                              placeholder="State"
                              name="state"
                              value={shipping_information?.state}
                              onChange={handleShippingInfoChange}
                              required
                            />
                          </div>
                          <div className="mt-2">
                            <select
                              id="country"
                              name="country"
                              value={shipping_information?.delivery_country}
                              onChange={handleShippingInfoChange}
                              autoComplete="country-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                            >
                              <option value="United States">
                                United States
                              </option>
                              <option value="Canada">Canada</option>
                              <option value="South Africa">South Africa</option>
                              <option value="Ukraine">Ukraine</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
                  id="hs-active-bordered-heading-three"
                >
                  <button
                    className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                    aria-expanded="false"
                    aria-controls="hs-basic-active-bordered-collapse-three"
                  >
                    Billing Information
                    <svg
                      className="hs-accordion-active:hidden block size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                    </svg>
                  </button>
                  <div
                    id="hs-basic-active-bordered-collapse-three"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    role="region"
                    aria-labelledby="hs-active-bordered-heading-three"
                  >
                    <div className="pb-4 px-5">
                      <div className="  mx-auto">
                        <form className="space-y-6">
                          <div className="py-6 first:pt-0 mt-4 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
                            <label
                              htmlFor="af-payment-billing-contact"
                              className="inline-block text-sm font-medium dark:text-white"
                            >
                              Billing contact
                            </label>

                            <div className="mt-2 space-y-3">
                              <input
                                id="af-payment-billing-contact"
                                type="text"
                                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                placeholder="First Name"
                                name="first_name"
                                value={billing_information?.first_name}
                                onChange={handleBillingInfoChange}
                                required
                              />
                              <input
                                type="text"
                                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                placeholder="Last Name"
                                name="last_name"
                                value={billing_information?.last_name}
                                onChange={handleBillingInfoChange}
                                required
                              />
                              <input
                                type="text"
                                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                placeholder="Phone Number"
                                name="phone_number"
                                value={billing_information?.phone_number}
                                onChange={handleBillingInfoChange}
                              />
                            </div>
                          </div>

                          <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
                            <label
                              htmlFor="af-payment-billing-address"
                              className="inline-block text-sm font-medium dark:text-white"
                            >
                              Billing address
                            </label>

                            <div className="mt-2 space-y-3">
                              <input
                                id="af-payment-billing-address"
                                type="text"
                                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                placeholder="Street Address"
                                name="street_address"
                                value={billing_information?.street_address}
                                onChange={handleBillingInfoChange}
                                required
                              />
                              <input
                                type="text"
                                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                placeholder="Apt, Syuite, Building (Optional)"
                                name="apartment"
                                value={billing_information?.apartment}
                                onChange={handleBillingInfoChange}
                              />
                              <div className="grid sm:flex gap-3">
                                <input
                                  type="text"
                                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                  placeholder="Postal Code"
                                  name="postal_code"
                                  value={billing_information?.postal_code}
                                  onChange={handleBillingInfoChange}
                                  required
                                />
                                <input
                                  type="text"
                                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                  placeholder="City"
                                  name="city"
                                  value={billing_information?.city}
                                  onChange={handleBillingInfoChange}
                                  required
                                />
                                <input
                                  type="text"
                                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                  placeholder="State"
                                  name="state"
                                  value={billing_information?.state}
                                  onChange={handleBillingInfoChange}
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>

            <div className="mt-6">
              <div className="space-y-4">
                <div className="sm:col-span-2">
                  <div className="mt-4">
                    <label
                      htmlFor="hs-about-contacts-1"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Additional Message
                    </label>
                    <textarea
                      id="hs-about-contacts-1"
                      name="hs-about-contacts-1"
                      value={inputs?.delivery_message}
                      onChange={(e) =>
                        setInputs((prevState) => ({
                          ...prevState,
                          delivery_message: e.target.value,
                        }))
                      }
                      rows={4}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    ></textarea>
                  </div>
                  <div className="mt-6 flex space-x-2">
                    <div className="flex h-5 items-center">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        checked
                        className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-indigo-500"
                      />
                    </div>
                    <label htmlFor="terms" className="text-sm text-gray-500">
                      I have read the terms and conditions
                    </label>
                  </div>

                  <button
                    onClick={() => handleSubmit()}
                    className="py-2 justify-center mt-3 px-4 w-full flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-800 text-gray-800 hover:text-white hover:bg-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <p className="w-fit ">Make Payment</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
