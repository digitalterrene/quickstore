import { usePathname } from "next/navigation";
import React from "react";
import { IoHeartOutline } from "react-icons/io5";

export default function ProductCard({ product }: any) {
  const routes_to_exclude = [/\/stores/];
  const pathname = usePathname();
  const isExcluded = routes_to_exclude.some((pattern) =>
    pattern.test(pathname)
  );
  const customCategory = isExcluded
    ? `/stores/${product?.user_id || "product_user_id"}/products/${
        product?._id
      }`
    : `/industries/${
        product?.quickshop_stores_category || "quickshop-stores-category"
      }/products/view-product/${product?._id}`;

  return (
    <a
      href={customCategory}
      className="bg-white rounded-2xl border shadow-md p-5 cursor-pointer group hover:-translate-y-2 transition-all relative"
    >
      <button
        data-hs-overlay="#hs-overlay-body-scrolling"
        type="button"
        className="hidden group-hover:flex bg-gray-100 w-10 h-10  items-center justify-center rounded-full cursor-pointer absolute top-4 right-4"
      >
        <IoHeartOutline className="text-lg text-blue-600" />
      </button>

      <div className="w-6/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
        <img
          src={
            product?.image ||
            product?.productImage ||
            (product?.images &&
              product?.images.length > 0 &&
              product?.images[0]) ||
            "https://cdn-icons-png.flaticon.com/128/15234/15234678.png"
          }
          alt="Product 1"
          className="h-full rounded-lg w-full object-cover"
        />
      </div>

      <div>
        <h3 className="text-lg font-extrabold text-ellipsis line-clamp-1 text-gray-800">
          {product?.name || product?.productNameEn || "Product name"}
        </h3>
        <p className="text-gray-600 text-ellipsis line-clamp-2 text-sm mt-2">
          {product?.tagline ||
            product?.productSku ||
            "product short description"}
        </p>
        <h4 className="text-lg text-gray-800 font-bold mt-4">
          ${product?.price || product?.sellPrice || 0}
        </h4>
      </div>
    </a>
  );
}
