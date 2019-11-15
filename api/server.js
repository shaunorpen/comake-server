const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const usersRouter = require("../users/usersRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/users", usersRouter);

server.get("*", (req, res) => {
  res
    .status(200)
    .json({ message: `API is up and running on port ${process.env.PORT}!` });
});

module.exports = server;
