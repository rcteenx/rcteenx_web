import "./globals.css";

import smd from "@/content/data/siteMetaData";

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
      <body>{children}</body>
    </html>
  );
}
