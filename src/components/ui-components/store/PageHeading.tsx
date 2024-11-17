import React from "react";
import StoresBreadcrumbHeader from "./StoresBreadcrumbHeader";

export default function PageHeading() {
  return (
    <div className="bg-[#111827] flex flex-col items-center w-full p-6">
      <div className="flex flex-col items-center w-full">
        <nav className="sm:hidden" aria-label="Back">
          <a
            href="#"
            className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-200"
          >
            <svg
              className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </a>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center ">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
            Products
          </h2>
        </div>
      </div>
    </div>
  );
}
