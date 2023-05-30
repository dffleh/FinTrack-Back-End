const { Wallet } = require('../../models/walletModel');

const addWalletController = async (req, res) => {
  const { _id } = req.user;
  const result = await Wallet.create({ ...req.body, owner: _id, balance: 0 });

  res.status(201).json(result);
};

module.exports = {
  addWalletController,
};
