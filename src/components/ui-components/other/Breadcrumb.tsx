"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { BsChevronRight } from "react-icons/bs";

export default function Breadcrumb() {
  const pathname = usePathname();

  function containsNumbers(str: any) {
    return str.match(/\d/) !== null;
  }

  // Split the pathname by '/'
  const parts = pathname
    ? pathname.split("/").filter((part: string) => !containsNumbers(part))
    : [];
  const breadcrumb = parts.map((part: string, index: number) => (
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
  return <div className="flex gap-1 items-center">{breadcrumb}</div>;
}
