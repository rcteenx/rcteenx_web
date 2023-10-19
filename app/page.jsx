import H1 from "@/components/h1";

import { getLastReviews } from "@/lib/egzersiz";
import ExList from "@/components/egzersiz/egzersiz";

export default async function HomePage() {
  const reviews = await getLastReviews();
  return (
    <div>
      <H1>H12 Egzersizlerine Hoş Geldiniz</H1>
      <div>
        <ExList reviews={reviews} />
        {/* <a href={`/egzersiz/${review.slug + process.env.file_ext}`}>
          <img src={review.image} alt="" width="320" height="180" />
        </a> */}
      </div>
    </div>
  );
}
