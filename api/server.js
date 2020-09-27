const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const apiRouter = require("./api-router.js");

const server = express();
server.use(cors());
server.use(helmet());

server.use("/api", apiRouter);

module.exports = server;
