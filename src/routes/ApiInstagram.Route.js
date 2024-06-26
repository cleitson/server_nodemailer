const { Router } = require('express');
const { getPhotos, getProfile} = require('../controllers/ApiInstagram.controller');

const ApiInstagramRoute = new Router()

ApiInstagramRoute.get('/photos', getPhotos);
ApiInstagramRoute.get('/profile', getProfile);

module.exports = ApiInstagramRoute;