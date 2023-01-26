const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketIO(server);
app.use(express.static(publicPath));
server.listen(port);

var lista = {};


io.on('connection', (socket) => {
	io.emit('poletekst', "...");
	socket.on('disconnect', () => {
		delete lista[socket.id];
	});
	
	socket.on('explayer', (Player) => {
		io.emit('enternick', 1);
	});
	
	socket.on('newplayer', (Player) => {
		var test = 1;
		if (Object.keys(lista).length > 0){
			for (key in lista){
				if (lista[key][0] == Player.nick){
					io.emit('enternick', 0);
					test = 0;
				}
			}
		}
		if (test == 1){
			io.emit('enternick', 1);
		}
	});
	socket.on('LogPlayer', (Player) => {
		var letters = "eatndosirhlcyufgwbmpvkjzqxEATNDOSIRHLCYUFGWBMPVKJZQX"
		var unlocked = []
		for (key in Player.Letters){
			if (Player.Letters[key][0] == true){
				unlocked.push(key);
			}
			if (Player.Letters[key][1] == true){
				unlocked.push(key.toUpperCase());
			}
		}
		var d = {};
		for (let i=0; i< unlocked.length; i++){
			d[unlocked[i]] = letters.indexOf(unlocked[i]);
		}
		var max = Math.max.apply(null, Object.values(d)),
			val = Object.keys(d).find(function(a) {
				return d[a] === max;
		});
		var letter = Object.keys(d).find(key => d[key] === max);
		lista[socket.id] = [Player.nick, Player.Score, letter];
	});
});
