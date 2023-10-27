import { getWorks } from "@/lib/works";

import CalismaList from "@/components/work/works";

export const metadata = {
  title: "Çalışma",
};

export default async function WorksPage() {
  const works = await getWorks();
  return (
    <div>
      <h1>Bilinçli Farkındalık Çalışmaları</h1>
      <CalismaList works={works} ext={process.env.file_ext} />
    </div>
  );
}
