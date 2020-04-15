var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('./server/socket/');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})


io(server)

server.listen(process.env.PORT || 3000,  function() {
  console.log('Started listening on port 3000');
})
