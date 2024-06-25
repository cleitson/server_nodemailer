const { Router } = require('express');
const { sendEmail } = require('../controllers/SendEmail.controller');
const { checkEmailMiddleware } = require('../middlewares/SendEmail.middleware');

const SendEmailRoute = new Router()

SendEmailRoute.post("/", checkEmailMiddleware, sendEmail);

module.exports = SendEmailRoute;