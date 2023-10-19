"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import ExList from "@/components/egzersiz/egzersiz";

export default function ReviewsPage({ ext, reviews }) {
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
    <ExList reviews={searchedEgz} />
    // <div>
    //   <ul>
    //     {searchedEgz.map((review) => (
    //       <li key={review.slug}>
    //         <a href={`/egzersiz/${review.slug}${ext}`}>
    //           <h2>{review.title}</h2>
    //         </a>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}
