import React from "react";

export default function RootHero() {
  return (
    <div>
      <div className="w-full bg-[#F0EFE9]">
        <div className="lg:h-[38rem] mx-auto flex max-w-screen-xl flex-col space-y-6 overflow-hidden px-6 pb-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="  lg:max-w-lg">
              <p className="mb-4">— Creative Design</p>
              <h1 className="font-[900] text-3xl text-gray-900 lg:text-5xl lg:leading-snug">
                Exclusive Agency for Fast growing Startups
              </h1>

              <div className="mt-8 space-y-5 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                alias delectus dolorem dignissimos iste! Officia, doloremque
                inventore!
              </div>
            </div>

            <div className="mt-8 w-full rounded-md bg-transparent lg:max-w-md">
              <form className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="m-1 h-12 flex-1 appearance-none rounded-lg border-none border-transparent bg-transparent bg-white px-4 py-2 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:placeholder-transparent focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                />

                <button
                  type="button"
                  className="m-1 h-12 transform rounded-md bg-gray-900 px-4 py-2 text-white transition-colors duration-200 focus:bg-gray-700 focus:outline-none hover:bg-gray-700"
                >
                  Connect with Us
                </button>
              </form>
            </div>
          </div>

          <div className="relative hidden h-full w-full items-center justify-center lg:flex lg:w-1/2">
            <div className="absolute z-10 lg:left-0">
              <div className="flex items-center rounded-md border border-gray-100 bg-white px-4 py-3 shadow-lg">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="/images/oPf2b7fqx5xa3mo68dYHo.png"
                  alt="Simon Lewis"
                />
                <p className="ml-4 w-56">
                  <strong className="block text-lg font-medium">
                    Simon Lewis
                  </strong>
                  <span className="text-xs text-gray-400">
                    {" "}
                    Has been our client for 4 years{" "}
                  </span>
                </p>
              </div>
              <div className="mt-2 flex flex-col items-start rounded-md border border-gray-100 bg-white px-4 pt-3 pb-6 shadow-lg">
                <strong className="block text-lg font-medium">
                  Site Analytics
                </strong>
                <div className="mt-4 flex items-center text-xs text-gray-400">
                  Impressions
                  <div className="ml-4 h-4 w-56 overflow-hidden rounded-md bg-gray-100">
                    <div className="h-full w-3/5 bg-yellow-200"></div>
                  </div>
                </div>

                <div className="mt-4 flex items-center text-xs text-gray-400">
                  Engagement
                  <div className="ml-4 h-4 w-56 overflow-hidden rounded-md bg-gray-100">
                    <div className="h-full w-2/5 bg-gray-800"></div>
                  </div>
                </div>
              </div>
            </div>

            <img
              className="-scale-x-100 mt-auto ml-auto h-4/6 object-cover lg:max-w-2xl"
              src="/images/Rmq5nOvVkRXcJ4l-MnTfN.png"
              alt="glasses photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
