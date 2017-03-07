

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
var todoModel = require('./todoModel.js')

console.log(mlabUser)
mongoose.connect("mongodb://"+mlabUser+"@ds055515.mlab.com:55515/transtodo");

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'))


app.use(express.static(path.join(__dirname, '../client')));
//mongoose model

// fs.readirSync(__dirname+ '/todoModel').fprEach(function)


// API REQUESTS
app.post('/todo', function(req, res) {
  console.log("req.body", req.body)

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
    console.log("statuscode",response.statusCode)
    console.log("body", body)
    res.send(body)
  })

});


app.listen(8000,function(){
  console.log("Listening on port 8000")
});


module.exports = app;
