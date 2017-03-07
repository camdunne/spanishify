var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  text: String,
  original: String,
  done: Boolean
});

module.exports = mongoose.model('Todo', {
  text: { type: String },
  original: { type: String },
  done: { type: Boolean }
});
