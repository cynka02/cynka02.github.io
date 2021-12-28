var socket = io();
var letters = [];
var inputfield = [];
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyząćęłńóśżźĄĆĘŁŃÓŚŻŹ1234567890-=!@#$%^&*()_+[]{};'" + '\:"|,./<>?';
var characterscolors = ["Backspace", "Tab", "Enter", "CapsLock", "Shift", "Control", "Alt", "AltGraph", " "]
var points;
function load(){
	var classkeys = document.getElementsByClassName("keys");
	for (let i=0; i < classkeys.length; i++){
		classkeys[i].style = "line-height: " + classkeys[0].clientHeight + "px;";
	}
	document.getElementById("Backspace").style = "line-height: " + classkeys[0].clientHeight + "px;";
	document.getElementById("Tab").style = "line-height: " + classkeys[0].clientHeight + "px;";
	document.getElementById("CapsLock").style = "line-height: " + classkeys[0].clientHeight + "px;";
	document.getElementById("Backslash").style = "line-height: " + classkeys[0].clientHeight + "px;";
	document.getElementById("Shift").style = "line-height: " + classkeys[0].clientHeight + "px;";
	document.getElementById("Control").style = "line-height: " + classkeys[0].clientHeight + "px;";
	document.getElementById("Alt").style = "line-height: " + classkeys[0].clientHeight + "px;";
	document.getElementById("Space").style = "line-height: " + classkeys[0].clientHeight + "px;";
	document.getElementById("AltGraph").style = "line-height: " + classkeys[0].clientHeight + "px;";
}
window.addEventListener('resize', load);
document.addEventListener('keydown', (event) => {
	var name = event.key;
	var code = event.code;
	if (characters.includes(name) == true || characterscolors.includes(name) == true || code == "Backslash")
	{
		if (name == " "){
			document.getElementById("Space").style.backgroundColor = "red";
			setTimeout(clearcolors, 400, "Space");
		}
		else if (code == "Backslash"){
			document.getElementById("Backslash").style.backgroundColor = "red";
			setTimeout(clearcolors, 400, "Backslash");
		}
		else{
			document.getElementById(name).style.backgroundColor = "red";
			setTimeout(clearcolors, 400, name);
		}
	}
	if (characters.includes(name) == true)
	{
		try{clearTimeout(g);}catch{}
		inputfield.push(name)
		document.getElementById("poletekst").innerHTML = inputfield.join("");
		g = setTimeout(check, 1000);
	}else{}
}, false);
function clearcolors(idname){
	document.getElementById(idname).style.backgroundColor = "white";
}
function check(){
	socket.emit('point', 1);
	inputfield = [];
	document.getElementById("poletekst").innerHTML = inputfield.join("");
}
function ja()
{
	socket.emit('point', 1);
}
socket.on('poletekst', function(point) {
   document.getElementById("poletekst").innerHTML = point;
});
//letters.push(characters.charAt(Math.floor(Math.random() * characters.length)));
