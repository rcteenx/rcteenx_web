"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ReviewsPage({ reviews }) {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  if (!q || q.length < 3) {
    return <p>YOK!</p>;
  }

  const searchedEgz = [];
  reviews.reviews.map((review) => {
    if (review.title.toLowerCase().includes(q)) {
      searchedEgz.push(review);
    }
  });

  return (
    <div>
      <ul>
        {searchedEgz.map((review) => (
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
