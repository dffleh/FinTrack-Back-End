const express = require('express');

const { tryCatchWrapper } = require('../helpers/tryCatchWrapper');
const { authorize } = require('../middlewares/authorize');

const { validateBody } = require('../middlewares/validateBody');
const { walletSchema } = require('../schemas/wallet');

const {
  addWalletController,
  getWalletsController,
  editWalletController,
  removeWalletController,
} = require('../controller/wallets');

const walletsRouter = express.Router();

walletsRouter.use(authorize());

walletsRouter.post(
  '/',
  validateBody(walletSchema),
  tryCatchWrapper(addWalletController)
);

walletsRouter.get('/', tryCatchWrapper(getWalletsController));
// edit wallet
walletsRouter.put(
  '/:walletId',
  validateBody(walletSchema),
  tryCatchWrapper(editWalletController)
);

walletsRouter.delete('/:walletId', tryCatchWrapper(removeWalletController));

module.exports = walletsRouter;
