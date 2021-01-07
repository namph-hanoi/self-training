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

userSchema.virtual('password')
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hash_password = this.encryptPassword(password)
  })
  .get(function() {
    return this._password
  });

userSchema.methods = {
  encryptPassword: function(password) {
    if (!password) {
      return ''
    }
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex')
    } catch (err) {
      return ''
    }
  }
}

module.exports = mongoose.model('User', userSchema);