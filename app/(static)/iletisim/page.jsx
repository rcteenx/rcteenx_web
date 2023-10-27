import { getStaticFile } from "@/lib/static";

export async function generateMetadata() {
  const sPage = await getStaticFile("iletisim");
  return {
    title: sPage.title,
  };
}

export default async function İletisimPage() {
  const sPage = await getStaticFile("iletisim");
  return (
    <div>
      <h1>{sPage.title}</h1>
      <h4>{sPage.description}</h4>
      <article dangerouslySetInnerHTML={{ __html: sPage.body }} />
    </div>
  );
}
