import Navbar from "@/components/ui-components/Navbar";
import ShoppingLayoutWrapper from "@/components/wrappers/ShoppingLayoutWrapper";

export default function FrontStoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"h-screen"}>
        <ShoppingLayoutWrapper>
          <header className=" ">
            <Navbar />
          </header>
          <div className="pt-20 px-6">{children}</div>
        </ShoppingLayoutWrapper>
      </body>
    </html>
  );
}
