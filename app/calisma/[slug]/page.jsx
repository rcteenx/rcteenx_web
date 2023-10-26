import slugify from "slugify";

import H1 from "@/components/h1";

import { getReview, getSlugs } from "@/lib/calisma";

// For static export
export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

export default async function ExPage({ params: { slug } }) {
  const review = await getReview(slug);

  return (
    <div>
      <H1>{review.title}</H1>
      <p>{review.date}</p>
      <h4>{review.description}</h4>
      <div className="border-t pt-2 text-right">
        <h3 className="inline-block">Etiketler</h3>
        <ul className="flex gap-2 border-b justify-end ">
          {review.tags.map((tag) => (
            <li className=" bg-teal-200 rounded-lg p-1 my-2" key={tag}>
              <a href={`/etiket/${slugify(tag) + process.env.file_ext}`}>
                {tag}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <article dangerouslySetInnerHTML={{ __html: review.body }} />
    </div>
  );
}
