// adds .html to .txt files on Out Folder
const { readdirSync, rename } = require("fs");
const { resolve } = require("path");

const outDirPath = resolve(__dirname, "../out");

var fs = require("fs");
var files = fs.readdirSync(outDirPath);
var filteredFiles = files.filter((file) => file.endsWith(".txt"));

var filteredOtherFiles = filteredFiles
  .filter((file) => !file.includes("index"))
  .map((file) => file.slice(0, -".txt".length));

filteredOtherFiles.forEach((file) => {
  if (!file.endsWith(".html")) {
    rename(
      outDirPath + `/${file}.txt`,
      outDirPath + `/${file.toLowerCase()}.html.txt`,
      (err) => {
        if (err) {
          console.log(err);
        } else {
          // console.log("File names changed successfully");
        }
      }
    );
  }
});
