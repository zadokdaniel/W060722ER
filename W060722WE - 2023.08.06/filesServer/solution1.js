const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const server = http.createServer();

server.on("request", require("./utils/queryParser"));
server.on("request", require("./utils/logger"));

server.on("request", (req, res) => {
  if (req.method === "GET" && ["/", "/home"].includes(req.url)) {
    const file = fs.createReadStream(
      path.resolve(__dirname, "./public/index.html")
    );

    res.setHeader("Content-Type", "text/html");

    file.pipe(res);
    return;
  }

  if (req.method === "GET" && req.url === "/about") {
    const file = fs.createReadStream(
      path.resolve(__dirname, "./public/about.html")
    );

    res.setHeader("Content-Type", "text/html");

    file.pipe(res);
    return;
  }

  if (req.method === "GET" && req.url === "/contact-us") {
    const file = fs.createReadStream(
      path.resolve(__dirname, "./public/contactUs.html")
    );

    res.setHeader("Content-Type", "text/html");

    file.pipe(res);
    return;
  }

  if (req.method === "GET" && req.url === "/services") {
    const file = fs.createReadStream(
      path.resolve(__dirname, "./public/services.html")
    );

    res.setHeader("Content-Type", "text/html");

    file.pipe(res);
    return;
  }

  if (req.method === "GET" && req.url === "/styles.css") {
    const file = fs.createReadStream(
      path.resolve(__dirname, "./public/styles/style.css")
    );

    res.setHeader("Content-Type", "text/css");

    file.pipe(res);
    return;
  }

  const file = fs.createReadStream(
    path.resolve(__dirname, "./public/pageNotFound.html")
  );

  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html");

  file.pipe(res);
});

const PORT = 3000;
server.listen(PORT, () => console.log(`listening on port ${PORT}`));
