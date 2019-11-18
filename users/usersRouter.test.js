const knex = require("../database/dbConfig");
const request = require("supertest");
const server = require("../api/server");

beforeAll(() => {
  return knex.seed.run();
});

describe("usersRouter", () => {
  describe("GET /api/users", () => {
    test("returns a list of users", () => {
      return request(server)
        .get("/api/users")
        .expect(200)
        .expect([
          {
            id: 1,
            email: "shaun@shaun.com",
            password:
              "$2b$11$yKSaDsRgknQokSzKBnWO7.NXESCMqSpUZH6TEKW3JEcppNAG2aMFq",
            first_name: "Shaun",
            last_name: "Orpen",
            phone: "+44 (0)1234 567890"
          },
          {
            id: 2,
            email: "david@david.com",
            password:
              "$2b$11$yKSaDsRgknQokSzKBnWO7.NXESCMqSpUZH6TEKW3JEcppNAG2aMFq",
            first_name: "David",
            last_name: "Orpen",
            phone: "+44 (0)1234 567891"
          },
          {
            id: 3,
            email: "judith@judith.com",
            password:
              "$2b$11$yKSaDsRgknQokSzKBnWO7.NXESCMqSpUZH6TEKW3JEcppNAG2aMFq",
            first_name: "Judith",
            last_name: "Orpen",
            phone: "+44 (0)1234 567892"
          }
        ]);
    });
  });
  describe("GET /api/users/:id", () => {
    test("returns correct user for id 1", () => {
      return request(server)
        .get("/api/users/1")
        .expect(200)
        .expect({
          id: 1,
          email: "shaun@shaun.com",
          first_name: "Shaun",
          last_name: "Orpen",
          phone: "+44 (0)1234 567890"
        });
    });
    test("returns correct user for id 2", () => {
      return request(server)
        .get("/api/users/2")
        .expect(200)
        .expect({
          id: 2,
          email: "david@david.com",
          first_name: "David",
          last_name: "Orpen",
          phone: "+44 (0)1234 567891"
        });
    });
    test("returns correct user for id 3", () => {
      return request(server)
        .get("/api/users/3")
        .expect(200)
        .expect({
          id: 3,
          email: "judith@judith.com",
          first_name: "Judith",
          last_name: "Orpen",
          phone: "+44 (0)1234 567892"
        });
    });
    test("returns error message for invalid id 4", () => {
      return request(server)
        .get("/api/users/4")
        .expect(404)
        .expect({ message: "There is no user with id 4." });
    });
    test("returns error message for invalid id a", () => {
      return request(server)
        .get("/api/users/a")
        .expect(404)
        .expect({ message: "There is no user with id a." });
    });
  });
  describe("POST /api/users", () => {
    test("correctly creates new user", () => {
      return request(server)
        .post("/api/users")
        .send({
          email: "jeff@jeff.com",
          password: "1234",
          first_name: "Jeff",
          last_name: "Davies",
          phone: "+44 (0)1234 567894"
        })
        .expect(201)
        .expect({
          message: "User id 4 successfully created.",
          user: {
            id: 4,
            email: "jeff@jeff.com",
            first_name: "Jeff",
            last_name: "Davies",
            phone: "+44 (0)1234 567894"
          }
        });
    });
    test("errors if user is recreated", () => {
      return request(server)
        .post("/api/users")
        .send({
          email: "jeff@jeff.com",
          password: "1234",
          first_name: "Jeff",
          last_name: "Davies",
          phone: "+44 (0)1234 567894"
        })
        .expect(500)
        .expect({});
    });
  });
  //   describe("POST /api/users/login", () => {});
  //   describe("PUT /api/users/:id", () => {});
  //   describe("DELETE /api/users/:id", () => {});
});
