exports.seed = async function(knex) {
  await knex("votes").truncate();
  await knex("issues").truncate();
  await knex("users").truncate();
  await knex("sessions").truncate();
};
