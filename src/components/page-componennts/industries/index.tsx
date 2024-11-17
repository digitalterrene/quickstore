"use client";
import ProductCard from "@/components/ui-components/product/ProductCard";
import { industries } from "@/utils/data";
import React from "react";

export default function IndustriesPage() {
  return (
    <section aria-labelledby="collection-heading" className="mx-auto ">
      <div className="  space-y-12 lg:grid gap-8 lg:grid-cols-4 lg:gap-x-8 lg:space-y-0">
        {industries.map((collection) => (
          <ProductCard />
        ))}
      </div>
    </section>
  );
}
