import H1 from "@/components/h1";

import { getReviews } from "@/lib/egzersiz";

export const metadata = {
  title: "Egzersiz",
};

export default async function ReviewsPage() {
  const reviews = await getReviews();
  return (
    <div>
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
