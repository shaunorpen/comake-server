const bcrypt = require("bcrypt");
const users = require("./authModel");

function validateLogin(req, res, next) {
  const { email, password } = req.body;
  if (email && password) {
    users
      .findByEmail(email)
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          req.user = {
            id: user.id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            phone: user.phone
          };
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

module.exports = validateLogin;
