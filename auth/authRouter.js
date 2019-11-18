const express = require("express");
const { validateLogin } = require("./authModel");

const router = express.Router();

router.post("/login", validateLogin, (req, res) => {
  res
    .status(200)
    .json({ message: `Welcome, ${req.user.first_name}!`, user: req.user });
});

module.exports = router;
