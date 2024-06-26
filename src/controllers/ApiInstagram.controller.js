const ApiInstagramService = require('../services/ApiInstagram.service');
const httpMap  = require('../utils/mapHttpsStatus');

const getPhotos = async (_req, res) => {
  const { status, data } = await ApiInstagramService.getPhotos();

  res.status(httpMap(status)).json(data);

}

const getProfile = async (_req, res) => {
  const { status, data } = await ApiInstagramService.getProfile();

  res.status(httpMap(status)).json(data);

}

module.exports = {
  getPhotos,
  getProfile,
};