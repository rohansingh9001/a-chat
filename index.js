var express = require('express');
var http = require('http');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/a-chat', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
mongoose.connection.on('error', () => {
	throw new Error(`unable to connect to database: ${mongoUri}`);
});

var io = require('./server/socket');

var app = express();

var server = http.createServer(app);

server.listen(process.env.PORT || 3000, function () {
	console.log('Started listening on port 3000');
});

io.attach(server);
