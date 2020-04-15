var express = require('express');
var http = require('http');
var io = require('./server/socket');

var app = express();
var server = http.createServer(app);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

server.listen(process.env.PORT || 3000,  function() {
  console.log('Started listening on port 3000');
});

io.attach(server);
