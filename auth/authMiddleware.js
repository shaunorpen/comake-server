const bcrypt = require("bcrypt");
const { findByEmail } = require("./authModel");

function validateLogin(req, res, next) {
  const { email, password } = req.body;
  findByEmail(email)
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.user = user;
        next();
      } else {
        res.status(404).json({ message: "Username not recognised." });
      }
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
}

module.exports = {
  validateLogin
};
