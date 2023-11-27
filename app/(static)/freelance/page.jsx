import smd from "@/content/data/siteMetaData";

// import Header from "@/components/ui/header/home";
import Header from "@/components/ui/header/static";
import Footer from "@/components/ui/footer";

import FreelanceHero from "@/components/sections/1-hero-3-freelance";
import Products from "@/components/sections/4-products";
import SuperQuality from "@/components/sections/3-super-quality";
import Services from "@/components/sections/white-box-target-market";
import Offer from "@/components/sections/5-offer";
// import Reviews from "@/components/sections/6-reviews";
// import Subscribe from "@/components/sections/7-subscribe";

export async function generateMetadata() {
  return {
    title: smd.title,
  };
}

export default async function HomePage() {
  return (
    <>
      <Header id="4" />
      <main>
        <FreelanceHero />
        <Services />
        <SuperQuality />
        <Offer />
        <Products />
        {/* <Reviews />
      <Subscribe /> */}
      </main>
      <Footer />
    </>
  );
}
