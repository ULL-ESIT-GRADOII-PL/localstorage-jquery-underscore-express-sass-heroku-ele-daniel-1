// Server to run in heroku
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  response.render('pages/index');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  console.log('localhost:3000 or 127.0.0.1:3000');
});
