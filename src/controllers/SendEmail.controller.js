const emailService = require('../services/SendEmail.service');
const httpMap  = require('../utils/mapHttpsStatus');


const sendEmail = async (req, res) => {
  const { name, mail, message } = req.body;

  const { status, data } = await emailService.sendMail(name, mail, message);

  res.status(httpMap(status)).json(data);

};

module.exports = {
  sendEmail,
};