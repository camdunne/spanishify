var express = require('');
var mongoose= require('mongoose');

var app = express();


mongoose.connect(mongodb://localhost/stencil-dev);

//for static files location /public/img
app.use(express.static(__dirname + '/public'));

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// http://localhost:8000
app.listen(8000);

module.exports = app;
