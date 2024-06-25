const express = require("express");
require("dotenv").config();

const app = express();

app.get("/health", (req, res) => {
  res.send({ message: "Hello World!" });
});

module.exports = app;