const express = require('express');

const { tryCatchWrapper } = require('../helpers/tryCatchWrapper');
const { authorize } = require('../middlewares/authorize');

const {
  deleteTransactionController,
  addTransactionController,
  getTransactionsController,
  getReportController,
  changeTransactionController,
} = require('../controller/transactions');

const transactionsRouter = express.Router();
transactionsRouter.use(authorize());

transactionsRouter.post('/', tryCatchWrapper(addTransactionController));

transactionsRouter.put(
  '/:transactionId',
  tryCatchWrapper(changeTransactionController)
);

transactionsRouter.get(
  '/:operation',
  tryCatchWrapper(getTransactionsController)
);

transactionsRouter.get(
  '/report/:operation',
  tryCatchWrapper(getReportController)
);

transactionsRouter.delete(
  '/:transactionId',
  tryCatchWrapper(deleteTransactionController)
);

module.exports = transactionsRouter;
