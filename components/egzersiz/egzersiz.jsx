import React from "react";
import Link from "next/link";

const ExList = ({ reviews, ext }) => {
  return (
    <ul className="my-4 flex gap-4">
      {reviews.map((review) => (
        <li
          className="p-4 border border-teal-100 rounded-lg shadow-dark shadow-sm hover:bg-teal-100"
          key={review.slug}
        >
          <Link href={`/egzersiz/${review.slug + ext}`}>
            <h5 className="mb-2 font-bold text-teal-900">{review.title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {review.description}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ExList;
