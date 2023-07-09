const mongoose = require('mongoose');

const { balanceSchema } = require('../schemas/user');

const schema = mongoose.Schema(
  {
    password: {
      type: String,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      match: [/[a-z0-9]+@[a-z0-9]+/, 'user email is not valid!'],
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      default: null,
    },
    balance: {
      type: Number,
      default: 0,
    },
    secureCode: {
      type: Number,
      default: null,
    },
    isPasswordRecovery: {
      type: Boolean,
      default: false,
    },
    settings: {
      language: {
        type: String,
        default: null,
      },
      currency: {
        type: String,
        default: null,
      },
      pushNotification: {
        type: Boolean,
        default: true,
      },
      emailNotification: {
        type: Boolean,
        default: true,
      },
      sound: {
        type: Boolean,
        default: false,
      },
      vibrate: {
        type: Boolean,
        default: false,
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model('user', schema);

const schemas = { balanceSchema };

module.exports = { User, schemas };
