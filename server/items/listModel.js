var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  text: String,
  done: Boolean
});

module.exports = mongoose.model('Todo', TodoSchema);
