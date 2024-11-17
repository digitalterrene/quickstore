import NavbarPreview from "@/components/templates/front-store-configs/navbars/NavbarPreview";
import React from "react";

export default function StoreNavbar({ navbar }: any) {
  return (
    <div>
      <NavbarPreview frontStoreConfigNavbarInputs={navbar} />
    </div>
  );
}
