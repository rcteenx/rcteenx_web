import { getReviews } from "@/lib/calisma";

import CalismaList from "@/components/calisma/calisma";

export const metadata = {
  title: "Çalışma",
};

export default async function ReviewsPage() {
  const reviews = await getReviews();
  return (
    <div>
      <h1>Bilinçli Farkındalık Çalışmaları</h1>
      <CalismaList reviews={reviews} ext={process.env.file_ext} />
    </div>
  );
}
