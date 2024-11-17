"use client";
import { usePathname } from "next/navigation";
import React from "react";
import StoreNavbar from "../ui-components/store/StoreNavbar";
import Navbar from "../ui-components/Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  return (
    <>
      {/* <AuthContextProvider> */}
      {/* //dont activate the context otherwise it will cause Preline not to work */}
      {pathname?.includes("stores") ? <StoreNavbar /> : <Navbar />}
      {/* </AuthContextProvider> */}
    </>
  );
}
