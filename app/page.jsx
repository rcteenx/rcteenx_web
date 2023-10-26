import H1 from "@/components/h1";

import { getLastReviews } from "@/lib/calisma";
import CalismaList from "@/components/calisma/calisma";

export default async function HomePage() {
  const reviews = await getLastReviews();
  return (
    <div>
      <H1>H12 Çalışmalarına Hoş Geldiniz</H1>
      <div>
        <CalismaList reviews={reviews} ext={process.env.file_ext} />
      </div>
    </div>
  );
}
