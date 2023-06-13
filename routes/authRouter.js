const express = require('express');

const { tryCatchWrapper } = require('../helpers/tryCatchWrapper');
const { authorize } = require('../middlewares/authorize');
const {
  register,
  login,
  logout,
  googleAuth,
  googleRedirect,
  refreshToken,
  facebookAuth,
  facebookRedirect,
} = require('../controller/auth');
const { passwordRecovery } = require('../controller/auth/passwordRecovery');
const { passwordChange } = require('../controller/auth/passwordChange');

const authRouter = express.Router();

authRouter.post('/register', tryCatchWrapper(register));
authRouter.post('/login', tryCatchWrapper(login));
authRouter.post('/logout', authorize(), tryCatchWrapper(logout));
authRouter.get('/google', tryCatchWrapper(googleAuth));
authRouter.get('/google-redirect', tryCatchWrapper(googleRedirect));
authRouter.get('/facebook', tryCatchWrapper(facebookAuth));
authRouter.get('/facebook-redirect', tryCatchWrapper(facebookRedirect));
authRouter.post('/refresh', tryCatchWrapper(refreshToken));
authRouter.post('/password/recovery', tryCatchWrapper(passwordRecovery));
authRouter.post(
  '/password/change',
  authorize(),
  tryCatchWrapper(passwordChange)
);

module.exports = authRouter;
