const db = require("./dbConfig");

function findByEmail(email) {
  return db("users")
    .where({ email })
    .first();
}

function findById(id) {
  return db("users")
    .where({ id })
    .select("id", "email", "first_name", "last_name", "phone")
    .first();
}

module.exports = {
  findByEmail,
  findById
};
