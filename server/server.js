var express = require('express');
var mongoose= require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path')
var http = require('http')
var request = require('request')

var app = express();

// mongoose.connect(mongodb://localhost/transtodo);

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'))
// for static files location /public/img


app.use(express.static(path.join(__dirname, '../client')));


// API REQUESTS
app.post('/todo', function(req, res) {
  console.log(req.body)
  var options = {
    method: 'post',
    contentype: 'application/json',
    body: req.body,
    json: true,
    url: 'http://www.transltr.org/api/translate'
  }
  request(options, function (error, response, body) {
    if (error) {
      console.log("ERROR", error)
      throw error;
    }
    console.log("statuscode",response.statusCode)
    console.log("body", body)
    res.send(body)
  })

});


app.listen(8090,function(){
  console.log("Listening on port 8090")
});


module.exports = app;
