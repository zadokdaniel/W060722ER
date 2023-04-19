const express = require("express");
const app = express();

app.use(require("morgan")("dev"));

const users = require("./db");

let shouldDelay = false;
const DELAY_TIME = 5000;

app.get("/users/:id", (req, res) => {
  console.log("should delay: ", shouldDelay);

  setTimeout(
    () => {
      res.json(users[req.params.id - 1]);
    },
    shouldDelay ? DELAY_TIME : 0
  );

  shouldDelay = !shouldDelay;
});

const PORT = 4000;
app.listen(PORT, () => console.log(`server is up and running on port ${PORT}`));
