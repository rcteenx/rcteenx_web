import { getStaticFile } from "@/lib/static";
import Hero from "@/components/sections/hero";

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
    </main>
  );
}
