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
server.listen(port);


io.on('connection', (socket) => {
	console.log('a user connected');
	io.emit('poletekst', "...");
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
	
	socket.on('LogPlayer', (PlayerData) => {
			console.log("a");
	});
});
