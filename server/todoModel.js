var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  text: { type: String },
  original: { type: String },
  done: { type: Boolean }
});

module.exports = mongoose.model('todos', TodoSchema);
