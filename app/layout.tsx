import type { Metadata } from "next";
import { useRouter } from "next/router";
import localFont from "next/font/local";
import "./globals.css";
import {Providers} from "./providers";
import {NextUIProvider} from "@nextui-org/react";
import App from '../app/Components/Navbar/App'
import Footer from '../app/Components/Footer'
import Head from "next/head";
import { League_Spartan } from 'next/font/google';



const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap', // Ensures the font swaps quickly to avoid invisible text
  variable: '--font-league-spartan', // Optional: Custom CSS variable for the font
});


export const metadata: Metadata = {
  title: "ХАСУ ДАЯН",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={leagueSpartan.className}>
  <link rel="icon" href="/LogoKhasu.png" sizes="any" />
      <body
        className=""
      >      <App/>

                <NextUIProvider>

                {children}
                <Footer/>

                </NextUIProvider>

      </body>
    </html>
  );
}
