const express = require("express");

const app = express();

const { engine } = require("express-handlebars");

app.engine("hbs", engine({ defaultLayout: "main.hbs" }));
app.set("view engine", "hbs");

app.get("/:some", (req, res) => {
  res.render("page", { page: req.params.some, title: "hello" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
