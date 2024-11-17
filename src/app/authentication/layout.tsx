import Footer from "@/components/ui-components/Footer";
import Navbar from "@/components/ui-components/Navbar";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"h-screen"}>
        <header className=" ">
          <Navbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
