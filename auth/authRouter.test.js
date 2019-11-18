const knex = require("../database/dbConfig");
const request = require("supertest");
const server = require("../api/server");

beforeAll(() => {
  return knex.seed.run();
});

describe("authRouter", () => {
  describe("POST /api/auth/login", () => {
    test("allows correct credentials", () => {
      return request(server)
        .post("/api/auth/login")
        .send({
          email: "shaun@shaun.com",
          password: "1234"
        })
        .expect(200)
        .expect({
          message: "Welcome, Shaun!",
          user: {
            id: 1,
            email: "shaun@shaun.com",
            password:
              "$2b$11$yKSaDsRgknQokSzKBnWO7.NXESCMqSpUZH6TEKW3JEcppNAG2aMFq",
            first_name: "Shaun",
            last_name: "Orpen",
            phone: "+44 (0)1234 567890"
          }
        });
    });
    test("doesn't allow wrong password", () => {
      return request(server)
        .post("/api/auth/login")
        .send({
          email: "shaun@shaun.com",
          password: "123"
        })
        .expect(401)
        .expect({
          message: "Please check your username and password and try again."
        });
    });
    test("doesn't allow wrong email", () => {
      return request(server)
        .post("/api/auth/login")
        .send({
          email: "shaun@shaun.co",
          password: "1234"
        })
        .expect(401)
        .expect({
          message: "Please check your username and password and try again."
        });
    });
    test("doesn't allow missing email", () => {
      return request(server)
        .post("/api/auth/login")
        .send({
          password: "1234"
        })
        .expect(400)
        .expect({ message: "Please submit a username and password." });
    });
    test("doesn't allow missing password", () => {
      return request(server)
        .post("/api/auth/login")
        .send({
          email: "shaun@shaun.com"
        })
        .expect(400)
        .expect({ message: "Please submit a username and password." });
    });
  });
  describe("GET /auth/logout", () => {
    test("allows authed user to logout", () => {});
  });
});
