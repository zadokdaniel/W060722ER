const fs = require("node:fs");
const path = require("node:path");

const { getMime } = require("./getMime");

function createStatic(basePath) {
  if (!basePath) {
    throw new Error("must provide basePath");
  }

  return function sendFile(res, relativePath) {
    if (!res || !relativePath) {
      throw new Error(
        "must provide response object and relative path to a file"
      );
    }

    const filePath = path.resolve(basePath, relativePath);
    const fileMimeType = getMime(path.parse(filePath).ext);

    res.setHeader("Content-Type", fileMimeType);

    const file = fs.createReadStream(filePath);

    file.pipe(res);
  };
}

module.exports = { createStatic };
