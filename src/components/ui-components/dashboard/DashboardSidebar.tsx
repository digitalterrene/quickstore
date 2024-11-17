"use client";
import React, { useEffect, useState } from "react";

const tabs = [
  "profile",
  "edit-profile",
  "wishlist",
  "orders-history",
  "delivery-addresses",
  "banking-details",
];
export default function DashboardSidebar() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  useEffect(() => {
    // import("preline");
  }, []);
  return (
    <nav
      className="hs-accordion-group sticky top-16 max-w-72 h-[70rem] w-full flex flex-col flex-wrap"
      data-hs-accordion-always-open
    >
      <ul className="space-y-1.5">
        {tabs?.map((tab, index) => (
          <li key={index} onClick={() => setActiveTab(tab)}>
            <p
              className={`flex capitalize items-center gap-x-3.5 py-2 px-2.5 bg-${
                activeTab === tab ? "gray-100" : "white"
              }  font-${
                activeTab === tab ? "bold" : "normal"
              } text-sm text-slate-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
            >
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
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              {tab?.replaceAll("-", " ")}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
}
