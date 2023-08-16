const messagesManager = require("./src/messages");

const express = require("express");

const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.use(express.json());

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

app.post("/messages", (req, res) => {
  try {
    res.json(messagesManager.sendMessage(req.body));
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
});

app.get("/messages/:id", (req, res) => {
  console.log(req.params);
});

app.get("/messages", (req, res) => {
  if (req.query.from) {
    res.send(messagesManager.getByFrom(req.query.from));
    return;
  }
  if (req.query.to) {
    res.send(messagesManager.getByTo(req.query.to));
    return;
  }

  if (req.query.fromDate) {
    const fromDate = new Date(req.query.fromDate);
    const toDate = req.query.toDate ? new Date(req.query.toDate) : new Date();

    if (!isValidDate(fromDate) || !isValidDate(toDate)) {
      res.status(404).send({
        error: "dates must be valid dates",
      });
      return;
    }

    try {
      res.json(messagesManager.getByDate(fromDate, toDate));
    } catch (e) {
      res.status(404).json({ error: e.message });
    }

    return;
  }

  res.send(messagesManager.get());
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
