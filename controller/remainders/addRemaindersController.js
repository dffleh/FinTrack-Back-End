const httpError = require('../../helpers/httpError');
const { Remainder } = require('../../models/remainderModel');

async function addRemaindersController(req, res, next) {
  const {
    category,
    deskription,
    phone,
    amount,
    sum,
    dateOfPayment,
    regularPayment,
    owner,
  } = req.body;
  const newRemainder = await Remainder.create({
    category,
    deskription,
    phone,
    amount,
    sum,
    dateOfPayment,
    regularPayment,
    owner,
  });
  if (!newRemainder) {
    return next(httpError, 'Remainders not found');
  }
  res.status(201).json(newRemainder);
}
module.exports = { addRemaindersController };
