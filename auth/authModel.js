const db = require("../database/dbConfig");

function findByEmail(email) {
  return db("users")
    .where({ email })
    .first();
}

module.exports = {
  findByEmail
};
