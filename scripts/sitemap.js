const fs = require("fs");
const path = require("path");
const { resolve } = require("path");

const outDirPath = resolve(__dirname, "../out");
const domain_url = "https://h12.rhancetin.com";

let files = [];

const getFilesRecursively = (directory) => {
  const filesInDirectory = fs.readdirSync(directory);
  for (const file of filesInDirectory) {
    const absolute = path.join(directory, file);
    if (fs.statSync(absolute).isDirectory()) {
      getFilesRecursively(absolute);
    } else {
      files.push(absolute);
    }
  }
};

getFilesRecursively(outDirPath);

var filteredFiles = files.filter((file) => file.endsWith(".html"));

var filteredOtherFiles = filteredFiles
  .filter((file) => !file.includes("404"))
  .filter((file) => !file.includes("index"))
  .map((file) => file.slice(outDirPath.length + 1));

// filteredOtherFiles.map((file) => {
//   console.log(file);
// });

function generateSiteMap(files) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url><loc>${domain_url}</loc></url>
     ${files
       .map((file) => {
         return `<url><loc>${`${domain_url}/${file}`}</loc></url>
         `;
       })
       .join("")}
   </urlset>
 `;
}

const sitemap = generateSiteMap(filteredOtherFiles);

fs.writeFile("sitemap.xml", sitemap, (err) => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
