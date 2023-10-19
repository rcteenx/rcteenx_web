import "./globals.css";

import { Inter } from "next/font/google";
import Script from "next/script";

import Header from "@/components/header/header";
import Footer from "@/components/footer";
import Tags from "@/components/tags";
import Search from "@/components/search";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "H12 Egzersizleri",
    template: "%s | H12 Egzersizleri",
  },
  description: "H12 Egzersizleri detaylı olarak anlatılıyor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr-TR">
      <body className="bg-light dark:bg-dark">
        <Header />
        <div>
          <div>
            <main>{children}</main>
            <aside>
              <Search ext={process.env.file_ext} />
              <Tags />
            </aside>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
