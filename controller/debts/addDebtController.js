const { Debt } = require('../../models/debtModel');

const addDebtConroller = async (req, res) => {
  const { _id } = req.user;
  const result = await Debt.create({ ...req.body, owner: _id });

  res.status(201).json(result);
};

module.exports = {
  addDebtConroller,
};
