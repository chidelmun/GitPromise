var express = require('express');
var app = express()

app.use(express.static(__dirname));

app.set('views', __dirname);

app.get('/', function(req, res) {
  console.log(__dirname);
  res.status(200);
  res.setHeader('Content-type', 'text/html');
  return res.sendFile(__dirname + '/page.html');
});




//listen on port 8080 for webserver:
var port = 8080;
app.listen(port);