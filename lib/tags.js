import slugify from "slugify";
import { getWorks } from "@/lib/works";

export async function getAllTags() {
  const works = await getWorks();
  let tempStorage = [];
  works.map((work) => {
    work.tags.map((tag) => {
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
