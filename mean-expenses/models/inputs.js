var mongoose = require('mongoose');

module.exports = mongoose.model('Input', {
  description: String,
  value: Number,
  created: {
    type: Date,
    default: Date.now
  },
  pay: Boolean,
  expiration: Date,
  type: {
    type: String,
    enum: ['D', 'R']
  }
});
