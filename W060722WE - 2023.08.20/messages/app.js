const express = require("express");

const morgan = require("morgan");

const messagesRoute = require("./src/routes/messages");

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/messages", messagesRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
