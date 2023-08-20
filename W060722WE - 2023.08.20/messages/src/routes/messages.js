const express = require("express");
const route = express.Router();

const messagesManager = require("../messages");

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

route.post("/", (req, res) => {
  try {
    res.json(messagesManager.sendMessage(req.body));
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
});

route.get("/", (req, res) => {
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

route.get("/:id", (req, res) => {
  try {
    res.json(messagesManager.getById(req.params.id));
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

route.delete("/:id", (req, res) => {
  try {
    res.json(messagesManager.deleteId(req.params.id));
  } catch (err) {
    res.json({ error: err.message });
  }
});

route.post("/clear/:to", (req, res) => {
  res.json(messagesManager.clearInbox(req.params.to));
});

module.exports = route;
