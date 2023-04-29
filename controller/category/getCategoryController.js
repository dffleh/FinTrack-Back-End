const { BadRequest } = require('http-errors');
const { Transaction } = require('../../models');

const getCategoryContoller = async (req, res, next) => {
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

  const category =
    operation === 'all'
      ? await Transaction.aggregate([
          {
            $match: {
              owner: _id,
              createdAt: {
                $gte: new Date(start),
                $lte: new Date(end),
              },
            },
          },
          {
            $group: {
              _id: {
                category: '$category',
                descr: '$description',
              },
              total: {
                $sum: '$sum',
              },
            },
          },
          {
            $project: {
              _id: 0,
              name: '$_id.category',
              stat: {
                name: '$_id.descr',
                total: '$total',
              },
            },
          },
          {
            $sort: {
              'stat.total': -1,
            },
          },
          {
            $group: {
              _id: '$name',
              stats: {
                $push: '$stat',
              },
              total: {
                $sum: '$stat.total',
              },
            },
          },
          {
            $sort: {
              total: -1,
            },
          },
        ])
      : await Transaction.aggregate([
          {
            $match: {
              owner: _id,
              createdAt: {
                $gte: new Date(start),
                $lte: new Date(end),
              },
              operation: operation,
            },
          },
          {
            $group: {
              _id: {
                category: '$category',
                descr: '$description',
              },
              total: {
                $sum: '$sum',
              },
            },
          },
          {
            $project: {
              _id: 0,
              name: '$_id.category',
              stat: {
                name: '$_id.descr',
                total: '$total',
              },
            },
          },
          {
            $sort: {
              'stat.total': -1,
            },
          },
          {
            $group: {
              _id: '$name',
              stats: {
                $push: '$stat',
              },
              total: {
                $sum: '$stat.total',
              },
            },
          },
          {
            $sort: {
              total: -1,
            },
          },
        ]);

  res.json(category);
};

module.exports = { getCategoryContoller };
