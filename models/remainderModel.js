const mongoose = require('mongoose');

const remainderSchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, 'Set name for category'],
    },
    deskription: {
      type: String,
    },

    amount: {
      type: Boolean,
      default: false,
    },
    sum: {
      type: String,
      required: [true, 'Set sum'],
    },
    dateOfPayment: {
      type: Date,
      required: [true, 'Set date of payment'],
    },
    regularPayment: {
      type: Boolean,
      default: false,
    },
    // owner: {
    //   type: mongoose.ObjectId,
    //   ref: 'user',
    //   required: true,
    // },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Remainder = mongoose.model('Remainder', remainderSchema);

module.exports = { Remainder };
