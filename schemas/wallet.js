const Joi = require('joi');

const walletSchema = Joi.object({
  name: Joi.string().required(),
  icon: Joi.string().required(),
});

module.exports = {
  walletSchema,
};
