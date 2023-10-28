import { getStaticFile } from "@/lib/static";
import Hero from "@/components/sections/hero";
import PopulerProducts from "@/components/sections/populer-products";
import SuperQuality from "@/components/sections/about-us";
import Services from "@/components/sections/services";
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
      <PopulerProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
    </main>
  );
}
