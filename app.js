// Server to run in heroku
var express = require('express');
var app = express();

var _ = require("underscore");

app.locals._ = _;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port '+ app.get('port'));
});
