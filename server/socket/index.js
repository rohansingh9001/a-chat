var io = require('socket.io')();

module.exports = io => {
    io.on('connection', function(socket) {
        console.log('Client connected');
        socket.on('disconnect', function() {
            console.log('Client disconnected');
        });
    });
}