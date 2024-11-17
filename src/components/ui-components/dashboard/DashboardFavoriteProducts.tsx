import React, { useState } from "react";
import { CiGrid2H, CiGrid41, CiViewTable } from "react-icons/ci";
import FavoritesTable from "./components/FavoritesTable";

export default function DashboardFavoriteProducts({ wishlist }: any) {
  const [viewMode, setViewMode] = useState("table");

  return (
    <div>
      <div className="justify-between flex items-cecter  w-full ">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Your Wishlist
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Manage your wishlist products as per your need. You can at anytime
            purchase them
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
            {wishlist?.map((wishproduct: any) => (
              <div
                className="p-2 border rounded-lg bg-gray-50"
                key={wishproduct?.product?._id}
              >
                <div className="relative  ">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={
                        wishproduct?.product?.image ||
                        wishproduct?.product?.productImage
                      }
                      alt={wishproduct?.product?.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {wishproduct?.product?.name}
                    </h3>
                    <p className="mt-1 text-sm line-clamp-2 text-gray-500">
                      {wishproduct?.product?.tagline}
                    </p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    ></div>
                    <p className="relative text-lg font-semibold text-white">
                      ${wishproduct?.product?.price}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => {
                      const location = window.location; // Make sure `location` is correctly assigned
                      location.href = `/industries/quickshop_stores_category/products/view-product/${wishproduct?.product?._id}`;
                    }}
                    className="relative w-full  flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-8 text-white py-2 text-sm font-medium hover:text-gray-900 hover:bg-gray-200"
                  >
                    Add to bag
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : viewMode === "table" ? (
          <div className="overflow-x-auto pt-3   font-[sans-serif]">
            <FavoritesTable products={wishlist} />
          </div>
        ) : (
          <div className="mt-8">
            <ul className="space-y-8">
              {wishlist?.map((wishproduct: any) => (
                <div
                  key={wishproduct?.product._id}
                  className="py-6 max-w-3xl sm:flex"
                >
                  <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                    <img
                      src={wishproduct?.product.image}
                      alt={wishproduct?.product.name}
                      className="h-20 w-20 flex-none rounded-md object-cover object-center sm:h-48 sm:w-48"
                    />
                    <div className="min-w-0 flex-1 pt-1.5 sm:pt-0">
                      <h3 className="text-sm font-medium text-gray-900">
                        <a href={wishproduct?.product.href}>
                          {wishproduct?.product.name}
                        </a>
                      </h3>
                      <p className="line-clamp-6 text-sm text-gray-500">
                        <span>{wishproduct?.product.description} </span>
                      </p>
                      <p className="mt-1 font-medium text-gray-900">
                        {wishproduct?.product.quantity}
                      </p>
                      <p className="mt-1 font-medium text-gray-900">
                        Unit Price: ${wishproduct?.product.price}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4 sm:ml-6 sm:mt-0 sm:w-40 sm:flex-none">
                    <button
                      type="button"
                      onClick={() => {
                        const location = window.location; // Make sure `location` is correctly assigned
                        location.href = `/industries/quickshop_stores_category/products/view-product/${wishproduct?.product?._id}`;
                      }}
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 px-2.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-50 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 sm:w-full sm:flex-grow-0"
                    >
                      Buy again
                    </button>

                    <button
                      type="button"
                      className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-full sm:flex-grow-0"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        )}
      </>
    </div>
  );
}
