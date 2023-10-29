import "./globals.css";
import { Inter } from "next/font/google";

import smd from "@/content/data/siteMetaData";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: smd.title,
    template: "%s | " + smd.title,
  },
  description: smd.description,
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
