const db = require("../database/dbConfig");

module.exports = {
  getAllUsers: () => {
    return db("users");
  },
  findById: id => {
    return db("users").where({ id });
  },
  addUser: user => {
    return db("users")
      .insert(user)
      .then(id => this.findById(id));
  },
  updateUser: (id, newUserDetails) => {
    return db("users")
      .where({ id })
      .update(newUserDetails);
  },
  deleteUser: id => {
    return db("users")
      .where({ id })
      .del();
  }
};
