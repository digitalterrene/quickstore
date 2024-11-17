import React from "react";

export default function TrendingProducts() {
  return (
    <section aria-labelledby="trending-heading" className="bg-white">
      <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:py-32">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2
            id="trending-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Trending products
          </h2>
          <a
            href="#"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="relative mt-8">
          <div className="relative w-full overflow-x-auto">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
            >
              <li className="inline-flex w-64 flex-col text-center lg:w-auto">
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg"
                      alt="Black machined steel pen with hexagonal grip and small white logo at top."
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-sm text-gray-500">Black</p>
                    <h3 className="mt-1 font-semibold text-gray-900">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Machined Pen
                      </a>
                    </h3>
                    <p className="mt-1 text-gray-900">$35</p>
                  </div>
                </div>

                <h4 className="sr-only">Available colors</h4>
                <ul
                  role="list"
                  className="mt-auto flex items-center justify-center space-x-3 pt-6"
                >
                  <li className="h-4 w-4 rounded-full border border-black bg-[#111827] border-opacity-10">
                    <span className="sr-only">Black</span>
                  </li>
                  <li className="h-4 w-4 rounded-full bg-[#fde68a] border border-black border-opacity-10">
                    <span className="sr-only">Brass</span>
                  </li>
                  <li className="h-4 w-4 rounded-full border bg-[#e5e7eb] border-black border-opacity-10">
                    <span className="sr-only">Chrome</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 px-4 sm:hidden">
          <a
            href="#"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
