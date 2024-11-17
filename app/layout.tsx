import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
import { metaObject } from "@/config/website";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...metaObject(),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-gradient-to-r from-yellow-300 to-amber-200 animate-bounce animate-infinite animate-duration-[5000ms] animate-delay-100 animate-ease-in-out absolute top-[-6rem] -z-10 right-[5rem] h-[50.25rem] w-full rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
      <GoogleAnalytics gaId="G-GXKKG3TRQX" />
    </html>
  );
}
