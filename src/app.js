const express = require("express");
require("express-async-errors");
require("dotenv").config();
const nodemailer = require("nodemailer");


const app = express();
app.use(express.json());


app.get("/health", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.post("/send", async (req, res) => {
  const { from, subject, nome, email, mensagem } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }

  });

  let mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: subject,
    text: mensagem,
    html: `
      <p>nome:${nome}</p>
      <p>email:${email}</p>
      <p>mensagem:${mensagem}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false });
  }

});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: err.message })
});
module.exports = app;