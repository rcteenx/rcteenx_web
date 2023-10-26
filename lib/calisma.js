import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";
import slugify from "slugify";

export async function getSlugs() {
  const files = await readdir("./content/calisma");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}

export async function getReview(slug) {
  const text = await readFile(`./content/calisma/${slug}.md`, "utf8");
  const {
    content,
    data: { title, date, description, tags },
  } = matter(text);
  const body = marked(content, { headerIds: false, mangle: false });
  return { slug, title, date, description, tags, body };
}

export async function getReviews() {
  const slugs = await getSlugs();
  const reviews = [];
  for (const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }
  reviews.sort((a, b) => b.date.localeCompare(a.date));
  return reviews;
}

export async function getLastReviews() {
  const reviews = await getReviews();
  return reviews.slice(0, 2);
}

export async function getReviewsByTag(tagSlug) {
  const reviews = await getReviews();
  let tempStorage = [];
  reviews.map((review) => {
    review.tags.map((tag) => {
      if (tagSlug === slugify(tag)) {
        const tagReview = {
          title: review.title,
          description: review.description,
          slug: review.slug,
        };
        tempStorage.push(tagReview);
      }
    });
  });
  return tempStorage;
}

export async function getAllTags() {
  const reviews = await getReviews();
  let tempStorage = [];
  reviews.map((review) => {
    review.tags.map((tag) => {
      if (!tempStorage.includes(tag)) {
        tempStorage.push(tag);
      }
    });
  });
  return tempStorage;
}
export async function getAllTagSlugs() {
  const tags = await getAllTags();
  let tempStorage = [];
  tags.map((tag) => {
    tempStorage.push(slugify(tag));
  });
  return tempStorage;
}
