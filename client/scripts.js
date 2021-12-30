var socket = io();
var inputfield = [];
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-=[];',./"; 
var charactersspecial = "!@#"+ '$' + "%^&*()_+{}:" + '"|<>?';
var characterscodes = ["Backspace", "CapsLock", "Space", "ShiftLeft", "Backslash", "ShiftRight"];
var Caps = 0;
var audio = 1;

function load(){
	var classkeys = document.getElementsByClassName("keys");
	for (let i=0; i < classkeys.length; i++){
		classkeys[i].style = "line-height: " + (classkeys[0].clientHeight-10) + "px;";
	}
	for (let i=0; i < characterscodes.length; i++){
		document.getElementById(characterscodes[i]).style = "line-height: " + (classkeys[0].clientHeight-10) + "px;";
	}
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
	} 
	else if ((event.code == "ShiftRight" || event.code == "ShiftLeft") && Caps == 1) {
		changecaps(1);
		changeshift(0);
	} else {}
});
document.addEventListener('keydown', (event) => {
	// Get key codes
	var name = event.key;
	var code = event.code;
	
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
		if (audio == 1) {document.getElementById('audio').play();}
		document.getElementById(name.toLowerCase()).style.backgroundColor = "#6dff5f";
		setTimeout(clearcolors, 400, name.toLowerCase());
		try{clearTimeout(g);}catch{}
		inputfield.push(name)
		document.getElementById("poletekst").innerHTML = inputfield.join("");
		g = setTimeout(check, 1000);
	}
	else if (characterscodes.includes(code) == true){
		if (audio == 1) {document.getElementById('audio').play();}
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
		if (audio == 1) {document.getElementById('audio').play();}
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
	if (idname != "CapsLock" || Caps == 0){
		document.getElementById(idname).style.backgroundColor = "#eeeeee";
	} else {}
}
function check(){
	if (inputfield.join("") == "stop audio"){audio = 0;}
	if (inputfield.join("") == "start audio"){audio = 1;}
	if (inputfield.join("") == "audio-" && document.getElementById("audio").volume > 0){document.getElementById("audio").volume -= 0.2;}
	if (inputfield.join("") == "audio+" && document.getElementById("audio").volume < 1){document.getElementById("audio").volume += 0.2;}
	socket.emit('point', 1);
	inputfield = [];
}
socket.on('poletekst', function(text) {
   document.getElementById("poletekst").innerHTML = text;
});
