const { deleteReminderController } = require('./deleteReminderController');
const { addReminderConroller } = require('./addReminderController');
const { getRemindersController } = require('./getRemindersController');
const { changeReminderController } = require('./changeReminderController');

module.exports = {
  deleteReminderController,
  addReminderConroller,
  changeReminderController,
  getRemindersController,
};
