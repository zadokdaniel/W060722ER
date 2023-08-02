const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  console.log(req.headers);

  if (req.method === "GET" && req.url === "/blabla") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "applicaiton/json");

    res.write("bla");
    res.end();

    return;
  }

  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");

  res.write(JSON.stringify({ hello: "and bye" }));
  res.end();
});

// server.on("request", (req, res) => {});

const PORT = 3000;
server.listen(PORT, () => console.log(`listening on port ${PORT}`));
