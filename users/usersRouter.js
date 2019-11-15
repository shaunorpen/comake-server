const express = require("express");
const users = require("./usersModel");

const router = express.Router();

router.get("/", (req, res) => {
  users
    .getAllUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});

module.exports = router;
