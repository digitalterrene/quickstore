import React from "react";

export default function ShopByCategory() {
  return (
    <div className="mx-auto p-4  ">
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <h2
          id="category-heading"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          Shop by Category
        </h2>
        <a
          href="#"
          className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
        >
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
          <img
            src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg"
            alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
            className="object-cover object-center group-hover:opacity-75"
          />
          <div
            aria-hidden="true"
            className="bg-gradient-to-b from-transparent to-black opacity-50"
          />
          <div className="flex items-end p-6">
            <a href="/industries/all?category=new-arrivals">
              <h3 className="font-semibold text-white">
                <p>
                  <span className="absolute inset-0" />
                  New Arrivals
                </p>
              </h3>
              <p aria-hidden="true" className="mt-1 text-sm text-white">
                Shop now
              </p>
            </a>
          </div>
        </div>
        <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
          <img
            src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
            alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
            className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
          />
          <div
            aria-hidden="true"
            className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
          />
          <div className="flex items-end p-6 sm:absolute sm:inset-0">
            <a href="/industries/all?category=accessories">
              <h3 className="font-semibold text-white">
                <p>
                  <span className="absolute inset-0" />
                  Accessories
                </p>
              </h3>
              <p aria-hidden="true" className="mt-1 text-sm text-white">
                Shop now
              </p>
            </a>
          </div>
        </div>
        <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
          <img
            src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
            alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
            className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
          />
          <div
            aria-hidden="true"
            className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
          />
          <div className="flex items-end p-6 sm:absolute sm:inset-0">
            <a href="/industries/all?category=workspace">
              <h3 className="font-semibold text-white">
                <p>
                  <span className="absolute inset-0" />
                  Workspace
                </p>
              </h3>
              <p aria-hidden="true" className="mt-1 text-sm text-white">
                Shop now
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:hidden">
        <a
          href="/industries/all?category=all"
          className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  );
}
