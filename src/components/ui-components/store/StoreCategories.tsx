import CategoriesPreview from "@/components/templates/front-store-configs/categories/CategoriesPreview";
import React from "react";

export default function StoreCategories({ categories }: any) {
  return (
    <div className="p-16">
      <CategoriesPreview frontStoreConfigInputs={categories} />
    </div>
  );
}
