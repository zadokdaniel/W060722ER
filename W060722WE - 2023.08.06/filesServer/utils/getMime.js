const mimeTypes = {
  ".txt": "text/plain",
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
};

function getMime(ext) {
  return mimeTypes[ext];
}

module.exports = { getMime };
