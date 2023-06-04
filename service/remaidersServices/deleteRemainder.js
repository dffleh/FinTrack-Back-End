const Remainder = require('../../models/remainderModel');

const deleteRemainder = async id => {
  return await Remainder.findOneAndRemove({ _id: id });
};

module.exports = deleteRemainder;
