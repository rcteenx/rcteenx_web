import { getReviews } from "@/lib/calisma";
import SearchResults from "@/components/search-results";

export const metadata = {
  title: "Ara",
};

export default async function SearchPage() {
  const reviews = await getReviews();
  return (
    <div>
      <h1>Egzerizler</h1>
      <hr />
      <SearchResults ext={process.env.file_ext} reviews={{ reviews }} />
      <hr />
      <h2>Yeni Çalışmalar</h2>
    </div>
  );
}
