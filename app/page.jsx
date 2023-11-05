import smd from "@/content/data/siteMetaData";

// import Header from "@/components/ui/header/home";
import Header from "@/components/ui/header/static";
import Footer from "@/components/ui/footer";

import Hero from "@/components/sections/1-hero";
import DigitalPresence from "@/components/sections/2-digital-presence";
import Products from "@/components/sections/4-products";
import SuperQuality from "@/components/sections/3-about-us";
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
        <SuperQuality />
        <Products />
        {/* <Reviews />
      <Subscribe /> */}
      </main>
      <Footer />
    </>
  );
}
