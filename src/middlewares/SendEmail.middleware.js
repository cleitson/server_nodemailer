const joi = require('joi');

const validMessageSchema = joi.object({
  name: joi.string().required(),
  mail: joi.string().email().required(),
  message: joi.string().required()
})

const checkEmailMiddleware = (req, res, next) => {
  const { name, mail, message } = req.body;

  if (!name || !mail || !message) {
    return res.status(400).json({ status: "BAD_REQUEST", data: "Todos os campos devem ser preenchidos" });
  }

  const { error } = validMessageSchema.validate({ name, mail, message });
  if (error) {
    return res.status(422).json({ status: "INVALID_VALUE", data: error.message });
  }

  next();
}

module.exports = {checkEmailMiddleware};
