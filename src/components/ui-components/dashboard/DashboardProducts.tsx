import React, { useState } from "react";
import { CiGrid2H, CiGrid41, CiViewTable } from "react-icons/ci";
import ProductCardLong from "../product/ProductCardLong";
const products = [
  {
    id: 1,
    name: "Zip Tote Basket",
    color: "White and black",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  // More products...
];

export default function DashboardProducts() {
  const [viewMode, setViewMode] = useState("table");
  return (
    <div>
      <div className="justify-between flex items-cecter  w-full ">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Your Orders
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Check the status of recent orders, manage returns, and discover
            similar products.
          </p>
        </div>
        <div className="flex p-1.5 flex-col sm:inline-flex sm:flex-row  ">
          <button
            type="button"
            onClick={() => setViewMode("table")}
            className={`py-1.5 h-fit  px-4 inline-flex items-center gap-x-2   -ms-px first:rounded-t-md last:rounded-b-md sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md text-sm font-medium focus:z-10 border border-gray-200 ${
              viewMode === "table"
                ? "bg-gray-800 text-white hover:text-gray-800"
                : "text-gray-800 "
            } shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800`}
          >
            <CiViewTable />
            Table
          </button>
          <button
            type="button"
            onClick={() => setViewMode("grid")}
            className={`py-1.5 h-fit px-4 inline-flex items-center gap-x-2   -ms-px first:rounded-t-md last:rounded-b-md sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md text-sm font-medium focus:z-10 border border-gray-200 ${
              viewMode === "grid"
                ? "bg-gray-800 text-white hover:text-gray-800"
                : "text-gray-800 "
            } shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800`}
          >
            <CiGrid41 />
            Grid
          </button>
          <button
            type="button"
            onClick={() => setViewMode("list")}
            className={`py-1.5 h-fit px-4 inline-flex items-center gap-x-2   -ms-px first:rounded-t-md last:rounded-b-md sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md text-sm font-medium focus:z-10 border border-gray-200 ${
              viewMode === "list"
                ? "bg-gray-800 text-white hover:text-gray-800"
                : "text-gray-800 "
            } shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800`}
          >
            <CiGrid2H /> List
          </button>
        </div>
      </div>
      <>
        {viewMode === "grid" ? (
          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            <div>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg"
                    alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    Zip Tote Basket
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">White and black</p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  ></div>
                  <p className="relative text-lg font-semibold text-white">
                    $140
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Add to bag<span className="sr-only">, Zip Tote Basket</span>
                </a>
              </div>
            </div>
          </div>
        ) : viewMode === "table" ? (
          <div className="overflow-x-auto font-[sans-serif]">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100 whitespace-nowrap">
                <tr>
                  <th className="pl-4 w-8">
                    <input
                      id="checkbox"
                      type="checkbox"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="checkbox"
                      className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-4 h-4 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full fill-white"
                        viewBox="0 0 520 520"
                      >
                        <path
                          d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                          data-name="7-Check"
                          data-original="#000000"
                        />
                      </svg>
                    </label>
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-black">
                    Product
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-black">
                    Price
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-black">
                    In stock
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-black">
                    Sales
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-black">
                    Rating
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-black">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="whitespace-nowrap divide-y divide-gray-200">
                <tr>
                  <td className="pl-4 w-8">
                    <input
                      id="checkbox1"
                      type="checkbox"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="checkbox1"
                      className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-4 h-4 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full fill-white"
                        viewBox="0 0 520 520"
                      >
                        <path
                          d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                          data-name="7-Check"
                          data-original="#000000"
                        />
                      </svg>
                    </label>
                  </td>
                  <td className="p-4 text-sm">
                    <div className="flex items-center cursor-pointer">
                      <img
                        src="https://readymadeui.com/product_img_1.webp"
                        className="w-10 h-10 p-1.5 shrink-0 bg-gray-100"
                      />
                      <div className="mx-4">
                        <p className="text-sm text-black">Light Gray T-Shirt</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm">$25.00</td>
                  <td className="p-4 text-sm">90</td>
                  <td className="p-4 text-sm">200</td>
                  <td className="p-4 text-sm">
                    <svg
                      className="w-4 h-4 inline mr-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                        fill="#facc15"
                      />
                    </svg>
                    <svg
                      className="w-4 h-4 inline mr-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                        fill="#facc15"
                      />
                    </svg>
                    <svg
                      className="w-4 h-4 inline mr-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                        fill="#facc15"
                      />
                    </svg>
                    <svg
                      className="w-4 h-4 inline mr-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                        fill="#CED5D8"
                      />
                    </svg>
                    <svg
                      className="w-4 h-4 inline"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                        fill="#CED5D8"
                      />
                    </svg>
                  </td>
                  <td className="p-4 text-sm">
                    <button title="Edit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 fill-gray-500"
                        viewBox="0 0 32 32"
                      >
                        <path
                          d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
                          data-original="#000000"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="pl-4 w-8">
                    <input
                      id="checkbox2"
                      type="checkbox"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="checkbox2"
                      className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-4 h-4 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full fill-white"
                        viewBox="0 0 520 520"
                      >
                        <path
                          d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                          data-name="7-Check"
                          data-original="#000000"
                        />
                      </svg>
                    </label>
                  </td>
                  <td className="p-4 text-sm">
                    <div className="flex items-center cursor-pointer">
                      <img
                        src="https://readymadeui.com/product_img_2.webp"
                        className="w-10 h-10 p-1.5 shrink-0 bg-gray-100"
                      />
                      <div className="mx-4">
                        <p className="text-sm text-black">Black T-Shirt</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm">$30.00</td>
                  <td className="p-4 text-sm">80</td>
                  <td className="p-4 text-sm">230</td>
                  <td className="p-4 text-sm">
                    <svg
                      className="w-4 h-4 inline mr-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                        fill="#facc15"
                      />
                    </svg>
                    <svg
                      className="w-4 h-4 inline mr-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                        fill="#facc15"
                      />
                    </svg>
                    <svg
                      className="w-4 h-4 inline mr-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                        fill="#facc15"
                      />
                    </svg>
                    <svg
                      className="w-4 h-4 inline mr-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                        fill="#facc15"
                      />
                    </svg>
                    <svg
                      className="w-4 h-4 inline"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                        fill="#CED5D8"
                      />
                    </svg>
                  </td>
                  <td className="p-4 text-sm">
                    <button title="Edit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 fill-gray-500"
                        viewBox="0 0 32 32"
                      >
                        <path
                          d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
                          data-original="#000000"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="pl-4 w-8">
                    <input
                      id="checkbox1"
                      type="checkbox"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="checkbox1"
                      className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-4 h-4 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full fill-white"
                        viewBox="0 0 520 520"
                      >
                        <path
                          d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                          data-name="7-Check"
                          data-original="#000000"
                        />
                      </svg>
                    </label>
                  </td>
                  <td className="p-4 text-sm">
                    <div className="flex items-center cursor-pointer">
                      <img
                        src="https://readymadeui.com/product_img_1.webp"
                        className="w-10 h-10 p-1.5 shrink-0 bg-gray-100"
                      />
                      <div className="mx-4">
                        <p className="text-sm text-black">Light Gray T-Shirt</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm">$25.00</td>
                  <td className="p-4 text-sm">90</td>
                  <td className="p-4 text-sm">200</td>
                  <td className="p-4 text-sm">
                    <svg
                      className="w-4 h-4 inline mr-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                        fill="#facc15"
                      />
                    </svg>
                    <svg
                      className="w-4 h-4 inline mr-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                        fill="#facc15"
                      />
                    </svg>
                    <svg
                      className="w-4 h-4 inline mr-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                        fill="#facc15"
                      />
                    </svg>
                    <svg
                      className="w-4 h-4 inline mr-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                        fill="#CED5D8"
                      />
                    </svg>
                    <svg
                      className="w-4 h-4 inline"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                        fill="#CED5D8"
                      />
                    </svg>
                  </td>
                  <td className="p-4 text-sm">
                    <button title="Edit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 fill-gray-500"
                        viewBox="0 0 32 32"
                      >
                        <path
                          d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
                          data-original="#000000"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="pl-4 w-8">
                    <input
                      id="checkbox2"
                      type="checkbox"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="checkbox2"
                      className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-4 h-4 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full fill-white"
                        viewBox="0 0 520 520"
                      >
                        <path
                          d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                          data-name="7-Check"
                          data-original="#000000"
                        />
                      </svg>
                    </label>
                  </td>
                  <td className="p-4 text-sm">
                    <div className="flex items-center cursor-pointer">
                      <img
                        src="https://readymadeui.com/product_img_2.webp"
                        className="w-10 h-10 p-1.5 shrink-0 bg-gray-100"
                      />
                      <div className="mx-4">
                        <p className="text-sm text-black">Black T-Shirt</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm">$30.00</td>
                  <td className="p-4 text-sm">80</td>
                  <td className="p-4 text-sm">230</td>
                  <td className="p-4 text-sm">
                    <svg
                      className="w-4 h-4 inline mr-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                        fill="#facc15"
                      />
                    </svg>
                    <svg
                      className="w-4 h-4 inline mr-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                        fill="#facc15"
                      />
                    </svg>
                    <svg
                      className="w-4 h-4 inline mr-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                        fill="#facc15"
                      />
                    </svg>
                    <svg
                      className="w-4 h-4 inline mr-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                        fill="#facc15"
                      />
                    </svg>
                    <svg
                      className="w-4 h-4 inline"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                        fill="#CED5D8"
                      />
                    </svg>
                  </td>
                  <td className="p-4 text-sm">
                    <button title="Edit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 fill-gray-500"
                        viewBox="0 0 32 32"
                      >
                        <path
                          d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
                          data-original="#000000"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="md:flex m-4">
              <p className="text-sm text-gray-500 flex-1">
                Showind 1 to 5 of 100 entries
              </p>
              <div className="flex items-center max-md:mt-4">
                <p className="text-sm text-gray-500">Display</p>

                <select className="text-sm text-gray-500 border border-gray-400 rounded h-8 px-1 mx-4 outline-none">
                  <option>5</option>
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                  <option>100</option>
                </select>

                <ul className="flex space-x-1 ml-4">
                  <li className="flex items-center justify-center cursor-pointer bg-gray-200 w-8 h-8 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 fill-gray-500"
                      viewBox="0 0 55.753 55.753"
                    >
                      <path
                        d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                        data-original="#000000"
                      />
                    </svg>
                  </li>
                  <li className="flex items-center justify-center cursor-pointer text-sm w-8 h-8 rounded">
                    1
                  </li>
                  <li className="flex items-center justify-center cursor-pointer text-sm bg-[#007bff] text-white w-8 h-8 rounded">
                    2
                  </li>
                  <li className="flex items-center justify-center cursor-pointer text-sm w-8 h-8 rounded">
                    3
                  </li>
                  <li className="flex items-center justify-center cursor-pointer text-sm w-8 h-8 rounded">
                    4
                  </li>
                  <li className="flex items-center justify-center cursor-pointer bg-gray-200 w-8 h-8 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 fill-gray-500 rotate-180"
                      viewBox="0 0 55.753 55.753"
                    >
                      <path
                        d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                        data-original="#000000"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {products?.map((product, i) => (
              <div key={i} className="">
                <ProductCardLong product={product} />
              </div>
            ))}
          </div>
        )}
      </>
    </div>
  );
}
