"use client";
import React, { useState } from "react";
import ShopByCategory from "../shop-by/ShopByCategory";
import ShopByCollection from "../shop-by/ShopByCollection";
import NewArrivals from "../hot-and-trending/NewArrivals";
import TopSelling from "../hot-and-trending/TopSelling";
import { usePathname } from "next/navigation";

export default function RecommendationsDisplay() {
  const [shopBy, setShopBy] = useState("Categories");
  const pathname = usePathname();
  const [displayShopBy, setDisplayShopBy] = useState(
    pathname?.includes("stores") || pathname == "/" || pathname == "/industries"
      ? true
      : false
  );
  const [trendingDisplay, setTrendingDisplay] = useState("New Arrivals");
  return (
    <div className="py-6 w-full">
      <div className="ml-auto p-4 w-fit">
        <div className="flex  flex-col items-center py-2 sm:inline-flex sm:flex-row rounded-lg shadow-sm">
          <button
            type="button"
            className="py-3 h-12 px-4 inline-flex items-center gap-x-2 -mt-px -ms-px first:rounded-t-md last:rounded-b-md sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
          >
            Shop By :
          </button>
          <div className="flex p-1.5 flex-col sm:inline-flex sm:flex-row border rounded-l-none rounded-lg shadow-sm">
            <button
              type="button"
              onClick={() => setShopBy("Categories")}
              className={`py-1.5  px-4 inline-flex items-center gap-x-2   -ms-px first:rounded-t-md last:rounded-b-md sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md text-sm font-medium focus:z-10 border border-gray-200 ${
                shopBy === "Categories"
                  ? "bg-gray-800 text-white hover:text-gray-800"
                  : "text-gray-800 "
              } shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800`}
            >
              Categories
            </button>
            <button
              type="button"
              onClick={() => setShopBy("Collections")}
              className={`py-1.5  px-4 inline-flex items-center gap-x-2   -ms-px first:rounded-t-md last:rounded-b-md sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md text-sm font-medium focus:z-10 border border-gray-200 ${
                shopBy === "Collections"
                  ? "bg-gray-800 text-white hover:text-gray-800"
                  : "text-gray-800 "
              } shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800`}
            >
              Collections
            </button>
          </div>
        </div>
      </div>
      {displayShopBy && (
        <>
          <>
            {shopBy === "Categories" ? (
              <ShopByCategory />
            ) : (
              <ShopByCollection />
            )}
          </>
          <div className="ml-auto w-fit p-4">
            <div className="flex flex-col items-center py-2 sm:inline-flex sm:flex-row rounded-lg shadow-sm">
              <button
                type="button"
                className="py-3 h-12 px-4 inline-flex items-center gap-x-2 -mt-px -ms-px first:rounded-t-md last:rounded-b-md sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
              >
                Trending Display :
              </button>
              <div className="flex p-1.5 flex-col sm:inline-flex sm:flex-row border rounded-l-none rounded-lg shadow-sm">
                <button
                  type="button"
                  onClick={() => setTrendingDisplay("New Arrivals")}
                  className={`py-1.5  px-4 inline-flex items-center gap-x-2   -ms-px first:rounded-t-md last:rounded-b-md sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md text-sm font-medium focus:z-10 border border-gray-200 ${
                    trendingDisplay === "New Arrivals"
                      ? "bg-gray-800 text-white hover:text-gray-800"
                      : "text-gray-800 "
                  } shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800`}
                >
                  New Arrivals
                </button>
                <button
                  type="button"
                  onClick={() => setTrendingDisplay("Top Selling")}
                  className={`py-1.5  px-4 inline-flex items-center gap-x-2   -ms-px first:rounded-t-md last:rounded-b-md sm:first:rounded-s-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-md text-sm font-medium focus:z-10 border border-gray-200 ${
                    trendingDisplay === "Top Selling"
                      ? "bg-gray-800 text-white hover:text-gray-800"
                      : "text-gray-800 "
                  } shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800`}
                >
                  Top Selling
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <>
        {trendingDisplay === "New Arrivals" ? <NewArrivals /> : <TopSelling />}
      </>
    </div>
  );
}
