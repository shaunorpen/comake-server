const db = require("../database/dbConfig");

function findById(id) {
  return db("users")
    .where({ id })
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
  findById
};
