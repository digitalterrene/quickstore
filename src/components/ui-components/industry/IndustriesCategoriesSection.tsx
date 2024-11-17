"use client";
import React from "react";
import Breadcrumb from "../other/Breadcrumb";
import { revised_industries } from "@/utils/data";
import { mapIndustriesToBlocks } from "@/utils/mapIndustriesToBlocks";
import { usePathname } from "next/navigation";

export default function IndustriesCategoriesSection() {
  const numBlocks = 9; // Adjust based on how many blocks you want
  // const elements: any = mapIndustriesToBlocks(revised_industries, numBlocks);
  const pathname = usePathname();
  //fecthing the categories/industries/equivalent from the array
  // Remove any trailing slash from the pathname
  const cleanPathname = pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;

  // Split the pathname into segments
  const pathSegments = cleanPathname.split("/");

  // Get the last segment, which is the last element in the array
  const lastSegment = pathSegments[pathSegments.length - 1];

  // removing the industry element if one is specified

  const index = revised_industries.findIndex(function (industry) {
    return industry.industry === lastSegment;
  });

  const elements_to_send_to_helper_function =
    pathname === "/industries"
      ? revised_industries
      : [revised_industries[index]];

  const unprocessed_elements: any = mapIndustriesToBlocks(
    elements_to_send_to_helper_function,
    pathname !== "/industries" ? numBlocks + 1 : numBlocks
  );
  const elements = unprocessed_elements?.slice(
    pathname === "/industries" ? 0 : 1,
    unprocessed_elements?.length
  );
  return (
    <>
      <div className="sm:flex p-4  items-start sm:justify-between">
        <div className="space-y-4">
          <h2
            id="category-heading"
            className="text-4xl capitalize font-bold tracking-tight text-gray-900"
          >
            Shop by Category
          </h2>
          <div>
            <ol
              className="flex  w-full items-center    whitespace-nowrap min-w-0"
              aria-label="Breadcrumb"
            >
              <li className="  gap-1 w-fit flex items-center">
                <a
                  className="flex items-center font-medium  text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 me-3 size-4"
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
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <span className="  "> Quickshop Stores</span>
                </a>
              </li>
              <div className=" w-full">
                <Breadcrumb />
              </div>
            </ol>
          </div>
        </div>
        <div className="flex gap-4 items-center text-sm font-semibold text-indigo-600 hover:text-indigo-500 ">
          <div className=" flex  p-3 w-60 gap-3 bg-gray-800  ] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg"
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-cover w-14 h-14 rounded object-center group-hover:opacity-75"
            />
            <div className="w-full">
              <div className="flex items-center justify-between mb-2">
                <h6 className="font-semibold text-base leading-7 text-white ">
                  Denim Jacket
                </h6>
                <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                  $100
                </h6>
              </div>
              <p className="text-xs leading-5 text-gray-500"> Show now</p>
            </div>
          </div>
          <div className=" flex  p-3 w-60 gap-3 bg-gray-800  ] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg"
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-cover w-14 h-14 rounded object-center group-hover:opacity-75"
            />
            <div className="w-full">
              <div className="flex items-center justify-between mb-2">
                <h6 className="font-semibold text-base leading-7 text-white ">
                  Denim Jacket
                </h6>
                <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                  $100
                </h6>
              </div>
              <p className="text-xs leading-5 text-gray-500"> Show now</p>
            </div>
          </div>{" "}
          <div className=" flex  p-3 w-60 gap-3 bg-gray-800  ] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg"
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-cover w-14 h-14 rounded object-center group-hover:opacity-75"
            />
            <div className="w-full">
              <div className="flex items-center justify-between mb-2">
                <h6 className="font-semibold text-base leading-7 text-white ">
                  Denim Jacket
                </h6>
                <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                  $100
                </h6>
              </div>
              <p className="text-xs leading-5 text-gray-500"> Show now</p>
            </div>
          </div>
        </div>
      </div>
      {/* Blocks starts here */}
      <>
        <div className="mx-auto p-4">
          <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
            {/* Element one */}
            {elements[0] && (
              <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                <img
                  src={elements[0].image || "/images/default-image.jpg"}
                  alt={elements[0].name}
                  className="object-cover object-center group-hover:opacity-75"
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50"
                />
                <div className="flex items-end p-6">
                  <a href={elements[0].link}>
                    <h3 className="font-semibold text-white">
                      <p className="capitalize">
                        <span className="absolute capitalize inset-0" />
                        {elements[0]?.name?.replaceAll("-", " ")}
                      </p>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </a>
                </div>
              </div>
            )}
            {/* Element two */}
            {elements[1] && (
              <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                <img
                  src={elements[1].image || "/images/default-image.jpg"}
                  alt={elements[1].name}
                  className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                />
                <div className="flex items-end p-6 sm:absolute sm:inset-0">
                  <a href={elements[1].link}>
                    <h3 className="font-semibold text-white">
                      <p className="capitalize">
                        <span className="absolute inset-0" />
                        {elements[1].name?.replaceAll("-", " ")}
                      </p>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </a>
                </div>
              </div>
            )}
            {/* Block for elements three and four */}
            <div className="flex gap-4 w-full">
              {/* Element three */}
              {elements[2] && (
                <div
                  style={{
                    backgroundImage: `url("${
                      elements[2].image || "/images/default-image.jpg"
                    }")`,
                  }}
                  className="w-full bg-no-repeat bg-cover bg-center items-end flex p-4 rounded-md"
                >
                  <div className="font-semibold text-white">
                    <p className="capitalize">
                      <span className="absolute inset-0" />
                      {elements[2]?.name?.replaceAll("-", " ")}
                    </p>
                    <a aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </a>
                  </div>
                </div>
              )}
              {/* Element four */}
              {elements[3] && (
                <a
                  style={{
                    backgroundImage: `url("${
                      elements[3].image || "/images/default-image.jpg"
                    }")`,
                  }}
                  className="w-full bg-no-repeat bg-cover bg-center items-end flex p-4 rounded-md"
                >
                  <div className="font-semibold text-white">
                    <p className="capitalize">
                      <span className="absolute inset-0" />
                      {elements[3]?.name?.replaceAll("-", " ")}
                    </p>
                    <a aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </a>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
        {/* Block for the rest of the elements */}
        <div className="mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-8">
            {/* Remaining elements */}
            {elements.slice(4).map((element: any, index: number) => (
              <a
                key={index}
                href={element.link}
                className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer"
              >
                <img
                  className="h-64 object-cover object-center"
                  src={element.image || "/images/default-image.jpg"}
                  alt={element.name}
                />
                <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                  <div className="flex items-center justify-between mb-2">
                    <h6 className="font-semibold capitalize text-base leading-7 text-black">
                      {element.name?.replaceAll("-", " ")}
                    </h6>
                    <h6 className="font-semibold  text-base leading-7 text-indigo-600 text-right">
                      {element.price || "100"}
                    </h6>
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Show now</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </>
    </>
  );
}
