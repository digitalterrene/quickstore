import React from "react";

export default function HomeHero() {
  return (
    <div>
      {" "}
      <div
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/front-view-cyber-monday-shopping-cart-with-bags-copy-space_23-2148657638.jpg?size=626&ext=jpg&ga=GA1.1.1195892238.1697052013&semt=ais')`,
        }}
        className="bg-no-repeat py-20 bg-cover bg-center "
      >
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          {/* <!-- Announcement Banner --> */}
          <div className="flex justify-center"></div>
          {/* <!-- End Announcement Banner --> */}
          {/* 
      <!-- Title --> */}
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Allowing you to easily
            </h1>
          </div>
          {/* <!-- End Title --> */}

          {/* <!-- Buttons --> */}
          <div className="text-center">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl border border-white to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
              href="#"
            >
              Shop
              <svg
                className="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
          {/* <!-- End Buttons --> */}
        </div>
      </div>
    </div>
  );
}
