import smd from "@/content/data/siteMetaData";
import Hero from "@/components/sections/1-hero";
import Products from "@/components/sections/2-products";
import SuperQuality from "@/components/sections/3-about-us";
import Services from "@/components/sections/4-services";
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
    <main className="container mx-auto">
      {/* <h1>{sPage.title}</h1>
      <h4>{sPage.description}</h4> */}
      <Hero />
      <Products />
      <SuperQuality />
      <Services />
      <Offer />
      <Reviews />
      <Subscribe />
    </main>
  );
}
