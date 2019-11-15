exports.up = function(knex) {
  return knex.schema
    .createTable("users", table => {
      table.increments();
      table
        .string("username")
        .notNullable()
        .unique("username");
      table.string("password").notNullable();
    })
    .createTable("issues", table => {
      table.increments();
      table.string("description").notNullable();
      table
        .integer("created_by_id")
        .notNullable()
        .references("id")
        .inTable("users");
    })
    .createTable("votes", table => {
      table.increments();
      table
        .integer("issue_id")
        .notNullable()
        .references("id")
        .inTable("issues");
      table
        .integer("voted_by_id")
        .notNullable()
        .references("id")
        .inTable("users");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("votes")
    .dropTableIfExists("issues")
    .dropTableIfExists("users");
};
