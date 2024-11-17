"use client";
import { excludes_routes } from "@/data/other";
import { Carousel } from "flowbite-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { revised_industries } from "@/utils/data";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import("flowbite");
import("preline");

export default function IndustriesCarousel() {
  const pathname = usePathname();
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <div className="h-56 mx-auto w-full  sm:h-64 rounded-none lg:h-[510px]">
      <Carousel
        style={{ borderRadius: 0 }}
        pauseOnHover
        leftControl={
          <div className="h-56 bg-gray-200 cursor-pointer hover:text-white hover:bg-[#131921] -ml-6    sm:h-64 rounded-none lg:h-[510px]">
            <div className=" p-2 text-2xl  pt-48  ">
              <BsChevronLeft />
            </div>
          </div>
        }
        rightControl={
          <div className="h-56 lg:h-[510px] bg-gray-200 cursor-pointer hover:text-white hover:bg-[#131921] -mr-6    sm:h-64 rounded-none ">
            <div className=" p-2 text-2xl  pt-48  ">
              <BsChevronRight />
            </div>
          </div>
        }
        className="rounded-none"
      >
        {revised_industries?.map((element, i) => (
          <section key={i} aria-labelledby="fashion-heading">
            <img
              className="w-full object-cover"
              alt={`${element?.industry}`}
              src={`/images/sidebar/${element?.industry}/${element?.industry}.jpg`}
            />
          </section>
        ))}
      </Carousel>
    </div>
  );
}
