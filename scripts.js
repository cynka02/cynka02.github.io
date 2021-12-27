var letters = [];
var inputfield = [];
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyząćęłńóśżźĄĆĘŁŃÓŚŻŹ1234567890-=!@#$%^&*()_+[]{};'" + '\:"|,./<>?';
var points = 0;
document.addEventListener('keydown', (event) => {
	var name = event.key;
	var code = event.code;
	if (characters.includes(name) == true)
	{
		try{clearTimeout(g);}catch{}
		inputfield.push(name)
		document.getElementById("poletekst").innerHTML = inputfield.join("");
		g = setTimeout(check, 1000);
	}else{}
}, false);

function check()
{
	if (inputfield.join("") == "srututu")
	{
		location.href = "";
	} else{}
	inputfield = [];
	document.getElementById("poletekst").innerHTML = inputfield.join("");
}
//letters.push(characters.charAt(Math.floor(Math.random() * characters.length)));