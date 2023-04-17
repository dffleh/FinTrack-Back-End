const { Reminder } = require('../../models/reminderModel');

const getRemindersController = async (req, res) => {
  const { _id } = req.user;
  const reminders = await Reminder.find({ owner: _id }).sort({ date: 1 });
  const data = reminders.slice(0, 3);
  res.json(data);
};

module.exports = {
  getRemindersController,
};
