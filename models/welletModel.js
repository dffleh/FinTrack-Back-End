const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    name: { type: String, default: 'Wallet' },
    balance: { type: Number, default: 0 },
    icon: { type: String },
  },
  {
    versionKey: false,
  }
);

const Wallet = mongoose.model('wallet', schema);

module.exports = { Wallet };
