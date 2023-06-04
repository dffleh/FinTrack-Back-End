const { addRemaindersController } = require('./addRemaindersController');
const { getRemaindersController } = require('./getRemaindersController');
const { deleteRemaindersController } = require('./deleteRemaindersController');
const { getOneRemainderController } = require('./getOneRemainderController');

module.exports = {
  addRemaindersController,
  deleteRemaindersController,
  getRemaindersController,
  getOneRemainderController,
};
