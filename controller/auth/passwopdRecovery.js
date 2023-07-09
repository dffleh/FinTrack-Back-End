const bcrypt = require('bcrypt');
const { User } = require('../../models/userModel');

const passwordRecovery = async (req, res) => {
  const { password } = req.body;
  const { _id } = req.user;

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  await User.findByIdAndUpdate(_id, {
    $set: { password: hashedPassword },
  });

  res.json({ message: 'Password is recovered' });
};

module.exports = {
  passwordRecovery,
};
