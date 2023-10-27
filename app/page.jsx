import { getStaticFile } from "@/lib/static";
import { getLastWorks } from "@/lib/works";
import WorkList from "@/components/repo/work/works";

export async function generateMetadata() {
  const sPage = await getStaticFile("index");
  return {
    title: sPage.title,
  };
}

export default async function HomePage() {
  const sPage = await getStaticFile("index");
  const works = await getLastWorks();
  return (
    <div>
      <h1>{sPage.title}</h1>
      <h4>{sPage.description}</h4>
      <div>
        <WorkList works={works} ext={process.env.file_ext} />
      </div>
    </div>
  );
}
