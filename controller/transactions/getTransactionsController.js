const { Transaction } = require('../../models');
const { BadRequest } = require('http-errors');

const getTransactionsController = async (req, res, next) => {
  const { _id } = req.user;
  const { operation } = req.params;
  const { start, end } = req.query;

  if (
    operation !== 'expense' &&
    operation !== 'income' &&
    operation !== 'all' &&
    (!start || !end)
  )
    return next(BadRequest('Bad request!'));

  const transactions =
    operation === 'all'
      ? await Transaction.find({
          owner: _id,
          date: {
            $gte: new Date(start),
            $lte: new Date(end).setDate(new Date(end).getDate() + 1),
          },
        }).sort({ date: -1 })
      : await Transaction.find({
          owner: _id,
          operation,
          date: {
            $gte: new Date(start),
            $lte: new Date(end).setDate(new Date(end).getDate() + 1),
          },
        }).sort({ date: -1 });

  res.json(transactions);
};

module.exports = { getTransactionsController };
