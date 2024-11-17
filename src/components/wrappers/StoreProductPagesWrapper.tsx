"use client";
import { Fragment, useState } from "react";
import { CgRename } from "react-icons/cg";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import {
  MdClear,
  MdLabelOutline,
  MdOutlineDateRange,
  MdOutlineFormatListBulleted,
} from "react-icons/md";
import { BsCurrencyDollar, BsGrid, BsPlus } from "react-icons/bs";
import { HiMinus } from "react-icons/hi2";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useProductsWrapper } from "@/context/global";
import IndustryFilterSidePanel from "../ui-components/industry/IndustryFilterSidePanel";
import { BiFilterAlt } from "react-icons/bi";
import { getIndustryFilters } from "@/utils/getIndustryFilters";
import {
  IoArrowDownOutline,
  IoArrowDownSharp,
  IoArrowUpSharp,
} from "react-icons/io5";
import { FaStarHalfStroke } from "react-icons/fa6";

const subCategories = [
  { name: "Most Purchased Items", href: "#" },
  { name: "New Arrivals", href: "#" },
  { name: "Everyday Savings", href: "#" },
  { name: "Value Deals", href: "#" },
  { name: "Hot Right Now", href: "#" },
];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];
export default function StoreProductPagesWrapper({ children, title }: any) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { showSidenav, toggleShowSidenav, toggleIsGridView, isGridView } =
    useProductsWrapper();
  const pathname = usePathname();
  const cleanPathname = pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;
  const pathSegments = cleanPathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  const filtersForCurrentIndustry = getIndustryFilters(lastSegment);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (filterCategory: string) => {
    // Clone the current search params
    const params = new URLSearchParams(searchParams.toString());

    // Set the filter-category
    params.set("filter-category", filterCategory);

    // Update the URL without refreshing the page
    router.push(`${pathname}?${params.toString()}`);
  };
  const [sortCriteria, setSortCriteria] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  const handleSort = (criteria: string, order: "asc" | "desc") => {
    setSortCriteria(criteria);
    setSortOrder(order);

    // Update the URL without refreshing the page
    const url = new URL(window.location.href);
    url.searchParams.set(`sort-by-${criteria}`, order);
    window.history.pushState({}, "", url.toString());
  };

  return (
    <div className=" bg-white h-fit">
      <div className="h-fit  ">
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
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
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <MdClear className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <HiMinus
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <BsPlus
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto  h-fit px-4 sm:px-6 ">
          <div className="flex items-baseline justify-between  border-b border-gray-200 pb-6  ">
            <div className="flex items-center gap-10">
              <h1 className="text-4xl capitalize   font-bold tracking-tight text-gray-900">
                {title?.replaceAll("-", " ") || " New Arrivals"}
              </h1>
              <div className="relative mr-auto w-64">
                <select
                  className="peer capitalize p-3 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600"
                  onChange={(e) => handleFilterChange(e.target.value)}
                >
                  {filtersForCurrentIndustry?.map((filter, index) => {
                    const key = Object.keys(filter)[0];
                    return (
                      <option className="capitalize" key={index} value={key}>
                        {key?.replaceAll("-", " ")}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="flex space-x-2  items-center">
              {!showSidenav && (
                <button
                  onClick={() => toggleShowSidenav()}
                  type="button"
                  className="p-2 flex justify-center items-center text-xl font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <BiFilterAlt />
                </button>
              )}
              <div className="py-1 group text-start font-normal">
                <div className="flex border rounded-md p-1 items-center">
                  <span className="py-1 px-2.5 text-sm flex items-center gap-1 text-gray-500 rounded-md dark:text-neutral-500">
                    <MdLabelOutline className="text-lg" />
                    Name
                  </span>

                  <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative sm:inline-flex z-20">
                    <div className="flex gap-0 text-gray-500">
                      <button
                        type="button"
                        onClick={() => handleSort("name", "asc")}
                      >
                        <IoArrowUpSharp />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSort("name", "desc")}
                      >
                        <IoArrowDownOutline />
                      </button>
                    </div>

                    <div
                      className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white border border-gray-200 shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-900 dark:border dark:border-neutral-700"
                      aria-labelledby="hs-dropdown-name-column-actions"
                    >
                      <div className="min-w-24 text-md flex flex-col gap-y-1">
                        <button
                          type="button"
                          onClick={() => handleSort("name", "asc")}
                          className="flex items-center gap-x-2 py-1 px-3 rounded-lg font-medium text-xs text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                        >
                          <IoArrowUpSharp className="text-lg text-gray-500" />
                          A-Z
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSort("name", "desc")}
                          className="flex items-center gap-x-2 py-1 px-3 rounded-lg font-medium text-xs text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                        >
                          <IoArrowDownOutline className="text-lg text-gray-500" />
                          Z-A
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-1 group text-start font-normal">
                <div className="flex border rounded-md p-1 items-center">
                  <span className="py-1 px-2.5 text-sm flex items-center gap-1 text-gray-500 rounded-md dark:text-neutral-500">
                    <BsCurrencyDollar className="text-lg" />
                    Price
                  </span>

                  <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative sm:inline-flex z-20">
                    <div className="flex gap-0 text-gray-500">
                      <button
                        type="button"
                        onClick={() => handleSort("price", "asc")}
                      >
                        <IoArrowUpSharp />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSort("price", "desc")}
                      >
                        <IoArrowDownOutline />
                      </button>
                    </div>

                    <div
                      className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white border border-gray-200 shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-900 dark:border dark:border-neutral-700"
                      aria-labelledby="hs-dropdown-price-column-actions"
                    >
                      <div className="min-w-24 text-md flex flex-col gap-y-1">
                        <button
                          type="button"
                          onClick={() => handleSort("price", "asc")}
                          className="flex items-center gap-x-2 py-1 px-3 rounded-lg font-medium text-xs text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                        >
                          <IoArrowUpSharp className="text-lg text-gray-500" />
                          Lowest to Highest
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSort("price", "desc")}
                          className="flex items-center gap-x-2 py-1 px-3 rounded-lg font-medium text-xs text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                        >
                          <IoArrowDownOutline className="text-lg text-gray-500" />
                          Highest to Lowest
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-1 group text-start font-normal">
                <div className="flex border rounded-md p-1 items-center">
                  <span className="py-1 px-2.5 text-sm flex items-center gap-1 text-gray-500 rounded-md dark:text-neutral-500">
                    <MdOutlineDateRange className="text-lg" />
                    Date
                  </span>

                  <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative sm:inline-flex z-20">
                    <div className="flex gap-0 text-gray-500">
                      <button
                        type="button"
                        onClick={() => handleSort("date", "asc")}
                      >
                        <IoArrowUpSharp />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSort("date", "desc")}
                      >
                        <IoArrowDownOutline />
                      </button>
                    </div>

                    <div
                      className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white border border-gray-200 shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-900 dark:border dark:border-neutral-700"
                      aria-labelledby="hs-dropdown-date-column-actions"
                    >
                      <div className="min-w-24 text-md flex flex-col gap-y-1">
                        <button
                          type="button"
                          onClick={() => handleSort("date", "asc")}
                          className="flex items-center gap-x-2 py-1 px-3 rounded-lg font-medium text-xs text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                        >
                          <IoArrowUpSharp className="text-lg text-gray-500" />
                          Newest First
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSort("date", "desc")}
                          className="flex items-center gap-x-2 py-1 px-3 rounded-lg font-medium text-xs text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                        >
                          <IoArrowDownOutline className="text-lg text-gray-500" />
                          Oldest First
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-1 group text-start font-normal">
                <div className="flex border rounded-md p-1 items-center">
                  <span className="py-1 px-2.5 text-sm flex items-center gap-1 text-gray-500 rounded-md dark:text-neutral-500">
                    <FaStarHalfStroke className="text-lg" />
                    Rating
                  </span>

                  <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative sm:inline-flex z-20">
                    <div className="flex gap-0 text-gray-500">
                      <button
                        type="button"
                        onClick={() => handleSort("rating", "asc")}
                      >
                        <IoArrowUpSharp />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSort("rating", "desc")}
                      >
                        <IoArrowDownOutline />
                      </button>
                    </div>

                    <div
                      className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white border border-gray-200 shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-900 dark:border dark:border-neutral-700"
                      aria-labelledby="hs-dropdown-rating-column-actions"
                    >
                      <div className="min-w-24 text-md flex flex-col gap-y-1">
                        <button
                          type="button"
                          onClick={() => handleSort("rating", "asc")}
                          className="flex items-center gap-x-2 py-1 px-3 rounded-lg font-medium text-xs text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                        >
                          <IoArrowUpSharp className="text-lg text-gray-500" />
                          Highest to Lowest
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSort("rating", "desc")}
                          className="flex items-center gap-x-2 py-1 px-3 rounded-lg font-medium text-xs text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                        >
                          <IoArrowDownOutline className="text-lg text-gray-500" />
                          Lowest to Highest
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ml-auto p-4 w-fit">
                <div className="flex  flex-col items-center   sm:inline-flex sm:flex-row  ">
                  <button
                    type="button"
                    className="py-2.5  px-4 inline-flex items-center gap-x-2   first:rounded-t-md last:rounded-b-md sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                  >
                    View
                  </button>
                  <div className="flex p-1 gap-1 flex-col sm:inline-flex sm:flex-row border rounded-l-none rounded-lg shadow-sm">
                    <button
                      type="button"
                      onClick={() => toggleIsGridView()}
                      className={`p-1.5 inline-flex items-center gap-x-2   -ms-px    rounded-md sm:mt-0 sm:first:ms-0 text-sm font-medium focus:z-10 border border-gray-200 ${
                        isGridView
                          ? "bg-gray-800 text-white hover:text-gray-800"
                          : "text-gray-800 "
                      } shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800`}
                    >
                      <BsGrid className="text-lg" />
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleIsGridView()}
                      className={`p-1.5 inline-flex items-center gap-x-2   -ms-px    rounded-md sm:mt-0 sm:first:ms-0 text-sm font-medium focus:z-10 border border-gray-200 ${
                        !isGridView
                          ? "bg-gray-800 text-white hover:text-gray-800"
                          : "text-gray-800 "
                      } shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800`}
                    >
                      <MdOutlineFormatListBulleted className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section aria-labelledby="products-heading" className="h-full  pt-6">
            <div className="flex gap-8 ">
              {/* Filters */}
              {showSidenav && <IndustryFilterSidePanel />}
              {/* Product grid */}
              <div className={` bg-gray-100 p-6 rounded-lg w-full h-fit`}>
                {children}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
