const path = require("node:path");

const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.use("/static", express.static(path.resolve(__dirname, "./public")));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.text());

app.get("/home", (req, res) => {
  console.log(req.body);
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.post("/test", (req, res) => {
  console.log(req.body);
  res.redirect("/home");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
