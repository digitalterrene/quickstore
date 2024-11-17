import { usePathname } from "next/navigation";

export default function ProductCardBasic({ product }: any) {
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
      className="group border cursor-pointer rounded-lg relative"
    >
      {/* {product.image}{" "} */}
      <img
        className="relative h-72 object-cover p-1 object-center w-full bg-center bg-gray-200 rounded-t-lg shadow-b-lg bg-cover flex justify-center items-end"
        src={
          product?.image || // Use `product.image` if it's directly available
          (typeof product?.productImage === "string" &&
          product?.productImage.startsWith("[")
            ? JSON.parse(product.productImage)[0] // Parse the serialized array string and use the first image URL
            : product?.productImage) || // If `productImage` is a valid single string image URL, use it directly
          (Array.isArray(product?.images) && product?.images.length > 0
            ? product.images[0]?.src || product?.images[0] // If `images` is an array, use the first image
            : typeof product?.images === "string"
            ? product.images
            : null) || // If `images` is a string, use it directly
          "https://cdn-icons-png.flaticon.com/128/15234/15234678.png" // Fallback URL if no image is available
        }
        // src={
        //   product?.image ||
        //   product?.productImage ||
        //   "https://img.freepik.com/free-photo/red-light-round-podium-black-background-mock-up_43614-950.jpg?t=st=1720852501~exp=1720856101~hmac=b9bae86f8d157d097375642fa4baca7b6a25ac686ff6168497a03d2091d2d862&w=740"
        // }
        alt="Image"
      />
      <div className="mt-4 px-2 pb-2 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={product.href}>
              <span
                aria-hidden="true"
                className="absolute line-clamp-2 inset-0"
              />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
    </a>
  );
}
