const { isValidObjectId } = require('mongoose');
const { Reminder } = require('../../models/reminderModel');
const { BadRequest } = require('http-errors');

const deleteReminderController = async (req, res) => {
  const { _id } = req.user;
  const { reminderId } = req.params;

  if (!isValidObjectId(reminderId))
    throw BadRequest(
      'Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer'
    );
  const reminder = await Reminder.findById(reminderId);
  if (!reminder) throw BadRequest('Bad Request!!!');

  await Reminder.findOneAndRemove({ _id: reminderId, owner: _id });

  res.json({ message: 'reminder is deleted!' });
};

module.exports = {
  deleteReminderController,
};
