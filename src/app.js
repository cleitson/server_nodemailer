const express = require("express");
require("express-async-errors");
require("dotenv").config();

const { SendEmailRoute } = require("./routes")

const app = express();
app.use(express.json());


app.get("/health", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.use("/send", SendEmailRoute );

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: err.message })
});
module.exports = app;