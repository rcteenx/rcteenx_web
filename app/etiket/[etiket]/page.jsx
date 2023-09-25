import H1 from "@/components/h1";

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
            <a href={`/egzersiz/${review.slug + process.env.file_ext}`}>
              <h2>{review.title}</h2>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}