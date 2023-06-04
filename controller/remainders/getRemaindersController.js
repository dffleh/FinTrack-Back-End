const httpError = require('../../helpers/httpError');
const { Remainder } = require('../../models/remainderModel');

async function getRemaindersController(req, res) {
  const { limit } = req.query;
  const remainders = await Remainder.find({}).limit(limit);
  if (!remainders) {
    return httpError;
  }
  res.json(remainders);
}
module.exports = { getRemaindersController };
