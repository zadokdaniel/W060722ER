const express = require("express");
const path = require("path");

const app = express();

/*** loggers */

// app.all("*", (req, res, next) => {
//   console.log(new Date().toLocaleTimeString(), req.method, req.path);
//   next();
// });

// app.use("/", (req, res, next) => {
//   console.log(new Date().toLocaleTimeString(), req.method, req.path);
//   next();
// });

app.use(require("morgan")("dev"));

/******** auth */
// app.use("/", (req, res, next) => {
//   if (req.get("x-auth") === "1234") {
//     next();
//     return;
//   }

//   res.status(401).send("not allowed");
// });

app.get(["/home", "/"], (req, res) => {
  res.sendFile(path.resolve(__dirname, "./src/messages.js"));
});

app.post("/hello", (req, res) => {
  res.json(req.query);
});

app.all("*", (req, res) => {
  res.status(404).send("not found");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

function mw(req, res) {
  // validate req input
  // validate system
  // process
  // result
}
