var express = require('express');
var mongoose= require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


var app = express();


// mongoose.connect(mongodb://localhost/transtodo);

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'))
// for static files location /public/img
app.use(express.static(__dirname + '/public'));


// API REQUESTS
app.get("/", function(req, res){
  console.log("HIIII")
})
app.listen(8000,function(){
  console.log("its up")
});


module.exports = app;
