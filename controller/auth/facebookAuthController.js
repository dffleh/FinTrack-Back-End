const queryString = require('query-string');

async function facebookAuth(req, res) {
  const stringifiedParams = queryString.stringify({
    client_id: process.env.FACEBOOK_APP_ID,
    redirect_uri: `${process.env.BASE_URL}/auth/facebook-redirect/`,
    scope: 'email',
    response_type: 'code',
    auth_type: 'rerequest',
    display: 'popup',
  });
  return res.redirect(
    `https://www.facebook.com/v16.0/dialog/oauth?${stringifiedParams}`
  );
};

module.exports = {
  facebookAuth,
};