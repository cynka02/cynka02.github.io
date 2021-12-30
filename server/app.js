const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../client');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketIO(server);
var Text = [];
app.use(express.static(publicPath));
server.listen(port);


io.on('connection', (socket) => {
	console.log('a user connected');
	io.emit('poletekst', "...");
	io.emit('chat', Text.join(""));
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

io.on('connection', (socket) => {
	socket.on('message', (co) => {
		Text.push(co);
		Text.push("<br />")
		if (Text.length > 14){
			Text.shift();
			Text.shift();
		}
		io.emit('poletekst', "...");
		io.emit('chat', Text.join(""));
	});
});
