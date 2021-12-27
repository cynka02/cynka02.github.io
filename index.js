const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
	console.log('a user connected');
	const fs = require('fs')
	fs.readFile('cos.txt', (err, data) => {
		if (err) throw err;
		io.emit("poletekst", parseInt(data.toString()));
	});
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

server.listen(3000, () => {
	console.log('listening on *:3000');
});
io.on('connection', (socket) => {
	socket.on('chat message', (msg) => {
		console.log('message: ' + msg);
	});
});
io.on('connection', (socket) => {
	socket.on('point', (ile) => {
		const fs = require('fs')
		fs.readFile('cos.txt', (err, data) => {
			if (err) throw err;
			var point = parseInt(data.toString()) + ile;
			fs.writeFile('cos.txt', point.toString(), (err) => {if (err) throw err;});
			io.emit("poletekst", point);
		});
	});
});