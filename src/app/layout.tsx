import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import UnderNavbar from "./components/UnderNavbar";
import Footer from "./components/Footer";
import { Providers } from "./providers";
import BottomTab from "./components/BottomTab";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="bg-white ">
            <Navbar></Navbar>
            <div className="flex items-center justify-center mt-2 border-t-[#f4f4f9] ">
              <UnderNavbar></UnderNavbar>
            </div>
          </div>
          {children}
          <Footer></Footer>
          <div className="md:hidden block">
            <BottomTab></BottomTab>
          </div>
        </Providers>
      </body>
    </html>
  );
}
