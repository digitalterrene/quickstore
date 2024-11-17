"use client";
import { popular_route_products } from "@/utils/data";
import { Checkbox, Progress } from "flowbite-react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

// const DropdownIndicator = () => null;
export default function FilterSidePanel() {
  const [priceRange, setPriceRange] = useState(50);
  const [showThisCount, setShowThisCount] = useState(5);
  const pathname = usePathname();
  const includesIn_routes = pathname.includes(pathname);

  // Find the category that matches the current pathname
  const currentCategory = Object.keys(popular_route_products).find((category) =>
    pathname.includes(category)
  );
  return (
    <div className="w-72 p-6  space-y-6">
      {/* Category div starts here */}
      <div className="w-full bg-white h-fit shadow-2xl border rounded-xl  pb-2 p-8 ">
        <p className="font-bold text-gray-500  mb-3 text-lg">Popular</p>
        {/* Check if the currentCategory exists and iterate over its items */}
        {currentCategory && (
          <div key={currentCategory}>
            {/* Iterate over the items in the current category */}
            {popular_route_products[currentCategory]
              .slice(0, showThisCount)
              .map((item) => (
                <a
                  key={item}
                  className="flex items-center capitalize font-medium -ml-3 gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  {item?.replaceAll("-", " ")}
                </a>
              ))}
          </div>
        )}
        <button
          type="button"
          onClick={() => {
            if (
              popular_route_products[currentCategory]?.length === showThisCount
            ) {
              setShowThisCount(5);
            } else {
              setShowThisCount(popular_route_products[currentCategory]?.length);
            }
          }}
          className="py-2 px-4 mt-4 w-full text-start  inline-flex justify-between -ml-3 items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
        >
          See{" "}
          {popular_route_products[currentCategory]?.length === showThisCount
            ? "Less"
            : "All"}
          <svg
            className="w-2.5 h-auto"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 7C0.447715 7 -3.73832e-07 7.44771 -3.49691e-07 8C-3.2555e-07 8.55228 0.447715 9 1 9L13.0858 9L7.79289 14.2929C7.40237 14.6834 7.40237 15.3166 7.79289 15.7071C8.18342 16.0976 8.81658 16.0976 9.20711 15.7071L16.0303 8.88388C16.5185 8.39573 16.5185 7.60427 16.0303 7.11612L9.20711 0.292893C8.81658 -0.0976318 8.18342 -0.0976318 7.79289 0.292893C7.40237 0.683417 7.40237 1.31658 7.79289 1.70711L13.0858 7L1 7Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      {/* Category div ends here */}
      {/* colors div starts here */}
      <div className="w-full bg-white h-44 shadow-2xl border rounded-xl   p-8 ">
        <p className="font-bold text-gray-500  mb-3 text-lg">Colors</p>
        <div className="grid grid-cols-4 gap-5 mr-8">
          <button
            type="button"
            className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-4 w-4 rounded-full border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800"
          ></button>{" "}
          <button
            type="button"
            className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-4 w-4 rounded-full border border-transparent font-semibold bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800"
          ></button>{" "}
          <button
            type="button"
            pink
            className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-4 w-4 rounded-full border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800"
          ></button>{" "}
          <button
            type="button"
            className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-4 w-4 rounded-full border border-transparent font-semibold bg-black text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800"
          ></button>{" "}
          <button
            type="button"
            className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-4 w-4 rounded-full border border-transparent font-semibold bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800"
          ></button>{" "}
          <button
            type="button"
            className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-4 w-4 rounded-full border border-transparent font-semibold bg-purple-500 text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800"
          ></button>
        </div>
      </div>
      {/* colors div ends here */}
      {/* price range div starts here */}
      <div className="w-full bg-white h-36 shadow-2xl border rounded-xl   p-8 ">
        <div className="w-full flex justify-between   items-center">
          <p className="font-bold text-gray-500  mb-3 -ml-2 text-lg">Price</p>
          <span className="py-1 px-4 h-fit -mr-4 inline-flex items-center gap-x-1 text-xs font-medium bg-gray-100   rounded-full ">
            $ <p className="text-blue-500"> {Math.floor(priceRange) * 50}</p>
          </span>
        </div>
        <div className=" mt-2 gap-5 mr-8">
          <div className="hs-tooltip inline-block [--placement:bottom]">
            <button
              type="button"
              className="hs-tooltip-toggle  w-44 inline-flex justify-center items-center gap-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[.05] dark:hover:border-white/[.1] dark:hover:text-white"
            >
              <Progress
                onChange={(e) => setPriceRange(e.target.value)}
                color="blue"
                defaultValue={priceRange}
              />
              <span
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                role="tooltip"
              >
                {Math.floor(priceRange) * 50}
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* price range div ends here */}
      {/* colors div starts here */}
      <div className="w-full bg-white space-y-2 shadow-2xl border rounded-xl   p-8 ">
        <p className="font-bold text-gray-500  mb-3 text-lg">Location</p>
        <div className="border rounded-xl p-2 py-1 ">
          <Checkbox color="blue" label="United States" defaultChecked />
        </div>
        <div className="border rounded-xl p-2 py-1 ">
          <Checkbox color="blue" label="Europe" defaultChecked />
        </div>
        <div className="border rounded-xl p-2 py-1 ">
          <Checkbox color="blue" label="South Africa" defaultChecked />
        </div>{" "}
      </div>
      {/* colors div ends here */}
    </div>
  );
}
