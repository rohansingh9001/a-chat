var socket = require('socket.io');

var io = socket();

var users = [];

io.on('connection', function (socket) {
    console.log('Client connected');
    users.push(socket.id);

    socket.on('message', data => {
        console.log(data);
        console.log(users);
        io.to(users[0]).emit('message', data);
    });
    socket.on('disconnect', function () {
        users = users.filter(user => user !== socket.id);
        console.log('Client disconnected');
    });
});

module.exports = io;