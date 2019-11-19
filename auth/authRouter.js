const express = require("express");
const { validateLogin } = require("./authMiddleware");

const router = express.Router();

router.post("/login", validateLogin, (req, res) => {
  res.status(200).json({
    message: `Welcome, ${req.session.user.first_name}!`,
    user: req.session.user
  });
});

router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy(error => {
      if (error) {
        res.status(500).json({ message: error.message });
      } else {
        res
          .status(200)
          .json({ message: "You've successfully logged out. Goodbye!" });
      }
    });
  } else {
    res.end();
  }
});

module.exports = router;
