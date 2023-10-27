import { writeFile } from "node:fs/promises";

import { getFilesRecursively2 } from "./getFilesRecursivelyIm.mjs";

const domain_url = "https://h12.rhancetin.com";

const getDirPath = "./out";
const skipDir = "_next";

let files = await getFilesRecursively2(getDirPath, skipDir);
var filteredFiles = files.filter((file) => file.name.endsWith(".html"));

var filteredOtherFiles = filteredFiles
  .filter((file) => !file.name.includes("404") && !file.name.includes("index"))
  .map((file) => file.name);

function generateSiteMap(files) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>${domain_url}</loc></url>
      ${files
        .map((file) => {
          return `<url><loc>${`${domain_url}/${file.name}`}</loc></url>
          `;
        })
        .join("")}
    </urlset>
  `;
}

const sitemap = generateSiteMap(filteredOtherFiles);

writeFile("out/sitemap.xml", sitemap, (err) => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
