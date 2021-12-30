var socket = io();
var inputfield = [];
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-=[];',./"; 
var charactersspecial = "!@#$%^&*()_+{}:" + '"|<>?';
var characterscodes = ["Backspace", "CapsLock", "Space", "ShiftLeft", "Backslash", "ShiftRight"];
var commands = ["sound mute", "sound unmute", "save", "help", "sound-", "sound--", "sound---", "sound+", "sound++", "sound+++"]
var Caps = 0;
var Shift = 0;
var audiovol = 1;

function load(){
	var classkeys = document.getElementsByClassName("keys");
	for (let i=0; i < classkeys.length; i++){
		classkeys[i].style = "line-height: " + (classkeys[0].clientHeight-10) + "px; border-radius: " + classkeys[0].clientHeight/9 + "px;";
	}
	for (let i=0; i < characterscodes.length; i++){
		document.getElementById(characterscodes[i]).style = "line-height: " + (classkeys[0].clientHeight-10) + "px; border-radius: " + classkeys[0].clientHeight/9 + "px;";
	}
	document.getElementById("Help").style = "margin-top: " + (-(classkeys[0].clientHeight-12)/2) +"px;";
}
function changecaps(value){
	var tempchar = characters.substring(26,52);
	var tempchar2 = characters.substring(0,26);
	if (value == 1){
		for (let i=0; i < tempchar.length; i++){
			document.getElementById(tempchar[i]+"Text").innerHTML = tempchar2[i];
		}
	}
	else if (value == 0){
		for (let i=0; i < tempchar.length; i++){
			document.getElementById(tempchar[i]+"Text").innerHTML = tempchar[i];
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

window.addEventListener('resize', load);
document.addEventListener('keyup', (event) => { 
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
});
document.addEventListener('keydown', (event) => {
	// Get key codes
	var name = event.key;
	var code = event.code;
	console.log(code, name);
	// Check for CapsLock
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
	
	// Highlight and input key
	if (characters.includes(name) == true){
		document.getElementById('audio').currentTime = 0;
		document.getElementById('audio').play();
		document.getElementById(name.toLowerCase()).style.backgroundColor = "#6dff5f";
		setTimeout(clearcolors, 400, name.toLowerCase());
		try{clearTimeout(g);}catch{}
		inputfield.push(name)
		document.getElementById("poletekst").innerHTML = inputfield.join("");
		g = setTimeout(check, 1000);
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
			g = setTimeout(check, 1000);
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
				g = setTimeout(check, 1000);
			}
		} 
		else if (code == "Space" && inputfield.length != 0){
			try{clearTimeout(g);}catch{}
			inputfield.push(name)
			document.getElementById("poletekst").innerHTML = inputfield.join("");
			g = setTimeout(check, 1000);
		} else{}
		document.getElementById(code).style.backgroundColor = "#6dff5f";
		setTimeout(clearcolors, 400, code);
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
				break;
			case ">":
				document.getElementById(".").style.backgroundColor = "#6dff5f";
				setTimeout(clearcolors, 400, ".");
				break;
			case "?":
				document.getElementById("/").style.backgroundColor = "#6dff5f";
				setTimeout(clearcolors, 400, "/");
				break;
		}
		try{clearTimeout(g);}catch{}
		inputfield.push(name)
		document.getElementById("poletekst").innerHTML = inputfield.join("");
		g = setTimeout(check, 1000);
	} else{}
}, false);

function clearcolors(idname){
	if ((idname != "CapsLock" || Caps == 0) && (idname != "ShiftRight" && idname != "ShiftLeft")){
		document.getElementById(idname).style.backgroundColor = "#eeeeee";
	} else {} 
	if ((idname == "ShiftRight" || idname == "ShiftLeft") && Shift == 0){
		document.getElementById(idname).style.backgroundColor = "#eeeeee";
	} else {}
}
function check(){
	if (inputfield.join("") == "sound mute"){document.getElementById("audio").volume = 0;}
	if (inputfield.join("") == "sound unmute" && audiovol != 0){
		document.getElementById("audio").volume = audiovol;
	} else if (inputfield.join("") == "sound unmute" && audiovol == 0){
		document.getElementById("audio").volume = 1;
	}
	if (inputfield.join("") == "sound-" && document.getElementById("audio").volume >= 0.2){
		document.getElementById("audio").volume -= 0.2; audiovol = document.getElementById("audio").volume;
	} else if (inputfield.join("") == "sound-" && document.getElementById("audio").volume < 0.2){
		document.getElementById("audio").volume = 0; audiovol = document.getElementById("audio").volume;
	}
	if (inputfield.join("") == "sound--" && document.getElementById("audio").volume >= 0.4){
		document.getElementById("audio").volume -= 0.4; audiovol = document.getElementById("audio").volume;
	} else if (inputfield.join("") == "sound--" && document.getElementById("audio").volume < 0.4){
		document.getElementById("audio").volume = 0; audiovol = document.getElementById("audio").volume;
	}
	if (inputfield.join("") == "sound---" && document.getElementById("audio").volume >= 0.6){
		document.getElementById("audio").volume -= 0.6; audiovol = document.getElementById("audio").volume;
	} else if (inputfield.join("") == "sound---" && document.getElementById("audio").volume < 0.6){
		document.getElementById("audio").volume = 0; audiovol = document.getElementById("audio").volume;
	}
	if (inputfield.join("") == "sound+" && document.getElementById("audio").volume <= 0.8){
		document.getElementById("audio").volume += 0.2; audiovol = document.getElementById("audio").volume;
	} else if (inputfield.join("") == "sound+" && document.getElementById("audio").volume > 0.8){
		document.getElementById("audio").volume = 1; audiovol = document.getElementById("audio").volume;
	}
	if (inputfield.join("") == "sound++" && document.getElementById("audio").volume <= 0.6){
		document.getElementById("audio").volume += 0.4; audiovol = document.getElementById("audio").volume;
	} else if (inputfield.join("") == "sound++" && document.getElementById("audio").volume > 0.6){
		document.getElementById("audio").volume = 1; audiovol = document.getElementById("audio").volume;
	}
	if (inputfield.join("") == "sound+++" && document.getElementById("audio").volume <= 0.4){
		document.getElementById("audio").volume += 0.6; audiovol = document.getElementById("audio").volume;
	} else if (inputfield.join("") == "sound+++" && document.getElementById("audio").volume > 0.4){
		document.getElementById("audio").volume = 1; audiovol = document.getElementById("audio").volume;
	}
	if (inputfield.join("") == "save"){alert("So far there is no save function :(");}
	if (inputfield.join("") == "help"){alert("Everything You type is checked and cleared after 1 second of inactivity!\r\n\r\nCommands:\r\nsave   -> manual save (auto for purchase)\r\nsound mute/unmute\r\nsound-/--/---   -> decrease sound volume by 0.2/0.4/0.6\r\nsound+/++/+++   -> increase sound volume by 0.2/0.4/0.6");}
	if (commands.includes(inputfield.join("")) == false){
		socket.emit('message', inputfield.join(""));
		inputfield = [];
	}
	else {
		document.getElementById("poletekst").innerHTML = "...";
		inputfield = [];
	}
}
socket.on('poletekst', function(text) {
   document.getElementById("poletekst").innerHTML = text;
});
socket.on('chat', function(text) {
   document.getElementById("menu").innerHTML = text;
});
