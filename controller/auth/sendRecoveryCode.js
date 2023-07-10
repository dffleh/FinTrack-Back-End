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
    'Password Reset for Your FinTrack Account',
    `Dear [Customer's Name].

We have received a request to reset the password for your FinTrack account. Your security is our top priority, and we want to ensure that your personal information remains protected.

To proceed with the password reset, please use the following 6-digit verification code:

Verification Code: ${secureCode}

Please enter this code within the FinTrack application to reset your password. If you haven't requested a password reset, please ignore this email or contact our support team immediately at [support email/phone number].

At FinTrack, we are committed to maintaining the utmost security and privacy of your financial data. We adhere to strict industry standards to protect your information and provide you with a secure experience.

If you have any questions or need further assistance, please don't hesitate to reach out to our support team. We are here to help you.

Thank you for choosing FinTrack for managing your financial activities. We wish you a fantastic day ahead!

Best regards,
Administrator
Kyiv, Ukraine
FinTrack Team`
  );
  res.json({
    message: 'Password recovery email sent',
  });
};

module.exports = { sendRecoveryCode };
