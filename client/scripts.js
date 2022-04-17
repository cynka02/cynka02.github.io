var socket = io();
var inputfield = [];
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-=[];',./";
var charactersspecial = "!@#$%^&*()_+{}:" + '"|<>?';
var characterscodes = ["Backspace", "CapsLock", "Space", "ShiftLeft", "ShiftRight", "Backslash"];
var commands = ["sound mute", "sound unmute", "save", "help", "sound-", "sound--", "sound---", "sound+", "sound++", "sound+++"]
var Caps = 0;
var Caps2 = 0;
var Shift = 0;
var AlertType = "";
var g;
var c;
var ssave;
var hsave;
var menuclicked = 0;
var ActiveLetter = "";
var ActiveLetterCount = 0;
var ActiveLetterMax = 0;
var ActiveLetterSpeed = 0;
var ActiveLetterCap = 0;
var Collections = [20, 40, 90, 175, 300, 500, 0]
var ColBonus = ["Speed x1.3", "Score x2", "-2 storage cost", "Speed x1.2", "-3 storage cost", "+1 mined letter", ""]
var Player = {
	nick: "",
	tut: 0,
	Secrets: [false, false, false],
	volume: 0.6,
	volume2: 0.6,
	Score: 0,
	Letters: {
		a: [false, false, 0, 0, 5, 3, 0.234, 0.1404, "ee", 0, 1, "xE", 0, 4, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 2, 12],
		b: [false, false, 0, 0, 5, 3, 0.043, 0.0258, "wge", 0, 6, "WGE", 0, 6, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 5, 15],
		c: [false, false, 0, 0, 5, 3, 0.08, 0.048, "iln", 0, 6, "ILN", 0, 6, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 5, 15],
		d: [false, false, 0, 0, 5, 3, 0.123, 0.0738, "net", 0, 4, "AE", 0, 5, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 3, 13],
		e: [true, false, 0, 0, 5, 3, 0.363, 0.2178, "", 0, 0, "zqx", 0, 3, "ae", 0, "", 0, 0, 0, 20, 20, "Overall speed x1.02", "Speed x1.3", 0, 0, 0, 0, 1, 10],
		f: [false, false, 0, 0, 5, 3, 0.063, 0.0378, "uon", 0, 7, "UON", 0, 7, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 5, 15],
		g: [false, false, 0, 0, 5, 3, 0.057, 0.0342, "lsy", 0, 7, "LSY", 0, 7, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 5, 15],
		h: [false, false, 0, 0, 5, 3, 0.174, 0.1044, "re", 0, 4, "RE", 0, 4, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 2, 12],
		i: [false, false, 0, 0, 5, 3, 0.2, 0.12, "sn", 0, 5, "SN", 0, 5, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 2, 12],
		j: [false, false, 0, 0, 5, 3, 0.006, 0.0036, "kgd", 0, 8, "KGD", 0, 8, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 8, 18],
		k: [false, false, 0, 0, 5, 3, 0.023, 0.0138, "eve", 0, 8, "EVE", 0, 8, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 8, 18],
		l: [false, false, 0, 0, 5, 3, 0.114, 0.0684, "rhe", 0, 5, "RHE", 0, 5, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 3, 13],
		m: [false, false, 0, 0, 5, 3, 0.069, 0.0414, "frg", 0, 6, "FRG", 0, 6, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 5, 15],
		n: [false, false, 0, 0, 5, 3, 0.191, 0.1146, "at", 0, 5, "AT", 0, 5, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 2, 12],
		o: [false, false, 0, 0, 5, 3, 0.214, 0.1284, "dt", 0, 4, "DT", 0, 4, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 2, 12],
		p: [false, false, 0, 0, 5, 3, 0.054, 0.0324, "wno", 0, 7, "WNO", 0, 7, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 5, 15],
		q: [false, false, 0, 0, 5, 3, 0.003, 0.0018, "blz", 0, 8, "BLZ", 0, 8, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 10, 10],
		r: [false, false, 0, 0, 5, 3, 0.171, 0.1026, "oe", 0, 4, "OE", 0, 4, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 2, 12],
		s: [false, false, 0, 0, 5, 3, 0.18, 0.108, "no", 0, 5, "NO", 0, 5, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 2, 12],
		t: [false, false, 0, 0, 5, 3, 0.26, 0.156, "ea", 0, 4, "EA", 0, 4, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 2, 12],
		u: [false, false, 0, 0, 5, 3, 0.08, 0.048, "cad", 0, 6, "CAD", 0, 6, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 5, 15],
		v: [false, false, 0, 0, 5, 3, 0.029, 0.0174, "hcp", 0, 8, "HCP", 0, 8, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 8, 18],
		w: [false, false, 0, 0, 5, 3, 0.066, 0.0396, "sul", 0, 7, "SUL", 0, 7, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 5, 15],
		x: [false, false, 0, 0, 5, 3, 0.003, 0.0018, "jkmq", 0, 8, "JKMQ", 0, 8, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 10, 20],
		y: [false, false, 0, 0, 5, 3, 0.057, 0.0342, "ecr", 0, 7, "ECR", 0, 7, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 5, 15],
		z: [false, false, 0, 0, 5, 3, 0.003, 0.0018, "yvj", 0, 8, "YVJ", 0, 8, "", 0, "", 0, 0, 0, 20, 20, "Speed x1.3", "Speed x1.3", 0, 0, 0, 0, 10, 20]
	},
	Groups: {
		ahinorst: [80, 2500, 1200, 500, 200, 80,  0],
		dl: [20, 400, 200, 100, 45, 20, 0],
		bcfgmpuwy: [60, 1200, 650, 300, 125, 60, 0],
		jkqvxz: [30, 700, 300, 175, 80, 30, 0]
	},
	Grand: {
		main: [420, "not", "leap", "orteil", "Nickname of the Cookie Clicker creator<br>&nbsp;", 0, 0, 0, 0],
		easyused: [],
		easy: ["the", "north", "hand", "let", "ease", "head", "old", "this", "three", "add", "she", "one", "that"],
		hardused: [],
		hard: ["name", "very", "through", "just", "sentence", "great", "think", "house", "keep", "animal", "could", "number", "water"],
		mysteryused: [],
		mystery: ["progress quest", "hello there", "orteil", "dripstat", "merge", "idle"],
		mysterydsc: ["Name of the first idle game<br>&nbsp;", "Hidden words in store .<br>&nbsp;", "Nickname of the Cookie Clicker creator<br>&nbsp;", "Idle game about dripping something...<br>&nbsp;", "<u>Action</u> when two things are connecting into one better", "General type of Cookie Clicker (RPG, RTS, etc.)"],
		bonusese: ["<b>Score x1.3</b> for all letters from group <b><i>ahinorst</i></b>", "<b>Score x1.4</b> for all letters from group <b><i>ahinorst</i></b>", "<b>Score x1.5</b> for all letters from group <b><i>ahinorst</i></b>", "<b>Score x1.6</b> for all letters from group <b><i>ahinorst</i></b>", "<b>Score x1.3</b> for all letters from group <b><i>dl</i></b> and group <b><i>jkqvxz</i></b>", "<b>Score x1.4</b> for all letters from group <b><i>dl</i></b> and group <b><i>jkqvxz</i></b>", "<b>Score x1.5</b> for all letters from group <b><i>dl</i></b> and group <b><i>jkqvxz</i></b>", "<b>Score x1.3</b> for all letters from group <b><i>bcfgmpuwy</i></b>", "<b>Score x1.4</b> for all letters from group <b><i>bcfgmpuwy</i></b>", "<b>Score x1.5</b> for all letters from group <b><i>bcfgmpuwy</i></b>"],
		bonusesh: ["<b>Speed x1.2</b> for all letters from group <b><i>ahinorst</i></b>", "<b>Speed x1.3</b> for all letters from group <b><i>ahinorst</i></b>", "<b>Speed x1.4</b> for all letters from group <b><i>ahinorst</i></b>", "<b>Speed x1.2</b> for all letters from group <b><i>dl</i></b> and group <b><i>jkqvxz</i></b>", "<b>Speed x1.3</b> for all letters from group <b><i>dl</i></b> and group <b><i>jkqvxz</i></b>", "<b>Speed x1.2</b> for all letters from group <b><i>bcfgmpuwy</i></b>", "<b>Speed x1.3</b> for all letters from group <b><i>bcfgmpuwy</i></b>"],
		bonusesm: ["<b>Overall speed x1.05</b> and instant <b>+500 score</b>", "<b>Overall speed x1.1</b> and instant <b>+400 score</b>", "<b>Overall speed x1.15</b> and instant <b>+400 score</b>", "<b>Overall speed x1.2</b> and instant <b>+300 score</b>"],
		activebonus: [],
		nextbonus: ["<b>Score x1.4</b> for all letters from group <b><i>ahinorst</i></b>", "<b>Speed x1.2</b> for all letters from group <b><i>bcfgmpuwy</i></b>", "<b>Overall speed x1.1</b> and instant <b>+400 score</b>"]
	}
};

function info(){
	document.getElementById("menu1").style.transform = "translateY(15%)";
	document.getElementById("menu1").getElementsByTagName("img")[0].style.transform = "";
	document.getElementById("menu1").getElementsByTagName("span")[0].style.transform = "";
	document.getElementById("menu2").style.transform = "translateY(15%)";
	document.getElementById("menu2").getElementsByTagName("img")[0].style.transform = "";
	document.getElementById("menu2").getElementsByTagName("span")[0].style.transform = "";
	document.getElementById("menu3").style.transform = "translateY(15%)";
	document.getElementById("menu3").getElementsByTagName("img")[0].style.transform = "";
	if (Player.Letters["l"][0] == false){
		document.getElementById("menu3").getElementsByTagName("span")[0].style.transform = "translateY(-16px)";
	}
	else{
		document.getElementById("menu3").getElementsByTagName("span")[0].style.transform = "translateY(0px)";
	}
	document.getElementById("menu4").style.transform = "translateY(15%)";
	if (Player.Letters["v"][0] == false){
		document.getElementById("menu4").getElementsByTagName("span")[0].style.transform = "translateY(-16px)";
	}
	else{
		document.getElementById("menu4").getElementsByTagName("span")[0].style.transform = "translateY(0px)";
	}
	document.getElementById("menu4").getElementsByTagName("img")[0].style.transform = "";
	document.getElementById("menu5").style.transform = "translateY(15%)";
	document.getElementById("menu5").getElementsByTagName("img")[0].style.transform = "";
	if (Player.Letters["g"][0] == false){
		document.getElementById("menu5").getElementsByTagName("span")[0].style.transform = "translateY(-16px)";
	}
	else{
		document.getElementById("menu5").getElementsByTagName("span")[0].style.transform = "translateY(0px)";
	}
	menuclicked = 0;
	document.getElementById("info").style.display = "block";
	document.getElementById("keyboard").style.display = "none";
	document.getElementById("pole").style.display = "none";
	document.getElementById("store").style.display = "none";
	document.getElementById("features").style.display = "none";
	document.getElementById("grandmamain").style.display = "none";
	document.getElementById("grandinfo").style.display = "none";
	document.getElementById("upgrade").style.display = "none";
	document.getElementById("online").style.display = "none";
}
document.getElementById("menu1").onmouseover = function(){
	if (menuclicked != 1){
		document.getElementById("menu1").style.transform = "translateY(8%)";
	}
}
document.getElementById("menu1").onmouseout = function(){
	if (menuclicked != 1){
		document.getElementById("menu1").style.transform = "translateY(15%)";
	}
}
document.getElementById("menu2").onmouseover = function(){
	if (menuclicked != 2){
		document.getElementById("menu2").style.transform = "translateY(8%)";
	}
}
document.getElementById("menu2").onmouseout = function(){
	if (menuclicked != 2){
		document.getElementById("menu2").style.transform = "translateY(15%)";
	}
}
document.getElementById("menu3").onmouseover = function(){
	if (menuclicked != 3 && Player.Letters["l"][0] == false){
		document.getElementById("menu3").getElementsByTagName("span")[0].style.transform = "translateY(-10px)";
		document.getElementById("menu3").style.transform = "translateY(8%)";
	}
	else if (menuclicked != 3){
		document.getElementById("menu3").getElementsByTagName("span")[0].style.transform = "translateY(-10px)";
		document.getElementById("menu3").style.transform = "translateY(8%)";
	}
}
document.getElementById("menu3").onmouseout = function(){
	if (menuclicked != 3 && Player.Letters["l"][0] == false){
		document.getElementById("menu3").getElementsByTagName("span")[0].style.transform = "translateY(-16px)";
		document.getElementById("menu3").style.transform = "translateY(15%)";
	}
	else if (menuclicked != 3){
		document.getElementById("menu3").getElementsByTagName("span")[0].style.transform = "translateY(0px)";
		document.getElementById("menu3").style.transform = "translateY(15%)";
	}
}
document.getElementById("menu4").onmouseover = function(){
	if (menuclicked != 4 && Player.Letters["v"][0] == false){
		document.getElementById("menu4").getElementsByTagName("span")[0].style.transform = "translateY(-10px)";
		document.getElementById("menu4").style.transform = "translateY(8%)";
	}
	else if (menuclicked != 4){
		document.getElementById("menu4").getElementsByTagName("span")[0].style.transform = "translateY(0px)";
		document.getElementById("menu4").style.transform = "translateY(8%)";
	}
}
document.getElementById("menu4").onmouseout = function(){
	if (menuclicked != 4 && Player.Letters["v"][0] == false){
		document.getElementById("menu4").getElementsByTagName("span")[0].style.transform = "translateY(-16px)";
		document.getElementById("menu4").style.transform = "translateY(15%)";
	}
	else if (menuclicked != 4){
		document.getElementById("menu4").getElementsByTagName("span")[0].style.transform = "translateY(0px)";
		document.getElementById("menu4").style.transform = "translateY(15%)";
	}
}
document.getElementById("menu5").onmouseover = function(){
	if (menuclicked != 5 && Player.Letters["g"][0] == false){
		document.getElementById("menu5").getElementsByTagName("span")[0].style.transform = "translateY(-10px)";
		document.getElementById("menu5").style.transform = "translateY(8%)";
	}
	else if (menuclicked != 5){
		document.getElementById("menu5").getElementsByTagName("span")[0].style.transform = "translateY(0px)";
		document.getElementById("menu5").style.transform = "translateY(8%)";
	}
}
document.getElementById("menu5").onmouseout = function(){
	if (menuclicked != 5 && Player.Letters["g"][0] == false){
		document.getElementById("menu5").getElementsByTagName("span")[0].style.transform = "translateY(-16px)";
		document.getElementById("menu5").style.transform = "translateY(15%)";
	}
	else if (menuclicked != 5){
		document.getElementById("menu5").getElementsByTagName("span")[0].style.transform = "translateY(0px)";
		document.getElementById("menu5").style.transform = "translateY(15%)";
	}
}
document.getElementById("menu1").onclick = function(event){
	menu1click(event);
}
document.getElementById("menu2").onclick = function(){
	menu2click();
}
document.getElementById("menu3").onclick = function(){
	menu3click();
}
document.getElementById("menu4").onclick = function(){
	menu4click();
}
document.getElementById("menu5").onclick = function(){
	menu5click();
}

function menu1click(event){
	if (menuclicked != 1 && Player.tut != 0){
		changeshift(0);
		changecaps(0);
		document.getElementById("menu1").style.transform = "translateY(1%)";
		document.getElementById("menu1").getElementsByTagName("img")[0].style.transform = "scale(1.15,1.15)";
		document.getElementById("menu1").getElementsByTagName("span")[0].style.transform = "translateY(-10px)";
		document.getElementById("menu2").style.transform = "translateY(15%)";
		document.getElementById("menu2").getElementsByTagName("img")[0].style.transform = "";
		document.getElementById("menu2").getElementsByTagName("span")[0].style.transform = "";
		document.getElementById("menu3").style.transform = "translateY(15%)";
		document.getElementById("menu3").getElementsByTagName("img")[0].style.transform = "";
		if (Player.Letters["l"][0] == false){
			document.getElementById("menu3").getElementsByTagName("span")[0].style.transform = "translateY(-16px)";
		}
		else{
			document.getElementById("menu3").getElementsByTagName("span")[0].style.transform = "translateY(0px)";
		}
		document.getElementById("menu4").style.transform = "translateY(15%)";
		if (Player.Letters["v"][0] == false){
			document.getElementById("menu4").getElementsByTagName("span")[0].style.transform = "translateY(-16px)";
		}
		else{
			document.getElementById("menu4").getElementsByTagName("span")[0].style.transform = "translateY(0px)";
		}
		document.getElementById("menu4").getElementsByTagName("img")[0].style.transform = "";
		document.getElementById("menu5").style.transform = "translateY(15%)";
		document.getElementById("menu5").getElementsByTagName("img")[0].style.transform = "";
		if (Player.Letters["g"][0] == false){
			document.getElementById("menu5").getElementsByTagName("span")[0].style.transform = "translateY(-16px)";
		}
		else{
			document.getElementById("menu5").getElementsByTagName("span")[0].style.transform = "translateY(0px)";
		}
		menuclicked = 1;
		document.getElementById("info").style.display = "none";
		document.getElementById("keyboard").style.display = "block";
		document.getElementById("pole").style.display = "block";
		document.getElementById("store").style.display = "none";
		document.getElementById("features").style.display = "none";
		document.getElementById("grandmamain").style.display = "none";
		document.getElementById("upgrade").style.display = "none";
		document.getElementById("online").style.display = "none";
		grandsmallinfo();
		loadsize();
		if (event && event.getModifierState('CapsLock')) {
			changecaps(1);
			Caps = 1;
			document.getElementById("CapsLock").style.transition = "all 0.5s ease";
			document.getElementById("CapsLock").style.background = "#6eff61f7";
			document.getElementById("CapsLock").style.transform = "scale(0.95,0.95)";
			if (event.getModifierState('Shift')){
				changecaps(0);
				changeshift(1);
			}
		} 
		else if (event && event.getModifierState('Shift')){
			changecaps(1);
			changeshift(1);
			Caps = 0;
		}
		else {
			changecaps(0);
			Caps = 0;
		}
	}
	else if (Player.tut == 10){
		info();
		document.getElementById("menu1").style.transform = "translateY(8%)";
		document.getElementById("menu1").getElementsByTagName("img")[0].style.transform = "";
		document.getElementById("menu1").getElementsByTagName("span")[0].style.transform = "";
	}
}
function menu2click(){
	if (menuclicked != 2 && Player.tut == 10){
		changeshift(0);
		document.getElementById("menu1").style.transform = "translateY(15%)";
		document.getElementById("menu1").getElementsByTagName("img")[0].style.transform = "";
		document.getElementById("menu1").getElementsByTagName("span")[0].style.transform = "";
		document.getElementById("menu2").style.transform = "translateY(1%)";
		document.getElementById("menu2").getElementsByTagName("img")[0].style.transform = "scale(1.15,1.15)";
		document.getElementById("menu2").getElementsByTagName("span")[0].style.transform = "translateY(-10px)";
		document.getElementById("menu3").style.transform = "translateY(15%)";
		document.getElementById("menu3").getElementsByTagName("img")[0].style.transform = "";
		if (Player.Letters["l"][0] == false){
			document.getElementById("menu3").getElementsByTagName("span")[0].style.transform = "translateY(-16px)";
		}
		else{
			document.getElementById("menu3").getElementsByTagName("span")[0].style.transform = "translateY(0px)";
		}
		document.getElementById("menu4").style.transform = "translateY(15%)";
		if (Player.Letters["v"][0] == false){
			document.getElementById("menu4").getElementsByTagName("span")[0].style.transform = "translateY(-16px)";
		}
		else{
			document.getElementById("menu4").getElementsByTagName("span")[0].style.transform = "translateY(0px)";
		}
		document.getElementById("menu4").getElementsByTagName("img")[0].style.transform = "";
		document.getElementById("menu5").style.transform = "translateY(15%)";
		document.getElementById("menu5").getElementsByTagName("img")[0].style.transform = "";
		if (Player.Letters["g"][0] == false){
			document.getElementById("menu5").getElementsByTagName("span")[0].style.transform = "translateY(-16px)";
		}
		else{
			document.getElementById("menu5").getElementsByTagName("span")[0].style.transform = "translateY(0px)";
		}
		menuclicked = 2;
		document.getElementById("info").style.display = "none";
		document.getElementById("keyboard").style.display = "none";
		document.getElementById("pole").style.display = "none";
		document.getElementById("store").style.display = "block";
		document.getElementById("features").style.display = "none";
		document.getElementById("grandmamain").style.display = "none";
		document.getElementById("upgrade").style.display = "none";
		document.getElementById("online").style.display = "none";
		grandsmallinfo();
		loadsize();
		checkstore();
	}
	else if (Player.tut == 10){
		info();
		document.getElementById("menu2").style.transform = "translateY(8%)";
		document.getElementById("menu2").getElementsByTagName("img")[0].style.transform = "";
		document.getElementById("menu2").getElementsByTagName("span")[0].style.transform = "";
	}
	else if (menuclicked != 2 && (Player.tut == 1 || Player.tut == 2)){
		document.getElementById("tut2").style.display = "none";
		document.getElementById("tut3").style.display = "block";
		document.getElementById("menu2").style.filter = "blur(0)";
		document.getElementById("menu3").style.filter = "blur(3px)";
		document.getElementById("menu4").style.filter = "blur(3px)";
		document.getElementById("menu5").style.filter = "blur(3px)";
		document.getElementById("menu2").style.background = "linear-gradient(180deg, #fefffa 0%, #fffdf1 80%)";
		document.getElementById("menu2").style.cursor = "pointer";
		changeshift(0);
		Player.tut = 2;
		document.getElementById("menu1").style.transform = "translateY(15%)";
		document.getElementById("menu1").getElementsByTagName("img")[0].style.transform = "";
		document.getElementById("menu1").getElementsByTagName("span")[0].style.transform = "";
		document.getElementById("menu2").style.transform = "translateY(1%)";
		document.getElementById("menu2").getElementsByTagName("img")[0].style.transform = "scale(1.15,1.15)";
		document.getElementById("menu2").getElementsByTagName("span")[0].style.transform = "translateY(-10px)";
		document.getElementById("menu3").style.transform = "translateY(15%)";
		document.getElementById("menu3").getElementsByTagName("img")[0].style.transform = "";
		if (Player.Letters["l"][0] == false){
			document.getElementById("menu3").getElementsByTagName("span")[0].style.transform = "translateY(-16px)";
		}
		else{
			document.getElementById("menu3").getElementsByTagName("span")[0].style.transform = "translateY(0px)";
		}
		document.getElementById("menu4").style.transform = "translateY(15%)";
		if (Player.Letters["v"][0] == false){
			document.getElementById("menu4").getElementsByTagName("span")[0].style.transform = "translateY(-16px)";
		}
		else{
			document.getElementById("menu4").getElementsByTagName("span")[0].style.transform = "translateY(0px)";
		}
		document.getElementById("menu4").getElementsByTagName("img")[0].style.transform = "";
		document.getElementById("menu5").style.transform = "translateY(15%)";
		document.getElementById("menu5").getElementsByTagName("img")[0].style.transform = "";
		if (Player.Letters["g"][0] == false){
			document.getElementById("menu5").getElementsByTagName("span")[0].style.transform = "translateY(-16px)";
		}
		else{
			document.getElementById("menu5").getElementsByTagName("span")[0].style.transform = "translateY(0px)";
		}
		menuclicked = 2;
		document.getElementById("info").style.display = "none";
		document.getElementById("keyboard").style.display = "none";
		document.getElementById("pole").style.display = "none";
		document.getElementById("store").style.display = "block";
		document.getElementById("features").style.display = "none";
		document.getElementById("grandmamain").style.display = "none";
		document.getElementById("upgrade").style.display = "none";
		document.getElementById("online").style.display = "none";
		grandsmallinfo();
		loadsize();
		checkstore();
	}
}
function menu3click(){
	if (Player.Letters["l"][0] == true && Player.tut == 10){
		if (menuclicked != 3){
			document.getElementById("menu1").style.transform = "translateY(15%)";
			document.getElementById("menu1").getElementsByTagName("img")[0].style.transform = "";
			document.getElementById("menu1").getElementsByTagName("span")[0].style.transform = "";
			document.getElementById("menu2").style.transform = "translateY(15%)";
			document.getElementById("menu2").getElementsByTagName("img")[0].style.transform = "";
			document.getElementById("menu2").getElementsByTagName("span")[0].style.transform = "";
			document.getElementById("menu3").style.transform = "translateY(1%)";
			document.getElementById("menu3").getElementsByTagName("img")[0].style.transform = "scale(1.15,1.15)";
			document.getElementById("menu3").getElementsByTagName("span")[0].style.transform = "translateY(-10px)";
			document.getElementById("menu4").style.transform = "translateY(15%)";
			if (Player.Letters["v"][0] == false){
				document.getElementById("menu4").getElementsByTagName("span")[0].style.transform = "translateY(-16px)";
			}
			else{
				document.getElementById("menu4").getElementsByTagName("span")[0].style.transform = "translateY(0px)";
			}
			document.getElementById("menu4").getElementsByTagName("img")[0].style.transform = "";
			document.getElementById("menu5").style.transform = "translateY(15%)";
			document.getElementById("menu5").getElementsByTagName("img")[0].style.transform = "";
			if (Player.Letters["g"][0] == false){
				document.getElementById("menu5").getElementsByTagName("span")[0].style.transform = "translateY(-16px)";
			}
			else{
				document.getElementById("menu5").getElementsByTagName("span")[0].style.transform = "translateY(0px)";
			}
			menuclicked = 3;
			document.getElementById("info").style.display = "none";
			document.getElementById("keyboard").style.display = "none";
			document.getElementById("pole").style.display = "none";
			document.getElementById("store").style.display = "none";
			document.getElementById("features").style.display = "block";
			document.getElementById("upgrade").style.display = "none";
			document.getElementById("online").style.display = "none";
			if (document.getElementById("ftgrand").style.textDecoration == "underline"){
				document.getElementById("grandmamain").style.display = "block";
			}
			grandsmallinfo();
			if (document.getElementById("grandmamain").style.display == "block"){
				document.getElementById("grandinfo").style.display = "none";
			}
			checkcollection();
			granddisplay();
		}
		else{
			info();
			document.getElementById("menu3").style.transform = "translateY(8%)";
			document.getElementById("menu3").getElementsByTagName("img")[0].style.transform = "";
			document.getElementById("menu3").getElementsByTagName("span")[0].style.transform = "";
		}
	}
	else if (Player.tut == 10){
		document.getElementById("menu3").classList.add("blocked");
		function stopblock(){
			document.getElementById("menu3").classList.remove("blocked");
		} setTimeout(stopblock, 200);
	}
}
function menu4click(){
	if (Player.Letters["v"][0] == "abc" && Player.tut == 10){
		if (menuclicked != 4){
			document.getElementById("menu1").style.transform = "translateY(15%)";
			document.getElementById("menu1").getElementsByTagName("img")[0].style.transform = "";
			document.getElementById("menu1").getElementsByTagName("span")[0].style.transform = "";
			document.getElementById("menu2").style.transform = "translateY(15%)";
			document.getElementById("menu2").getElementsByTagName("img")[0].style.transform = "";
			document.getElementById("menu2").getElementsByTagName("span")[0].style.transform = "";
			document.getElementById("menu3").style.transform = "translateY(15%)";
			document.getElementById("menu3").getElementsByTagName("img")[0].style.transform = "";
			document.getElementById("menu3").getElementsByTagName("span")[0].style.transform = "";
			document.getElementById("menu4").style.transform = "translateY(1%)";
			document.getElementById("menu4").getElementsByTagName("img")[0].style.transform = "scale(1.15,1.15)";
			document.getElementById("menu4").getElementsByTagName("span")[0].style.transform = "translateY(-10px)";
			document.getElementById("menu4").getElementsByTagName("img")[0].style.transform = "";
			document.getElementById("menu5").style.transform = "translateY(15%)";
			document.getElementById("menu5").getElementsByTagName("img")[0].style.transform = "";
			if (Player.Letters["g"][0] == false){
				document.getElementById("menu5").getElementsByTagName("span")[0].style.transform = "translateY(-16px)";
			}
			else{
				document.getElementById("menu5").getElementsByTagName("span")[0].style.transform = "translateY(0px)";
			}
			menuclicked = 4;
			document.getElementById("info").style.display = "none";
			document.getElementById("keyboard").style.display = "none";
			document.getElementById("pole").style.display = "none";
			document.getElementById("store").style.display = "none";
			document.getElementById("features").style.display = "none";
			document.getElementById("grandmamain").style.display = "none";
			document.getElementById("upgrade").style.display = "block";
			document.getElementById("online").style.display = "none";
			grandsmallinfo();
		}
		else{
			info();
			document.getElementById("menu4").style.transform = "translateY(8%)";
			document.getElementById("menu4").getElementsByTagName("img")[0].style.transform = "";
			document.getElementById("menu4").getElementsByTagName("span")[0].style.transform = "";
		}
	}
	else if (Player.tut == 10){
		document.getElementById("menu4").classList.add("blocked");
		function stopblock(){
			document.getElementById("menu4").classList.remove("blocked");
		} setTimeout(stopblock, 200);
	}
}
function menu5click(){
	if (Player.Letters["g"][0] == true && Player.tut == 10){
		if (menuclicked != 5){
			document.getElementById("menu1").style.transform = "translateY(15%)";
			document.getElementById("menu1").getElementsByTagName("img")[0].style.transform = "";
			document.getElementById("menu1").getElementsByTagName("span")[0].style.transform = "";
			document.getElementById("menu2").style.transform = "translateY(15%)";
			document.getElementById("menu2").getElementsByTagName("img")[0].style.transform = "";
			document.getElementById("menu2").getElementsByTagName("span")[0].style.transform = "";
			document.getElementById("menu3").style.transform = "translateY(15%)";
			document.getElementById("menu3").getElementsByTagName("img")[0].style.transform = "";
			document.getElementById("menu3").getElementsByTagName("span")[0].style.transform = "";
			document.getElementById("menu4").style.transform = "translateY(15%)";
			document.getElementById("menu4").getElementsByTagName("img")[0].style.transform = "";
			document.getElementById("menu4").getElementsByTagName("span")[0].style.transform = "";
			document.getElementById("menu5").style.transform = "translateY(1%)";
			document.getElementById("menu5").getElementsByTagName("img")[0].style.transform = "scale(1.15,1.15)";
			document.getElementById("menu5").getElementsByTagName("span")[0].style.transform = "translateY(-10px)";
			menuclicked = 5;
			document.getElementById("info").style.display = "none";
			document.getElementById("keyboard").style.display = "none";
			document.getElementById("pole").style.display = "none";
			document.getElementById("store").style.display = "none";
			document.getElementById("features").style.display = "none";
			document.getElementById("grandmamain").style.display = "none";
			document.getElementById("upgrade").style.display = "none";
			document.getElementById("online").style.display = "block";
			grandsmallinfo();
		}
		else{
			info();
			document.getElementById("menu5").style.transform = "translateY(8%)";
			document.getElementById("menu5").getElementsByTagName("img")[0].style.transform = "";
			document.getElementById("menu5").getElementsByTagName("span")[0].style.transform = "";
		}
	}
	else if (Player.tut == 10){
		document.getElementById("menu5").classList.add("blocked");
		function stopblock(){
			document.getElementById("menu5").classList.remove("blocked");
		} setTimeout(stopblock, 200);
	}
}

function sellhover(letter){
	var text = document.getElementById(letter + "Text").innerHTML;
	if (text == letter && Player.Letters[letter][0] == true){
		document.getElementById(letter + "score").style.opacity = 1;
		document.getElementById(letter + "score").style.cursor = "pointer";
	}
	if (text == letter.toUpperCase() && Player.Letters[letter][1] == true){
		document.getElementById(letter + "score").style.opacity = 1;
		document.getElementById(letter + "score").style.cursor = "pointer";
	}
}
function sellhovertooltip(letter){
	var text = document.getElementById(letter + "Text").innerHTML;
	if (text == letter && Player.Letters[letter][0] == true){
		if (Player.Letters[letter][28].toFixed(1).slice(-1) == 0){
			document.getElementById(letter + "tooltipscore").innerHTML = "+"+Player.Letters[letter][28].toFixed(0);
		}
		else{
			document.getElementById(letter + "tooltipscore").innerHTML = "+"+Player.Letters[letter][28].toFixed(1);
		}
	}
	if (text == letter.toUpperCase() && Player.Letters[letter][1] == true){
		if (Player.Letters[letter][29].toFixed(1).slice(-1) == 0){
			document.getElementById(letter + "tooltipscore").innerHTML = "+"+Player.Letters[letter][29].toFixed(0);
		}
		else{
			document.getElementById(letter + "tooltipscore").innerHTML = "+"+Player.Letters[letter][29].toFixed(1);
		}
	}
}
document.getElementById("q").onmouseover = function(){
	sellhover("q");
}
document.getElementById("q").onmouseout = function(){
	document.getElementById("qscore").style.opacity = 0;
	document.getElementById("qscore").style.cursor = "default";
}
document.getElementById("w").onmouseover = function(){
	sellhover("w");
}
document.getElementById("w").onmouseout = function(){
	document.getElementById("wscore").style.opacity = 0;
	document.getElementById("wscore").style.cursor = "default";
}
document.getElementById("e").onmouseover = function(){
	sellhover("e");
}
document.getElementById("e").onmouseout = function(){
	document.getElementById("escore").style.opacity = 0;
	document.getElementById("escore").style.cursor = "default";
}
document.getElementById("r").onmouseover = function(){
	sellhover("r");
}
document.getElementById("r").onmouseout = function(){
	document.getElementById("rscore").style.opacity = 0;
	document.getElementById("rscore").style.cursor = "default";
}
document.getElementById("t").onmouseover = function(){
	sellhover("t");
}
document.getElementById("t").onmouseout = function(){
	document.getElementById("tscore").style.opacity = 0;
	document.getElementById("tscore").style.cursor = "default";
}
document.getElementById("y").onmouseover = function(){
	sellhover("y");
}
document.getElementById("y").onmouseout = function(){
	document.getElementById("yscore").style.opacity = 0;
	document.getElementById("yscore").style.cursor = "default";
}
document.getElementById("u").onmouseover = function(){
	sellhover("u");
}
document.getElementById("u").onmouseout = function(){
	document.getElementById("uscore").style.opacity = 0;
	document.getElementById("uscore").style.cursor = "default";
}
document.getElementById("i").onmouseover = function(){
	sellhover("i");
}
document.getElementById("i").onmouseout = function(){
	document.getElementById("iscore").style.opacity = 0;
	document.getElementById("iscore").style.cursor = "default";
}
document.getElementById("o").onmouseover = function(){
	sellhover("o");
}
document.getElementById("o").onmouseout = function(){
	document.getElementById("oscore").style.opacity = 0;
	document.getElementById("oscore").style.cursor = "default";
}
document.getElementById("p").onmouseover = function(){
	sellhover("p");
}
document.getElementById("p").onmouseout = function(){
	document.getElementById("pscore").style.opacity = 0;
	document.getElementById("pscore").style.cursor = "default";
}
document.getElementById("a").onmouseover = function(){
	sellhover("a");
}
document.getElementById("a").onmouseout = function(){
	document.getElementById("ascore").style.opacity = 0;
	document.getElementById("ascore").style.cursor = "default";
}
document.getElementById("s").onmouseover = function(){
	sellhover("s");
}
document.getElementById("s").onmouseout = function(){
	document.getElementById("sscore").style.opacity = 0;
	document.getElementById("sscore").style.cursor = "default";
}
document.getElementById("d").onmouseover = function(){
	sellhover("d");
}
document.getElementById("d").onmouseout = function(){
	document.getElementById("dscore").style.opacity = 0;
	document.getElementById("dscore").style.cursor = "default";
}
document.getElementById("f").onmouseover = function(){
	sellhover("f");
}
document.getElementById("f").onmouseout = function(){
	document.getElementById("fscore").style.opacity = 0;
	document.getElementById("fscore").style.cursor = "default";
}
document.getElementById("g").onmouseover = function(){
	sellhover("g");
}
document.getElementById("g").onmouseout = function(){
	document.getElementById("gscore").style.opacity = 0;
	document.getElementById("gscore").style.cursor = "default";
}
document.getElementById("h").onmouseover = function(){
	sellhover("h");
}
document.getElementById("h").onmouseout = function(){
	document.getElementById("hscore").style.opacity = 0;
	document.getElementById("hscore").style.cursor = "default";
}
document.getElementById("j").onmouseover = function(){
	sellhover("j");
}
document.getElementById("j").onmouseout = function(){
	document.getElementById("jscore").style.opacity = 0;
	document.getElementById("jscore").style.cursor = "default";
}
document.getElementById("k").onmouseover = function(){
	sellhover("k");
}
document.getElementById("k").onmouseout = function(){
	document.getElementById("kscore").style.opacity = 0;
	document.getElementById("kscore").style.cursor = "default";
}
document.getElementById("l").onmouseover = function(){
	sellhover("l");
}
document.getElementById("l").onmouseout = function(){
	document.getElementById("lscore").style.opacity = 0;
	document.getElementById("lscore").style.cursor = "default";
}
document.getElementById("z").onmouseover = function(){
	sellhover("z");
}
document.getElementById("z").onmouseout = function(){
	document.getElementById("zscore").style.opacity = 0;
	document.getElementById("zscore").style.cursor = "default";
}
document.getElementById("x").onmouseover = function(){
	sellhover("x");
}
document.getElementById("x").onmouseout = function(){
	document.getElementById("xscore").style.opacity = 0;
	document.getElementById("xscore").style.cursor = "default";
}
document.getElementById("c").onmouseover = function(){
	sellhover("c");
}
document.getElementById("c").onmouseout = function(){
	document.getElementById("cscore").style.opacity = 0;
	document.getElementById("cscore").style.cursor = "default";
}
document.getElementById("v").onmouseover = function(){
	sellhover("v");
}
document.getElementById("v").onmouseout = function(){
	document.getElementById("vscore").style.opacity = 0;
	document.getElementById("vscore").style.cursor = "default";
}
document.getElementById("b").onmouseover = function(){
	sellhover("b");
}
document.getElementById("b").onmouseout = function(){
	document.getElementById("bscore").style.opacity = 0;
	document.getElementById("bscore").style.cursor = "default";
}
document.getElementById("n").onmouseover = function(){
	sellhover("n");
}
document.getElementById("n").onmouseout = function(){
	document.getElementById("nscore").style.opacity = 0;
	document.getElementById("nscore").style.cursor = "default";
}
document.getElementById("m").onmouseover = function(){
	sellhover("m");
}
document.getElementById("m").onmouseout = function(){
	document.getElementById("mscore").style.opacity = 0;
	document.getElementById("mscore").style.cursor = "default";
}
document.getElementById("qscore").onmouseover = function(){sellhovertooltip("q")};
document.getElementById("wscore").onmouseover = function(){sellhovertooltip("w")};
document.getElementById("escore").onmouseover = function(){sellhovertooltip("e")};
document.getElementById("rscore").onmouseover = function(){sellhovertooltip("r")};
document.getElementById("tscore").onmouseover = function(){sellhovertooltip("t")};
document.getElementById("yscore").onmouseover = function(){sellhovertooltip("y")};
document.getElementById("uscore").onmouseover = function(){sellhovertooltip("u")};
document.getElementById("iscore").onmouseover = function(){sellhovertooltip("i")};
document.getElementById("oscore").onmouseover = function(){sellhovertooltip("o")};
document.getElementById("pscore").onmouseover = function(){sellhovertooltip("p")};
document.getElementById("ascore").onmouseover = function(){sellhovertooltip("a")};
document.getElementById("sscore").onmouseover = function(){sellhovertooltip("s")};
document.getElementById("dscore").onmouseover = function(){sellhovertooltip("d")};
document.getElementById("fscore").onmouseover = function(){sellhovertooltip("f")};
document.getElementById("gscore").onmouseover = function(){sellhovertooltip("g")};
document.getElementById("hscore").onmouseover = function(){sellhovertooltip("h")};
document.getElementById("jscore").onmouseover = function(){sellhovertooltip("j")};
document.getElementById("kscore").onmouseover = function(){sellhovertooltip("k")};
document.getElementById("lscore").onmouseover = function(){sellhovertooltip("l")};
document.getElementById("zscore").onmouseover = function(){sellhovertooltip("z")};
document.getElementById("xscore").onmouseover = function(){sellhovertooltip("x")};
document.getElementById("cscore").onmouseover = function(){sellhovertooltip("c")};
document.getElementById("vscore").onmouseover = function(){sellhovertooltip("v")};
document.getElementById("bscore").onmouseover = function(){sellhovertooltip("b")};
document.getElementById("nscore").onmouseover = function(){sellhovertooltip("n")};
document.getElementById("mscore").onmouseover = function(){sellhovertooltip("m")};

function sellclick(letter){
	var text = document.getElementById(letter + "Text").innerHTML;
	if (text == letter && Player.Letters[letter][0] == true && Player.Letters[letter][2] > 0){
		Player.Score += Player.Letters[letter][28];
		Player.Letters[letter][2] -= 1;
		barcolors(letter, Player.Letters[letter][2]/Player.Letters[letter][4]*100);
		if (letter == ActiveLetter){
			ActiveLetterCount -= 1;
		}
	}
	if (text == letter.toUpperCase() && Player.Letters[letter][1] == true && Player.Letters[letter][3] > 0){
		Player.Score += Player.Letters[letter][29];
		Player.Letters[letter][3] -= 1;
		barcolors(letter, Player.Letters[letter][3]/Player.Letters[letter][5]*100);
		if (letter.toUpperCase() == ActiveLetter){
			ActiveLetterCount -= 1;
		}
	}
	if (Player.Score.toFixed(1).slice(-1) == 0){
		document.getElementById("scoredisplay").innerHTML = "Score: <b>" + Player.Score.toFixed(0) + "</b>";
	}
	else{
		document.getElementById("scoredisplay").innerHTML = "Score: <b>" + Player.Score.toFixed(1) + "</b>";
	}
}
document.getElementById("qscore").onclick = function(){sellclick("q");}
document.getElementById("wscore").onclick = function(){sellclick("w");}
document.getElementById("escore").onclick = function(){sellclick("e");}
document.getElementById("rscore").onclick = function(){sellclick("r");}
document.getElementById("tscore").onclick = function(){sellclick("t");}
document.getElementById("yscore").onclick = function(){sellclick("y");}
document.getElementById("uscore").onclick = function(){sellclick("u");}
document.getElementById("iscore").onclick = function(){sellclick("i");}
document.getElementById("oscore").onclick = function(){sellclick("o");}
document.getElementById("pscore").onclick = function(){sellclick("p");}
document.getElementById("ascore").onclick = function(){sellclick("a");}
document.getElementById("sscore").onclick = function(){sellclick("s");}
document.getElementById("dscore").onclick = function(){sellclick("d");}
document.getElementById("fscore").onclick = function(){sellclick("f");}
document.getElementById("gscore").onclick = function(){sellclick("g");}
document.getElementById("hscore").onclick = function(){sellclick("h");}
document.getElementById("jscore").onclick = function(){sellclick("j");}
document.getElementById("kscore").onclick = function(){sellclick("k");}
document.getElementById("lscore").onclick = function(){sellclick("l");}
document.getElementById("zscore").onclick = function(){sellclick("z");}
document.getElementById("xscore").onclick = function(){sellclick("x");}
document.getElementById("cscore").onclick = function(){sellclick("c");}
document.getElementById("vscore").onclick = function(){sellclick("v");}
document.getElementById("bscore").onclick = function(){sellclick("b");}
document.getElementById("nscore").onclick = function(){sellclick("n");}
document.getElementById("mscore").onclick = function(){sellclick("m");}

document.getElementById("ftcol").onclick = function(){
	document.getElementById("collectionmain").style.display = "block";
	document.getElementById("grandmamain").style.display = "none";
	document.getElementById("ftcol").style.textDecoration = "underline";
	document.getElementById("ftgrand").style.textDecoration = "none";
	grandsmallinfo();
}
document.getElementById("ftgrand").onclick = function(){
	document.getElementById("collectionmain").style.display = "none";
	document.getElementById("grandmamain").style.display = "block";
	document.getElementById("ftcol").style.textDecoration = "none";
	document.getElementById("ftgrand").style.textDecoration = "underline";
	document.getElementById("grandinfo").style.display = "none";
	granddisplay();
}

document.getElementById("ShiftStore").onmouseover = function(){
	document.getElementById("Secrets2").style = "text-decoration: auto";
	if (document.getElementById("Secrets2").innerHTML.slice(-10) != "(Unlocked)"){
		document.getElementById("Secrets2").innerHTML += " (Unlocked)";
	}
	Player.Secrets[1] = true;
	var Save =
	{
		Player: Player
	}
	localStorage.setItem("Saved", JSON.stringify(Save));
}
document.getElementById("tutbutton").onclick = function(){
	if (Player.tut == 3){
		Player.tut = 10;
		document.getElementById("tut4").style.display = "none";
		var Save =
		{
			Player: Player
		}
		localStorage.setItem("Saved", JSON.stringify(Save));
	}
}

function changecaps(value){
	if (menuclicked == 1){
		var tempchar = characters.substring(26,52);
		var tempchar2 = characters.substring(0,26);
		if (value == 1){
			for (let i=0; i < tempchar.length; i++){
				if (ActiveLetter.toLowerCase() != tempchar[i]){
					document.getElementById(tempchar[i]+"Text").innerHTML = tempchar2[i];
					if (Player.Letters[tempchar[i]][1] == true){
						barcolors(tempchar[i], (Player.Letters[tempchar[i]][3]/Player.Letters[tempchar[i]][5]*100));
					} else {
						document.getElementById(tempchar[i]+"Bar").style = "display: block; opacity: 0;";
					}
				}
			}
		}
		else if (value == 0){
			for (let i=0; i < tempchar.length; i++){
				if (ActiveLetter.toLowerCase() != tempchar[i]){
					document.getElementById(tempchar[i]+"Text").innerHTML = tempchar[i];
					if (Player.Letters[tempchar[i]][0] == true){
						barcolors(tempchar[i], (Player.Letters[tempchar[i]][2]/Player.Letters[tempchar[i]][4]*100));
					} else {
						document.getElementById(tempchar[i]+"Bar").style = "display: block; opacity: 0;";
					}
				}
			}
		}
	}
}

function changeshift(value){
	if (menuclicked == 2){
		var tempchar = characters.substring(26,52);
		var tempchar2 = characters.substring(0,26);
		if (value == 1){
			for (let i=0; i < tempchar.length; i++){
				document.getElementById(tempchar[i]+"Textstore").innerHTML = tempchar2[i];
			}
		}
		else if (value == 0){
			for (let i=0; i < tempchar.length; i++){
				document.getElementById(tempchar[i]+"Textstore").innerHTML = tempchar[i];
			}
		}
		checkstore();
	}
}

function keyup(event){
	if ((event.code == "ShiftRight" || event.code == "ShiftLeft") && Caps == 0){
		Shift = 0;
		changecaps(0);
		changeshift(0);
		setTimeout(clearcolors, 200, "ShiftRight", 1);
		setTimeout(clearcolors, 200, "ShiftLeft", 1);
		setTimeout(clearcolors, 200, "ShiftStore", 1);
	} 
	else if ((event.code == "ShiftRight" || event.code == "ShiftLeft") && Caps == 1) {
		Shift = 0;
		changecaps(1);
		changeshift(0);
		setTimeout(clearcolors, 200, "ShiftRight", 1);
		setTimeout(clearcolors, 200, "ShiftLeft", 1);
		setTimeout(clearcolors, 200, "ShiftStore", 1);
	} else {}
	if (event.code == "CapsLock"){
		Caps2 = 0;
	} else {}
}

function keydown(event){
	var name = event.key;
	var code = event.code;
	if (name || code){
		if (event.getModifierState('CapsLock')) {
			changecaps(1);
			Caps = 1;
			document.getElementById("CapsLock").style.transition = "all 0.5s ease";
			document.getElementById("CapsLock").style.background = "#6eff61f7";
			document.getElementById("CapsLock").style.transform = "scale(0.95,0.95)";
			if (event.getModifierState('Shift')){
				changecaps(0);
			}
		} 
		else if (event.getModifierState('Shift')){
			changecaps(1);
			Caps = 0;
		}
		else {
			changecaps(0);
			Caps = 0;
		}
		if (characters.includes(name) == true && menuclicked == 1){
			document.getElementById('audio').currentTime = 0;
			document.getElementById('audio').play();
			if (document.getElementById(name.toLowerCase())){
				document.getElementById(name.toLowerCase()).style.transition = "all 0.5s ease";
				document.getElementById(name.toLowerCase()).style.transform = "scale(0.95,0.95)";
				if (ActiveLetter != name){
					document.getElementById(name.toLowerCase()).style.background = "#6eff61f7";
					c = setTimeout(clearcolors, 400, name.toLowerCase(), 1);
				} 
				else if (ActiveLetter == name){
					c = setTimeout(clearcolors, 400, name.toLowerCase(), 0);
				}
			}
			inputfield.push(name)
			var a = document.getElementById("poletekst").innerHTML;
			document.getElementById("poletekst").innerHTML = inputfield.join("");
			if (document.getElementById("poletekst").clientWidth > 0.35*document.body.clientWidth){
				if (a.substr(a.length - 3) != "..."){
					document.getElementById("poletekst").innerHTML = a + "...";
				}
				else {
					document.getElementById("poletekst").innerHTML = a;
				}
			}
		}
		else if (characterscodes.includes(code) == true){
			if ((code == "ShiftLeft" || code == "ShiftRight") && Shift == 0 && menuclicked != 3){
				Shift = 1;
				document.getElementById('audio').currentTime = 0;
				document.getElementById('audio').play();
			}
			else if (code == "CapsLock" && Caps2 == 0 && menuclicked == 1){
				Caps2 = 1;
				document.getElementById('audio').currentTime = 0;
				document.getElementById('audio').play();
			}
			else if (code == "Backslash"){
				document.getElementById('audio').currentTime = 0;
				document.getElementById('audio').play();
				if (Shift == 0){
					inputfield.push("\\");
				}
				else{
					inputfield.push("|");
				}
				var a = document.getElementById("poletekst").innerHTML;
				document.getElementById("poletekst").innerHTML = inputfield.join("");
				if (document.getElementById("poletekst").clientWidth > 0.35*document.body.clientWidth){
					if (a.substr(a.length - 3) != "..."){
						document.getElementById("poletekst").innerHTML = a + "...";
					}
					else {
						document.getElementById("poletekst").innerHTML = a;
					}
				}
			}
			else if (code == "Backspace" && inputfield.length != 0 && menuclicked == 1){
				document.getElementById('audio').currentTime = 0;
				document.getElementById('audio').play();
				inputfield.pop();
				var a = document.getElementById("poletekst").innerHTML;
				document.getElementById("poletekst").innerHTML = inputfield.join("");
				if (document.getElementById("poletekst").clientWidth > 0.35*document.body.clientWidth){
					document.getElementById("poletekst").innerHTML = a;
				}
				if (inputfield.length == 0){
					document.getElementById("poletekst").innerHTML = "...";
				}
				else {}
			} 
			else if (code == "Space" && inputfield.length != 0 && menuclicked == 1){
				if (inputfield[inputfield.length-1] != " "){
					document.getElementById('audio').currentTime = 0;
					document.getElementById('audio').play();
					inputfield.push(name)
				}
				var a = document.getElementById("poletekst").innerHTML;
				document.getElementById("poletekst").innerHTML = inputfield.join("");
				if (document.getElementById("poletekst").clientWidth > 0.35*document.body.clientWidth){
					if (a.substr(a.length - 3) != "..."){
						document.getElementById("poletekst").innerHTML = a + "...";
					}
					else {
						document.getElementById("poletekst").innerHTML = a;
					}
				}
			}
			if (document.getElementById(code)){
				document.getElementById(code).style.transition = "all 0.5s ease";
				document.getElementById(code).style.background = "#6eff61f7";
				document.getElementById(code).style.transform = "scale(0.95,0.95)";
			}
			if (menuclicked == 2 && (code == "ShiftRight" || code == "ShiftLeft")){
				document.getElementById("ShiftStore").style.transition = "all 0.5s ease";
				document.getElementById("ShiftStore").style.background = "#6eff61f7";
				document.getElementById("ShiftStore").style.transform = "scale(0.95,0.95)";
				setTimeout(clearcolors, 400, "ShiftStore", 1);
			}
			if (code == "CapsLock"){
				setTimeout(clearcolors, 1, code, 1);
			}
			else if (code != "Backslash"){
				setTimeout(clearcolors, 400, code, 1);
			}
		}
		else if (code == "Enter" && menuclicked == 1){
			document.getElementById('audio').currentTime = 0;
			document.getElementById('audio').play();
			document.getElementById("enter").style.transition = "all 0.5s ease";
			document.getElementById("enter").style.background = "#6eff61f7";
			setTimeout(clearcolors, 400, "enter", 1);
			if (AlertType != ""){
				if (AlertType == "Info"){
					document.getElementById("Alert").style = "display: none;";
				}
				else if (AlertType == "Reset"){
					reset();
					document.getElementById("Alert").style = "display: none;";
				}
				AlertType = "";
			}
			else if(inputfield.join("") != ""){
				check();
			}
		}
		else if (charactersspecial.includes(name) == true && menuclicked == 1){
			document.getElementById('audio').currentTime = 0;
			document.getElementById('audio').play();
			if (name == "&"){
				name = "&amp;";
			}
			else if (name == "<"){
				name = "&lt;";
			}
			else if (name == ">"){
				name = "&gt;";
			}
			inputfield.push(name)
			var a = document.getElementById("poletekst").innerHTML;
			document.getElementById("poletekst").innerHTML = inputfield.join("");
			if (document.getElementById("poletekst").clientWidth > 0.35*document.body.clientWidth){
				if (a.substr(a.length - 3) != "..."){
					document.getElementById("poletekst").innerHTML = a + "...";
				}
				else {
					document.getElementById("poletekst").innerHTML = a;
				}
			}
		}
		else if (code == "ArrowRight"){
			if (menuclicked == 1){
				menu2click();
			}
			else if (menuclicked == 2){
				menu3click();
			}
			else if (menuclicked == 3){
				menu4click();
			}
			else if (menuclicked == 4){
				menu5click();
			}
			else if (menuclicked == 5){
				menu1click(event);
			}
		}
		else if (code == "ArrowLeft"){
			if (menuclicked == 1){
				menu5click();
			}
			else if (menuclicked == 2){
				menu1click(event);
			}
			else if (menuclicked == 3){
				menu2click();
			}
			else if (menuclicked == 4){
				menu3click();
			}
			else if (menuclicked == 5){
				menu4click();
			}
		}
		else if (code == "ArrowDown"){
			info();
		}
		else if (code == "ArrowUp" && menuclicked == 0){
			menu1click(event);
		}
		result();
	}
}

function clearcolors(idname, value){
	if ((idname != "CapsLock" || Caps == 0) && (idname != "ShiftRight" && idname != "ShiftLeft" && idname != "ShiftStore")){
		document.getElementById(idname).style.transition = "all 0.5s ease";
		document.getElementById(idname).style.transform = "scale(1,1)";
		if (value == 1){
			document.getElementById(idname).style.background = "#ffe6c3f7";
		} else {}
	} else {} 
	if ((idname == "ShiftRight" || idname == "ShiftLeft") && Shift == 0){
		document.getElementById(idname).style.transition = "all 0.5s ease";
		document.getElementById(idname).style.transform = "scale(1,1)";
		document.getElementById(idname).style.background = "#ffe6c3f7";
	} 
	else if (idname == "ShiftStore" && Shift == 0){
		document.getElementById(idname).style.transition = "all 0.5s ease";
		document.getElementById(idname).style.transform = "scale(1,1)";
		document.getElementById(idname).style.background = "#fffbf4f7";
	}
}

function barcolors(id, BarP){
	if (id){
		document.getElementById(id+"Bar").style = "display: block; opacity: 1; box-shadow: 1px 1px 2px 0px hsl(" + BarP + ", 60%, 30%); border: 1px solid hsl(" + BarP + ", 100%, 40%); background: linear-gradient(to right, hsl(" + BarP + ", 100%, 60%) " + BarP + "%, #fff8ee 0%);";
		if (Player.Letters[id][2] != 0 && document.getElementById(id+"Text").innerHTML == id){
			document.getElementById(id+"Bar").innerHTML = Player.Letters[id][2];
		}
		else if (Player.Letters[id][2] == 0 && document.getElementById(id+"Text").innerHTML == id){
			document.getElementById(id+"Bar").innerHTML = "&nbsp;";
		}
		else if (Player.Letters[id][3] != 0 && document.getElementById(id+"Text").innerHTML == id.toUpperCase()){
			document.getElementById(id+"Bar").innerHTML = Player.Letters[id][3];
		}
		else{
			document.getElementById(id+"Bar").innerHTML = "&nbsp;";
		}
	}
}

function resetlettersbackground(){
	var tempchar = characters.substring(26,52);
	for (let i=0; i < tempchar.length; i++){
		try{clearTimeout(c);}catch{};
		document.getElementById(tempchar[i]).style.transition = "all 0s ease";
		document.getElementById(tempchar[i]).style.transform = "scale(1,1)";
		document.getElementById(tempchar[i]).style.background = "#ffe6c3f7";
		if ((Caps == 1 && Shift == 0) || (Caps == 0 && Shift == 1)){
			document.getElementById(tempchar[i]+"Text").innerHTML = tempchar[i].toUpperCase();
			if (Player.Letters[tempchar[i]][1] == true){
				barcolors(tempchar[i], (Player.Letters[tempchar[i]][3]/Player.Letters[tempchar[i]][5]*100));
			} else {
				document.getElementById(tempchar[i]+"Bar").style = "display: block; opacity: 0;";
			}
		}
		else {
			document.getElementById(tempchar[i]+"Text").innerHTML = tempchar[i];
			if (Player.Letters[tempchar[i]][0] == true){
				barcolors(tempchar[i], (Player.Letters[tempchar[i]][2]/Player.Letters[tempchar[i]][4]*100));
			} else {
				document.getElementById(tempchar[i]+"Bar").style = "display: block; opacity: 0;";
			}
		}
	}
}

function check(){
	if (inputfield.join("") == "sound mute"){
		document.getElementById("audio").volume = 0; Player.volume2 = document.getElementById("audio").volume;
	}
	else if (inputfield.join("") == "sound unmute" && Player.volume != 0){
		document.getElementById("audio").volume = Player.volume; Player.volume2 = document.getElementById("audio").volume;
	} 
	else if (inputfield.join("") == "sound unmute" && Player.volume == 0){
		document.getElementById("audio").volume = 1; Player.volume2 = document.getElementById("audio").volume;
	}
	else if (inputfield.join("") == "sound-" && document.getElementById("audio").volume >= 0.2){
		document.getElementById("audio").volume -= 0.2; Player.volume = document.getElementById("audio").volume; Player.volume2 = document.getElementById("audio").volume;
	} 
	else if (inputfield.join("") == "sound-" && document.getElementById("audio").volume < 0.2){
		document.getElementById("audio").volume = 0; Player.volume = document.getElementById("audio").volume; Player.volume2 = document.getElementById("audio").volume;
	}
	else if (inputfield.join("") == "sound--" && document.getElementById("audio").volume >= 0.4){
		document.getElementById("audio").volume -= 0.4; Player.volume = document.getElementById("audio").volume; Player.volume2 = document.getElementById("audio").volume;
	} 
	else if (inputfield.join("") == "sound--" && document.getElementById("audio").volume < 0.4){
		document.getElementById("audio").volume = 0; Player.volume = document.getElementById("audio").volume; Player.volume2 = document.getElementById("audio").volume;
	}
	else if (inputfield.join("") == "sound---" && document.getElementById("audio").volume >= 0.6){
		document.getElementById("audio").volume -= 0.6; Player.volume = document.getElementById("audio").volume; Player.volume2 = document.getElementById("audio").volume;
	} 
	else if (inputfield.join("") == "sound---" && document.getElementById("audio").volume < 0.6){
		document.getElementById("audio").volume = 0; Player.volume = document.getElementById("audio").volume; Player.volume2 = document.getElementById("audio").volume;
	}
	else if (inputfield.join("") == "sound+" && document.getElementById("audio").volume <= 0.8){
		document.getElementById("audio").volume += 0.2; Player.volume = document.getElementById("audio").volume; Player.volume2 = document.getElementById("audio").volume;
	} 
	else if (inputfield.join("") == "sound+" && document.getElementById("audio").volume > 0.8){
		document.getElementById("audio").volume = 1; Player.volume = document.getElementById("audio").volume; Player.volume2 = document.getElementById("audio").volume;
	}
	else if (inputfield.join("") == "sound++" && document.getElementById("audio").volume <= 0.6){
		document.getElementById("audio").volume += 0.4; Player.volume = document.getElementById("audio").volume; Player.volume2 = document.getElementById("audio").volume;
	} 
	else if (inputfield.join("") == "sound++" && document.getElementById("audio").volume > 0.6){
		document.getElementById("audio").volume = 1; Player.volume = document.getElementById("audio").volume; Player.volume2 = document.getElementById("audio").volume;
	}
	else if (inputfield.join("") == "sound+++" && document.getElementById("audio").volume <= 0.4){
		document.getElementById("audio").volume += 0.6; Player.volume = document.getElementById("audio").volume; Player.volume2 = document.getElementById("audio").volume;
	} 
	else if (inputfield.join("") == "sound+++" && document.getElementById("audio").volume > 0.4){
		document.getElementById("audio").volume = 1; Player.volume = document.getElementById("audio").volume; Player.volume2 = document.getElementById("audio").volume;
	}
	else if (inputfield.join("") == "save"){
		document.getElementById("saveinfo").innerHTML = "Saved";
		save();
	}
	else if (inputfield.join("") == "help"){
		document.getElementById("Alert").style = "display: block;";
		document.getElementById("AlertText").innerHTML = "<b>Commands:</b><br>save (auto every 30 seconds)<br>sound mute<br>sound unmute<br>sound-/--/---<br>sound+/++/+++";
		AlertType = "Info";
	}
	if (commands.includes(inputfield.join("")) == false && characters.includes(inputfield.join("")) == true && Player.Letters[inputfield.join("").toLowerCase()] != undefined){
		if (inputfield.join("") == inputfield.join("").toLowerCase() && Player.Letters[inputfield.join("")][0] == true && Player.Letters[inputfield.join("")][2] < Player.Letters[inputfield.join("")][4]){
			if (ActiveLetter != inputfield.join("")){
				resetlettersbackground();
				try{clearTimeout(x);}catch{};
				ActiveLetter = inputfield.join("");
				ActiveLetterCount = Player.Letters[inputfield.join("")][2];
				ActiveLetterMax = Player.Letters[inputfield.join("")][4];
				ActiveLetterSpeed = Player.Letters[inputfield.join("")][6];
				ActiveLetterCap = 0;
			}	
			else{
				ActiveLetter = "";
				ActiveLetterCount = 0;
				ActiveLetterMax = 0;
				ActiveLetterSpeed = 0;
				ActiveLetterCap = 0;
				resetlettersbackground();
			}
		}
		else if (inputfield.join("") != inputfield.join("").toLowerCase() && Player.Letters[inputfield.join("").toLowerCase()][1] == true && Player.Letters[inputfield.join("").toLowerCase()][3] < Player.Letters[inputfield.join("").toLowerCase()][5]){
			if (ActiveLetter != inputfield.join("")){
				resetlettersbackground();
				try{clearTimeout(x);}catch{};
				ActiveLetter = inputfield.join("");
				ActiveLetterCount = Player.Letters[inputfield.join("").toLowerCase()][3];
				ActiveLetterMax = Player.Letters[inputfield.join("").toLowerCase()][5];
				ActiveLetterSpeed = Player.Letters[inputfield.join("").toLowerCase()][7];
				ActiveLetterCap = 0;
			}
			else{
				ActiveLetter = "";
				ActiveLetterCount = 0;
				ActiveLetterMax = 0;
				ActiveLetterSpeed = 0;
				ActiveLetterCap = 0;
				resetlettersbackground();
			}
		}
	}
	else if (inputfield.join("").search("grandma") == 0 && inputfield.join("").length >= 9 && inputfield.join("")[7] == " " && Player.Letters["l"][0] == true){
		var text = inputfield.join("").substring(8);
		if (text == Player.Grand.main[1] && Player.Grand.main[6] < 10){
			grandtestword(1);
		}
		else if (text == Player.Grand.main[2] && Player.Grand.main[7] < 7){
			grandtestword(2);
		}
		else if (text == Player.Grand.main[3] && Player.Grand.main[8] < 3 && Player.Grand.main[5] == 1){
			grandtestword(3);
		}
		else if (text.search("guess") == 0 && text.length >= 7 && text[5] == " " && Player.Grand.main[5] == 0){
			var text = text.substring(6);
			if (text == Player.Grand.main[3]){
				Player.Grand.main[5] = 1;
			}
		}
		granddisplay();
		grandsmallinfo();
	}
	else {
		for (key in Player.Letters){
			if (Player.Letters[key][8] == inputfield.join("")){
				var material = 0;
				for (i=0; i < inputfield.length; i++){
					if (inputfield[i] == inputfield[i].toLowerCase()){
						if (Player.Letters[inputfield[i]][2] < inputfield.filter(x => x == inputfield[i]).length){
							material = 1;
						}
					}
					else if (inputfield[i] != inputfield[i].toLowerCase()){
						if (Player.Letters[inputfield[i].toLowerCase()][3] < inputfield.filter(x => x == inputfield[i]).length){
							material = 1;
						}
					}
				}
				if (material == 0){
					Player.Letters[key][9] += 1;
					for (i=0; i < inputfield.length; i++){
						if (inputfield[i] == inputfield[i].toLowerCase()){
							Player.Letters[inputfield[i]][2] -= 1;
						}
						else if (inputfield[i] != inputfield[i].toLowerCase()){
							Player.Letters[inputfield[i].toLowerCase()][3] -= 1;
						}
						if (ActiveLetter == inputfield[i]){
							ActiveLetterCount -= 1;
						}
						resetlettersbackground();
					}
					if (Player.Letters[key][9] == Player.Letters[key][10]){
						Player.Letters[key][0] = true;
						Player.Letters[key][8] = "";
						Player.Letters[key][9] = 0;
						Player.Letters[key][10] = 0;
						if (key == "l"){
							document.getElementById("menu3").style.cursor = "pointer";
							document.getElementById("menu3").style.background = "linear-gradient(180deg, rgba(254,255,250,1) 0%, rgba(252,255,237,1) 80%)";
							document.getElementById("menu3").innerHTML = '<img src="book.png" alt="features" width="110" height="80"><br/><span>Features</span>';
							document.getElementById("menu3").getElementsByTagName("span")[0].style.transform = "translateY(0px)";
							document.getElementById("menu3").style.transform = "translateY(15%)";
						}
						if (key == "g"){
							document.getElementById("menu5").style.cursor = "pointer";
							document.getElementById("menu5").style.background = "linear-gradient(180deg, rgba(254,255,250,1) 0%, rgba(252,255,237,1) 80%)";
							document.getElementById("menu5").innerHTML = '<img src="online.png" alt="online" width="110" height="80"><br/><span>Online</span>';
							document.getElementById("menu5").getElementsByTagName("span")[0].style.transform = "translateY(0px)";
							document.getElementById("menu5").style.transform = "translateY(15%)";
						}
						draw(key, 14);
						resetlettersbackground();
					}
					if (key == "a" && Player.tut == 2){
						document.getElementById("tut3").style.display = "none";
						document.getElementById("tut4").style.display = "block";
						document.getElementById("menu3").style.filter = "blur(0)";
						document.getElementById("menu4").style.filter = "blur(0)";
						document.getElementById("menu5").style.filter = "blur(0)";
						Player.tut = 3;
					}
				}
			}
			else if (Player.Letters[key][11] == inputfield.join("")){
				var material = 0;
				for (i=0; i < inputfield.length; i++){
					if (inputfield[i] == inputfield[i].toLowerCase()){
						if (Player.Letters[inputfield[i]][2] < inputfield.filter(x => x == inputfield[i]).length){
							material = 1;
						}
					}
					else if (inputfield[i] != inputfield[i].toLowerCase()){
						if (Player.Letters[inputfield[i].toLowerCase()][3] < inputfield.filter(x => x == inputfield[i]).length){
							material = 1;
						}
					}
				}
				if (material == 0){
					Player.Letters[key][12] += 1;
					for (i=0; i < inputfield.length; i++){
						if (inputfield[i] == inputfield[i].toLowerCase()){
							Player.Letters[inputfield[i]][2] -= 1;
						}
						else if (inputfield[i] != inputfield[i].toLowerCase()){
							Player.Letters[inputfield[i].toLowerCase()][3] -= 1;
						}
						if (ActiveLetter == inputfield[i]){
							ActiveLetterCount -= 1;
						}
						resetlettersbackground();
					}
					if (Player.Letters[key][12] == Player.Letters[key][13]){
						Player.Letters[key][1] = true;
						Player.Letters[key][11] = "";
						Player.Letters[key][12] = 0;
						Player.Letters[key][13] = 0;
						draw(key.toUpperCase(), 16);
						resetlettersbackground();
					}
				}
			}
			else if (Player.Letters[key][14] == inputfield.join("")){
				var material = 0;
				for (i=0; i < inputfield.length; i++){
					if (inputfield[i] == inputfield[i].toLowerCase()){
						if (Player.Letters[inputfield[i]][2] < inputfield.filter(x => x == inputfield[i]).length){
							material = 1;
						}
					}
					else if (inputfield[i] != inputfield[i].toLowerCase()){
						if (Player.Letters[inputfield[i].toLowerCase()][3] < inputfield.filter(x => x == inputfield[i]).length){
							material = 1;
						}
					}
				}
				if (material == 0){
					Player.Letters[key][15] += 1;
					for (i=0; i < inputfield.length; i++){
						if (inputfield[i] == inputfield[i].toLowerCase()){
							Player.Letters[inputfield[i]][2] -= 1;
						}
						else if (inputfield[i] != inputfield[i].toLowerCase()){
							Player.Letters[inputfield[i].toLowerCase()][3] -= 1;
						}
						if (ActiveLetter == inputfield[i]){
							ActiveLetterCount -= 1;
						}
						resetlettersbackground();
					}
					if (Player.Letters[key][15] == (Player.Letters[key][4]+1-Player.Letters[key][24])){
						Player.Letters[key][4] += 1;
						Player.Letters[key][15] = 0;
						if (ActiveLetter == key){
							ActiveLetterMax += 1;
						}
						if (Player.Letters[key][4] == 20){
							Player.Letters[key][14] = "";
						}
						else {
							draw(key, 14);
						}
						resetlettersbackground();
					}
				}
			}
			else if (Player.Letters[key][16] == inputfield.join("")){
				var material = 0;
				for (i=0; i < inputfield.length; i++){
					if (inputfield[i] == inputfield[i].toLowerCase()){
						if (Player.Letters[inputfield[i]][2] < inputfield.filter(x => x == inputfield[i]).length){
							material = 1;
						}
					}
					else if (inputfield[i] != inputfield[i].toLowerCase()){
						if (Player.Letters[inputfield[i].toLowerCase()][3] < inputfield.filter(x => x == inputfield[i]).length){
							material = 1;
						}
					}
				}
				if (material == 0){
					Player.Letters[key][17] += 1;
					for (i=0; i < inputfield.length; i++){
						if (inputfield[i] == inputfield[i].toLowerCase()){
							Player.Letters[inputfield[i]][2] -= 1;
						}
						else if (inputfield[i] != inputfield[i].toLowerCase()){
							Player.Letters[inputfield[i].toLowerCase()][3] -= 1;
						}
						if (ActiveLetter == inputfield[i]){
							ActiveLetterCount -= 1;
						}
						resetlettersbackground();
					}
					if (Player.Letters[key][17] == (Player.Letters[key][5]*2+2-Player.Letters[key][25])){
						Player.Letters[key][5] += 1;
						Player.Letters[key][17] = 0;
						if (ActiveLetter.toLowerCase() == key){
							ActiveLetterMax += 1;
						}
						if (Player.Letters[key][5] == 15){
							Player.Letters[key][16] = "";
						}
						else {
							draw(key.toUpperCase(), 16);
						}
						resetlettersbackground();
					}
				}
			}
		}
	}
	document.getElementById("poletekst").innerHTML = "...";
	document.getElementById("poleresult").innerHTML = "";
	inputfield = [];
}

function result(){
	if (inputfield.join("").length == 0){
		document.getElementById("poleresult").innerHTML = "&nbsp;";
	}
	else if (inputfield.join("").length == 1){
		if (Object.keys(Player.Letters).includes(inputfield.join("")) == true || Object.keys(Player.Letters).includes(inputfield.join("").toLowerCase()) == true){
			if (ActiveLetter != inputfield.join("")){
				if (inputfield.join("").toLowerCase() == inputfield.join("")){
					if (Player.Letters[inputfield.join("")][0] == true){
						if (Player.Letters[inputfield.join("")][2] < Player.Letters[inputfield.join("")][4]){
							var letter = inputfield.join("")
							document.getElementById("poleresult").innerHTML = "start collecting <b><i>" + letter + "</i></b> (" + (Player.Letters[letter][4]-Player.Letters[letter][2])+ " to full)";
						}
						else {
							document.getElementById("poleresult").innerHTML = "cannot be collected (storage full)";
						}
					}
					else {
						document.getElementById("poleresult").innerHTML = "letter not unlocked";
					}
				}
				else {
					if (Player.Letters[inputfield.join("").toLowerCase()][1] == true){
						if (Player.Letters[inputfield.join("").toLowerCase()][3] < Player.Letters[inputfield.join("").toLowerCase()][5]){
							var letter = inputfield.join("");
							document.getElementById("poleresult").innerHTML = "start collecting <b><i>" + letter + "</i></b> (" + (Player.Letters[letter.toLowerCase()][5]-Player.Letters[letter.toLowerCase()][3])+ " to full)";
						}
						else {
							document.getElementById("poleresult").innerHTML = "cannot be collected (storage full)";
						}
					}
					else {
						document.getElementById("poleresult").innerHTML = "letter not unlocked";
					}
				}
			}
			else {
				var letter = inputfield.join("")
				document.getElementById("poleresult").innerHTML = "stop collecting <b><i>" + letter;
			}
		}
		else {
			document.getElementById("poleresult").innerHTML = "unknown";
		}
	}
	else if (commands.includes(inputfield.join(""))){
		document.getElementById("poleresult").innerHTML = "command";
	}
	else if (inputfield.join("").search("grandma") == 0 && inputfield.join("").length == 7 && Player.Letters["l"][0] == true){
		document.getElementById("poleresult").innerHTML = "help grandma!";
	}
	else if (inputfield.join("").search("grandma") == 0 && inputfield.join("").length > 7 && inputfield.join("")[7] == " " && Player.Letters["l"][0] == true && inputfield.join("").search(Player.Grand.main[1]) == -1 && inputfield.join("").search(Player.Grand.main[2]) == -1 && inputfield.join("").search(Player.Grand.main[3]) == -1 && inputfield.join("").search("guess") == -1){
		document.getElementById("poleresult").innerHTML = "help grandma!";
	}
	else if (inputfield.join("").search("grandma") == 0 && inputfield.join("").length > 7 && inputfield.join("")[7] == " " && Player.Letters["l"][0] == true && inputfield.join("").search(Player.Grand.main[1]) != -1 && inputfield.join("").length == (8+Player.Grand.main[1].length)){
		document.getElementById("poleresult").innerHTML = "help grandma with easy word!";
	}
	else if (inputfield.join("").search("grandma") == 0 && inputfield.join("").length > 7 && inputfield.join("")[7] == " " && Player.Letters["l"][0] == true && inputfield.join("").search(Player.Grand.main[1]) != -1 && inputfield.join("").length > (8+Player.Grand.main[1].length)){
		document.getElementById("poleresult").innerHTML = "help grandma!";
	}
	else if (inputfield.join("").search("grandma") == 0 && inputfield.join("").length > 7 && inputfield.join("")[7] == " " && Player.Letters["l"][0] == true && inputfield.join("").search(Player.Grand.main[2]) != -1 && inputfield.join("").length == (8+Player.Grand.main[2].length)){
		document.getElementById("poleresult").innerHTML = "help grandma with hard word!";
	}
	else if (inputfield.join("").search("grandma") == 0 && inputfield.join("").length > 7 && inputfield.join("")[7] == " " && Player.Letters["l"][0] == true && inputfield.join("").search(Player.Grand.main[2]) != -1 && inputfield.join("").length > (8+Player.Grand.main[2].length)){
		document.getElementById("poleresult").innerHTML = "help grandma!";
	}
	else if (inputfield.join("").search("grandma") == 0 && inputfield.join("").length > 7 && inputfield.join("")[7] == " " && Player.Letters["l"][0] == true && inputfield.join("").search(Player.Grand.main[3]) != -1 && inputfield.join("").length == (8+Player.Grand.main[3].length) && Player.Grand.main[5] == 1){
		document.getElementById("poleresult").innerHTML = "help grandma with mystery word!";
	}
	else if (inputfield.join("").search("grandma") == 0 && inputfield.join("").length > 7 && inputfield.join("")[7] == " " && Player.Letters["l"][0] == true && inputfield.join("").search(Player.Grand.main[3]) != -1 && (inputfield.join("").length > (8+Player.Grand.main[3].length) || Player.Grand.main[5] != 1) && inputfield.join("").search("guess") == -1){
		document.getElementById("poleresult").innerHTML = "help grandma!";
	}
	else if (inputfield.join("").search("grandma") == 0 && inputfield.join("").length == 13 && inputfield.join("")[7] == " " && Player.Letters["l"][0] == true && inputfield.join("").search("guess") == 8){
		document.getElementById("poleresult").innerHTML = "guess grandma's word!";
	}
	else if (inputfield.join("").search("grandma") == 0 && inputfield.join("").length > 13 && inputfield.join("")[7] == " " && Player.Letters["l"][0] == true && inputfield.join("").search("guess") == 8 && inputfield.join("")[13] == " "){
		document.getElementById("poleresult").innerHTML = "guess grandma's word!";
	}
	else if (inputfield.join("").search("grandma") == 0 && inputfield.join("").length > 13 && inputfield.join("")[7] == " " && Player.Letters["l"][0] == true && inputfield.join("").search("guess") == 8 && inputfield.join("")[13] != " "){
		document.getElementById("poleresult").innerHTML = "help grandma!";
	}
	else {
		var sukces = 0;
		for (key in Player.Letters){
			if (Player.Letters[key][8] == inputfield.join("")){
				sukces = 1;
				if ((Player.Letters[key][10]-Player.Letters[key][9]) > 1){
					document.getElementById("poleresult").innerHTML = "unlock letter <b><i>" + key + "</i></b> (" + (Player.Letters[key][10]-Player.Letters[key][9]) + " times left)";
				}
				else {
					document.getElementById("poleresult").innerHTML = "unlock letter <b><i>" + key + "</i></b> !!!";
				}
			}
			else if (Player.Letters[key][11] == inputfield.join("")){
				sukces = 1;
				if ((Player.Letters[key][13]-Player.Letters[key][12]) > 1){
					document.getElementById("poleresult").innerHTML = "unlock letter <b><i>" + key.toUpperCase() + "</i></b> (" + (Player.Letters[key][13]-Player.Letters[key][12]) + " times left)";
				}
				else {
					document.getElementById("poleresult").innerHTML = "unlock letter <b><i>" + key.toUpperCase() + "</i></b> !!!";
				}
			}
			else if (Player.Letters[key][14] == inputfield.join("")){
				sukces = 1;
				if (((Player.Letters[key][4]+1)-Player.Letters[key][15]-Player.Letters[key][24]) > 1){
					document.getElementById("poleresult").innerHTML = "storage upgrade of letter <b><i>" + key + "</i></b> (" + ((Player.Letters[key][4]+1-Player.Letters[key][24])-Player.Letters[key][15]) + " times left)";
				}
				else {
					document.getElementById("poleresult").innerHTML = "+1 space for letter <b><i>" + key + "</i></b> !!!";
				}
			}
			else if (Player.Letters[key][16] == inputfield.join("")){
				sukces = 1;
				if (((Player.Letters[key][5]*2+2)-Player.Letters[key][17]-Player.Letters[key][25]) > 1){
					document.getElementById("poleresult").innerHTML = "storage upgrade of letter <b><i>" + key.toUpperCase() + "</i></b> (" + ((Player.Letters[key][5]*2+2-Player.Letters[key][25])-Player.Letters[key][17]) + " times left)";
				}
				else {
					document.getElementById("poleresult").innerHTML = "+1 space for letter <b><i>" + key.toUpperCase() + "</i></b> !!!";
				}
			} else {}
		}
		if (sukces == 0){
			document.getElementById("poleresult").innerHTML = "unknown";
		}
	}
}

function getletters(){
	if (ActiveLetter != ""){
		if (ActiveLetter == "~") {}
		else if (ActiveLetterCap < ((1/ActiveLetterSpeed)*100)){
			if (ActiveLetter == ActiveLetter.toLowerCase()){
				barcolors(ActiveLetter, (Player.Letters[ActiveLetter][2]/Player.Letters[ActiveLetter][4]*100));
				ActiveLetterCap += 1;
				document.getElementById(ActiveLetter+"Text").innerHTML = ActiveLetter;
				document.getElementById(ActiveLetter).style.background = "linear-gradient(to right, hsl(" + (ActiveLetterCap/((1/ActiveLetterSpeed)*100))*100 + ", 100%, 60%) " + (ActiveLetterCap/((1/ActiveLetterSpeed)*100))*100 + "%, #ffe6c3f7 0%)";
			}
			else {
				barcolors(ActiveLetter.toLowerCase(), (Player.Letters[ActiveLetter.toLowerCase()][3]/Player.Letters[ActiveLetter.toLowerCase()][5]*100));
				ActiveLetterCap += 1;
				document.getElementById(ActiveLetter.toLowerCase()+"Text").innerHTML = ActiveLetter;
				document.getElementById(ActiveLetter.toLowerCase()).style.background = "linear-gradient(to right, hsl(" + (ActiveLetterCap/((1/ActiveLetterSpeed)*100))*100 + ", 100%, 60%) " + (ActiveLetterCap/((1/ActiveLetterSpeed)*100))*100 + "%, #ffe6c3f7 0%)";
			}
		}
		else if (ActiveLetterCap >= ((1/ActiveLetterSpeed)*100)){
			if (ActiveLetter == ActiveLetter.toLowerCase()){
				var ahinorst1 = 0;
				var dl1 = 0;
				var bcfgmpuwy1 = 0;
				var jkqvxz1 = 0;
				for (let i=0; i < 8; i++){
					ahinorst1 = ahinorst1 + Player.Letters["ahinorst"[i]][18] + Player.Letters["ahinorst"[i]][19];
				}
				for (let i=0; i < 2; i++){
					dl1 = dl1 + Player.Letters["dl"[i]][18] + Player.Letters["dl"[i]][19];
				}
				for (let i=0; i < 9; i++){
					bcfgmpuwy1 = bcfgmpuwy1 + Player.Letters["bcfgmpuwy"[i]][18] + Player.Letters["bcfgmpuwy"[i]][19];
				}
				for (let i=0; i < 6; i++){
					jkqvxz1 = jkqvxz1 + Player.Letters["jkqvxz"[i]][18] + Player.Letters["jkqvxz"[i]][19];
				}
				if ((ActiveLetterCount + 2) <= ActiveLetterMax){
					ActiveLetterCount = ActiveLetterCount + 1 + Player.Letters[ActiveLetter][26];
					Player.Letters[ActiveLetter][2] = Player.Letters[ActiveLetter][2] + 1 + Player.Letters[ActiveLetter][26];
					Player.Letters[ActiveLetter][18] = Player.Letters[ActiveLetter][18] + 1 + Player.Letters[ActiveLetter][26];
					document.getElementById("Count" + ActiveLetter).style.display = "block";
					document.getElementById("Count" + ActiveLetter).innerHTML = "+"+(1+Player.Letters[ActiveLetter][26]);
				}
				else{
					ActiveLetterCount += 1;
					Player.Letters[ActiveLetter][2] += 1;
					Player.Letters[ActiveLetter][18] += 1;
					document.getElementById("Count" + ActiveLetter).style.display = "block";
					document.getElementById("Count" + ActiveLetter).innerHTML = "+1";
				}
				if (Player.Letters[ActiveLetter][18] == Player.Letters[ActiveLetter][20]){
					if (ActiveLetter != "e"){
						applycolbonus(ActiveLetter, ColBonus[ColBonus.indexOf(Player.Letters[ActiveLetter][22])]);
						Player.Letters[ActiveLetter][20] = Collections[Collections.indexOf(Player.Letters[ActiveLetter][18])+1];
						Player.Letters[ActiveLetter][22] = ColBonus[ColBonus.indexOf(Player.Letters[ActiveLetter][22])+1];
					}
					else if (Player.Letters["e"][20] != 0){
						applycolbonus("e", Player.Letters["e"][22]);
						Player.Letters["e"][20] = Collections[Collections.indexOf(Player.Letters["e"][18])+1];
					} else {Player.Letters["e"][22] = "";}
				}
				var ahinorst2 = 0;
				var dl2 = 0;
				var bcfgmpuwy2 = 0;
				var jkqvxz2 = 0;
				for (let i=0; i < 8; i++){
					ahinorst2 = ahinorst2 + Player.Letters["ahinorst"[i]][18] + Player.Letters["ahinorst"[i]][19];
				}
				for (let i=0; i < 2; i++){
					dl2 = dl2 + Player.Letters["dl"[i]][18] + Player.Letters["dl"[i]][19];
				}
				for (let i=0; i < 9; i++){
					bcfgmpuwy2 = bcfgmpuwy2 + Player.Letters["bcfgmpuwy"[i]][18] + Player.Letters["bcfgmpuwy"[i]][19];
				}
				for (let i=0; i < 6; i++){
					jkqvxz2 = jkqvxz2 + Player.Letters["jkqvxz"[i]][18] + Player.Letters["jkqvxz"[i]][19];
				}
				if (Player.Groups["ahinorst"][0] > ahinorst1 && Player.Groups["ahinorst"][0] <= ahinorst2 && Player.Groups["ahinorst"][0] != Player.Groups["ahinorst"][1]){
					Player.Groups["ahinorst"][0] = Player.Groups["ahinorst"].slice().reverse().find(el => el > ahinorst2);
					for (let i=0; i < 17; i++){
						Player.Letters["dlbcfgmpuwyjkqvxz"[i]][6] = Player.Letters["dlbcfgmpuwyjkqvxz"[i]][6]*1.1;
						Player.Letters["dlbcfgmpuwyjkqvxz"[i]][7] = Player.Letters["dlbcfgmpuwyjkqvxz"[i]][7]*1.1;
					}
				}
				else if (Player.Groups["ahinorst"][0] > ahinorst1 && Player.Groups["ahinorst"][0] <= ahinorst2 && Player.Groups["ahinorst"][0] == Player.Groups["ahinorst"][1]){
					Player.Groups["ahinorst"][0] = 0;
					for (let i=0; i < 17; i++){
						Player.Letters["dlbcfgmpuwyjkqvxz"[i]][6] = Player.Letters["dlbcfgmpuwyjkqvxz"[i]][6]*1.1;
						Player.Letters["dlbcfgmpuwyjkqvxz"[i]][7] = Player.Letters["dlbcfgmpuwyjkqvxz"[i]][7]*1.1;
					}
				}
				if (Player.Groups["dl"][0] > dl1 && Player.Groups["dl"][0] <= dl2 && Player.Groups["dl"][0] != Player.Groups["dl"][1]){
					Player.Groups["dl"][0] = Player.Groups["dl"].slice().reverse().find(el => el > dl2);
					for (let i=0; i < 15; i++){
						Player.Letters["bcfgmpuwyjkqvxz"[i]][6] = Player.Letters["bcfgmpuwyjkqvxz"[i]][6]*1.1;
						Player.Letters["bcfgmpuwyjkqvxz"[i]][7] = Player.Letters["bcfgmpuwyjkqvxz"[i]][7]*1.1;
					}
				} 
				else if (Player.Groups["dl"][0] > dl1 && Player.Groups["dl"][0] <= dl2 && Player.Groups["dl"][0] == Player.Groups["dl"][1]){
					Player.Groups["dl"][0] = 0;
					for (let i=0; i < 15; i++){
						Player.Letters["bcfgmpuwyjkqvxz"[i]][6] = Player.Letters["bcfgmpuwyjkqvxz"[i]][6]*1.1;
						Player.Letters["bcfgmpuwyjkqvxz"[i]][7] = Player.Letters["bcfgmpuwyjkqvxz"[i]][7]*1.1;
					}
				}
				if (Player.Groups["bcfgmpuwy"][0] > bcfgmpuwy1 && Player.Groups["bcfgmpuwy"][0] <= bcfgmpuwy2 && Player.Groups["bcfgmpuwy"][0] != Player.Groups["bcfgmpuwy"][1]){
					Player.Groups["bcfgmpuwy"][0] = Player.Groups["bcfgmpuwy"].slice().reverse().find(el => el > bcfgmpuwy2);
					for (let i=0; i < 6; i++){
						Player.Letters["jkqvxz"[i]][6] = Player.Letters["jkqvxz"[i]][6]*1.1;
						Player.Letters["jkqvxz"[i]][7] = Player.Letters["jkqvxz"[i]][7]*1.1;
					}
				}
				else if (Player.Groups["bcfgmpuwy"][0] > bcfgmpuwy1 && Player.Groups["bcfgmpuwy"][0] <= bcfgmpuwy2 && Player.Groups["bcfgmpuwy"][0] == Player.Groups["bcfgmpuwy"][1]){
					Player.Groups["bcfgmpuwy"][0] = 0;
					for (let i=0; i < 6; i++){
						Player.Letters["jkqvxz"[i]][6] = Player.Letters["jkqvxz"[i]][6]*1.1;
						Player.Letters["jkqvxz"[i]][7] = Player.Letters["jkqvxz"[i]][7]*1.1;
					}
				}
				if (Player.Groups["jkqvxz"][0] > jkqvxz1 && Player.Groups["jkqvxz"][0] <= jkqvxz2 && Player.Groups["jkqvxz"][0] != Player.Groups["jkqvxz"][1]){
					Player.Groups["jkqvxz"][0] = Player.Groups["jkqvxz"].slice().reverse().find(el => el > jkqvxz2);
					for (let i=0; i < 6; i++){
						Player.Letters["jkqvxz"[i]][6] = Player.Letters["jkqvxz"[i]][6]*1.1;
						Player.Letters["jkqvxz"[i]][7] = Player.Letters["jkqvxz"[i]][7]*1.1;
					}
				}
				else if (Player.Groups["jkqvxz"][0] > jkqvxz1 && Player.Groups["jkqvxz"][0] <= jkqvxz2 && Player.Groups["jkqvxz"][0] == Player.Groups["jkqvxz"][1]){
					Player.Groups["jkqvxz"][0] = 0;
					for (let i=0; i < 6; i++){
						Player.Letters["jkqvxz"[i]][6] = Player.Letters["jkqvxz"[i]][6]*1.1;
						Player.Letters["jkqvxz"[i]][7] = Player.Letters["jkqvxz"[i]][7]*1.1;
					}
				}
				checkcollection();
				document.getElementById(ActiveLetter).style.background = "#ffe6c3f7";
				var letter = ActiveLetter;
				function countnone(){
					document.getElementById("Count" + letter).style.display = "none";
				} setTimeout(countnone, 950);
				barcolors(ActiveLetter, (Player.Letters[ActiveLetter][2]/Player.Letters[ActiveLetter][4]*100));
				if (ActiveLetterCount == ActiveLetterMax){
					ActiveLetter = "~";
					function xyz(){
						ActiveLetter = "";
					}
					x = setTimeout(xyz, 950);
					ActiveLetterCount = 0;
					ActiveLetterMax = 0;
					ActiveLetterSpeed = 0;
					ActiveLetterCap = 0;
				}
				else{
					ActiveLetterCap = 0;
				}
				if (ActiveLetter == "e" && Player.tut == 0 && ActiveLetterCount >= 3){
					ActiveLetter = "~";
					function xyz(){
						ActiveLetter = "";
					}
					x = setTimeout(xyz, 950);
					ActiveLetterCount = 0;
					ActiveLetterMax = 0;
					ActiveLetterSpeed = 0;
					ActiveLetterCap = 0;
					document.getElementById("tut1").style.display = "none";
					document.getElementById("tut2").style.display = "block";
					document.getElementById("menu2").style.background = "linear-gradient(180deg, #fefffa 0%, #fffdf1 80%)";
					document.getElementById("menu2").style.cursor = "pointer";
					document.getElementById("menu2").style.filter = "blur(0)";
					Player.tut = 1;
				}
			}
			else if (ActiveLetter != ActiveLetter.toLowerCase()){
				var ahinorst1 = 0;
				var dl1 = 0;
				var bcfgmpuwy1 = 0;
				var jkqvxz1 = 0;
				for (let i=0; i < 8; i++){
					ahinorst1 = ahinorst1 + Player.Letters["ahinorst"[i]][18] + Player.Letters["ahinorst"[i]][19];
				}
				for (let i=0; i < 2; i++){
					dl1 = dl1 + Player.Letters["dl"[i]][18] + Player.Letters["dl"[i]][19];
				}
				for (let i=0; i < 9; i++){
					bcfgmpuwy1 = bcfgmpuwy1 + Player.Letters["bcfgmpuwy"[i]][18] + Player.Letters["bcfgmpuwy"[i]][19];
				}
				for (let i=0; i < 6; i++){
					jkqvxz1 = jkqvxz1 + Player.Letters["jkqvxz"[i]][18] + Player.Letters["jkqvxz"[i]][19];
				}
				if ((ActiveLetterCount + 2) <= ActiveLetterMax){
					ActiveLetterCount = ActiveLetterCount + 1 + Player.Letters[ActiveLetter.toLowerCase()][27];
					Player.Letters[ActiveLetter.toLowerCase()][3] = Player.Letters[ActiveLetter.toLowerCase()][3] + 1 + Player.Letters[ActiveLetter.toLowerCase()][27];
					Player.Letters[ActiveLetter.toLowerCase()][19] = Player.Letters[ActiveLetter.toLowerCase()][19] + 1 + Player.Letters[ActiveLetter.toLowerCase()][27];
					document.getElementById("Count" + ActiveLetter.toLowerCase()).style.display = "block";
					document.getElementById("Count" + ActiveLetter.toLowerCase()).innerHTML = "+"+(1+Player.Letters[ActiveLetter.toLowerCase()][27]);
				}
				else{
					ActiveLetterCount += 1;
					Player.Letters[ActiveLetter.toLowerCase()][3] += 1;
					Player.Letters[ActiveLetter.toLowerCase()][19] += 1;
					document.getElementById("Count" + ActiveLetter.toLowerCase()).style.display = "block";
					document.getElementById("Count" + ActiveLetter.toLowerCase()).innerHTML = "+1";
				}
				if (Player.Letters[ActiveLetter.toLowerCase()][19] == Player.Letters[ActiveLetter.toLowerCase()][21]){
					applycolbonus(ActiveLetter, ColBonus[ColBonus.indexOf(Player.Letters[ActiveLetter.toLowerCase()][23])]);
					Player.Letters[ActiveLetter.toLowerCase()][21] = Collections[Collections.indexOf(Player.Letters[ActiveLetter.toLowerCase()][19])+1];
					Player.Letters[ActiveLetter.toLowerCase()][23] = ColBonus[ColBonus.indexOf(Player.Letters[ActiveLetter.toLowerCase()][23])+1];
				}
				var ahinorst2 = 0;
				var dl2 = 0;
				var bcfgmpuwy2 = 0;
				var jkqvxz2 = 0;
				for (let i=0; i < 8; i++){
					ahinorst2 = ahinorst2 + Player.Letters["ahinorst"[i]][18] + Player.Letters["ahinorst"[i]][19];
				}
				for (let i=0; i < 2; i++){
					dl2 = dl2 + Player.Letters["dl"[i]][18] + Player.Letters["dl"[i]][19];
				}
				for (let i=0; i < 9; i++){
					bcfgmpuwy2 = bcfgmpuwy2 + Player.Letters["bcfgmpuwy"[i]][18] + Player.Letters["bcfgmpuwy"[i]][19];
				}
				for (let i=0; i < 6; i++){
					jkqvxz2 = jkqvxz2 + Player.Letters["jkqvxz"[i]][18] + Player.Letters["jkqvxz"[i]][19];
				}
				if (Player.Groups["ahinorst"][0] > ahinorst1 && Player.Groups["ahinorst"][0] <= ahinorst2 && Player.Groups["ahinorst"][0] != Player.Groups["ahinorst"][1]){
					Player.Groups["ahinorst"][0] = Player.Groups["ahinorst"].slice().reverse().find(el => el > ahinorst2);
					for (let i=0; i < 17; i++){
						Player.Letters["dlbcfgmpuwyjkqvxz"[i]][6] = Player.Letters["dlbcfgmpuwyjkqvxz"[i]][6]*1.1;
						Player.Letters["dlbcfgmpuwyjkqvxz"[i]][7] = Player.Letters["dlbcfgmpuwyjkqvxz"[i]][7]*1.1;
					}
				}
				else if (Player.Groups["ahinorst"][0] > ahinorst1 && Player.Groups["ahinorst"][0] <= ahinorst2 && Player.Groups["ahinorst"][0] == Player.Groups["ahinorst"][1]){
					Player.Groups["ahinorst"][0] = 0;
					for (let i=0; i < 17; i++){
						Player.Letters["dlbcfgmpuwyjkqvxz"[i]][6] = Player.Letters["dlbcfgmpuwyjkqvxz"[i]][6]*1.1;
						Player.Letters["dlbcfgmpuwyjkqvxz"[i]][7] = Player.Letters["dlbcfgmpuwyjkqvxz"[i]][7]*1.1;
					}
				}
				if (Player.Groups["dl"][0] > dl1 && Player.Groups["dl"][0] <= dl2 && Player.Groups["dl"][0] != Player.Groups["dl"][1]){
					Player.Groups["dl"][0] = Player.Groups["dl"].slice().reverse().find(el => el > dl2);
					for (let i=0; i < 15; i++){
						Player.Letters["bcfgmpuwyjkqvxz"[i]][6] = Player.Letters["bcfgmpuwyjkqvxz"[i]][6]*1.1;
						Player.Letters["bcfgmpuwyjkqvxz"[i]][7] = Player.Letters["bcfgmpuwyjkqvxz"[i]][7]*1.1;
					}
				} 
				else if (Player.Groups["dl"][0] > dl1 && Player.Groups["dl"][0] <= dl2 && Player.Groups["dl"][0] == Player.Groups["dl"][1]){
					Player.Groups["dl"][0] = 0;
					for (let i=0; i < 15; i++){
						Player.Letters["bcfgmpuwyjkqvxz"[i]][6] = Player.Letters["bcfgmpuwyjkqvxz"[i]][6]*1.1;
						Player.Letters["bcfgmpuwyjkqvxz"[i]][7] = Player.Letters["bcfgmpuwyjkqvxz"[i]][7]*1.1;
					}
				}
				if (Player.Groups["bcfgmpuwy"][0] > bcfgmpuwy1 && Player.Groups["bcfgmpuwy"][0] <= bcfgmpuwy2 && Player.Groups["bcfgmpuwy"][0] != Player.Groups["bcfgmpuwy"][1]){
					Player.Groups["bcfgmpuwy"][0] = Player.Groups["bcfgmpuwy"].slice().reverse().find(el => el > bcfgmpuwy2);
					for (let i=0; i < 6; i++){
						Player.Letters["jkqvxz"[i]][6] = Player.Letters["jkqvxz"[i]][6]*1.1;
						Player.Letters["jkqvxz"[i]][7] = Player.Letters["jkqvxz"[i]][7]*1.1;
					}
				}
				else if (Player.Groups["bcfgmpuwy"][0] > bcfgmpuwy1 && Player.Groups["bcfgmpuwy"][0] <= bcfgmpuwy2 && Player.Groups["bcfgmpuwy"][0] == Player.Groups["bcfgmpuwy"][1]){
					Player.Groups["bcfgmpuwy"][0] = 0;
					for (let i=0; i < 6; i++){
						Player.Letters["jkqvxz"[i]][6] = Player.Letters["jkqvxz"[i]][6]*1.1;
						Player.Letters["jkqvxz"[i]][7] = Player.Letters["jkqvxz"[i]][7]*1.1;
					}
				}
				if (Player.Groups["jkqvxz"][0] > jkqvxz1 && Player.Groups["jkqvxz"][0] <= jkqvxz2 && Player.Groups["jkqvxz"][0] != Player.Groups["jkqvxz"][1]){
					Player.Groups["jkqvxz"][0] = Player.Groups["jkqvxz"].slice().reverse().find(el => el > jkqvxz2);
					for (let i=0; i < 6; i++){
						Player.Letters["jkqvxz"[i]][6] = Player.Letters["jkqvxz"[i]][6]*1.1;
						Player.Letters["jkqvxz"[i]][7] = Player.Letters["jkqvxz"[i]][7]*1.1;
					}
				}
				else if (Player.Groups["jkqvxz"][0] > jkqvxz1 && Player.Groups["jkqvxz"][0] <= jkqvxz2 && Player.Groups["jkqvxz"][0] == Player.Groups["jkqvxz"][1]){
					Player.Groups["jkqvxz"][0] = 0;
					for (let i=0; i < 6; i++){
						Player.Letters["jkqvxz"[i]][6] = Player.Letters["jkqvxz"[i]][6]*1.1;
						Player.Letters["jkqvxz"[i]][7] = Player.Letters["jkqvxz"[i]][7]*1.1;
					}
				}
				checkcollection();
				document.getElementById(ActiveLetter.toLowerCase()).style.background = "#ffe6c3f7";
				var letter = ActiveLetter.toLowerCase();
				function countnone(){
					document.getElementById("Count" + letter).style.display = "none";
				} setTimeout(countnone, 950);
				barcolors(ActiveLetter.toLowerCase(), (Player.Letters[ActiveLetter.toLowerCase()][3]/Player.Letters[ActiveLetter.toLowerCase()][5]*100));
				if (ActiveLetterCount == ActiveLetterMax){
					ActiveLetter = "~";
					function xyz(){
						ActiveLetter = "";
					}
					x = setTimeout(xyz, 950);
					ActiveLetterCount = 0;
					ActiveLetterMax = 0;
					ActiveLetterSpeed = 0;
					ActiveLetterCap = 0;
				}
				else{
					ActiveLetterCap = 0;
				}
			}
		}
		var tempchar = characters.substring(26,52);
		for (let i=0; i < tempchar.length; i++){
			if (letter && letter.toLowerCase() != tempchar[i]){
				document.getElementById("Count" + tempchar[i]).style.display = "none";
			}
		}
	} 
	else {
		var tempchar = characters.substring(26, 52);
		for (let i=0; i < tempchar.length; i++){
			document.getElementById("Count" + tempchar[i]).style.display = "none";
		}
	}
} setInterval(getletters, 10);

function checkstore(){
	var Unlocked = [];
	for (key in Player.Letters){
		if (Player.Letters[key][0] == true){
			Unlocked.push(key);
		}
		if (Player.Letters[key][1] == true){
			Unlocked.push(key.toUpperCase());
		}
	}
	for (let key in Player.Letters){
		var abc = document.getElementById("eTextstore").innerHTML;
		if (abc == "e" && Player.Letters[key][0] == true){
			document.getElementById(key + "store").style.transition = "all 0s ease";
			document.getElementById(key + "store").style.background = "#6eff61f7";
			document.getElementById(key + "storebar1").style.background = "#6eff61f7";
			document.getElementById(key + "storebar1info1").innerHTML = "Max";
			document.getElementById(key + "storebar1").innerHTML = "&nbsp;";
			if (Player.Letters[key][14] != "" && Player.Letters[key][4] < 9){
				document.getElementById(key + "storebar2info1").innerHTML = Player.Letters[key][4];
				document.getElementById(key + "storebar2").innerHTML = Player.Letters[key][14];
				document.getElementById(key + "storebar2").style.background = "linear-gradient(to right, hsl(" + (Player.Letters[key][15]/(Player.Letters[key][4] + 1-Player.Letters[key][24]))*100 + ", 100%, 60%) " + (Player.Letters[key][15]/(Player.Letters[key][4] + 1-Player.Letters[key][24]))*100 + "%, #f6f6f6 0%)";
				document.getElementById(key + "storebar2info2").innerHTML = Player.Letters[key][4] + 1;
			}
			else if (Player.Letters[key][14] != "" && Player.Letters[key][4] == 9){
				document.getElementById(key + "storebar2info1").innerHTML = "&nbsp;&nbsp;" + Player.Letters[key][4];
				document.getElementById(key + "storebar2").innerHTML = Player.Letters[key][14];
				document.getElementById(key + "storebar2").style.background = "linear-gradient(to right, hsl(" + (Player.Letters[key][15]/(Player.Letters[key][4] + 1-Player.Letters[key][24]))*100 + ", 100%, 60%) " + (Player.Letters[key][15]/(Player.Letters[key][4] + 1-Player.Letters[key][24]))*100 + "%, #f6f6f6 0%)";
				document.getElementById(key + "storebar2info2").innerHTML = Player.Letters[key][4] + 1;
			}
			else if (Player.Letters[key][14] != "" && Player.Letters[key][4] < 19){
				document.getElementById(key + "storebar2info1").innerHTML = Player.Letters[key][4];
				document.getElementById(key + "storebar2").innerHTML = Player.Letters[key][14];
				document.getElementById(key + "storebar2").style.background = "linear-gradient(to right, hsl(" + (Player.Letters[key][15]/(Player.Letters[key][4] + 1-Player.Letters[key][24]))*100 + ", 100%, 60%) " + (Player.Letters[key][15]/(Player.Letters[key][4] + 1-Player.Letters[key][24]))*100 + "%, #f6f6f6 0%)";
				document.getElementById(key + "storebar2info2").innerHTML = Player.Letters[key][4] + 1;
			}
			else if (Player.Letters[key][14] != "" && Player.Letters[key][4] == 19){
				document.getElementById(key + "storebar2info1").innerHTML = "&nbsp;&nbsp;&nbsp;" + Player.Letters[key][4];
				document.getElementById(key + "storebar2").innerHTML = Player.Letters[key][14];
				document.getElementById(key + "storebar2").style.background = "linear-gradient(to right, hsl(" + (Player.Letters[key][15]/(Player.Letters[key][4] + 1-Player.Letters[key][24]))*100 + ", 100%, 60%) " + (Player.Letters[key][15]/(Player.Letters[key][4] + 1-Player.Letters[key][24]))*100 + "%, #f6f6f6 0%)";
				document.getElementById(key + "storebar2info2").innerHTML = "Max";
			}
			else if (Player.Letters[key][4] == 20){
				document.getElementById(key + "storebar2info1").innerHTML = "Max";
				document.getElementById(key + "storebar2").innerHTML = "&nbsp;";
				document.getElementById(key + "storebar2").style.background = "#6eff61f7";
				document.getElementById(key + "storebar2info2").innerHTML = "Max";
			}
		}
		else if (abc == "e" && Player.Letters[key][0] == false){
			document.getElementById(key + "store").style.transition = "all 0s ease";
			var is = 1;
			for (let i=0; i < Player.Letters[key][8].length; i++){
				if (Unlocked.includes(Player.Letters[key][8][i]) == false){
					is = 0;
				}
			}
			if (is == 1){
				document.getElementById(key + "store").style.background = "#fbff3c";
			}
			else {
				document.getElementById(key + "store").style.background = "#fffbf4f7";
			}
			document.getElementById(key + "storebar1info1").innerHTML = "&ensp;&ensp;&nbsp;0";
			document.getElementById(key + "storebar1").innerHTML = Player.Letters[key][8];
			document.getElementById(key + "storebar1").style.background = "linear-gradient(to right, hsl(" + Player.Letters[key][9]/(Player.Letters[key][10])*100 + ", 100%, 60%) " + Player.Letters[key][9]/(Player.Letters[key][10])*100 + "%, #f6f6f6 0%)";
			document.getElementById(key + "storebar2info1").innerHTML = "&nbsp;";
			document.getElementById(key + "storebar2").innerHTML = "???";
			document.getElementById(key + "storebar2").style.background = "#f6f6f6";
			document.getElementById(key + "storebar2info2").innerHTML = "&nbsp;";
		}
		else if (abc == "E" && Player.Letters[key][1] == true){
			document.getElementById(key + "store").style.transition = "all 0s ease";
			document.getElementById(key + "store").style.background = "#6eff61f7";
			document.getElementById(key + "storebar1").style.background = "#6eff61f7";
			document.getElementById(key + "storebar1info1").innerHTML = "Max";
			document.getElementById(key + "storebar1").innerHTML = "&nbsp;";
			if (Player.Letters[key][16] != "" && Player.Letters[key][5] < 9){
				document.getElementById(key + "storebar2info1").innerHTML = Player.Letters[key][5];
				document.getElementById(key + "storebar2").innerHTML = Player.Letters[key][16];
				document.getElementById(key + "storebar2").style.background = "linear-gradient(to right, hsl(" + (Player.Letters[key][17]/(Player.Letters[key][5]*2 + 2-Player.Letters[key][25]))*100 + ", 100%, 60%) " + (Player.Letters[key][17]/(Player.Letters[key][5]*2 + 2-Player.Letters[key][25]))*100 + "%, #f6f6f6 0%)";
				document.getElementById(key + "storebar2info2").innerHTML = Player.Letters[key][5] + 1;
			}
			else if (Player.Letters[key][16] != "" && Player.Letters[key][5] == 9){
				document.getElementById(key + "storebar2info1").innerHTML = "&nbsp;&nbsp;" + Player.Letters[key][5];
				document.getElementById(key + "storebar2").innerHTML = Player.Letters[key][16];
				document.getElementById(key + "storebar2").style.background = "linear-gradient(to right, hsl(" + (Player.Letters[key][17]/(Player.Letters[key][5]*2 + 2-Player.Letters[key][25]))*100 + ", 100%, 60%) " + (Player.Letters[key][17]/(Player.Letters[key][5]*2 + 2-Player.Letters[key][25]))*100 + "%, #f6f6f6 0%)";
				document.getElementById(key + "storebar2info2").innerHTML = Player.Letters[key][5] + 1;
			}
			else if (Player.Letters[key][16] != "" && Player.Letters[key][5] < 14){
				document.getElementById(key + "storebar2info1").innerHTML = Player.Letters[key][5];
				document.getElementById(key + "storebar2").innerHTML = Player.Letters[key][16];
				document.getElementById(key + "storebar2").style.background = "linear-gradient(to right, hsl(" + (Player.Letters[key][17]/(Player.Letters[key][5]*2 + 2-Player.Letters[key][25]))*100 + ", 100%, 60%) " + (Player.Letters[key][17]/(Player.Letters[key][5]*2 + 2-Player.Letters[key][25]))*100 + "%, #f6f6f6 0%)";
				document.getElementById(key + "storebar2info2").innerHTML = Player.Letters[key][5] + 1;
			}
			else if (Player.Letters[key][16] != "" && Player.Letters[key][5] == 14){
				document.getElementById(key + "storebar2info1").innerHTML = "&nbsp;&nbsp;&nbsp;" + Player.Letters[key][5];
				document.getElementById(key + "storebar2").innerHTML = Player.Letters[key][16];
				document.getElementById(key + "storebar2").style.background = "linear-gradient(to right, hsl(" + (Player.Letters[key][17]/(Player.Letters[key][5]*2 + 2-Player.Letters[key][25]))*100 + ", 100%, 60%) " + (Player.Letters[key][17]/(Player.Letters[key][5]*2 + 2-Player.Letters[key][25]))*100 + "%, #f6f6f6 0%)";
				document.getElementById(key + "storebar2info2").innerHTML = "Max";
			}
			else if (Player.Letters[key][5] == 15){
				document.getElementById(key + "storebar2info1").innerHTML = "Max";
				document.getElementById(key + "storebar2").innerHTML = "&nbsp;";
				document.getElementById(key + "storebar2").style.background = "#6eff61f7";
				document.getElementById(key + "storebar2info2").innerHTML = "Max";
			}
		}
		else if (abc == "E" && Player.Letters[key][1] == false){
			document.getElementById(key + "store").style.transition = "all 0s ease";
			var is = 1;
			for (let i=0; i < Player.Letters[key][11].length; i++){
				if (Unlocked.includes(Player.Letters[key][11][i]) == false){
					is = 0;
				}
			}
			if (is == 1){
				document.getElementById(key + "store").style.background = "#fbff3c";
			}
			else {
				document.getElementById(key + "store").style.background = "#fffbf4f7";
			}
			document.getElementById(key + "storebar1info1").innerHTML = "&ensp;&ensp;&nbsp;0";
			document.getElementById(key + "storebar1").innerHTML = Player.Letters[key][11];
			document.getElementById(key + "storebar1").style.background = "linear-gradient(to right, hsl(" + Player.Letters[key][12]/(Player.Letters[key][13])*100 + ", 100%, 60%) " + Player.Letters[key][12]/(Player.Letters[key][13])*100 + "%, #f6f6f6 0%)";
			document.getElementById(key + "storebar2info1").innerHTML = "&nbsp;";
			document.getElementById(key + "storebar2").innerHTML = "???";
			document.getElementById(key + "storebar2").style.background = "#f6f6f6";
			document.getElementById(key + "storebar2info2").innerHTML = "&nbsp;";
		}
	}
}

function checkcollection(){
	document.getElementById("collectionletters").innerHTML = "";
	var Collected = {};
	for (key in Player.Letters){
		if (Player.Letters[key][0] == true){
			Collected[key] = Player.Letters[key][18];
		}
		if (Player.Letters[key][1] == true){
			Collected[key.toUpperCase()] = Player.Letters[key][19];
		}
	}
	var items = Object.keys(Collected).map(
		(key) => { return [key, Collected[key]] });
	items.sort(
		(first, second) => { return first[1] - second[1] }
	);
	var keys = items.map(
		(e) => { return e[0] });
	for (i in keys){
		var div = document.createElement("div");
		div.id = "col" + keys[keys.length - i-1];
		if (keys[keys.length - i-1] == keys[keys.length - i-1].toLowerCase()){
			if (Player.Letters[keys[keys.length - i-1]][20] != 0){
				if (keys[keys.length - i-1] == "e"){
					div.innerHTML = '<b style="font-size: 20px">'+keys[keys.length - i-1]+'</b><br/>Collected:<br/><b>'+Player.Letters[keys[keys.length - i-1]][18]+'</b>/'+Player.Letters[keys[keys.length - i-1]][20]+'<br/>Next bonus:<br/><b style="font-size: 9.5px">'+Player.Letters[keys[keys.length - i-1]][22]+'</b>';
				}
				else{
					div.innerHTML = '<b style="font-size: 20px">'+keys[keys.length - i-1]+'</b><br/>Collected:<br/><b>'+Player.Letters[keys[keys.length - i-1]][18]+'</b>/'+Player.Letters[keys[keys.length - i-1]][20]+'<br/>Next bonus:<br/><b>'+Player.Letters[keys[keys.length - i-1]][22]+'</b>';
				}
				if (Player.Letters[keys[keys.length-i-1]][20] == Collections[0]){
					var prev = 0;
				}
				else{
					var prev = Collections[Collections.indexOf(Player.Letters[keys[keys.length-i-1]][20])-1];
				}
				div.style.background = "linear-gradient(to top, #bdffa5 "+((Player.Letters[keys[keys.length - i-1]][18]-prev)/(Player.Letters[keys[keys.length - i-1]][20]-prev))*100+"%, transparent 0%)";
			}
			else{
				div.innerHTML = '<b style="font-size: 20px">'+keys[keys.length - i-1]+'</b><br/>Collected:<br/><b>'+Player.Letters[keys[keys.length - i-1]][18]+'</b><br/>Maxed out<br/>&nbsp;';
				div.style.background = "#a5f5ff";
			}
		}
		else{
			if (Player.Letters[keys[keys.length - i-1].toLowerCase()][21] != 0){
				div.innerHTML = '<b style="font-size: 20px">'+keys[keys.length - i-1]+'</b><br/>Collected:<br/><b>'+Player.Letters[keys[keys.length - i-1].toLowerCase()][19]+'</b>/'+Player.Letters[keys[keys.length - i-1].toLowerCase()][21]+'<br/>Next bonus:<br/><b>'+Player.Letters[keys[keys.length - i-1].toLowerCase()][23]+'</b>';
				if (Player.Letters[keys[keys.length-i-1].toLowerCase()][21] == Collections[0]){
					var prev = 0;
				}
				else{
					var prev = Collections[Collections.indexOf(Player.Letters[keys[keys.length-i-1].toLowerCase()][21])-1];
				}
				div.style.background = "linear-gradient(to top, #bdffa5 "+((Player.Letters[keys[keys.length - i-1].toLowerCase()][19]-prev)/(Player.Letters[keys[keys.length - i-1].toLowerCase()][21]-prev))*100+"%, transparent 0%)";
			}
			else{
				div.innerHTML = '<b style="font-size: 20px">'+keys[keys.length - i-1]+'</b><br/>Collected:<br/><b>'+Player.Letters[keys[keys.length - i-1].toLowerCase()][19]+'</b><br/>Maxed out<br/>&nbsp;';
				div.style.background = "#a5f5ff";
			}
		}
		div.className = "colletters";
		document.getElementById("collectionletters").appendChild(div);
	}
	var ahinorst = 0;
	var dl = 0;
	var bcfgmpuwy = 0;
	var jkqvxz = 0;
	for (let i=0; i < 8; i++){
		ahinorst = ahinorst + Player.Letters["ahinorst"[i]][18] + Player.Letters["ahinorst"[i]][19];
	}
	for (let i=0; i < 2; i++){
		dl = dl + Player.Letters["dl"[i]][18] + Player.Letters["dl"[i]][19];
	}
	for (let i=0; i < 9; i++){
		bcfgmpuwy = bcfgmpuwy + Player.Letters["bcfgmpuwy"[i]][18] + Player.Letters["bcfgmpuwy"[i]][19];
	}
	for (let i=0; i < 6; i++){
		jkqvxz = jkqvxz + Player.Letters["jkqvxz"[i]][18] + Player.Letters["jkqvxz"[i]][19];
	}
	if (ahinorst != 0){var ahinorstprev = Player.Groups["ahinorst"].find(el => el <= ahinorst);}else{var ahinorstprev = 0;};
	if (dl != 0){var dlprev = Player.Groups["dl"].find(el => el <= dl);}else{var dlprev = 0;};
	if (bcfgmpuwy != 0){var bcfgmpuwyprev = Player.Groups["bcfgmpuwy"].find(el => el <= bcfgmpuwy);}else{var bcfgmpuwyprev = 0;};
	if (jkqvxz != 0){var jkqvxzprev = Player.Groups["jkqvxz"].find(el => el <= jkqvxz);}else{var jkqvxzprev = 0;};
	if (Player.Groups["ahinorst"][0] != 0){
		document.getElementById("colgroupsbar1").innerHTML = "<b>"+ahinorst+"</b>/"+Player.Groups["ahinorst"][0]+"<br/><span>Next bonus: Speed x1.1 for letters from all groups below</span>";
		document.getElementById("colgroupsbar1").style.background = "linear-gradient(90deg, #ffc979 "+((ahinorst-ahinorstprev)/(Player.Groups["ahinorst"][0]-ahinorstprev)*100)+"%, #ffe9c7 "+((ahinorst-ahinorstprev)/(Player.Groups["ahinorst"][0]-ahinorstprev)*100)+"%)";
	}
	else{
		document.getElementById("colgroupsbar1").innerHTML = "<b style='font-size: 17px;'>"+ahinorst+"</b>";
		document.getElementById("colgroupsbar1").style.background = "#ffc979";
	}
	if (Player.Groups["dl"][0] != 0){
		document.getElementById("colgroupsbar2").innerHTML = "<b>"+dl+"</b>/"+Player.Groups["dl"][0]+"<br/><span>Next bonus: Speed x1.1 for letters from all groups below</span>";
		document.getElementById("colgroupsbar2").style.background = "linear-gradient(90deg, #9dff78 "+((dl-dlprev)/(Player.Groups["dl"][0]-dlprev)*100)+"%, #d9ffca "+((dl-dlprev)/(Player.Groups["dl"][0]-dlprev)*100)+"%)";
	}
	else{
		document.getElementById("colgroupsbar2").innerHTML = "<b style='font-size: 17px;'>"+dl+"</b>";
		document.getElementById("colgroupsbar2").style.background = "#9dff78";
	}
	if (Player.Groups["bcfgmpuwy"][0] != 0){
		document.getElementById("colgroupsbar3").innerHTML = "<b>"+bcfgmpuwy+"</b>/"+Player.Groups["bcfgmpuwy"][0]+"<br/><span>Next bonus: Speed x1.1 for letters from all groups below</span>";
		document.getElementById("colgroupsbar3").style.background = "linear-gradient(90deg, #7ee1ff "+((bcfgmpuwy-bcfgmpuwyprev)/(Player.Groups["bcfgmpuwy"][0]-bcfgmpuwyprev)*100)+"%, #d9f6ff "+((bcfgmpuwy-bcfgmpuwyprev)/(Player.Groups["bcfgmpuwy"][0]-bcfgmpuwyprev)*100)+"%)";
	}
	else{
		document.getElementById("colgroupsbar3").innerHTML = "<b style='font-size: 17px;'>"+bcfgmpuwy+"</b>";
		document.getElementById("colgroupsbar3").style.background = "#7ee1ff";
	}
	if (Player.Groups["jkqvxz"][0] != 0){
		document.getElementById("colgroupsbar4").innerHTML = "<b>"+jkqvxz+"</b>/"+Player.Groups["jkqvxz"][0]+"<br/><span>Next bonus: Speed x1.1 for letters from this group</span>";
		document.getElementById("colgroupsbar4").style.background = "linear-gradient(90deg, #f1a8ff "+((jkqvxz-jkqvxzprev)/(Player.Groups["jkqvxz"][0]-jkqvxzprev)*100)+"%, #fce8ff "+((jkqvxz-jkqvxzprev)/(Player.Groups["jkqvxz"][0]-jkqvxzprev)*100)+"%)";
	}
	else{
		document.getElementById("colgroupsbar4").innerHTML = "<b style='font-size: 17px;'>"+jkqvxz+"</b>";
		document.getElementById("colgroupsbar4").style.background = "#f1a8ff";
	}
}

function applycolbonus(letter, bonus){
	if (letter == letter.toLowerCase()){
		if (bonus == "Score x2"){
			Player.Letters[letter][28] = Player.Letters[letter][28]*2;
		}
		else if (bonus == "Speed x1.2"){
			Player.Letters[letter][6] = Player.Letters[letter][6]*1.2;
			if (ActiveLetter == letter){
				ActiveLetterSpeed = Player.Letters[letter][6];
			}
		}
		else if (bonus == "-2 storage cost"){
			Player.Letters[letter][24] += 2;
			if ((Player.Letters[letter][4]+1-Player.Letters[letter][24]-Player.Letters[letter][15]) <= 0){
				Player.Letters[letter][4] += 1;
				Player.Letters[letter][15] = 0;
				if (ActiveLetter == letter){
					ActiveLetterMax += 1;
				}
				if (Player.Letters[letter][4] == 20){
					Player.Letters[letter][14] = "";
				}
				else {
					draw(letter, 14);
				}
				resetlettersbackground();
			}
		}
		else if (bonus == "Speed x1.3"){
			Player.Letters[letter][6] = Player.Letters[letter][6]*1.3;
			if (ActiveLetter == letter){
				ActiveLetterSpeed = Player.Letters[letter][6];
			}
		}
		else if (bonus == "-3 storage cost"){
			Player.Letters[letter][24] += 3;
			if ((Player.Letters[letter][4]+1-Player.Letters[letter][24]-Player.Letters[letter][15]) <= 0){
				Player.Letters[letter][4] += 1;
				Player.Letters[letter][15] = 0;
				if (ActiveLetter == letter){
					ActiveLetterMax += 1;
				}
				if (Player.Letters[letter][4] == 20){
					Player.Letters[letter][14] = "";
				}
				else {
					draw(letter, 14);
				}
				resetlettersbackground();
			}
		}
		else if (bonus == "+1 mined letter"){
			Player.Letters[letter][26] += 1;
		} 
		else if (bonus == "Overall speed x1.02"){
			for (key in Player.Letters){
				Player.Letters[key][6] = Player.Letters[key][6]*1.02;
				Player.Letters[key][7] = Player.Letters[key][7]*1.02;
				if (ActiveLetter == key){
					ActiveLetterSpeed = Player.Letters[letter][6];
				}
				else if (ActiveLetter.toLowerCase() == key){
					ActiveLetterSpeed = Player.Letters[letter][7];
				}
			}
		} else {}
	}
	else if (letter != letter.toLowerCase()){
		if (bonus == "Score x2"){
			Player.Letters[letter][29] = Player.Letters[letter][29]*2;
		}
		else if (bonus == "Speed x1.2"){
			Player.Letters[letter.toLowerCase()][7] = Player.Letters[letter.toLowerCase()][7]*1.2;
			if (ActiveLetter == letter){
				ActiveLetterSpeed = Player.Letters[letter.toLowerCase()][7];
			}
		}
		else if (bonus == "-2 storage cost"){
			Player.Letters[letter.toLowerCase()][25] += 2;
			if ((Player.Letters[letter.toLowerCase()][5]+1-Player.Letters[letter.toLowerCase()][25]-Player.Letters[letter.toLowerCase()][17]) <= 0){
				Player.Letters[letter.toLowerCase()][5] += 1;
				Player.Letters[letter.toLowerCase()][17] = 0;
				if (ActiveLetter == letter){
					ActiveLetterMax += 1;
				}
				if (Player.Letters[letter.toLowerCase()][5] == 20){
					Player.Letters[letter.toLowerCase()][16] = "";
				}
				else {
					draw(letter, 16);
				}
				resetlettersbackground();
			}
		}
		else if (bonus == "Speed x1.3"){
			Player.Letters[letter.toLowerCase()][7] = Player.Letters[letter.toLowerCase()][7]*1.3;
			if (ActiveLetter == letter){
				ActiveLetterSpeed = Player.Letters[letter.toLowerCase()][7];
			}
		}
		else if (bonus == "-3 storage cost"){
			Player.Letters[letter.toLowerCase()][25] += 3;
			if ((Player.Letters[letter.toLowerCase()][5]+1-Player.Letters[letter.toLowerCase()][25]-Player.Letters[letter.toLowerCase()][17]) <= 0){
				Player.Letters[letter.toLowerCase()][5] += 1;
				Player.Letters[letter.toLowerCase()][17] = 0;
				if (ActiveLetter == letter){
					ActiveLetterMax += 1;
				}
				if (Player.Letters[letter.toLowerCase()][5] == 20){
					Player.Letters[letter.toLowerCase()][16] = "";
				}
				else {
					draw(letter, 16);
				}
				resetlettersbackground();
			}
		}
		else if (bonus == "+1 mined letter"){
			Player.Letters[letter.toLowerCase()][27] += 1;
		} else {}
	}
}

function draw(letter, number){
	var lista = [];
	for (let key in Player.Letters){
		if (Player.Letters[key][8] != ""){
			lista.push(Player.Letters[key][8]);
		}
		if (Player.Letters[key][11] != ""){
			lista.push(Player.Letters[key][11]);
		}
		if (Player.Letters[key][14] != ""){
			lista.push(Player.Letters[key][14]);
		}
		if (Player.Letters[key][16] != ""){
			lista.push(Player.Letters[key][16]);
		}
	}
	if (letter == "e"){
		if (number == 14){
			var str = "aed";
			do {
				var los = str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)];
			} while (lista.includes(los) == true);
			Player.Letters[letter][14] = los;
		}
	}
	else if (letter == "a" || letter == "h" || letter == "i" || letter == "n" || letter == "o" || letter == "r" || letter == "s" || letter == "t"){
		if (number == 14){
			var str = "eahinorst";
			do {
				var los = str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)];
			} while (lista.includes(los) == true);
			Player.Letters[letter][14] = los;
		}
	}
	else if (letter == "d" || letter == "l"){
		if (number == 14){
			var str = "dlhinors";
			do {
				var los = str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)];
			} while (lista.includes(los) == true);
			Player.Letters[letter][14] = los;
		}
	}
	else if (letter == "b" || letter == "c" || letter == "f" || letter == "g" || letter == "m" || letter == "p" || letter == "u" || letter == "w" || letter == "y"){
		if (number == 14){
			var str = "dlbcfgmpuwy";
			do {
				var los = str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)];
			} while (lista.includes(los) == true);
			Player.Letters[letter][14] = los;
		}
	}
	else if (letter == "j" || letter == "k" || letter == "q" || letter == "v" || letter == "x" || letter == "z"){
		if (number == 14){
			var str = "cpbmjkqvxz";
			do {
				var los = str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)];
			} while (lista.includes(los) == true);
			Player.Letters[letter][14] = los;
		}
	}
	else if (letter == "E"){
		if (number == 16){
			var str = "xqzE";
			do {
				var los = str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)];
			} while (lista.includes(los) == true);
			Player.Letters[letter.toLowerCase()][16] = los;
		}
	}
	else if (letter == "A" || letter == "H" || letter == "I" || letter == "N" || letter == "O" || letter == "R" || letter == "S" || letter == "T"){
		if (number == 16){
			var str = "EAHINORST";
			do {
				var los = str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)];
			} while (lista.includes(los) == true);
			Player.Letters[letter.toLowerCase()][16] = los;
		}
	}
	else if (letter == "D" || letter == "L"){
		if (number == 16){
			var str = "DLHINORS";
			do {
				var los = str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)];
			} while (lista.includes(los) == true);
			Player.Letters[letter.toLowerCase()][16] = los;
		}
	}
	else if (letter == "B" || letter == "C" || letter == "F" || letter == "G" || letter == "M" || letter == "P" || letter == "U" || letter == "W" || letter == "Y"){
		if (number == 16){
			var str = "DLBCFGMPUWY";
			do {
				var los = str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)];
			} while (lista.includes(los) == true);
			Player.Letters[letter.toLowerCase()][16] = los;
		}
	}
	else if (letter == "J" || letter == "K" || letter == "Q" || letter == "V" || letter == "X" || letter == "Z"){
		if (number == 16){
			var str = "CPBMJKQVXZ";
			do {
				var los = str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)] + str[Math.floor(Math.random() * str.length)];
			} while (lista.includes(los) == true);
			Player.Letters[letter.toLowerCase()][16] = los;
		}
	} else {}
}

function getupper(letter){ // 1 --> !
	if (letter == "1"){
		return "!";
	}
	else if (letter == "2"){
		return "@";
	}
	else if (letter == "3"){
		return "#";
	}
	else if (letter == "4"){
		return "$";
	}
	else if (letter == "5"){
		return "%";
	}
	else if (letter == "6"){
		return "^";
	}
	else if (letter == "7"){
		return "&";
	}
	else if (letter == "8"){
		return "*";
	}
	else if (letter == "9"){
		return "(";
	}
	else if (letter == "0"){
		return ")";
	}
	else if (letter == "-"){
		return "_";
	}
	else if (letter == "="){
		return "+";
	}
	else if (letter == "["){
		return "{";
	}
	else if (letter == "]"){
		return "}";
	}
	else if (letter == ";"){
		return ":";
	}
	else if (letter == "'"){
		return '"';
	}
	else if (letter == ","){
		return "<";
	}
	else if (letter == "."){
		return ">";
	}
	else if (letter == "/"){
		return "?";
	} else {}
}

function grandtimer(){
	if (Player.Letters["l"][0] == true){
		Player.Grand.main[0] -= 1;
		var min = Math.floor(Player.Grand.main[0]/60);
		var sec = (Player.Grand.main[0] - min*60);
		if (sec >= 10){
			document.getElementById("grandtimer").innerHTML = "Refresh in <b>" + min + ":" + sec + "</b>";
		}
		else{
			document.getElementById("grandtimer").innerHTML = "Refresh in <b>" + min + ":0" + sec + "</b>";
		}
		if (Player.Grand.main[0] <= 0){
			grandreset();
		}
		grandsmallinfo();
		if (document.getElementById("grandmamain").style.display == "block"){
			document.getElementById("grandinfo").style.display = "none";
		}
	}
}setInterval(grandtimer, 1000)

function granddisplay(){
	var min = Math.floor(Player.Grand.main[0]/60);
	var sec = (Player.Grand.main[0] - min*60);
	if (sec >= 10){
		document.getElementById("grandtimer").innerHTML = "Refresh in <b>" + min + ":" + sec + "</b>";
	}
	else{
		document.getElementById("grandtimer").innerHTML = "Refresh in <b>" + min + ":0" + sec + "</b>";
	}
	document.getElementById("grandword1").innerHTML = '<b>'+Player.Grand.main[1]+'</b> (+5)<br>&nbsp;<div id="grandword1info1"><i>EASY WORD</i></div><div id="grandword1info2"><i>Typed: '+Player.Grand.main[6]+'/5</i></div>';
	document.getElementById("grandword2").innerHTML = '<b>'+Player.Grand.main[2]+'</b> (+15)<br>&nbsp;<div id="grandword2info1"><i>HARD WORD</i></div><div id="grandword2info2"><i>Typed: '+Player.Grand.main[7]+'/3</i></div>';
	if (Player.Grand.main[5] == 0){
		document.getElementById("grandword3").innerHTML = '<b>'+("*".repeat(Player.Grand.main[3].length))+'</b> (+10)<br><span>'+Player.Grand.main[4]+'</span><div id="grandword2info1"><i>MYSTERY WORD</i></div><div id="grandword3info2"><i>Typed: '+Player.Grand.main[8]+'/3</i></div>';
	}
	else{
		document.getElementById("grandword3").innerHTML = '<b>'+Player.Grand.main[3]+'</b> (+10)<br><span>'+Player.Grand.main[4]+'</span><div id="grandword2info1"><i>MYSTERY WORD</i></div><div id="grandword3info2"><i>Typed: '+Player.Grand.main[8]+'/3</i></div>';
	}
	if (Player.Grand.main[6] == 5){
		document.getElementById("grandword1").style.background = "#69ff5c";
	} else {document.getElementById("grandword1").style.background = "#fffcea";}
	if (Player.Grand.main[7] == 3){
		document.getElementById("grandword2").style.background = "#69ff5c";
	} else {document.getElementById("grandword2").style.background = "#fffcea";}
	if (Player.Grand.main[8] == 3){
		document.getElementById("grandword3").style.background = "#69ff5c";
	} else {document.getElementById("grandword3").style.background = "#fffcea";}
	var points = Player.Grand.main[6]*5 + Player.Grand.main[7]*15 + Player.Grand.main[8]*10;
	document.getElementById("grandbarpercent").innerHTML = points+"/100";
	document.getElementById("grandbar").style.background = "linear-gradient(to right, hsl("+(points+15)+", 100%, 68%) "+points+"%, #f8f7f2 0%)";
	if (points >= 40){
		document.getElementById("grandbonus1").style.background = "#69ff5c";
	} else {document.getElementById("grandbonus1").style.background = "#fffcea";}
	if (points >= 80){
		document.getElementById("grandbonus2").style.background = "#69ff5c";
	} else {document.getElementById("grandbonus2").style.background = "#fffcea";}
	if (points >= 100){
		document.getElementById("grandbonus3").style.background = "#69ff5c";
	} else {document.getElementById("grandbonus3").style.background = "#fffcea";}
	document.getElementById("grandbonus1").innerHTML = "40% bonus: &nbsp;&nbsp;"+Player.Grand.nextbonus[0];
	document.getElementById("grandbonus2").innerHTML = "80% bonus: &nbsp;&nbsp;"+Player.Grand.nextbonus[1];
	document.getElementById("grandbonus3").innerHTML = "100% bonus: "+Player.Grand.nextbonus[2];
	if (Player.Grand.activebonus.length == 1){
		document.getElementById("bonusinfo").style.display = "block";
		document.getElementById("bonusinfoperk1").innerHTML = Player.Grand.activebonus[0];
		document.getElementById("bonusinfoperk2").innerHTML = null;
		document.getElementById("bonusinfoperk3").innerHTML = null;
	}
	else if (Player.Grand.activebonus.length == 2){
		document.getElementById("bonusinfo").style.display = "block";
		document.getElementById("bonusinfoperk1").innerHTML = Player.Grand.activebonus[0];
		document.getElementById("bonusinfoperk2").innerHTML = Player.Grand.activebonus[1];
		document.getElementById("bonusinfoperk3").innerHTML = null;
	}
	else if (Player.Grand.activebonus.length == 3){
		document.getElementById("bonusinfo").style.display = "block";
		document.getElementById("bonusinfoperk1").innerHTML = Player.Grand.activebonus[0];
		document.getElementById("bonusinfoperk2").innerHTML = Player.Grand.activebonus[1];
		document.getElementById("bonusinfoperk3").innerHTML = Player.Grand.activebonus[2].slice(0, -30);
	}
	else{
		document.getElementById("bonusinfo").style.display = "none";
	}
}

function grandtestword(n){
	var Unlocked = [];
	for (key in Player.Letters){
		if (Player.Letters[key][0] == true){
			Unlocked.push(key);
		}
		if (Player.Letters[key][1] == true){
			Unlocked.push(key.toUpperCase());
		}
	}
	var is = 1;
	for (let i=0; i < Player.Grand.main[n].length; i++){
		if (Unlocked.includes(Player.Grand.main[n][i]) == false && Player.Grand.main[n][i] != " "){
			is = 0;
		}
	}
	if (is == 1){
		var material = 0;
		inputfield = Player.Grand.main[n].split("");
		for (i=0; i < inputfield.length; i++){
			if (inputfield[i] == inputfield[i].toLowerCase() && inputfield[i] != " "){
				if (Player.Letters[inputfield[i]][2] < inputfield.filter(x => x == inputfield[i]).length){
					material = 1;
				}
			}
			else if (inputfield[i] != inputfield[i].toLowerCase() && inputfield[i] != " "){
				if (Player.Letters[inputfield[i].toLowerCase()][3] < inputfield.filter(x => x == inputfield[i]).length){
					material = 1;
				}
			}
		}
		if (material == 0){
			Player.Grand.main[n+5] += 1;
			for (i=0; i < inputfield.length; i++){
				if (inputfield[i] == inputfield[i].toLowerCase() && inputfield[i] != " "){
					Player.Letters[inputfield[i]][2] -= 1;
				}
				else if (inputfield[i] != inputfield[i].toLowerCase() && inputfield[i] != " "){
					Player.Letters[inputfield[i].toLowerCase()][3] -= 1;
				}
				if (ActiveLetter == inputfield[i] && inputfield[i] != " "){
					ActiveLetterCount -= 1;
				}
				resetlettersbackground();
			}
		}
	}
}

function grandreset(){
	Player.Grand.main[0] = 420;
	Player.Grand.easyused.push(Player.Grand.main[1]);
	Player.Grand.hardused.push(Player.Grand.main[2]);
	if (Player.Grand.main[5] == 1 && Player.Grand.mysteryused.includes(Player.Grand.main[3]) == false){
		Player.Grand.mysteryused.push(Player.Grand.main[3]);
	}
	if (Player.Grand.easyused.length < 4 && Player.Grand.easy.length > 0){
		var newword = Player.Grand.easy[Math.floor(Math.random() * Player.Grand.easy.length)]
		Player.Grand.main[1] = newword;
		Player.Grand.easy = Player.Grand.easy.filter(item => item !== newword);
	}
	else if (Player.Grand.easyused.length >= 4 || Player.Grand.easy.length == 0){
		var words = Player.Grand.easy.concat(Player.Grand.easyused).slice(0,-3);
		var newword = words[Math.floor(Math.random() * words.length)];
		Player.Grand.main[1] = newword;
		Player.Grand.easy = Player.Grand.easy.filter(item => item !== newword);
		Player.Grand.easyused = Player.Grand.easyused.filter(item => item !== newword);
	}
	if (Player.Grand.hardused.length < 4 && Player.Grand.hard.length > 0){
		var newword = Player.Grand.hard[Math.floor(Math.random() * Player.Grand.hard.length)]
		Player.Grand.main[2] = newword;
		Player.Grand.hard = Player.Grand.hard.filter(item => item !== newword);
	}
	else if (Player.Grand.hardused.length >= 4 || Player.Grand.hard.length == 0){
		var words = Player.Grand.hard.concat(Player.Grand.hardused).slice(0,-3);
		var newword = words[Math.floor(Math.random() * words.length)];
		Player.Grand.main[2] = newword;
		Player.Grand.hard = Player.Grand.hard.filter(item => item !== newword);
		Player.Grand.hardused = Player.Grand.hardused.filter(item => item !== newword);
	}
	if (Player.Grand.main[5] == 1 && Player.Grand.mystery.length != Player.Grand.mysteryused.length){
		var words = Player.Grand.mystery.filter(item => Player.Grand.mysteryused.includes(item) == false)
		var newword = words[Math.floor(Math.random() * words.length)];
		Player.Grand.main[3] = newword;
		Player.Grand.main[4] = Player.Grand.mysterydsc[Player.Grand.mystery.indexOf(newword)];
	}
	else{
		var words = Player.Grand.mystery.filter(item => item !== Player.Grand.main[3])
		var newword = words[Math.floor(Math.random() * words.length)];
		Player.Grand.main[3] = newword;
		Player.Grand.main[4] = Player.Grand.mysterydsc[Player.Grand.mystery.indexOf(newword)];
	}
	if (Player.Grand.mysteryused.includes(Player.Grand.main[3])){
		Player.Grand.main[5] = 1;
	}
	else{
		Player.Grand.main[5] = 0;
	}
	var points = Player.Grand.main[6]*5 + Player.Grand.main[7]*15 + Player.Grand.main[8]*10;
	granddeletebonus();
	if (points >= 40 && points < 80){
		grandgivebonus(Player.Grand.nextbonus[0]);
	}
	else if (points >= 80 && points < 100){
		grandgivebonus(Player.Grand.nextbonus[0], Player.Grand.nextbonus[1]);
	}
	else if (points >= 100){
		grandgivebonus(Player.Grand.nextbonus[0], Player.Grand.nextbonus[1], Player.Grand.nextbonus[2]);
	}
	var bonuse = Player.Grand.bonusese.filter(item => item !== Player.Grand.nextbonus[0]);
	Player.Grand.nextbonus[0] = bonuse[Math.floor(Math.random() * bonuse.length)];
	var bonush = Player.Grand.bonusesh.filter(item => item !== Player.Grand.nextbonus[1]);
	Player.Grand.nextbonus[1] = bonush[Math.floor(Math.random() * bonush.length)];
	var bonusm = Player.Grand.bonusesm.filter(item => item !== Player.Grand.nextbonus[2]);
	Player.Grand.nextbonus[2] = bonusm[Math.floor(Math.random() * bonusm.length)];
	Player.Grand.main[6] = 0;
	Player.Grand.main[7] = 0;
	Player.Grand.main[8] = 0;
	grandsmallinfo();
	if (document.getElementById("grandmamain").style.display == "block"){
		document.getElementById("grandinfo").style.display = "none";
	}
	granddisplay();
}

function granddeletebonus(){
	for (let i=0; i < Player.Grand.activebonus.length; i++){
		if (Player.Grand.activebonus[i] == "<b>Score x1.3</b> for all letters from group <b><i>ahinorst</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["ahinorst"[k]][28] = Player.Letters["ahinorst"[k]][28]/1.3;
				Player.Letters["ahinorst"[k]][29] = Player.Letters["ahinorst"[k]][29]/1.3;
			}
		}
		else if (Player.Grand.activebonus[i] == "<b>Score x1.4</b> for all letters from group <b><i>ahinorst</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["ahinorst"[k]][28] = Player.Letters["ahinorst"[k]][28]/1.4;
				Player.Letters["ahinorst"[k]][29] = Player.Letters["ahinorst"[k]][29]/1.4;
			}
		}
		else if (Player.Grand.activebonus[i] == "<b>Score x1.5</b> for all letters from group <b><i>ahinorst</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["ahinorst"[k]][28] = Player.Letters["ahinorst"[k]][28]/1.5;
				Player.Letters["ahinorst"[k]][29] = Player.Letters["ahinorst"[k]][29]/1.5;
			}
		}
		else if (Player.Grand.activebonus[i] == "<b>Score x1.6</b> for all letters from group <b><i>ahinorst</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["ahinorst"[k]][28] = Player.Letters["ahinorst"[k]][28]/1.6;
				Player.Letters["ahinorst"[k]][29] = Player.Letters["ahinorst"[k]][29]/1.6;
			}
		}
		else if (Player.Grand.activebonus[i] == "<b>Score x1.3</b> for all letters from group <b><i>dl</i></b> and group <b><i>jkqvxz</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["dljkqvxz"[k]][28] = Player.Letters["dljkqvxz"[k]][28]/1.3;
				Player.Letters["dljkqvxz"[k]][29] = Player.Letters["dljkqvxz"[k]][29]/1.3;
			}
		}
		else if (Player.Grand.activebonus[i] == "<b>Score x1.4</b> for all letters from group <b><i>dl</i></b> and group <b><i>jkqvxz</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["dljkqvxz"[k]][28] = Player.Letters["dljkqvxz"[k]][28]/1.4;
				Player.Letters["dljkqvxz"[k]][29] = Player.Letters["dljkqvxz"[k]][29]/1.4;
			}
		}
		else if (Player.Grand.activebonus[i] == "<b>Score x1.5</b> for all letters from group <b><i>dl</i></b> and group <b><i>jkqvxz</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["dljkqvxz"[k]][28] = Player.Letters["dljkqvxz"[k]][28]/1.5;
				Player.Letters["dljkqvxz"[k]][29] = Player.Letters["dljkqvxz"[k]][29]/1.5;
			}
		}
		else if (Player.Grand.activebonus[i] == "<b>Score x1.3</b> for all letters from group <b><i>bcfgmpuwy</i></b>"){
			for (let k=0; k < 9; k++){
				Player.Letters["bcfgmpuwy"[k]][28] = Player.Letters["bcfgmpuwy"[k]][28]/1.3;
				Player.Letters["bcfgmpuwy"[k]][29] = Player.Letters["bcfgmpuwy"[k]][29]/1.3;
			}
		}
		else if (Player.Grand.activebonus[i] == "<b>Score x1.4</b> for all letters from group <b><i>bcfgmpuwy</i></b>"){
			for (let k=0; k < 9; k++){
				Player.Letters["bcfgmpuwy"[k]][28] = Player.Letters["bcfgmpuwy"[k]][28]/1.4;
				Player.Letters["bcfgmpuwy"[k]][29] = Player.Letters["bcfgmpuwy"[k]][29]/1.4;
			}
		}
		else if (Player.Grand.activebonus[i] == "<b>Score x1.5</b> for all letters from group <b><i>bcfgmpuwy</i></b>"){
			for (let k=0; k < 9; k++){
				Player.Letters["bcfgmpuwy"[k]][28] = Player.Letters["bcfgmpuwy"[k]][28]/1.5;
				Player.Letters["bcfgmpuwy"[k]][29] = Player.Letters["bcfgmpuwy"[k]][29]/1.5;
			}
		}
		else if (Player.Grand.activebonus[i] == "<b>Speed x1.2</b> for all letters from group <b><i>ahinorst</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["ahinorst"[k]][6] = Player.Letters["ahinorst"[k]][6]/1.2;
				Player.Letters["ahinorst"[k]][7] = Player.Letters["ahinorst"[k]][7]/1.2;
			}
		}
		else if (Player.Grand.activebonus[i] == "<b>Speed x1.3</b> for all letters from group <b><i>ahinorst</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["ahinorst"[k]][6] = Player.Letters["ahinorst"[k]][6]/1.3;
				Player.Letters["ahinorst"[k]][7] = Player.Letters["ahinorst"[k]][7]/1.3;
			}
		}
		else if (Player.Grand.activebonus[i] == "<b>Speed x1.4</b> for all letters from group <b><i>ahinorst</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["ahinorst"[k]][6] = Player.Letters["ahinorst"[k]][6]/1.4;
				Player.Letters["ahinorst"[k]][7] = Player.Letters["ahinorst"[k]][7]/1.4;
			}
		}
		else if (Player.Grand.activebonus[i] == "<b>Speed x1.2</b> for all letters from group <b><i>dl</i></b> and group <b><i>jkqvxz</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["dljkqvxz"[k]][6] = Player.Letters["dljkqvxz"[k]][6]/1.2;
				Player.Letters["dljkqvxz"[k]][7] = Player.Letters["dljkqvxz"[k]][7]/1.2;
			}
		}
		else if (Player.Grand.activebonus[i] == "<b>Speed x1.3</b> for all letters from group <b><i>dl</i></b> and group <b><i>jkqvxz</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["dljkqvxz"[k]][6] = Player.Letters["dljkqvxz"[k]][6]/1.3;
				Player.Letters["dljkqvxz"[k]][7] = Player.Letters["dljkqvxz"[k]][7]/1.3;
			}
		}
		else if (Player.Grand.activebonus[i] == "<b>Speed x1.2</b> for all letters from group <b><i>bcfgmpuwy</i></b>"){
			for (let k=0; k < 9; k++){
				Player.Letters["bcfgmpuwy"[k]][6] = Player.Letters["bcfgmpuwy"[k]][6]/1.2;
				Player.Letters["bcfgmpuwy"[k]][7] = Player.Letters["bcfgmpuwy"[k]][7]/1.2;
			}
		}
		else if (Player.Grand.activebonus[i] == "<b>Speed x1.3</b> for all letters from group <b><i>bcfgmpuwy</i></b>"){
			for (let k=0; k < 9; k++){
				Player.Letters["bcfgmpuwy"[k]][6] = Player.Letters["bcfgmpuwy"[k]][6]/1.3;
				Player.Letters["bcfgmpuwy"[k]][7] = Player.Letters["bcfgmpuwy"[k]][7]/1.3;
			}
		}
		else if (Player.Grand.activebonus[i] == "<b>Overall speed x1.05</b> and instant <b>+500 score</b>"){
			for (let k=0; k < 26; k++){
				Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][6] = Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][6]/1.05;
				Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][7] = Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][7]/1.05;
			}
		}
		else if (Player.Grand.activebonus[i] == "<b>Overall speed x1.1</b> and instant <b>+400 score</b>"){
			for (let k=0; k < 26; k++){
				Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][6] = Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][6]/1.1;
				Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][7] = Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][7]/1.1;
			}
		}
		else if (Player.Grand.activebonus[i] == "<b>Overall speed x1.15</b> and instant <b>+400 score</b>"){
			for (let k=0; k < 26; k++){
				Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][6] = Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][6]/1.15;
				Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][7] = Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][7]/1.15;
			}
		}
		else if (Player.Grand.activebonus[i] == "<b>Overall speed x1.2</b> and instant <b>+300 score</b>"){
			for (let k=0; k < 26; k++){
				Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][6] = Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][6]/1.2;
				Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][7] = Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][7]/1.2;
			}
		}
	}
	Player.Grand.activebonus = [];
}

function grandgivebonus(a, b, c){
	if (a && b && c){
		var l = [a, b, c];
		Player.Grand.activebonus.push(a);
		Player.Grand.activebonus.push(b);
		Player.Grand.activebonus.push(c);
	}
	else if (a && b){
		var l = [a, b];
		Player.Grand.activebonus.push(a);
		Player.Grand.activebonus.push(b);
	}
	else if (a){
		var l = [a];
		Player.Grand.activebonus.push(a);
	}
	for (let i=0; i < l.length; i++){
		if (l[i] == "<b>Score x1.3</b> for all letters from group <b><i>ahinorst</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["ahinorst"[k]][28] = Player.Letters["ahinorst"[k]][28]*1.3;
				Player.Letters["ahinorst"[k]][29] = Player.Letters["ahinorst"[k]][29]*1.3;
			}
		}
		else if (l[i] == "<b>Score x1.4</b> for all letters from group <b><i>ahinorst</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["ahinorst"[k]][28] = Player.Letters["ahinorst"[k]][28]*1.4;
				Player.Letters["ahinorst"[k]][29] = Player.Letters["ahinorst"[k]][29]*1.4;
			}
		}
		else if (l[i] == "<b>Score x1.5</b> for all letters from group <b><i>ahinorst</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["ahinorst"[k]][28] = Player.Letters["ahinorst"[k]][28]*1.5;
				Player.Letters["ahinorst"[k]][29] = Player.Letters["ahinorst"[k]][29]*1.5;
			}
		}
		else if (l[i] == "<b>Score x1.6</b> for all letters from group <b><i>ahinorst</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["ahinorst"[k]][28] = Player.Letters["ahinorst"[k]][28]*1.6;
				Player.Letters["ahinorst"[k]][29] = Player.Letters["ahinorst"[k]][29]*1.6;
			}
		}
		else if (l[i] == "<b>Score x1.3</b> for all letters from group <b><i>dl</i></b> and group <b><i>jkqvxz</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["dljkqvxz"[k]][28] = Player.Letters["dljkqvxz"[k]][28]*1.3;
				Player.Letters["dljkqvxz"[k]][29] = Player.Letters["dljkqvxz"[k]][29]*1.3;
			}
		}
		else if (l[i] == "<b>Score x1.4</b> for all letters from group <b><i>dl</i></b> and group <b><i>jkqvxz</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["dljkqvxz"[k]][28] = Player.Letters["dljkqvxz"[k]][28]*1.4;
				Player.Letters["dljkqvxz"[k]][29] = Player.Letters["dljkqvxz"[k]][29]*1.4;
			}
		}
		else if (l[i] == "<b>Score x1.5</b> for all letters from group <b><i>dl</i></b> and group <b><i>jkqvxz</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["dljkqvxz"[k]][28] = Player.Letters["dljkqvxz"[k]][28]*1.5;
				Player.Letters["dljkqvxz"[k]][29] = Player.Letters["dljkqvxz"[k]][29]*1.5;
			}
		}
		else if (l[i] == "<b>Score x1.3</b> for all letters from group <b><i>bcfgmpuwy</i></b>"){
			for (let k=0; k < 9; k++){
				Player.Letters["bcfgmpuwy"[k]][28] = Player.Letters["bcfgmpuwy"[k]][28]*1.3;
				Player.Letters["bcfgmpuwy"[k]][29] = Player.Letters["bcfgmpuwy"[k]][29]*1.3;
			}
		}
		else if (l[i] == "<b>Score x1.4</b> for all letters from group <b><i>bcfgmpuwy</i></b>"){
			for (let k=0; k < 9; k++){
				Player.Letters["bcfgmpuwy"[k]][28] = Player.Letters["bcfgmpuwy"[k]][28]*1.4;
				Player.Letters["bcfgmpuwy"[k]][29] = Player.Letters["bcfgmpuwy"[k]][29]*1.4;
			}
		}
		else if (l[i] == "<b>Score x1.5</b> for all letters from group <b><i>bcfgmpuwy</i></b>"){
			for (let k=0; k < 9; k++){
				Player.Letters["bcfgmpuwy"[k]][28] = Player.Letters["bcfgmpuwy"[k]][28]*1.5;
				Player.Letters["bcfgmpuwy"[k]][29] = Player.Letters["bcfgmpuwy"[k]][29]*1.5;
			}
		}
		else if (l[i] == "<b>Speed x1.2</b> for all letters from group <b><i>ahinorst</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["ahinorst"[k]][6] = Player.Letters["ahinorst"[k]][6]*1.2;
				Player.Letters["ahinorst"[k]][7] = Player.Letters["ahinorst"[k]][7]*1.2;
			}
		}
		else if (l[i] == "<b>Speed x1.3</b> for all letters from group <b><i>ahinorst</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["ahinorst"[k]][6] = Player.Letters["ahinorst"[k]][6]*1.3;
				Player.Letters["ahinorst"[k]][7] = Player.Letters["ahinorst"[k]][7]*1.3;
			}
		}
		else if (l[i] == "<b>Speed x1.4</b> for all letters from group <b><i>ahinorst</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["ahinorst"[k]][6] = Player.Letters["ahinorst"[k]][6]*1.4;
				Player.Letters["ahinorst"[k]][7] = Player.Letters["ahinorst"[k]][7]*1.4;
			}
		}
		else if (l[i] == "<b>Speed x1.2</b> for all letters from group <b><i>dl</i></b> and group <b><i>jkqvxz</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["dljkqvxz"[k]][6] = Player.Letters["dljkqvxz"[k]][6]*1.2;
				Player.Letters["dljkqvxz"[k]][7] = Player.Letters["dljkqvxz"[k]][7]*1.2;
			}
		}
		else if (l[i] == "<b>Speed x1.3</b> for all letters from group <b><i>dl</i></b> and group <b><i>jkqvxz</i></b>"){
			for (let k=0; k < 8; k++){
				Player.Letters["dljkqvxz"[k]][6] = Player.Letters["dljkqvxz"[k]][6]*1.3;
				Player.Letters["dljkqvxz"[k]][7] = Player.Letters["dljkqvxz"[k]][7]*1.3;
			}
		}
		else if (l[i] == "<b>Speed x1.2</b> for all letters from group <b><i>bcfgmpuwy</i></b>"){
			for (let k=0; k < 9; k++){
				Player.Letters["bcfgmpuwy"[k]][6] = Player.Letters["bcfgmpuwy"[k]][6]*1.2;
				Player.Letters["bcfgmpuwy"[k]][7] = Player.Letters["bcfgmpuwy"[k]][7]*1.2;
			}
		}
		else if (l[i] == "<b>Speed x1.3</b> for all letters from group <b><i>bcfgmpuwy</i></b>"){
			for (let k=0; k < 9; k++){
				Player.Letters["bcfgmpuwy"[k]][6] = Player.Letters["bcfgmpuwy"[k]][6]*1.3;
				Player.Letters["bcfgmpuwy"[k]][7] = Player.Letters["bcfgmpuwy"[k]][7]*1.3;
			}
		}
		else if (l[i] == "<b>Overall speed x1.05</b> and instant <b>+500 score</b>"){
			Player.Score += 500;
			if (Player.Score.toFixed(1).slice(-1) == 0){
				document.getElementById("scoredisplay").innerHTML = "Score: <b>" + Player.Score.toFixed(0) + "</b>";
			}
			else{
				document.getElementById("scoredisplay").innerHTML = "Score: <b>" + Player.Score.toFixed(1) + "</b>";
			}
			for (let k=0; k < 26; k++){
				Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][6] = Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][6]*1.05;
				Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][7] = Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][7]*1.05;
			}
		}
		else if (l[i] == "<b>Overall speed x1.1</b> and instant <b>+400 score</b>"){
			Player.Score += 400;
			if (Player.Score.toFixed(1).slice(-1) == 0){
				document.getElementById("scoredisplay").innerHTML = "Score: <b>" + Player.Score.toFixed(0) + "</b>";
			}
			else{
				document.getElementById("scoredisplay").innerHTML = "Score: <b>" + Player.Score.toFixed(1) + "</b>";
			}
			for (let k=0; k < 26; k++){
				Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][6] = Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][6]*1.1;
				Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][7] = Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][7]*1.1;
			}
		}
		else if (l[i] == "<b>Overall speed x1.15</b> and instant <b>+400 score</b>"){
			Player.Score += 400;
			if (Player.Score.toFixed(1).slice(-1) == 0){
				document.getElementById("scoredisplay").innerHTML = "Score: <b>" + Player.Score.toFixed(0) + "</b>";
			}
			else{
				document.getElementById("scoredisplay").innerHTML = "Score: <b>" + Player.Score.toFixed(1) + "</b>";
			}
			for (let k=0; k < 26; k++){
				Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][6] = Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][6]*1.15;
				Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][7] = Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][7]*1.15;
			}
		}
		else if (l[i] == "<b>Overall speed x1.2</b> and instant <b>+300 score</b>"){
			Player.Score += 300;
			if (Player.Score.toFixed(1).slice(-1) == 0){
				document.getElementById("scoredisplay").innerHTML = "Score: <b>" + Player.Score.toFixed(0) + "</b>";
			}
			else{
				document.getElementById("scoredisplay").innerHTML = "Score: <b>" + Player.Score.toFixed(1) + "</b>";
			}
			for (let k=0; k < 26; k++){
				Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][6] = Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][6]*1.2;
				Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][7] = Player.Letters["abcdefghijklmnopqrstuvwxyz"[k]][7]*1.2;
			}
		}
	}
}

function grandsmallinfo(){
	if (Player.Letters["l"][0] == true && menuclicked != 0){
		document.getElementById("grandinfo").style.display = "block";
		if ((Player.Grand.main[0] - Math.floor(Player.Grand.main[0]/60)*60) >= 10){
			document.getElementById("grandinfohead").innerHTML = "Current grandma words (" + Math.floor(Player.Grand.main[0]/60) + ":" + (Player.Grand.main[0] - Math.floor(Player.Grand.main[0]/60)*60) + ")";
		}
		else{
			document.getElementById("grandinfohead").innerHTML = "Current grandma words (" + Math.floor(Player.Grand.main[0]/60) + ":0" + (Player.Grand.main[0] - Math.floor(Player.Grand.main[0]/60)*60) + ")";
		}
		document.getElementById("grandinfoword1").innerHTML = Player.Grand.main[1];
		document.getElementById("grandinfoword2").innerHTML = Player.Grand.main[2];
		if (Player.Grand.main[5] == 1){
			document.getElementById("grandinfoword3").innerHTML = Player.Grand.main[3];
		}
		else{
			document.getElementById("grandinfoword3").innerHTML = "*".repeat(Player.Grand.main[3].length);
		}
		document.getElementById("grandinfoword1").style.background = "linear-gradient(to right, hsl("+(Player.Grand.main[6]/5*100)+", 100%, 60%) "+(Player.Grand.main[6]/5*100)+"%, #f8f7f2 0%)";
		document.getElementById("grandinfoword2").style.background = "linear-gradient(to right, hsl("+(Player.Grand.main[7]/3*100)+", 100%, 60%) "+(Player.Grand.main[7]/3*100)+"%, #f8f7f2 0%)";
		document.getElementById("grandinfoword3").style.background = "linear-gradient(to right, hsl("+(Player.Grand.main[8]/3*100)+", 100%, 60%) "+(Player.Grand.main[8]/3*100)+"%, #f8f7f2 0%)";
	}
}

function entername(){
	var string = document.getElementById("nick").value;
	var is = 1;
	if (string.length >= 4){
		for (let i=0; i < string.length; i++){
			if ("qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM".includes(string[i])){
				is = 1;
			}
			else{
				is = 0;
			}
		}
	}
	else{
		is = 0;
	}
	if (is == 1){
		Player.nick = string;
		socket.emit('newplayer', Player);
	}
	else{
		document.getElementById("nameerror").innerHTML = "min. 4 characters (letters or numbers)"
		document.getElementById("logbutton").style = "margin-top: -29px; line-height: 20px;";
		document.getElementById("nameerror").style.display = "block";
		document.getElementById("nick").value = "";
	}
}

document.getElementById("AlertConfirm").onclick = function(){
	if (AlertType == "Info"){
		document.getElementById("Alert").style = "display: none;";
	}
	else if (AlertType == "Reset"){
		reset();
		document.getElementById("Alert").style = "display: none;";
	}
	AlertType = "";
}

window.addEventListener('resize', loadsize);
document.addEventListener("keyup", keyup);
document.addEventListener("keydown", keydown);

function save(){
	if (Player.nick != ""){
		var Save =
		{
			Player: Player
		}
		localStorage.setItem("Saved", JSON.stringify(Save));
		document.getElementById("saveinfo").style.display = "block";
		document.getElementById("saveinfo").style.animation = "slide .2s linear 1";
		ssave = setTimeout(slidesave, 1500);
		socket.emit('LogPlayer', Player);
	}
}
setInterval(save, 30000);

document.getElementById("saveinfo").onclick = function(){
	document.getElementById("Secrets1").style = "text-decoration: auto";
	if (document.getElementById("Secrets1").innerHTML.slice(-10) != "(Unlocked)"){
		document.getElementById("Secrets1").innerHTML += " (Unlocked)";
	}
	Player.Secrets[0] = true;
	var Save =
	{
		Player: Player
	}
	localStorage.setItem("Saved", JSON.stringify(Save));
	try{clearTimeout(ssave);}catch{};
	try{clearTimeout(hsave);}catch{};
	slidesave();
	setTimeout(boop, 200)
	function boop(){
		document.getElementById("saveinfo").style.display = "block";
		document.getElementById("saveinfo").innerHTML = "BOOP!";
		document.getElementById("saveinfo").style.animation = "slide .2s linear 1";
		var ssave = setTimeout(slidesave, 500);
	}
}
function slidesave(){
	document.getElementById("saveinfo").style.animation = "slideout .2s linear 1";
	hsave = setTimeout(hidesave, 190);
}
function hidesave(){
	document.getElementById("saveinfo").innerHTML = "Auto saved"
	document.getElementById("saveinfo").style.display = "none";
}

function load(){
	var SavedGame = JSON.parse(localStorage.getItem("Saved"));
	if (SavedGame){
		if (typeof SavedGame.Player !== "undefined") PlayerLoaded = SavedGame.Player;
		if (Object.keys(PlayerLoaded) === Object.keys(Player) && Object.keys(PlayerLoaded.Letters) === Object.keys(Player.Letters) && PlayerLoaded.Letters["a"].length == Player.Letters["a"].length){
			Player = PlayerLoaded;
		}
		else {
			Object.entries(Player).forEach(([key, value]) => {
				if (Object.keys(PlayerLoaded).includes(key) == false){
					PlayerLoaded[key] = value;
				} else{}
			});
			Object.entries(Player.Letters).forEach(([key, value]) => {
				if (Object.keys(PlayerLoaded.Letters).includes(key) == false){
					PlayerLoaded.Letters[key] = value;
				} else{}
			});
			for (key in Player.Letters){
				var a = Player.Letters[key].length;
				var b = PlayerLoaded.Letters[key].length;
				if (a != b){
					var c = a-b;
					for (let i=c; i > 0; i--){
						PlayerLoaded.Letters[key].push(Player.Letters[key][a-i]);
					}
				}
			}
			Player = PlayerLoaded;
		}
	}
	if (Player.nick == "cynka02"){
		Player.Secrets[2] = true;
		var Save =
		{
			Player: Player
		}
		localStorage.setItem("Saved", JSON.stringify(Save));
	}
	if (Player.nick == ""){
		document.getElementById("Login").style.display = "block";
	}
	else{
		document.getElementById("namedisplay").innerHTML = "Playing as: <i><b>" + Player.nick + "</b></i>";
	}
	document.getElementById("audio").volume = Player.volume2;
	var letterkeys = Object.keys(Player.Letters);
	for (let i=0; i < letterkeys.length; i++){
		if (Player.Letters[letterkeys[i]][0] == true){
			barcolors(letterkeys[i], ((Player.Letters[letterkeys[i]][2]/Player.Letters[letterkeys[i]][4])*100));
		}
		else{
			document.getElementById(letterkeys[i]+"Bar").style = "display: block; opacity: 0;";
		}
	}
	if (Player.Score.toFixed(1).slice(-1) == 0){
		document.getElementById("scoredisplay").innerHTML = "Score: <b>" + Player.Score.toFixed(0) + "</b>";
	}
	else{
		document.getElementById("scoredisplay").innerHTML = "Score: <b>" + Player.Score.toFixed(1) + "</b>";
	}
	if (Player.Secrets[0]){
		document.getElementById("Secrets1").style = "text-decoration: auto";
		document.getElementById("Secrets1").innerHTML += " (Unlocked)";
	}
	if (Player.Secrets[1]){
		document.getElementById("Secrets2").style = "text-decoration: auto";
		document.getElementById("Secrets2").innerHTML += " (Unlocked)";
	}
	if (Player.Secrets[2]){
		document.getElementById("Secrets3").style = "text-decoration: auto";
		document.getElementById("Secrets3").innerHTML += " (Unlocked)";
	}
	if (Player.tut == 0 && Player.nick != ""){
		document.getElementById("tut1").style.display = "block";
		document.getElementById("menu1").style.transform = "translateY(1%)";
		document.getElementById("menu1").getElementsByTagName("img")[0].style.transform = "scale(1.15,1.15)";
		document.getElementById("menu1").getElementsByTagName("span")[0].style.transform = "translateY(-10px)";
		document.getElementById("info").style.display = "none";
		document.getElementById("keyboard").style.display = "block";
		document.getElementById("pole").style.display = "block";
		menuclicked = 1;
		loadsize();
		document.getElementById("menu2").style.filter = "blur(3px)";
		document.getElementById("menu3").style.filter = "blur(3px)";
		document.getElementById("menu4").style.filter = "blur(3px)";
		document.getElementById("menu5").style.filter = "blur(3px)";
	}
	else if (Player.tut == 1 && Player.nick != ""){
		document.getElementById("tut2").style.display = "block";
		document.getElementById("menu1").style.transform = "translateY(1%)";
		document.getElementById("menu1").getElementsByTagName("img")[0].style.transform = "scale(1.15,1.15)";
		document.getElementById("menu1").getElementsByTagName("span")[0].style.transform = "translateY(-10px)";
		document.getElementById("info").style.display = "none";
		document.getElementById("keyboard").style.display = "block";
		document.getElementById("pole").style.display = "block";
		menuclicked = 1;
		loadsize();
		document.getElementById("menu2").style.filter = "blur(0)";
		document.getElementById("menu3").style.filter = "blur(3px)";
		document.getElementById("menu4").style.filter = "blur(3px)";
		document.getElementById("menu5").style.filter = "blur(3px)";
		document.getElementById("menu2").style.background = "linear-gradient(180deg, #fefffa 0%, #fffdf1 80%)";
		document.getElementById("menu2").style.cursor = "pointer";
	}
	else if (Player.tut == 2 && Player.nick != ""){
		document.getElementById("tut3").style.display = "block";
		document.getElementById("menu2").style.transform = "translateY(1%)";
		document.getElementById("menu2").getElementsByTagName("img")[0].style.transform = "scale(1.15,1.15)";
		document.getElementById("menu2").getElementsByTagName("span")[0].style.transform = "translateY(-10px)";
		document.getElementById("info").style.display = "none";
		document.getElementById("keyboard").style.display = "none";
		document.getElementById("pole").style.display = "none";
		document.getElementById("store").style.display = "block";
		menuclicked = 2;
		loadsize();
		document.getElementById("menu2").style.filter = "blur(0)";
		document.getElementById("menu3").style.filter = "blur(3px)";
		document.getElementById("menu4").style.filter = "blur(3px)";
		document.getElementById("menu5").style.filter = "blur(3px)";
		document.getElementById("menu2").style.background = "linear-gradient(180deg, #fefffa 0%, #fffdf1 80%)";
		document.getElementById("menu2").style.cursor = "pointer";
	}
	else if (Player.tut == 3 && Player.nick != ""){
		document.getElementById("tut4").style.display = "block";
		document.getElementById("menu1").style.transform = "translateY(1%)";
		document.getElementById("menu1").getElementsByTagName("img")[0].style.transform = "scale(1.15,1.15)";
		document.getElementById("menu1").getElementsByTagName("span")[0].style.transform = "translateY(-10px)";
		document.getElementById("info").style.display = "none";
		document.getElementById("keyboard").style.display = "block";
		document.getElementById("pole").style.display = "block";
		document.getElementById("store").style.display = "none";
		menuclicked = 1;
		loadsize();
		document.getElementById("menu2").style.filter = "blur(0)";
		document.getElementById("menu3").style.filter = "blur(0)";
		document.getElementById("menu4").style.filter = "blur(0)";
		document.getElementById("menu5").style.filter = "blur(0)";
		document.getElementById("menu2").style.background = "linear-gradient(180deg, #fefffa 0%, #fffdf1 80%)";
		document.getElementById("menu2").style.cursor = "pointer";
	}
	else{
		document.getElementById("menu2").style.background = "linear-gradient(180deg, #fefffa 0%, #fffdf1 80%)";
		document.getElementById("menu2").style.cursor = "pointer";
		menu1click();
	}
	if (Player.Letters["l"][0] == true){
		document.getElementById("menu3").style.background = "linear-gradient(180deg, #fefffa 0%, #fffdf1 80%)";
		document.getElementById("menu3").style.cursor = "pointer";
		document.getElementById("menu3").innerHTML = '<img src="book.png" alt="features" width="110" height="80"><br/><span>Features</span>';
		granddisplay();
	}
	else
	{
		document.getElementById("menu3").getElementsByTagName("span")[0].style.transform = "translateY(-16px)";
	}
	if (Player.Letters["g"][0] == true){
		document.getElementById("menu5").style.background = "linear-gradient(180deg, #fefffa 0%, #fffdf1 80%)";
		document.getElementById("menu5").style.cursor = "pointer";
		document.getElementById("menu5").innerHTML = '<img src="online.png" alt="online" width="110" height="80"><br/><span>Online</span>';
	}
	else{
		document.getElementById("menu5").getElementsByTagName("span")[0].style.transform = "translateY(-16px)";
	}
	document.getElementById("menu4").getElementsByTagName("span")[0].style.transform = "translateY(-16px)";
	loadsize();
	if (Player.nick != ""){
		var Save =
		{
			Player: Player
		}
		localStorage.setItem("Saved", JSON.stringify(Save));
		socket.emit('LogPlayer', Player);
	}
}

function loadsize(){
	var classkeys = document.getElementsByClassName("keys");
	var classkeysstore = document.getElementsByClassName("keysstore");
	for (let i=0; i < classkeys.length; i++){
		classkeys[i].style = "border-radius: " + classkeys[0].clientHeight/8 + "px;";
	}
	for (let i=0; i < classkeysstore.length; i++){
		classkeysstore[i].style = "border-radius: " + classkeysstore[0].clientHeight/8 + "px;";
	}
	for (let i=0; i < (characterscodes.length-1); i++){
		document.getElementById(characterscodes[i]).style = "border-radius: " + classkeys[0].clientHeight/9 + "px;";
	}
	document.getElementById("Space").style = "border-radius: " + classkeys[0].clientHeight/9 + "px;";
	document.getElementById("ShiftStore").style = "border-radius: " + classkeysstore[0].clientHeight/9 + "px;";
	document.getElementById("title").style = "font-size: " + (document.getElementById("title").clientHeight/2.5 + 8) + "px; line-height: " + document.getElementById("title").clientHeight + "px;";
	document.getElementById("Help").style = "margin-top: " + (-(classkeys[0].clientHeight)/2) +"px; font-size: " + (classkeys[0].clientWidth/8) + "px;";
	if (menuclicked == 2){
		checkstore();
	}
}

function reset(){
	localStorage.clear();
	location.reload();
}

socket.on('poletekst', function(text) {
   document.getElementById("poletekst").innerHTML = text;
});
socket.on('enternick', function(value) {
	if (value == 1){
		save();
		location.reload();
	}
	else if (value == 0){
		document.getElementById("nameerror").innerHTML = "this player is currently in the game!"
		document.getElementById("logbutton").style = "margin-top: -29px; line-height: 20px;";
		document.getElementById("nameerror").style.display = "block";
		document.getElementById("nick").value = "";
	}
});
socket.on('playerscore', function(lista) {
	var keys = Object.keys(lista);
	var l = {};
	for (let i=0; i< keys.length; i++){
		l[[lista[keys[i]][0],lista[keys[i]][2]]] = lista[keys[i]][1];
	}
	var items = Object.keys(l).map(function(key) {
		return [key, l[key]];
	});
	items.sort(function(first, second) {
		return second[1] - first[1];
	});
	items = items.slice(0, 10);
	var keys = Object.keys(items);
	for (let i=0; i < 10; i++){
		if (i < keys.length){
			if (items[keys[i]][1]){
				if (items[keys[i]][0].slice(0,items[keys[i]][0].indexOf(",")) == "cynka02"){
					document.getElementById("top" + (i+1) + "1").innerHTML = "cynka02 (Dev)";
				}
				else{
					document.getElementById("top" + (i+1) + "1").innerHTML = items[keys[i]][0].slice(0,items[keys[i]][0].indexOf(","));
				}
				document.getElementById("top" + (i+1) + "2").innerHTML = items[keys[i]][1].toFixed(0);
				document.getElementById("top" + (i+1) + "3").innerHTML = items[keys[i]][0].slice(items[keys[i]][0].indexOf(",")+1,items[keys[i]][0].indexOf(",")+2);
			}
			else{
				if (items[keys[i]][0].slice(0,items[keys[i]][0].indexOf(",")) == "cynka02"){
					document.getElementById("top" + (i+1) + "1").innerHTML = "cynka02 (Dev)";
				}
				else{
					document.getElementById("top" + (i+1) + "1").innerHTML = items[keys[i]][0].slice(0,items[keys[i]][0].indexOf(","));
				}
				document.getElementById("top" + (i+1) + "2").innerHTML = "0";
				document.getElementById("top" + (i+1) + "3").innerHTML = items[keys[i]][0].slice(items[keys[i]][0].indexOf(",")+1,items[keys[i]][0].indexOf(",")+2);
			}
		}
		else{
			document.getElementById("top" + (i+1) + "1").innerHTML = "";
			document.getElementById("top" + (i+1) + "2").innerHTML = "";
			document.getElementById("top" + (i+1) + "3").innerHTML = "";
		}
	}
});
