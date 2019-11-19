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

function validateDuplicateUser(req, res, next) {
  if (req.body.email) {
    users
      .findByEmail(req.body.email)
      .then(user => {
        if (user) {
          res.status(303).json({
            message: `There's already an account registered for ${user.email}.`
          });
        } else {
          next();
        }
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  } else {
    next();
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
  validateUpdatedUser,
  validateDuplicateUser
};
