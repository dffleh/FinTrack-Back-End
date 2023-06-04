const { User } = require('../../models/userModel');
const { NotFound } = require('http-errors');

const changeSettings = async (req, res, next) => {
  const { _id } = req.user;
  const data = await User.findByIdAndUpdate(_id, req.body, { new: true });
  if (!data) next(NotFound('User not found!'));

  res.json(data.settings);
};

module.exports = {
  changeSettings,
};
