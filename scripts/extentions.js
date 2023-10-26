// adds .html to .txt files on Out Folder
const { rename } = require("fs");
const { resolve } = require("path");
const { getFilesRecursively } = require("./getFilesRecursively");

const getDirPath = resolve(__dirname, "../out");
const skipDir = "_next";

let files = getFilesRecursively(getDirPath, skipDir);
var filteredFiles = files.filter((file) => file.endsWith(".txt"));
var filteredOtherFiles = filteredFiles.map((file) =>
  file.slice(0, -".txt".length)
);

filteredOtherFiles.forEach((file) => {
  if (!file.endsWith(".html")) {
    rename(`/${file}.txt`, `/${file.toLowerCase()}.html.txt`, (err) => {
      if (err) {
        console.log(err);
      } else {
        // console.log("File names changed successfully");
      }
    });
  }
});
