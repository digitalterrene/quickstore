import {
  pullMultipleStoreData,
  pullSingleStoreData,
} from "@/api-calls/user-crud-operations/pullStoreData";
import { useAuthContext } from "@/context/auth-context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function FavoritesTable({ products }: any) {
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<any>([]);
  const { user } = useAuthContext();
  const router = useRouter();

  const handleSelectAll = () => {
    if (selectedAll) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(products.map((product: any) => product._id));
    }
    setSelectedAll(!selectedAll);
  };

  const handleSelectProduct = (productId: string) => {
    setSelectedProducts((prevSelected: any) => {
      const newSelected = prevSelected.includes(productId)
        ? prevSelected.filter((id: any) => id !== productId)
        : [...prevSelected, productId];

      return newSelected;
    });
  };

  const handleDelete = async () => {
    const id = toast.loading("Deleting selected wishlist...");
    let res;
    if (selectedProducts.length === 1) {
      res = await pullSingleStoreData(
        user?._id,
        user?._id,
        user?.token,
        "wishlist",
        selectedProducts[0]
      );
    } else {
      res = await pullMultipleStoreData(
        user?._id,
        user?._id,
        user?.token,
        "wishlist",
        selectedProducts
      );
    }
    if (res) {
      toast.update(id, {
        render: `${res?.message}`,
        type: `${res?.response === "ok" ? "success" : "error"}`,
        isLoading: false,
      });
      setTimeout(() => {
        router.refresh();
        toast.dismiss();
      }, 5000);
    }
  };

  return (
    <div className="px-1">
      <ToastContainer />
      <div className="-mx-4 mt-1 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    checked={selectedAll}
                    onChange={handleSelectAll}
                    id="hs-select-all-checkbox"
                  />
                  <label
                    htmlFor="hs-select-all-checkbox"
                    className="text-sm font-semibold text-gray-900 dark:text-neutral-400"
                  >
                    Product
                  </label>
                  {selectedProducts.length > 0 && (
                    <button
                      type="button"
                      onClick={handleDelete}
                      className="py-1 ml-auto px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-100 text-red-800 hover:bg-red-200 focus:outline-none focus:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:bg-red-800/30 dark:hover:bg-red-800/20 dark:focus:bg-red-800/20"
                    >
                      <RiDeleteBin6Line />
                      Delete
                    </button>
                  )}
                </div>
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Price
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Category
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Stock
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Products Sold
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">View Product</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((wishproduct: any, planIdx: any) => (
              <tr key={wishproduct?._id}>
                <td
                  className={classNames(
                    planIdx === 0 ? "" : "border-t border-b",
                    "relative flex items-start gap-3 py-4 pl-4 pr-3 text-sm align-top sm:pl-6"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      checked={selectedProducts?.includes(wishproduct?._id)}
                      onChange={() => handleSelectProduct(wishproduct?._id)}
                      id={`hs-product-checkbox-${wishproduct?._id}`}
                    />
                    <label
                      htmlFor={`hs-product-checkbox-${wishproduct?._id}`}
                      className="text-sm text-gray-500 dark:text-neutral-400 sr-only"
                    >
                      Select product
                    </label>
                    <img
                      src={
                        wishproduct?.product?.image ||
                        wishproduct?.product?.productImage
                      }
                      className="w-24 rounded-lg h-24"
                    />
                    <div className="flex flex-col max-w-lg">
                      <span className="font-bold text-gray-800">
                        {wishproduct?.product?.name}
                      </span>
                      <span className="line-clamp-3 text-gray-500">
                        {wishproduct?.product?.tagline}
                      </span>
                    </div>
                  </div>
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? "" : "border-t border-b border-gray-200",
                    "hidden px-3 py-3.5 text-sm text-gray-800 align-top lg:table-cell"
                  )}
                >
                  ${wishproduct?.product?.price}
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? "" : "border-t border-b border-gray-200",
                    "hidden px-3 py-3.5 text-sm text-gray-500 align-top lg:table-cell"
                  )}
                >
                  {wishproduct?.product?.quickshop_stores_category}
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? "" : "border-t border-b border-gray-200",
                    "hidden px-3 py-3.5 text-sm text-gray-500 align-top lg:table-cell"
                  )}
                >
                  {wishproduct?.product?.stock_count}
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? "" : "border-t border-b border-gray-200",
                    "px-3 py-3.5 text-sm text-gray-500 align-top"
                  )}
                >
                  {wishproduct?.product?.units_sold}
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? "" : "border-t border-b",
                    "relative py-3.5 pl-3 pr-4 text-right text-sm font-medium align-top sm:pr-6"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => {
                      window.location.href = `/industries/quickshop_stores_category/products/view-product/${wishproduct?.product?._id}`;
                    }}
                    className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                  >
                    View Product
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
