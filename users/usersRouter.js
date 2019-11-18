const express = require("express");
const users = require("./usersModel");
const {
  validateUser,
  validateNewUser,
  validateUpdatedUser
} = require("./usersMiddleware");

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

router.get("/:id", validateUser, (req, res) => {
  res.status(200).json(req.user);
});

router.post("/", validateNewUser, (req, res) => {
  users
    .addUser(req.body)
    .then(user => {
      res.status(200).json({
        message: `User id ${user.id} successfully created.`,
        user
      });
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});

router.put("/:id", validateUser, validateUpdatedUser, (req, res) => {
  users
    .updateUser(req.params.id, req.body)
    .then(user => {
      res.status(200).json({
        message: `User id ${user.id} successfully updated.`,
        updatedUser: user
      });
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});

router.delete("/:id", validateUser, (req, res) => {
  users
    .deleteUser(req.params.id)
    .then(() => {
      res.status(200).json({
        message: `User id ${req.params.id} successfully deleted.`,
        deletedUser: req.user
      });
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});

module.exports = router;
