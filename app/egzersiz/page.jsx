import H1 from "@/components/h1";

import { getReviews } from "@/lib/egzersiz";

import ExList from "@/components/egzersiz/egzersiz";

export const metadata = {
  title: "Egzersiz",
};

export default async function ReviewsPage() {
  const reviews = await getReviews();
  return (
    <div>
      <H1>Egzerizler x</H1>
      <ExList reviews={reviews} />
      {/* <ul className="my-4 flex gap-4">
        {reviews.map((review) => (
          <li
            className="p-4 border border-teal-100 rounded-lg shadow-dark shadow-sm hover:bg-teal-100"
            key={review.slug}
          >
            <a href={`/egzersiz/${review.slug + process.env.file_ext}`}>
              <h5 className="mb-2 font-bold text-teal-900">{review.title}</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {review.description}
              </p>
            </a>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
