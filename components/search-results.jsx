"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import CalismaList from "@/components/calisma/calisma";

export default function WorksPage({ ext, works }) {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  if (!q || q.length < 3) {
    return <p>YOK!</p>;
  }

  const searchedEgz = [];
  works.works.map((work) => {
    if (work.title.toLowerCase().includes(q)) {
      searchedEgz.push(work);
    }
  });

  return <CalismaList works={searchedEgz} ext={ext} />;
}
