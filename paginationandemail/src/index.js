
const express = require("express");

const app = express();

app.use(express.json());

const userController = require("./controller/user.controller.js");

app.use("/users", userController);

module.exports = app;