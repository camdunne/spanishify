var express = require('express');
var mongoose= require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path')


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
app.listen(8090,function(){
  console.log("its up")
});


module.exports = app;
