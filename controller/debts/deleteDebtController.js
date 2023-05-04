const { isValidObjectId } = require('mongoose');
const { Debt } = require('../../models/debtModel');
const { BadRequest } = require('http-errors');

const deleteDebtController = async (req, res) => {
  const { _id } = req.user;
  const { debtId } = req.params;

  if (!isValidObjectId(debtId))
    throw BadRequest(
      'Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer'
    );
  const debt = await Debt.findById(debtId);
  if (!debt) throw BadRequest('Bad Request!!!');

  await Debt.findOneAndRemove({ _id: debtId, owner: _id });

  res.json({ message: 'debt is deleted!' });
};

module.exports = {
  deleteDebtController,
};
