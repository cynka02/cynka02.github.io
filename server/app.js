const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../client');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketIO(server);
var Points = 100;
app.use(express.static(publicPath));
server.listen(port);


io.on('connection', (socket) => {
	console.log('a user connected');
	io.emit('poletekst', Points);
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

io.on('connection', (socket) => {
	socket.on('point', (ile) => {
		Points += ile;
		io.emit('poletekst', Points);
	});
});
