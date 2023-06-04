const httpError = require('../../helpers/httpError');
const { Remainder } = require('../../models/remainderModel');

async function getOneRemainderController(req, res, next) {
  const { id } = req.params;
  const remainder = await Remainder.findById(id);
  if (!remainder) {
    return next(httpError, 'Remainder not found');
  }
  return res.json(remainder);
}
module.exports = { getOneRemainderController };
