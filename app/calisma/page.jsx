import H1 from "@/components/h1";

import { getReviews } from "@/lib/calisma";

import CalismaList from "@/components/calisma/calisma";

export const metadata = {
  title: "Çalışma",
};

export default async function ReviewsPage() {
  const reviews = await getReviews();
  return (
    <div>
      <H1>Bilinçli Farkındalık Çalışmaları</H1>
      <CalismaList reviews={reviews} ext={process.env.file_ext} />
    </div>
  );
}
