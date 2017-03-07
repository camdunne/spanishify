var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  text: { type: String },
  original: { type: String },
  done: { type: Boolean }
});

var Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo;
