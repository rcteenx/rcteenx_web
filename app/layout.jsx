import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";

import { Inter } from "next/font/google";
import Script from "next/script";

import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bootstrap 5 with Next js 13",
  description: "how to use bootstrap 5 in next js 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr-TR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
