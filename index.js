var express = require('express');
var app = express();
var http = require('http').createServer(app)
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket){
  console.log('Client connected');
  socket.on('disconnect', function(){
    console.log('Client disconnected');
  });
});

app.listen(process.env.PORT || 3000,  function() {
  console.log('Started listening on port 3000');
})
