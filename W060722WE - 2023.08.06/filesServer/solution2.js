const http = require("node:http");
const path = require("node:path");

const server = http.createServer();

server.on("request", require("./utils/queryParser"));
server.on("request", require("./utils/logger"));

const sendFile = require("./utils/sendFile").createStatic(
  path.resolve(__dirname, "./public")
);

server.on("request", (req, res) => {
  if (req.method === "GET" && ["/", "/home"].includes(req.url)) {
    sendFile(res, "./index.html");
    return;
  }

  if (req.method === "GET" && req.url === "/about") {
    sendFile(res, "./about.html");
    return;
  }

  if (req.method === "GET" && req.url === "/contact-us") {
    sendFile(res, "./contactUs.html");
    return;
  }

  if (req.method === "GET" && req.url === "/services") {
    sendFile(res, "./services.html");
    return;
  }

  if (req.method === "GET" && req.url === "/styles.css") {
    sendFile(res, "./styles/style.css");
    return;
  }

  res.statusCode = 404;
  sendFile(res, "./pageNotFound.html");
});

const PORT = 3000;
server.listen(PORT, () => console.log(`listening on port ${PORT}`));
