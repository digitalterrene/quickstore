import React from "react";

export default function NewArrivals() {
  return (
    <div className="mx-auto  p-4 ">
      <h2 className="font-manrope font-bold text-4xl text-black mb-8 max-xl:text-center">
        New Arrivals
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        <a
          href="javascript:;"
          className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer"
        >
          <img
            src="https://pagedone.io/asset/uploads/1700731972.png"
            alt="Jacket image"
          />
          <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
            <div className="flex items-center justify-between mb-2">
              <h6 className="font-semibold text-base leading-7 text-black ">
                Trendy Jacket
              </h6>
              <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                $100
              </h6>
            </div>
            <p className="text-xs leading-5 text-gray-500">
              Women's Winter Wear
            </p>
          </div>
        </a>
        <a
          href="javascript:;"
          className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer"
        >
          <img
            src="	https://pagedone.io/asset/uploads/1700731993.png"
            alt="Blazer image"
          />
          <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
            <div className="flex items-center justify-between mb-2">
              <h6 className="font-semibold text-base leading-7 text-black ">
                Black Blazer
              </h6>
              <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                $100
              </h6>
            </div>
            <p className="text-xs leading-5 text-gray-500">Men’s Suits</p>
          </div>
        </a>
        <a
          href="javascript:;"
          className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer"
        >
          <img
            src="	https://pagedone.io/asset/uploads/1700732011.png"
            alt="printed top image"
          />
          <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
            <div className="flex items-center justify-between mb-2">
              <h6 className="font-semibold text-base leading-7 text-black ">
                Red Flowers
              </h6>
              <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                $100
              </h6>
            </div>
            <p className="text-xs leading-5 text-gray-500">Womenswear</p>
          </div>
        </a>

        <a
          href="javascript:;"
          className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer"
        >
          <img
            src="https://pagedone.io/asset/uploads/1700732027.png"
            alt="Denim jacket image"
          />
          <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
            <div className="flex items-center justify-between mb-2">
              <h6 className="font-semibold text-base leading-7 text-black ">
                Denim Jacket
              </h6>
              <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                $100
              </h6>
            </div>
            <p className="text-xs leading-5 text-gray-500">Children Wear</p>
          </div>
        </a>
      </div>
    </div>
  );
}
