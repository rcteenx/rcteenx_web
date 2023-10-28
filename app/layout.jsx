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
    <html lang={smd.language} className="scroll-smooth">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
