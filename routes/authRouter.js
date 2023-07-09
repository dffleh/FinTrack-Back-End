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
const { sendRecoveryCode } = require('../controller/auth/sendRecoveryCode');
const { codeVerification } = require('../controller/auth/codeVerification');
const { passwordChange } = require('../controller/auth/passwordChange');
const { passwordRecovery } = require('../controller/auth/passwopdRecovery');

const authRouter = express.Router();

authRouter.post('/register', tryCatchWrapper(register));
authRouter.post('/login', tryCatchWrapper(login));
authRouter.post('/logout', authorize(), tryCatchWrapper(logout));
authRouter.get('/google', tryCatchWrapper(googleAuth));
authRouter.get('/google-redirect', tryCatchWrapper(googleRedirect));
authRouter.get('/facebook', tryCatchWrapper(facebookAuth));
authRouter.get('/facebook-redirect', tryCatchWrapper(facebookRedirect));
authRouter.post('/refresh', tryCatchWrapper(refreshToken));
authRouter.post('/password/sendCode', tryCatchWrapper(sendRecoveryCode));
authRouter.post(
  '/password/codeVerification',
  tryCatchWrapper(codeVerification)
);
authRouter.patch(
  '/password/recovery',
  authorize(),
  tryCatchWrapper(passwordRecovery)
);

authRouter.post(
  '/password/change',
  authorize(),
  tryCatchWrapper(passwordChange)
);

module.exports = authRouter;
