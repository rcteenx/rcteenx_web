import { getReviewsByTag } from "@/lib/calisma";
import { getAllTagSlugs } from "@/lib/tags";

import CalismaList from "@/components/calisma/calisma";

// For static export
export async function generateStaticParams() {
  const tags = await getAllTagSlugs();
  return tags.map((etiket) => ({ etiket }));
}

export const metadata = {
  title: "Çalışma",
};

export default async function TagPage({ params: { etiket } }) {
  const reviews = await getReviewsByTag(etiket);
  return (
    <div>
      <h1>Egzerizler</h1>
      <CalismaList reviews={reviews} ext={process.env.file_ext} />
    </div>
  );
}
