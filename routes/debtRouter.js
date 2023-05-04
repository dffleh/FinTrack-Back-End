const express = require('express');

const { tryCatchWrapper } = require('../helpers/tryCatchWrapper');
const { authorize } = require('../middlewares/authorize');
const {
  addDebtConroller,
  getDebtsController,
  deleteDebtController,
  changeDebtController,
} = require('../controller/debts');
const { validateBody } = require('../middlewares/validateBody');
const { debtSchema } = require('../schemas/debt');

const debtsRouter = express.Router();

debtsRouter.use(authorize());

debtsRouter.post(
  '/',
  validateBody(debtSchema),
  tryCatchWrapper(addDebtConroller)
);

debtsRouter.get('/', tryCatchWrapper(getDebtsController));

debtsRouter.put(
  '/:debtId',
  validateBody(debtSchema),
  tryCatchWrapper(changeDebtController)
);

debtsRouter.delete('/:debtId', tryCatchWrapper(deleteDebtController));

module.exports = debtsRouter;
