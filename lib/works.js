import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";
import slugify from "slugify";

export async function getAllWorkSlugs() {
  const files = await readdir("./content/works");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}

export async function getWork(slug) {
  const text = await readFile(`./content/works/${slug}.md`, "utf8");
  const {
    content,
    data: { title, date, description, tags },
  } = matter(text);
  const body = marked(content, { headerIds: false, mangle: false });
  return { slug, title, date, description, tags, body };
}

export async function getWorks() {
  const slugs = await getAllWorkSlugs();
  const works = [];
  for (const slug of slugs) {
    const work = await getWork(slug);
    works.push(work);
  }
  works.sort((a, b) => b.date.localeCompare(a.date));
  return works;
}

export async function getLastWorks() {
  const works = await getWorks();
  return works.slice(0, 2);
}

export async function getWorksByTag(tagSlug) {
  const works = await getWorks();
  let tempStorage = [];
  works.map((work) => {
    work.tags.map((tag) => {
      if (tagSlug === slugify(tag)) {
        const tagWork = {
          title: work.title,
          description: work.description,
          slug: work.slug,
        };
        tempStorage.push(tagWork);
      }
    });
  });
  return tempStorage;
}
