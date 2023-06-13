const express = require('express');
const { tryCatchWrapper } = require('../helpers/tryCatchWrapper');

const {
  getRemaindersController,
  deleteRemaindersController,
  addRemaindersController,
  getOneRemainderController,
  updateRemaindersController,
  sortRemindersController,
} = require('../controller/remainders');

const remaindersRoute = express.Router();

remaindersRoute.get('/', tryCatchWrapper(getRemaindersController));
remaindersRoute.get('/:id', tryCatchWrapper(getOneRemainderController));
remaindersRoute.get('/sort', tryCatchWrapper(sortRemindersController));

remaindersRoute.delete('/:id', tryCatchWrapper(deleteRemaindersController));
remaindersRoute.post('/', tryCatchWrapper(addRemaindersController));
remaindersRoute.put('/:id', tryCatchWrapper(updateRemaindersController));

module.exports = remaindersRoute;
