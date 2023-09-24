import Link from "next/link";
import slugify from "slugify";

import { getAllTags } from "@/lib/egzersiz";

export default async function Tags() {
  const tags = await getAllTags();

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h3 className="d-inline">Etiketlerle Çalışma Bul</h3>
        <sup className="badge badge-pill bg-success mx-1">Yeni</sup>
        <hr />
        {tags.map((tag) => (
          <div
            key={tag}
            className="d-inline-block tags bg-secondary text-white px-3 py-2 m-1"
          >
            <Link className="text-white" href={`/etiket/${slugify(tag)}`}>
              {tag}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
