import slugify from "slugify";
import { getWork, getSlugs } from "@/lib/works";

// For static export
export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const work = await getWork(slug);
  return {
    title: work.title,
  };
}

export default async function ExPage({ params: { slug } }) {
  const work = await getWork(slug);

  return (
    <div>
      <h1>{work.title}</h1>
      <p>{work.date}</p>
      <h4>{work.description}</h4>
      <div className="border-t pt-2 text-right">
        <h3 className="inline-block">Etiketler</h3>
        <ul className="flex gap-2 border-b justify-end ">
          {work.tags.map((tag) => (
            <li className=" bg-teal-200 rounded-lg p-1 my-2" key={tag}>
              <a href={`/etiket/${slugify(tag) + process.env.file_ext}`}>
                {tag}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <article dangerouslySetInnerHTML={{ __html: work.body }} />
    </div>
  );
}
