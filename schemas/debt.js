const Joi = require('joi');

const debtSchema = Joi.object({
  date: Joi.date().required(),
  payments: Joi.number().required(),
  paymentDate: Joi.date().required(),
  sum: Joi.number().required(),
  paymentAmount: Joi.number().required(),
  type: Joi.string().required(),
});

module.exports = {
  debtSchema,
};
