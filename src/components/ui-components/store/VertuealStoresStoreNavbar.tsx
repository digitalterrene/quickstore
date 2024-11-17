"use client";
import { Fragment, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import { Dialog, Tab, Transition } from "@headlessui/react";
import { IoIosLogIn, IoIosLogOut, IoMdClose } from "react-icons/io";
import { IoChevronDownOutline, IoSettingsOutline } from "react-icons/io5";
import useNavigation from "@/utils/handleNavigate";
import { useAuthContext } from "@/context/auth-context/AuthContext";
import { BsCart4, BsTranslate } from "react-icons/bs";
import { useCart } from "react-use-cart";
import ShopByCollection from "../shop-by/ShopByCollection";
import TopSelling from "../hot-and-trending/TopSelling";
import NewArrivals from "../hot-and-trending/NewArrivals";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LuStore } from "react-icons/lu";

const currencies = ["ENG"];
const navigation = {
  categories: [
    {
      name: "Shop by collection",
      component: <ShopByCollection />,
    },
    {
      name: "Top Selling",
      component: <TopSelling />,
    },
    {
      name: "New Arrivals",
      component: <NewArrivals />,
    },
  ],
  pages: [{ name: "Recommended", href: "/industries/retail" }],
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function QuickshopStoresStoreNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuthContext() || { user: null };
  const { totalItems } = useCart();
  const { handleQuickNavigate } = useNavigation();
  const router = useRouter();

  const handleSignout = () => {
    localStorage?.clear();
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };
  const pathname = usePathname(); // Get the current page path
  const searchParams = useSearchParams(); // Get search params

  useEffect(() => {
    const authenticationID = searchParams.get("authenticationID");
    const authenticationToken = searchParams.get("authenticationToken");
    const authenticationStatus = searchParams.get("authenticationStatus");

    // If any of the required authentication params are missing, navigate to the current page with updated search params
    if (!authenticationID || !authenticationToken || !authenticationStatus) {
      const params = new URLSearchParams();

      // Add missing params to the URL
      if (!authenticationID) params.set("authenticationID", user?._id);
      if (!authenticationToken) params.set("authenticationToken", user?.token);
      if (!authenticationStatus)
        params.set(
          "authenticationStatus",
          user?._id ? "logged-in" : "not-logged-in"
        );

      // Get the current page
      const currentPath = window.location.pathname;

      // Step 2: Navigate to the current page with search params
      router.push(`${currentPath}?${params.toString()}`);
    }
  }, [router, searchParams]);
  return (
    <div>
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <IoMdClose className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-12 px-4 py-6"
                      >
                        <div className=" ">{category?.component}</div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Create an account
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                  <div className="hs-dropdown relative inline-flex">
                    <button
                      id="hs-dropdown-custom-trigger"
                      type="button"
                      className="hs-dropdown-toggle   inline-flex items-center  text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                    >
                      <img
                        className="w-10 h-auto rounded-full"
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
                            handleQuickNavigate(
                              "user-information/dashboard",
                              user
                            )
                          }
                        >
                          <MdOutlineSpaceDashboard className="text-xl text-blue-600" />
                          My Dashboard
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
                                  // onClick={() => handleSignout()}
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

                {/* <>Visit Store</> */}
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {/* Currency selector */}
                  <form>
                    <div className="inline-block">
                      <label htmlFor="mobile-currency" className="sr-only">
                        Currency
                      </label>
                      <div className="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white">
                        <select
                          id="mobile-currency"
                          name="currency"
                          className="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
                        >
                          {currencies.map((currency) => (
                            <option key={currency}>{currency}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                          <IoChevronDownOutline
                            className="h-5 w-5 text-gray-500"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {/* Hero section */}
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}

        {/* Navigation */}
        <header className="relative z-10 ">
          <nav aria-label="Top">
            {/* Top navigation */}
            <div className="bg-gray-900 p-2">
              <div className="mx-auto flex space-x-6 h-10 px-6  items-center justify-between  ">
                <div
                  className="m-1 hs-dropdown relative inline-flex"
                  data-hs-dropdown-auto-close="inside"
                >
                  <button
                    id="hs-dropdown-item-checkbox"
                    type="button"
                    className="hs-dropdown-toggle py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    <BsTranslate className="text-lg " />
                    Actions
                    <svg
                      className="hs-dropdown-open:rotate-180 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div
                    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-1 space-y-0.5 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-dropdown-item-checkbox"
                  >
                    <div className="relative flex items-start py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700">
                      <div className="flex items-center h-5 mt-1">
                        <input
                          id="hs-dropdown-item-radio-delete"
                          name="hs-dropdown-item-radio"
                          type="radio"
                          className="shrink-0 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          aria-describedby="hs-dropdown-item-radio-delete-description"
                          checked
                        />
                      </div>
                      <label
                        htmlFor="hs-dropdown-item-radio-delete"
                        className="ms-3.5"
                      >
                        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-300">
                          Delete
                        </span>
                        <span
                          id="hs-dropdown-item-radio-delete-description"
                          className="block text-sm text-gray-600 dark:text-neutral-500"
                        >
                          Notify me when this action happens.
                        </span>
                      </label>
                    </div>
                    <div className="relative flex items-start py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700">
                      <div className="flex items-center h-5 mt-1">
                        <input
                          id="hs-dropdown-item-radio-archive"
                          name="hs-dropdown-item-radio"
                          type="radio"
                          className="shrink-0 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          aria-describedby="hs-dropdown-item-radio-archive-description"
                        />
                      </div>
                      <label
                        htmlFor="hs-dropdown-item-radio-archive"
                        className="ms-3.5"
                      >
                        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-300">
                          Archive
                        </span>
                        <span
                          id="hs-dropdown-item-radio-archive-description"
                          className="block text-sm text-gray-600 dark:text-neutral-500"
                        >
                          Notify me when this action happens.
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="relative z-0 flex flex-1 items-center justify-center px-2  ">
                  <div className="w-full sm:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Returns Policy
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <BiSearch
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-white hover:text-gray-100"
                  >
                    Sign in
                  </a>

                  <a
                    href="#"
                    className="text-sm font-medium text-white hover:text-gray-100"
                  >
                    Create an account
                  </a>
                  <a
                    href={`/${user?._id}/shopping/shopping-cart`}
                    className="relative inline-flex flex-shrink-0 justify-center text-white hover:text-cyan-400 items-center   rounded-md font-medium shadow-sm align-middle  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                  >
                    <BsCart4 className="text-2xl" />
                    <span className="absolute top-0 right-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-rose-500 sbg-blue-500 text-white">
                      {totalItems}
                    </span>
                  </a>
                  <div className="hs-dropdown relative inline-flex">
                    <button
                      id="hs-dropdown-custom-trigger"
                      type="button"
                      className="hs-dropdown-toggle   inline-flex items-center  text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                    >
                      <img
                        className="w-8 h-auto rounded-full"
                        src={
                          user?.image ||
                          "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
                        }
                        alt={user?.username || "Username"}
                      />
                    </button>

                    <div
                      className="hs-dropdown-menu z-50 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
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
                        {pathname?.includes("stores") && (
                          <a
                            className="flex cursor-pointer  border-b items-center gap-x-3.5 py-2 px-3  pb-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                            href="/"
                          >
                            <LuStore className="text-xl  " />
                            Quickshop Frontstore
                          </a>
                        )}
                        <a
                          className="flex cursor-pointer items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                          onClick={() =>
                            handleQuickNavigate(
                              "user-information/dashboard",
                              user
                            )
                          }
                        >
                          <MdOutlineSpaceDashboard className="text-xl text-blue-600" />
                          My Dashboard
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

            {/* Secondary navigation */}
          </nav>
        </header>
      </div>
    </div>
  );
}
