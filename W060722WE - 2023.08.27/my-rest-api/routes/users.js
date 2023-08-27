const router = require("express").Router();

const { User } = require("../models/users");

router.get("/test", async (req, res) => {
  //   const user = await new User({
  //     email: "d@g.com",
  //     biz: true,
  //     password: "s123456s",
  //     name: "Daniel",
  //   }).save();

  const user = await User.find({ name: "Daniel" });

  res.json(user);
});

module.exports = router;
