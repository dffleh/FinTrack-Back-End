const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    payments: {
      type: Number,
      required: true,
    },
    paymentDate: { type: Date, required: true },
    paymentAmount: { type: Number, required: true },
    sum: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ['to lend', 'to borrow'],
      required: true,
    },
    owner: {
      type: mongoose.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Reminder = mongoose.model('reminder', schema);

module.exports = { Reminder };
