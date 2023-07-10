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

  if (user.secureCode !== code) {
    await sendEmailService(
      email,
      'FinTrack Password Reset Code Verification',
      `Dear [Customer"s Name],

We recently received a request to reset the password for your FinTrack account. Your security is our top priority, and we want to ensure that your personal information remains protected.

However, it appears that the verification code you entered does not match the code we generated. Please note that the verification code is valid for a limited time to ensure the highest level of security.

If you still need to reset your password, please request a new verification code within the FinTrack application and ensure that you enter it correctly. Remember that the verification code is case-sensitive.

If you did not request a password reset, please ignore this email or contact our support team immediately at [support email/phone number] to report any unauthorized activity.

At FinTrack, we are committed to maintaining the utmost security and privacy of your financial data. We apologize for any inconvenience this may have caused and appreciate your understanding as we take these additional measures to protect your account.

If you have any questions or need further assistance, please don't hesitate to reach out to our support team. We are here to help you.

Thank you for choosing FinTrack for managing your financial activities.

Best regards,
Administrator
Kyiv, Ukraine
FinTrack Team`
    );
    res
      .status(400)
      .json({ status: 'failure', message: 'You entered an invalid code' });
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
