"use client";
import { useSidebarStates } from "@/context/global";
import { excludes_routes } from "@/data/other";

import { revised_industries } from "@/utils/data";
import { usePathname } from "next/navigation";
import React from "react";

export default function IndustriesSidebar() {
  const pathname = usePathname();
  const isExcluded = excludes_routes.some((pattern) => pattern.test(pathname));

  const { showSidebar } = useSidebarStates();
  return (
    <>
      IndustriesSidebar
      {showSidebar && (
        <div className=" ">
          {!isExcluded && (
            <div
              id="docs-sidebar"
              className="hs-overlay w-64 bg-gray-50 h-screen lg:sticky  overflow-y-auto [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60]      md:relative   border-e border-gray-200  pt-4 pb-10   lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800 dark:border-neutral-700"
              // className=" w-72  pl-4   overflow-y-auto pt-6 pb-6 text-sm z-[50] h-screen lg:sticky fixed md:relative bg-[#F0EFE9]/70   top-14  transition-transform -translate-x-full  border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
              aria-label="Sidebar"
            >
              <div className="relative flex flex-col w-full h-full max-h-full">
                <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                  <nav
                    className="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
                    data-hs-accordion-always-open
                  >
                    <ul className="flex flex-col space-y-1">
                      <ul>
                        {revised_industries?.map(
                          ({ industry, categories }: any) => (
                            <li
                              key={industry}
                              className="hs-accordion"
                              id={`accordion-${industry}`}
                            >
                              <button
                                type="button"
                                className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
                                aria-expanded="true"
                                aria-controls={`accordion-${industry}-child`}
                              >
                                <a
                                  href={`/industries/${industry}`}
                                  className="flex gap-2 hover:text-blue-600 items-center w-fit text-md capitalize"
                                >
                                  <img
                                    src={`/icons/${industry}.png`}
                                    className="w-6 grayscale"
                                  />
                                  {industry?.replaceAll("-", " ")}
                                </a>
                                <svg
                                  className="hs-accordion-active:block ms-auto hidden size-4"
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
                                  <path d="m18 15-6-6-6 6" />
                                </svg>
                                <svg
                                  className="hs-accordion-active:hidden ms-auto block size-4"
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
                                  <path d="m6 9 6 6 6-6" />
                                </svg>
                              </button>

                              <div
                                id={`accordion-${industry}-child`}
                                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                                role="region"
                                aria-labelledby={`accordion-${industry}`}
                              >
                                <ul
                                  className="hs-accordion-group ps-8 pt-1 space-y-1"
                                  data-hs-accordion-always-open
                                >
                                  {categories?.map(
                                    ({ name, subcategories }: any) => (
                                      <li
                                        key={name}
                                        className="hs-accordion"
                                        id={`accordion-${name}`}
                                      >
                                        <button
                                          type="button"
                                          className="hs-accordion-toggle capitalize w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
                                          aria-expanded="true"
                                          aria-controls={`accordion-${name}-child`}
                                        >
                                          <a
                                            className="w-fit hover:text-blue-600"
                                            href={`/industries/${industry}/main-categories/${name}`}
                                          >
                                            {" "}
                                            {name
                                              ?.replaceAll("-", " ")
                                              ?.replaceAll("and", "&")}
                                          </a>

                                          <svg
                                            className="hs-accordion-active:block ms-auto hidden size-4"
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
                                            <path d="m18 15-6-6-6 6" />
                                          </svg>
                                          <svg
                                            className="hs-accordion-active:hidden ms-auto block size-4"
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
                                            <path d="m6 9 6 6 6-6" />
                                          </svg>
                                        </button>

                                        <div
                                          id={`accordion-${name}-child`}
                                          className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                                          role="region"
                                          aria-labelledby={`accordion-${name}`}
                                        >
                                          <ul className="pt-1 space-y-1">
                                            {subcategories?.map((sub: any) => (
                                              <li key={sub.name}>
                                                <a
                                                  className="flex items-center hover:text-blue-600 capitalize gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200"
                                                  href={`/industries/${industry}/main-categories/${name}/categories/${sub?.name}`}
                                                >
                                                  {sub.name
                                                    ?.replaceAll("-", " ")
                                                    ?.replaceAll("and", "&")}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </li>
                          )
                        )}
                      </ul>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* <ul className="space-y-2 w-full font-medium">
                {industries?.map(({ icon, name }) => (
                  <li>
                    <a
                      href={`/industries/${name}`}
                      key={name}
                      className="flex capitalize items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      {icon}
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        {name?.replaceAll("-", " ")}
                      </span>
                    </a>
                  </li>
                ))}
              </ul> */}
            </div>
          )}
        </div>
      )}
    </>
  );
}
