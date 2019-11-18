exports.up = function(knex) {
  return knex.schema
    .createTable("users", table => {
      table.increments();
      table
        .string("email")
        .notNullable()
        .unique("username");
      table.string("password").notNullable();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.string("phone").notNullable();
    })
    .createTable("issues", table => {
      table.increments();
      table.string("description").notNullable();
      table.float("location_lat").notNullable();
      table.float("location_lon").notNullable();
      table
        .integer("user_id")
        .notNullable()
        .references("id")
        .inTable("users");
      table.string("img_stretch").notNullable();
    })
    .createTable("votes", table => {
      table
        .integer("issue_id")
        .notNullable()
        .references("id")
        .inTable("issues");
      table
        .integer("user_id")
        .notNullable()
        .references("id")
        .inTable("users");
      table.primary(["issue_id", "user_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("votes")
    .dropTableIfExists("issues")
    .dropTableIfExists("users");
};
