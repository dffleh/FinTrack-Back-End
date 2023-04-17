const express = require('express');

const { tryCatchWrapper } = require('../helpers/tryCatchWrapper');
const { authorize } = require('../middlewares/authorize');
const {
  addReminderConroller,
  getRemindersController,
  deleteReminderController,
  changeReminderController,
} = require('../controller/reminders');
const { validateBody } = require('../middlewares/validateBody');
const { reminderSchema } = require('../schemas/reminder');

const remindersRouter = express.Router();

remindersRouter.use(authorize());

remindersRouter.post(
  '/',
  validateBody(reminderSchema),
  tryCatchWrapper(addReminderConroller)
);

remindersRouter.get('/', tryCatchWrapper(getRemindersController));

remindersRouter.put(
  '/:reminderId',
  validateBody(reminderSchema),
  tryCatchWrapper(changeReminderController)
);

remindersRouter.delete(
  '/:reminderId',
  tryCatchWrapper(deleteReminderController)
);

module.exports = remindersRouter;
