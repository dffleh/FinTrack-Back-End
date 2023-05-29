const { isValidObjectId } = require('mongoose');
const { BadRequest, NotFound } = require('http-errors');
const { Transaction } = require('../../models/transactionModel');

const changeTransactionController = async (req, res) => {
  const { _id } = req.user;
  const { transactionId } = req.params;
  if (!isValidObjectId(transactionId))
    throw BadRequest(
      'Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer'
    );
  const transaction = await Transaction.findById(transactionId);
  if (!transaction)
    throw NotFound(`Transaction with id:${transactionId} not found!`);

  const data = await Transaction.findOneAndUpdate(
    { _id: transactionId, owner: _id },
    { $set: { ...req.body } },
    { new: true }
  );

  res.json(data);
};

module.exports = {
  changeTransactionController,
};
