export default function DashboardOrderHistory({ orders }: any) {
  console.log({ orders });
  return (
    <div className="bg-white">
      <main className="mx-auto     ">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Your Orders
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Check the status of recent orders, manage returns, and discover
            similar products.
          </p>
        </div>

        <div className="mt-12 space-y-16 sm:mt-16">
          {orders?.map((order: any) => (
            <section
              key={order.number}
              aria-labelledby={`${order.number}-heading`}
            >
              <div className="space-y-1 md:flex md:items-baseline md:space-x-4 md:space-y-0">
                <h2
                  id={`${order.number}-heading`}
                  className="text-lg font-medium text-gray-900 md:flex-shrink-0"
                >
                  Order #{order.order_number}
                </h2>
                <div className="space-y-5 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 md:min-w-0 md:flex-1">
                  <p className="text-sm capitalize font-medium text-gray-500">
                    {order.status}
                  </p>
                  <div className="flex hidden text-sm font-medium">
                    <a
                      href={order.href}
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Manage order
                    </a>
                    <div className="ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6">
                      <a
                        href={order.invoiceHref}
                        className="text-indigo-600 hover:text-indigo-500"
                      >
                        View Invoice
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="-mb-6 mt-6 flow-root divide-y divide-gray-200 border-t border-gray-200">
                {order?.products?.map((product: any) => (
                  <div key={product._id} className="py-6 sm:flex">
                    <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-20 w-20 flex-none rounded-md object-cover object-center sm:h-48 sm:w-48"
                      />
                      <div className="min-w-0 flex-1 pt-1.5 sm:pt-0">
                        <h3 className="text-sm font-medium text-gray-900">
                          <a href={product.href}>{product.name}</a>
                        </h3>
                        <p className="truncate text-sm text-gray-500">
                          <span>{product.description} </span>
                        </p>
                        <p className="mt-1 font-medium text-gray-900">
                          {product.quantity}
                        </p>
                        <p className="mt-1 font-medium text-gray-900">
                          Unit Price: ${product.price}
                        </p>
                        <p className="mt-1 font-medium text-gray-900">
                          Total: ${product.itemTotal}
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 space-y-4 sm:ml-6 sm:mt-0 sm:w-40 sm:flex-none">
                      <button
                        type="button"
                        onClick={() => {
                          const location = window.location; // Make sure `location` is correctly assigned
                          location.href = `/industries/quickshop_stores_category/products/view-product/${product?.id}`;
                        }}
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 px-2.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-50 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 sm:w-full sm:flex-grow-0"
                      >
                        Buy again
                      </button>

                      <button
                        type="button"
                        className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-full sm:flex-grow-0"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
