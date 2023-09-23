import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Static Demo - Türkçe",
  description: "Demo description...",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <div>[Egz Menü]</div>
      {children}
    </div>
  );
}
