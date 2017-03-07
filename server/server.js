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
app.get("/", function(req, res){
  console.log('HERE')
  res.sendFile(path.join(__dirname,'../client/index.html'))
})

app.post('/', function(req, res) {
  console.log(req)
  var options = {
    method: 'post',
    contentype: 'application/json',
    body: {
      from: "en",
      to: "es",
      text: "hi"
    },
    json: true,
    url: 'http://www.transltr.org/api/translate'
  }
  request(options, function (error, res, body) {
    if (error) {
      console.log("ERROR", error)
      throw error;
    }
    console.log("statuscode",res.statusCode)
    console.log("body", body)
  })
});


app.listen(8090,function(){
  console.log("Listening on port 8090")
});


module.exports = app;
