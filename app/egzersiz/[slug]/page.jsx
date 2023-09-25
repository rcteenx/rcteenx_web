import slugify from "slugify";

import H1 from "@/components/h1";
import ShareLinkButton from "@/components/share";

import { getReview, getSlugs } from "@/lib/egzersiz";

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
    <div className="my-5">
      <H1>{review.title}</H1>
      <p>{review.date}</p>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">Etiketler</li>
        {review.tags.map((tag) => (
          <li key={tag} className="list-group-item">
            <a href={`/etiket/${slugify(tag) + process.env.file_ext}`}>{tag}</a>
          </li>
        ))}
      </ul>
      <h4>{review.description}</h4>
      <ShareLinkButton />
      {/* <img
        src={image}
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
      /> */}
      <article dangerouslySetInnerHTML={{ __html: review.body }} />
    </div>
  );
}
