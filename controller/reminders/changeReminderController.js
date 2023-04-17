const { isValidObjectId } = require('mongoose');
const { Reminder } = require('../../models/reminderModel');
const { BadRequest } = require('http-errors');

const changeReminderController = async (req, res) => {
  const { _id } = req.user;
  const { reminderId } = req.params;
  if (!isValidObjectId(reminderId))
    throw BadRequest(
      'Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer'
    );
  const reminder = await Reminder.findById(reminderId);
  if (!reminder) throw BadRequest('Bad Request!!!');

  const data = await Reminder.findOneAndUpdate(
    { _id: reminderId, owner: _id },
    { $set: { ...req.body } },
    { new: true }
  );

  res.json(data);
};

module.exports = {
  changeReminderController,
};
