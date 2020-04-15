var socket = require('socket.io');

var io = socket();

io.on('connection', function (socket) {
    console.log('Client connected');
    socket.on('disconnect', function () {
        console.log('Client disconnected');
    });
});

module.exports = io;