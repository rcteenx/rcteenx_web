import { getStaticFile } from "@/lib/static";

export async function generateMetadata() {
  const sPage = await getStaticFile("index");
  return {
    title: sPage.title,
  };
}

export default async function HomePage() {
  const sPage = await getStaticFile("index");
  return (
    <div>
      <h1>{sPage.title}</h1>
      <h4>{sPage.description}</h4>
    </div>
  );
}
