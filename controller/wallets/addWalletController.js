const { Wallet } = require('../../models/welletModel');

const addWalletController = async (req, res, next) => {
  const { _id } = req.user;
  const result = await Wallet.create({ ...req.body, owner: _id });

  res.status(201).json(result);
};

module.exports = {
  addWalletController,
};
