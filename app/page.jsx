import Link from "next/link";
import smd from "@/content/data/siteMetaData";

// import Header from "@/components/ui/header/home";
import Header from "@/components/ui/header/static";
import Footer from "@/components/ui/footer";

import Hero from "@/components/sections/1-hero-1-home";
import DigitalPresence from "@/components/sections/white-box-digital-presence";
import Products from "@/components/sections/4-products";
import SuperQuality from "@/components/sections/3-super-quality";
import Subscribe from "@/components/sections/7-subscribe";

export async function generateMetadata() {
  return {
    title: smd.title,
  };
}

export default async function HomePage() {
  return (
    <>
      <Header id="1" />
      <main>
        {/* <h1>{sPage.title}</h1>
      <h4>{sPage.description}</h4> */}
        <Hero />
        <DigitalPresence />
        {/* <Products /> */}
        {/* <Reviews />
         */}
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
