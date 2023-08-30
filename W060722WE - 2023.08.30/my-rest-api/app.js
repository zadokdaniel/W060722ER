const mongoose = require("mongoose");

const express = require("express");

const morgan = require("morgan");

const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");

mongoose
  .connect("mongodb://127.0.0.1/my_rest_api_W060722WE")
  .then(() => console.log("connected to db successfully"))
  .catch((err) => console.log("could not connect to db ", err));

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/users", usersRouter);
app.use("/auth", authRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
