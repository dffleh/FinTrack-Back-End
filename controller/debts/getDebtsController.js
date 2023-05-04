const { Debt } = require('../../models/debtModel');
const { BadRequest } = require('http-errors');

const getDebtsController = async (req, res, next) => {
  const { _id } = req.user;
  const { start, end } = req.query;

  if (!start || !end) return next(BadRequest('Bad request!'));

  const endDate = new Date(end);
  endDate.setDate(endDate.getDate() + 1);

  const debts = await Debt.find({
    owner: _id,
    date: {
      $gte: new Date(start),
      $lte: endDate,
    },
  }).sort({ date: 1 });

  res.json(debts);
};

module.exports = {
  getDebtsController,
};
