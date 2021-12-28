const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../client');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));
server.listen(port, function() {
    console.log(`Server is up on port ${port}`);
});

io.on('connection', (socket) => {
	console.log('a user connected');
	io.emit('liczba', 123);
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

io.on('connection', (socket) => {
	socket.on('chat message', (msg) => {
		console.log('message: ' + msg);
	});
});
