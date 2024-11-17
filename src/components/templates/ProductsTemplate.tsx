"use client";
import React, { useState, useEffect } from "react";
import ProductCardBasic from "../ui-components/product/ProductCardBasic";
import Pagination from "../ui-components/pagination/Pagination";
import { useProductsWrapper } from "@/context/global";
import ProductCardLong from "../ui-components/product/ProductCardLong";
import ProductCard from "../ui-components/product/ProductCard";

export default function ProductsTemplate({ response }: any) {
  console.log({ response });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { isGridView } = useProductsWrapper();
  const [data, setData] = useState(response);
  console.log({ products: data });
  const fetchPageData = async (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get("page") || "1", 10);
    if (page !== currentPage) {
      setCurrentPage(page);
      fetchPageData(page);
    }
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (currentPage !== parseInt(urlParams.get("page") || "1", 10)) {
      urlParams.set("page", currentPage.toString());
      window.history.pushState(
        {},
        "",
        `${window.location.pathname}?${urlParams.toString()}`
      );
    }
  }, [currentPage]);

  return (
    <div className="w-full  p-4">
      <h2 className="font-manrope font-bold text-4xl text-black mb-8 max-xl:text-center">
        Recommended Products
      </h2>
      <div className="w-full  ">
        {isGridView ? (
          <div className="grid grid-cols-1 gap-x-6  gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data?.results?.map((product: any) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="w-full ">
            {data?.results?.map((product: any) => (
              <ProductCardLong key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={data?.totalPages}
        totalResults={data?.totalResults}
        limit={3}
        onPageChange={fetchPageData}
      />
    </div>
  );
}
