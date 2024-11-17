"use client";
import { BsCart4 } from "react-icons/bs";
import("flowbite");
import React, { useEffect } from "react";
import { IoChevronDown, IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut, IoIosLogIn } from "react-icons/io";
import { useAuthContext } from "@/context/auth-context/AuthContext";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import useNavigation from "@/utils/handleNavigate";
import ShoppingCart from "./orders/ShoppingCart";
import { HiOutlineMenu, HiOutlineMenuAlt3 } from "react-icons/hi";
import { useSidebarStates } from "@/context/global";
import { useCart } from "react-use-cart";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const { user } = useAuthContext() || { user: null };
  const { handleQuickNavigate } = useNavigation();
  useEffect(() => {
    import("preline");
  }, []);
  const { showSidebar, toggleShowSidebar } = useSidebarStates();
  const { totalItems } = useCart();
  const { router } = useRouter();

  const handleSignout = () => {
    localStorage?.clear();
    setTimeout(() => {
      location.href = "/";
    }, 2000);
  };
  return (
    <nav className="fixed top-0 z-[999] w-full bg-[#131921]  border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3  lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              type="button"
              className="text-gray-500 lg:hidden hover:text-gray-600"
              data-hs-overlay="#docs-sidebar"
              aria-controls="docs-sidebar"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>{" "}
            <a href="/" className="flex ms-2 md:me-24">
              <img
                src="/branding/logo.png"
                className="h-10 me-3"
                alt="Quickshop Stores Logo"
              />
            </a>
          </div>
          <button
            type="button"
            onClick={() => toggleShowSidebar()}
            className="flex flex-shrink-0 justify-center items-center gap-2 p-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            {!showSidebar ? (
              <HiOutlineMenu className="text-xl" />
            ) : (
              <HiOutlineMenuAlt3 className="text-xl" />
            )}
          </button>
          <div className="relative ">
            <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:px-3 md:py-6">
              <button
                type="button"
                className="flex items-center gap-4 w-40 text-white   hover:text-blue-600 font-medium dark:text-neutral-200 dark:hover:text-neutral-500"
              >
                <span>Product Range</span>
                <IoChevronDown />
              </button>

              <div className="hs-dropdown-menu transition-[opacity,margin] left-0 mr-10 right-10 duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-[705px] lg:w-[1165px] border hidden z-10 top-full end-0 overflow-hidden bg-white md:shadow-2xl rounded-lg dark:bg-neutral-800 dark:divide-neutral-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                <div className="grid grid-cols-2 md:grid-cols-12 ">
                  <div className="md:col-span-3">
                    <div className="flex flex-col py-6 px-3 md:px-6">
                      <div className="space-y-2">
                        <span className="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                          Affordable Products
                        </span>

                        <a
                          className="flex gap-x-4 items-center text-gray-800 hover:text-blue-600 dark:text-neutral-200"
                          href="#"
                        >
                          <img
                            className="w-10  "
                            src="./images/mega-menu/Computer & Office.png"
                          />
                          <div className="grow">
                            <p>Computer & Office</p>
                          </div>
                        </a>

                        <a
                          className="flex gap-x-4 items-center text-gray-800 hover:text-blue-600 dark:text-neutral-200"
                          href="#"
                        >
                          <img
                            className="w-10  "
                            src="./images/mega-menu/Bags & Shoes.png"
                          />
                          <div className="grow">
                            <p>Bags & Shoes</p>
                          </div>
                        </a>

                        <a
                          className="flex gap-x-4 items-center text-gray-800 hover:text-blue-600 dark:text-neutral-200"
                          href="#"
                        >
                          <img
                            className="w-10  "
                            src="./images/mega-menu/Sports & Outdoors.png"
                          />
                          <div className="grow">
                            <p>Sports & Outdoors</p>
                          </div>
                        </a>

                        <a
                          className="flex gap-x-4 items-center text-gray-800 hover:text-blue-600 dark:text-neutral-200"
                          href="#"
                        >
                          <img
                            className="w-10  "
                            src="./images/mega-menu/Home, Garden & Furniture.png"
                          />
                          <div className="grow">
                            <p>Home, Garden & Furniture</p>
                          </div>
                        </a>
                      </div>
                      <div className="space-y-2  mt-6 ">
                        <span className="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                          Top Sellers
                        </span>

                        <a
                          className="flex gap-x-4 items-center text-gray-800 hover:text-blue-600 dark:text-neutral-200"
                          href="#"
                        >
                          <img
                            className="w-10  "
                            src="./images/mega-menu/Automobiles & Motorcycles.png"
                          />
                          <div className="grow">
                            <p>Automobiles & Motorcycles</p>
                          </div>
                        </a>

                        <a
                          className="flex gap-x-4 items-center text-gray-800 hover:text-blue-600 dark:text-neutral-200"
                          href="#"
                        >
                          <img
                            className="w-10  "
                            src="./images/mega-menu/Toys Kids & Babies.png"
                          />
                          <div className="grow">
                            <p>Toys, Kids & Babies</p>
                          </div>
                        </a>

                        <a
                          className="flex gap-x-4 items-center text-gray-800 hover:text-blue-600 dark:text-neutral-200"
                          href="#"
                        >
                          <img
                            className="w-10  "
                            src="./images/mega-menu/Phones & Accessories.png"
                          />
                          <div className="grow">
                            <p>Phones & Accessories</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-full md:col-span-9 ">
                    <div className="flex flex-col border-l bg-gray-50 p-4 space-y-5 dark:bg-neutral-700">
                      <span className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                        Recommendations
                      </span>
                      <div className="grid grid-cols-3   gap-4">
                        <a
                          className="p-3 shadow border bg-white   rounded-lg group"
                          href="#"
                        >
                          <div className="  aspect-h-9">
                            <img
                              className="w-full  h-44 object-bottom object-cover rounded-lg"
                              src="/images/mega-menu/Smart Gadgets.jpg"
                              alt="Smart Gadgets"
                            />
                          </div>
                          <div className="p-2  ">
                            <p className="text-gray-800 font-bold text-lg dark:text-neutral-200">
                              Smart Gadgets
                            </p>
                            <p className="text-gray-800  line-clamp-2 dark:text-neutral-200">
                              Discover the latest gadgets and tech innovations
                              that are revolutionizing the market.
                            </p>
                            <p className="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-400 dark:hover:text-blue-500">
                              Shop Products
                              <svg
                                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
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
                                <path d="m9 18 6-6-6-6" />
                              </svg>
                            </p>
                          </div>
                        </a>

                        <a
                          className="p-3 shadow border bg-white   rounded-lg group"
                          href="#"
                        >
                          <div className="  aspect-h-9">
                            <img
                              className="w-full  h-44 object-bottom object-cover rounded-lg"
                              src="/images/mega-menu/Pet Products.jpg"
                              alt="Pet Products"
                            />
                          </div>
                          <div className="p-2">
                            <p className="text-gray-800 font-bold text-lg dark:text-neutral-200">
                              Pet Products
                            </p>
                            <p className="text-gray-800 line-clamp-2 dark:text-neutral-200">
                              Handpicked selections from our pet-care experts,
                              ensuring you get the best quality and value.
                            </p>
                            <p className="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-400 dark:hover:text-blue-500">
                              Shop Products
                              <svg
                                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
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
                                <path d="m9 18 6-6-6-6" />
                              </svg>
                            </p>
                          </div>
                        </a>
                        <a
                          className="p-3 shadow border bg-white   rounded-lg group"
                          href="#"
                        >
                          <div className="  aspect-h-9">
                            <img
                              className="w-full  h-44 object-bottom object-cover rounded-lg"
                              src="/images/mega-menu/Home Audio & Video.jpg"
                              alt="Home Audio & Video"
                            />
                          </div>
                          <div className="p-2">
                            <p className="text-gray-800 font-bold text-lg dark:text-neutral-200">
                              Home Audio & Video
                            </p>
                            <p className="text-gray-800 line-clamp-2 dark:text-neutral-200">
                              Tried and trusted by our customers, these
                              electronics are sure to impress.
                            </p>
                            <p className="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-400 dark:hover:text-blue-500">
                              Shop Products
                              <svg
                                className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
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
                                <path d="m9 18 6-6-6-6" />
                              </svg>
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="grid grid-cols-4 gap-3">
                        {[
                          { name: "Office & School Supplies", link: "#" },
                          { name: "Kitchen, Dining & Bar", link: "#" },
                          { name: "Tools, Maintenance & Care", link: "#" },
                          { name: "Other Sports Equipment", link: "#" },
                        ]?.map((category, i) => (
                          <a
                            href={category?.link}
                            key={i}
                            className="flex flex-col bg-white text-sm border border-gray-200 shadow-sm rounded-xl p-3 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                          >
                            {category?.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  Product Range dropdown starts here*/}

          {/* Product Range dropdown ends here*/}
          <form className="w-2/3">
            <div className="flex">
              <label
                htmlFor="search-dropdown"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Available Regions
              </label>
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-blue-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                type="button"
              >
                All Regions
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdown"
                className="z-[999] hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      United States
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      United Kingdom
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      South Africa
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      New Zealand
                    </button>
                  </li>
                </ul>
              </div>
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Search electronics, stores, fashion..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
          <div className="flex items-center">
            <div className="flex gap-4 items-center ms-3">
              {/* <div>
                  <button className="relative inline-flex flex-shrink-0 justify-center hover:text-cyan-400 items-center   rounded-md font-medium   text-gray-700 shadow-sm align-middle  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                    <BsCart4 className="text-2xl" />
                    <span className="absolute top-0 right-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-rose-500 bg-blue-500 text-white">
                      0
                    </span>
                  </button>
                </div>{" "} */}

              {/* <!-- drawer init and toggle --> */}

              {/* <!-- drawer component --> */}

              {/* Offcanvas starts here  */}
              <button
                data-hs-overlay="#hs-overlay-right"
                className="relative inline-flex flex-shrink-0 justify-center text-white hover:text-cyan-400 items-center   rounded-md font-medium shadow-sm align-middle  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              >
                <BsCart4 className="text-2xl" />
                <span className="absolute top-0 right-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-rose-500 sbg-blue-500 text-white">
                  {totalItems}
                </span>
              </button>

              <div
                id="hs-overlay-right"
                className="hs-overlay overflow-y-auto hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-2xl w-full z-[80] bg-white border-s dark:bg-neutral-800 dark:border-neutral-700"
                tabIndex="-1"
              >
                <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                  <h3 className="font-bold text-gray-800 dark:text-white">
                    Shopping Cart
                  </h3>
                  <button
                    type="button"
                    className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                    data-hs-overlay="#hs-overlay-right"
                  >
                    <span className="sr-only">Close modal</span>
                    <svg
                      className="flex-shrink-0 size-4"
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
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <ShoppingCart />
                </div>
              </div>
              {/* Offcanvas ends here */}
              <div className="hs-dropdown relative inline-flex">
                <button
                  id="hs-dropdown-custom-trigger"
                  type="button"
                  className="hs-dropdown-toggle w-10 h-10 bg-red-200 inline-flex items-center  text-sm font-semibold rounded-full border border-gray-200  text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={
                      user?.image ||
                      "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
                    }
                    alt={user?.username || "Username"}
                  />
                </button>

                <div
                  className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                  aria-labelledby="hs-dropdown-custom-trigger"
                >
                  {" "}
                  <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-neutral-800">
                    <p className="text-sm text-gray-500 dark:text-neutral-400">
                      Signed in as
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-neutral-300">
                      {user?.email || "no email"}
                    </p>
                  </div>
                  <div className="mt-2 py-2 first:pt-0 last:pb-0">
                    <a
                      className="flex cursor-pointer items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                      onClick={() =>
                        handleQuickNavigate("user-information/dashboard", user)
                      }
                    >
                      <MdOutlineSpaceDashboard className="text-xl text-blue-600" />
                      My Dashboard{" "}
                    </a>
                    <a
                      className="flex cursor-pointer items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                      onClick={() =>
                        handleQuickNavigate(
                          "user-information/account-information",
                          user
                        )
                      }
                    >
                      <IoSettingsOutline className="text-xl text-blue-600" />
                      Account Settings
                    </a>
                    <a
                      className="flex mb-2  cursor-pointer items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                      onClick={() =>
                        handleQuickNavigate(
                          "user-information/admin-actions",
                          user
                        )
                      }
                    >
                      <MdOutlineAdminPanelSettings className="text-xl text-red-600" />
                      Administration Actions
                    </a>
                    <div className="border-t pt-4">
                      {user?._id ? (
                        <>
                          <div className="text-center">
                            <button
                              type="button"
                              onClick={() => handleSignout()}
                              className="py-1.5 cursor-pointer w-full focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300  px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-500 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                              data-hs-overlay="#hs-sign-out-alert-small-window"
                            >
                              <IoIosLogOut className="text-xl" />
                              Signout
                            </button>
                          </div>
                        </>
                      ) : (
                        <a
                          className="flex cursor-pointer items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                          href="/authentication/signin"
                        >
                          <IoIosLogIn className="text-xl" />
                          Signin
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
