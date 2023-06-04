const express = require('express');
const { tryCatchWrapper } = require('../helpers/tryCatchWrapper');

const {
  getRemaindersController,
  deleteRemaindersController,
  addRemaindersController,
  getOneRemainderController,
} = require('../controller/remainders');

const remaindersRoute = express.Router();

remaindersRoute.get('/', tryCatchWrapper(getRemaindersController));
remaindersRoute.get('/:id', tryCatchWrapper(getOneRemainderController));
remaindersRoute.delete('/:id', tryCatchWrapper(deleteRemaindersController));
remaindersRoute.post('/', tryCatchWrapper(addRemaindersController));

module.exports = remaindersRoute;
