import { getStaticFile } from "@/lib/static";

import { bookmark } from "@/public/assets/images";

import HeaderStaticIndex from "@/components/ui/header/static";
import Footer from "@/components/ui/footer";

export async function generateMetadata() {
  const sPage = await getStaticFile("calismalar");
  return {
    title: sPage.title,
  };
}

export default async function Page() {
  const sPage = await getStaticFile("calismalar");
  return (
    <>
      <HeaderStaticIndex />
      <main className="container mx-auto container-p mt-20 lg:my-32">
        <section>
          <h4>{sPage.description}</h4>
          <h1 className="">{sPage.title}</h1>
        </section>
      </main>
      <Footer />
    </>
  );
}
