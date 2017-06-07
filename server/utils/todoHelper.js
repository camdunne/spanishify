var path = require('path');
var http = require('http');
var request = require('request');
var Todo = require('../models/todoModel.js');

module.exports = {
  getTodo: (req, res) => {
    Todo.find(function(err, todos) {
      if (err) { res.send(err); }
      res.json(todos);
    });
  },
  delete: (req, res) => {
    req.body.forEach( (elem) => {
      Todo.remove({_id: elem._id}, function(err, elem) {
        if (err) { throw err; }
        res.send(elem);
      });
    });
  },
  postTodo: (req, res) => {
    var options = {
      method: 'post',
      contentype: 'application/json',
      body: req.body,
      json: true,
      url: 'http://www.transltr.org/api/translate'
    };
    request(options, function (error, response, body) {
      if (error) {
        throw error;
      }
      var todo1 = new Todo({
        translationText: body.translationText,
        text: body.text,
        done: false
      });
      todo1.save();
      res.send(body);
    });
  }
};
