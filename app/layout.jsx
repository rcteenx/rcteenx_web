import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Inter } from "next/font/google";
import Script from "next/script";

import Header from "@/components/header";
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
      <body>
        <Header />
        <div className="container">
          <div className="row">
            <main className="col-lg-8">{children}</main>
            <aside className="col-lg-4">
              <Search ext={process.env.file_ext} />
              <Tags />
            </aside>
          </div>
        </div>
        <Footer />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
