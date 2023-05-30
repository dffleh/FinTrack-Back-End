const { BadRequest, NotFound } = require('http-errors');
const { isValidObjectId } = require('mongoose');
const { Wallet } = require('../../models/walletModel');

const removeWalletController = async (req, res) => {
  const { _id } = req.user;
  const { walletId } = req.params;

  if (!isValidObjectId(walletId))
    throw BadRequest(
      'Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer'
    );

  const wallet = await Wallet.findOne({ _id: walletId, owner: _id });
  if (!wallet) throw NotFound(`Wallet with id: ${walletId} not found!`);
  if (wallet.balance !== 0)
    throw BadRequest(
      'It is not possible to delete a wallet with a positive balance. Transfer funds to another wallet and try again.'
    );

  await Wallet.findByIdAndRemove(walletId);

  res.json({ massage: `Wallet with id: ${walletId} successfully deleted` });
};

module.exports = {
  removeWalletController,
};
