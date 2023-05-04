const { isValidObjectId } = require('mongoose');
const { Debt } = require('../../models/debtModel');
const { BadRequest, NotFound } = require('http-errors');

const changeDebtController = async (req, res) => {
  const { _id } = req.user;
  const { debtId } = req.params;
  if (!isValidObjectId(debtId))
    throw BadRequest(
      'Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer'
    );
  const debt = await Debt.findById(debtId);
  if (!debt) throw NotFound(`Debt with id:${debtId} not found!`);

  const data = await Debt.findOneAndUpdate(
    { _id: debtId, owner: _id },
    { $set: { ...req.body } },
    { new: true }
  );

  res.json(data);
};

module.exports = {
  changeDebtController,
};
