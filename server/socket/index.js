var socket = require('socket.io');
var Chat = require('../models/chat');

var io = socket();

var users = [];

io.on('connection', function (socket) {
	console.log('Client connected');
	users.push(socket.id);

	socket.on('message', (data) => {
		io.emit('message', data);
		Chat.create(
			{
				userName: data.member.id,
				msg: data.message
			},
			(err, doc) => {
				if (err) return console.error(err);
				console.log(doc);
			}
		);
	});
	socket.on('disconnect', function () {
		users = users.filter((user) => user !== socket.id);
		console.log('Client disconnected');
	});
});

module.exports = io;
