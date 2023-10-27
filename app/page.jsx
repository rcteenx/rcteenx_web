import { getLastWorks } from "@/lib/calisma";
import CalismaList from "@/components/calisma/calisma";

export default async function HomePage() {
  const works = await getLastWorks();
  return (
    <div>
      <h1>H12 Çalışmalarına Hoş Geldiniz</h1>
      <div>
        <CalismaList works={works} ext={process.env.file_ext} />
      </div>
    </div>
  );
}
