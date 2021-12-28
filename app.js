const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const path = require('path');
const Victor = require('victor');
const publicPath = path.join(__dirname, 'moje');
const port = process.env.PORT || 3000;
const socketIO = require('socket.io');
const io = socketIO(server);
app.use(express.static(publicPath));
server.listen(port, function() {
    console.log(`Server is up on port ${port}`);
});


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
