export const DesktopDevice = ({ children }: any) => {
  return (
    <div className=" top-16 sticky h-fit   z-[1] max-w-full w-full  rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
      <div className="relative flex items-center w-full  bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-neutral-700">
        <div className="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
          <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
          <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
          <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
        </div>
        <div className="flex justify-center items-center size-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-neutral-600 dark:text-neutral-400">
          stores.quickshop.com
        </div>
      </div>

      <div className="bg-gray-800 rounded-b-lg">{children}</div>
    </div>
  );
};
