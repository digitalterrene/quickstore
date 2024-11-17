import Footer from "@/components/ui-components/Footer";
import Navbar from "@/components/ui-components/Navbar";
import { revised_industries } from "@/utils/data";

import StoreProductPagesWrapper from "@/components/wrappers/StoreProductPagesWrapper";
import IndustriesNavHeader from "@/components/ui-components/industry/IndustriesNavHeader";
import IndustriesCategoriesSection from "@/components/ui-components/industry/IndustriesCategoriesSection";

export default function FrontStoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"h-screen"}>
        <header className="  ">
          <Navbar />
        </header>
        <div className="pt-16 ">
          <IndustriesNavHeader navs={revised_industries || []} />
          {children}
        </div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
