const fs = require("fs");
const path = require("path");
const files = [];
function getFilesRecursively(directory, skipDir) {
  const filesInDirectory = fs.readdirSync(directory);
  for (const file of filesInDirectory) {
    const absolute = path.join(directory, file);
    if (fs.statSync(absolute).isDirectory() && file !== skipDir) {
      // console.log(file);
      getFilesRecursively(absolute);
    } else {
      files.push(absolute);
    }
  }
  return files;
}

module.exports = { getFilesRecursively };
