import H1 from "@/components/h1";

import { getLastReview } from "@/lib/egzersiz";

export default async function HomePage() {
  const review = await getLastReview();
  return (
    <div>
      <H1>Türkçe Karakter Testi</H1>
      <div>
        <a href={`/egzersiz/${review.slug + process.env.file_ext}`}>
          <img
            src={review.image}
            alt=""
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2>{review.title}</h2>
        </a>
      </div>
    </div>
  );
}
