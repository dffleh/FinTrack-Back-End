const { addRemaindersController } = require('./addRemaindersController');
const { getRemaindersController } = require('./getRemaindersController');
const { deleteRemaindersController } = require('./deleteRemaindersController');
const { getOneRemainderController } = require('./getOneRemainderController');
const { updateRemaindersController } = require('./updateRemaindersController');
const { sortRemindersController } = require('./sortRemaindersController');

module.exports = {
  addRemaindersController,
  deleteRemaindersController,
  getRemaindersController,
  getOneRemainderController,
  updateRemaindersController,
  sortRemindersController,
};
