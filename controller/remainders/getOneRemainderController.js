const { isValidObjectId } = require('mongoose');
const httpError = require('../../helpers/httpError');
const { Remainder } = require('../../models/remainderModel');

async function getOneRemainderController(req, res, next) {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return next(httpError(400, 'Invalid ID'));
  }

  try {
    const remainder = await Remainder.findById(id);
    if (!remainder) {
      return next(httpError(404, 'Remainder not found'));
    }

    return res.json(remainder);
  } catch (error) {
    return next(httpError(500, 'Internal server error'));
  }
}

module.exports = { getOneRemainderController };
