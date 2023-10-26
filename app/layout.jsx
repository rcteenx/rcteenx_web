import "./globals.css";

import { Inter } from "next/font/google";
import Script from "next/script";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Tags from "@/components/tags";
import Search from "@/components/search";

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
    <html lang="tr-TR">
      <body className="bg-light dark:bg-dark max-w-screen-xl m-auto">
        <Header />
        <div className="flex flex-row flex-wrap sm:p-8">
          <main className="w-full lg:w-3/4 pt-1 px-2">{children}</main>
          <aside className="w-full mt-4 lg:w-1/4 px-2">
            <div className="top-0 p-4 bg-teal-100 rounded-xl w-full">
              <Search ext={process.env.file_ext} />
              <Tags />
            </div>
          </aside>
        </div>
        <Footer />
      </body>
    </html>
  );
}
