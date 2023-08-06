const http = require("node:http");
const path = require("node:path");

const server = http.createServer();

server.on("request", require("./utils/queryParser"));
server.on("request", require("./utils/logger"));

const sendFile = require("./utils/sendFile").createStatic(
  path.resolve(__dirname, "./public")
);

const requests = {
  GET: {
    "/": (req, res) => {
      sendFile(res, "./index.html");
    },
    "/home": (req, res) => {
      sendFile(res, "./index.html");
    },
    "/about": (req, res) => {
      sendFile(res, "./about.html");
    },
    "/contact-us": (req, res) => {
      sendFile(res, "./contactUs.html");
    },
    "/services": (req, res) => {
      sendFile(res, "./services.html");
    },
    "/styles.css": (req, res) => {
      sendFile(res, "./styles/style.css");
    },
  },
  POST: {},
  DELETE: {},
  404: (req, res) => {
    sendFile(res, "./pageNotFound.html");
  },
};

server.on("request", (req, res) => {
  const mw = requests[req.method]?.[req.url];
  if (mw) {
    mw(req, res);
    return;
  }

  requests[404](req, res);
});

const PORT = 3000;
server.listen(PORT, () => console.log(`listening on port ${PORT}`));
