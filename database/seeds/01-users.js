exports.seed = function(knex) {
  return knex("users").insert([
    {
      email: "shaun@shaun.com",
      password: "$2b$11$yKSaDsRgknQokSzKBnWO7.NXESCMqSpUZH6TEKW3JEcppNAG2aMFq",
      first_name: "Shaun",
      last_name: "Orpen",
      phone: "+44 (0)1234 567890"
    },
    {
      email: "david@david.com",
      password: "$2b$11$yKSaDsRgknQokSzKBnWO7.NXESCMqSpUZH6TEKW3JEcppNAG2aMFq",
      first_name: "David",
      last_name: "Orpen",
      phone: "+44 (0)1234 567891"
    },
    {
      email: "judith@judith.com",
      password: "$2b$11$yKSaDsRgknQokSzKBnWO7.NXESCMqSpUZH6TEKW3JEcppNAG2aMFq",
      first_name: "Judith",
      last_name: "Orpen",
      phone: "+44 (0)1234 567892"
    }
  ]);
};
