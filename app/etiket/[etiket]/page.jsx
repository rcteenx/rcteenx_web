import H1 from "@/components/h1";
import Link from "next/link";
import slugify from "slugify";

import { getReviewsByTag, getAllTagSlugs } from "@/lib/egzersiz";

// For static export
export async function generateStaticParams() {
  const tags = await getAllTagSlugs();
  return tags.map((etiket) => ({ etiket }));
}

export const metadata = {
  title: "Egzersiz",
};

export default async function TagPage({ params: { etiket } }) {
  const reviews = await getReviewsByTag(etiket);
  return (
    <div className="container">
      <H1>Egzerizler</H1>
      <ul>
        {reviews.map((review) => (
          <li key={review.slug}>
            <Link href={`/egzersiz/${review.slug}`}>
              <h2>{review.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
