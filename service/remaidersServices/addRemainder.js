const httpError = require('../../helpers/httpError');
const Remainder = require('../../models/remainderModel');

const addRemainder = async body => {
  const remainder = new Remainder({ ...body });
  try {
    await remainder.save();
  } catch (error) {
    throw httpError(400, error.message);
  }
  return remainder;
};
module.exports = addRemainder;
