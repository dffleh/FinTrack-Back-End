const { createToken } = require('../../helpers/createToken');
const { Session } = require('../../models/sessionModel');
const { User } = require('../../models/userModel');
const { sendEmailService } = require('../../service/sendEmailService');

const codeVerification = async (req, res) => {
  const { code, email } = req.body;

  const user = await User.findOneAndUpdate(
    { email },
    { $set: { secureCode: null } }
  );
  await User.findByIdAndUpdate(user._id);

  if (user.secureCode !== code) {
    await sendEmailService(
      email,
      'Password Recovery',
      'You entered the wrong code or someone tried to reset your password. Please change your password to prevent your data from being stolen'
    );
    res.json({ status: 'failure', message: 'You entered an invalid code' });
  } else {
    const session = await Session.create({ uid: user._id });
    const token = await createToken(user._id, session._id);

    res.json({
      status: 'success',
      token,
      user: {
        email: user.email,
        balance: user.balance,
      },
    });
  }
};

module.exports = {
  codeVerification,
};
