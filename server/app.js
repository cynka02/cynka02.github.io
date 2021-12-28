const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../client');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketIO(server);

const aws = require('aws-sdk');

var s3 = new aws.S3({
  accessKeyId: process.env.cos
});

app.use(express.static(publicPath));
server.listen(port, function() {
    console.log(`Server is up on port ${port}`);
});

io.on('connection', (socket) => {
	console.log('a user connected');
	io.emit('liczba', s3);
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

io.on('connection', (socket) => {
	socket.on('chat message', (msg) => {
		console.log('message: ' + msg);
	});
});
