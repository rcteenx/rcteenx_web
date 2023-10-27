import "./globals.css";

import { Inter } from "next/font/google";
import smd from "@/content/data/siteMetaData";

import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "H12 Çalışmaları",
    template: "%s | H12 Çalışmaları",
  },
  description: "H12 Çalışmaları detaylı olarak anlatılıyor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang={smd.language}>
      <body className="bg-light max-w-screen-xl m-auto">
        <Header />
        <div className="flex flex-row flex-wrap sm:p-8">
          <main className="w-full lg:w-3/4 pt-1 px-2">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
