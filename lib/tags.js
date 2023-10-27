import slugify from "slugify";
import { getReviews } from "@/lib/calisma";

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
