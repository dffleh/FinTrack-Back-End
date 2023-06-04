const mongoose = require('mongoose');

const remainderSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, 'Set name for category'],
    },
    deskription: {
      type: String,
    },
    phone: {
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
      type: String,
      required: true,
    },
    regularPayment: {
      type: Boolean,
      default: false,
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

const Remainder = mongoose.model('Remainder', remainderSchema);

module.exports = Remainder;

// const saved = await Remainder.create({
//   category: 'jhvgj21g',
//   deskription: 'b21jhkhkhb',
//   phone: '211212',
//   amount: false,
//   sum: '12233',
//   dateOfPayment: '22.03.02',
//   regularPayment: false,
// });
// const remainder = await Remainder.find();
// console.log(remainder);
