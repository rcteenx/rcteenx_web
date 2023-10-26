"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import CalismaList from "@/components/calisma/calisma";

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

  return <CalismaList reviews={searchedEgz} ext={ext} />;
}
