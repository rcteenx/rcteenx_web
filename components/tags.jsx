import slugify from "slugify";

import { getAllTags } from "@/lib/egzersiz";

export default async function Tags() {
  const tags = await getAllTags();

  return (
    <div>
      <div>
        <h3>Etiketlerle Çalışma Bul</h3>
        <sup>Yeni</sup>
        <hr />
        {tags.map((tag) => (
          <div key={tag}>
            <a href={`/etiket/${slugify(tag)}${process.env.file_ext}`}>{tag}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
