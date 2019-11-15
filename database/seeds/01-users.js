exports.seed = function(knex) {
  return knex("users")
    .truncate()
    .then(function() {
      return knex("users").insert([
        { username: "shaun", password: "1234" },
        { username: "david", password: "1234" },
        { username: "judith", password: "1234" }
      ]);
    });
};
