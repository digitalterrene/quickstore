"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { MdClear, MdOutlineFormatListBulleted } from "react-icons/md";
import { BsArrowDown, BsGrid, BsPlus } from "react-icons/bs";
import { HiMinus } from "react-icons/hi2";

import { Popover } from "@headlessui/react";

import { usePathname } from "next/navigation";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { excludes_routes } from "@/data/other";
import { useProductsWrapper } from "@/context/global";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
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
export default function ProductPagesWrapper({ children }: any) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState(10);
  const { showSidenav, toggleShowSidenav, toggleIsGridView, isGridView } =
    useProductsWrapper();
  const pathname = usePathname();
  const isExcluded = excludes_routes.some((pattern) => pattern.test(pathname));
  return (
    <>
      {!isExcluded ? (
        <>{children}</>
      ) : (
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
                              <a
                                href={category.href}
                                className="block px-2 py-3"
                              >
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
                                    {section.options.map(
                                      (option, optionIdx) => (
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
                                      )
                                    )}
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

            <main className="mx-auto max-w-7xl   h-fit px-4 sm:px-6 lg:px-8">
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-6  ">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                  New Arrivals
                </h1>
                <div className="flex space-x-6 items-center">
                  {!showSidenav && (
                    <button
                      type="button"
                      onClick={() => toggleShowSidenav()}
                      className="  inline-flex items-center gap-x-2 border font-semibold rounded  py-1 p-1.5 text-blue-800  text-sm disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400"
                    >
                      Open Filter Panel
                    </button>
                  )}
                  <Popover className="relative">
                    <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                      <span>Sort</span>
                      <BsArrowDown className="h-5 w-5" aria-hidden="true" />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
                        <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                          {sortOptions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block p-2 hover:text-indigo-600"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>

                  <div className="ml-auto p-4 w-fit">
                    <div className="flex  flex-col items-center py-2 sm:inline-flex sm:flex-row rounded-lg shadow-sm">
                      <button
                        type="button"
                        className="py-3  px-4 inline-flex items-center gap-x-2 -mt-px -ms-px first:rounded-t-md last:rounded-b-md sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                      >
                        View
                      </button>
                      <div className="flex p-1 flex-col sm:inline-flex sm:flex-row border rounded-l-none rounded-lg shadow-sm">
                        <button
                          type="button"
                          onClick={() => toggleIsGridView()}
                          className={`p-2 inline-flex items-center gap-x-2   -ms-px    rounded-md sm:mt-0 sm:first:ms-0 text-sm font-medium focus:z-10 border border-gray-200 ${
                            isGridView
                              ? "bg-gray-800 text-white hover:text-gray-800"
                              : "text-gray-800 "
                          } shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800`}
                        >
                          {isGridView ? (
                            <BsGrid className="text-lg" />
                          ) : (
                            <MdOutlineFormatListBulleted className="text-lg" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section aria-labelledby="products-heading" className="  pt-6">
                <div className="grid grid-cols-1   gap-x-8   lg:grid-cols-4">
                  {/* Filters */}
                  {!isExcluded && (
                    <>
                      {showSidenav && (
                        <div className="min-h-[50rem]   sticky top-16">
                          <form className="hidden lg:block">
                            <div className="flex mb-6 justify-between">
                              <h2
                                id="products-heading"
                                className="font-bold text-xl "
                              >
                                Filter Products
                              </h2>

                              <button
                                type="button"
                                onClick={() => toggleShowSidenav()}
                                className="p-2 text-xl inline-flex items-center gap-x-2  font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400"
                              >
                                {showSidenav ? (
                                  <AiOutlineMenuFold />
                                ) : (
                                  <AiOutlineMenuUnfold />
                                )}
                              </button>
                            </div>
                            <ul
                              role="list"
                              className="space-y-4  border-gray-200 pb-6 text-sm font-medium text-gray-900"
                            >
                              {subCategories.map((category) => (
                                <li key={category.name}>
                                  <a href={category.href}>{category.name}</a>
                                </li>
                              ))}
                            </ul>
                            <div className="flex items-start w-full mb-4 justify-between">
                              <label htmlFor="basic-range-slider-usage">
                                Price
                              </label>
                              <button
                                type="button"
                                className="py-1.5  px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                              >
                                {priceRange}
                              </button>
                            </div>
                            <input
                              type="range"
                              className="w-full bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
                                        [&::-webkit-slider-thumb]:w-2
                                        [&::-webkit-slider-thumb]:h-2
                                        [&::-webkit-slider-thumb]:-mt-1.5
                                        [&::-webkit-slider-thumb]:appearance-none
                                        [&::-webkit-slider-thumb]:bg-white
                                        [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]
                                        [&::-webkit-slider-thumb]:rounded-full
                                        [&::-webkit-slider-thumb]:transition-all
                                        [&::-webkit-slider-thumb]:duration-150
                                        [&::-webkit-slider-thumb]:ease-in-out
                                        [&::-webkit-slider-thumb]:dark:bg-neutral-700

                                        [&::-moz-range-thumb]:w-2
                                        [&::-moz-range-thumb]:h-2
                                        [&::-moz-range-thumb]:appearance-none
                                        [&::-moz-range-thumb]:bg-white 
                                        [&::-moz-range-thumb]:border-blue-600
                                        [&::-moz-range-thumb]:rounded-full
                                        [&::-moz-range-thumb]:transition-all
                                        [&::-moz-range-thumb]:duration-150
                                        [&::-moz-range-thumb]:ease-in-out

                                        [&::-webkit-slider-runnable-track]:w-full
                                        [&::-webkit-slider-runnable-track]:h-2
                                        [&::-webkit-slider-runnable-track]:bg-gray-100
                                        [&::-webkit-slider-runnable-track]:rounded-full
                                        [&::-webkit-slider-runnable-track]:dark:bg-neutral-700

                                        [&::-moz-range-track]:w-full
                                        [&::-moz-range-track]:h-2
                                        [&::-moz-range-track]:bg-gray-100
                                        [&::-moz-range-track]:rounded-full"
                              id="basic-range-slider-usage"
                              value={priceRange}
                              onChange={(e) =>
                                setPriceRange(parseInt(e.target.value))
                              }
                            />
                            {filters.map((section) => (
                              <Disclosure
                                as="div"
                                key={section.id}
                                className="border-b border-gray-200 py-6"
                              >
                                {({ open }) => (
                                  <>
                                    <h3 className="-my-3 flow-root">
                                      <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
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
                                      <div className="space-y-4">
                                        {section.options.map(
                                          (option, optionIdx) => (
                                            <div
                                              key={option.value}
                                              className="flex items-center"
                                            >
                                              <input
                                                id={`filter-${section.id}-${optionIdx}`}
                                                name={`${section.id}[]`}
                                                defaultValue={option.value}
                                                type="checkbox"
                                                defaultChecked={option.checked}
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                              />
                                              <label
                                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                                className="ml-3 text-sm text-gray-600"
                                              >
                                                {option.label}
                                              </label>
                                            </div>
                                          )
                                        )}
                                      </div>
                                    </Disclosure.Panel>
                                  </>
                                )}
                              </Disclosure>
                            ))}
                          </form>
                        </div>
                      )}
                    </>
                  )}

                  {/* Product grid */}
                  <div
                    className={`   h-fit ${
                      !pathname?.includes("product-view")
                        ? "lg:col-span-3"
                        : "lg:col-span-4"
                    }`}
                  >
                    {children}
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      )}
    </>
  );
}
