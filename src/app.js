const express = require("express");
var cors = require('cors')
require("express-async-errors");
require("dotenv").config();

const { SendEmailRoute, ApiInstagramRoute } = require("./routes")

const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.use("/send", SendEmailRoute );
app.use("/api", ApiInstagramRoute);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: err.message })
});
module.exports = app;