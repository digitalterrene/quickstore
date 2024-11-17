"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { BsChevronRight } from "react-icons/bs";

export default function IndustriesNavHeader({ navs }: any) {
  const pathname = usePathname();

  function containsNumbers(str: any) {
    return str.match(/\d/) !== null;
  }

  // Split the pathname by '/'
  const parts = pathname
    ? pathname.split("/").filter((part) => !containsNumbers(part))
    : [];

  // Create breadcrumb elements from the pathname parts
  const breadcrumb = parts.map((part, index) => (
    <React.Fragment key={index}>
      <li
        className={`text-sm${
          index === parts.length - 1
            ? " font-semibold truncate dark:text-gray-200"
            : ""
        }`}
      >
        <a
          className={`flex items-center capitalize hover:text-blue-600`}
          href={`/${part.replaceAll(" ", "-")}`}
        >
          {part.replaceAll("-", " ")}
        </a>
      </li>
      {pathname !== "/" && (
        <>
          {index !== parts.length - 1 && (
            <li>
              <BsChevronRight className="" />
            </li>
          )}
        </>
      )}
    </React.Fragment>
  ));

  return (
    <div
      className={`p-4 bordesr-t flex justify-between items-center ${
        pathname === "/" ? "bg-[#232F3E] " : "bg-gray-800"
      } text-white`}
    >
      <div
        x-data="{}"
        x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
        className="  -mb-1  w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <ul
          x-ref="logos"
          className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll"
        >
          {navs ? (
            <>
              {navs?.map((nav: any, i: number) => (
                <li key={i}>
                  <button
                    type="button"
                    className="py-2 whitespace-nowrap px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-white disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400"
                  >
                    {nav?.industry}
                  </button>
                </li>
              ))}
            </>
          ) : (
            <>
              <li>
                <button
                  type="button"
                  className="py-2 whitespace-nowrap px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-white disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400"
                >
                  Disney
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="py-2 whitespace-nowrap px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-white disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400"
                >
                  AirBnB
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="py-2 whitespace-nowrap px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-white disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400"
                >
                  Apple Store
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="py-2 whitespace-nowrap px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-white disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400"
                >
                  Spark
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="py-2 whitespace-nowrap px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-white disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400"
                >
                  Samsung
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="py-2 whitespace-nowrap px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-white disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400"
                >
                  Quora
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="py-2 whitespace-nowrap px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-white disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400"
                >
                  Quickshop Store
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
