const express = require('express');

const { tryCatchWrapper } = require('../helpers/tryCatchWrapper');
const { authorize } = require('../middlewares/authorize');
const {
  getCategoryContoller,
} = require('../controller/category/getCategoryController');

const categoryRouter = express.Router();
categoryRouter.use(authorize());

categoryRouter.get('/:operation', tryCatchWrapper(getCategoryContoller));

module.exports = categoryRouter;
