require('dotenv').config()

var express = require('express');
var mongoose= require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path')
var http = require('http')
var request = require('request')

var app = express();

var mlabUser = process.env.MLAB_USER;
var Todo = require('./todoModel.js')


mongoose.connect("mongodb://"+mlabUser+"@ds055515.mlab.com:55515/transtodo");

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'))

app.use(express.static(path.join(__dirname, '../client')));

// API REQUESTS

app.get('/todo', function(req, res) {
  Todo.find(function(err, todos) {
    if(err) res.send(err);
    res.json(todos)
  })
})

app.post('/todo', function(req, res) {
    var options = {
    method: 'post',
    contentype: 'application/json',
    body: req.body,
    json: true,
    url: 'http://www.transltr.org/api/translate'
  }
  request(options, function (error, response, body) {
    if (error) {
      throw error;
    }
    var todo1 = new Todo({
      translationText: body.translationText,
      text: body.text,
      done: false
    })
    todo1.save();
    console.log("statuscode",response.statusCode)
    console.log("body", body)
    res.send(body)
  })

});
var port = process.env.PORT;

app.listen(port, function(){
  console.log("Listening on port", port)
});


module.exports = app;
