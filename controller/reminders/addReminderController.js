const { Reminder } = require('../../models/reminderModel');

const addReminderConroller = async (req, res) => {
  const { _id } = req.user;
  const result = await Reminder.create({ ...req.body, owner: _id });

  res.status(201).json(result);
};

module.exports = {
  addReminderConroller,
};
