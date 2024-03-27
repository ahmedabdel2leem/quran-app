import type { Metadata } from "next";

import thuluth from "@/utils/customFonts";
// import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Footer/Footer";
import Navbar from './../Components/Navbar/Navbar';
// import { Provider } from "react-redux";
// import "./fonts/fantezy.ttf"
import { store } from "@/app/redux/store";
import  Providers  from '@/app/redux/Providers';
import DispatcherProvider from "@/Components/provider";


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
      <body className={`${thuluth.variable}`}>
        <Navbar/>
      <Providers >
        <DispatcherProvider>

        {children}
        </DispatcherProvider>
        </Providers>
        <Footer/>
        </body>
    </html>
  );
}
