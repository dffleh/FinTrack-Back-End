const { User } = require('../../models/userModel');
const { Unauthorized } = require('http-errors');

const { sendEmailService } = require('../../service/sendEmailService');

const sendRecoveryCode = async (req, res) => {
  const { email } = req.body;
  const secureCode = Math.round(Math.random() * 1000000);

  const user = await User.findOneAndUpdate(
    { email },
    { $set: { secureCode, isPasswordRecovery: true } }
  );
  if (!user) throw Unauthorized('User not found!');

  await sendEmailService(
    email,
    'Password Recovery Code',
    `Your secure code for password recovery: ${secureCode}.
    Do not share this code with third parties`
  );
  res.json({
    message: 'Password recovery email sent',
  });
};

module.exports = { sendRecoveryCode };
