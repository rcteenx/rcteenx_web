import H1 from "@/components/h1";
import Link from "next/link";

import { getReviews } from "@/lib/egzersiz";

export const metadata = {
  title: "Egzersiz",
};

export default async function ReviewsPage() {
  const reviews = await getReviews();
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
