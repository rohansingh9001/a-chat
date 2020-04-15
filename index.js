var express = require('express');
var app = express();
var server = require('http').Server(app)
var io = require('socket.io').listen(server);


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket){
  console.log('Client connected');
  socket.on('disconnect', function(){
    console.log('Client disconnected');
  });
});

server.listen(process.env.PORT || 3000,  function() {
  console.log('Started listening on port 3000');
})
