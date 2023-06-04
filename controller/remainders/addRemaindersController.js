const addRemainder = require('../../service/remaidersServices/addRemainder');

const addRemaindersController = async (req, res, next) => {
  const newRemainder = await addRemainder(req.body);
  res.status(201).json(newRemainder);
};
module.exports = { addRemaindersController };
