export function getHeaderNav() {
  return [
    { name: "Anasayfa", link: "/" },
    { name: "Hakkimizda", link: "hakkimizda" },
    { name: "İletişim", link: "iletisim" },
  ];
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
