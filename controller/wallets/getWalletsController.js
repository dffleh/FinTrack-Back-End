const { Wallet } = require('../../models/walletModel');
const { NotFound } = require('http-errors');

const getWalletsController = async (req, res) => {
  const { _id } = req.user;

  const data = await Wallet.find({ owner: _id });
  if (!data) throw NotFound('Your wallets not found!');

  res.json(data);
};

module.exports = {
  getWalletsController,
};
