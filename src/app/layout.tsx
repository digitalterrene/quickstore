import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/ui-components/Sidebar";
import NavHeader from "@/components/ui-components/NavHeader";
import ProductPagesWrapper from "@/components/wrappers/ProductPagesWrapper";
import NewsletterSection from "@/components/ui-components/newsletter/NewsletterSection";

import RootCTA from "@/components/ui-components/cta/RootCTA";
import RootBanner from "@/components/ui-components/banners/RootBanner";
import Footer from "@/components/ui-components/Footer";
import { AuthContextProvider } from "@/context/auth-context/AuthContext";
import AppWrapper from "@/components/wrappers/AppWrapper";
import RecommendationsDisplay from "@/components/ui-components/recommendations-display";
import Navbar from "@/components/ui-components/Navbar";

export const metadata: Metadata = {
  title: "Quickshop Stores",
  description: "Next level shopping experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"h-screen"}>
        <AppWrapper>
          <AuthContextProvider>
            <header className=" ">
              <Navbar />
            </header>
            <div className="flex w-full pt-16 justify-between h-full">
              <Sidebar />
              <div className="  overflow-auto h-full w-full">
                {/* <RootBanner /> */}
                <NavHeader />
                {/* <RootCTA /> */}
                <RecommendationsDisplay />
                <ProductPagesWrapper>{children}</ProductPagesWrapper>
                <Footer />
              </div>
            </div>
          </AuthContextProvider>
        </AppWrapper>
      </body>
    </html>
  );
}
