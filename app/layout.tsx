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
import { getIPInfo } from "@/actions/ip";
import Head from "next/head";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  ...metaObject(),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <Script id="hotjar-script">
        {`
          (function (c, s, q, u, a, r, e) {
            c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
            c._hjSettings = { hjid: a };
            r = s.getElementsByTagName('head')[0];
            e = s.createElement('script');
            e.async = true;
            e.src = q + c._hjSettings.hjid + u;
            r.appendChild(e);
        })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 5210917);
        `}
      </Script>
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
