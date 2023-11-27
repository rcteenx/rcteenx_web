import Link from "next/link";
import { getStaticFile } from "@/lib/static";
import Header from "@/components/ui/header/static";
import Footer from "@/components/ui/footer";
import BioHero from "@/components/sections/1-hero-2-bio";
import WhiteBoxArea from "@/components/sections/white-box-exp";
import Education from "@/components/sections/3-education";
import AboutMe from "@/components/sections/2-frameworks";

export async function generateMetadata() {
  const sPage = await getStaticFile("bio");
  return {
    title: sPage.title,
  };
}

export default async function Page() {
  const sPage = await getStaticFile("bio");
  return (
    <>
      <Header id="2" />
      <main>
        <BioHero />
        <AboutMe />
        <Education />
        <WhiteBoxArea />
        {/* <section>
          <h4>{sPage.description}</h4>
          <h1 className="">{sPage.title}</h1>
          <article dangerouslySetInnerHTML={{ __html: sPage.body }} />
        </section> */}
      </main>
      <Footer />
    </>
  );
}
