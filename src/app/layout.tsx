import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/Components/Footer/Footer";

import { EmblaCarousel } from "./HeroSection/Header";
// import Header from "@/Components/Navbar/Navbar";
import { EmblaCarouselReading } from "@/Components/Reading/Reading";
import Translate from "@/Components/Translate/Translate";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quran-app",
  description: "Quran-app -quran",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
     {/* <Header/> */}
        <EmblaCarousel/>
        <Translate/>
        <EmblaCarouselReading/>
        
        {children}
        <Footer/>
        </body>
    </html>
  );
}
