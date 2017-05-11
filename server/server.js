require('dotenv').config();
var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect(process.env.MLAB_URL);

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var port = process.env.PORT || 8000;

app.listen(port, function() {
  console.log('Listening on port', port);
});


module.exports = app;
