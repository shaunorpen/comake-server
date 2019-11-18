const express = require("express");
const { validateLogin } = require("./authMiddleware");

const router = express.Router();

router.post("/login", validateLogin, (req, res) => {
  res.status(200).json({
    message: `Welcome, ${req.session.user.first_name}!`,
    user: req.session.user
  });
});

module.exports = router;
