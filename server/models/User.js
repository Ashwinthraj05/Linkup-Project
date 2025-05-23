const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {
    type: String,
    default: '',
  },
  skills: {
    type: [String],
    default: [],
  },
  avatar: {
    type: String,
    default: '', // can store image URL later
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
