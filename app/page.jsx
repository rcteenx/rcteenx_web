import smd from "@/content/data/siteMetaData";

import Header from "@/components/ui/header/home";
import Footer from "@/components/ui/footer";

import Hero from "@/components/sections/1-hero";
import Products from "@/components/sections/4-products";
import SuperQuality from "@/components/sections/3-about-us";
import Services from "@/components/sections/2-services";
import Offer from "@/components/sections/5-offer";
import Reviews from "@/components/sections/6-reviews";
import Subscribe from "@/components/sections/7-subscribe";

export async function generateMetadata() {
  return {
    title: smd.title,
  };
}

export default async function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* <h1>{sPage.title}</h1>
      <h4>{sPage.description}</h4> */}
        <Hero />
        <Services />
        <SuperQuality />
        <Products />
        <Offer />
        {/* <Reviews />
      <Subscribe /> */}
      </main>
      <Footer />
    </>
  );
}
