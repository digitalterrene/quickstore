"use client";
import React from "react";
import DashboardOrderHistory from "./DashboardOrderHistrory";

import DashboardFavoriteProducts from "./DashboardFavoriteProducts";
import DashboardReviewsAndComments from "./DashboardReviewsAndComments";

import DashboardMessages from "./DashboardMessages";

export default function DashboardPage({
  product_reviews,
  orders,
  wishlist,
  messages,
}: any) {
  console.log({ messages });
  return (
    <div className="px-8  py-20">
      <div className="border-b border-gray-200 dark:border-neutral-700">
        <nav className="flex gap-4 space-x-1" aria-label="Tabs" role="tablist">
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 active"
            id="tabs-with-badges-item-1"
            data-hs-tab="#tabs-with-badges-1"
            aria-controls="tabs-with-badges-1"
            role="tab"
          >
            Messages
          </button>

          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500"
            id="tabs-with-badges-item-3"
            data-hs-tab="#tabs-with-badges-3"
            aria-controls="tabs-with-badges-3"
            role="tab"
          >
            Order History
            <span className="hs-tab-active:bg-blue-100 hs-tab-active:text-blue-600 dark:hs-tab-active:bg-blue-800 dark:hs-tab-active:text-white ms-1 py-0.5 px-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-neutral-700 dark:text-neutral-300">
              {orders?.length}
            </span>
          </button>

          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500"
            id="tabs-with-badges-item-5"
            data-hs-tab="#tabs-with-badges-5"
            aria-controls="tabs-with-badges-5"
            role="tab"
          >
            Wishlist
          </button>
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500"
            id="tabs-with-badges-item-6"
            data-hs-tab="#tabs-with-badges-6"
            aria-controls="tabs-with-badges-6"
            role="tab"
          >
            Reviews & Comments
          </button>
        </nav>
      </div>

      <div className="mt-3">
        <div
          id="tabs-with-badges-1"
          role="tabpanel"
          aria-labelledby="tabs-with-badges-item-1"
        >
          <div>
            <DashboardMessages messages={messages} />
          </div>
        </div>

        <div
          id="tabs-with-badges-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-badges-item-3"
        >
          <div>
            <DashboardOrderHistory orders={orders} />
          </div>
        </div>

        <div
          id="tabs-with-badges-5"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-badges-item-5"
        >
          <div>
            <DashboardFavoriteProducts wishlist={wishlist} />
          </div>
        </div>
        <div
          id="tabs-with-badges-6"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-badges-item-6"
        >
          <div>
            <DashboardReviewsAndComments product_reviews={product_reviews} />
          </div>
        </div>
      </div>
    </div>
  );
}
