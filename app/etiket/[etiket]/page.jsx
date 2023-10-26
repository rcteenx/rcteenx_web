import H1 from "@/components/h1";

import { getReviewsByTag, getAllTagSlugs } from "@/lib/calisma";
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
      <H1>Egzerizler</H1>
      <CalismaList reviews={reviews} ext={process.env.file_ext} />
    </div>
  );
}
