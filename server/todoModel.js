var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  translationText: { type: String },
  text: { type: String },
  done: { type: Boolean }
});

var Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo;
