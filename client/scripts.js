var socket = io();
var version = 2;
var AlertType = "";
var ssave;
var hsave;
var barP11;
var barP12;
var barkey1;
var barP21;
var barP22;
var barkey2;
var barP31;
var barP32;
var barkey3;
var barP41;
var barP42;
var barkey4;
var ifdl = false;
var ifbc = false;
var ifjk = false;
var ifAH = false;
var ifDL = false;
var ifBC = false;
var ifJK = false;
var menu = 1;
var logged = 0;
var strg = "";
var clickedletters = "e";
var Player = {
	nick: "",
	version: 2,
	Score: 0,
	Unlocked: ["e"],
	Letters: {
		// (0)Czy małe, (1)Czy duże, (2)ilość małych, (3)ilość dużych, (4)max małych, (5)max dużych, (6)prędkość małych, (7)prędkość dużych,
		// (8)odbl. małych, (9)odbl. dużych, (10)wydobyte małe ten soft, (11)wydobyte duże ten soft,
		// (12)wydobyte małe ogólnie, (13)wydobyte duże ogólnie, (14)poziom mastery małe, (15)poziom mastery duże,
		// (16)score małe, (17)score duże, (18)mnożnik speed małe, (19)mnożnik speed duże,
		// (20)nr prestige małe, (21)nr prestige duże,
		// (22)up strg score małe, (23)up strg ilość liter małe, (24)up strg litera małe, (25)up strg score postęp małe, (26)up strg litery postęp małe,
		//
		a: [false, false, 0, 0, 5, 3, 0.234, 0.1404, "eeeettt", "xE", 0, 0, 0, 0, 0, 0, 0.43, 12, 1, 1, 0, 0, 5, 8, "a", 0, 0],
		b: [false, false, 0, 0, 5, 3, 0.043, 0.0258, "eeeettt", "xE", 0, 0, 0, 0, 0, 0, 3.26, 12, 1, 1, 0, 0, 3, 6, "b", 0, 0],
		c: [false, false, 0, 0, 5, 3, 0.08, 0.048, "eeeettt", "xE", 0, 0, 0, 0, 0, 0, 1.75, 12, 1, 1, 0, 0, 3, 6, "c", 0, 0],
		d: [false, false, 0, 0, 5, 3, 0.123, 0.0738, "ssssssssssrrrrrrrr", "xE", 0, 0, 0, 0, 0, 0, 0.97, 12, 1, 1, 0, 0, 3, 7, "d", 0, 0],
		e: [true, false, 0, 0, 5, 3, 0.363, 0.2178, "eeeettt", "xE", 0, 0, 0, 0, 0, 0, 0.2, 12, 1, 1, 0, 0, 3, 8, "e", 0, 0],
		f: [false, false, 0, 0, 5, 3, 0.063, 0.0378, "eeeettt", "xE", 0, 0, 0, 0, 0, 0, 2.23, 12, 1, 1, 0, 0, 3, 6, "f", 0, 0],
		g: [false, false, 0, 0, 5, 3, 0.057, 0.0342, "eeeettt", "xE", 0, 0, 0, 0, 0, 0, 2.45, 12, 1, 1, 0, 0, 3, 6, "g", 0, 0],
		h: [false, false, 0, 0, 5, 3, 0.174, 0.1044, "nnnnnnssss", "xE", 0, 0, 0, 0, 0, 0, 0.57, 12, 1, 1, 0, 0, 7, 7, "h", 0, 0],
		i: [false, false, 0, 0, 5, 3, 0.2, 0.12, "tttttaaa", "xE", 0, 0, 0, 0, 0, 0, 0.5, 12, 1, 1, 0, 0, 6, 8, "i", 0, 0],
		j: [false, false, 0, 0, 5, 3, 0.015, 0.0090, "eeeettt", "xE", 0, 0, 0, 0, 0, 0, 10.67, 12, 1, 1, 0, 0, 3, 6, "j", 0, 0],
		k: [false, false, 0, 0, 5, 3, 0.023, 0.0138, "eeeettt", "xE", 0, 0, 0, 0, 0, 0, 6.96, 12, 1, 1, 0, 0, 3, 6, "k", 0, 0],
		l: [false, false, 0, 0, 5, 3, 0.114, 0.0684, "hhhhhhhhhhhhdddddddd", "xE", 0, 0, 0, 0, 0, 0, 1.06, 12, 1, 1, 0, 0, 3, 7, "l", 0, 0],
		m: [false, false, 0, 0, 5, 3, 0.069, 0.0414, "eeeettt", "xE", 0, 0, 0, 0, 0, 0, 2.03, 12, 1, 1, 0, 0, 3, 6, "m", 0, 0],
		n: [false, false, 0, 0, 5, 3, 0.191, 0.1146, "ttttoooo", "xE", 0, 0, 0, 0, 0, 0, 0.52, 12, 1, 1, 0, 0, 6, 7, "n", 0, 0],
		o: [false, false, 0, 0, 5, 3, 0.214, 0.1284, "eeeeeaa", "xE", 0, 0, 0, 0, 0, 0, 0.47, 12, 1, 1, 0, 0, 6, 8, "o", 0, 0],
		p: [false, false, 0, 0, 5, 3, 0.054, 0.0324, "eeeettt", "xE", 0, 0, 0, 0, 0, 0, 2.59, 12, 1, 1, 0, 0, 3, 6, "p", 0, 0],
		q: [false, false, 0, 0, 5, 3, 0.010, 0.0060, "eeeettt", "xE", 0, 0, 0, 0, 0, 0, 16, 12, 1, 1, 0, 0, 3, 6, "q", 0, 0],
		r: [false, false, 0, 0, 5, 3, 0.171, 0.1026, "ooooooohhhh", "xE", 0, 0, 0, 0, 0, 0, 0.58, 12, 1, 1, 0, 0, 7, 7, "r", 0, 0],
		s: [false, false, 0, 0, 5, 3, 0.18, 0.108, "eeeeiiiii", "xE", 0, 0, 0, 0, 0, 0, 0.56, 12, 1, 1, 0, 0, 7, 7, "s", 0, 0],
		t: [false, false, 0, 0, 5, 3, 0.26, 0.156, "eee", "xE", 0, 0, 0, 0, 0, 0, 0.38, 12, 1, 1, 0, 0, 5, 8, "t", 0, 0],
		u: [false, false, 0, 0, 5, 3, 0.08, 0.048, "eeeettt", "xE", 0, 0, 0, 0, 0, 0, 1.75, 12, 1, 1, 0, 0, 3, 6, "u", 0, 0],
		v: [false, false, 0, 0, 5, 3, 0.030, 0.0180, "eeeettt", "xE", 0, 0, 0, 0, 0, 0, 5.33, 12, 1, 1, 0, 0, 3, 6, "v", 0, 0],
		w: [false, false, 0, 0, 5, 3, 0.066, 0.0396, "eeeettt", "xE", 0, 0, 0, 0, 0, 0, 2.13, 12, 1, 1, 0, 0, 3, 6, "w", 0, 0],
		x: [false, false, 0, 0, 5, 3, 0.010, 0.0060, "eeeettt", "xE", 0, 0, 0, 0, 0, 0, 16, 12, 1, 1, 0, 0, 3, 6, "x", 0, 0],
		y: [false, false, 0, 0, 5, 3, 0.057, 0.0342, "eeeettt", "xE", 0, 0, 0, 0, 0, 0, 2.45, 12, 1, 1, 0, 0, 3, 6, "y", 0, 0],
		z: [false, false, 0, 0, 5, 3, 0.010, 0.0060, "eeeettt", "xE", 0, 0, 0, 0, 0, 0, 16, 12, 1, 1, 0, 0, 3, 6, "z", 0, 0]
	},
	Collectors: {
		// (0)czy odblokowany, (1)czy działa, (2)literka, (3)postęp
		0: [true, false, "", 0],
		1: [false, false, "", 0],
		2: [false, false, "", 0],
		3: [false, false, "", 0]
	}
};


document.getElementById("menu1").onclick = function(){changemenu(1)};
document.getElementById("menu2").onclick = function(){changemenu(2)};
document.getElementById("menu3").onclick = function(){changemenu(3)};
document.getElementById("menu4").onclick = function(){changemenu(4)};
document.getElementById("menu5").onclick = function(){changemenu(5)};
document.getElementById("menu1").onmouseover = function(){highlightmenu(1, 1)};
document.getElementById("menu1").onmouseout = function(){highlightmenu(1, 0)};
document.getElementById("menu2").onmouseover = function(){highlightmenu(2, 1)};
document.getElementById("menu2").onmouseout = function(){highlightmenu(2, 0)};
document.getElementById("menu3").onmouseover = function(){highlightmenu(3, 1)};
document.getElementById("menu3").onmouseout = function(){highlightmenu(3, 0)};
document.getElementById("menu4").onmouseover = function(){highlightmenu(4, 1)};
document.getElementById("menu4").onmouseout = function(){highlightmenu(4, 0)};
document.getElementById("menu5").onmouseover = function(){highlightmenu(5, 1)};
document.getElementById("menu5").onmouseout = function(){highlightmenu(5, 0)};

function changemenu(n){
	menu = n;
	for (let i=0; i < 5; i++){
		if (n != (i+1)){
			document.getElementById("menu"+(i+1)).style.lineHeight = "5vh";
			document.getElementById("menu"+(i+1)).style.fontSize = "2.8vh";
			document.getElementById("menu"+(i+1)).style.textDecoration = "auto";
			document.getElementById("menu"+(i+1)).style.backgroundColor = "#efeff7";
			document.getElementById("menu"+(i+1)).style.color = "#4e74d5";
		}
	}
	document.getElementById("main").style.display = "none";
	document.getElementById("mastery").style.display = "none";
	document.getElementById("storage").style.display = "none";
	document.getElementById("prestige").style.display = "none";
	document.getElementById("online").style.display = "none";
	document.getElementById("menu"+n).style.lineHeight = "4.5vh";
	document.getElementById("menu"+n).style.fontSize = "3.2vh";
	document.getElementById("menu"+n).style.textDecoration = "underline";
	document.getElementById("menu"+n).style.backgroundColor = "#4e74d5";
	document.getElementById("menu"+n).style.color = "#efeff7";
	if (n == 1){document.getElementById("main").style.display="block"};
	if (n == 2){document.getElementById("mastery").style.display="block"};
	if (n == 3){document.getElementById("storage").style.display="block"};
	if (n == 4){document.getElementById("prestige").style.display="block"};
	if (n == 5){document.getElementById("online").style.display="block"};
}

function highlightmenu(n, k){
	if (k == 1){
		document.getElementById("menu"+n).style.lineHeight = "4.5vh";
		document.getElementById("menu"+n).style.fontSize = "3.2vh";
		document.getElementById("menu"+n).style.textDecoration = "underline";
		document.getElementById("menu"+n).style.backgroundColor = "#4e74d5";
		document.getElementById("menu"+n).style.color = "#efeff7";
	}
	else if (n != menu){
		document.getElementById("menu"+n).style.lineHeight = "5vh";
		document.getElementById("menu"+n).style.fontSize = "2.8vh";
		document.getElementById("menu"+n).style.textDecoration = "auto";
		document.getElementById("menu"+n).style.backgroundColor = "#efeff7";
		document.getElementById("menu"+n).style.color = "#4e74d5";
	}
}

function resetlettersbg(){
	document.getElementById("lettersnormalaehinorst").style.color = "#ffa31b";
	document.getElementById("lettersnormalaehinorst").style.backgroundColor = "white";
	document.getElementById("lettersmainnormalaehinorst").style.display = "none";
	if (ifdl){
		document.getElementById("lettersnormaldl").style.color = "#34ff1b";
		document.getElementById("lettersnormaldl").style.backgroundColor = "white";
		document.getElementById("lettersmainnormaldl").style.display = "none";
	}
	if (ifbc){
		document.getElementById("lettersnormalbcfgmpuwy").style.color = "#1bacff";
		document.getElementById("lettersnormalbcfgmpuwy").style.backgroundColor = "white";
		document.getElementById("lettersmainnormalbcfgmpuwy").style.display = "none";
	}
	if (ifjk){
		document.getElementById("lettersnormaljkqvxz").style.color = "#e21bff";
		document.getElementById("lettersnormaljkqvxz").style.backgroundColor = "white";
		document.getElementById("lettersmainnormaljkqvxz").style.display = "none";
	}
	if (ifAH){
		document.getElementById("lettersuppercaseaehinorst").style.color = "#ffa31b";
		document.getElementById("lettersuppercaseaehinorst").style.backgroundColor = "white";
		document.getElementById("lettersmainuppercaseaehinorst").style.display = "none";
	}
	if (ifDL){
		document.getElementById("lettersuppercasedl").style.color = "#34ff1b";
		document.getElementById("lettersuppercasedl").style.backgroundColor = "white";
		document.getElementById("lettersmainuppercasedl").style.display = "none";
	}
	if (ifBC){
		document.getElementById("lettersuppercasebcfgmpuwy").style.color = "#1bacff";
		document.getElementById("lettersuppercasebcfgmpuwy").style.backgroundColor = "white";
		document.getElementById("lettersmainuppercasebcfgmpuwy").style.display = "none";
	}
	if (ifJK){
		document.getElementById("lettersuppercasejkqvxz").style.color = "#e21bff";
		document.getElementById("lettersuppercasejkqvxz").style.backgroundColor = "white";
		document.getElementById("lettersmainuppercasejkqvxz").style.display = "none";
	}
}
document.getElementById("lettersnormalaehinorst").onmouseover = function(){
	if (clickedletters != "e"){
		document.getElementById("lettersnormalaehinorst").style.color = "white";
		document.getElementById("lettersnormalaehinorst").style.backgroundColor = "#ffc166";
	}
}
document.getElementById("lettersnormalaehinorst").onmouseout = function(){
	if (clickedletters != "e"){
		document.getElementById("lettersnormalaehinorst").style.color = "#ffa31b";
		document.getElementById("lettersnormalaehinorst").style.backgroundColor = "white";
	}
}
document.getElementById("lettersnormalaehinorst").onclick = function(){
	if (clickedletters != "e"){
		clickedletters = "e";
		resetlettersbg();
		document.getElementById("lettersnormalaehinorst").style.color = "white";
		document.getElementById("lettersnormalaehinorst").style.backgroundColor = "#ffc166";
		document.getElementById("lettersmainnormalaehinorst").style.display = "block";
	}
	else{
		clickedletters = "";
		document.getElementById("lettersnormalaehinorst").style.color = "#ffa31b";
		document.getElementById("lettersnormalaehinorst").style.backgroundColor = "white";
		document.getElementById("lettersmainnormalaehinorst").style.display = "none";
	}
}
document.getElementById("lettersnormaldl").onmouseover = function(){
	if (clickedletters != "d" && ifdl){
		document.getElementById("lettersnormaldl").style.color = "white";
		document.getElementById("lettersnormaldl").style.backgroundColor = "#7dff6d";
	}
}
document.getElementById("lettersnormaldl").onmouseout = function(){
	if (clickedletters != "d" && ifdl){
		document.getElementById("lettersnormaldl").style.color = "#34ff1b";
		document.getElementById("lettersnormaldl").style.backgroundColor = "white";
	}
}
document.getElementById("lettersnormaldl").onclick = function(){
	if (clickedletters != "d" && ifdl){
		clickedletters = "d";
		resetlettersbg();
		document.getElementById("lettersnormaldl").style.color = "white";
		document.getElementById("lettersnormaldl").style.backgroundColor = "#7dff6d";
		document.getElementById("lettersmainnormaldl").style.display = "block";
	}
	else if (clickedletters == "d"){
		clickedletters = "";
		document.getElementById("lettersnormaldl").style.color = "#34ff1b";
		document.getElementById("lettersnormaldl").style.backgroundColor = "white";
		document.getElementById("lettersmainnormaldl").style.display = "none";
	}
}
document.getElementById("lettersnormalbcfgmpuwy").onmouseover = function(){
	if (clickedletters != "b" && ifbc){
		document.getElementById("lettersnormalbcfgmpuwy").style.color = "white";
		document.getElementById("lettersnormalbcfgmpuwy").style.backgroundColor = "#63c6ff";
	}
}
document.getElementById("lettersnormalbcfgmpuwy").onmouseout = function(){
	if (clickedletters != "b" && ifbc){
		document.getElementById("lettersnormalbcfgmpuwy").style.color = "#1bacff";
		document.getElementById("lettersnormalbcfgmpuwy").style.backgroundColor = "white";
	}
}
document.getElementById("lettersnormalbcfgmpuwy").onclick = function(){
	if (clickedletters != "b" && ifbc){
		clickedletters = "b";
		resetlettersbg();
		document.getElementById("lettersnormalbcfgmpuwy").style.color = "white";
		document.getElementById("lettersnormalbcfgmpuwy").style.backgroundColor = "#63c6ff";
		document.getElementById("lettersmainnormalbcfgmpuwy").style.display = "block";
	}
	else if (clickedletters == "b"){
		clickedletters = "";
		document.getElementById("lettersnormalbcfgmpuwy").style.color = "#1bacff";
		document.getElementById("lettersnormalbcfgmpuwy").style.backgroundColor = "white";
		document.getElementById("lettersmainnormalbcfgmpuwy").style.display = "none";
	}
}
document.getElementById("lettersnormaljkqvxz").onmouseover = function(){
	if (clickedletters != "j" && ifjk){
		document.getElementById("lettersnormaljkqvxz").style.color = "white";
		document.getElementById("lettersnormaljkqvxz").style.backgroundColor = "#ef82ff";
	}
}
document.getElementById("lettersnormaljkqvxz").onmouseout = function(){
	if (clickedletters != "j" && ifjk){
		document.getElementById("lettersnormaljkqvxz").style.color = "#e21bff";
		document.getElementById("lettersnormaljkqvxz").style.backgroundColor = "white";
	}
}
document.getElementById("lettersnormaljkqvxz").onclick = function(){
	if (clickedletters != "j" && ifjk){
		clickedletters = "j";
		resetlettersbg();
		document.getElementById("lettersnormaljkqvxz").style.color = "white";
		document.getElementById("lettersnormaljkqvxz").style.backgroundColor = "#ef82ff";
		document.getElementById("lettersmainnormaljkqvxz").style.display = "block";
	}
	else if (clickedletters == "j"){
		clickedletters = "";
		document.getElementById("lettersnormaljkqvxz").style.color = "#e21bff";
		document.getElementById("lettersnormaljkqvxz").style.backgroundColor = "white";
		document.getElementById("lettersmainnormaljkqvxz").style.display = "none";
	}
}

document.getElementById("lettersuppercaseaehinorst").onmouseover = function(){
	if (clickedletters != "E" && ifAH){
		document.getElementById("lettersuppercaseaehinorst").style.color = "white";
		document.getElementById("lettersuppercaseaehinorst").style.backgroundColor = "#ffc166";
	}
}
document.getElementById("lettersuppercaseaehinorst").onmouseout = function(){
	if (clickedletters != "E" && ifAH){
		document.getElementById("lettersuppercaseaehinorst").style.color = "#ffa31b";
		document.getElementById("lettersuppercaseaehinorst").style.backgroundColor = "white";
	}
}
document.getElementById("lettersuppercaseaehinorst").onclick = function(){
	if (clickedletters != "E" && ifAH){
		clickedletters = "E";
		resetlettersbg();
		document.getElementById("lettersuppercaseaehinorst").style.color = "white";
		document.getElementById("lettersuppercaseaehinorst").style.backgroundColor = "#ffc166";
		document.getElementById("lettersmainuppercaseaehinorst").style.display = "block";
	}
	else if (clickedletters == "E"){
		clickedletters = "";
		document.getElementById("lettersuppercaseaehinorst").style.color = "#ffa31b";
		document.getElementById("lettersuppercaseaehinorst").style.backgroundColor = "white";
		document.getElementById("lettersmainuppercaseaehinorst").style.display = "none";
	}
}
document.getElementById("lettersuppercasedl").onmouseover = function(){
	if (clickedletters != "D" && ifDL){
		document.getElementById("lettersuppercasedl").style.color = "white";
		document.getElementById("lettersuppercasedl").style.backgroundColor = "#7dff6d";
	}
}
document.getElementById("lettersuppercasedl").onmouseout = function(){
	if (clickedletters != "D" && ifDL){
		document.getElementById("lettersuppercasedl").style.color = "#34ff1b";
		document.getElementById("lettersuppercasedl").style.backgroundColor = "white";
	}
}
document.getElementById("lettersuppercasedl").onclick = function(){
	if (clickedletters != "D" && ifDL){
		clickedletters = "D";
		resetlettersbg();
		document.getElementById("lettersuppercasedl").style.color = "white";
		document.getElementById("lettersuppercasedl").style.backgroundColor = "#7dff6d";
		document.getElementById("lettersmainuppercasedl").style.display = "block";
	}
	else if (clickedletters == "D"){
		clickedletters = "";
		document.getElementById("lettersuppercasedl").style.color = "#34ff1b";
		document.getElementById("lettersuppercasedl").style.backgroundColor = "white";
		document.getElementById("lettersmainuppercasedl").style.display = "none";
	}
}
document.getElementById("lettersuppercasebcfgmpuwy").onmouseover = function(){
	if (clickedletters != "B" && ifBC){
		document.getElementById("lettersuppercasebcfgmpuwy").style.color = "white";
		document.getElementById("lettersuppercasebcfgmpuwy").style.backgroundColor = "#63c6ff";
	}
}
document.getElementById("lettersuppercasebcfgmpuwy").onmouseout = function(){
	if (clickedletters != "B" && ifBC){
		document.getElementById("lettersuppercasebcfgmpuwy").style.color = "#1bacff";
		document.getElementById("lettersuppercasebcfgmpuwy").style.backgroundColor = "white";
	}
}
document.getElementById("lettersuppercasebcfgmpuwy").onclick = function(){
	if (clickedletters != "B" && ifBC){
		clickedletters = "B";
		resetlettersbg();
		document.getElementById("lettersuppercasebcfgmpuwy").style.color = "white";
		document.getElementById("lettersuppercasebcfgmpuwy").style.backgroundColor = "#63c6ff";
		document.getElementById("lettersmainuppercasebcfgmpuwy").style.display = "block";
	}
	else if (clickedletters == "B"){
		clickedletters = "";
		document.getElementById("lettersuppercasebcfgmpuwy").style.color = "#1bacff";
		document.getElementById("lettersuppercasebcfgmpuwy").style.backgroundColor = "white";
		document.getElementById("lettersmainuppercasebcfgmpuwy").style.display = "none";
	}
}
document.getElementById("lettersuppercasejkqvxz").onmouseover = function(){
	if (clickedletters != "J" && ifJK){
		document.getElementById("lettersuppercasejkqvxz").style.color = "white";
		document.getElementById("lettersuppercasejkqvxz").style.backgroundColor = "#ef82ff";
	}
}
document.getElementById("lettersuppercasejkqvxz").onmouseout = function(){
	if (clickedletters != "J" && ifJK){
		document.getElementById("lettersuppercasejkqvxz").style.color = "#e21bff";
		document.getElementById("lettersuppercasejkqvxz").style.backgroundColor = "white";
	}
}
document.getElementById("lettersuppercasejkqvxz").onclick = function(){
	if (clickedletters != "J" && ifJK){
		clickedletters = "J";
		resetlettersbg();
		document.getElementById("lettersuppercasejkqvxz").style.color = "white";
		document.getElementById("lettersuppercasejkqvxz").style.backgroundColor = "#ef82ff";
		document.getElementById("lettersmainuppercasejkqvxz").style.display = "block";
	}
	else if (clickedletters == "J"){
		clickedletters = "";
		document.getElementById("lettersuppercasejkqvxz").style.color = "#e21bff";
		document.getElementById("lettersuppercasejkqvxz").style.backgroundColor = "white";
		document.getElementById("lettersmainuppercasejkqvxz").style.display = "none";
	}
}


function allowDropl(e) {
	e.preventDefault();
}
function dragl(e){
	e.target.style.opacity = 0.2;
	if (e.target.id.slice(0,3) == "nor" && Player.Letters[e.target.id.slice(6)][2] < Player.Letters[e.target.id.slice(6)][4]){
		for (let i=0; i < 4; i++){
			if (Player.Collectors[i][0] && Player.Collectors[i][1] == false){
				document.getElementById("collector"+(i+1)+"main").style.background = "#eaffe7";
				document.getElementById("collector"+(i+1)).style.transform = "scale(1.1,1.1)";
			}
		}
	}
	else if (e.target.id.slice(0,3) == "upp" && Player.Letters[e.target.id.slice(9)][3] < Player.Letters[e.target.id.slice(9)][5]){
		for (let i=0; i < 4; i++){
			if (Player.Collectors[i][0] && Player.Collectors[i][1] == false){
				document.getElementById("collector"+(i+1)+"main").style.background = "#eaffe7";
				document.getElementById("collector"+(i+1)).style.transform = "scale(1.1,1.1)";
			}
		}
	}
	e.dataTransfer.setData("text/html", e.target.id);
}
function dragcol(e){
	e.dataTransfer.setData("text/html", e.target.id);
	document.getElementById("letters").style.background = "#eaffe7";
}
function dragendl(e){
	e.target.style.opacity = 1;
	for (let i=0; i < 4; i++){
		if (Player.Collectors[i][0] && Player.Collectors[i][1] == false){
			document.getElementById("collector"+(i+1)+"main").style.background = "white";
			document.getElementById("collector"+(i+1)).style.transform = "scale(1,1)";
		}
	}
}
function dragendcol(e){
	document.getElementById("letters").style.background = "";
}
function dropl(e) {
	e.preventDefault();
	var id = e.dataTransfer.getData("text/html");
	coldrop(e.target.id, id)
	return false;
}
function droponl(e) {
	e.preventDefault();
	var id = e.dataTransfer.getData("text/html");
	if (id == "collector1main")
	{
		document.getElementById("collector1time").innerHTML = "&nbsp;";
		document.getElementById("collector1letter").innerHTML = "#1";
		document.getElementById("collector1letter").style.opacity = 0.07;
		document.getElementById("collector1strg").innerHTML = "&nbsp;";
		document.getElementById("collector1main").style.cursor = "default";
		document.getElementById("collector1main").setAttribute("draggable", false);
		document.getElementById("collector1main").style.background = "white";
		document.getElementById("collector1").style.background = "white";
		Player.Collectors[0][1] = false;
		if (Player.Collectors[0][2] == Player.Collectors[0][2].toLowerCase()){
			document.getElementById("normal" + Player.Collectors[0][2]).style.opacity = 1;
			document.getElementById("normal" + Player.Collectors[0][2]).style.background = "";
		}
		else{
			document.getElementById("uppercase" + Player.Collectors[0][2].toLowerCase()).style.opacity = 1;
			document.getElementById("uppercase" + Player.Collectors[0][2].toLowerCase()).style.background = "";
		}
		Player.Collectors[0][2] = "";
		Player.Collectors[0][3] = 0;
		save();
	}
	else if (id == "collector2main")
	{
		document.getElementById("collector2time").innerHTML = "&nbsp;";
		document.getElementById("collector2letter").innerHTML = "#2";
		document.getElementById("collector2letter").style.opacity = 0.07;
		document.getElementById("collector2strg").innerHTML = "&nbsp;";
		document.getElementById("collector2main").style.cursor = "default";
		document.getElementById("collector2main").setAttribute("draggable", false);
		document.getElementById("collector2main").style.background = "white";
		document.getElementById("collector2").style.background = "white";
		Player.Collectors[1][1] = false;
		if (Player.Collectors[1][2] == Player.Collectors[1][2].toLowerCase()){
			document.getElementById("normal" + Player.Collectors[1][2]).style.opacity = 1;
			document.getElementById("normal" + Player.Collectors[1][2]).style.background = "";
		}
		else{
			document.getElementById("uppercase" + Player.Collectors[1][2].toLowerCase()).style.opacity = 1;
			document.getElementById("uppercase" + Player.Collectors[1][2].toLowerCase()).style.background = "";
		}
		Player.Collectors[1][2] = "";
		Player.Collectors[1][3] = 0;
		save();
	}
	else if (id == "collector3main")
	{
		document.getElementById("collector3time").innerHTML = "&nbsp;";
		document.getElementById("collector3letter").innerHTML = "#3";
		document.getElementById("collector3letter").style.opacity = 0.07;
		document.getElementById("collector3strg").innerHTML = "&nbsp;";
		document.getElementById("collector3main").style.cursor = "default";
		document.getElementById("collector3main").setAttribute("draggable", false);
		document.getElementById("collector3main").style.background = "white";
		document.getElementById("collector3").style.background = "white";
		Player.Collectors[2][1] = false;
		if (Player.Collectors[2][2] == Player.Collectors[2][2].toLowerCase()){
			document.getElementById("normal" + Player.Collectors[2][2]).style.opacity = 1;
			document.getElementById("normal" + Player.Collectors[2][2]).style.background = "";
		}
		else{
			document.getElementById("uppercase" + Player.Collectors[2][2].toLowerCase()).style.opacity = 1;
			document.getElementById("uppercase" + Player.Collectors[2][2].toLowerCase()).style.background = "";
		}
		Player.Collectors[2][2] = "";
		Player.Collectors[2][3] = 0;
		save();
	}
	else if (id == "collector4main")
	{
		document.getElementById("collector4time").innerHTML = "&nbsp;";
		document.getElementById("collector4letter").innerHTML = "#4";
		document.getElementById("collector4letter").style.opacity = 0.07;
		document.getElementById("collector4strg").innerHTML = "&nbsp;";
		document.getElementById("collector4main").style.cursor = "default";
		document.getElementById("collector4main").setAttribute("draggable", false);
		document.getElementById("collector4main").style.background = "white";
		document.getElementById("collector4").style.background = "white";
		Player.Collectors[3][1] = false;
		if (Player.Collectors[3][2] == Player.Collectors[3][2].toLowerCase()){
			document.getElementById("normal" + Player.Collectors[3][2]).style.opacity = 1;
			document.getElementById("normal" + Player.Collectors[3][2]).style.background = "";
		}
		else{
			document.getElementById("uppercase" + Player.Collectors[3][2].toLowerCase()).style.opacity = 1;
			document.getElementById("uppercase" + Player.Collectors[3][2].toLowerCase()).style.background = "";
		}
		Player.Collectors[3][2] = "";
		Player.Collectors[3][3] = 0;
		save();
	}
	return false;
}

function coldrop(colid, letid){
	if (letid.slice(0,3) == "nor"){
		if (colid == "collector1main" || colid == "collector1letter" || colid == "collector1time" || colid == "collector1strg"){
			if (Player.Letters[letid.slice(6)][2] < Player.Letters[letid.slice(6)][4]){
				document.getElementById("collector1time").innerHTML = (1/Player.Letters[letid.slice(6)][6]).toFixed(1) + "s";
				document.getElementById("collector1letter").innerHTML = letid.slice(6);
				document.getElementById("collector1letter").style.opacity = 1;
				document.getElementById("collector1strg").innerHTML = Player.Letters[letid.slice(6)][2] + "/" + Player.Letters[letid.slice(6)][4];
				document.getElementById("collector1main").style.cursor = "move";
				document.getElementById("collector1main").setAttribute("draggable", true);
				document.getElementById("collector1").style.transform = "scale(1,1)";
				document.getElementById("collector1").style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[letid.slice(6)][2]/Player.Letters[letid.slice(6)][4]*100)+"%, white "+(Player.Letters[letid.slice(6)][2]/Player.Letters[letid.slice(6)][4]*100)+"%)";
				Player.Collectors[0][1] = true;
				if (Player.Collectors[0][2] != "" && Player.Collectors[0][2] == Player.Collectors[0][2].toLowerCase()){
					document.getElementById("normal" + Player.Collectors[0][2]).style.opacity = 1;
					document.getElementById("normal" + Player.Collectors[0][2]).style.background = "";
				}
				else if (Player.Collectors[0][2] != "" && Player.Collectors[0][2] != Player.Collectors[0][2].toLowerCase()){
					document.getElementById("uppercase" + Player.Collectors[0][2].toLowerCase()).style.opacity = 1;
					document.getElementById("uppercase" + Player.Collectors[0][2].toLowerCase()).style.background = "";
				}
				Player.Collectors[0][2] = letid.slice(6);
				Player.Collectors[0][3] = 0;
				if (Player.Collectors[1][2] == letid.slice(6)){
					Player.Collectors[1][1] = false;
					Player.Collectors[1][2] = "";
					Player.Collectors[1][3] = 0;
					document.getElementById("collector2time").innerHTML = "&nbsp;";
					document.getElementById("collector2letter").innerHTML = "#2";
					document.getElementById("collector2letter").style.opacity = 0.07;
					document.getElementById("collector2strg").innerHTML = "&nbsp;";
					document.getElementById("collector2main").style.cursor = "default";
					document.getElementById("collector2main").setAttribute("draggable", false);
					document.getElementById("collector2main").style.background = "white";
					document.getElementById("collector2").style.background = "white";
				}
				else if (Player.Collectors[2][2] == letid.slice(6)){
					Player.Collectors[2][1] = false;
					Player.Collectors[2][2] = "";
					Player.Collectors[2][3] = 0;
					document.getElementById("collector3time").innerHTML = "&nbsp;";
					document.getElementById("collector3letter").innerHTML = "#3";
					document.getElementById("collector3letter").style.opacity = 0.07;
					document.getElementById("collector3strg").innerHTML = "&nbsp;";
					document.getElementById("collector3main").style.cursor = "default";
					document.getElementById("collector3main").setAttribute("draggable", false);
					document.getElementById("collector3main").style.background = "white";
					document.getElementById("collector3").style.background = "white";
				}
				else if (Player.Collectors[3][2] == letid.slice(6)){
					Player.Collectors[3][1] = false;
					Player.Collectors[3][2] = "";
					Player.Collectors[3][3] = 0;
					document.getElementById("collector4time").innerHTML = "&nbsp;";
					document.getElementById("collector4letter").innerHTML = "#4";
					document.getElementById("collector4letter").style.opacity = 0.07;
					document.getElementById("collector4strg").innerHTML = "&nbsp;";
					document.getElementById("collector4main").style.cursor = "default";
					document.getElementById("collector4main").setAttribute("draggable", false);
					document.getElementById("collector4main").style.background = "white";
					document.getElementById("collector4").style.background = "white";
				}
				save();
			}
		}
		else if (colid == "collector2main" || colid == "collector2letter" || colid == "collector2time" || colid == "collector2strg"){
			if (Player.Letters[letid.slice(6)][2] < Player.Letters[letid.slice(6)][4]){
				document.getElementById("normal" + letid.slice(6)).style.opacity = 1;
				document.getElementById("collector2time").innerHTML = (1/Player.Letters[letid.slice(6)][6]).toFixed(1) + "s";
				document.getElementById("collector2letter").innerHTML = letid.slice(6);
				document.getElementById("collector2letter").style.opacity = 1;
				document.getElementById("collector2strg").innerHTML = Player.Letters[letid.slice(6)][2] + "/" + Player.Letters[letid.slice(6)][4];
				document.getElementById("collector2main").style.cursor = "move";
				document.getElementById("collector2main").setAttribute("draggable", true);
				document.getElementById("collector2").style.transform = "scale(1,1)";
				document.getElementById("collector2").style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[letid.slice(6)][2]/Player.Letters[letid.slice(6)][4]*100)+"%, white "+(Player.Letters[letid.slice(6)][2]/Player.Letters[letid.slice(6)][4]*100)+"%)";
				Player.Collectors[1][1] = true;
				if (Player.Collectors[1][2] != "" && Player.Collectors[1][2] == Player.Collectors[1][2].toLowerCase()){
					document.getElementById("normal" + Player.Collectors[1][2]).style.opacity = 1;
					document.getElementById("normal" + Player.Collectors[1][2]).style.background = "";
				}
				else if (Player.Collectors[1][2] != "" && Player.Collectors[1][2] != Player.Collectors[1][2].toLowerCase()){
					document.getElementById("uppercase" + Player.Collectors[1][2].toLowerCase()).style.opacity = 1;
					document.getElementById("uppercase" + Player.Collectors[1][2].toLowerCase()).style.background = "";
				}
				Player.Collectors[1][2] = letid.slice(6);
				Player.Collectors[1][3] = 0;
				if (Player.Collectors[0][2] == letid.slice(6)){
					Player.Collectors[0][1] = false;
					Player.Collectors[0][2] = "";
					Player.Collectors[0][3] = 0;
					document.getElementById("collector1time").innerHTML = "&nbsp;";
					document.getElementById("collector1letter").innerHTML = "#1";
					document.getElementById("collector1letter").style.opacity = 0.07;
					document.getElementById("collector1strg").innerHTML = "&nbsp;";
					document.getElementById("collector1main").style.cursor = "default";
					document.getElementById("collector1main").setAttribute("draggable", false);
					document.getElementById("collector1main").style.background = "white";
					document.getElementById("collector1").style.background = "white";
				}
				else if (Player.Collectors[2][2] == letid.slice(6)){
					Player.Collectors[2][1] = false;
					Player.Collectors[2][2] = "";
					Player.Collectors[2][3] = 0;
					document.getElementById("collector3time").innerHTML = "&nbsp;";
					document.getElementById("collector3letter").innerHTML = "#3";
					document.getElementById("collector3letter").style.opacity = 0.07;
					document.getElementById("collector3strg").innerHTML = "&nbsp;";
					document.getElementById("collector3main").style.cursor = "default";
					document.getElementById("collector3main").setAttribute("draggable", false);
					document.getElementById("collector3main").style.background = "white";
					document.getElementById("collector3").style.background = "white";
				}
				else if (Player.Collectors[3][2] == letid.slice(6)){
					Player.Collectors[3][1] = false;
					Player.Collectors[3][2] = "";
					Player.Collectors[3][3] = 0;
					document.getElementById("collector4time").innerHTML = "&nbsp;";
					document.getElementById("collector4letter").innerHTML = "#4";
					document.getElementById("collector4letter").style.opacity = 0.07;
					document.getElementById("collector4strg").innerHTML = "&nbsp;";
					document.getElementById("collector4main").style.cursor = "default";
					document.getElementById("collector4main").setAttribute("draggable", false);
					document.getElementById("collector4main").style.background = "white";
					document.getElementById("collector4").style.background = "white";
				}
				save();
			}
		}
		else if (colid == "collector3main" || colid == "collector3letter" || colid == "collector3time" || colid == "collector3strg"){
			if (Player.Letters[letid.slice(6)][2] < Player.Letters[letid.slice(6)][4]){
				document.getElementById("normal" + letid.slice(6)).style.opacity = 1;
				document.getElementById("collector3time").innerHTML = (1/Player.Letters[letid.slice(6)][6]).toFixed(1) + "s";
				document.getElementById("collector3letter").innerHTML = letid.slice(6);
				document.getElementById("collector3letter").style.opacity = 1;
				document.getElementById("collector3strg").innerHTML = Player.Letters[letid.slice(6)][2] + "/" + Player.Letters[letid.slice(6)][4];
				document.getElementById("collector3main").style.cursor = "move";
				document.getElementById("collector3main").setAttribute("draggable", true);
				document.getElementById("collector3").style.transform = "scale(1,1)";
				document.getElementById("collector3").style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[letid.slice(6)][2]/Player.Letters[letid.slice(6)][4]*100)+"%, white "+(Player.Letters[letid.slice(6)][2]/Player.Letters[letid.slice(6)][4]*100)+"%)";
				Player.Collectors[2][1] = true;
				if (Player.Collectors[2][2] != "" && Player.Collectors[2][2] == Player.Collectors[2][2].toLowerCase()){
					document.getElementById("normal" + Player.Collectors[2][2]).style.opacity = 1;
					document.getElementById("normal" + Player.Collectors[2][2]).style.background = "";
				}
				else if (Player.Collectors[2][2] != "" && Player.Collectors[2][2] != Player.Collectors[2][2].toLowerCase()){
					document.getElementById("uppercase" + Player.Collectors[2][2].toLowerCase()).style.opacity = 1;
					document.getElementById("uppercase" + Player.Collectors[2][2].toLowerCase()).style.background = "";
				}
				Player.Collectors[2][2] = letid.slice(6);
				Player.Collectors[2][3] = 0;
				if (Player.Collectors[0][2] == letid.slice(6)){
					Player.Collectors[0][1] = false;
					Player.Collectors[0][2] = "";
					Player.Collectors[0][3] = 0;
					document.getElementById("collector1time").innerHTML = "&nbsp;";
					document.getElementById("collector1letter").innerHTML = "#1";
					document.getElementById("collector1letter").style.opacity = 0.07;
					document.getElementById("collector1strg").innerHTML = "&nbsp;";
					document.getElementById("collector1main").style.cursor = "default";
					document.getElementById("collector1main").setAttribute("draggable", false);
					document.getElementById("collector1main").style.background = "white";
					document.getElementById("collector1").style.background = "white";
				}
				else if (Player.Collectors[1][2] == letid.slice(6)){
					Player.Collectors[1][1] = false;
					Player.Collectors[1][2] = "";
					Player.Collectors[1][3] = 0;
					document.getElementById("collector2time").innerHTML = "&nbsp;";
					document.getElementById("collector2letter").innerHTML = "#2";
					document.getElementById("collector2letter").style.opacity = 0.07;
					document.getElementById("collector2strg").innerHTML = "&nbsp;";
					document.getElementById("collector2main").style.cursor = "default";
					document.getElementById("collector2main").setAttribute("draggable", false);
					document.getElementById("collector2main").style.background = "white";
					document.getElementById("collector2").style.background = "white";
				}
				else if (Player.Collectors[3][2] == letid.slice(6)){
					Player.Collectors[3][1] = false;
					Player.Collectors[3][2] = "";
					Player.Collectors[3][3] = 0;
					document.getElementById("collector4time").innerHTML = "&nbsp;";
					document.getElementById("collector4letter").innerHTML = "#4";
					document.getElementById("collector4letter").style.opacity = 0.07;
					document.getElementById("collector4strg").innerHTML = "&nbsp;";
					document.getElementById("collector4main").style.cursor = "default";
					document.getElementById("collector4main").setAttribute("draggable", false);
					document.getElementById("collector4main").style.background = "white";
					document.getElementById("collector4").style.background = "white";
				}
				save();
			}
		}
		else if (colid == "collector4main" || colid == "collector4letter" || colid == "collector4time" || colid == "collector4strg"){
			if (Player.Letters[letid.slice(6)][2] < Player.Letters[letid.slice(6)][4]){
				document.getElementById("normal" + letid.slice(6)).style.opacity = 1;
				document.getElementById("collector4time").innerHTML = (1/Player.Letters[letid.slice(6)][6]).toFixed(1) + "s";
				document.getElementById("collector4letter").innerHTML = letid.slice(6);
				document.getElementById("collector4letter").style.opacity = 1;
				document.getElementById("collector4strg").innerHTML = Player.Letters[letid.slice(6)][2] + "/" + Player.Letters[letid.slice(6)][4];
				document.getElementById("collector4main").style.cursor = "move";
				document.getElementById("collector4main").setAttribute("draggable", true);
				document.getElementById("collector4").style.transform = "scale(1,1)";
				document.getElementById("collector4").style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[letid.slice(6)][2]/Player.Letters[letid.slice(6)][4]*100)+"%, white "+(Player.Letters[letid.slice(6)][2]/Player.Letters[letid.slice(6)][4]*100)+"%)";
				Player.Collectors[3][1] = true;
				if (Player.Collectors[3][2] != "" && Player.Collectors[3][2] == Player.Collectors[3][2].toLowerCase()){
					document.getElementById("normal" + Player.Collectors[3][2]).style.opacity = 1;
					document.getElementById("normal" + Player.Collectors[3][2]).style.background = "";
				}
				else if (Player.Collectors[3][2] != "" && Player.Collectors[3][2] != Player.Collectors[3][2].toLowerCase()){
					document.getElementById("uppercase" + Player.Collectors[3][2].toLowerCase()).style.opacity = 1;
					document.getElementById("uppercase" + Player.Collectors[3][2].toLowerCase()).style.background = "";
				}
				Player.Collectors[3][2] = letid.slice(6);
				Player.Collectors[3][3] = 0;
				if (Player.Collectors[0][2] == letid.slice(6)){
					Player.Collectors[0][1] = false;
					Player.Collectors[0][2] = "";
					Player.Collectors[0][3] = 0;
					document.getElementById("collector1time").innerHTML = "&nbsp;";
					document.getElementById("collector1letter").innerHTML = "#1";
					document.getElementById("collector1letter").style.opacity = 0.07;
					document.getElementById("collector1strg").innerHTML = "&nbsp;";
					document.getElementById("collector1main").style.cursor = "default";
					document.getElementById("collector1main").setAttribute("draggable", false);
					document.getElementById("collector1main").style.background = "white";
					document.getElementById("collector1").style.background = "white";
				}
				else if (Player.Collectors[1][2] == letid.slice(6)){
					Player.Collectors[1][1] = false;
					Player.Collectors[1][2] = "";
					Player.Collectors[1][3] = 0;
					document.getElementById("collector2time").innerHTML = "&nbsp;";
					document.getElementById("collector2letter").innerHTML = "#2";
					document.getElementById("collector2letter").style.opacity = 0.07;
					document.getElementById("collector2strg").innerHTML = "&nbsp;";
					document.getElementById("collector2main").style.cursor = "default";
					document.getElementById("collector2main").setAttribute("draggable", false);
					document.getElementById("collector2main").style.background = "white";
					document.getElementById("collector2").style.background = "white";
				}
				else if (Player.Collectors[2][2] == letid.slice(6)){
					Player.Collectors[2][1] = false;
					Player.Collectors[2][2] = "";
					Player.Collectors[2][3] = 0;
					document.getElementById("collector3time").innerHTML = "&nbsp;";
					document.getElementById("collector3letter").innerHTML = "#3";
					document.getElementById("collector3letter").style.opacity = 0.07;
					document.getElementById("collector3strg").innerHTML = "&nbsp;";
					document.getElementById("collector3main").style.cursor = "default";
					document.getElementById("collector3main").setAttribute("draggable", false);
					document.getElementById("collector3main").style.background = "white";
					document.getElementById("collector3").style.background = "white";
				}
				save();
			}
		}
	}
	else if (letid.slice(0,3) == "upp"){
		if (colid == "collector1main" || colid == "collector1letter" || colid == "collector1time" || colid == "collector1strg"){
			if (Player.Letters[letid.slice(9)][3] < Player.Letters[letid.slice(9)][5]){
				document.getElementById("collector1time").innerHTML = (1/Player.Letters[letid.slice(9)][7]).toFixed(1) + "s";
				document.getElementById("collector1letter").innerHTML = letid.slice(9).toUpperCase();
				document.getElementById("collector1letter").style.opacity = 1;
				document.getElementById("collector1strg").innerHTML = Player.Letters[letid.slice(9)][3] + "/" + Player.Letters[letid.slice(9)][5];
				document.getElementById("collector1main").style.cursor = "move";
				document.getElementById("collector1main").setAttribute("draggable", true);
				document.getElementById("collector1").style.transform = "scale(1,1)";
				document.getElementById("collector1").style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[letid.slice(9)][3]/Player.Letters[letid.slice(9)][5]*100)+"%, white "+(Player.Letters[letid.slice(9)][3]/Player.Letters[letid.slice(9)][5]*100)+"%)";
				Player.Collectors[0][1] = true;
				if (Player.Collectors[0][2] != "" && Player.Collectors[0][2] == Player.Collectors[0][2].toLowerCase()){
					document.getElementById("normal" + Player.Collectors[0][2]).style.opacity = 1;
					document.getElementById("normal" + Player.Collectors[0][2]).style.background = "";
				}
				else if (Player.Collectors[0][2] != "" && Player.Collectors[0][2] != Player.Collectors[0][2].toLowerCase()){
					document.getElementById("uppercase" + Player.Collectors[0][2].toLowerCase()).style.opacity = 1;
					document.getElementById("uppercase" + Player.Collectors[0][2].toLowerCase()).style.background = "";
				}
				Player.Collectors[0][2] = letid.slice(9).toUpperCase();
				Player.Collectors[0][3] = 0;
				if (Player.Collectors[1][2] == letid.slice(9).toUpperCase()){
					Player.Collectors[1][1] = false;
					Player.Collectors[1][2] = "";
					Player.Collectors[1][3] = 0;
					document.getElementById("collector2time").innerHTML = "&nbsp;";
					document.getElementById("collector2letter").innerHTML = "#2";
					document.getElementById("collector2letter").style.opacity = 0.07;
					document.getElementById("collector2strg").innerHTML = "&nbsp;";
					document.getElementById("collector2main").style.cursor = "default";
					document.getElementById("collector2main").setAttribute("draggable", false);
					document.getElementById("collector2main").style.background = "white";
					document.getElementById("collector2").style.background = "white";
				}
				else if (Player.Collectors[2][2] == letid.slice(9).toUpperCase()){
					Player.Collectors[2][1] = false;
					Player.Collectors[2][2] = "";
					Player.Collectors[2][3] = 0;
					document.getElementById("collector3time").innerHTML = "&nbsp;";
					document.getElementById("collector3letter").innerHTML = "#3";
					document.getElementById("collector3letter").style.opacity = 0.07;
					document.getElementById("collector3strg").innerHTML = "&nbsp;";
					document.getElementById("collector3main").style.cursor = "default";
					document.getElementById("collector3main").setAttribute("draggable", false);
					document.getElementById("collector3main").style.background = "white";
					document.getElementById("collector3").style.background = "white";
				}
				else if (Player.Collectors[3][2] == letid.slice(9).toUpperCase()){
					Player.Collectors[3][1] = false;
					Player.Collectors[3][2] = "";
					Player.Collectors[3][3] = 0;
					document.getElementById("collector4time").innerHTML = "&nbsp;";
					document.getElementById("collector4letter").innerHTML = "#4";
					document.getElementById("collector4letter").style.opacity = 0.07;
					document.getElementById("collector4strg").innerHTML = "&nbsp;";
					document.getElementById("collector4main").style.cursor = "default";
					document.getElementById("collector4main").setAttribute("draggable", false);
					document.getElementById("collector4main").style.background = "white";
					document.getElementById("collector4").style.background = "white";
				}
				save();
			}
		}
		else if (colid == "collector2main" || colid == "collector2letter" || colid == "collector2time" || colid == "collector2strg"){
			if (Player.Letters[letid.slice(9)][3] < Player.Letters[letid.slice(9)][5]){
				document.getElementById("uppercase" + letid.slice(9)).style.opacity = 1;
				document.getElementById("collector2time").innerHTML = (1/Player.Letters[letid.slice(9)][7]).toFixed(1) + "s";
				document.getElementById("collector2letter").innerHTML = letid.slice(9).toUpperCase();
				document.getElementById("collector2letter").style.opacity = 1;
				document.getElementById("collector2strg").innerHTML = Player.Letters[letid.slice(9)][3] + "/" + Player.Letters[letid.slice(9)][5];
				document.getElementById("collector2main").style.cursor = "move";
				document.getElementById("collector2main").setAttribute("draggable", true);
				document.getElementById("collector2").style.transform = "scale(1,1)";
				document.getElementById("collector2").style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[letid.slice(9)][3]/Player.Letters[letid.slice(9)][5]*100)+"%, white "+(Player.Letters[letid.slice(9)][3]/Player.Letters[letid.slice(9)][5]*100)+"%)";
				Player.Collectors[1][1] = true;
				if (Player.Collectors[1][2] != "" && Player.Collectors[1][2] == Player.Collectors[1][2].toLowerCase()){
					document.getElementById("normal" + Player.Collectors[1][2]).style.opacity = 1;
					document.getElementById("normal" + Player.Collectors[1][2]).style.background = "";
				}
				else if (Player.Collectors[1][2] != "" && Player.Collectors[1][2] != Player.Collectors[1][2].toLowerCase()){
					document.getElementById("uppercase" + Player.Collectors[1][2].toLowerCase()).style.opacity = 1;
					document.getElementById("uppercase" + Player.Collectors[1][2].toLowerCase()).style.background = "";
				}
				Player.Collectors[1][2] = letid.slice(9).toUpperCase();
				Player.Collectors[1][3] = 0;
				if (Player.Collectors[0][2] == letid.slice(9).toUpperCase()){
					Player.Collectors[0][1] = false;
					Player.Collectors[0][2] = "";
					Player.Collectors[0][3] = 0;
					document.getElementById("collector1time").innerHTML = "&nbsp;";
					document.getElementById("collector1letter").innerHTML = "#1";
					document.getElementById("collector1letter").style.opacity = 0.07;
					document.getElementById("collector1strg").innerHTML = "&nbsp;";
					document.getElementById("collector1main").style.cursor = "default";
					document.getElementById("collector1main").setAttribute("draggable", false);
					document.getElementById("collector1main").style.background = "white";
					document.getElementById("collector1").style.background = "white";
				}
				else if (Player.Collectors[2][2] == letid.slice(9).toUpperCase()){
					Player.Collectors[2][1] = false;
					Player.Collectors[2][2] = "";
					Player.Collectors[2][3] = 0;
					document.getElementById("collector3time").innerHTML = "&nbsp;";
					document.getElementById("collector3letter").innerHTML = "#3";
					document.getElementById("collector3letter").style.opacity = 0.07;
					document.getElementById("collector3strg").innerHTML = "&nbsp;";
					document.getElementById("collector3main").style.cursor = "default";
					document.getElementById("collector3main").setAttribute("draggable", false);
					document.getElementById("collector3main").style.background = "white";
					document.getElementById("collector3").style.background = "white";
				}
				else if (Player.Collectors[3][2] == letid.slice(9).toUpperCase()){
					Player.Collectors[3][1] = false;
					Player.Collectors[3][2] = "";
					Player.Collectors[3][3] = 0;
					document.getElementById("collector4time").innerHTML = "&nbsp;";
					document.getElementById("collector4letter").innerHTML = "#4";
					document.getElementById("collector4letter").style.opacity = 0.07;
					document.getElementById("collector4strg").innerHTML = "&nbsp;";
					document.getElementById("collector4main").style.cursor = "default";
					document.getElementById("collector4main").setAttribute("draggable", false);
					document.getElementById("collector4main").style.background = "white";
					document.getElementById("collector4").style.background = "white";
				}
				save();
			}
		}
		else if (colid == "collector3main" || colid == "collector3letter" || colid == "collector3time" || colid == "collector3strg"){
			if (Player.Letters[letid.slice(9)][3] < Player.Letters[letid.slice(9)][5]){
				document.getElementById("uppercase" + letid.slice(9)).style.opacity = 1;
				document.getElementById("collector3time").innerHTML = (1/Player.Letters[letid.slice(9)][7]).toFixed(1) + "s";
				document.getElementById("collector3letter").innerHTML = letid.slice(9).toUpperCase();
				document.getElementById("collector3letter").style.opacity = 1;
				document.getElementById("collector3strg").innerHTML = Player.Letters[letid.slice(9)][3] + "/" + Player.Letters[letid.slice(9)][5];
				document.getElementById("collector3main").style.cursor = "move";
				document.getElementById("collector3main").setAttribute("draggable", true);
				document.getElementById("collector3").style.transform = "scale(1,1)";
				document.getElementById("collector3").style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[letid.slice(9)][3]/Player.Letters[letid.slice(9)][5]*100)+"%, white "+(Player.Letters[letid.slice(9)][3]/Player.Letters[letid.slice(9)][5]*100)+"%)";
				Player.Collectors[2][1] = true;
				if (Player.Collectors[2][2] != "" && Player.Collectors[2][2] == Player.Collectors[2][2].toLowerCase()){
					document.getElementById("normal" + Player.Collectors[2][2]).style.opacity = 1;
					document.getElementById("normal" + Player.Collectors[2][2]).style.background = "";
				}
				else if (Player.Collectors[2][2] != "" && Player.Collectors[2][2] != Player.Collectors[2][2].toLowerCase()){
					document.getElementById("uppercase" + Player.Collectors[2][2].toLowerCase()).style.opacity = 1;
					document.getElementById("uppercase" + Player.Collectors[2][2].toLowerCase()).style.background = "";
				}
				Player.Collectors[2][2] = letid.slice(9).toUpperCase();
				Player.Collectors[2][3] = 0;
				if (Player.Collectors[0][2] == letid.slice(9).toUpperCase()){
					Player.Collectors[0][1] = false;
					Player.Collectors[0][2] = "";
					Player.Collectors[0][3] = 0;
					document.getElementById("collector1time").innerHTML = "&nbsp;";
					document.getElementById("collector1letter").innerHTML = "#1";
					document.getElementById("collector1letter").style.opacity = 0.07;
					document.getElementById("collector1strg").innerHTML = "&nbsp;";
					document.getElementById("collector1main").style.cursor = "default";
					document.getElementById("collector1main").setAttribute("draggable", false);
					document.getElementById("collector1main").style.background = "white";
					document.getElementById("collector1").style.background = "white";
				}
				else if (Player.Collectors[1][2] == letid.slice(9).toUpperCase()){
					Player.Collectors[1][1] = false;
					Player.Collectors[1][2] = "";
					Player.Collectors[1][3] = 0;
					document.getElementById("collector2time").innerHTML = "&nbsp;";
					document.getElementById("collector2letter").innerHTML = "#2";
					document.getElementById("collector2letter").style.opacity = 0.07;
					document.getElementById("collector2strg").innerHTML = "&nbsp;";
					document.getElementById("collector2main").style.cursor = "default";
					document.getElementById("collector2main").setAttribute("draggable", false);
					document.getElementById("collector2main").style.background = "white";
					document.getElementById("collector2").style.background = "white";
				}
				else if (Player.Collectors[3][2] == letid.slice(9).toUpperCase()){
					Player.Collectors[3][1] = false;
					Player.Collectors[3][2] = "";
					Player.Collectors[3][3] = 0;
					document.getElementById("collector4time").innerHTML = "&nbsp;";
					document.getElementById("collector4letter").innerHTML = "#4";
					document.getElementById("collector4letter").style.opacity = 0.07;
					document.getElementById("collector4strg").innerHTML = "&nbsp;";
					document.getElementById("collector4main").style.cursor = "default";
					document.getElementById("collector4main").setAttribute("draggable", false);
					document.getElementById("collector4main").style.background = "white";
					document.getElementById("collector4").style.background = "white";
				}
				save();
			}
		}
		else if (colid == "collector4main" || colid == "collector4letter" || colid == "collector4time" || colid == "collector4strg"){
			if (Player.Letters[letid.slice(9)][3] < Player.Letters[letid.slice(9)][5]){
				document.getElementById("uppercase" + letid.slice(9)).style.opacity = 1;
				document.getElementById("collector4time").innerHTML = (1/Player.Letters[letid.slice(9)][7]).toFixed(1) + "s";
				document.getElementById("collector4letter").innerHTML = letid.slice(9).toUpperCase();
				document.getElementById("collector4letter").style.opacity = 1;
				document.getElementById("collector4strg").innerHTML = Player.Letters[letid.slice(9)][3] + "/" + Player.Letters[letid.slice(9)][5];
				document.getElementById("collector4main").style.cursor = "move";
				document.getElementById("collector4main").setAttribute("draggable", true);
				document.getElementById("collector4").style.transform = "scale(1,1)";
				document.getElementById("collector4").style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[letid.slice(9)][3]/Player.Letters[letid.slice(9)][5]*100)+"%, white "+(Player.Letters[letid.slice(9)][3]/Player.Letters[letid.slice(9)][5]*100)+"%)";
				Player.Collectors[3][1] = true;
				if (Player.Collectors[3][2] != "" && Player.Collectors[3][2] == Player.Collectors[3][2].toLowerCase()){
					document.getElementById("normal" + Player.Collectors[3][2]).style.opacity = 1;
					document.getElementById("normal" + Player.Collectors[3][2]).style.background = "";
				}
				else if (Player.Collectors[3][2] != "" && Player.Collectors[3][2] != Player.Collectors[3][2].toLowerCase()){
					document.getElementById("uppercase" + Player.Collectors[3][2].toLowerCase()).style.opacity = 1;
					document.getElementById("uppercase" + Player.Collectors[3][2].toLowerCase()).style.background = "";
				}
				Player.Collectors[3][2] = letid.slice(9).toUpperCase();
				Player.Collectors[3][3] = 0;
				if (Player.Collectors[0][2] == letid.slice(9).toUpperCase()){
					Player.Collectors[0][1] = false;
					Player.Collectors[0][2] = "";
					Player.Collectors[0][3] = 0;
					document.getElementById("collector1time").innerHTML = "&nbsp;";
					document.getElementById("collector1letter").innerHTML = "#1";
					document.getElementById("collector1letter").style.opacity = 0.07;
					document.getElementById("collector1strg").innerHTML = "&nbsp;";
					document.getElementById("collector1main").style.cursor = "default";
					document.getElementById("collector1main").setAttribute("draggable", false);
					document.getElementById("collector1main").style.background = "white";
					document.getElementById("collector1").style.background = "white";
				}
				else if (Player.Collectors[1][2] == letid.slice(9).toUpperCase()){
					Player.Collectors[1][1] = false;
					Player.Collectors[1][2] = "";
					Player.Collectors[1][3] = 0;
					document.getElementById("collector2time").innerHTML = "&nbsp;";
					document.getElementById("collector2letter").innerHTML = "#2";
					document.getElementById("collector2letter").style.opacity = 0.07;
					document.getElementById("collector2strg").innerHTML = "&nbsp;";
					document.getElementById("collector2main").style.cursor = "default";
					document.getElementById("collector2main").setAttribute("draggable", false);
					document.getElementById("collector2main").style.background = "white";
					document.getElementById("collector2").style.background = "white";
				}
				else if (Player.Collectors[2][2] == letid.slice(9).toUpperCase()){
					Player.Collectors[2][1] = false;
					Player.Collectors[2][2] = "";
					Player.Collectors[2][3] = 0;
					document.getElementById("collector3time").innerHTML = "&nbsp;";
					document.getElementById("collector3letter").innerHTML = "#3";
					document.getElementById("collector3letter").style.opacity = 0.07;
					document.getElementById("collector3strg").innerHTML = "&nbsp;";
					document.getElementById("collector3main").style.cursor = "default";
					document.getElementById("collector3main").setAttribute("draggable", false);
					document.getElementById("collector3main").style.background = "white";
					document.getElementById("collector3").style.background = "white";
				}
				save();
			}
		}
	}
}

function barcolors(P11, P12, key1, P21, P22, key2, P31, P32, key3, P41, P42, key4){
	if (key1){
		barP11 = P11;
		barP12 = P12;
		barkey1 = key1;
	}
	if (key2){
		barP21 = P21;
		barP22 = P22;
		barkey2 = key2;
	}
	if (key3){
		barP31 = P31;
		barP32 = P32;
		barkey3 = key3;
	}
	if (key4){
		barP41 = P41;
		barP42 = P42;
		barkey4 = key4;
	}
	if (barkey1 && barkey1.toLowerCase() == barkey1){
		barP11 += 0.6;
		if (barP11 < barP12){
			document.getElementById("normal"+barkey1+"strg").style.background = "linear-gradient(to right, #15ff0075 "+barP11+"%, #ffffff75 "+barP11+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
		}
		else{
			document.getElementById("normal"+barkey1+"strg").style.background = "linear-gradient(to right, #15ff0075 "+barP12+"%, #ffffff75 "+barP12+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
			barP11 = null;
			barP12 = null;
			barkey1 = null;
		}
	}
	else if (barkey1 && barkey1.toLowerCase() != barkey1){
		barP11 += 0.6;
		if (barP11 < barP12){
			document.getElementById("uppercase"+barkey1.toLowerCase()+"strg").style.background = "linear-gradient(to right, #15ff0075 "+barP11+"%, #ffffff75 "+barP11+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
		}
		else{
			document.getElementById("uppercase"+barkey1.toLowerCase()+"strg").style.background = "linear-gradient(to right, #15ff0075 "+barP12+"%, #ffffff75 "+barP12+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
			barP11 = null;
			barP12 = null;
			barkey1 = null;
		}
	}
	if (barkey2 && barkey2.toLowerCase() == barkey2){
		barP21 += 0.6;
		if (barP21 < barP22){
			document.getElementById("normal"+barkey2+"strg").style.background = "linear-gradient(to right, #15ff0075 "+barP21+"%, #ffffff75 "+barP21+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
		}
		else{
			document.getElementById("normal"+barkey2+"strg").style.background = "linear-gradient(to right, #15ff0075 "+barP22+"%, #ffffff75 "+barP22+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
			barP21 = null;
			barP22 = null;
			barkey2 = null;
		}
	}
	else if (barkey2 && barkey2.toLowerCase() != barkey2){
		barP21 += 0.6;
		if (barP21 < barP22){
			document.getElementById("uppercase"+barkey2.toLowerCase()+"strg").style.background = "linear-gradient(to right, #15ff0075 "+barP21+"%, #ffffff75 "+barP21+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
		}
		else{
			document.getElementById("uppercase"+barkey2.toLowerCase()+"strg").style.background = "linear-gradient(to right, #15ff0075 "+barP22+"%, #ffffff75 "+barP22+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
			barP21 = null;
			barP22 = null;
			barkey2 = null;
		}
	}
	if (barkey3 && barkey3.toLowerCase() == barkey3){
		barP31 += 0.6;
		if (barP31 < barP32){
			document.getElementById("normal"+barkey3+"strg").style.background = "linear-gradient(to right, #15ff0075 "+barP31+"%, #ffffff75 "+barP31+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
		}
		else{
			document.getElementById("normal"+barkey3+"strg").style.background = "linear-gradient(to right, #15ff0075 "+barP32+"%, #ffffff75 "+barP32+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
			barP31 = null;
			barP32 = null;
			barkey3 = null;
		}
	}
	else if (barkey3 && barkey3.toLowerCase() != barkey3){
		barP31 += 0.6;
		if (barP31 < barP32){
			document.getElementById("uppercase"+barkey3.toLowerCase()+"strg").style.background = "linear-gradient(to right, #15ff0075 "+barP31+"%, #ffffff75 "+barP31+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
		}
		else{
			document.getElementById("uppercase"+barkey3.toLowerCase()+"strg").style.background = "linear-gradient(to right, #15ff0075 "+barP32+"%, #ffffff75 "+barP32+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
			barP31 = null;
			barP32 = null;
			barkey3 = null;
		}
	}
	if (barkey4 && barkey4.toLowerCase() == barkey4){
		barP41 += 0.6;
		if (barP41 < barP42){
			document.getElementById("normal"+barkey4+"strg").style.background = "linear-gradient(to right, #15ff0075 "+barP41+"%, #ffffff75 "+barP41+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
		}
		else{
			document.getElementById("normal"+barkey4+"strg").style.background = "linear-gradient(to right, #15ff0075 "+barP42+"%, #ffffff75 "+barP42+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
			barP41 = null;
			barP42 = null;
			barkey4 = null;
		}
	}
	else if (barkey4 && barkey4.toLowerCase() != barkey4){
		barP41 += 0.6;
		if (barP41 < barP42){
			document.getElementById("uppercase"+barkey4.toLowerCase()+"strg").style.background = "linear-gradient(to right, #15ff0075 "+barP41+"%, #ffffff75 "+barP41+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
		}
		else{
			document.getElementById("uppercase"+barkey4.toLowerCase()+"strg").style.background = "linear-gradient(to right, #15ff0075 "+barP42+"%, #ffffff75 "+barP42+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
			barP41 = null;
			barP42 = null;
			barkey4 = null;
		}
	}
} setInterval(barcolors, 10);

function getletters(){
	if (Player.Collectors[0][1] == true && Player.Collectors[0][2].toLowerCase() == Player.Collectors[0][2]){
		document.getElementById("normal" + Player.Collectors[0][2]).style.opacity = 0.3;
		document.getElementById("normal" + Player.Collectors[0][2]).style.background = "#79e6ee";
		if (Player.Collectors[0][3] < (1/(Player.Letters[Player.Collectors[0][2]][6]*Player.Letters[Player.Collectors[0][2]][18]))*100){
			var time = 1/(Player.Letters[Player.Collectors[0][2]][6]*Player.Letters[Player.Collectors[0][2]][18]);
			if (time <= 0.15){
				document.getElementById("collector1time").innerHTML = (Player.Letters[Player.Collectors[0][2]][6]*Player.Letters[Player.Collectors[0][2]][18]).toFixed(1) + "/s";
				document.getElementById("collector1main").style.background = "linear-gradient(to top, #0cff0088 100%, white 0%), linear-gradient(to right, #d0d0d0 0%, #d0d0d0 50%, #ffffff 80%)";
			}
			else{
				document.getElementById("collector1time").innerHTML = (((1/(Player.Letters[Player.Collectors[0][2]][6]*Player.Letters[Player.Collectors[0][2]][18]))*100 - Player.Collectors[0][3])/100).toFixed(1) + "s";
				document.getElementById("collector1main").style.background = "linear-gradient(to top, #0cff0088 "+((Player.Collectors[0][3]/((1/(Player.Letters[Player.Collectors[0][2]][6]*Player.Letters[Player.Collectors[0][2]][18]))*100))*100)+"%, white "+((Player.Collectors[0][3]/((1/(Player.Letters[Player.Collectors[0][2]][6]*Player.Letters[Player.Collectors[0][2]][18]))*100))*100)+"%), linear-gradient(to right, #d0d0d0 0%, #d0d0d0 50%, #ffffff 80%)";
			}
			Player.Collectors[0][3] += 1;
		}
		else{
			Player.Letters[Player.Collectors[0][2]][2] += 1;
			Player.Letters[Player.Collectors[0][2]][10] += 1;
			Player.Letters[Player.Collectors[0][2]][12] += 1;
			Player.Score += Player.Letters[Player.Collectors[0][2]][16];
			Player.Collectors[0][3] = 0;
			scoredisp();
			checkstore();
			getmastery(Player.Collectors[0][2]);
			checkmastery(Player.Collectors[0][2]);
			if (strg != ""){storage(strg)};
			document.getElementById("normal"+Player.Collectors[0][2]+"strg").innerHTML = Player.Letters[Player.Collectors[0][2]][2] + "/" + Player.Letters[Player.Collectors[0][2]][4];
			barcolors((Player.Letters[Player.Collectors[0][2]][2]-1)/Player.Letters[Player.Collectors[0][2]][4]*100,Player.Letters[Player.Collectors[0][2]][2]/Player.Letters[Player.Collectors[0][2]][4]*100,Player.Collectors[0][2],null,null,null,null,null,null,null,null,null);
			document.getElementById("collector1").style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[Player.Collectors[0][2]][2]/Player.Letters[Player.Collectors[0][2]][4]*100)+"%, white "+(Player.Letters[Player.Collectors[0][2]][2]/Player.Letters[Player.Collectors[0][2]][4]*100)+"%)";
			document.getElementById("collector1strg").innerHTML = Player.Letters[Player.Collectors[0][2]][2] + "/" + Player.Letters[Player.Collectors[0][2]][4];
			if (Player.Letters[Player.Collectors[0][2]][2] == Player.Letters[Player.Collectors[0][2]][4]){
				Player.Collectors[0][1] = false;
				document.getElementById("normal" + Player.Collectors[0][2]).style.opacity = 1;
				document.getElementById("normal" + Player.Collectors[0][2]).style.background = "";
				Player.Collectors[0][2] = "";
				Player.Collectors[0][3] = 0;
				document.getElementById("collector1time").innerHTML = "&nbsp;";
				document.getElementById("collector1letter").innerHTML = "#1";
				document.getElementById("collector1letter").style.opacity = 0.07;
				document.getElementById("collector1strg").innerHTML = "&nbsp;";
				document.getElementById("collector1main").style.cursor = "default";
				document.getElementById("collector1main").setAttribute("draggable", false);
				document.getElementById("collector1main").style.background = "white";
				document.getElementById("collector1").style.background = "white";
			}
			save();
		}
	}
	else if (Player.Collectors[0][1] == true && Player.Collectors[0][2].toLowerCase() != Player.Collectors[0][2]){
		document.getElementById("uppercase" + Player.Collectors[0][2].toLowerCase()).style.opacity = 0.3;
		document.getElementById("uppercase" + Player.Collectors[0][2].toLowerCase()).style.background = "#79e6ee";
		if (Player.Collectors[0][3] < (1/(Player.Letters[Player.Collectors[0][2].toLowerCase()][7]*Player.Letters[Player.Collectors[0][2].toLowerCase()][19]))*100){
			var time = 1/(Player.Letters[Player.Collectors[0][2].toLowerCase()][7]*Player.Letters[Player.Collectors[0][2].toLowerCase()][19]);
			if (time <= 0.15){
				document.getElementById("collector1time").innerHTML = (Player.Letters[Player.Collectors[0][2].toLowerCase()][7]*Player.Letters[Player.Collectors[0][2].toLowerCase()][19]).toFixed(1) + "/s";
				document.getElementById("collector1main").style.background = "linear-gradient(to top, #0cff0088 100%, white 0%), linear-gradient(to right, #d0d0d0 0%, #d0d0d0 50%, #ffffff 80%)";
			}
			else{
				document.getElementById("collector1time").innerHTML = (((1/(Player.Letters[Player.Collectors[0][2].toLowerCase()][7]*Player.Letters[Player.Collectors[0][2].toLowerCase()][19]))*100 - Player.Collectors[0][3])/100).toFixed(1) + "s";
				document.getElementById("collector1main").style.background = "linear-gradient(to top, #0cff0088 "+((Player.Collectors[0][3]/((1/(Player.Letters[Player.Collectors[0][2].toLowerCase()][7]*Player.Letters[Player.Collectors[0][2].toLowerCase()][19]))*100))*100)+"%, white "+((Player.Collectors[0][3]/((1/(Player.Letters[Player.Collectors[0][2].toLowerCase()][7]*Player.Letters[Player.Collectors[0][2].toLowerCase()][19]))*100))*100)+"%), linear-gradient(to right, #d0d0d0 0%, #d0d0d0 50%, #ffffff 80%)";
			}
			Player.Collectors[0][3] += 1;
		}
		else{
			Player.Letters[Player.Collectors[0][2].toLowerCase()][3] += 1;
			Player.Letters[Player.Collectors[0][2].toLowerCase()][11] += 1;
			Player.Letters[Player.Collectors[0][2].toLowerCase()][13] += 1;
			Player.Score += Player.Letters[Player.Collectors[0][2].toLowerCase()][17];
			Player.Collectors[0][3] = 0;
			scoredisp();
			checkstore();
			getmastery(Player.Collectors[0][2]);
			checkmastery(Player.Collectors[0][2]);
			if (strg != ""){storage(strg)};
			document.getElementById("uppercase"+Player.Collectors[0][2].toLowerCase()+"strg").innerHTML = Player.Letters[Player.Collectors[0][2].toLowerCase()][3] + "/" + Player.Letters[Player.Collectors[0][2].toLowerCase()][5];
			barcolors((Player.Letters[Player.Collectors[0][2].toLowerCase()][3]-1)/Player.Letters[Player.Collectors[0][2].toLowerCase()][5]*100,Player.Letters[Player.Collectors[0][2].toLowerCase()][3]/Player.Letters[Player.Collectors[0][2].toLowerCase()][5]*100,Player.Collectors[0][2],null,null,null,null,null,null,null,null,null);
			document.getElementById("collector1").style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[Player.Collectors[0][2].toLowerCase()][3]/Player.Letters[Player.Collectors[0][2].toLowerCase()][5]*100)+"%, white "+(Player.Letters[Player.Collectors[0][2].toLowerCase()][3]/Player.Letters[Player.Collectors[0][2].toLowerCase()][5]*100)+"%)";
			document.getElementById("collector1strg").innerHTML = Player.Letters[Player.Collectors[0][2].toLowerCase()][3] + "/" + Player.Letters[Player.Collectors[0][2].toLowerCase()][5];
			if (Player.Letters[Player.Collectors[0][2].toLowerCase()][3] == Player.Letters[Player.Collectors[0][2].toLowerCase()][5]){
				Player.Collectors[0][1] = false;
				document.getElementById("uppercase" + Player.Collectors[0][2].toLowerCase()).style.opacity = 1;
				document.getElementById("uppercase" + Player.Collectors[0][2].toLowerCase()).style.background = "";
				Player.Collectors[0][2] = "";
				Player.Collectors[0][3] = 0;
				document.getElementById("collector1time").innerHTML = "&nbsp;";
				document.getElementById("collector1letter").innerHTML = "#1";
				document.getElementById("collector1letter").style.opacity = 0.07;
				document.getElementById("collector1strg").innerHTML = "&nbsp;";
				document.getElementById("collector1main").style.cursor = "default";
				document.getElementById("collector1main").setAttribute("draggable", false);
				document.getElementById("collector1main").style.background = "white";
				document.getElementById("collector1").style.background = "white";
			}
			save();
		}
	}
	if (Player.Collectors[1][1] == true && Player.Collectors[1][2].toLowerCase() == Player.Collectors[1][2]){
		document.getElementById("normal" + Player.Collectors[1][2]).style.opacity = 0.3;
		document.getElementById("normal" + Player.Collectors[1][2]).style.background = "#79e6ee";
		if (Player.Collectors[1][3] < (1/(Player.Letters[Player.Collectors[1][2]][6]*Player.Letters[Player.Collectors[1][2]][18]))*100){
			var time = 1/(Player.Letters[Player.Collectors[1][2]][6]*Player.Letters[Player.Collectors[1][2]][18]);
			if (time <= 0.15){
				document.getElementById("collector2time").innerHTML = (Player.Letters[Player.Collectors[1][2]][6]*Player.Letters[Player.Collectors[1][2]][18]).toFixed(1) + "/s";
				document.getElementById("collector2main").style.background = "linear-gradient(to top, #0cff0088 100%, white 0%), linear-gradient(to right, #d0d0d0 0%, #d0d0d0 50%, #ffffff 80%)";
			}
			else{
				document.getElementById("collector2time").innerHTML = (((1/(Player.Letters[Player.Collectors[1][2]][6]*Player.Letters[Player.Collectors[1][2]][18]))*100 - Player.Collectors[1][3])/100).toFixed(1) + "s";
				document.getElementById("collector2main").style.background = "linear-gradient(to top, #0cff0088 "+((Player.Collectors[1][3]/((1/(Player.Letters[Player.Collectors[1][2]][6]*Player.Letters[Player.Collectors[1][2]][18]))*100))*100)+"%, white "+((Player.Collectors[1][3]/((1/(Player.Letters[Player.Collectors[1][2]][6]*Player.Letters[Player.Collectors[1][2]][18]))*100))*100)+"%), linear-gradient(to right, #d0d0d0 0%, #d0d0d0 50%, #ffffff 80%)";
			}
			Player.Collectors[1][3] += 1;
		}
		else{
			Player.Letters[Player.Collectors[1][2]][2] += 1;
			Player.Letters[Player.Collectors[1][2]][10] += 1;
			Player.Letters[Player.Collectors[1][2]][12] += 1;
			Player.Score += Player.Letters[Player.Collectors[1][2]][16];
			Player.Collectors[1][3] = 0;
			scoredisp();
			checkstore();
			getmastery(Player.Collectors[1][2]);
			checkmastery(Player.Collectors[1][2]);
			if (strg != ""){storage(strg)};
			document.getElementById("normal"+Player.Collectors[1][2]+"strg").innerHTML = Player.Letters[Player.Collectors[1][2]][2] + "/" + Player.Letters[Player.Collectors[1][2]][4];
			barcolors(null,null,null,(Player.Letters[Player.Collectors[1][2]][2]-1)/Player.Letters[Player.Collectors[1][2]][4]*100,Player.Letters[Player.Collectors[1][2]][2]/Player.Letters[Player.Collectors[1][2]][4]*100,Player.Collectors[1][2],null,null,null,null,null,null);
			document.getElementById("collector2").style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[Player.Collectors[1][2]][2]/Player.Letters[Player.Collectors[1][2]][4]*100)+"%, white "+(Player.Letters[Player.Collectors[1][2]][2]/Player.Letters[Player.Collectors[1][2]][4]*100)+"%)";
			document.getElementById("collector2strg").innerHTML = Player.Letters[Player.Collectors[1][2]][2] + "/" + Player.Letters[Player.Collectors[1][2]][4];
			if (Player.Letters[Player.Collectors[1][2]][2] == Player.Letters[Player.Collectors[1][2]][4]){
				Player.Collectors[1][1] = false;
				document.getElementById("normal" + Player.Collectors[1][2]).style.opacity = 1;
				document.getElementById("normal" + Player.Collectors[1][2]).style.background = "";
				Player.Collectors[1][2] = "";
				Player.Collectors[1][3] = 0;
				document.getElementById("collector2time").innerHTML = "&nbsp;";
				document.getElementById("collector2letter").innerHTML = "#2";
				document.getElementById("collector2letter").style.opacity = 0.07;
				document.getElementById("collector2strg").innerHTML = "&nbsp;";
				document.getElementById("collector2main").style.cursor = "default";
				document.getElementById("collector2main").setAttribute("draggable", false);
				document.getElementById("collector2main").style.background = "white";
				document.getElementById("collector2").style.background = "white";
			}
			save();
		}
	}
	else if (Player.Collectors[1][1] == true && Player.Collectors[1][2].toLowerCase() != Player.Collectors[1][2]){
		document.getElementById("uppercase" + Player.Collectors[1][2].toLowerCase()).style.opacity = 0.3;
		document.getElementById("uppercase" + Player.Collectors[1][2].toLowerCase()).style.background = "#79e6ee";
		if (Player.Collectors[1][3] < (1/(Player.Letters[Player.Collectors[1][2].toLowerCase()][7]*Player.Letters[Player.Collectors[1][2].toLowerCase()][19]))*100){
			var time = 1/(Player.Letters[Player.Collectors[1][2].toLowerCase()][7]*Player.Letters[Player.Collectors[1][2].toLowerCase()][19]);
			if (time <= 0.15){
				document.getElementById("collector2time").innerHTML = (Player.Letters[Player.Collectors[1][2].toLowerCase()][7]*Player.Letters[Player.Collectors[1][2].toLowerCase()][19]).toFixed(1) + "/s";
				document.getElementById("collector2main").style.background = "linear-gradient(to top, #0cff0088 100%, white 0%), linear-gradient(to right, #d0d0d0 0%, #d0d0d0 50%, #ffffff 80%)";
			}
			else{
				document.getElementById("collector2time").innerHTML = (((1/(Player.Letters[Player.Collectors[1][2].toLowerCase()][7]*Player.Letters[Player.Collectors[1][2].toLowerCase()][19]))*100 - Player.Collectors[1][3])/100).toFixed(1) + "s";
				document.getElementById("collector2main").style.background = "linear-gradient(to top, #0cff0088 "+((Player.Collectors[1][3]/((1/(Player.Letters[Player.Collectors[1][2].toLowerCase()][7]*Player.Letters[Player.Collectors[1][2].toLowerCase()][19]))*100))*100)+"%, white "+((Player.Collectors[1][3]/((1/(Player.Letters[Player.Collectors[1][2].toLowerCase()][7]*Player.Letters[Player.Collectors[1][2].toLowerCase()][19]))*100))*100)+"%), linear-gradient(to right, #d0d0d0 0%, #d0d0d0 50%, #ffffff 80%)";
			}
			Player.Collectors[1][3] += 1;
		}
		else{
			Player.Letters[Player.Collectors[1][2].toLowerCase()][3] += 1;
			Player.Letters[Player.Collectors[1][2].toLowerCase()][11] += 1;
			Player.Letters[Player.Collectors[1][2].toLowerCase()][13] += 1;
			Player.Score += Player.Letters[Player.Collectors[1][2].toLowerCase()][17];
			Player.Collectors[1][3] = 0;
			scoredisp();
			checkstore();
			getmastery(Player.Collectors[1][2]);
			checkmastery(Player.Collectors[1][2]);
			if (strg != ""){storage(strg)};
			document.getElementById("uppercase"+Player.Collectors[1][2].toLowerCase()+"strg").innerHTML = Player.Letters[Player.Collectors[1][2].toLowerCase()][3] + "/" + Player.Letters[Player.Collectors[1][2].toLowerCase()][5];
			barcolors(null,null,null,(Player.Letters[Player.Collectors[1][2].toLowerCase()][3]-1)/Player.Letters[Player.Collectors[1][2].toLowerCase()][5]*100,Player.Letters[Player.Collectors[1][2].toLowerCase()][3]/Player.Letters[Player.Collectors[1][2].toLowerCase()][5]*100,Player.Collectors[1][2],null,null,null,null,null,null);
			document.getElementById("collector2").style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[Player.Collectors[1][2].toLowerCase()][3]/Player.Letters[Player.Collectors[1][2].toLowerCase()][5]*100)+"%, white "+(Player.Letters[Player.Collectors[1][2].toLowerCase()][3]/Player.Letters[Player.Collectors[1][2].toLowerCase()][5]*100)+"%)";
			document.getElementById("collector2strg").innerHTML = Player.Letters[Player.Collectors[1][2].toLowerCase()][3] + "/" + Player.Letters[Player.Collectors[1][2].toLowerCase()][5];
			if (Player.Letters[Player.Collectors[1][2].toLowerCase()][3] == Player.Letters[Player.Collectors[1][2].toLowerCase()][5]){
				Player.Collectors[1][1] = false;
				document.getElementById("uppercase" + Player.Collectors[1][2].toLowerCase()).style.opacity = 1;
				document.getElementById("uppercase" + Player.Collectors[1][2].toLowerCase()).style.background = "";
				Player.Collectors[1][2] = "";
				Player.Collectors[1][3] = 0;
				document.getElementById("collector2time").innerHTML = "&nbsp;";
				document.getElementById("collector2letter").innerHTML = "#2";
				document.getElementById("collector2letter").style.opacity = 0.07;
				document.getElementById("collector2strg").innerHTML = "&nbsp;";
				document.getElementById("collector2main").style.cursor = "default";
				document.getElementById("collector2main").setAttribute("draggable", false);
				document.getElementById("collector2main").style.background = "white";
				document.getElementById("collector2").style.background = "white";
			}
			save();
		}
	}
	if (Player.Collectors[2][1] == true && Player.Collectors[2][2].toLowerCase() == Player.Collectors[2][2]){
		document.getElementById("normal" + Player.Collectors[2][2]).style.opacity = 0.3;
		document.getElementById("normal" + Player.Collectors[2][2]).style.background = "#79e6ee";
		if (Player.Collectors[2][3] < (1/(Player.Letters[Player.Collectors[2][2]][6]*Player.Letters[Player.Collectors[2][2]][18]))*100){
			var time = 1/(Player.Letters[Player.Collectors[2][2]][6]*Player.Letters[Player.Collectors[2][2]][18]);
			if (time <= 0.15){
				document.getElementById("collector3time").innerHTML = (Player.Letters[Player.Collectors[2][2]][6]*Player.Letters[Player.Collectors[2][2]][18]).toFixed(1) + "/s";
				document.getElementById("collector3main").style.background = "linear-gradient(to top, #0cff0088 100%, white 0%), linear-gradient(to right, #d0d0d0 0%, #d0d0d0 50%, #ffffff 80%)";
			}
			else{
				document.getElementById("collector3time").innerHTML = (((1/(Player.Letters[Player.Collectors[2][2]][6]*Player.Letters[Player.Collectors[2][2]][18]))*100 - Player.Collectors[2][3])/100).toFixed(1) + "s";
				document.getElementById("collector3main").style.background = "linear-gradient(to top, #0cff0088 "+((Player.Collectors[2][3]/((1/(Player.Letters[Player.Collectors[2][2]][6]*Player.Letters[Player.Collectors[2][2]][18]))*100))*100)+"%, white "+((Player.Collectors[2][3]/((1/(Player.Letters[Player.Collectors[2][2]][6]*Player.Letters[Player.Collectors[2][2]][18]))*100))*100)+"%), linear-gradient(to right, #d0d0d0 0%, #d0d0d0 50%, #ffffff 80%)";
			}
			Player.Collectors[2][3] += 1;
		}
		else{
			Player.Letters[Player.Collectors[2][2]][2] += 1;
			Player.Letters[Player.Collectors[2][2]][10] += 1;
			Player.Letters[Player.Collectors[2][2]][12] += 1;
			Player.Score += Player.Letters[Player.Collectors[2][2]][16];
			Player.Collectors[2][3] = 0;
			scoredisp();
			checkstore();
			getmastery(Player.Collectors[2][2]);
			checkmastery(Player.Collectors[2][2]);
			if (strg != ""){storage(strg)};
			document.getElementById("normal"+Player.Collectors[2][2]+"strg").innerHTML = Player.Letters[Player.Collectors[2][2]][2] + "/" + Player.Letters[Player.Collectors[2][2]][4];
			barcolors(null,null,null,null,null,null,(Player.Letters[Player.Collectors[2][2]][2]-1)/Player.Letters[Player.Collectors[2][2]][4]*100,Player.Letters[Player.Collectors[2][2]][2]/Player.Letters[Player.Collectors[2][2]][4]*100,Player.Collectors[2][2],null,null,null);
			document.getElementById("collector3").style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[Player.Collectors[2][2]][2]/Player.Letters[Player.Collectors[2][2]][4]*100)+"%, white "+(Player.Letters[Player.Collectors[2][2]][2]/Player.Letters[Player.Collectors[2][2]][4]*100)+"%)";
			document.getElementById("collector3strg").innerHTML = Player.Letters[Player.Collectors[2][2]][2] + "/" + Player.Letters[Player.Collectors[2][2]][4];
			if (Player.Letters[Player.Collectors[2][2]][2] == Player.Letters[Player.Collectors[2][2]][4]){
				Player.Collectors[2][1] = false;
				document.getElementById("normal" + Player.Collectors[2][2]).style.opacity = 1;
				document.getElementById("normal" + Player.Collectors[2][2]).style.background = "";
				Player.Collectors[2][2] = "";
				Player.Collectors[2][3] = 0;
				document.getElementById("collector3time").innerHTML = "&nbsp;";
				document.getElementById("collector3letter").innerHTML = "#3";
				document.getElementById("collector3letter").style.opacity = 0.07;
				document.getElementById("collector3strg").innerHTML = "&nbsp;";
				document.getElementById("collector3main").style.cursor = "default";
				document.getElementById("collector3main").setAttribute("draggable", false);
				document.getElementById("collector3main").style.background = "white";
				document.getElementById("collector3").style.background = "white";
			}
			save();
		}
	}
	else if (Player.Collectors[2][1] == true && Player.Collectors[2][2].toLowerCase() != Player.Collectors[2][2]){
		document.getElementById("uppercase" + Player.Collectors[2][2].toLowerCase()).style.opacity = 0.3;
		document.getElementById("uppercase" + Player.Collectors[2][2].toLowerCase()).style.background = "#79e6ee";
		if (Player.Collectors[2][3] < (1/(Player.Letters[Player.Collectors[2][2].toLowerCase()][7]*Player.Letters[Player.Collectors[2][2].toLowerCase()][19]))*100){
			var time = 1/(Player.Letters[Player.Collectors[2][2].toLowerCase()][7]*Player.Letters[Player.Collectors[2][2].toLowerCase()][19]);
			if (time <= 0.15){
				document.getElementById("collector3time").innerHTML = (Player.Letters[Player.Collectors[2][2].toLowerCase()][7]*Player.Letters[Player.Collectors[2][2].toLowerCase()][19]).toFixed(1) + "/s";
				document.getElementById("collector3main").style.background = "linear-gradient(to top, #0cff0088 100%, white 0%), linear-gradient(to right, #d0d0d0 0%, #d0d0d0 50%, #ffffff 80%)";
			}
			else{
				document.getElementById("collector3time").innerHTML = (((1/(Player.Letters[Player.Collectors[2][2].toLowerCase()][7]*Player.Letters[Player.Collectors[2][2].toLowerCase()][19]))*100 - Player.Collectors[2][3])/100).toFixed(1) + "s";
				document.getElementById("collector3main").style.background = "linear-gradient(to top, #0cff0088 "+((Player.Collectors[2][3]/((1/(Player.Letters[Player.Collectors[2][2].toLowerCase()][7]*Player.Letters[Player.Collectors[2][2].toLowerCase()][19]))*100))*100)+"%, white "+((Player.Collectors[2][3]/((1/(Player.Letters[Player.Collectors[2][2].toLowerCase()][7]*Player.Letters[Player.Collectors[2][2].toLowerCase()][19]))*100))*100)+"%), linear-gradient(to right, #d0d0d0 0%, #d0d0d0 50%, #ffffff 80%)";
			}
			Player.Collectors[2][3] += 1;
		}
		else{
			Player.Letters[Player.Collectors[2][2].toLowerCase()][3] += 1;
			Player.Letters[Player.Collectors[2][2].toLowerCase()][11] += 1;
			Player.Letters[Player.Collectors[2][2].toLowerCase()][13] += 1;
			Player.Score += Player.Letters[Player.Collectors[2][2].toLowerCase()][17];
			Player.Collectors[2][3] = 0;
			scoredisp();
			checkstore();
			getmastery(Player.Collectors[2][2]);
			checkmastery(Player.Collectors[2][2]);
			if (strg != ""){storage(strg)};
			document.getElementById("uppercase"+Player.Collectors[2][2].toLowerCase()+"strg").innerHTML = Player.Letters[Player.Collectors[2][2].toLowerCase()][3] + "/" + Player.Letters[Player.Collectors[2][2].toLowerCase()][5];
			barcolors(null,null,null,null,null,null,(Player.Letters[Player.Collectors[2][2].toLowerCase()][3]-1)/Player.Letters[Player.Collectors[2][2].toLowerCase()][5]*100,Player.Letters[Player.Collectors[2][2].toLowerCase()][3]/Player.Letters[Player.Collectors[2][2].toLowerCase()][5]*100,Player.Collectors[2][2],null,null,null);
			document.getElementById("collector3").style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[Player.Collectors[2][2].toLowerCase()][3]/Player.Letters[Player.Collectors[2][2].toLowerCase()][5]*100)+"%, white "+(Player.Letters[Player.Collectors[2][2].toLowerCase()][3]/Player.Letters[Player.Collectors[2][2].toLowerCase()][5]*100)+"%)";
			document.getElementById("collector3strg").innerHTML = Player.Letters[Player.Collectors[2][2].toLowerCase()][3] + "/" + Player.Letters[Player.Collectors[2][2].toLowerCase()][5];
			if (Player.Letters[Player.Collectors[2][2].toLowerCase()][3] == Player.Letters[Player.Collectors[2][2].toLowerCase()][5]){
				Player.Collectors[2][1] = false;
				document.getElementById("uppercase" + Player.Collectors[2][2].toLowerCase()).style.opacity = 1;
				document.getElementById("uppercase" + Player.Collectors[2][2].toLowerCase()).style.background = "";
				Player.Collectors[2][2] = "";
				Player.Collectors[2][3] = 0;
				document.getElementById("collector3time").innerHTML = "&nbsp;";
				document.getElementById("collector3letter").innerHTML = "#3";
				document.getElementById("collector3letter").style.opacity = 0.07;
				document.getElementById("collector3strg").innerHTML = "&nbsp;";
				document.getElementById("collector3main").style.cursor = "default";
				document.getElementById("collector3main").setAttribute("draggable", false);
				document.getElementById("collector3main").style.background = "white";
				document.getElementById("collector3").style.background = "white";
			}
			save();
		}
	}
	if (Player.Collectors[3][1] == true && Player.Collectors[3][2].toLowerCase() == Player.Collectors[3][2]){
		document.getElementById("normal" + Player.Collectors[3][2]).style.opacity = 0.3;
		document.getElementById("normal" + Player.Collectors[3][2]).style.background = "#79e6ee";
		if (Player.Collectors[3][3] < (1/(Player.Letters[Player.Collectors[3][2]][6]*Player.Letters[Player.Collectors[3][2]][18]))*100){
			var time = 1/(Player.Letters[Player.Collectors[3][2]][6]*Player.Letters[Player.Collectors[3][2]][18]);
			if (time <= 0.15){
				document.getElementById("collector4time").innerHTML = (Player.Letters[Player.Collectors[3][2]][6]*Player.Letters[Player.Collectors[3][2]][18]).toFixed(1) + "/s";
				document.getElementById("collector4main").style.background = "linear-gradient(to top, #0cff0088 100%, white 0%), linear-gradient(to right, #d0d0d0 0%, #d0d0d0 50%, #ffffff 80%)";
			}
			else{
				document.getElementById("collector4time").innerHTML = (((1/(Player.Letters[Player.Collectors[3][2]][6]*Player.Letters[Player.Collectors[3][2]][18]))*100 - Player.Collectors[3][3])/100).toFixed(1) + "s";
				document.getElementById("collector4main").style.background = "linear-gradient(to top, #0cff0088 "+((Player.Collectors[3][3]/((1/(Player.Letters[Player.Collectors[3][2]][6]*Player.Letters[Player.Collectors[3][2]][18]))*100))*100)+"%, white "+((Player.Collectors[3][3]/((1/(Player.Letters[Player.Collectors[3][2]][6]*Player.Letters[Player.Collectors[3][2]][18]))*100))*100)+"%), linear-gradient(to right, #d0d0d0 0%, #d0d0d0 50%, #ffffff 80%)";
			}
			Player.Collectors[3][3] += 1;
		}
		else{
			Player.Letters[Player.Collectors[3][2]][2] += 1;
			Player.Letters[Player.Collectors[3][2]][10] += 1;
			Player.Letters[Player.Collectors[3][2]][12] += 1;
			Player.Score += Player.Letters[Player.Collectors[3][2]][16];
			Player.Collectors[3][3] = 0;
			scoredisp();
			checkstore();
			getmastery(Player.Collectors[3][2]);
			checkmastery(Player.Collectors[3][2]);
			if (strg != ""){storage(strg)};
			document.getElementById("normal"+Player.Collectors[3][2]+"strg").innerHTML = Player.Letters[Player.Collectors[3][2]][2] + "/" + Player.Letters[Player.Collectors[3][2]][4];
			barcolors(null,null,null,null,null,null,null,null,null,(Player.Letters[Player.Collectors[3][2]][2]-1)/Player.Letters[Player.Collectors[3][2]][4]*100,Player.Letters[Player.Collectors[3][2]][2]/Player.Letters[Player.Collectors[3][2]][4]*100,Player.Collectors[3][2]);
			document.getElementById("collector4").style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[Player.Collectors[3][2]][2]/Player.Letters[Player.Collectors[3][2]][4]*100)+"%, white "+(Player.Letters[Player.Collectors[3][2]][2]/Player.Letters[Player.Collectors[3][2]][4]*100)+"%)";
			document.getElementById("collector4strg").innerHTML = Player.Letters[Player.Collectors[3][2]][2] + "/" + Player.Letters[Player.Collectors[3][2]][4];
			if (Player.Letters[Player.Collectors[3][2]][2] == Player.Letters[Player.Collectors[3][2]][4]){
				Player.Collectors[3][1] = false;
				document.getElementById("normal" + Player.Collectors[3][2]).style.opacity = 1;
				document.getElementById("normal" + Player.Collectors[3][2]).style.background = "";
				Player.Collectors[3][2] = "";
				Player.Collectors[3][3] = 0;
				document.getElementById("collector4time").innerHTML = "&nbsp;";
				document.getElementById("collector4letter").innerHTML = "#4";
				document.getElementById("collector4letter").style.opacity = 0.07;
				document.getElementById("collector4strg").innerHTML = "&nbsp;";
				document.getElementById("collector4main").style.cursor = "default";
				document.getElementById("collector4main").setAttribute("draggable", false);
				document.getElementById("collector4main").style.background = "white";
				document.getElementById("collector4").style.background = "white";
			}
			save();
		}
	}
	else if (Player.Collectors[3][1] == true && Player.Collectors[3][2].toLowerCase() != Player.Collectors[3][2]){
		document.getElementById("uppercase" + Player.Collectors[3][2].toLowerCase()).style.opacity = 0.3;
		document.getElementById("uppercase" + Player.Collectors[3][2].toLowerCase()).style.background = "#79e6ee";
		if (Player.Collectors[3][3] < (1/(Player.Letters[Player.Collectors[3][2].toLowerCase()][7]*Player.Letters[Player.Collectors[3][2].toLowerCase()][19]))*100){
			var time = 1/(Player.Letters[Player.Collectors[3][2].toLowerCase()][7]*Player.Letters[Player.Collectors[3][2].toLowerCase()][19]);
			if (time <= 0.15){
				document.getElementById("collector4time").innerHTML = (Player.Letters[Player.Collectors[3][2].toLowerCase()][7]*Player.Letters[Player.Collectors[3][2].toLowerCase()][19]).toFixed(1) + "/s";
				document.getElementById("collector4main").style.background = "linear-gradient(to top, #0cff0088 100%, white 0%), linear-gradient(to right, #d0d0d0 0%, #d0d0d0 50%, #ffffff 80%)";
			}
			else{
				document.getElementById("collector4time").innerHTML = (((1/(Player.Letters[Player.Collectors[3][2].toLowerCase()][7]*Player.Letters[Player.Collectors[3][2].toLowerCase()][19]))*100 - Player.Collectors[3][3])/100).toFixed(1) + "s";
				document.getElementById("collector4main").style.background = "linear-gradient(to top, #0cff0088 "+((Player.Collectors[3][3]/((1/(Player.Letters[Player.Collectors[3][2].toLowerCase()][7]*Player.Letters[Player.Collectors[3][2].toLowerCase()][19]))*100))*100)+"%, white "+((Player.Collectors[3][3]/((1/(Player.Letters[Player.Collectors[3][2].toLowerCase()][7]*Player.Letters[Player.Collectors[3][2].toLowerCase()][19]))*100))*100)+"%), linear-gradient(to right, #d0d0d0 0%, #d0d0d0 50%, #ffffff 80%)";
			}
			Player.Collectors[3][3] += 1;
		}
		else{
			Player.Letters[Player.Collectors[3][2].toLowerCase()][3] += 1;
			Player.Letters[Player.Collectors[3][2].toLowerCase()][11] += 1;
			Player.Letters[Player.Collectors[3][2].toLowerCase()][13] += 1;
			Player.Score += Player.Letters[Player.Collectors[3][2].toLowerCase()][17];
			Player.Collectors[3][3] = 0;
			scoredisp();
			checkstore();
			getmastery(Player.Collectors[3][2]);
			checkmastery(Player.Collectors[3][2]);
			if (strg != ""){storage(strg)};
			document.getElementById("uppercase"+Player.Collectors[3][2].toLowerCase()+"strg").innerHTML = Player.Letters[Player.Collectors[3][2].toLowerCase()][3] + "/" + Player.Letters[Player.Collectors[3][2].toLowerCase()][5];
			barcolors(null,null,null,null,null,null,null,null,null,(Player.Letters[Player.Collectors[3][2].toLowerCase()][3]-1)/Player.Letters[Player.Collectors[3][2].toLowerCase()][5]*100,Player.Letters[Player.Collectors[3][2].toLowerCase()][3]/Player.Letters[Player.Collectors[3][2].toLowerCase()][5]*100,Player.Collectors[3][2]);
			document.getElementById("collector4").style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[Player.Collectors[3][2].toLowerCase()][3]/Player.Letters[Player.Collectors[3][2].toLowerCase()][5]*100)+"%, white "+(Player.Letters[Player.Collectors[3][2].toLowerCase()][3]/Player.Letters[Player.Collectors[3][2].toLowerCase()][5]*100)+"%)";
			document.getElementById("collector4strg").innerHTML = Player.Letters[Player.Collectors[3][2].toLowerCase()][3] + "/" + Player.Letters[Player.Collectors[3][2].toLowerCase()][5];
			if (Player.Letters[Player.Collectors[3][2].toLowerCase()][3] == Player.Letters[Player.Collectors[3][2].toLowerCase()][5]){
				Player.Collectors[3][1] = false;
				document.getElementById("uppercase" + Player.Collectors[3][2].toLowerCase()).style.opacity = 1;
				document.getElementById("uppercase" + Player.Collectors[3][2].toLowerCase()).style.background = "";
				Player.Collectors[3][2] = "";
				Player.Collectors[3][3] = 0;
				document.getElementById("collector4time").innerHTML = "&nbsp;";
				document.getElementById("collector4letter").innerHTML = "#4";
				document.getElementById("collector4letter").style.opacity = 0.07;
				document.getElementById("collector4strg").innerHTML = "&nbsp;";
				document.getElementById("collector4main").style.cursor = "default";
				document.getElementById("collector4main").setAttribute("draggable", false);
				document.getElementById("collector4main").style.background = "white";
				document.getElementById("collector4").style.background = "white";
			}
			save();
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
		if (Player.Letters[key][0] == false)
		{
			document.getElementById("normal"+key).style.opacity = 0.3;
			document.getElementById("normal"+key).style.cursor = "default";
			document.getElementById("normal"+key+"time").innerHTML = "Not unlocked";
			var str = Player.Letters[key][8];
			var str2 = "";
			for (let i=0; i < (new Set(str).size); i++){
				str2 += " " + str.split('').filter(x => x == [...new Set(str)].join('')[i]).length + [...new Set(str)].join('')[i];
			}
			document.getElementById("normal"+key+"strg").innerHTML = "Buy for:" + str2;
			var is = 1;
			for (let i=0; i < Player.Letters[key][8].length; i++){
				if (Unlocked.includes(Player.Letters[key][8][i]) == false){
					is = 0;
				}
			}
			if (is == 1){
				document.getElementById("normal"+key+"strg").style.background = "linear-gradient(to right, #ffa400b0, #f2ff7980 80%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
			}
			else{
				document.getElementById("normal"+key+"strg").style.background = "linear-gradient(to right, #ff000080, #ff4a4a80 80%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
			}
			var material = 1;
			for (i=0; i < str.length; i++){
				if (str[i] == str[i].toLowerCase()){
					if (Player.Letters[str[i]][2] < str.split('').filter(x => x == str[i]).length){
						material = 0;
					}
				}
				else if (str[i] != str[i].toLowerCase()){
					if (Player.Letters[str[i].toLowerCase()][3] < str.split('').filter(x => x == str[i]).length){
						material = 0;
					}
				}
			}
			if (material == 1){
				document.getElementById("normal"+key).style.opacity = 0.6;
				document.getElementById("normal"+key+"strg").style.cursor = "pointer";
				document.getElementById("normal"+key+"strg").style.background = "linear-gradient(to right, #08ff0080, #79ff7a80 80%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
			}
		}
		if (Player.Letters[key][1] == false)
		{
			document.getElementById("uppercase"+key).style.opacity = 0.3;
			document.getElementById("uppercase"+key).style.cursor = "default";
			document.getElementById("uppercase"+key+"time").innerHTML = "Not unlocked";
			var str = Player.Letters[key][9];
			var str2 = "";
			for (let i=0; i < (new Set(str).size); i++){
				str2 += " " + str.split('').filter(x => x == [...new Set(str)].join('')[i]).length + [...new Set(str)].join('')[i];
			}
			document.getElementById("uppercase"+key+"strg").innerHTML = "Buy for:" + str2;
			var is = 1;
			for (let i=0; i < Player.Letters[key][9].length; i++){
				if (Unlocked.includes(Player.Letters[key][9][i]) == false){
					is = 0;
				}
			}
			if (is == 1){
				document.getElementById("uppercase"+key+"strg").style.background = "linear-gradient(to right, #ffa400b0, #f2ff7980 80%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
			}
			else{
				document.getElementById("uppercase"+key+"strg").style.background = "linear-gradient(to right, #ff000080, #ff4a4a80 80%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
			}
			var material = 1;
			for (i=0; i < str.length; i++){
				if (str[i] == str[i].toLowerCase()){
					if (Player.Letters[str[i]][2] < str.split('').filter(x => x == str[i]).length){
						material = 0;
					}
				}
				else if (str[i] != str[i].toLowerCase()){
					if (Player.Letters[str[i].toLowerCase()][3] < str.split('').filter(x => x == str[i]).length){
						material = 0;
					}
				}
			}
			if (material == 1){
				document.getElementById("uppercase"+key).style.opacity = 0.6;
				document.getElementById("uppercase"+key+"strg").style.cursor = "pointer";
				document.getElementById("uppercase"+key+"strg").style.background = "linear-gradient(to right, #08ff0080, #79ff7a80 80%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
			}
		}
	}
}

function checkmastery(letter){ // dorobić duże
	if (letter && letter.toLowerCase() == letter){
		document.getElementById("mastery"+letter+"count").innerHTML = "Total: <b>"+Player.Letters[letter][12]+"</b> ("+Player.Letters[letter][10]+")";
	}
	else if (letter && letter.toLowerCase() != letter){
		document.getElementById("mastery"+letter+"count").innerHTML = "Total: <b>"+Player.Letters[letter.toLowerCase()][13]+"</b> ("+Player.Letters[letter.toLowerCase()][11]+")";
	}
	else{
		var total_time_eahinorst = 0;
		var total_time_dl = 0;
		var total_time_bcfgmpuwy = 0;
		var total_time_jkqvxz = 0;
		var total_time_EAHINORST = 0;
		var total_time_DL = 0;
		var total_time_BCFGMPUWY = 0;
		var total_time_JKQVXZ = 0;
		for (let i=0; i<"eahinorst".length; i++){
			if (Player.Letters["eahinorst"[i]][0])
			{
				total_time_eahinorst += 1/(Player.Letters["eahinorst"[i]][6]*Player.Letters["eahinorst"[i]][18]);
			}
			if (Player.Letters["eahinorst"[i]][1])
			{
				total_time_EAHINORST += 1/(Player.Letters["eahinorst"[i]][7]*Player.Letters["eahinorst"[i]][19]);
			}
		}
		for (let i=0; i<"dl".length; i++){
			if (Player.Letters["dl"[i]][0])
			{
				total_time_eahinorst += 1/(Player.Letters["dl"[i]][6]*Player.Letters["dl"[i]][18]);
			}
			if (Player.Letters["dl"[i]][1])
			{
				total_time_EAHINORST += 1/(Player.Letters["dl"[i]][7]*Player.Letters["dl"[i]][19]);
			}
		}
		for (let i=0; i<"bcfgmpuwy".length; i++){
			if (Player.Letters["bcfgmpuwy"[i]][0])
			{
				total_time_eahinorst += 1/(Player.Letters["bcfgmpuwy"[i]][6]*Player.Letters["bcfgmpuwy"[i]][18]);
			}
			if (Player.Letters["bcfgmpuwy"[i]][1])
			{
				total_time_EAHINORST += 1/(Player.Letters["bcfgmpuwy"[i]][7]*Player.Letters["bcfgmpuwy"[i]][19]);
			}
		}
		for (let i=0; i<"jkqvxz".length; i++){
			if (Player.Letters["jkqvxz"[i]][0])
			{
				total_time_eahinorst += 1/(Player.Letters["jkqvxz"[i]][6]*Player.Letters["jkqvxz"[i]][18]);
			}
			if (Player.Letters["jkqvxz"[i]][1])
			{
				total_time_EAHINORST += 1/(Player.Letters["jkqvxz"[i]][7]*Player.Letters["jkqvxz"[i]][19]);
			}
		}
		document.getElementById("masteryaehinorsttime").innerHTML = "Total time: " + total_time_eahinorst.toFixed(2) + "s";
		document.getElementById("masterydltime").innerHTML = "Total time: " + total_time_dl.toFixed(2) + "s";
		document.getElementById("masterybcfgmpuwytime").innerHTML = "Total time: " + total_time_bcfgmpuwy.toFixed(2) + "s";
		document.getElementById("masteryjkqvxztime").innerHTML = "Total time: " + total_time_jkqvxz.toFixed(2) + "s";
		for (let key in Player.Letters){
			document.getElementById("mastery"+key+"count").innerHTML = "Total: <b>"+Player.Letters[key][12]+"</b> ("+Player.Letters[key][10]+")";
			document.getElementById("mastery"+key.toUpperCase()+"count").innerHTML = "Total: <b>"+Player.Letters[key][13]+"</b> ("+Player.Letters[key][11]+")";
			if (Player.Letters[key][0] == false){
				document.getElementById("mastery"+key).style.opacity = 0.15;
				document.getElementById("mastery"+key+"time").innerHTML = "&nbsp;";
			}
			else{
				var time = 1/(Player.Letters[key][6]*Player.Letters[key][18]);
				if (time <= 0.15){
					document.getElementById("mastery"+key+"time").innerHTML = (Player.Letters[key][6]*Player.Letters[key][18]).toFixed(1) + "/s";
				}
				else{
					document.getElementById("mastery"+key+"time").innerHTML = (1/(Player.Letters[key][6]*Player.Letters[key][18])).toFixed(2) + "s";
				}
			}
			if (Player.Letters[key][1] == false){
				document.getElementById("mastery"+key.toUpperCase()).style.opacity = 0.15;
				document.getElementById("mastery"+key.toUpperCase()+"time").innerHTML = "&nbsp;";
			}
			else{
				document.getElementById("mastery"+key.toUpperCase()+"time").innerHTML = (1/(Player.Letters[key][7]*Player.Letters[key][19])).toFixed(2) + "s";
			}
		}
	}
}

function getmastery(letter){
	if (letter == letter.toLowerCase())
	{
		Player.Letters[letter][18] = 1 + Player.Letters[letter][10] / 30;
		var time = 1/(Player.Letters[letter][6]*Player.Letters[letter][18]);
		if (time <= 0.15){
			document.getElementById("normal"+letter+"time").innerHTML = (Player.Letters[letter][6]*Player.Letters[letter][18]).toFixed(1) + "/s";
		}
		else{
			document.getElementById("normal"+letter+"time").innerHTML = (1/(Player.Letters[letter][6]*Player.Letters[letter][18])).toFixed(2) + "s";
		}
			/*if (Player.Letters[letter][14] == 2 && Player.Letters["d"][0] == false && Player.Letters["l"][0] == false){
				ifdl = true;
				document.getElementById("masterychoice2").style.background = "linear-gradient(90deg, rgba(185,255,78,0.88) 0%, rgba(35,255,61,0.88) 100%), linear-gradient(to top, #282828 20%, white 80%)";
				document.getElementById("masterychoice2").style.cursor = "pointer";
				document.getElementById("masterychoice2").innerHTML = "dl";
				document.getElementById("lettersnormaldl").innerHTML = "dl";
				document.getElementById("lettersnormaldl").style.fontSize = "2vh";
				document.getElementById("lettersnormaldl").style.cursor = "pointer";
				document.getElementById("lettersnormaldl").style.background = "white";
				document.getElementById("lettersnormaldl").style.backgroundColor = "white";
				document.getElementById("lettersnormaldl").style.color = "#34ff1b";
				document.getElementById("lettersnormaldl").style.borderColor = "#34ff1b";
			}
			if (Player.Letters["d"][14] == 3 && Player.Letters["b"][0] == false && Player.Letters["c"][0] == false && Player.Letters["f"][0] == false && Player.Letters["g"][0] == false && Player.Letters["m"][0] == false && Player.Letters["p"][0] == false && Player.Letters["u"][0] == false && Player.Letters["w"][0] == false && Player.Letters["y"][0]== false){
				ifbc = true;
				document.getElementById("masterychoice3").style.background = "linear-gradient(90deg, rgba(63,251,221,0.88) 0%, rgba(63,242,244,0.88) 24%, rgba(63,170,251,0.88) 100%), linear-gradient(to top, #282828 20%, white 80%)";
				document.getElementById("masterychoice3").style.cursor = "pointer";
				document.getElementById("masterychoice3").innerHTML = "bcfgmpuwy";
				document.getElementById("lettersnormalbcfgmpuwy").innerHTML = "bcfgmpuwy";
				document.getElementById("lettersnormalbcfgmpuwy").style.fontSize = "2vh";
				document.getElementById("lettersnormalbcfgmpuwy").style.cursor = "pointer";
				document.getElementById("lettersnormalbcfgmpuwy").style.background = "white";
				document.getElementById("lettersnormalbcfgmpuwy").style.backgroundColor = "white";
				document.getElementById("lettersnormalbcfgmpuwy").style.color = "#1bacff";
				document.getElementById("lettersnormalbcfgmpuwy").style.borderColor = "#1bacff";
			}*/
		checkmastery();
	}
	else if (letter != letter.toLowerCase()){
		Player.Letters[letter.toLowerCase()][19] = 1 + Player.Letters[letter.toLowerCase()][11] / 30;
		var time = 1/(Player.Letters[letter.toLowerCase()][7]*Player.Letters[letter.toLowerCase()][19]);
		if (time <= 0.15){
			document.getElementById("uppercase"+letter.toLowerCase()+"time").innerHTML = (Player.Letters[letter.toLowerCase()][7]*Player.Letters[letter.toLowerCase()][19]).toFixed(1) + "/s";
		}
		else{
			document.getElementById("uppercase"+letter.toLowerCase()+"time").innerHTML = (1/(Player.Letters[letter.toLowerCase()][7]*Player.Letters[letter.toLowerCase()][19])).toFixed(2) + "s";
		}
		checkmastery();
	}
}

function buy(type, letter){
	if (type == "nor" && Player.Letters[letter][0] == false){
		var str = Player.Letters[letter][8];
		var material = 1;
		for (i=0; i < str.length; i++){
			if (Player.Letters[str[i]][2] < str.split('').filter(x => x == str[i]).length){
				material = 0;
			}
		}
		if (material == 1){
			for (i=0; i < str.length; i++){
				Player.Letters[str[i]][2] -= 1;
				document.getElementById("normal"+str[i]+"strg").innerHTML = Player.Letters[str[i]][2] + "/" + Player.Letters[str[i]][4];
				document.getElementById("normal"+str[i]+"strg").style.background = "linear-gradient(to right, #15ff0075 "+(Player.Letters[str[i]][2]/Player.Letters[str[i]][4]*100)+"%, #ffffff75 "+(Player.Letters[str[i]][2]/Player.Letters[str[i]][4]*100)+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
				if (barkey1 == str[i]){
					barkey1 = null;
					barP11 = null;
					barP12 = null;
				}
				else if (barkey2 == str[i]){
					barkey2 = null;
					barP21 = null;
					barP22 = null;
				}
				else if (barkey3 == str[i]){
					barkey3 = null;
					barP31 = null;
					barP32 = null;
				}
				else if (barkey4 == str[i]){
					barkey4 = null;
					barP41 = null;
					barP42 = null;
				}
				for (let k=0; k<4; k++){
					if (Player.Collectors[k][2] == str[i]){
						document.getElementById("collector"+(k+1)).style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[str[i]][2]/Player.Letters[str[i]][4]*100)+"%, white "+(Player.Letters[str[i]][2]/Player.Letters[str[i]][4]*100)+"%)";
						document.getElementById("collector"+(k+1)+"strg").innerHTML = Player.Letters[str[i]][2] + "/" + Player.Letters[str[i]][4];
					}
				}
			}
			Player.Letters[letter][0] = true;
			Player.Letters[letter][8] = "";
			Player.Unlocked.push(letter);
			document.getElementById("normal"+letter+"time").innerHTML = (1/Player.Letters[letter][6]).toFixed(2) + "s";
			document.getElementById("normal"+letter+"strg").innerHTML = Player.Letters[letter][2] + "/" + Player.Letters[letter][4];
			document.getElementById("normal"+letter+"strg").style.background = "linear-gradient(to right, #15ff0075 "+(Player.Letters[letter][2]/Player.Letters[letter][4]*100)+"%, #ffffff75 "+(Player.Letters[letter][2]/Player.Letters[letter][4]*100)+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
			document.getElementById("normal"+letter).style.cursor = "move";
			document.getElementById("normal"+letter+"strg").style.cursor = "move";
			document.getElementById("normal"+letter).style.opacity = 1;
			document.getElementById("normal"+letter).setAttribute('draggable', true);
			document.getElementById("normal"+letter).setAttribute('ondragstart', 'dragl(event)');
			document.getElementById("normal"+letter).setAttribute('ondragend', 'dragendl(event)');
			var div = document.createElement("div");
			div.id = "strg"+letter;
			div.className = "strgletter";
			div.innerHTML = letter;
			document.getElementById("strgletters").appendChild(div);
			document.getElementById("strg"+letter).setAttribute('onclick', 'storage(this.id);');
			checkstore();
			document.getElementById("mastery"+letter).style.opacity = 1;
			checkmastery();
			save();
		}
	}
	else if (type == "upp" && Player.Letters[letter][1] == false){
		var str = Player.Letters[letter][9];
		var material = 1;
		for (i=0; i < str.length; i++){
				if (str[i] == str[i].toLowerCase()){
					if (Player.Letters[str[i]][2] < str.split('').filter(x => x == str[i]).length){
						material = 0;
					}
				}
				else if (str[i] != str[i].toLowerCase()){
					if (Player.Letters[str[i].toLowerCase()][3] < str.split('').filter(x => x == str[i]).length){
						material = 0;
					}
				}
			}
		if (material == 1){
			for (i=0; i < str.length; i++){
				if (str[i] == str[i].toLowerCase()){
					Player.Letters[str[i]][2] -= 1;
					document.getElementById("normal"+str[i]+"strg").innerHTML = Player.Letters[str[i]][2] + "/" + Player.Letters[str[i]][4];
					document.getElementById("normal"+str[i]+"strg").style.background = "linear-gradient(to right, #15ff0075 "+(Player.Letters[str[i]][2]/Player.Letters[str[i]][4]*100)+"%, #ffffff75 "+(Player.Letters[str[i]][2]/Player.Letters[str[i]][4]*100)+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
					if (barkey1 == str[i]){
						barkey1 = null;
						barP11 = null;
						barP12 = null;
					}
					else if (barkey2 == str[i]){
						barkey2 = null;
						barP21 = null;
						barP22 = null;
					}
					else if (barkey3 == str[i]){
						barkey3 = null;
						barP31 = null;
						barP32 = null;
					}
					else if (barkey4 == str[i]){
						barkey4 = null;
						barP41 = null;
						barP42 = null;
					}
					for (let k=0; k<4; k++){
						if (Player.Collectors[k][2] == str[i]){
							document.getElementById("collector"+(k+1)).style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[str[i]][2]/Player.Letters[str[i]][4]*100)+"%, white "+(Player.Letters[str[i]][2]/Player.Letters[str[i]][4]*100)+"%)";
							document.getElementById("collector"+(k+1)+"strg").innerHTML = Player.Letters[str[i]][2] + "/" + Player.Letters[str[i]][4];
						}
					}
				}
				else{
					Player.Letters[str[i].toLowerCase()][3] -= 1;
					document.getElementById("uppercase"+str[i].toLowerCase()+"strg").innerHTML = Player.Letters[str[i].toLowerCase()][3] + "/" + Player.Letters[str[i].toLowerCase()][5];
					document.getElementById("uppercase"+str[i].toLowerCase()+"strg").style.background = "linear-gradient(to right, #15ff0075 "+(Player.Letters[str[i].toLowerCase()][3]/Player.Letters[str[i].toLowerCase()][5]*100)+"%, #ffffff75 "+(Player.Letters[str[i].toLowerCase()][3]/Player.Letters[str[i].toLowerCase()][5]*100)+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
					if (barkey1 == str[i]){
						barkey1 = null;
						barP11 = null;
						barP12 = null;
					}
					else if (barkey2 == str[i]){
						barkey2 = null;
						barP21 = null;
						barP22 = null;
					}
					else if (barkey3 == str[i]){
						barkey3 = null;
						barP31 = null;
						barP32 = null;
					}
					else if (barkey4 == str[i]){
						barkey4 = null;
						barP41 = null;
						barP42 = null;
					}
					for (let k=0; k<4; k++){
						if (Player.Collectors[k][2] == str[i]){
							document.getElementById("collector"+(k+1)).style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[str[i].toLowerCase()][3]/Player.Letters[str[i].toLowerCase()][5]*100)+"%, white "+(Player.Letters[str[i].toLowerCase()][3]/Player.Letters[str[i].toLowerCase()][5]*100)+"%)";
							document.getElementById("collector"+(k+1)+"strg").innerHTML = Player.Letters[str[i].toLowerCase()][3] + "/" + Player.Letters[str[i].toLowerCase()][5];
						}
					}
				}
			}
			Player.Letters[letter][1] = true;
			Player.Letters[letter][9] = "";
			Player.Unlocked.push(letter.toUpperCase());
			document.getElementById("uppercase"+letter+"time").innerHTML = (1/Player.Letters[letter][7]).toFixed(2) + "s";
			document.getElementById("uppercase"+letter+"strg").innerHTML = Player.Letters[letter][3] + "/" + Player.Letters[letter][5];
			document.getElementById("uppercase"+letter+"strg").style.background = "linear-gradient(to right, #15ff0075 "+(Player.Letters[letter][3]/Player.Letters[letter][5]*100)+"%, #ffffff75 "+(Player.Letters[letter][3]/Player.Letters[letter][5]*100)+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
			document.getElementById("uppercase"+letter).style.cursor = "move";
			document.getElementById("uppercase"+letter+"strg").style.cursor = "move";
			document.getElementById("uppercase"+letter).style.opacity = 1;
			document.getElementById("uppercase"+letter).setAttribute('draggable', true);
			document.getElementById("uppercase"+letter).setAttribute('ondragstart', 'dragl(event)');
			document.getElementById("uppercase"+letter).setAttribute('ondragend', 'dragendl(event)');
			var div = document.createElement("div");
			div.id = "strg"+letter.toUpperCase();
			div.className = "strgletter";
			div.innerHTML = letter.toUpperCase();
			document.getElementById("strgletters").appendChild(div);
			document.getElementById("strg"+letter.toUpperCase()).setAttribute('onclick', 'storage(this.id);');
			checkstore();
			document.getElementById("mastery"+letter.toUpperCase()).style.opacity = 1;
			checkmastery();
			save();
		}
	}
}

function storage(id){ //wszystko co ze storage - dorobić duże
	if (id.length > 1){
		var letter = id.slice(4);
	}
	else{
		var letter = id;
	}
	strg = letter;
	document.getElementById("storagemain").style.display = "block";
	if ((Player.Letters[letter][25]).toFixed(1).slice(-1) == 0 && (Player.Letters[letter][22]).toFixed(1).slice(-1) == 0){
		document.getElementById("storagereq1info").innerHTML = (Player.Letters[letter][25]).toFixed(0) + "/" + (Player.Letters[letter][22]).toFixed(0);
	}
	else if ((Player.Letters[letter][25]).toFixed(1).slice(-1) == 0 && (Player.Letters[letter][22]).toFixed(1).slice(-1) != 0){
		document.getElementById("storagereq1info").innerHTML = (Player.Letters[letter][25]).toFixed(0) + "/" + (Player.Letters[letter][22]).toFixed(1);
	}
	else if ((Player.Letters[letter][25]).toFixed(1).slice(-1) != 0 && (Player.Letters[letter][22]).toFixed(1).slice(-1) == 0){
		document.getElementById("storagereq1info").innerHTML = (Player.Letters[letter][25]).toFixed(1) + "/" + (Player.Letters[letter][22]).toFixed(0);
	}
	else if ((Player.Letters[letter][25]).toFixed(1).slice(-1) != 0 && (Player.Letters[letter][22]).toFixed(1).slice(-1) != 0){
		document.getElementById("storagereq1info").innerHTML = (Player.Letters[letter][25]).toFixed(1) + "/" + (Player.Letters[letter][22]).toFixed(1);
	}
	document.getElementById("storagereq2info").innerHTML = (Player.Letters[letter][26]).toFixed(0) + "/" + (Player.Letters[letter][23]).toFixed(0);
	document.getElementById("storagereq2letter").innerHTML = Player.Letters[letter][24];
	document.getElementById("storagerew").innerHTML = "<span>+5 storage</span><br>"+letter;
	var p = (Player.Letters[letter][25]/Player.Letters[letter][22]*0.4 + Player.Letters[letter][26]/Player.Letters[letter][23]*0.6)*100;
	document.getElementById("storageprog").innerHTML = p.toFixed(0) + "%";
	document.getElementById("storageprog").style.background = "linear-gradient(to right, #15ff0075 "+p+"%, #ffffff75 "+p+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
	if (Player.Score <= Player.Letters[letter][22]-Player.Letters[letter][25]){
		if (Player.Score.toFixed(1).slice(-1) == 0){
			document.getElementById("storagereq1fill").innerHTML = "Fill (" + Player.Score.toFixed(0) +")";
		}
		else{
			document.getElementById("storagereq1fill").innerHTML = "Fill (" + Player.Score.toFixed(1) +")";
		}
	}
	else{
		if ((Player.Letters[letter][22]-Player.Letters[letter][25]).toFixed(1).slice(-1) == 0){
			document.getElementById("storagereq1fill").innerHTML = "Fill (" + (Player.Letters[letter][22]-Player.Letters[letter][25]).toFixed(0) +")";
		}
		else{
			document.getElementById("storagereq1fill").innerHTML = "Fill (" + (Player.Letters[letter][22]-Player.Letters[letter][25]).toFixed(1) +")";
		}
	}
	if (Player.Score.toFixed(1) > 0 && Player.Letters[letter][22] != Player.Letters[letter][25]){
		document.getElementById("storagereq1fill").style.background = "linear-gradient(to right, #00ff1d87, #31ff00a3 80%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
	}
	else if (Player.Letters[letter][22] != Player.Letters[letter][25]){
		document.getElementById("storagereq1fill").style.background = "linear-gradient(to right, #ff3a0087, #ff3a00a3 80%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
	}
	if (Player.Letters[Player.Letters[letter][24]][2] <= Player.Letters[letter][23]-Player.Letters[letter][26]){
		document.getElementById("storagereq2fill").innerHTML = "Fill (" + Player.Letters[Player.Letters[letter][24]][2] +")";
	}
	else{
		document.getElementById("storagereq2fill").innerHTML = "Fill (" + (Player.Letters[letter][23]-Player.Letters[letter][26]) +")";
	}
	if (Player.Letters[Player.Letters[letter][24]][2].toFixed(0) > 0 && Player.Letters[letter][23] != Player.Letters[letter][26]){
		document.getElementById("storagereq2fill").style.background = "linear-gradient(to right, #00ff1d87, #31ff00a3 80%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
	}
	else if (Player.Letters[letter][23] != Player.Letters[letter][26]){
		document.getElementById("storagereq2fill").style.background = "linear-gradient(to right, #ff3a0087, #ff3a00a3 80%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
	}
	if (Player.Letters[letter][22] == Player.Letters[letter][25]){
		document.getElementById("storagereq1fill").innerHTML = "";
		document.getElementById("storagereq1fill").style.cursor = "default";
		document.getElementById("storagereq1fill").style.background = "rgb(145 255 154)";
		document.getElementById("storagereq1letter").style.backgroundImage = 'url("score.png"), linear-gradient(to top, rgb(156 255 164) 0%, rgb(163 255 171) 20%, rgb(190 255 190) 80%)';
	}
	else{
		document.getElementById("storagereq1fill").style.cursor = "pointer";
		document.getElementById("storagereq1letter").style.backgroundImage = 'url("score.png"), linear-gradient(to top, #ececec 0%, #ececec 20%, #ffffff 80%)';
	}
	if (Player.Letters[letter][23] == Player.Letters[letter][26]){
		document.getElementById("storagereq2fill").innerHTML = "";
		document.getElementById("storagereq2fill").style.cursor = "default";
		document.getElementById("storagereq2letter").style.background = "linear-gradient(to top, rgb(156 255 164) 0%, rgb(163 255 171) 20%, rgb(190 255 190) 80%)";
		document.getElementById("storagereq2fill").style.background = "rgb(145 255 154)";
	}
	else{
		document.getElementById("storagereq2fill").style.cursor = "pointer";
		document.getElementById("storagereq2letter").style.background = "linear-gradient(to top, #ececec 0%, #ececec 20%, #ffffff 80%)";
	}
}

function storagefill(value){
	if (value == 1){
		if (Player.Letters[strg][22]-Player.Letters[strg][25] > 0){
			if (Player.Score <= Player.Letters[strg][22]-Player.Letters[strg][25]){
				Player.Letters[strg][25] += Player.Score;
				Player.Score = 0;
			}
			else{
				Player.Score -= (Player.Letters[strg][22]-Player.Letters[strg][25]);
				Player.Letters[strg][25] = Player.Letters[strg][22];
			}
			scoredisp();
			save();
		}
	}
	else if (value == 2){
		if (Player.Letters[strg][23]-Player.Letters[strg][26] > 0){
			if (Player.Letters[Player.Letters[strg][24]][2] <= Player.Letters[strg][23]-Player.Letters[strg][26]){
				Player.Letters[strg][26] += Player.Letters[Player.Letters[strg][24]][2];
				Player.Letters[Player.Letters[strg][24]][2] = 0;
			}
			else{
				Player.Letters[Player.Letters[strg][24]][2] -= (Player.Letters[strg][23]-Player.Letters[strg][26]).toFixed(0);
				Player.Letters[strg][26] = Player.Letters[strg][23];
			}
			document.getElementById("normal"+Player.Letters[strg][24]+"strg").innerHTML = Player.Letters[Player.Letters[strg][24]][2] + "/" + Player.Letters[Player.Letters[strg][24]][4];
			document.getElementById("normal"+Player.Letters[strg][24]+"strg").style.background = "linear-gradient(to right, #15ff0075 "+(Player.Letters[Player.Letters[strg][24]][2]/Player.Letters[Player.Letters[strg][24]][4]*100)+"%, #ffffff75 "+(Player.Letters[Player.Letters[strg][24]][2]/Player.Letters[Player.Letters[strg][24]][4]*100)+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
			for (let k=0; k<4; k++){
				if (Player.Collectors[k][2] == Player.Letters[strg][24]){
					document.getElementById("collector"+(k+1)).style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[Player.Letters[strg][24]][2]/Player.Letters[Player.Letters[strg][24]][4]*100)+"%, white "+(Player.Letters[Player.Letters[strg][24]][2]/Player.Letters[Player.Letters[strg][24]][4]*100)+"%)";
					document.getElementById("collector"+(k+1)+"strg").innerHTML = Player.Letters[Player.Letters[strg][24]][2] + "/" + Player.Letters[Player.Letters[strg][24]][4];
				}
			}
			checkstore();
			save();
		}
	}
	if (Player.Letters[strg][23] == Player.Letters[strg][26] && Player.Letters[strg][22] == Player.Letters[strg][25]){
		Player.Letters[strg][4] += 5;
		document.getElementById("normal"+strg+"strg").innerHTML = Player.Letters[strg][2] + "/" + Player.Letters[strg][4];
		document.getElementById("normal"+strg+"strg").style.background = "linear-gradient(to right, #15ff0075 "+(Player.Letters[strg][2]/Player.Letters[strg][4]*100)+"%, #ffffff75 "+(Player.Letters[strg][2]/Player.Letters[strg][4]*100)+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
		for (let k=0; k<4; k++){
			if (Player.Collectors[k][2] == strg){
				document.getElementById("collector"+(k+1)).style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[strg][2]/Player.Letters[strg][4]*100)+"%, white "+(Player.Letters[strg][2]/Player.Letters[strg][4]*100)+"%)";
				document.getElementById("collector"+(k+1)+"strg").innerHTML = Player.Letters[strg][2] + "/" + Player.Letters[strg][4];
			}
		}
		storagedraw(strg);
	}
	storage(strg);
}

function storagedraw(letter){
	var random1 = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
	var random2 = (min, max) => Math.random()*(max - min) + min;
	if ("eahinorst".includes(letter)){
		var str = "eahinorst" + letter;
		var lett = str[random1(0, str.length-1)];
		while (lett == Player.Letters[letter][24]){
			lett = str[random1(0, str.length-1)];
		}
	}
	else if ("dl".includes(letter)){
		var str = "nshrdl" + letter;
		var lett = str[random1(0, str.length-1)];
		while (lett == Player.Letters[letter][24]){
			lett = str[random1(0, str.length-1)];
		}
	}
	else if ("bcfgmpuwy".includes(letter)){
		var str = "bcfgmpuwy" + letter;
		var lett = str[random1(0, str.length-1)];
		while (lett == Player.Letters[letter][24]){
			lett = str[random1(0, str.length-1)];
		}
	}
	else if ("jkqvxz".includes(letter)){
		var str = "jkqvxz" + letter;
		var lett = str[random1(0, str.length-1)];
		while (lett == Player.Letters[letter][24]){
			lett = str[random1(0, str.length-1)];
		}
	}
	var number = random1(Player.Letters[letter][4], Math.round(Player.Letters[letter][4]*1.3));
	Player.Letters[letter][24] = lett;
	Player.Letters[letter][23] = Number(number);
	var numberscore = random2(Player.Letters[lett][16]*Player.Letters[letter][23],Player.Letters[lett][16]*Player.Letters[letter][23]*1.5);
	if (numberscore.toFixed(1).slice(-1) == 0){
		numberscore = numberscore.toFixed(0);
	}
	else if (numberscore.toFixed(1).slice(-1) != 0){
		numberscore = numberscore.toFixed(1);
	}
	Player.Letters[letter][22] = Number(numberscore);
	Player.Letters[letter][25] = 0;
	Player.Letters[letter][26] = 0;
}

function scoredisp(){
	if (Player.Score.toFixed(1).slice(-1) == 0){
		document.getElementById("scoredisplay").innerHTML = "<b>" + Player.Score.toFixed(0) + "</b><img draggable='false' src='client/score.png' alt='Score' width='43' height='43'>";
	}
	else{
		document.getElementById("scoredisplay").innerHTML = "<b>" + Player.Score.toFixed(1) + "</b><img draggable='false' src='client/score.png' alt='Score' width='43' height='43'>";
	}
}

function entername(){
	if (AlertType != "Change"){
		var string = document.getElementById("nick").value;
		var is = 1;
		if (string.length >= 4 && string.length <= 15){
			for (let i=0; i < string.length; i++){
				if ("qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM".includes(string[i])){
					is = 1;
				}
				else{
					is = 0;
					break;
				}
			}
		}
		else if (string.length > 10){
			is = 2;
			document.getElementById("nameerror").innerHTML = "Your nickname cannot be longer than 10 characters!"
			document.getElementById("logbutton").style = "margin-top: -39px; line-height: 20px;";
			document.getElementById("nameerror").style.display = "block";
			document.getElementById("nick").value = "";
		}
		else{
			is = 0;
		}
		if (is == 1){
			var b = 1;
			for (let i=0; i<localStorage.length; i++){
				if (string == JSON.parse(localStorage.getItem(localStorage.key(i))).Player.nick){
					b = 0;
				}
			}
			if (b == 1){
				Player.nick = string;
				logged = 1;
				socket.emit('newplayer', Player);
			}
			else{
				document.getElementById("nameerror").innerHTML = "You already have save with the same nickname!"
				document.getElementById("logbutton").style = "margin-top: -29px; line-height: 20px;";
				document.getElementById("nameerror").style.display = "block";
				document.getElementById("nick").value = "";
			}
		}
		else if (is == 0){
			document.getElementById("nameerror").innerHTML = "min. 4 characters (letters or numbers)"
			document.getElementById("logbutton").style = "margin-top: -29px; line-height: 20px;";
			document.getElementById("nameerror").style.display = "block";
			document.getElementById("nick").value = "";
		}
	}
	else{
		var string = document.getElementById("nick2").value;
		var is = 1;
		if (string.length >= 4){
			for (let i=0; i < string.length; i++){
				if ("qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM".includes(string[i])){
					is = 1;
				}
				else{
					is = 0;
					break;
				}
			}
		}
		else{
			is = 0;
		}
		if (is == 1){
			var b = 1;
			for (let i=0; i<localStorage.length; i++){
				if (string == JSON.parse(localStorage.getItem(localStorage.key(i))).Player.nick){
					b = 0;
				}
			}
			if (b == 1){
				localStorage.removeItem(Player.nick);
				Player.nick = string;
				var Save =
				{
					Player: Player
				}
				localStorage.setItem(Player.nick, JSON.stringify(Save));
				socket.emit('LogPlayer', Player);
				document.getElementById("namedisplay").innerHTML = "Playing as: <i><b>" + Player.nick + "</b></i>";
				document.getElementById("Alert").style = "display: none;";
				AlertType = "";
			}
			else{
				document.getElementById("nameerror2").innerHTML = "You already have save with the same nickname!"
				document.getElementById("nameerror2").style.display = "block";
				document.getElementById("nick2").value = "";
			}
		}
		else{
			document.getElementById("nameerror2").innerHTML = "min. 4 characters (letters or numbers)"
			document.getElementById("nameerror2").style.display = "block";
			document.getElementById("nick2").value = "";
		}
	}
}

function changemastery(n){
	function lol(){
		document.getElementById("masteryaehinorst").style.display = "none";
		document.getElementById("masterydl").style.display = "none";
		document.getElementById("masterybcfgmpuwy").style.display = "none";
		document.getElementById("masteryjkqvxz").style.display = "none";
		document.getElementById("masteryAEHINORST").style.display = "none";
		document.getElementById("masteryDL").style.display = "none";
		document.getElementById("masteryBCFGMPUWY").style.display = "none";
		document.getElementById("masteryJKQVXZ").style.display = "none";
	}
	if (n == 1){
		lol();
		document.getElementById("masteryaehinorst").style.display = "block";
	}
	else if (n == 2 && ifdl){
		lol();
		document.getElementById("masterydl").style.display = "block";
	}
	else if (n == 3 && ifbc){
		lol();
		document.getElementById("masterybcfgmpuwy").style.display = "block";
	}
	else if (n == 4 && ifjk){
		lol();
		document.getElementById("masteryjkqvxz").style.display = "block";
	}
	else if (n == 5 && ifAH){
		lol();
		document.getElementById("masteryAEHINORST").style.display = "block";
	}
	else if (n == 6 && ifDL){
		lol();
		document.getElementById("masteryDL").style.display = "block";
	}
	else if (n == 7 && ifBC){
		lol();
		document.getElementById("masteryBCFGMPUWY").style.display = "block";
	}
	else if (n == 8 && ifJK){
		lol();
		document.getElementById("masteryJKQVXZ").style.display = "block";
	}
}

function transformmastery(n, value){
	if (value == 1){
		if (n == 1){
			document.getElementById("masterychoice1").style.transform = "scale(1.05,1.05)";
		}
		else if (n == 2 && ifdl){
			document.getElementById("masterychoice2").style.transform = "scale(1.05,1.05)";
		}
		else if (n == 3 && ifbc){
			document.getElementById("masterychoice3").style.transform = "scale(1.05,1.05)";
		}
		else if (n == 4 && ifjk){
			document.getElementById("masterychoice4").style.transform = "scale(1.05,1.05)";
		}
		else if (n == 5 && ifAH){
			document.getElementById("masterychoice5").style.transform = "scale(1.05,1.05)";
		}
		else if (n == 6 && ifDL){
			document.getElementById("masterychoice6").style.transform = "scale(1.05,1.05)";
		}
		else if (n == 7 && ifBC){
			document.getElementById("masterychoice7").style.transform = "scale(1.05,1.05)";
		}
		else if (n == 8 && ifJK){
			document.getElementById("masterychoice8").style.transform = "scale(1.05,1.05)";
		}
	}
	else{
		if (n == 1){
			document.getElementById("masterychoice1").style.transform = "scale(1,1)";
		}
		else if (n == 2 && ifdl){
			document.getElementById("masterychoice2").style.transform = "scale(1,1)";
		}
		else if (n == 3 && ifbc){
			document.getElementById("masterychoice3").style.transform = "scale(1,1)";
		}
		else if (n == 4 && ifjk){
			document.getElementById("masterychoice4").style.transform = "scale(1,1)";
		}
		else if (n == 5 && ifAH){
			document.getElementById("masterychoice5").style.transform = "scale(1,1)";
		}
		else if (n == 6 && ifDL){
			document.getElementById("masterychoice6").style.transform = "scale(1,1)";
		}
		else if (n == 7 && ifBC){
			document.getElementById("masterychoice7").style.transform = "scale(1,1)";
		}
		else if (n == 8 && ifJK){
			document.getElementById("masterychoice8").style.transform = "scale(1,1)";
		}
	}
}

document.getElementById("masterychoice1").onclick = function(){changemastery(1)};
document.getElementById("masterychoice2").onclick = function(){changemastery(2)};
document.getElementById("masterychoice3").onclick = function(){changemastery(3)};
document.getElementById("masterychoice4").onclick = function(){changemastery(4)};
document.getElementById("masterychoice5").onclick = function(){changemastery(5)};
document.getElementById("masterychoice6").onclick = function(){changemastery(6)};
document.getElementById("masterychoice7").onclick = function(){changemastery(7)};
document.getElementById("masterychoice8").onclick = function(){changemastery(8)};

document.getElementById("masterychoice1").onmouseover = function(){transformmastery(1, 1)};
document.getElementById("masterychoice2").onmouseover = function(){transformmastery(2, 1)};
document.getElementById("masterychoice3").onmouseover = function(){transformmastery(3, 1)};
document.getElementById("masterychoice4").onmouseover = function(){transformmastery(4, 1)};
document.getElementById("masterychoice5").onmouseover = function(){transformmastery(5, 1)};
document.getElementById("masterychoice6").onmouseover = function(){transformmastery(6, 1)};
document.getElementById("masterychoice7").onmouseover = function(){transformmastery(7, 1)};
document.getElementById("masterychoice8").onmouseover = function(){transformmastery(8, 1)};
document.getElementById("masterychoice1").onmouseout = function(){transformmastery(1, 0)};
document.getElementById("masterychoice2").onmouseout = function(){transformmastery(2, 0)};
document.getElementById("masterychoice3").onmouseout = function(){transformmastery(3, 0)};
document.getElementById("masterychoice4").onmouseout = function(){transformmastery(4, 0)};
document.getElementById("masterychoice5").onmouseout = function(){transformmastery(5, 0)};
document.getElementById("masterychoice6").onmouseout = function(){transformmastery(6, 0)};
document.getElementById("masterychoice7").onmouseout = function(){transformmastery(7, 0)};
document.getElementById("masterychoice8").onmouseout = function(){transformmastery(8, 0)};

document.getElementById("savegame1").onclick = function(){
	if (localStorage.length >= 1){
		logged = 1;
		Player.nick = JSON.parse(localStorage.getItem(localStorage.key(0))).Player.nick
		socket.emit('explayer', Player);
	}
	else{
		document.getElementById("Login").style.display = "none";
		document.getElementById("Login2").style.display = "block";
	}
}
document.getElementById("savegame2").onclick = function(){
	if (localStorage.length >= 2){
		logged = 1;
		Player.nick = JSON.parse(localStorage.getItem(localStorage.key(1))).Player.nick
		socket.emit('explayer', Player);
	}
	else{
		document.getElementById("Login").style.display = "none";
		document.getElementById("Login2").style.display = "block";
	}
}
document.getElementById("savegame3").onclick = function(){
	if (localStorage.length >= 3){
		logged = 1;
		Player.nick = JSON.parse(localStorage.getItem(localStorage.key(2))).Player.nick
		socket.emit('explayer', Player);
	}
	else{
		document.getElementById("Login").style.display = "none";
		document.getElementById("Login2").style.display = "block";
	}
}

document.getElementById("save1bin").onclick = function(){
	if (localStorage.length >= 1){
		localStorage.removeItem(localStorage.key(0));
		location.reload();
	}
	else{
		document.getElementById("Login").style.display = "none";
		document.getElementById("Login2").style.display = "block";
	}
}
document.getElementById("save2bin").onclick = function(){
	if (localStorage.length >= 2){
		localStorage.removeItem(localStorage.key(1));
		location.reload();
	}
	else{
		document.getElementById("Login").style.display = "none";
		document.getElementById("Login2").style.display = "block";
	}
}
document.getElementById("save3bin").onclick = function(){
	if (localStorage.length >= 3){
		localStorage.removeItem(localStorage.key(2));
		location.reload();
	}
	else{
		document.getElementById("Login").style.display = "none";
		document.getElementById("Login2").style.display = "block";
	}
}

document.getElementById("savegame1").onmouseover = function(){
	document.getElementById("save1bin").style.opacity = 1;
}
document.getElementById("savegame1").onmouseout = function(){
	document.getElementById("save1bin").style.opacity = 0;
}
document.getElementById("savegame2").onmouseover = function(){
	if (localStorage.length >= 2){
		document.getElementById("save2bin").style.opacity = 1;
	}
}
document.getElementById("savegame2").onmouseout = function(){
	document.getElementById("save2bin").style.opacity = 0;
}
document.getElementById("savegame3").onmouseover = function(){
	if (localStorage.length >= 3){
		document.getElementById("save3bin").style.opacity = 1;
	}
}
document.getElementById("savegame3").onmouseout = function(){
	document.getElementById("save3bin").style.opacity = 0;
}
document.getElementById("save1bin").onmouseover = function(){
	if (localStorage.length >= 1){
		document.getElementById("save1bin").style.opacity = 1;
	}
	else{
		document.getElementById("savegame1").style.textDecoration = "underline";
	}
}
document.getElementById("save1bin").onmouseout = function(){
	if (localStorage.length < 1){
		document.getElementById("savegame1").style.textDecoration = "";
	}
}
document.getElementById("save2bin").onmouseover = function(){
	if (localStorage.length >= 2){
		document.getElementById("save2bin").style.opacity = 1;
	}
	else{
		document.getElementById("savegame2").style.textDecoration = "underline";
	}
}
document.getElementById("save2bin").onmouseout = function(){
	if (localStorage.length < 2){
		document.getElementById("savegame2").style.textDecoration = "";
	}
}
document.getElementById("save3bin").onmouseover = function(){
	if (localStorage.length >= 3){
		document.getElementById("save3bin").style.opacity = 1;
	}
	else{
		document.getElementById("savegame3").style.textDecoration = "underline";
	}
}
document.getElementById("save3bin").onmouseout = function(){
	if (localStorage.length < 3){
		document.getElementById("savegame3").style.textDecoration = "";
	}
}

document.getElementById("namedisplay").onclick = function(){
	if ((document.getElementById("changename").style.display || document.getElementById("changename").style.display == "block") && document.getElementById("changename").style.display != "none"){
		document.getElementById("changename").style.display = "none";
	}
	else{
		document.getElementById("changename").style.display = "block";
	}
}

document.getElementById("changeacc").onclick = function(){
	var Save =
	{
		Player: Player
	}
	localStorage.setItem(Player.nick, JSON.stringify(Save));
	location.reload();
}

document.getElementById("changenick").onclick = function(){
	document.getElementById("Alert").style = "display: block;";
	document.getElementById("AlertCancel").style.display = "inline-block";
	document.getElementById("AlertText").innerHTML = "<b>Change nickname:</b><br><input id='nick2' type='text' style='height:23px;' placeholder='nickname'><div id='nameerror2'>min. 4 characters (letters or numbers)</div>";
	AlertType = "Change";
}

document.onclick = function(el){
	if (el.path && el.path[0].id != "namedisplay" && el.path[2].id != "namedisplay" && el.path[0].id != "changename" && el.path[0].id != "changeacc" && el.path[0].id != "changenick" && AlertType != "Change"){
		document.getElementById("changename").style.display = "none";
	}
}

document.getElementById("AlertConfirm").onclick = function(){
	if (AlertType == "Info"){
		document.getElementById("Alert").style = "display: none;";
		AlertType = "";
	}
	else if (AlertType == "Change"){
		entername();
	}
}
document.getElementById("AlertCancel").onclick = function(){
	document.getElementById("Alert").style = "display: none;";
	AlertType = "";
}
function ver0to2(){
	var Save =
	{
		Player: Player
	}
	localStorage.setItem(Player.nick, JSON.stringify(Save));
}
function save(){
	if (Player.nick != ""){
		var Save =
		{
			Player: Player
		}
		localStorage.setItem(Player.nick, JSON.stringify(Save));
	}
}
function load(){
	for (let i=0; i < 3; i++){
		if (localStorage.getItem(localStorage.key(i))){
			document.getElementById("savegame" + (i+1)).innerHTML = "<b>" + JSON.parse(localStorage.getItem(localStorage.key(i))).Player.nick + "</b>";
		}
		else{
			document.getElementById("savegame" + (i+1)).innerHTML = "New game";
		}
	}
}
socket.on('enternick', function(value){
	if (value == 1 && logged == 1){
		if (JSON.parse(localStorage.getItem("Saved"))){
			var SavedGame = JSON.parse(localStorage.getItem("Saved"));
			var Save =
			{
				Player: Player
			}
			localStorage.setItem(Player.nick, JSON.stringify(Save));
		}
		else if (JSON.parse(localStorage.getItem(Player.nick))){
			var SavedGame = JSON.parse(localStorage.getItem(Player.nick));
			if (SavedGame.Player.version){
				if (SavedGame.Player.version == version){
					Player = SavedGame.Player;
				}
				else{
					ver0to2();
				}
			}
			else{
				ver0to2();
			}
		}
		else{
			var Save =
			{
				Player: Player
			}
			localStorage.setItem(Player.nick, JSON.stringify(Save));
		}
		socket.emit('LogPlayer', Player);
		document.getElementById("Login").style.display = "none";
		document.getElementById("Login2").style.display = "none";
		scoredisp();
		document.getElementById("namedisplay").innerHTML = "Playing as: <i><b>" + Player.nick + "</b></i>";
		document.getElementById("all").style.display = "block";
		for (let key in Player.Letters){
			if (Player.Letters[key][0])
			{
				var time = 1/(Player.Letters[key][6]*Player.Letters[key][18]);
				if (time <= 0.15){
					document.getElementById("normal"+key+"time").innerHTML = (Player.Letters[key][6]*Player.Letters[key][18]).toFixed(1) + "/s";
				}
				else{
					document.getElementById("normal"+key+"time").innerHTML = (1/(Player.Letters[key][6]*Player.Letters[key][18])).toFixed(2) + "s";
				}
				document.getElementById("normal"+key+"strg").innerHTML = Player.Letters[key][2] + "/" + Player.Letters[key][4];
				document.getElementById("normal"+key+"strg").style.background = "linear-gradient(to right, #15ff0075 "+(Player.Letters[key][2]/Player.Letters[key][4]*100)+"%, #ffffff75 "+(Player.Letters[key][2]/Player.Letters[key][4]*100)+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
				document.getElementById("normal"+key).setAttribute('draggable', true);
				document.getElementById("normal"+key).setAttribute('ondragstart', 'dragl(event)');
				document.getElementById("normal"+key).setAttribute('ondragend', 'dragendl(event)');
			}
			if (Player.Letters[key][1])
			{
				var time = 1/(Player.Letters[key][7]*Player.Letters[key][19]);
				if (time <= 0.15){
					document.getElementById("normal"+key+"time").innerHTML = (Player.Letters[key][7]*Player.Letters[key][19]).toFixed(1) + "/s";
				}
				else{
					document.getElementById("normal"+key+"time").innerHTML = (1/(Player.Letters[key][7]*Player.Letters[key][19])).toFixed(2) + "s";
				}
				document.getElementById("uppercase"+key+"strg").innerHTML = Player.Letters[key][3] + "/" + Player.Letters[key][5];
				document.getElementById("uppercase"+key+"strg").style.background = "linear-gradient(to right, #15ff0075 "+(Player.Letters[key][3]/Player.Letters[key][5]*100)+"%, #ffffff75 "+(Player.Letters[key][3]/Player.Letters[key][5]*100)+"%), linear-gradient(to top, #d2d2d2 0%, #d2d2d2 50%, #ffffff 90%)";
				document.getElementById("uppercase"+key).setAttribute('draggable', true);
				document.getElementById("uppercase"+key).setAttribute('ondragstart', 'dragl(event)');
				document.getElementById("uppercase"+key).setAttribute('ondragend', 'dragendl(event)');
			}
		}
		for (let i=0; i<Player.Unlocked.length; i++){
			var div = document.createElement("div");
			div.id = "strg"+Player.Unlocked[i];
			div.className = "strgletter";
			div.innerHTML = Player.Unlocked[i];
			document.getElementById("strgletters").appendChild(div);
			document.getElementById("strg"+Player.Unlocked[i]).setAttribute('onclick', 'storage(this.id);');
		}
		checkstore();
		checkmastery();
		for (let i=0; i < 4; i++){
			if (Player.Collectors[i][0]){
				document.getElementById("collector"+(i+1)+"letter").innerHTML = "#" + (i+1);
				document.getElementById("collector"+(i+1)+"main").setAttribute('ondrop', 'dropl(event)');
				document.getElementById("collector"+(i+1)+"main").setAttribute('ondragover', 'allowDropl(event)');
				document.getElementById("collector"+(i+1)+"main").setAttribute('ondragstart', 'dragcol(event)');
				document.getElementById("collector"+(i+1)+"main").setAttribute('ondragend', 'dragendcol(event)');
			}
			if (Player.Collectors[i][0] && Player.Collectors[i][1]){
				if (Player.Collectors[i][2] == Player.Collectors[i][2].toLowerCase()){
					document.getElementById("collector"+(i+1)+"letter").innerHTML = Player.Collectors[i][2];
					document.getElementById("collector"+(i+1)+"letter").style.opacity = 1;
					document.getElementById("collector"+(i+1)+"strg").innerHTML = Player.Letters[Player.Collectors[i][2]][2] + "/" + Player.Letters[Player.Collectors[i][2]][4];
					document.getElementById("collector"+(i+1)+"main").style.cursor = "move";
					document.getElementById("collector"+(i+1)+"main").setAttribute("draggable", true);
					document.getElementById("collector"+(i+1)).style.transform = "scale(1,1)";
					document.getElementById("collector"+(i+1)).style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[Player.Collectors[i][2]][2]/Player.Letters[Player.Collectors[i][2]][4]*100)+"%, white "+(Player.Letters[Player.Collectors[i][2]][2]/Player.Letters[Player.Collectors[i][2]][4]*100)+"%)";
				}
				else{
					document.getElementById("collector"+(i+1)+"letter").innerHTML = Player.Collectors[i][2];
					document.getElementById("collector"+(i+1)+"letter").style.opacity = 1;
					document.getElementById("collector"+(i+1)+"strg").innerHTML = Player.Letters[Player.Collectors[i][2].toLowerCase()][3] + "/" + Player.Letters[Player.Collectors[i][2].toLowerCase()][5];
					document.getElementById("collector"+(i+1)+"main").style.cursor = "move";
					document.getElementById("collector"+(i+1)+"main").setAttribute("draggable", true);
					document.getElementById("collector"+(i+1)).style.transform = "scale(1,1)";
					document.getElementById("collector"+(i+1)).style.background = "linear-gradient(to top, #9eff96 "+(Player.Letters[Player.Collectors[i][2].toLowerCase()][3]/Player.Letters[Player.Collectors[i][2].toLowerCase()][5]*100)+"%, white "+(Player.Letters[Player.Collectors[i][2].toLowerCase()][3]/Player.Letters[Player.Collectors[i][2].toLowerCase()][5]*100)+"%)";
				}
			}
		}
		document.getElementById("masteryaehinorst").style.display = "block";
		if (Player.Letters["e"][14] >= 2 || Player.Letters["d"][0] || Player.Letters["l"][0]){
			ifdl = true;
			document.getElementById("masterychoice2").style.background = "linear-gradient(90deg, rgba(185,255,78,0.88) 0%, rgba(35,255,61,0.88) 100%), linear-gradient(to top, #282828 20%, white 80%)";
			document.getElementById("masterychoice2").style.cursor = "pointer";
			document.getElementById("masterychoice2").innerHTML = "dl";
			document.getElementById("lettersnormaldl").innerHTML = "dl";
			document.getElementById("lettersnormaldl").style.fontSize = "2vh";
			document.getElementById("lettersnormaldl").style.cursor = "pointer";
			document.getElementById("lettersnormaldl").style.background = "white";
			document.getElementById("lettersnormaldl").style.backgroundColor = "white";
			document.getElementById("lettersnormaldl").style.color = "#34ff1b";
			document.getElementById("lettersnormaldl").style.borderColor = "#34ff1b";
		}
		if (Player.Letters["d"][14] >= 3 || Player.Letters["b"][0] || Player.Letters["c"][0] || Player.Letters["f"][0] || Player.Letters["g"][0] || Player.Letters["m"][0] || Player.Letters["p"][0] || Player.Letters["u"][0] || Player.Letters["w"][0] || Player.Letters["y"][0]){
			ifbc = true;
			document.getElementById("masterychoice3").style.background = "linear-gradient(90deg, rgba(63,251,221,0.88) 0%, rgba(63,242,244,0.88) 24%, rgba(63,170,251,0.88) 100%), linear-gradient(to top, #282828 20%, white 80%)";
			document.getElementById("masterychoice3").style.cursor = "pointer";
			document.getElementById("masterychoice3").innerHTML = "bcfgmpuwy";
			document.getElementById("lettersnormalbcfgmpuwy").innerHTML = "bcfgmpuwy";
			document.getElementById("lettersnormalbcfgmpuwy").style.fontSize = "2vh";
			document.getElementById("lettersnormalbcfgmpuwy").style.cursor = "pointer";
			document.getElementById("lettersnormalbcfgmpuwy").style.background = "white";
			document.getElementById("lettersnormalbcfgmpuwy").style.backgroundColor = "white";
			document.getElementById("lettersnormalbcfgmpuwy").style.color = "#1bacff";
			document.getElementById("lettersnormalbcfgmpuwy").style.borderColor = "#1bacff";
		}
		if (Player.Letters["g"][20] >= 1 || Player.Letters["j"][0] || Player.Letters["k"][0] || Player.Letters["q"][0] || Player.Letters["v"][0] || Player.Letters["x"][0] || Player.Letters["z"][0]){
			ifjk = true;
			document.getElementById("masterychoice4").style.background = "linear-gradient(90deg, rgba(197,63,251,0.88) 0%, rgba(223,63,244,0.88) 24%, rgba(251,63,235,0.88) 100%), linear-gradient(to top, #282828 20%, white 80%)";
			document.getElementById("masterychoice4").style.cursor = "pointer";
			document.getElementById("masterychoice4").innerHTML = "jkqvxz";
			document.getElementById("lettersnormaljkqvxz").innerHTML = "jkqvxz";
			document.getElementById("lettersnormaljkqvxz").style.fontSize = "2vh";
			document.getElementById("lettersnormaljkqvxz").style.cursor = "pointer";
			document.getElementById("lettersnormaljkqvxz").style.background = "white";
			document.getElementById("lettersnormaljkqvxz").style.backgroundColor = "white";
			document.getElementById("lettersnormaljkqvxz").style.color = "#e21bff";
			document.getElementById("lettersnormaljkqvxz").style.borderColor = "#e21bff";
		}
		if (Player.Letters["s"][20] >= 1 || Player.Letters["e"][1] || Player.Letters["a"][1] || Player.Letters["h"][1] || Player.Letters["i"][1] || Player.Letters["n"][1] || Player.Letters["o"][1] || Player.Letters["r"][1] || Player.Letters["s"][1] || Player.Letters["t"][1]){
			ifAH = true;
			document.getElementById("masterychoice5").style.background = "linear-gradient(90deg, rgba(251,192,63,0.88) 29%, rgba(252,241,70,0.88) 100%), linear-gradient(to top, #282828 20%, white 80%)";
			document.getElementById("masterychoice5").style.cursor = "pointer";
			document.getElementById("masterychoice5").innerHTML = "E AHINORST";
			document.getElementById("lettersuppercaseaehinorst").innerHTML = "E AHINORST";
			document.getElementById("lettersuppercaseaehinorst").style.fontSize = "2vh";
			document.getElementById("lettersuppercaseaehinorst").style.cursor = "pointer";
			document.getElementById("lettersuppercaseaehinorst").style.background = "white";
			document.getElementById("lettersuppercaseaehinorst").style.backgroundColor = "white";
			document.getElementById("lettersuppercaseaehinorst").style.color = "#ffa31b";
			document.getElementById("lettersuppercaseaehinorst").style.borderColor = "#ffa31b";
		}
		if (Player.Letters["a"][20] >= 2 || Player.Letters["d"][1] || Player.Letters["l"][1]){
			ifDL = true;
			document.getElementById("masterychoice6").style.background = "linear-gradient(90deg, rgba(185,255,78,0.88) 0%, rgba(35,255,61,0.88) 100%), linear-gradient(to top, #282828 20%, white 80%)";
			document.getElementById("masterychoice6").style.cursor = "pointer";
			document.getElementById("masterychoice6").innerHTML = "DL";
			document.getElementById("lettersuppercasedl").innerHTML = "DL";
			document.getElementById("lettersuppercasedl").style.fontSize = "2vh";
			document.getElementById("lettersuppercasedl").style.cursor = "pointer";
			document.getElementById("lettersuppercasedl").style.background = "white";
			document.getElementById("lettersuppercasedl").style.backgroundColor = "white";
			document.getElementById("lettersuppercasedl").style.color = "#34ff1b";
			document.getElementById("lettersuppercasedl").style.borderColor = "#34ff1b";
		}
		if (Player.Letters["p"][20] >= 1 || Player.Letters["b"][1] || Player.Letters["c"][1] || Player.Letters["f"][1] || Player.Letters["g"][1] || Player.Letters["m"][1] || Player.Letters["p"][1] || Player.Letters["u"][1] || Player.Letters["w"][1] || Player.Letters["y"][1]){
			ifBC = true;
			document.getElementById("masterychoice7").style.background = "linear-gradient(90deg, rgba(63,251,221,0.88) 0%, rgba(63,242,244,0.88) 24%, rgba(63,170,251,0.88) 100%), linear-gradient(to top, #282828 20%, white 80%)";
			document.getElementById("masterychoice7").style.cursor = "pointer";
			document.getElementById("masterychoice7").innerHTML = "BCFGMPUWY";
			document.getElementById("lettersuppercasebcfgmpuwy").innerHTML = "BCFGMPUWY";
			document.getElementById("lettersuppercasebcfgmpuwy").style.fontSize = "2vh";
			document.getElementById("lettersuppercasebcfgmpuwy").style.cursor = "pointer";
			document.getElementById("lettersuppercasebcfgmpuwy").style.background = "white";
			document.getElementById("lettersuppercasebcfgmpuwy").style.backgroundColor = "white";
			document.getElementById("lettersuppercasebcfgmpuwy").style.color = "#1bacff";
			document.getElementById("lettersuppercasebcfgmpuwy").style.borderColor = "#1bacff";
		}
		if (Player.Letters["k"][20] >= 2 || Player.Letters["j"][1] || Player.Letters["k"][1] || Player.Letters["q"][1] || Player.Letters["v"][1] || Player.Letters["x"][1] || Player.Letters["z"][1]){
			ifJK = true;
			document.getElementById("masterychoice8").style.background = "linear-gradient(90deg, rgba(197,63,251,0.88) 0%, rgba(223,63,244,0.88) 24%, rgba(251,63,235,0.88) 100%), linear-gradient(to top, #282828 20%, white 80%)";
			document.getElementById("masterychoice8").style.cursor = "pointer";
			document.getElementById("masterychoice8").innerHTML = "JKQVXZ";
			document.getElementById("lettersuppercasejkqvxz").innerHTML = "JKQVXZ";
			document.getElementById("lettersuppercasejkqvxz").style.fontSize = "2vh";
			document.getElementById("lettersuppercasejkqvxz").style.cursor = "pointer";
			document.getElementById("lettersuppercasejkqvxz").style.background = "white";
			document.getElementById("lettersuppercasejkqvxz").style.backgroundColor = "white";
			document.getElementById("lettersuppercasejkqvxz").style.color = "#e21bff";
			document.getElementById("lettersuppercasejkqvxz").style.borderColor = "#e21bff";
		}
		logged = 2;
	}
	else if (value == 0 && logged == 1){
		logged = 0;
		document.getElementById("nameerror").innerHTML = "this player is currently in the game!"
		document.getElementById("logbutton").style = "margin-top: -29px; line-height: 20px;";
		document.getElementById("nameerror").style.display = "block";
		document.getElementById("nick").value = "";
	}
});
