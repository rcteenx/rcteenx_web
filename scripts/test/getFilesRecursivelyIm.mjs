import { readdir } from "node:fs/promises";

// const fs = require("fs");
// const path = require("path");
const files = [];
export async function getFilesRecursively2(directory, skipDir) {
  const filesInDirectory = await readdir(directory, {
    withFileTypes: true,
  });
  for (const file of filesInDirectory) {
    if (file.isDirectory()) {
      getFilesRecursively2(directory + "/" + file.name, skipDir);
    } else {
      files.push(file);
    }
  }
  return files;
}

// getFilesRecursively2("./content/works");
