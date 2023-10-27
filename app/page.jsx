import { getLastWorks } from "@/lib/works";
import CalismaList from "@/components/work/works";

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
