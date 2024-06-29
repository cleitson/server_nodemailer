const nodemailer = require("nodemailer");


const sendMail = async (name, mail, message) => {

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
    subject: "Contato do Portifolio",
    text: message,
    html: `
      <p>nome:${name}</p>
      <p>email:${mail}</p>
      <p>mensagem:${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return { status: "SUCCESS", data: { message:"Email enviado com sucesso!" } };
  } catch (error) {
    console.error(error);
    return { status: "BAD_REQUEST", data: { message: "Erro ao enviar email!" } };
  }
};

module.exports = {
  sendMail,
};