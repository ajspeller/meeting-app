const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String },
  password: { type: String },
});

Schema.pre('save', function (next) {
  // capitalize username
  this.username.charAt(0).toLocalUpperCase() + this.username.slice(1);
  next();
});

module.exports = mongoose.model('User', UserSchema, 'users');
