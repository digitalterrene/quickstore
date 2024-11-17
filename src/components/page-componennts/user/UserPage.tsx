"use client";
import DashboardHeading from "@/components/ui-components/headings/DashboardHeading";
import { FaRegAddressCard } from "react-icons/fa";
import React, { useState } from "react";
import { GoHeart, GoLaw } from "react-icons/go";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoCardOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { LuBox } from "react-icons/lu";
import ProfileTab from "./edit/tabs/ProfileTab";
import ProfileInformationBlock from "./tabs/ProfileInformationBlock";
import LegalInformationBlock from "./tabs/LegalInformationBlock";
import LegalInformationTab from "./edit/tabs/LegalInformationTab";
import FWCInformationBlock from "./tabs/FWCInformationBlock";
import FWCInformationTab from "./edit/tabs/FWCCredentials";
import LocationBlock from "./tabs/LocationBlock";
import LocationTab from "./edit/tabs/LocationTab";
import BillingInfoBlock from "./tabs/BillingInfoBlock";
import BillingTab from "./edit/tabs/BillingTab";
import OrdersHistory from "./tabs/OrdersHistory";
import OrdersOverview from "@/components/ui-components/orders/OrdersOverview";
import Wishlist from "@/components/ui-components/dashboard/Wishlist";
const tabs = [
  {
    name: "profile_information",
    icon: <FaRegAddressCard />,
  },
  {
    name: "orders",
    icon: <LuBox />,
  },
  {
    name: "wishlist",
    icon: <GoHeart />,
  },
  {
    name: "legal_information",
    icon: <IoShieldCheckmarkOutline />,
  },
  {
    name: "fwc_information",
    icon: <GoLaw />,
  },
  {
    name: "location_information",
    icon: <MdOutlineLocationOn />,
  },
  {
    name: "billing_information",
    icon: <IoCardOutline />,
  },
];
export default function UserPage({ account_information }: any) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  console.log({ account_information });
  return (
    <div className="w-full   p-6">
      <DashboardHeading />
      <div className="flex   items-start py-6 gap-8 w-full">
        {/* Sidebar starts here */}
        <nav
          className="hs-accordion-group sticky top-16 max-w-60  w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            {tabs?.map((tab, index) => (
              <li key={index} onClick={() => setActiveTab(tab)}>
                <p
                  className={`flex capitalize items-center gap-x-3.5 py-2 px-2.5  ${
                    activeTab?.name === tab?.name
                      ? "bg-blue-100 text-blue-600"
                      : "bg-white text-slate-700"
                  }  font-${
                    activeTab?.name === tab?.name ? "bold" : "normal"
                  } text-sm   rounded-lg cursor-pointer hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
                >
                  <span className="text-xl">{tab?.icon}</span>
                  {tab?.name?.replaceAll("_", " ")}
                </p>
              </li>
            ))}
          </ul>
        </nav>
        {/* Sidebar ends here    */}
        <div className="space-y-4   ">
          {/* Tab content starts here */}
          {(() => {
            switch (activeTab?.name) {
              case "account_information":
                return (
                  <div className="flex gap-6 w-full items-start">
                    <>Account Info Edit</>
                    <>Account View</>
                  </div>
                );

              case "orders":
                return (
                  <div className="flex gap-6 w-full  items-start">
                    <OrdersOverview />
                  </div>
                );

              case "wishlist":
                return (
                  <div className="flex gap-6 w-full items-start">
                    <Wishlist />
                  </div>
                );

              case "profile_information":
                return (
                  <div className="flex gap-6 w-full items-start">
                    <div className="w-1/2">
                      <ProfileInformationBlock
                        profile_information={
                          account_information?.profile_information
                        }
                      />
                    </div>
                    <div className="w-1/2">
                      <ProfileTab
                        profile_information={
                          account_information?.profile_information
                        }
                      />
                    </div>
                  </div>
                );
              case "legal_information":
                return (
                  <div className="flex gap-6 w-full items-start">
                    <div className="w-1/2">
                      <LegalInformationBlock
                        legal_information={
                          account_information?.legal_information
                        }
                      />
                    </div>
                    <div className="w-1/2">
                      <LegalInformationTab
                        legal_information={
                          account_information?.legal_information
                        }
                      />
                    </div>
                  </div>
                );

              case "fwc_information":
                return (
                  <div className="flex gap-6 w-full items-start">
                    <div className="w-1/2">
                      <FWCInformationBlock
                        fwc_information={account_information?.fwc_information}
                      />
                    </div>
                    <div className="w-1/2">
                      <FWCInformationTab
                        fwc_information={account_information?.fwc_information}
                      />
                    </div>
                  </div>
                );

              case "location_information":
                return (
                  <div className="flex gap-6 w-full items-start">
                    <div className="w-1/2">
                      <LocationBlock
                        location_information={
                          account_information?.location_information
                        }
                      />
                    </div>{" "}
                    <div className="w-1/2">
                      <LocationTab
                        location_information={
                          account_information?.location_information
                        }
                      />
                    </div>{" "}
                  </div>
                );

              case "billing_information":
                return (
                  <div className="flex gap-6 w-full items-start">
                    <div className="w-1/2">
                      <BillingInfoBlock
                        billing_information={
                          account_information?.billing_information
                        }
                      />
                    </div>{" "}
                    <div className="w-1/2">
                      <BillingTab
                        billing_information={
                          account_information?.billing_information
                        }
                      />
                    </div>{" "}
                  </div>
                );

              default:
                return null;
            }
          })()}
          {/* Tab content ends here */}{" "}
        </div>
      </div>
    </div>
  );
}
