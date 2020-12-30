const mongoose = require("mongoose");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32,
    unique: true,
    index: true,
    lowercase: true
  },
  name: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
  },
  profile: {
    type: String,
    required: true
  },
  hash_password: {
    type: String,
    required: true
  },
  salt: {
    type: Number,
  },
  about: {
    type: String
  },
  role: {
    type: Number,
    trim: true
  },
  photo: {
    data: Buffer,
    contenType: String,
  },
  resetPasswordLink: {
    data: String,
    default: ""
  }
}, { timestamp: true });

module.exports = mongoose.model('User', userSchema);