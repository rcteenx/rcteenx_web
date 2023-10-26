import H1 from "@/components/h1";

import { getReviews } from "@/lib/calisma";
import SearchResults from "@/components/search-results";

export const metadata = {
  title: "Ara",
};

export default async function SearchPage() {
  const reviews = await getReviews();
  return (
    <div>
      <H1>Egzerizler</H1>
      <hr />
      <SearchResults ext={process.env.file_ext} reviews={{ reviews }} />
      <hr />
      <h2>Yeni Çalışmalar</h2>
    </div>
  );
}
