import H1 from "@/components/h1";

import { getReviews } from "@/lib/egzersiz";
import SearchResults from "@/components/search-results";
import ExList from "@/components/egzersiz/egzersiz";

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
      <h2>En Yeni Egzersizler</h2>
    </div>
  );
}
