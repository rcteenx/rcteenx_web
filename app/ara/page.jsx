import { getWorks } from "@/lib/works";
import SearchResults from "@/components/repo/search-results";

export const metadata = {
  title: "Ara",
};

export default async function SearchPage() {
  const works = await getWorks();
  return (
    <div>
      <h1>Egzerizler</h1>
      <hr />
      <SearchResults ext={process.env.file_ext} works={{ works }} />
      <hr />
      <h2>Yeni Çalışmalar</h2>
    </div>
  );
}
