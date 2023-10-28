import { getStaticFile } from "@/lib/static";
import Hero from "@/components/sections/1-hero";
import Products from "@/components/sections/2-products";
import SuperQuality from "@/components/sections/3-about-us";
import Services from "@/components/sections/4-services";
import SpecialOffer from "@/components/sections/special-offer";
import CustomerReviews from "@/components/sections/customer-reviews";
import Subscribe from "@/components/sections/subscribe";

export async function generateMetadata() {
  const sPage = await getStaticFile("index");
  return {
    title: sPage.title,
  };
}

export default async function HomePage() {
  const sPage = await getStaticFile("index");
  return (
    <main>
      {/* <h1>{sPage.title}</h1>
      <h4>{sPage.description}</h4> */}
      <Hero />
      <Products />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
    </main>
  );
}
