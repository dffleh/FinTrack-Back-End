const httpError = require('../../helpers/httpError');
const { Remainder } = require('../../models/remainderModel');

async function getRemaindersController(req, res, next) {
  const remainders = await Remainder.find({});
  if (!remainders) {
    return next(httpError, 'Movie not found');
  }
  res.json(remainders);
}
module.exports = { getRemaindersController };
