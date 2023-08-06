const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const server = http.createServer();

server.on("request", require("./utils/queryParser"));
server.on("request", require("./utils/logger"));

// server.on("request", (req) => {
//   console.log(req.method);
//   console.log(req.url);
//   console.log(req.query);
//   console.log(req.headers);
// });

server.on("request", (req, res) => {
  if (req.method === "GET" && req.url === "/home") {
    if (req.query.sayBye === "1") {
      res.end("bye");
      return;
    }

    res.end("hello");
    return;
  }

  if (req.method === "GET" && ["/", "/index.html"].includes(req.url)) {
    res.setHeader("Content-Type", "text/html");

    fs.createReadStream(path.resolve(__dirname, "./public/index.html")).pipe(
      res
    );
    return;
  }

  res.statusCode = 404;
  res.end("not found");
});

const PORT = 3000;
server.listen(PORT, () => console.log(`listening on port ${PORT}`));
