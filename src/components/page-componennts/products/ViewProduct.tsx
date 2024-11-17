"use client";
import ProductCardBasic from "@/components/ui-components/product/ProductCardBasic";
import ProductView from "@/components/ui-components/product/ProductView";
import React from "react";

export default function ViewProduct({ product, related_products }: any) {
  // console.log({ product });
  return (
    <div>
      <ProductView product={product} />
      <div className="grid grid-cols-1 gap-x-6  gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {related_products?.map((product: any) => (
          <ProductCardBasic key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
