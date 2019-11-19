const db = require("./dbConfig");

function findByEmail(email) {
  return db("users")
    .where({ email })
    .first();
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

module.exports = {
  findByEmail,
  findById
};
