const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    name: { type: String, default: 'Wallet' },
    balance: { type: Number, default: 0 },
    icon: { type: String },
    owner: {
      type: mongoose.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Wallet = mongoose.model('wallet', schema);

module.exports = { Wallet };
