const bcrypt = require("bcrypt");
const { findByEmail } = require("../database/utilityFunctions");

function validateLogin(req, res, next) {
  const { email, password } = req.body;
  if (email && password) {
    findByEmail(email)
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          req.session.user = user;
          next();
        } else {
          res.status(401).json({
            message: "Please check your username and password and try again."
          });
        }
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({ message: "Please submit a username and password." });
  }
}

module.exports = {
  validateLogin
};
