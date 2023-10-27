import { getWorks } from "@/lib/works";

import WorkList from "@/components/repo/work/works";

export const metadata = {
  title: "Çalışma",
};

export default async function WorksPage() {
  const works = await getWorks();
  return (
    <div>
      <h1>Bilinçli Farkındalık Çalışmaları</h1>
      <WorkList works={works} ext={process.env.file_ext} />
    </div>
  );
}
