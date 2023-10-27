import { getWorksByTag } from "@/lib/works";
import { getAllTagSlugs } from "@/lib/tags";

import WorkList from "@/components/repo/work/works";

// For static export
export async function generateStaticParams() {
  const tags = await getAllTagSlugs();
  return tags.map((etiket) => ({ etiket }));
}

export const metadata = {
  title: "Çalışma",
};

export default async function TagPage({ params: { etiket } }) {
  const works = await getWorksByTag(etiket);
  return (
    <div>
      <h1>Egzerizler</h1>
      <WorkList works={works} ext={process.env.file_ext} />
    </div>
  );
}
