const { Wallet } = require('../../models/walletModel');
const { NotFound, BadRequest } = require('http-errors');
const { isValidObjectId } = require('mongoose');

const editWalletController = async (req, res) => {
  const { _id } = req.user;
  const { walletId } = req.params;

  if (!isValidObjectId(walletId))
    throw BadRequest(
      'Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer'
    );

  const wallet = await Wallet.findOneAndUpdate(
    { _id: walletId, owner: _id },
    { $set: { ...req.body } },
    { new: true }
  );

  if (!wallet) throw NotFound(`Transaction with id:${walletId} not found!`);

  res.json(wallet);
};

module.exports = {
  editWalletController,
};
