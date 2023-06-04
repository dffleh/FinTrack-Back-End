const express = require('express');
const tryCatchWrapper = require('../helpers/tryCatchWrapper');
const {
  addRemaindersController,
} = require('../controller/remainders/addRemaindersController');
const Remainder = require('../models/remainderModel');
const remaindersRoute = express.Router();

remaindersRoute.get('/:id', (req, res) => {
  // const { _id } = req.params;
  // const remainder = Remainder.findById(_id);
  // res.status(200).json(remainder);
});

remaindersRoute.post('/', (req, res) => {});
remaindersRoute.delete('/:id', (req, res) => {
  // const { id } = req.params;
  // const remainder = remainders.find(r => r.id == id);
  res.status(201).json(remainder);
});

module.exports = remaindersRoute;
