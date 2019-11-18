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

function validateUser(req, res, next) {
  users
    .findById(req.params.id)
    .then(user => {
      if (user) {
        req.user = user;
        next();
      } else {
        res
          .status(404)
          .json({ message: `There is no user with id ${req.params.id}.` });
      }
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
}

function validateNewUser(req, res, next) {
  if (
    req.body.email &&
    req.body.password &&
    req.body.first_name &&
    req.body.last_name &&
    req.body.phone
  ) {
    next();
  } else {
    res.status(400).json({
      message:
        "Please ensure the new user has an email, password, first_name, last_name and phone number."
    });
  }
}

function validateUpdatedUser(req, res, next) {
  if (
    req.body.email ||
    req.body.password ||
    req.body.first_name ||
    req.body.last_name ||
    req.body.phone
  ) {
    next();
  } else {
    res.status(400).json({
      message:
        "Please ensure the updated user has a new email, password, first_name, last_name or phone number."
    });
  }
}

module.exports = router;
