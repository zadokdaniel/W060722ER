const express = require("express");

const app = express();

app.use(require("morgan")("dev"));

app.get("/", (req, res) => {
  res.setHeader("Transfer-Encoding", "chunked");
  res.type("html");
  let counter = 0;
  const intervalId = setInterval(() => {
    res.write(String(counter++));
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
    res.end();
  }, 100000);
});

const PORT = 3000;
app.listen(PORT);
