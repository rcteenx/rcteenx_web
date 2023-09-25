import H1 from "@/components/h1";
import Link from "next/link";

import { getReviews } from "@/lib/egzersiz";
import SearchResults from "@/components/search-reseults";

export const metadata = {
  title: "Ara",
};

export default async function SearchPage() {
  const reviews = await getReviews();
  return (
    <div className="container">
      <H1>Egzerizler</H1>
      <hr />
      <SearchResults reviews={{ reviews }} />
      <hr />
      <h2>En Yeni Egzersizler</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.slug}>
            <Link href={`/egzersiz/${review.slug + process.env.file_ext}`}>
              <h2>{review.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
