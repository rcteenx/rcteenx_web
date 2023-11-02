import { getStaticFile } from "@/lib/static";
import Header from "@/components/ui/header/static";
import Footer from "@/components/ui/footer";
import About from "@/components/sections/1-bio-hero";

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
      <Header />
      <main className="container mx-auto container-p mt-20 lg:my-32">
        <About />
        <section>
          <h4>{sPage.description}</h4>
          <h1 className="">{sPage.title}</h1>
          <article dangerouslySetInnerHTML={{ __html: sPage.body }} />
        </section>
      </main>
      <Footer />
    </>
  );
}
