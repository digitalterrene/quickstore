"use client";
import { excludes_routes } from "@/data/other";
import { Carousel } from "flowbite-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import("flowbite");
import("preline");

export default function RootCTA() {
  const pathname = usePathname();
  useEffect(() => {
    import("preline");
  }, []);
  const isExcluded = excludes_routes.some((pattern) => pattern.test(pathname));
  return (
    <>
      {!isExcluded && (
        <div className="h-56 mx-auto w-[95%]  sm:h-64 rounded-none lg:h-[510px]">
          <Carousel
            style={{ borderRadius: 0 }}
            pauseOnHover
            leftControl={
              <div className="h-56 bg-gray-200 cursor-pointer hover:text-white hover:bg-[#131921] -ml-12    sm:h-64 rounded-none lg:h-[510px]">
                <div className=" p-2 text-2xl  pt-48  ">
                  <BsChevronLeft />
                </div>
              </div>
            }
            rightControl={
              <div className="h-56 lg:h-[510px] bg-gray-200 cursor-pointer hover:text-white hover:bg-[#131921] -mr-12    sm:h-64 rounded-none ">
                <div className=" p-2 text-2xl  pt-48  ">
                  <BsChevronRight />
                </div>
              </div>
            }
            className="rounded-none"
          >
            <section aria-labelledby="fashion-heading">
              <img src="/images/heros/igurentas.jpeg" />
            </section>
            <section aria-labelledby="fashion-heading">
              <img src="/images/heros/summersale.jpeg" />
            </section>
            <section aria-labelledby="fashion-heading">
              <img src="/images/heros/chrunchy.jpeg" />
            </section>
            <section aria-labelledby="fashion-heading">
              <img src="/images/heros/autoaccessories.jpeg" />
            </section>
            <section aria-labelledby="fashion-heading">
              <img src="/images/heros/milliondollarestates.jpeg" />
            </section>
            <section aria-labelledby="fashion-heading">
              <img src="/images/heros/cozyestates.jpeg" />
            </section>
          </Carousel>
        </div>
      )}
    </>
  );
}
