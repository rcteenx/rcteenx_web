import { getWorks } from "@/lib/calisma";

import CalismaList from "@/components/calisma/calisma";

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
