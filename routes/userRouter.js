const express = require('express');

const { authorize } = require('../middlewares/authorize');
const { tryCatchWrapper } = require('../helpers/tryCatchWrapper');
const {
  updateBalance,
} = require('../controller/balance/updateBalanceController');
const { current } = require('../controller/auth/currentUserController');
const {
  changeSettings,
} = require('../controller/auth/changeSettingsController');

const userRouter = express.Router();
userRouter.use(authorize());

userRouter.patch('/update', tryCatchWrapper(updateBalance));
userRouter.get('/current', tryCatchWrapper(current));
userRouter.patch('/changeSettings', tryCatchWrapper(changeSettings));

module.exports = userRouter;
