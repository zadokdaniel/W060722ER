const router = require("express").Router();

const bcrypt = require("bcrypt");
const _ = require("lodash");

const { User, validateUser } = require("../models/users");

router.post("/", async (req, res) => {
  // validate user's input
  const { error } = validateUser(req.body);
  if (error) {
    res.status(400).json(error.details[0].message);
    return;
  }

  // validate system
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    res.status(400).send("User already registered");
    return;
  }

  // process
  user = new User(req.body);
  user.password = await bcrypt.hash(user.password, 12);

  await user.save();

  // results
  res.json(_.pick(user, ["_id", "name", "email", "biz"]));
});

module.exports = router;
