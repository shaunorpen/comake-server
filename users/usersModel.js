const db = require("../database/dbConfig");

function findById(id) {
  return db("users")
    .where({ id })
    .select("id", "email", "first_name", "last_name", "phone")
    .first();
}

function findByEmail(email) {
  return db("users")
    .where({ email })
    .first();
}

module.exports = {
  getAllUsers: () => {
    return db("users");
  },
  addUser: user => {
    return db("users")
      .insert(user)
      .then(([id]) => findById(id));
  },
  updateUser: (id, newUserDetails) => {
    return db("users")
      .where({ id })
      .update(newUserDetails)
      .then(() => findById(id));
  },
  deleteUser: id => {
    return db("users")
      .where({ id })
      .del();
  },
  findById,
  findByEmail
};
