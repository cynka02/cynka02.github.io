var socket = io();
var inputfield = [];
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyząćęłńóśżźĄĆĘŁŃÓŚŻŹ1234567890-=!@#$%^&*()_+[]{};'" + '\:"|,./<>?';
var characterscodes = ["Backspace", "Tab", "CapsLock", "ShiftRight", "ControlRight", "AltRight", "AltLeft", "Space", "ControlLeft", "ShiftLeft", "Enter"];
var Caps = 0;

function load(){
	var classkeys = document.getElementsByClassName("keys");
	for (let i=0; i < classkeys.length; i++){
		classkeys[i].style = "line-height: " + classkeys[0].clientHeight + "px;";
	}
	for (let i=0; i < characterscodes.length; i++){
		document.getElementById(characterscodes[i]).style = "line-height: " + classkeys[0].clientHeight + "px;";
	}
}
function changecaps(value){
	var tempchar = characters.substring(26,52);
	var tempchar2 = characters.substring(0,26);
	if (value == 1){
		for (let i=0; i < tempchar.length; i++){
			document.getElementById(tempchar[i]).innerHTML = tempchar2[i];
		}
	}
	else if (value == 0){
		for (let i=0; i < tempchar.length; i++){
			document.getElementById(tempchar[i]).innerHTML = tempchar[i];
		}
	}
}

window.addEventListener('resize', load);
document.addEventListener('keyup', (event) => { 
	if ((event.code == "ShiftRight" || event.code == "ShiftLeft") && Caps == 0){
		changecaps(0);
	} 
	else if ((event.code == "ShiftRight" || event.code == "ShiftLeft") && Caps == 1) {
		changecaps(1);
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
	
	// Highlight and input key
	if (characters.includes(name) == true)
	{
		document.getElementById(name.toLowerCase()).style.backgroundColor = "#6dff5f";
		setTimeout(clearcolors, 400, name.toLowerCase());
		try{clearTimeout(g);}catch{}
		inputfield.push(name)
		document.getElementById("poletekst").innerHTML = inputfield.join("");
		g = setTimeout(check, 1000);
	}
	else if (characterscodes.includes(code) == true){
		document.getElementById(code).style.backgroundColor = "#6dff5f";
		setTimeout(clearcolors, 400, code);
	} else{}
}, false);

function clearcolors(idname){
	document.getElementById(idname).style.backgroundColor = document.getElementsByClassName("keys")[0].style.backgroundColor;
}
function check(){
	socket.emit('point', 1);
	inputfield = [];
}
socket.on('poletekst', function(point) {
   document.getElementById("poletekst").innerHTML = point;
});
