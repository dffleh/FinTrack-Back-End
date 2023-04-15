const { User } = require('../../models/userModel');
const axios = require('axios');
const queryString = require('query-string');
const { Session } = require('../../models/sessionModel');
const { createToken } = require('../../helpers/createToken');

export const facebookRedirect = async (req, res) => {
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  const urlObj = new URL(fullUrl);
  const urlParams = queryString.parse(urlObj.search);
  const code = urlParams.code;
  const tokenData = await axios({
    url: 'https://graph.facebook.com/v4.0/oauth/access_token',
    method: 'get',
    params: {
      client_id: process.env.FACEBOOK_APP_ID,
      client_secret: process.env.FACEBOOK_APP_SECRET,
      redirect_uri: `${process.env.BASE_URL}/auth/facebook-redirect/`,
      code,
    },
  });
  const userData = await axios({
    url: 'https://graph.facebook.com/me',
    method: 'get',
    params: {
      fields: ['email', 'first_name'].join(','),
      access_token: tokenData.data.access_token,
    },
  });
    
    const { email } = userData.data;
    let user = await User.findOne({ email });
    if (!user) {
        user = await User.create({ email, verificationToken: null, verify: true });
    }
    const session = await Session.create({ uid: user._id });

    const token = await createToken(user._id, session._id);

    const { accessToken, refreshToken, expiresIn } = token;
  return res.redirect(
    `${process.env.FRONTEND_URL}?accessToken=${accessToken}&refreshToken=${refreshToken}&expiresIn=${expiresIn}`
  );
};
