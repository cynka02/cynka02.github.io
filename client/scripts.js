var socket = io();
var inputfield = [];
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-=[];',./"; 
var charactersspecial = "!@#$%^&*()_+{}:" + '"|<>?';
var characterscodes = ["Backspace", "CapsLock", "Space", "ShiftLeft", "Backslash", "ShiftRight"];
var commands = ["sound mute", "sound unmute", "save", "help", "sound-", "sound--", "sound---", "sound+", "sound++", "sound+++"]
var Caps = 0;
var Shift = 0;
var TimeToCheck = 1000;
var AlertType = "";
var ActiveLetter = "";
var g;
var c;
var ActiveLetterCount = 0;
var ActiveLetterMax = 0;
var ActiveLetterSpeed = 0;
var ActiveLetterCap = 0;
var Player = {
	volume: 1,
	Letters: {
		a: [true, false, 0, 0, 5, 5, 0.2, 0.1],
		b: [true, false, 0, 0, 5, 5, 0.19, 0.09],
		c: [true, false, 0, 0, 5, 5, 0.18, 0.08],
		d: [false, false, 0, 0, 5, 5, 0.18, 0.08],
		e: [false, false, 0, 0, 5, 5, 0.17, 0.07],
		f: [false, false, 0, 0, 5, 5, 0.16, 0.06],
		g: [false, false, 0, 0, 5, 5, 0.16, 0.06],
		h: [false, false, 0, 0, 5, 5, 0.15, 0.05],
		i: [false, false, 0, 0, 5, 5, 0.14, 0.04],
		j: [false, false, 0, 0, 5, 5, 0.14, 0.04],
		k: [false, false, 0, 0, 5, 5, 0.13, 0.03],
		l: [false, false, 0, 0, 5, 5, 0.13, 0.03],
		m: [false, false, 0, 0, 5, 5, 0.12, 0.02],
		n: [false, false, 0, 0, 5, 5, 0.12, 0.02],
		o: [false, false, 0, 0, 5, 5, 0.11, 0.01],
		p: [false, false, 0, 0, 5, 5, 0.1, 0.009],
		q: [false, false, 0, 0, 5, 5, 0.1, 0.009],
		r: [false, false, 0, 0, 5, 5, 0.09, 0.008],
		s: [false, false, 0, 0, 5, 5, 0.08, 0.007],
		t: [false, false, 0, 0, 5, 5, 0.07, 0.006],
		u: [false, false, 0, 0, 5, 5, 0.06, 0.005],
		v: [false, false, 0, 0, 5, 5, 0.05, 0.004],
		w: [false, false, 0, 0, 5, 5, 0.04, 0.003],
		x: [false, false, 0, 0, 5, 5, 0.03, 0.002],
		y: [false, false, 0, 0, 5, 5, 0.02, 0.002],
		z: [false, false, 0, 0, 5, 5, 0.01, 0.001]
	}
};



function changecaps(value){
	var tempchar = characters.substring(26,52);
	var tempchar2 = characters.substring(0,26);
	if (value == 1){
		for (let i=0; i < tempchar.length; i++){
			if (ActiveLetter.toLowerCase() != tempchar[i]){
				document.getElementById(tempchar[i]+"Text").innerHTML = tempchar2[i];
				if (Player.Letters[tempchar[i]][1] == true){
					barcolors(tempchar[i], (Player.Letters[tempchar[i]][3]/Player.Letters[tempchar[i]][5]*100));
				} else {
					document.getElementById(tempchar[i]+"Bar").style = "display: none;";
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
					document.getElementById(tempchar[i]+"Bar").style = "display: none;";
				}
			}
		}
	}
}

function changeshift(value){
	if (value == 1){
		document.getElementById("1Text").innerHTML = "!";
		document.getElementById("1AltText").innerHTML = "1";
		document.getElementById("2Text").innerHTML = "@";
		document.getElementById("2AltText").innerHTML = "2";
		document.getElementById("3Text").innerHTML = "#";
		document.getElementById("3AltText").innerHTML = "3";
		document.getElementById("4Text").innerHTML = "$";
		document.getElementById("4AltText").innerHTML = "4";
		document.getElementById("5Text").innerHTML = "%";
		document.getElementById("5AltText").innerHTML = "5";
		document.getElementById("6Text").innerHTML = "^";
		document.getElementById("6AltText").innerHTML = "6";
		document.getElementById("7Text").innerHTML = "&";
		document.getElementById("7AltText").innerHTML = "7";
		document.getElementById("8Text").innerHTML = "*";
		document.getElementById("8AltText").innerHTML = "8";
		document.getElementById("9Text").innerHTML = "(";
		document.getElementById("9AltText").innerHTML = "9";
		document.getElementById("0Text").innerHTML = ")";
		document.getElementById("0AltText").innerHTML = "0";
		document.getElementById("-Text").innerHTML = "_";
		document.getElementById("-AltText").innerHTML = "-";
		document.getElementById("=Text").innerHTML = "+";
		document.getElementById("=AltText").innerHTML = "=";
		document.getElementById("[Text").innerHTML = "{";
		document.getElementById("[AltText").innerHTML = "[";
		document.getElementById("]Text").innerHTML = "}";
		document.getElementById("]AltText").innerHTML = "]";
		document.getElementById(";Text").innerHTML = ":";
		document.getElementById(";AltText").innerHTML = ";";
		document.getElementById("'Text").innerHTML = '"';
		document.getElementById("'AltText").innerHTML = "'";
		document.getElementById("BackslashText").innerHTML = "|";
		document.getElementById("BackslashAltText").innerHTML = "\\";
		document.getElementById(",Text").innerHTML = "<";
		document.getElementById(",AltText").innerHTML = ",";
		document.getElementById(".Text").innerHTML = ">";
		document.getElementById(".AltText").innerHTML = ".";
		document.getElementById("/Text").innerHTML = "?";
		document.getElementById("/AltText").innerHTML = "/";
	}
	else if (value == 0){
		document.getElementById("1Text").innerHTML = "1";
		document.getElementById("1AltText").innerHTML = "!";
		document.getElementById("2Text").innerHTML = "2";
		document.getElementById("2AltText").innerHTML = "@";
		document.getElementById("3Text").innerHTML = "3";
		document.getElementById("3AltText").innerHTML = "#";
		document.getElementById("4Text").innerHTML = "4";
		document.getElementById("4AltText").innerHTML = "$";
		document.getElementById("5Text").innerHTML = "5";
		document.getElementById("5AltText").innerHTML = "%";
		document.getElementById("6Text").innerHTML = "6";
		document.getElementById("6AltText").innerHTML = "^";
		document.getElementById("7Text").innerHTML = "7";
		document.getElementById("7AltText").innerHTML = "&";
		document.getElementById("8Text").innerHTML = "8";
		document.getElementById("8AltText").innerHTML = "*";
		document.getElementById("9Text").innerHTML = "9";
		document.getElementById("9AltText").innerHTML = "(";
		document.getElementById("0Text").innerHTML = "0";
		document.getElementById("0AltText").innerHTML = ")";
		document.getElementById("-Text").innerHTML = "-";
		document.getElementById("-AltText").innerHTML = "_";
		document.getElementById("=Text").innerHTML = "=";
		document.getElementById("=AltText").innerHTML = "+";
		document.getElementById("[Text").innerHTML = "[";
		document.getElementById("[AltText").innerHTML = "{";
		document.getElementById("]Text").innerHTML = "]";
		document.getElementById("]AltText").innerHTML = "}";
		document.getElementById(";Text").innerHTML = ";";
		document.getElementById(";AltText").innerHTML = ":";
		document.getElementById("'Text").innerHTML = "'";
		document.getElementById("'AltText").innerHTML = '"';
		document.getElementById("BackslashText").innerHTML = "\\";
		document.getElementById("BackslashAltText").innerHTML = "|";
		document.getElementById(",Text").innerHTML = ",";
		document.getElementById(",AltText").innerHTML = "<";
		document.getElementById(".Text").innerHTML = ".";
		document.getElementById(".AltText").innerHTML = ">";
		document.getElementById("/Text").innerHTML = "/";
		document.getElementById("/AltText").innerHTML = "?";
	}
}

function keyup(event){
	if ((event.code == "ShiftRight" || event.code == "ShiftLeft") && Caps == 0){
		changecaps(0);
		changeshift(0);
		Shift = 0;
		setTimeout(clearcolors, 200, "ShiftRight");
		setTimeout(clearcolors, 200, "ShiftLeft");
	} 
	else if ((event.code == "ShiftRight" || event.code == "ShiftLeft") && Caps == 1) {
		changecaps(1);
		changeshift(0);
		Shift = 0;
		setTimeout(clearcolors, 200, "ShiftRight");
		setTimeout(clearcolors, 200, "ShiftLeft");
	} else {}
}

function keydown(event){
	var name = event.key;
	var code = event.code;
	
	if (event.getModifierState('CapsLock')) {
        changecaps(1);
		Caps = 1;
		document.getElementById("CapsLock").style.backgroundColor = "#6dff5f";
		if (event.getModifierState('Shift')){
			changecaps(0);
			changeshift(1);
		}
    } 
	else if (event.getModifierState('Shift')){
		changecaps(1);
		changeshift(1);
		Caps = 0;
	}
	else {
        changecaps(0);
		Caps = 0;
    }
	
	if (characters.includes(name) == true){
		document.getElementById('audio').currentTime = 0;
		document.getElementById('audio').play();
		document.getElementById(name.toLowerCase()).style.transition = "background-color 0.6s ease";
		document.getElementById(name.toLowerCase()).style.backgroundColor = "#6dff5f";
		if (ActiveLetter != name){
			c = setTimeout(clearcolors, 400, name.toLowerCase());
		} else {}
		try{clearTimeout(g);}catch{}
		inputfield.push(name)
		document.getElementById("poletekst").innerHTML = inputfield.join("");
		g = setTimeout(check, TimeToCheck);
	}
	else if (characterscodes.includes(code) == true){
		if (code == "ShiftLeft" || code == "ShiftRight"){
			Shift += 1;
		}
		if (Shift <= 1){
			document.getElementById('audio').currentTime = 0;
			document.getElementById('audio').play();
		}
		if (code == "Backslash"){
			try{clearTimeout(g);}catch{}
			inputfield.push(name)
			document.getElementById("poletekst").innerHTML = inputfield.join("");
			g = setTimeout(check, TimeToCheck);
		}
		else if (code == "Backspace" && inputfield.length != 0){
			inputfield.pop();
			if (inputfield.length == 0){
				try{clearTimeout(g);}catch{}
				document.getElementById("poletekst").innerHTML = "...";
			}
			else{
				try{clearTimeout(g);}catch{}
				document.getElementById("poletekst").innerHTML = inputfield.join("");
				g = setTimeout(check, TimeToCheck);
			}
		} 
		else if (code == "Space" && inputfield.length != 0){
			try{clearTimeout(g);}catch{}
			inputfield.push(name)
			document.getElementById("poletekst").innerHTML = inputfield.join("");
			g = setTimeout(check, TimeToCheck);
		} else{}
		document.getElementById(code).style.backgroundColor = "#6dff5f";
		setTimeout(clearcolors, 400, code);
	}
	else if (code == "Enter"){
		if (AlertType != ""){
			if (AlertType == "Info"){
				document.getElementById("Alert").style = "display: none;";
				document.getElementById("AlertConfirm").style = "display: none;";
			}
			else if (AlertType == "Reset"){
				reset();
				document.getElementById("Alert").style = "display: none;";
				document.getElementById("AlertConfirm").style = "display: none;";
			}
			AlertType = "";
		}
		else if(inputfield.join("") != ""){
			try{clearTimeout(g);}catch{}
			check();
		}
	}
	else if (charactersspecial.includes(name) == true){
		document.getElementById('audio').currentTime = 0;
		document.getElementById('audio').play();
		switch (name){
			case "!":
				document.getElementById("1").style.backgroundColor = "#6dff5f";
				setTimeout(clearcolors, 400, "1");
				break;
			case "@":
				document.getElementById("2").style.backgroundColor = "#6dff5f";
				setTimeout(clearcolors, 400, "2");
				break;
			case "#":
				document.getElementById("3").style.backgroundColor = "#6dff5f";
				setTimeout(clearcolors, 400, "3");
				break;
			case "$":
				document.getElementById("4").style.backgroundColor = "#6dff5f";
				setTimeout(clearcolors, 400, "4");
				break;
			case "%":
				document.getElementById("5").style.backgroundColor = "#6dff5f";
				setTimeout(clearcolors, 400, "5");
				break;
			case "^":
				document.getElementById("6").style.backgroundColor = "#6dff5f";
				setTimeout(clearcolors, 400, "6");
				break;
			case "&":
				document.getElementById("7").style.backgroundColor = "#6dff5f";
				setTimeout(clearcolors, 400, "7");
				name ="&amp;"
				break;
			case "*":
				document.getElementById("8").style.backgroundColor = "#6dff5f";
				setTimeout(clearcolors, 400, "8");
				break;
			case "(":
				document.getElementById("9").style.backgroundColor = "#6dff5f";
				setTimeout(clearcolors, 400, "9");
				break;
			case ")":
				document.getElementById("0").style.backgroundColor = "#6dff5f";
				setTimeout(clearcolors, 400, "0");
				break;
			case "_":
				document.getElementById("-").style.backgroundColor = "#6dff5f";
				setTimeout(clearcolors, 400, "-");
				break;
			case "+":
				document.getElementById("=").style.backgroundColor = "#6dff5f";
				setTimeout(clearcolors, 400, "=");
				break;
			case "{":
				document.getElementById("[").style.backgroundColor = "#6dff5f";
				setTimeout(clearcolors, 400, "[");
				break;
			case "}":
				document.getElementById("]").style.backgroundColor = "#6dff5f";
				setTimeout(clearcolors, 400, "]");
				break;
			case ":":
				document.getElementById(";").style.backgroundColor = "#6dff5f";
				setTimeout(clearcolors, 400, ";");
				break;
			case '"':
				document.getElementById("'").style.backgroundColor = "#6dff5f";
				setTimeout(clearcolors, 400, "'");
				break;
			case "|":
				document.getElementById("Backslash").style.backgroundColor = "#6dff5f";
				setTimeout(clearcolors, 400, "Backslash");
				break;
			case "<":
				document.getElementById(",").style.backgroundColor = "#6dff5f";
				setTimeout(clearcolors, 400, ",");
				name = "&lt;";
				break;
			case ">":
				document.getElementById(".").style.backgroundColor = "#6dff5f";
				setTimeout(clearcolors, 400, ".");
				name = "&gt;";
				break;
			case "?":
				document.getElementById("/").style.backgroundColor = "#6dff5f";
				setTimeout(clearcolors, 400, "/");
				break;
		}
		try{clearTimeout(g);}catch{}
		inputfield.push(name)
		document.getElementById("poletekst").innerHTML = inputfield.join("");
		g = setTimeout(check, TimeToCheck);
	} else{}
}

function clearcolors(idname){
	if ((idname != "CapsLock" || Caps == 0) && (idname != "ShiftRight" && idname != "ShiftLeft")){
		document.getElementById(idname).style.transition = "background-color 0.6s ease";
		document.getElementById(idname).style.background = "#eeeeee";
	} else {} 
	if ((idname == "ShiftRight" || idname == "ShiftLeft") && Shift == 0){
		document.getElementById(idname).style.transition = "background-color 0.6s ease";
		document.getElementById(idname).style.background = "#eeeeee";
	} else {}
}

function barcolors(id, percentage){
	document.getElementById(id+"Bar").style = "display: block; background: linear-gradient(to right, hsl(" + percentage + ", 100%, 55%) " + percentage + "%, #eeeeee 0%);";
}

function resetlettersbackground(){
	var tempchar = characters.substring(26,52);
	for (let i=0; i < tempchar.length; i++){
		try{clearTimeout(c);}catch{};
		document.getElementById(tempchar[i]).style.transition = "background-color 0s ease";
		document.getElementById(tempchar[i]).style.background = "#eeeeee";
		if ((Caps == 1 && Shift == 0) || (Shift == 1 && Caps == 0)){
			document.getElementById(tempchar[i]+"Text").innerHTML = tempchar[i].toUpperCase();
			if (Player.Letters[tempchar[i]][1] == true){
				barcolors(tempchar[i], (Player.Letters[tempchar[i]][3]/Player.Letters[tempchar[i]][5]*100));
			} else {
				document.getElementById(tempchar[i]+"Bar").style = "display: none;";
			}
		}
		else{
			document.getElementById(tempchar[i]+"Text").innerHTML = tempchar[i];
			if (Player.Letters[tempchar[i]][0] == true){
				barcolors(tempchar[i], (Player.Letters[tempchar[i]][2]/Player.Letters[tempchar[i]][4]*100));
			} else {
				document.getElementById(tempchar[i]+"Bar").style = "display: none;";
			}
		}
	}
}

function check(){
	if (inputfield.join("") == "sound mute"){
		document.getElementById("audio").volume = 0;
	}
	else if (inputfield.join("") == "sound unmute" && Player.volume != 0){
		document.getElementById("audio").volume = Player.volume;
	} 
	else if (inputfield.join("") == "sound unmute" && Player.volume == 0){
		document.getElementById("audio").volume = 1;
	}
	else if (inputfield.join("") == "sound-" && document.getElementById("audio").volume >= 0.2){
		document.getElementById("audio").volume -= 0.2; Player.volume = document.getElementById("audio").volume;
	} 
	else if (inputfield.join("") == "sound-" && document.getElementById("audio").volume < 0.2){
		document.getElementById("audio").volume = 0; Player.volume = document.getElementById("audio").volume;
	}
	else if (inputfield.join("") == "sound--" && document.getElementById("audio").volume >= 0.4){
		document.getElementById("audio").volume -= 0.4; Player.volume = document.getElementById("audio").volume;
	} 
	else if (inputfield.join("") == "sound--" && document.getElementById("audio").volume < 0.4){
		document.getElementById("audio").volume = 0; Player.volume = document.getElementById("audio").volume;
	}
	else if (inputfield.join("") == "sound---" && document.getElementById("audio").volume >= 0.6){
		document.getElementById("audio").volume -= 0.6; Player.volume = document.getElementById("audio").volume;
	} 
	else if (inputfield.join("") == "sound---" && document.getElementById("audio").volume < 0.6){
		document.getElementById("audio").volume = 0; Player.volume = document.getElementById("audio").volume;
	}
	else if (inputfield.join("") == "sound+" && document.getElementById("audio").volume <= 0.8){
		document.getElementById("audio").volume += 0.2; Player.volume = document.getElementById("audio").volume;
	} 
	else if (inputfield.join("") == "sound+" && document.getElementById("audio").volume > 0.8){
		document.getElementById("audio").volume = 1; Player.volume = document.getElementById("audio").volume;
	}
	else if (inputfield.join("") == "sound++" && document.getElementById("audio").volume <= 0.6){
		document.getElementById("audio").volume += 0.4; Player.volume = document.getElementById("audio").volume;
	} 
	else if (inputfield.join("") == "sound++" && document.getElementById("audio").volume > 0.6){
		document.getElementById("audio").volume = 1; Player.volume = document.getElementById("audio").volume;
	}
	else if (inputfield.join("") == "sound+++" && document.getElementById("audio").volume <= 0.4){
		document.getElementById("audio").volume += 0.6; Player.volume = document.getElementById("audio").volume;
	} 
	else if (inputfield.join("") == "sound+++" && document.getElementById("audio").volume > 0.4){
		document.getElementById("audio").volume = 1; Player.volume = document.getElementById("audio").volume;
	}
	else if (inputfield.join("") == "save"){
		save();
		document.getElementById("Alert").style = "display: block; margin-top: " + (window.innerHeight*0.17) + "px;";
		document.getElementById("AlertText").innerHTML = "Saved!";
		document.getElementById("AlertText").style = "font-size: " + document.getElementById("Alert").clientWidth/10 + "px;";
		document.getElementById("AlertConfirm").style = "display: block;";
		document.getElementById("AlertConfirm").style = "display: block; line-height: " + document.getElementById("AlertConfirm").clientHeight + "px; font-size:" + document.getElementById("Alert").clientWidth/15 +"px; margin-top: " + (window.innerHeight*0.42) + "px; margin-left: " + (window.innerWidth*0.535) + "px;";
		document.getElementById("AlertConfirm").innerHTML = "Ok";
		AlertType = "Info";
	}
	else if (inputfield.join("") == "help"){
		document.getElementById("Alert").style = "display: block; margin-top: " + (window.innerHeight*0.17) + "px;";
		document.getElementById("AlertText").innerHTML = "Everything You type is checked and cleared after " + TimeToCheck/1000 + " second(s) of inactivity!<br />You can also press enter<br /><br />Commands:<br />save&nbsp;&nbsp;&nbsp;-> manual save (auto every 30 seconds)<br />sound mute/unmute<br />sound-/--/---&nbsp;&nbsp;&nbsp;-> decrease sound volume by 0.2/0.4/0.6<br />sound+/++/+++&nbsp;&nbsp;&nbsp;-> increase sound volume by 0.2/0.4/0.6";
		document.getElementById("AlertText").style = "font-size: " + document.getElementById("Alert").clientWidth/25 + "px;";
		document.getElementById("AlertConfirm").style = "display: block;";
		document.getElementById("AlertConfirm").style = "display: block; line-height: " + document.getElementById("AlertConfirm").clientHeight + "px; margin-top: " + (window.innerHeight*0.42) + "px; margin-left: " + (window.innerWidth*0.535) + "px;";
		document.getElementById("AlertConfirm").innerHTML = "Ok";
		AlertType = "Info";
	}
	if (commands.includes(inputfield.join("")) == false && characters.includes(inputfield.join("")) == true && Player.Letters[inputfield.join("").toLowerCase()] != undefined){
		if (inputfield.join("") === inputfield.join("").toLowerCase() && Player.Letters[inputfield.join("")][0] == true && Player.Letters[inputfield.join("")][2] < Player.Letters[inputfield.join("")][4]){
			if (ActiveLetter != inputfield.join("")){
				resetlettersbackground();
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
		else if (inputfield.join("") !== inputfield.join("").toLowerCase() && Player.Letters[inputfield.join("").toLowerCase()][1] == true && Player.Letters[inputfield.join("").toLowerCase()][3] < Player.Letters[inputfield.join("").toLowerCase()][5]){
			if (ActiveLetter != inputfield.join("")){
				resetlettersbackground();
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
	} else {}
	document.getElementById("poletekst").innerHTML = "...";
	inputfield = [];
}

function getletters(){
	if (ActiveLetter != ""){
		if (ActiveLetterCap < ((1/ActiveLetterSpeed)*100)){
			if (ActiveLetter === ActiveLetter.toLowerCase()){
				ActiveLetterCap += 1;
				barcolors(ActiveLetter, (Player.Letters[ActiveLetter][2]/Player.Letters[ActiveLetter][4]*100));
				document.getElementById(ActiveLetter+"Text").innerHTML = ActiveLetter;
				document.getElementById(ActiveLetter).style.background = "linear-gradient(to right, hsl(" + (ActiveLetterCap/((1/ActiveLetterSpeed)*100))*100 + ", 100%, 55%) " + (ActiveLetterCap/((1/ActiveLetterSpeed)*100))*100 + "%, #eeeeee 0%)";
			}
			else{
				ActiveLetterCap += 1;
				barcolors(ActiveLetter.toLowerCase(), (Player.Letters[ActiveLetter.toLowerCase()][3]/Player.Letters[ActiveLetter.toLowerCase()][5]*100));
				document.getElementById(ActiveLetter.toLowerCase()+"Text").innerHTML = ActiveLetter;
				document.getElementById(ActiveLetter.toLowerCase()).style.background = "linear-gradient(to right, hsl(" + (ActiveLetterCap/((1/ActiveLetterSpeed)*100))*100 + ", 100%, 55%) " + (ActiveLetterCap/((1/ActiveLetterSpeed)*100))*100 + "%, #eeeeee 0%)";
			}
		}
		else if (ActiveLetterCap >= ((1/ActiveLetterSpeed)*100)){
			if (ActiveLetter === ActiveLetter.toLowerCase()){
				ActiveLetterCount += 1;
				Player.Letters[ActiveLetter][2] += 1;
				document.getElementById(ActiveLetter).style.background = "linear-gradient(to right, hsl(0, 100%, 55%) 0%, #eeeeee 0%)";
				barcolors(ActiveLetter, (Player.Letters[ActiveLetter][2]/Player.Letters[ActiveLetter][4]*100));
				if (ActiveLetterCount == ActiveLetterMax){
					ActiveLetter = "";
					ActiveLetterCount = 0;
					ActiveLetterMax = 0;
					ActiveLetterSpeed = 0;
					ActiveLetterCap = 0;
				}
				else{
					ActiveLetterCap = 0;
				}
			}
			else if (ActiveLetter !== ActiveLetter.toLowerCase()){
				ActiveLetterCount += 1;
				Player.Letters[ActiveLetter.toLowerCase()][3] += 1;
				document.getElementById(ActiveLetter.toLowerCase()).style.background = "linear-gradient(to right, hsl(0, 100%, 55%) 0%, #eeeeee 0%)";
				barcolors(ActiveLetter.toLowerCase(), (Player.Letters[ActiveLetter.toLowerCase()][3]/Player.Letters[ActiveLetter.toLowerCase()][5]*100));
				if (ActiveLetterCount == ActiveLetterMax){
					ActiveLetter = "";
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
	} else {}
} setInterval(getletters, 10);

document.getElementById("AlertConfirm").addEventListener("touchend", function(){
	if (AlertType == "Info"){
		document.getElementById("Alert").style = "display: none;";
		document.getElementById("AlertConfirm").style = "display: none;";
	}
	else if (AlertType == "Reset"){
		reset();
		document.getElementById("Alert").style = "display: none;";
		document.getElementById("AlertConfirm").style = "display: none;";
	}
	AlertType = "";
})
document.getElementById("AlertConfirm").onclick = function(){
	if (AlertType == "Info"){
		document.getElementById("Alert").style = "display: none;";
		document.getElementById("AlertConfirm").style = "display: none;";
	}
	else if (AlertType == "Reset"){
		reset();
		document.getElementById("Alert").style = "display: none;";
		document.getElementById("AlertConfirm").style = "display: none;";
	}
	AlertType = "";
}

window.addEventListener('resize', load);
document.addEventListener("keyup", keyup);
document.addEventListener("keydown", keydown);


var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
if(isMobile.any()) {
   TimeToCheck = 2000;
}
function Mobile(index, name){
	document.getElementById(index).style.backgroundColor = "#6dff5f";
	setTimeout(clearcolors, 400, index);
	try{clearTimeout(g);}catch{}
	inputfield.push(name)
	document.getElementById("poletekst").innerHTML = inputfield.join("");
	g = setTimeout(check, TimeToCheck);
}
document.getElementById("q").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("w").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("e").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("r").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("t").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("y").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("u").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("i").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("o").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("p").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("a").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("s").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("d").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("f").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("g").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("h").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("j").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("k").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("l").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("z").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("x").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("c").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("v").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("b").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("n").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("m").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("ShiftLeft").addEventListener("touchend", function(){
	if (Shift == 0){
		Shift = 1;
		changeshift(1);
		if (Caps == 1){
			changecaps(0);
		}
		else{
			changecaps(1);
		}
		document.getElementById("ShiftLeft").style.backgroundColor = "#6dff5f";
	}
	else{
		Shift = 0;
		changeshift(0);
		if (Caps == 1){
			changecaps(1);
		}
		else{
			changecaps(0);
		}
		document.getElementById("ShiftLeft").style.backgroundColor = "#eeeeee";
		document.getElementById("ShiftRight").style.backgroundColor = "#eeeeee";
	}
	
})
document.getElementById("ShiftRight").addEventListener("touchend", function(){
	if (Shift == 0){
		Shift = 1;
		changeshift(1);
		if (Caps == 1){
			changecaps(0);
		}
		else{
			changecaps(1);
		}
		document.getElementById("ShiftRight").style.backgroundColor = "#6dff5f";
	}
	else{
		Shift = 0;
		changeshift(0);
		if (Caps == 1){
			changecaps(1);
		}
		else{
			changecaps(0);
		}
		document.getElementById("ShiftRight").style.backgroundColor = "#eeeeee";
		document.getElementById("ShiftLeft").style.backgroundColor = "#eeeeee";
	}
	
})
document.getElementById("CapsLock").addEventListener("touchend", function(){
	if (Caps == 0){
		Caps = 1;
		if (Shift == 0){
			changecaps(1);
		}
		else {
			changecaps(0);
		}
		document.getElementById("CapsLock").style.backgroundColor = "#6dff5f";
	}
	else{
		Caps = 0;
		if (Shift == 0){
			changecaps(0);
		}
		else {
			changecaps(1);
		}
		document.getElementById("CapsLock").style.backgroundColor = "#eeeeee";
	}
})
document.getElementById("Space").addEventListener("touchend", function(){
	if (inputfield.length != 0){
		Mobile(this.id, " ");
	}
	else{
		document.getElementById("Space").style.backgroundColor = "#6dff5f";
		setTimeout(clearcolors, 400, "Space");
	}
})
document.getElementById("Backspace").addEventListener("touchend", function(){
	document.getElementById("Backspace").style.backgroundColor = "#6dff5f";
	setTimeout(clearcolors, 400, "Backspace");
	if (inputfield.length != 0){
		inputfield.pop();
		try{clearTimeout(g);}catch{}
		if (inputfield.length == 0){
			document.getElementById("poletekst").innerHTML = "...";
		}
		else{
			document.getElementById("poletekst").innerHTML = inputfield.join("");
			g = setTimeout(check, TimeToCheck);
		}
	} else {}
})
document.getElementById("1").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("2").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("3").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("4").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("5").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("6").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("7").addEventListener("touchend", function(){
	var id = this.id + "Text";
	if (document.getElementById(id).innerHTML == "&"){
		Mobile(this.id, "&amp;");
	}
	else {
		Mobile(this.id, document.getElementById(id).innerHTML);
	}
})
document.getElementById("8").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("9").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("0").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("-").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("=").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("[").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("]").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById(";").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("'").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById("Backslash").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})
document.getElementById(",").addEventListener("touchend", function(){
	var id = this.id + "Text";
	if (document.getElementById(id).innerHTML == "<"){
		Mobile(this.id, "&lt;");
	}
	else {
		Mobile(this.id, document.getElementById(id).innerHTML);
	}
})
document.getElementById(".").addEventListener("touchend", function(){
	var id = this.id + "Text";
	if (document.getElementById(id).innerHTML == ">"){
		Mobile(this.id, "&gt;");
	}
	else {
		Mobile(this.id, document.getElementById(id).innerHTML);
	}
})
document.getElementById("/").addEventListener("touchend", function(){
	var id = this.id + "Text";
	Mobile(this.id, document.getElementById(id).innerHTML);
})


function save(){
	var Save =
	{
		Player: Player
	}
	localStorage.setItem("Saved", JSON.stringify(Save));
}
setTimeout(save, 30000);

function load(){
	var SavedGame = JSON.parse(localStorage.getItem("Saved"));
	
	if (SavedGame){
		if (typeof SavedGame.Player !== "undefined") PlayerLoaded = SavedGame.Player;
		
		if (Object.keys(PlayerLoaded) === Object.keys(Player)){
			Player = PlayerLoaded;
		}
		else{
			Object.entries(Player).forEach(([key, value]) => {
				if (Object.keys(PlayerLoaded).includes(key) == false){
					PlayerLoaded[key] = value;
				} else{}
			});
			Player = PlayerLoaded;
		}
		document.getElementById("audio").volume = Player.volume;
	}
	
	var letterkeys = Object.keys(Player.Letters);
	for (let i=0; i < letterkeys.length; i++){
		if (Player.Letters[letterkeys[i]][0] == true){
			barcolors(Object.keys(Player.Letters)[i], ((Player.Letters[letterkeys[i]][2]/Player.Letters[letterkeys[i]][4])*100));
		}
		else{
			document.getElementById(Object.keys(Player.Letters)[i]+"Bar").style = "display: none;";
		}
	}
	loadsize();
	save();
	socket.emit('LogPlayer', Player);
}

function loadsize(){
	var classkeys = document.getElementsByClassName("keys");
	for (let i=0; i < classkeys.length; i++){
		classkeys[i].style = "line-height: " + (classkeys[0].clientHeight-10) + "px; border-radius: " + classkeys[0].clientHeight/9 + "px;";
	}
	for (let i=0; i < characterscodes.length; i++){
		document.getElementById(characterscodes[i]).style = "line-height: " + (classkeys[0].clientHeight-10) + "px; border-radius: " + classkeys[0].clientHeight/9 + "px;";
	}
	document.getElementById("Help").style = "margin-top: " + (-(classkeys[0].clientHeight-12)/2) +"px;";
}

function reset(){
	localStorage.clear();
	location.reload();
}

socket.on('poletekst', function(text) {
   document.getElementById("poletekst").innerHTML = text;
});
socket.on('chat', function(text) {
   document.getElementById("menu").innerHTML = text;
});
