const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const session = require("express-session");

const usersRouter = require("../users/usersRouter");

const sessionConfig = {
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
};

const server = express();

server.use(cors());
server.use(express.json());
server.use(helmet());
server.use(session(sessionConfig));

server.use("/api/users", usersRouter);

server.get("*", (req, res) => {
  res
    .status(200)
    .json({ message: `API is up and running on port ${process.env.PORT}!` });
});

module.exports = server;
