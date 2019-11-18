const users = require("./usersModel");

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

module.exports = {
  validateUser,
  validateNewUser,
  validateUpdatedUser
};
