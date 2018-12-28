var number = null;
var C1 = null;
var C2 = null;
var C3 = null;
var C4 = null;
var C5 = null;
var G1 = null;
var G2 = null;
var G3 = null;
var G4 = null;
var G5 = null;
var F1 = null;
var F2 = null;
var F3 = null;
var F4 = null;
var F5 = null;
var D1 = null;
var D2 = null;
var D3 = null;
var D4 = null;
var D5 = null;
var B1 = null;
var B2 = null;
var B3 = null;
var B4 = null;
var B5 = null;
var A1 = null;
var A2 = null;
var A3 = null;
var A4 = null;
var A5 = null;
var Es1 = null;
var Es2 = null;
var Es3 = null;
var Es4 = null;
var Es5 = null;
var E1 = null;
var E2 = null;
var E3 = null;
var E4 = null;
var E5 = null;
var As1 = null;
var As2 = null;
var As3 = null;
var As4 = null;
var As5 = null;
var H1 = null;
var H2 = null;
var H3 = null;
var H4 = null;
var H5 = null;
var Fis1 = null;
var Fis2 = null;
var Fis3 = null;
var Fis4 = null;
var Fis5 = null;
var Cis1 = null;
var Cis2 = null;
var Cis3 = null;
var Cis4 = null;
var Cis5 = null;
var a1 = null;
var a2 = null;
var a3 = null;
var a4 = null;
var a5 = null;
var a6 = null;
var e1 = null;
var e2 = null;
var e3 = null;
var e4 = null;
var e5 = null;
var e6 = null;
var d1 = null;
var d2 = null;
var d3 = null;
var d4 = null;
var d5 = null;
var d6 = null;
var h1 = null;
var h2 = null;
var h3 = null;
var h4 = null;
var h5 = null;
var h6 = null;
var g1 = null;
var g2 = null;
var g3 = null;
var g4 = null;
var g5 = null;
var g6 = null;
var fis1 = null;
var fis2 = null;
var fis3 = null;
var fis4 = null;
var fis5 = null;
var fis6 = null;
var c1 = null;
var c2 = null;
var c3 = null;
var c4 = null;
var c5 = null;
var c6 = null;
var cis1 = null;
var cis2 = null;
var cis3 = null;
var cis4 = null;
var cis5 = null;
var cis6 = null;
var f1 = null;
var f2 = null;
var f3 = null;
var f4 = null;
var f5 = null;
var f6 = null;
var gis1 = null;
var gis2 = null;
var gis3 = null;
var gis4 = null;
var gis5 = null;
var gis6 = null;
var b1 = null;
var b2 = null;
var b3 = null;
var b4 = null;
var b5 = null;
var b6 = null;
var dis1 = null;
var dis2 = null;
var dis3 = null;
var dis4 = null;
var dis5 = null;
var dis6 = null;
function Press(event)
{
	var x = event.key;
	if (x == 0)
	{
		number = 0;
	}
	else if (x == 1)
	{
		number = 1;
	}
	else if (x == 2)
	{
		number = 2;
	}
	else if (x == 3)
	{
		number = 3;
	}
	else if (x == 4)
	{
		number = 4;
	}
	else if (x == 5)
	{
		number = 5;
	}
	else if (x == 6)
	{
		number = 6;
	}
	else if (x == 7)
	{
		number = 7;
	}
	else if (x == 8)
	{
		number = 8;
	}
	else if (x == 9)
	{
		number = 9;
	}
	else if (x == "-")
	{
		number = 10;
	}
	else {}
}
function Mark(plus)
{
	document.getElementById(plus).innerHTML = number;
	if (number == 0)
	{
		document.getElementById(plus).style = "background-color: #ff4545;";
	}
	else if (number == 1)
	{
		document.getElementById(plus).style = "background-color: #ff4545;";
	}
	else if (number == 2)
	{
		document.getElementById(plus).style = "background-color: #ff4545;";
	}
	else if (number == 3)
	{
		document.getElementById(plus).style = "background-color: #ff4545;";
	}
	else if (number == 4)
	{
		document.getElementById(plus).style = "background-color: #ff4545;";
	}
	else if (number == 5)
	{
		document.getElementById(plus).style = "background-color: yellow;";
	}
	else if (number == 6)
	{
		document.getElementById(plus).style = "background-color: yellow;";
	}
	else if (number == 7)
	{
		document.getElementById(plus).style = "background-color: yellow;";
	}
	else if (number == 8)
	{
		document.getElementById(plus).style = "background-color: #05ec05;";
	}
	else if (number == 9)
	{
		document.getElementById(plus).style = "background-color: #05ec05;";
	}
	else if (number == 10)
	{
		document.getElementById(plus).style = "background-color: #05ec05;";
	}
	else 
	{
		document.getElementById(plus).style = "background-color: white;";
		document.getElementById(plus).innerHTML = "+";
	}
	if (plus == "C1")
	{
		C1 = number;
	}
	else if (plus == "C2")
	{
		C2 = number;
	}
	else if (plus == "C3")
	{
		C3 = number;
	}
	else if (plus == "C4")
	{
		C4 = number;
	}
	else if (plus == "C5")
	{
		C5 = number;
	}
	else if (plus == "G1")
	{
		G1 = number;
	}
	else if (plus == "G2")
	{
		G2 = number;
	}
	else if (plus == "G3")
	{
		G3 = number;
	}
	else if (plus == "G4")
	{
		G4 = number;
	}
	else if (plus == "G5")
	{
		G5 = number;
	}
	else if (plus == "F1")
	{
		F1 = number;
	}
	else if (plus == "F2")
	{
		F2 = number;
	}
	else if (plus == "F3")
	{
		F3 = number;
	}
	else if (plus == "F4")
	{
		F4 = number;
	}
	else if (plus == "F5")
	{
		F5 = number;
	}
	else if (plus == "D1")
	{
		D1 = number;
	}
	else if (plus == "D2")
	{
		D2 = number;
	}
	else if (plus == "D3")
	{
		D3 = number;
	}
	else if (plus == "D4")
	{
		D4 = number;
	}
	else if (plus == "D5")
	{
		D5 = number;
	}
	else if (plus == "B1")
	{
		B1 = number;
	}
	else if (plus == "B2")
	{
		B2 = number;
	}
	else if (plus == "B3")
	{
		B3 = number;
	}
	else if (plus == "B4")
	{
		B4 = number;
	}
	else if (plus == "B5")
	{
		B5 = number;
	}
	else if (plus == "A1")
	{
		A1 = number;
	}
	else if (plus == "A2")
	{
		A2 = number;
	}
	else if (plus == "A3")
	{
		A3 = number;
	}
	else if (plus == "A4")
	{
		A4 = number;
	}
	else if (plus == "A5")
	{
		A5 = number;
	}
	else if (plus == "Es1")
	{
		Es1 = number;
	}
	else if (plus == "Es2")
	{
		Es2 = number;
	}
	else if (plus == "Es3")
	{
		Es3 = number;
	}
	else if (plus == "Es4")
	{
		Es4 = number;
	}
	else if (plus == "Es5")
	{
		Es5 = number;
	}
	else if (plus == "E1")
	{
		E1 = number;
	}
	else if (plus == "E2")
	{
		E2 = number;
	}
	else if (plus == "E3")
	{
		E3 = number;
	}
	else if (plus == "E4")
	{
		E4 = number;
	}
	else if (plus == "E5")
	{
		E5 = number;
	}
	else if (plus == "As1")
	{
		As1 = number;
	}
	else if (plus == "As2")
	{
		As2 = number;
	}
	else if (plus == "As3")
	{
		As3 = number;
	}
	else if (plus == "As4")
	{
		As4 = number;
	}
	else if (plus == "As5")
	{
		As5 = number;
	}
	else if (plus == "H1")
	{
		H1 = number;
	}
	else if (plus == "H2")
	{
		H2 = number;
	}
	else if (plus == "H3")
	{
		H3 = number;
	}
	else if (plus == "H4")
	{
		H4 = number;
	}
	else if (plus == "H5")
	{
		H5 = number;
	}
	else if (plus == "Fis1")
	{
		Fis1 = number;
	}
	else if (plus == "Fis2")
	{
		Fis2 = number;
	}
	else if (plus == "Fis3")
	{
		Fis3 = number;
	}
	else if (plus == "Fis4")
	{
		Fis4 = number;
	}
	else if (plus == "Fis5")
	{
		Fis5 = number;
	}
	else if (plus == "Cis1")
	{
		Cis1 = number;
	}
	else if (plus == "Cis2")
	{
		Cis2 = number;
	}
	else if (plus == "Cis3")
	{
		Cis3 = number;
	}
	else if (plus == "Cis4")
	{
		Cis4 = number;
	}
	else if (plus == "Cis5")
	{
		Cis5 = number;
	}
	else if (plus == "a1")
	{
		a1 = number;
	}
	else if (plus == "a2")
	{
		a2 = number;
	}
	else if (plus == "a3")
	{
		a3 = number;
	}
	else if (plus == "a4")
	{
		a4 = number;
	}
	else if (plus == "a5")
	{
		a5 = number;
	}
	else if (plus == "a6")
	{
		a6 = number;
	}
	else if (plus == "e1")
	{
		e1 = number;
	}
	else if (plus == "e2")
	{
		e2 = number;
	}
	else if (plus == "e3")
	{
		e3 = number;
	}
	else if (plus == "e4")
	{
		e4 = number;
	}
	else if (plus == "e5")
	{
		e5 = number;
	}
	else if (plus == "e6")
	{
		e6 = number;
	}
	else if (plus == "d1")
	{
		d1 = number;
	}
	else if (plus == "d2")
	{
		d2 = number;
	}
	else if (plus == "d3")
	{
		d3 = number;
	}
	else if (plus == "d4")
	{
		d4 = number;
	}
	else if (plus == "d5")
	{
		d5 = number;
	}
	else if (plus == "d6")
	{
		d6 = number;
	}
	else if (plus == "h1")
	{
		h1 = number;
	}
	else if (plus == "h2")
	{
		h2 = number;
	}
	else if (plus == "h3")
	{
		h3 = number;
	}
	else if (plus == "h4")
	{
		h4 = number;
	}
	else if (plus == "h5")
	{
		h5 = number;
	}
	else if (plus == "h6")
	{
		h6 = number;
	}
	else if (plus == "g1")
	{
		g1 = number;
	}
	else if (plus == "g2")
	{
		g2 = number;
	}
	else if (plus == "g3")
	{
		g3 = number;
	}
	else if (plus == "g4")
	{
		g4 = number;
	}
	else if (plus == "g5")
	{
		g5 = number;
	}
	else if (plus == "g6")
	{
		g6 = number;
	}
	else if (plus == "fis1")
	{
		fis1 = number;
	}
	else if (plus == "fis2")
	{
		fis2 = number;
	}
	else if (plus == "fis3")
	{
		fis3 = number;
	}
	else if (plus == "fis4")
	{
		fis4 = number;
	}
	else if (plus == "fis5")
	{
		fis5 = number;
	}
	else if (plus == "fis6")
	{
		fis6 = number;
	}
	else if (plus == "c1")
	{
		c1 = number;
	}
	else if (plus == "c2")
	{
		c2 = number;
	}
	else if (plus == "c3")
	{
		c3 = number;
	}
	else if (plus == "c4")
	{
		c4 = number;
	}
	else if (plus == "c5")
	{
		c5 = number;
	}
	else if (plus == "c6")
	{
		c6 = number;
	}
	else if (plus == "cis1")
	{
		cis1 = number;
	}
	else if (plus == "cis2")
	{
		cis2 = number;
	}
	else if (plus == "cis3")
	{
		cis3 = number;
	}
	else if (plus == "cis4")
	{
		cis4 = number;
	}
	else if (plus == "cis5")
	{
		cis5 = number;
	}
	else if (plus == "cis6")
	{
		cis6 = number;
	}
	else if (plus == "f1")
	{
		f1 = number;
	}
	else if (plus == "f2")
	{
		f2 = number;
	}
	else if (plus == "f3")
	{
		f3 = number;
	}
	else if (plus == "f4")
	{
		f4 = number;
	}
	else if (plus == "f5")
	{
		f5 = number;
	}
	else if (plus == "f6")
	{
		f6 = number;
	}
	else if (plus == "gis1")
	{
		gis1 = number;
	}
	else if (plus == "gis2")
	{
		gis2 = number;
	}
	else if (plus == "gis3")
	{
		gis3 = number;
	}
	else if (plus == "gis4")
	{
		gis4 = number;
	}
	else if (plus == "gis5")
	{
		gis5 = number;
	}
	else if (plus == "gis6")
	{
		gis6 = number;
	}
	else if (plus == "b1")
	{
		b1 = number;
	}
	else if (plus == "b2")
	{
		b2 = number;
	}
	else if (plus == "b3")
	{
		b3 = number;
	}
	else if (plus == "b4")
	{
		b4 = number;
	}
	else if (plus == "b5")
	{
		b5 = number;
	}
	else if (plus == "b6")
	{
		b6 = number;
	}
	else if (plus == "dis1")
	{
		dis1 = number;
	}
	else if (plus == "dis2")
	{
		dis2 = number;
	}
	else if (plus == "dis3")
	{
		dis3 = number;
	}
	else if (plus == "dis4")
	{
		dis4 = number;
	}
	else if (plus == "dis5")
	{
		dis5 = number;
	}
	else if (plus == "dis6")
	{
		dis6 = number;
	}
	else {}
	number = null;
	save();
}



//SAVE LOAD RESET --------------------------------------------------------------



function save()
{
	var Save =
	{
		C1: C1, C2: C2, C3: C3, C4: C4, C5: C5, G1: G1, G2: G2, G3: G3, G4: G4, G5: G5, F1: F1, F2: F2, F3: F3, F4: F4, F5: F5, D1: D1, D2: D2, D3: D3, D4: D4, D5: D5, B1: B1, B2: B2, B3: B3, B4: B4, B5: B5, A1: A1, A2: A2, A3: A3, A4: A4, A5: A5, Es1: Es1, Es2: Es2, Es3: Es3, Es4: Es4, Es5: Es5, E1: E1, E2: E2, E3: E3, E4: E4, E5: E5, As1: As1, As2: As2, As3: As3, As4: As4, As5: As5,	H1: H1, H2: H2, H3: H3, H4: H4, H5: H5, Fis1: Fis1, Fis2: Fis2, Fis3: Fis3, Fis4: Fis4, Fis5: Fis5, Cis1: Cis1, Cis2: Cis2, Cis3: Cis3, Cis4: Cis4, Cis5: Cis5, a1: a1, a2: a2, a3: a3, a4: a4, a5: a5, a6: a6, e1: e1, e2: e2, e3: e3, e4: e4, e5: e5, e6: e6, d1: d1, d2: d2, d3: d3, d4: d4, d5: d5, d6: d6, h1: h1, h2: h2, h3: h3, h4: h4, h5: h5, h6: h6, g1: g1, g2: g2, g3: g3, g4: g4, g5: g5, g6: g6, fis1: fis1, fis2: fis2, fis3: fis3, fis4: fis4, fis5: fis5, fis6: fis6, c1: c1, c2: c2, c3: c3, c4: c4, c5: c5, c6: c6, cis1: cis1, cis2: cis2, cis3: cis3, cis4: cis4, cis5: cis5, cis6: cis6, f1: f1, f2: f2, f3: f3, f4: f4, f5: f5, f6: f6, gis1: gis1, gis2: gis2, gis3: gis3, gis4: gis4, gis5: gis5, gis6: gis6, b1: b1, b2: b2, b3: b3, b4: b4, b5: b5, b6: b6, dis1: dis1, dis2: dis2, dis3: dis3, dis4: dis4, dis5: dis5, dis6: dis6
	}
	localStorage.setItem("Saved", JSON.stringify(Save));
}
function load()
{
	var SavedGame = JSON.parse(localStorage.getItem("Saved"));
	if (typeof SavedGame.C1 !== "undefined") C1 = SavedGame.C1;
	if (typeof SavedGame.C2 !== "undefined") C2 = SavedGame.C2;
	if (typeof SavedGame.C3 !== "undefined") C3 = SavedGame.C3;
	if (typeof SavedGame.C4 !== "undefined") C4 = SavedGame.C4;
	if (typeof SavedGame.C5 !== "undefined") C5 = SavedGame.C5;
	if (typeof SavedGame.G1 !== "undefined") G1 = SavedGame.G1;
	if (typeof SavedGame.G2 !== "undefined") G2 = SavedGame.G2;
	if (typeof SavedGame.G3 !== "undefined") G3 = SavedGame.G3;
	if (typeof SavedGame.G4 !== "undefined") G4 = SavedGame.G4;
	if (typeof SavedGame.G5 !== "undefined") G5 = SavedGame.G5;
	if (typeof SavedGame.F1 !== "undefined") F1 = SavedGame.F1;
	if (typeof SavedGame.F2 !== "undefined") F2 = SavedGame.F2;
	if (typeof SavedGame.F3 !== "undefined") F3 = SavedGame.F3;
	if (typeof SavedGame.F4 !== "undefined") F4 = SavedGame.F4;
	if (typeof SavedGame.F5 !== "undefined") F5 = SavedGame.F5;
	if (typeof SavedGame.D1 !== "undefined") D1 = SavedGame.D1;
	if (typeof SavedGame.D2 !== "undefined") D2 = SavedGame.D2;
	if (typeof SavedGame.D3 !== "undefined") D3 = SavedGame.D3;
	if (typeof SavedGame.D4 !== "undefined") D4 = SavedGame.D4;
	if (typeof SavedGame.D5 !== "undefined") D5 = SavedGame.D5;
	if (typeof SavedGame.B1 !== "undefined") B1 = SavedGame.B1;
	if (typeof SavedGame.B2 !== "undefined") B2 = SavedGame.B2;
	if (typeof SavedGame.B3 !== "undefined") B3 = SavedGame.B3;
	if (typeof SavedGame.B4 !== "undefined") B4 = SavedGame.B4;
	if (typeof SavedGame.B5 !== "undefined") B5 = SavedGame.B5;
	if (typeof SavedGame.A1 !== "undefined") A1 = SavedGame.A1;
	if (typeof SavedGame.A2 !== "undefined") A2 = SavedGame.A2;
	if (typeof SavedGame.A3 !== "undefined") A3 = SavedGame.A3;
	if (typeof SavedGame.A4 !== "undefined") A4 = SavedGame.A4;
	if (typeof SavedGame.A5 !== "undefined") A5 = SavedGame.A5;
	if (typeof SavedGame.Es1 !== "undefined") Es1 = SavedGame.Es1;
	if (typeof SavedGame.Es2 !== "undefined") Es2 = SavedGame.Es2;
	if (typeof SavedGame.Es3 !== "undefined") Es3 = SavedGame.Es3;
	if (typeof SavedGame.Es4 !== "undefined") Es4 = SavedGame.Es4;
	if (typeof SavedGame.Es5 !== "undefined") Es5 = SavedGame.Es5;
	if (typeof SavedGame.E1 !== "undefined") E1 = SavedGame.E1;
	if (typeof SavedGame.E2 !== "undefined") E2 = SavedGame.E2;
	if (typeof SavedGame.E3 !== "undefined") E3 = SavedGame.E3;
	if (typeof SavedGame.E4 !== "undefined") E4 = SavedGame.E4;
	if (typeof SavedGame.E5 !== "undefined") E5 = SavedGame.E5;
	if (typeof SavedGame.As1 !== "undefined") As1 = SavedGame.As1;
	if (typeof SavedGame.As2 !== "undefined") As2 = SavedGame.As2;
	if (typeof SavedGame.As3 !== "undefined") As3 = SavedGame.As3;
	if (typeof SavedGame.As4 !== "undefined") As4 = SavedGame.As4;
	if (typeof SavedGame.As5 !== "undefined") As5 = SavedGame.As5;
	if (typeof SavedGame.H1 !== "undefined") H1 = SavedGame.H1;
	if (typeof SavedGame.H2 !== "undefined") H2 = SavedGame.H2;
	if (typeof SavedGame.H3 !== "undefined") H3 = SavedGame.H3;
	if (typeof SavedGame.H4 !== "undefined") H4 = SavedGame.H4;
	if (typeof SavedGame.H5 !== "undefined") H5 = SavedGame.H5;
	if (typeof SavedGame.Fis1 !== "undefined") Fis1 = SavedGame.Fis1;
	if (typeof SavedGame.Fis2 !== "undefined") Fis2 = SavedGame.Fis2;
	if (typeof SavedGame.Fis3 !== "undefined") Fis3 = SavedGame.Fis3;
	if (typeof SavedGame.Fis4 !== "undefined") Fis4 = SavedGame.Fis4;
	if (typeof SavedGame.Fis5 !== "undefined") Fis5 = SavedGame.Fis5;
	if (typeof SavedGame.Cis1 !== "undefined") Cis1 = SavedGame.Cis1;
	if (typeof SavedGame.Cis2 !== "undefined") Cis2 = SavedGame.Cis2;
	if (typeof SavedGame.Cis3 !== "undefined") Cis3 = SavedGame.Cis3;
	if (typeof SavedGame.Cis4 !== "undefined") Cis4 = SavedGame.Cis4;
	if (typeof SavedGame.Cis5 !== "undefined") Cis5 = SavedGame.Cis5;
	if (typeof SavedGame.a1 !== "undefined") a1 = SavedGame.a1;
	if (typeof SavedGame.a2 !== "undefined") a2 = SavedGame.a2;
	if (typeof SavedGame.a3 !== "undefined") a3 = SavedGame.a3;
	if (typeof SavedGame.a4 !== "undefined") a4 = SavedGame.a4;
	if (typeof SavedGame.a5 !== "undefined") a5 = SavedGame.a5;
	if (typeof SavedGame.a6 !== "undefined") a6 = SavedGame.a6;
	if (typeof SavedGame.e1 !== "undefined") e1 = SavedGame.e1;
	if (typeof SavedGame.e2 !== "undefined") e2 = SavedGame.e2;
	if (typeof SavedGame.e3 !== "undefined") e3 = SavedGame.e3;
	if (typeof SavedGame.e4 !== "undefined") e4 = SavedGame.e4;
	if (typeof SavedGame.e5 !== "undefined") e5 = SavedGame.e5;
	if (typeof SavedGame.e6 !== "undefined") e6 = SavedGame.e6;
	if (typeof SavedGame.d1 !== "undefined") d1 = SavedGame.d1;
	if (typeof SavedGame.d2 !== "undefined") d2 = SavedGame.d2;
	if (typeof SavedGame.d3 !== "undefined") d3 = SavedGame.d3;
	if (typeof SavedGame.d4 !== "undefined") d4 = SavedGame.d4;
	if (typeof SavedGame.d5 !== "undefined") d5 = SavedGame.d5;
	if (typeof SavedGame.d6 !== "undefined") d6 = SavedGame.d6;
	if (typeof SavedGame.h1 !== "undefined") h1 = SavedGame.h1;
	if (typeof SavedGame.h2 !== "undefined") h2 = SavedGame.h2;
	if (typeof SavedGame.h3 !== "undefined") h3 = SavedGame.h3;
	if (typeof SavedGame.h4 !== "undefined") h4 = SavedGame.h4;
	if (typeof SavedGame.h5 !== "undefined") h5 = SavedGame.h5;
	if (typeof SavedGame.h6 !== "undefined") h6 = SavedGame.h6;
	if (typeof SavedGame.g1 !== "undefined") g1 = SavedGame.g1;
	if (typeof SavedGame.g2 !== "undefined") g2 = SavedGame.g2;
	if (typeof SavedGame.g3 !== "undefined") g3 = SavedGame.g3;
	if (typeof SavedGame.g4 !== "undefined") g4 = SavedGame.g4;
	if (typeof SavedGame.g5 !== "undefined") g5 = SavedGame.g5;
	if (typeof SavedGame.g6 !== "undefined") g6 = SavedGame.g6;
	if (typeof SavedGame.fis1 !== "undefined") fis1 = SavedGame.fis1;
	if (typeof SavedGame.fis2 !== "undefined") fis2 = SavedGame.fis2;
	if (typeof SavedGame.fis3 !== "undefined") fis3 = SavedGame.fis3;
	if (typeof SavedGame.fis4 !== "undefined") fis4 = SavedGame.fis4;
	if (typeof SavedGame.fis5 !== "undefined") fis5 = SavedGame.fis5;
	if (typeof SavedGame.fis6 !== "undefined") fis6 = SavedGame.fis6;
	if (typeof SavedGame.c1 !== "undefined") c1 = SavedGame.c1;
	if (typeof SavedGame.c2 !== "undefined") c2 = SavedGame.c2;
	if (typeof SavedGame.c3 !== "undefined") c3 = SavedGame.c3;
	if (typeof SavedGame.c4 !== "undefined") c4 = SavedGame.c4;
	if (typeof SavedGame.c5 !== "undefined") c5 = SavedGame.c5;
	if (typeof SavedGame.c6 !== "undefined") c6 = SavedGame.c6;
	if (typeof SavedGame.cis1 !== "undefined") cis1 = SavedGame.cis1;
	if (typeof SavedGame.cis2 !== "undefined") cis2 = SavedGame.cis2;
	if (typeof SavedGame.cis3 !== "undefined") cis3 = SavedGame.cis3;
	if (typeof SavedGame.cis4 !== "undefined") cis4 = SavedGame.cis4;
	if (typeof SavedGame.cis5 !== "undefined") cis5 = SavedGame.cis5;
	if (typeof SavedGame.cis6 !== "undefined") cis6 = SavedGame.cis6;
	if (typeof SavedGame.f1 !== "undefined") f1 = SavedGame.f1;
	if (typeof SavedGame.f2 !== "undefined") f2 = SavedGame.f2;
	if (typeof SavedGame.f3 !== "undefined") f3 = SavedGame.f3;
	if (typeof SavedGame.f4 !== "undefined") f4 = SavedGame.f4;
	if (typeof SavedGame.f5 !== "undefined") f5 = SavedGame.f5;
	if (typeof SavedGame.f6 !== "undefined") f6 = SavedGame.f6;
	if (typeof SavedGame.gis1 !== "undefined") gis1 = SavedGame.gis1;
	if (typeof SavedGame.gis2 !== "undefined") gis2 = SavedGame.gis2;
	if (typeof SavedGame.gis3 !== "undefined") gis3 = SavedGame.gis3;
	if (typeof SavedGame.gis4 !== "undefined") gis4 = SavedGame.gis4;
	if (typeof SavedGame.gis5 !== "undefined") gis5 = SavedGame.gis5;
	if (typeof SavedGame.gis6 !== "undefined") gis6 = SavedGame.gis6;
	if (typeof SavedGame.b1 !== "undefined") b1 = SavedGame.b1;
	if (typeof SavedGame.b2 !== "undefined") b2 = SavedGame.b2;
	if (typeof SavedGame.b3 !== "undefined") b3 = SavedGame.b3;
	if (typeof SavedGame.b4 !== "undefined") b4 = SavedGame.b4;
	if (typeof SavedGame.b5 !== "undefined") b5 = SavedGame.b5;
	if (typeof SavedGame.b6 !== "undefined") b6 = SavedGame.b6;
	if (typeof SavedGame.dis1 !== "undefined") dis1 = SavedGame.dis1;
	if (typeof SavedGame.dis2 !== "undefined") dis2 = SavedGame.dis2;
	if (typeof SavedGame.dis3 !== "undefined") dis3 = SavedGame.dis3;
	if (typeof SavedGame.dis4 !== "undefined") dis4 = SavedGame.dis4;
	if (typeof SavedGame.dis5 !== "undefined") dis5 = SavedGame.dis5;
	if (typeof SavedGame.dis6 !== "undefined") dis6 = SavedGame.dis6;
	if (C1 !== null)
	{
		document.getElementById("C1").innerHTML = C1;
	}
	if (C2 !== null)
	{
		document.getElementById("C2").innerHTML = C2;
	}
	if (C3 !== null)
	{
		document.getElementById("C3").innerHTML = C3;
	}
	if (C4 !== null)
	{
		document.getElementById("C4").innerHTML = C4;
	}
	if (C5 !== null)
	{
		document.getElementById("C5").innerHTML = C5;
	}
	if (G1 !== null)
	{
		document.getElementById("G1").innerHTML = G1;
	}
	if (G2 !== null)
	{
		document.getElementById("G2").innerHTML = G2;
	}
	if (G3 !== null)
	{
		document.getElementById("G3").innerHTML = G3;
	}
	if (G4 !== null)
	{
		document.getElementById("G4").innerHTML = G4;
	}
	if (G5 !== null)
	{
		document.getElementById("G5").innerHTML = G5;
	}
	if (F1 !== null)
	{
		document.getElementById("F1").innerHTML = F1;
	}
	if (F2 !== null)
	{
		document.getElementById("F2").innerHTML = F2;
	}
	if (F3 !== null)
	{
		document.getElementById("F3").innerHTML = F3;
	}
	if (F4 !== null)
	{
		document.getElementById("F4").innerHTML = F4;
	}
	if (F5 !== null)
	{
		document.getElementById("F5").innerHTML = F5;
	}
	if (D1 !== null)
	{
		document.getElementById("D1").innerHTML = D1;
	}
	if (D2 !== null)
	{
		document.getElementById("D2").innerHTML = D2;
	}
	if (D3 !== null)
	{
		document.getElementById("D3").innerHTML = D3;
	}
	if (D4 !== null)
	{
		document.getElementById("D4").innerHTML = D4;
	}
	if (D5 !== null)
	{
		document.getElementById("D5").innerHTML = D5;
	}
	if (B1 !== null)
	{
		document.getElementById("B1").innerHTML = B1;
	}
	if (B2 !== null)
	{
		document.getElementById("B2").innerHTML = B2;
	}
	if (B3 !== null)
	{
		document.getElementById("B3").innerHTML = B3;
	}
	if (B4 !== null)
	{
		document.getElementById("B4").innerHTML = B4;
	}
	if (B5 !== null)
	{
		document.getElementById("B5").innerHTML = B5;
	}
	if (A1 !== null)
	{
		document.getElementById("A1").innerHTML = A1;
	}
	if (A2 !== null)
	{
		document.getElementById("A2").innerHTML = A2;
	}
	if (A3 !== null)
	{
		document.getElementById("A3").innerHTML = A3;
	}
	if (A4 !== null)
	{
		document.getElementById("A4").innerHTML = A4;
	}
	if (A5 !== null)
	{
		document.getElementById("A5").innerHTML = A5;
	}
	if (Es1 !== null)
	{
		document.getElementById("Es1").innerHTML = Es1;
	}
	if (Es2 !== null)
	{
		document.getElementById("Es2").innerHTML = Es2;
	}
	if (Es3 !== null)
	{
		document.getElementById("Es3").innerHTML = Es3;
	}
	if (Es4 !== null)
	{
		document.getElementById("Es4").innerHTML = Es4;
	}
	if (Es5 !== null)
	{
		document.getElementById("Es5").innerHTML = Es5;
	}
	if (E1 !== null)
	{
		document.getElementById("E1").innerHTML = E1;
	}
	if (E2 !== null)
	{
		document.getElementById("E2").innerHTML = E2;
	}
	if (E3 !== null)
	{
		document.getElementById("E3").innerHTML = E3;
	}
	if (E4 !== null)
	{
		document.getElementById("E4").innerHTML = E4;
	}
	if (E5 !== null)
	{
		document.getElementById("E5").innerHTML = E5;
	}
	if (As1 !== null)
	{
		document.getElementById("As1").innerHTML = As1;
	}
	if (As2 !== null)
	{
		document.getElementById("As2").innerHTML = As2;
	}
	if (As3 !== null)
	{
		document.getElementById("As3").innerHTML = As3;
	}
	if (As4 !== null)
	{
		document.getElementById("As4").innerHTML = As4;
	}
	if (As5 !== null)
	{
		document.getElementById("As5").innerHTML = As5;
	}
	if (H1 !== null)
	{
		document.getElementById("H1").innerHTML = H1;
	}
	if (H2 !== null)
	{
		document.getElementById("H2").innerHTML = H2;
	}
	if (H3 !== null)
	{
		document.getElementById("H3").innerHTML = H3;
	}
	if (H4 !== null)
	{
		document.getElementById("H4").innerHTML = H4;
	}
	if (H5 !== null)
	{
		document.getElementById("H5").innerHTML = H5;
	}
	if (Fis1 !== null)
	{
		document.getElementById("Fis1").innerHTML = Fis1;
	}
	if (Fis2 !== null)
	{
		document.getElementById("Fis2").innerHTML = Fis2;
	}
	if (Fis3 !== null)
	{
		document.getElementById("Fis3").innerHTML = Fis3;
	}
	if (Fis4 !== null)
	{
		document.getElementById("Fis4").innerHTML = Fis4;
	}
	if (Fis5 !== null)
	{
		document.getElementById("Fis5").innerHTML = Fis5;
	}
	if (Cis1 !== null)
	{
		document.getElementById("Cis1").innerHTML = Cis1;
	}
	if (Cis2 !== null)
	{
		document.getElementById("Cis2").innerHTML = Cis2;
	}
	if (Cis3 !== null)
	{
		document.getElementById("Cis3").innerHTML = Cis3;
	}
	if (Cis4 !== null)
	{
		document.getElementById("Cis4").innerHTML = Cis4;
	}
	if (Cis5 !== null)
	{
		document.getElementById("Cis5").innerHTML = Cis5;
	}
	if (a1 !== null)
	{
		document.getElementById("a1").innerHTML = a1;
	}
	if (a2 !== null)
	{
		document.getElementById("a2").innerHTML = a2;
	}
	if (a3 !== null)
	{
		document.getElementById("a3").innerHTML = a3;
	}
	if (a4 !== null)
	{
		document.getElementById("a4").innerHTML = a4;
	}
	if (a5 !== null)
	{
		document.getElementById("a5").innerHTML = a5;
	}
	if (a6 !== null)
	{
		document.getElementById("a6").innerHTML = a6;
	}
	if (e1 !== null)
	{
		document.getElementById("e1").innerHTML = e1;
	}
	if (e2 !== null)
	{
		document.getElementById("e2").innerHTML = e2;
	}
	if (e3 !== null)
	{
		document.getElementById("e3").innerHTML = e3;
	}
	if (e4 !== null)
	{
		document.getElementById("e4").innerHTML = e4;
	}
	if (e5 !== null)
	{
		document.getElementById("e5").innerHTML = e5;
	}
	if (e6 !== null)
	{
		document.getElementById("e6").innerHTML = e6;
	}
	if (d1 !== null)
	{
		document.getElementById("d1").innerHTML = d1;
	}
	if (d2 !== null)
	{
		document.getElementById("d2").innerHTML = d2;
	}
	if (d3 !== null)
	{
		document.getElementById("d3").innerHTML = d3;
	}
	if (d4 !== null)
	{
		document.getElementById("d4").innerHTML = d4;
	}
	if (d5 !== null)
	{
		document.getElementById("d5").innerHTML = d5;
	}
	if (d6 !== null)
	{
		document.getElementById("d6").innerHTML = d6;
	}
	if (h1 !== null)
	{
		document.getElementById("h1").innerHTML = h1;
	}
	if (h2 !== null)
	{
		document.getElementById("h2").innerHTML = h2;
	}
	if (h3 !== null)
	{
		document.getElementById("h3").innerHTML = h3;
	}
	if (h4 !== null)
	{
		document.getElementById("h4").innerHTML = h4;
	}
	if (h5 !== null)
	{
		document.getElementById("h5").innerHTML = h5;
	}
	if (h6 !== null)
	{
		document.getElementById("h6").innerHTML = h6;
	}
	if (g1 !== null)
	{
		document.getElementById("g1").innerHTML = g1;
	}
	if (g2 !== null)
	{
		document.getElementById("g2").innerHTML = g2;
	}
	if (g3 !== null)
	{
		document.getElementById("g3").innerHTML = g3;
	}
	if (g4 !== null)
	{
		document.getElementById("g4").innerHTML = g4;
	}
	if (g5 !== null)
	{
		document.getElementById("g5").innerHTML = g5;
	}
	if (g6 !== null)
	{
		document.getElementById("g6").innerHTML = g6;
	}
	if (fis1 !== null)
	{
		document.getElementById("fis1").innerHTML = fis1;
	}
	if (fis2 !== null)
	{
		document.getElementById("fis2").innerHTML = fis2;
	}
	if (fis3 !== null)
	{
		document.getElementById("fis3").innerHTML = fis3;
	}
	if (fis4 !== null)
	{
		document.getElementById("fis4").innerHTML = fis4;
	}
	if (fis5 !== null)
	{
		document.getElementById("fis5").innerHTML = fis5;
	}
	if (fis6 !== null)
	{
		document.getElementById("fis6").innerHTML = fis6;
	}
	if (c1 !== null)
	{
		document.getElementById("c1").innerHTML = c1;
	}
	if (c2 !== null)
	{
		document.getElementById("c2").innerHTML = c2;
	}
	if (c3 !== null)
	{
		document.getElementById("c3").innerHTML = c3;
	}
	if (c4 !== null)
	{
		document.getElementById("c4").innerHTML = c4;
	}
	if (c5 !== null)
	{
		document.getElementById("c5").innerHTML = c5;
	}
	if (c6 !== null)
	{
		document.getElementById("c6").innerHTML = c6;
	}
	if (cis1 !== null)
	{
		document.getElementById("cis1").innerHTML = cis1;
	}
	if (cis2 !== null)
	{
		document.getElementById("cis2").innerHTML = cis2;
	}
	if (cis3 !== null)
	{
		document.getElementById("cis3").innerHTML = cis3;
	}
	if (cis4 !== null)
	{
		document.getElementById("cis4").innerHTML = cis4;
	}
	if (cis5 !== null)
	{
		document.getElementById("cis5").innerHTML = cis5;
	}
	if (cis6 !== null)
	{
		document.getElementById("cis6").innerHTML = cis6;
	}
	if (f1 !== null)
	{
		document.getElementById("f1").innerHTML = f1;
	}
	if (f2 !== null)
	{
		document.getElementById("f2").innerHTML = f2;
	}
	if (f3 !== null)
	{
		document.getElementById("f3").innerHTML = f3;
	}
	if (f4 !== null)
	{
		document.getElementById("f4").innerHTML = f4;
	}
	if (f5 !== null)
	{
		document.getElementById("f5").innerHTML = f5;
	}
	if (f6 !== null)
	{
		document.getElementById("f6").innerHTML = f6;
	}
	if (gis1 !== null)
	{
		document.getElementById("gis1").innerHTML = gis1;
	}
	if (gis2 !== null)
	{
		document.getElementById("gis2").innerHTML = gis2;
	}
	if (gis3 !== null)
	{
		document.getElementById("gis3").innerHTML = gis3;
	}
	if (gis4 !== null)
	{
		document.getElementById("gis4").innerHTML = gis4;
	}
	if (gis5 !== null)
	{
		document.getElementById("gis5").innerHTML = gis5;
	}
	if (gis6 !== null)
	{
		document.getElementById("gis6").innerHTML = gis6;
	}
	if (b1 !== null)
	{
		document.getElementById("b1").innerHTML = b1;
	}
	if (b2 !== null)
	{
		document.getElementById("b2").innerHTML = b2;
	}
	if (b3 !== null)
	{
		document.getElementById("b3").innerHTML = b3;
	}
	if (b4 !== null)
	{
		document.getElementById("b4").innerHTML = b4;
	}
	if (b5 !== null)
	{
		document.getElementById("b5").innerHTML = b5;
	}
	if (b6 !== null)
	{
		document.getElementById("b6").innerHTML = b6;
	}
	if (dis1 !== null)
	{
		document.getElementById("dis1").innerHTML = dis1;
	}
	if (dis2 !== null)
	{
		document.getElementById("dis2").innerHTML = dis2;
	}
	if (dis3 !== null)
	{
		document.getElementById("dis3").innerHTML = dis3;
	}
	if (dis4 !== null)
	{
		document.getElementById("dis4").innerHTML = dis4;
	}
	if (dis5 !== null)
	{
		document.getElementById("dis5").innerHTML = dis5;
	}
	if (dis6 !== null)
	{
		document.getElementById("dis6").innerHTML = dis6;
	}
	if (C1 < 5 && C1 !== null)
	{
		document.getElementById("C1").style = "background-color: #ff4545;";
	}
	else if (C1 > 4 && C1 < 8 && C1 !== null)
	{
		document.getElementById("C1").style = "background-color: yellow;";
	}
	else if (C1 == null) {}
	else 
	{
		document.getElementById("C1").style = "background-color: #05ec05;";
	}
	if (C2 < 5 && C2 !== null)
	{
		document.getElementById("C2").style = "background-color: #ff4545;";
	}
	else if (C2 > 4 && C2 < 8 && C2 !== null)
	{
		document.getElementById("C2").style = "background-color: yellow;";
	}
	else if (C2 == null) {}
	else 
	{
		document.getElementById("C2").style = "background-color: #05ec05;";
	}
	if (C3 < 5 && C3 !== null)
	{
		document.getElementById("C3").style = "background-color: #ff4545;";
	}
	else if (C3 > 4 && C3 < 8 && C3 !== null)
	{
		document.getElementById("C3").style = "background-color: yellow;";
	}
	else if (C3 == null) {}
	else 
	{
		document.getElementById("C3").style = "background-color: #05ec05;";
	}
	if (C4 < 5 && C4 !== null)
	{
		document.getElementById("C4").style = "background-color: #ff4545;";
	}
	else if (C4 > 4 && C4 < 8 && C4 !== null)
	{
		document.getElementById("C4").style = "background-color: yellow;";
	}
	else if (C4 == null) {}
	else 
	{
		document.getElementById("C4").style = "background-color: #05ec05;";
	}
	if (C5 < 5 && C5 !== null)
	{
		document.getElementById("C5").style = "background-color: #ff4545;";
	}
	else if (C5 > 4 && C5 < 8 && C5 !== null)
	{
		document.getElementById("C5").style = "background-color: yellow;";
	}
	else if (C5 == null) {}
	else 
	{
		document.getElementById("C5").style = "background-color: #05ec05;";
	}
	if (G1 < 5 && G1 !== null)
	{
		document.getElementById("G1").style = "background-color: #ff4545;";
	}
	else if (G1 > 4 && G1 < 8 && G1 !== null)
	{
		document.getElementById("G1").style = "background-color: yellow;";
	}
	else if (G1 == null) {}
	else 
	{
		document.getElementById("G1").style = "background-color: #05ec05;";
	}
	if (G2 < 5 && G2 !== null)
	{
		document.getElementById("G2").style = "background-color: #ff4545;";
	}
	else if (G2 > 4 && G2 < 8 && G2 !== null)
	{
		document.getElementById("G2").style = "background-color: yellow;";
	}
	else if (G2 == null) {}
	else 
	{
		document.getElementById("G2").style = "background-color: #05ec05;";
	}
	if (G3 < 5 && G3 !== null)
	{
		document.getElementById("G3").style = "background-color: #ff4545;";
	}
	else if (G3 > 4 && G3 < 8 && G3 !== null)
	{
		document.getElementById("G3").style = "background-color: yellow;";
	}
	else if (G3 == null) {}
	else 
	{
		document.getElementById("G3").style = "background-color: #05ec05;";
	}
	if (G4 < 5 && G4 !== null)
	{
		document.getElementById("G4").style = "background-color: #ff4545;";
	}
	else if (G4 > 4 && G4 < 8 && G4 !== null)
	{
		document.getElementById("G4").style = "background-color: yellow;";
	}
	else if (G4 == null) {}
	else 
	{
		document.getElementById("G4").style = "background-color: #05ec05;";
	}
	if (G5 < 5 && G5 !== null)
	{
		document.getElementById("G5").style = "background-color: #ff4545;";
	}
	else if (G5 > 4 && G5 < 8 && G5 !== null)
	{
		document.getElementById("G5").style = "background-color: yellow;";
	}
	else if (G5 == null) {}
	else 
	{
		document.getElementById("G5").style = "background-color: #05ec05;";
	}
	if (F1 < 5 && F1 !== null)
	{
		document.getElementById("F1").style = "background-color: #ff4545;";
	}
	else if (F1 > 4 && F1 < 8 && F1 !== null)
	{
		document.getElementById("F1").style = "background-color: yellow;";
	}
	else if (F1 == null) {}
	else 
	{
		document.getElementById("F1").style = "background-color: #05ec05;";
	}
	if (F2 < 5 && F2 !== null)
	{
		document.getElementById("F2").style = "background-color: #ff4545;";
	}
	else if (F2 > 4 && F2 < 8 && F2 !== null)
	{
		document.getElementById("F2").style = "background-color: yellow;";
	}
	else if (F2 == null) {}
	else 
	{
		document.getElementById("F2").style = "background-color: #05ec05;";
	}
	if (F3 < 5 && F3 !== null)
	{
		document.getElementById("F3").style = "background-color: #ff4545;";
	}
	else if (F3 > 4 && F3 < 8 && F3 !== null)
	{
		document.getElementById("F3").style = "background-color: yellow;";
	}
	else if (F3 == null) {}
	else 
	{
		document.getElementById("F3").style = "background-color: #05ec05;";
	}
	if (F4 < 5 && F4 !== null)
	{
		document.getElementById("F4").style = "background-color: #ff4545;";
	}
	else if (F4 > 4 && F4 < 8 && F4 !== null)
	{
		document.getElementById("F4").style = "background-color: yellow;";
	}
	else if (F4 == null) {}
	else 
	{
		document.getElementById("F4").style = "background-color: #05ec05;";
	}
	if (F5 < 5 && F5 !== null)
	{
		document.getElementById("F5").style = "background-color: #ff4545;";
	}
	else if (F5 > 4 && F5 < 8 && F5 !== null)
	{
		document.getElementById("F5").style = "background-color: yellow;";
	}
	else if (F5 == null) {}
	else 
	{
		document.getElementById("F5").style = "background-color: #05ec05;";
	}
	if (D1 < 5 && D1 !== null)
	{
		document.getElementById("D1").style = "background-color: #ff4545;";
	}
	else if (D1 > 4 && D1 < 8 && D1 !== null)
	{
		document.getElementById("D1").style = "background-color: yellow;";
	}
	else if (D1 == null) {}
	else 
	{
		document.getElementById("D1").style = "background-color: #05ec05;";
	}
	if (D2 < 5 && D2 !== null)
	{
		document.getElementById("D2").style = "background-color: #ff4545;";
	}
	else if (D2 > 4 && D2 < 8 && D2 !== null)
	{
		document.getElementById("D2").style = "background-color: yellow;";
	}
	else if (D2 == null) {}
	else 
	{
		document.getElementById("D2").style = "background-color: #05ec05;";
	}
	if (D3 < 5 && D3 !== null)
	{
		document.getElementById("D3").style = "background-color: #ff4545;";
	}
	else if (D3 > 4 && D3 < 8 && D3 !== null)
	{
		document.getElementById("D3").style = "background-color: yellow;";
	}
	else if (D3 == null) {}
	else 
	{
		document.getElementById("D3").style = "background-color: #05ec05;";
	}
	if (D4 < 5 && D4 !== null)
	{
		document.getElementById("D4").style = "background-color: #ff4545;";
	}
	else if (D4 > 4 && D4 < 8 && D4 !== null)
	{
		document.getElementById("D4").style = "background-color: yellow;";
	}
	else if (D4 == null) {}
	else 
	{
		document.getElementById("D4").style = "background-color: #05ec05;";
	}
	if (D5 < 5 && D5 !== null)
	{
		document.getElementById("D5").style = "background-color: #ff4545;";
	}
	else if (D5 > 4 && D5 < 8 && D5 !== null)
	{
		document.getElementById("D5").style = "background-color: yellow;";
	}
	else if (D5 == null) {}
	else 
	{
		document.getElementById("D5").style = "background-color: #05ec05;";
	}
	if (B1 < 5 && B1 !== null)
	{
		document.getElementById("B1").style = "background-color: #ff4545;";
	}
	else if (B1 > 4 && B1 < 8 && B1 !== null)
	{
		document.getElementById("B1").style = "background-color: yellow;";
	}
	else if (B1 == null) {}
	else 
	{
		document.getElementById("B1").style = "background-color: #05ec05;";
	}
	if (B2 < 5 && B2 !== null)
	{
		document.getElementById("B2").style = "background-color: #ff4545;";
	}
	else if (B2 > 4 && B2 < 8 && B2 !== null)
	{
		document.getElementById("B2").style = "background-color: yellow;";
	}
	else if (B2 == null) {}
	else 
	{
		document.getElementById("B2").style = "background-color: #05ec05;";
	}
	if (B3 < 5 && B3 !== null)
	{
		document.getElementById("B3").style = "background-color: #ff4545;";
	}
	else if (B3 > 4 && B3 < 8 && B3 !== null)
	{
		document.getElementById("B3").style = "background-color: yellow;";
	}
	else if (B3 == null) {}
	else 
	{
		document.getElementById("B3").style = "background-color: #05ec05;";
	}
	if (B4 < 5 && B4 !== null)
	{
		document.getElementById("B4").style = "background-color: #ff4545;";
	}
	else if (B4 > 4 && B4 < 8 && B4 !== null)
	{
		document.getElementById("B4").style = "background-color: yellow;";
	}
	else if (B4 == null) {}
	else 
	{
		document.getElementById("B4").style = "background-color: #05ec05;";
	}
	if (B5 < 5 && B5 !== null)
	{
		document.getElementById("B5").style = "background-color: #ff4545;";
	}
	else if (B5 > 4 && B5 < 8 && B5 !== null)
	{
		document.getElementById("B5").style = "background-color: yellow;";
	}
	else if (B5 == null) {}
	else 
	{
		document.getElementById("B5").style = "background-color: #05ec05;";
	}
	if (A1 < 5 && A1 !== null)
	{
		document.getElementById("A1").style = "background-color: #ff4545;";
	}
	else if (A1 > 4 && A1 < 8 && A1 !== null)
	{
		document.getElementById("A1").style = "background-color: yellow;";
	}
	else if (A1 == null) {}
	else 
	{
		document.getElementById("A1").style = "background-color: #05ec05;";
	}
	if (A2 < 5 && A2 !== null)
	{
		document.getElementById("A2").style = "background-color: #ff4545;";
	}
	else if (A2 > 4 && A2 < 8 && A2 !== null)
	{
		document.getElementById("A2").style = "background-color: yellow;";
	}
	else if (A2 == null) {}
	else 
	{
		document.getElementById("A2").style = "background-color: #05ec05;";
	}
	if (A3 < 5 && A3 !== null)
	{
		document.getElementById("A3").style = "background-color: #ff4545;";
	}
	else if (A3 > 4 && A3 < 8 && A3 !== null)
	{
		document.getElementById("A3").style = "background-color: yellow;";
	}
	else if (A3 == null) {}
	else 
	{
		document.getElementById("A3").style = "background-color: #05ec05;";
	}
	if (A4 < 5 && A4 !== null)
	{
		document.getElementById("A4").style = "background-color: #ff4545;";
	}
	else if (A4 > 4 && A4 < 8 && A4 !== null)
	{
		document.getElementById("A4").style = "background-color: yellow;";
	}
	else if (A4 == null) {}
	else 
	{
		document.getElementById("A4").style = "background-color: #05ec05;";
	}
	if (A5 < 5 && A5 !== null)
	{
		document.getElementById("A5").style = "background-color: #ff4545;";
	}
	else if (A5 > 4 && A5 < 8 && A5 !== null)
	{
		document.getElementById("A5").style = "background-color: yellow;";
	}
	else if (A5 == null) {}
	else 
	{
		document.getElementById("A5").style = "background-color: #05ec05;";
	}
	if (Es1 < 5 && Es1 !== null)
	{
		document.getElementById("Es1").style = "background-color: #ff4545;";
	}
	else if (Es1 > 4 && Es1 < 8 && Es1 !== null)
	{
		document.getElementById("Es1").style = "background-color: yellow;";
	}
	else if (Es1 == null) {}
	else 
	{
		document.getElementById("Es1").style = "background-color: #05ec05;";
	}
	if (Es2 < 5 && Es2 !== null)
	{
		document.getElementById("Es2").style = "background-color: #ff4545;";
	}
	else if (Es2 > 4 && Es2 < 8 && Es2 !== null)
	{
		document.getElementById("Es2").style = "background-color: yellow;";
	}
	else if (Es2 == null) {}
	else 
	{
		document.getElementById("Es2").style = "background-color: #05ec05;";
	}
	if (Es3 < 5 && Es3 !== null)
	{
		document.getElementById("Es3").style = "background-color: #ff4545;";
	}
	else if (Es3 > 4 && Es3 < 8 && Es3 !== null)
	{
		document.getElementById("Es3").style = "background-color: yellow;";
	}
	else if (Es3 == null) {}
	else 
	{
		document.getElementById("Es3").style = "background-color: #05ec05;";
	}
	if (Es4 < 5 && Es4 !== null)
	{
		document.getElementById("Es4").style = "background-color: #ff4545;";
	}
	else if (Es4 > 4 && Es4 < 8 && Es4 !== null)
	{
		document.getElementById("Es4").style = "background-color: yellow;";
	}
	else if (Es4 == null) {}
	else 
	{
		document.getElementById("Es4").style = "background-color: #05ec05;";
	}
	if (Es5 < 5 && Es5 !== null)
	{
		document.getElementById("Es5").style = "background-color: #ff4545;";
	}
	else if (Es5 > 4 && Es5 < 8 && Es5 !== null)
	{
		document.getElementById("Es5").style = "background-color: yellow;";
	}
	else if (Es5 == null) {}
	else 
	{
		document.getElementById("Es5").style = "background-color: #05ec05;";
	}
	if (E1 < 5 && E1 !== null)
	{
		document.getElementById("E1").style = "background-color: #ff4545;";
	}
	else if (E1 > 4 && E1 < 8 && E1 !== null)
	{
		document.getElementById("E1").style = "background-color: yellow;";
	}
	else if (E1 == null) {}
	else 
	{
		document.getElementById("E1").style = "background-color: #05ec05;";
	}
	if (E2 < 5 && E2 !== null)
	{
		document.getElementById("E2").style = "background-color: #ff4545;";
	}
	else if (E2 > 4 && E2 < 8 && E2 !== null)
	{
		document.getElementById("E2").style = "background-color: yellow;";
	}
	else if (E2 == null) {}
	else 
	{
		document.getElementById("E2").style = "background-color: #05ec05;";
	}
	if (E3 < 5 && E3 !== null)
	{
		document.getElementById("E3").style = "background-color: #ff4545;";
	}
	else if (E3 > 4 && E3 < 8 && E3 !== null)
	{
		document.getElementById("E3").style = "background-color: yellow;";
	}
	else if (E3 == null) {}
	else 
	{
		document.getElementById("E3").style = "background-color: #05ec05;";
	}
	if (E4 < 5 && E4 !== null)
	{
		document.getElementById("E4").style = "background-color: #ff4545;";
	}
	else if (E4 > 4 && E4 < 8 && E4 !== null)
	{
		document.getElementById("E4").style = "background-color: yellow;";
	}
	else if (E4 == null) {}
	else 
	{
		document.getElementById("E4").style = "background-color: #05ec05;";
	}
	if (E5 < 5 && E5 !== null)
	{
		document.getElementById("E5").style = "background-color: #ff4545;";
	}
	else if (E5 > 4 && E5 < 8 && E5 !== null)
	{
		document.getElementById("E5").style = "background-color: yellow;";
	}
	else if (E5 == null) {}
	else 
	{
		document.getElementById("E5").style = "background-color: #05ec05;";
	}
	if (As1 < 5 && As1 !== null)
	{
		document.getElementById("As1").style = "background-color: #ff4545;";
	}
	else if (As1 > 4 && As1 < 8 && As1 !== null)
	{
		document.getElementById("As1").style = "background-color: yellow;";
	}
	else if (As1 == null) {}
	else 
	{
		document.getElementById("As1").style = "background-color: #05ec05;";
	}
	if (As2 < 5 && As2 !== null)
	{
		document.getElementById("As2").style = "background-color: #ff4545;";
	}
	else if (As2 > 4 && As2 < 8 && As2 !== null)
	{
		document.getElementById("As2").style = "background-color: yellow;";
	}
	else if (As2 == null) {}
	else 
	{
		document.getElementById("As2").style = "background-color: #05ec05;";
	}
	if (As3 < 5 && As3 !== null)
	{
		document.getElementById("As3").style = "background-color: #ff4545;";
	}
	else if (As3 > 4 && As3 < 8 && As3 !== null)
	{
		document.getElementById("As3").style = "background-color: yellow;";
	}
	else if (As3 == null) {}
	else 
	{
		document.getElementById("As3").style = "background-color: #05ec05;";
	}
	if (As4 < 5 && As4 !== null)
	{
		document.getElementById("As4").style = "background-color: #ff4545;";
	}
	else if (As4 > 4 && As4 < 8 && As4 !== null)
	{
		document.getElementById("As4").style = "background-color: yellow;";
	}
	else if (As4 == null) {}
	else 
	{
		document.getElementById("As4").style = "background-color: #05ec05;";
	}
	if (As5 < 5 && As5 !== null)
	{
		document.getElementById("As5").style = "background-color: #ff4545;";
	}
	else if (As5 > 4 && As5 < 8 && As5 !== null)
	{
		document.getElementById("As5").style = "background-color: yellow;";
	}
	else if (As5 == null) {}
	else 
	{
		document.getElementById("As5").style = "background-color: #05ec05;";
	}
	if (H1 < 5 && H1 !== null)
	{
		document.getElementById("H1").style = "background-color: #ff4545;";
	}
	else if (H1 > 4 && H1 < 8 && H1 !== null)
	{
		document.getElementById("H1").style = "background-color: yellow;";
	}
	else if (H1 == null) {}
	else 
	{
		document.getElementById("H1").style = "background-color: #05ec05;";
	}
	if (H2 < 5 && H2 !== null)
	{
		document.getElementById("H2").style = "background-color: #ff4545;";
	}
	else if (H2 > 4 && H2 < 8 && H2 !== null)
	{
		document.getElementById("H2").style = "background-color: yellow;";
	}
	else if (H2 == null) {}
	else 
	{
		document.getElementById("H2").style = "background-color: #05ec05;";
	}
	if (H3 < 5 && H3 !== null)
	{
		document.getElementById("H3").style = "background-color: #ff4545;";
	}
	else if (H3 > 4 && H3 < 8 && H3 !== null)
	{
		document.getElementById("H3").style = "background-color: yellow;";
	}
	else if (H3 == null) {}
	else 
	{
		document.getElementById("H3").style = "background-color: #05ec05;";
	}
	if (H4 < 5 && H4 !== null)
	{
		document.getElementById("H4").style = "background-color: #ff4545;";
	}
	else if (H4 > 4 && H4 < 8 && H4 !== null)
	{
		document.getElementById("H4").style = "background-color: yellow;";
	}
	else if (H4 == null) {}
	else 
	{
		document.getElementById("H4").style = "background-color: #05ec05;";
	}
	if (H5 < 5 && H5 !== null)
	{
		document.getElementById("H5").style = "background-color: #ff4545;";
	}
	else if (H5 > 4 && H5 < 8 && H5 !== null)
	{
		document.getElementById("H5").style = "background-color: yellow;";
	}
	else if (H5 == null) {}
	else 
	{
		document.getElementById("H5").style = "background-color: #05ec05;";
	}
	if (Fis1 < 5 && Fis1 !== null)
	{
		document.getElementById("Fis1").style = "background-color: #ff4545;";
	}
	else if (Fis1 > 4 && Fis1 < 8 && Fis1 !== null)
	{
		document.getElementById("Fis1").style = "background-color: yellow;";
	}
	else if (Fis1 == null) {}
	else 
	{
		document.getElementById("Fis1").style = "background-color: #05ec05;";
	}
	if (Fis2 < 5 && Fis2 !== null)
	{
		document.getElementById("Fis2").style = "background-color: #ff4545;";
	}
	else if (Fis2 > 4 && Fis2 < 8 && Fis2 !== null)
	{
		document.getElementById("Fis2").style = "background-color: yellow;";
	}
	else if (Fis2 == null) {}
	else 
	{
		document.getElementById("Fis2").style = "background-color: #05ec05;";
	}
	if (Fis3 < 5 && Fis3 !== null)
	{
		document.getElementById("Fis3").style = "background-color: #ff4545;";
	}
	else if (Fis3 > 4 && Fis3 < 8 && Fis3 !== null)
	{
		document.getElementById("Fis3").style = "background-color: yellow;";
	}
	else if (Fis3 == null) {}
	else 
	{
		document.getElementById("Fis3").style = "background-color: #05ec05;";
	}
	if (Fis4 < 5 && Fis4 !== null)
	{
		document.getElementById("Fis4").style = "background-color: #ff4545;";
	}
	else if (Fis4 > 4 && Fis4 < 8 && Fis4 !== null)
	{
		document.getElementById("Fis4").style = "background-color: yellow;";
	}
	else if (Fis4 == null) {}
	else 
	{
		document.getElementById("Fis4").style = "background-color: #05ec05;";
	}
	if (Fis5 < 5 && Fis5 !== null)
	{
		document.getElementById("Fis5").style = "background-color: #ff4545;";
	}
	else if (Fis5 > 4 && Fis5 < 8 && Fis5 !== null)
	{
		document.getElementById("Fis5").style = "background-color: yellow;";
	}
	else if (Fis5 == null) {}
	else 
	{
		document.getElementById("Fis5").style = "background-color: #05ec05;";
	}
	if (Cis1 < 5 && Cis1 !== null)
	{
		document.getElementById("Cis1").style = "background-color: #ff4545;";
	}
	else if (Cis1 > 4 && Cis1 < 8 && Cis1 !== null)
	{
		document.getElementById("Cis1").style = "background-color: yellow;";
	}
	else if (Cis1 == null) {}
	else 
	{
		document.getElementById("Cis1").style = "background-color: #05ec05;";
	}
	if (Cis2 < 5 && Cis2 !== null)
	{
		document.getElementById("Cis2").style = "background-color: #ff4545;";
	}
	else if (Cis2 > 4 && Cis2 < 8 && Cis2 !== null)
	{
		document.getElementById("Cis2").style = "background-color: yellow;";
	}
	else if (Cis2 == null) {}
	else 
	{
		document.getElementById("Cis2").style = "background-color: #05ec05;";
	}
	if (Cis3 < 5 && Cis3 !== null)
	{
		document.getElementById("Cis3").style = "background-color: #ff4545;";
	}
	else if (Cis3 > 4 && Cis3 < 8 && Cis3 !== null)
	{
		document.getElementById("Cis3").style = "background-color: yellow;";
	}
	else if (Cis3 == null) {}
	else 
	{
		document.getElementById("Cis3").style = "background-color: #05ec05;";
	}
	if (Cis4 < 5 && Cis4 !== null)
	{
		document.getElementById("Cis4").style = "background-color: #ff4545;";
	}
	else if (Cis4 > 4 && Cis4 < 8 && Cis4 !== null)
	{
		document.getElementById("Cis4").style = "background-color: yellow;";
	}
	else if (Cis4 == null) {}
	else 
	{
		document.getElementById("Cis4").style = "background-color: #05ec05;";
	}
	if (Cis5 < 5 && Cis5 !== null)
	{
		document.getElementById("Cis5").style = "background-color: #ff4545;";
	}
	else if (Cis5 > 4 && Cis5 < 8 && Cis5 !== null)
	{
		document.getElementById("Cis5").style = "background-color: yellow;";
	}
	else if (Cis5 == null) {}
	else 
	{
		document.getElementById("Cis5").style = "background-color: #05ec05;";
	}
	if (a1 < 5 && a1 !== null)
	{
		document.getElementById("a1").style = "background-color: #ff4545;";
	}
	else if (a1 > 4 && a1 < 8 && a1 !== null)
	{
		document.getElementById("a1").style = "background-color: yellow;";
	}
	else if (a1 == null) {}
	else 
	{
		document.getElementById("a1").style = "background-color: #05ec05;";
	}
	if (a2 < 5 && a2 !== null)
	{
		document.getElementById("a2").style = "background-color: #ff4545;";
	}
	else if (a2 > 4 && a2 < 8 && a2 !== null)
	{
		document.getElementById("a2").style = "background-color: yellow;";
	}
	else if (a2 == null) {}
	else 
	{
		document.getElementById("a2").style = "background-color: #05ec05;";
	}
	if (a3 < 5 && a3 !== null)
	{
		document.getElementById("a3").style = "background-color: #ff4545;";
	}
	else if (a3 > 4 && a3 < 8 && a3 !== null)
	{
		document.getElementById("a3").style = "background-color: yellow;";
	}
	else if (a3 == null) {}
	else 
	{
		document.getElementById("a3").style = "background-color: #05ec05;";
	}
	if (a4 < 5 && a4 !== null)
	{
		document.getElementById("a4").style = "background-color: #ff4545;";
	}
	else if (a4 > 4 && a4 < 8 && a4 !== null)
	{
		document.getElementById("a4").style = "background-color: yellow;";
	}
	else if (a4 == null) {}
	else 
	{
		document.getElementById("a4").style = "background-color: #05ec05;";
	}
	if (a5 < 5 && a5 !== null)
	{
		document.getElementById("a5").style = "background-color: #ff4545;";
	}
	else if (a5 > 4 && a5 < 8 && a5 !== null)
	{
		document.getElementById("a5").style = "background-color: yellow;";
	}
	else if (a5 == null) {}
	else 
	{
		document.getElementById("a5").style = "background-color: #05ec05;";
	}
	if (a6 < 5 && a6 !== null)
	{
		document.getElementById("a6").style = "background-color: #ff4545;";
	}
	else if (a6 > 4 && a6 < 8 && a6 !== null)
	{
		document.getElementById("a6").style = "background-color: yellow;";
	}
	else if (a6 == null) {}
	else 
	{
		document.getElementById("a6").style = "background-color: #05ec05;";
	}
	if (e1 < 5 && e1 !== null)
	{
		document.getElementById("e1").style = "background-color: #ff4545;";
	}
	else if (e1 > 4 && e1 < 8 && e1 !== null)
	{
		document.getElementById("e1").style = "background-color: yellow;";
	}
	else if (e1 == null) {}
	else 
	{
		document.getElementById("e1").style = "background-color: #05ec05;";
	}
	if (e2 < 5 && e2 !== null)
	{
		document.getElementById("e2").style = "background-color: #ff4545;";
	}
	else if (e2 > 4 && e2 < 8 && e2 !== null)
	{
		document.getElementById("e2").style = "background-color: yellow;";
	}
	else if (e2 == null) {}
	else 
	{
		document.getElementById("e2").style = "background-color: #05ec05;";
	}
	if (e3 < 5 && e3 !== null)
	{
		document.getElementById("e3").style = "background-color: #ff4545;";
	}
	else if (e3 > 4 && e3 < 8 && e3 !== null)
	{
		document.getElementById("e3").style = "background-color: yellow;";
	}
	else if (e3 == null) {}
	else 
	{
		document.getElementById("e3").style = "background-color: #05ec05;";
	}
	if (e4 < 5 && e4 !== null)
	{
		document.getElementById("e4").style = "background-color: #ff4545;";
	}
	else if (e4 > 4 && e4 < 8 && e4 !== null)
	{
		document.getElementById("e4").style = "background-color: yellow;";
	}
	else if (e4 == null) {}
	else 
	{
		document.getElementById("e4").style = "background-color: #05ec05;";
	}
	if (e5 < 5 && e5 !== null)
	{
		document.getElementById("e5").style = "background-color: #ff4545;";
	}
	else if (e5 > 4 && e5 < 8 && e5 !== null)
	{
		document.getElementById("e5").style = "background-color: yellow;";
	}
	else if (e5 == null) {}
	else 
	{
		document.getElementById("e5").style = "background-color: #05ec05;";
	}
	if (e6 < 5 && e6 !== null)
	{
		document.getElementById("e6").style = "background-color: #ff4545;";
	}
	else if (e6 > 4 && e6 < 8 && e6 !== null)
	{
		document.getElementById("e6").style = "background-color: yellow;";
	}
	else if (e6 == null) {}
	else 
	{
		document.getElementById("e6").style = "background-color: #05ec05;";
	}
	if (d1 < 5 && d1 !== null)
	{
		document.getElementById("d1").style = "background-color: #ff4545;";
	}
	else if (d1 > 4 && d1 < 8 && d1 !== null)
	{
		document.getElementById("d1").style = "background-color: yellow;";
	}
	else if (d1 == null) {}
	else 
	{
		document.getElementById("d1").style = "background-color: #05ec05;";
	}
	if (d2 < 5 && d2 !== null)
	{
		document.getElementById("d2").style = "background-color: #ff4545;";
	}
	else if (d2 > 4 && d2 < 8 && d2 !== null)
	{
		document.getElementById("d2").style = "background-color: yellow;";
	}
	else if (d2 == null) {}
	else 
	{
		document.getElementById("d2").style = "background-color: #05ec05;";
	}
	if (d3 < 5 && d3 !== null)
	{
		document.getElementById("d3").style = "background-color: #ff4545;";
	}
	else if (d3 > 4 && d3 < 8 && d3 !== null)
	{
		document.getElementById("d3").style = "background-color: yellow;";
	}
	else if (d3 == null) {}
	else 
	{
		document.getElementById("d3").style = "background-color: #05ec05;";
	}
	if (d4 < 5 && d4 !== null)
	{
		document.getElementById("d4").style = "background-color: #ff4545;";
	}
	else if (d4 > 4 && d4 < 8 && d4 !== null)
	{
		document.getElementById("d4").style = "background-color: yellow;";
	}
	else if (d4 == null) {}
	else 
	{
		document.getElementById("d4").style = "background-color: #05ec05;";
	}
	if (d5 < 5 && d5 !== null)
	{
		document.getElementById("d5").style = "background-color: #ff4545;";
	}
	else if (d5 > 4 && d5 < 8 && d5 !== null)
	{
		document.getElementById("d5").style = "background-color: yellow;";
	}
	else if (d5 == null) {}
	else 
	{
		document.getElementById("d5").style = "background-color: #05ec05;";
	}
	if (d6 < 5 && d6 !== null)
	{
		document.getElementById("d6").style = "background-color: #ff4545;";
	}
	else if (d6 > 4 && d6 < 8 && d6 !== null)
	{
		document.getElementById("d6").style = "background-color: yellow;";
	}
	else if (d6 == null) {}
	else 
	{
		document.getElementById("d6").style = "background-color: #05ec05;";
	}
	if (h1 < 5 && h1 !== null)
	{
		document.getElementById("h1").style = "background-color: #ff4545;";
	}
	else if (h1 > 4 && h1 < 8 && h1 !== null)
	{
		document.getElementById("h1").style = "background-color: yellow;";
	}
	else if (h1 == null) {}
	else 
	{
		document.getElementById("h1").style = "background-color: #05ec05;";
	}
	if (h2 < 5 && h2 !== null)
	{
		document.getElementById("h2").style = "background-color: #ff4545;";
	}
	else if (h2 > 4 && h2 < 8 && h2 !== null)
	{
		document.getElementById("h2").style = "background-color: yellow;";
	}
	else if (h2 == null) {}
	else 
	{
		document.getElementById("h2").style = "background-color: #05ec05;";
	}
	if (h3 < 5 && h3 !== null)
	{
		document.getElementById("h3").style = "background-color: #ff4545;";
	}
	else if (h3 > 4 && h3 < 8 && h3 !== null)
	{
		document.getElementById("h3").style = "background-color: yellow;";
	}
	else if (h3 == null) {}
	else 
	{
		document.getElementById("h3").style = "background-color: #05ec05;";
	}
	if (h4 < 5 && h4 !== null)
	{
		document.getElementById("h4").style = "background-color: #ff4545;";
	}
	else if (h4 > 4 && h4 < 8 && h4 !== null)
	{
		document.getElementById("h4").style = "background-color: yellow;";
	}
	else if (h4 == null) {}
	else 
	{
		document.getElementById("h4").style = "background-color: #05ec05;";
	}
	if (h5 < 5 && h5 !== null)
	{
		document.getElementById("h5").style = "background-color: #ff4545;";
	}
	else if (h5 > 4 && h5 < 8 && h5 !== null)
	{
		document.getElementById("h5").style = "background-color: yellow;";
	}
	else if (h5 == null) {}
	else 
	{
		document.getElementById("h5").style = "background-color: #05ec05;";
	}
	if (h6 < 5 && h6 !== null)
	{
		document.getElementById("h6").style = "background-color: #ff4545;";
	}
	else if (h6 > 4 && h6 < 8 && h6 !== null)
	{
		document.getElementById("h6").style = "background-color: yellow;";
	}
	else if (h6 == null) {}
	else 
	{
		document.getElementById("h6").style = "background-color: #05ec05;";
	}
	if (g1 < 5 && g1 !== null)
	{
		document.getElementById("g1").style = "background-color: #ff4545;";
	}
	else if (g1 > 4 && g1 < 8 && g1 !== null)
	{
		document.getElementById("g1").style = "background-color: yellow;";
	}
	else if (g1 == null) {}
	else 
	{
		document.getElementById("g1").style = "background-color: #05ec05;";
	}
	if (g2 < 5 && g2 !== null)
	{
		document.getElementById("g2").style = "background-color: #ff4545;";
	}
	else if (g2 > 4 && g2 < 8 && g2 !== null)
	{
		document.getElementById("g2").style = "background-color: yellow;";
	}
	else if (g2 == null) {}
	else 
	{
		document.getElementById("g2").style = "background-color: #05ec05;";
	}
	if (g3 < 5 && g3 !== null)
	{
		document.getElementById("g3").style = "background-color: #ff4545;";
	}
	else if (g3 > 4 && g3 < 8 && g3 !== null)
	{
		document.getElementById("g3").style = "background-color: yellow;";
	}
	else if (g3 == null) {}
	else 
	{
		document.getElementById("g3").style = "background-color: #05ec05;";
	}
	if (g4 < 5 && g4 !== null)
	{
		document.getElementById("g4").style = "background-color: #ff4545;";
	}
	else if (g4 > 4 && g4 < 8 && g4 !== null)
	{
		document.getElementById("g4").style = "background-color: yellow;";
	}
	else if (g4 == null) {}
	else 
	{
		document.getElementById("g4").style = "background-color: #05ec05;";
	}
	if (g5 < 5 && g5 !== null)
	{
		document.getElementById("g5").style = "background-color: #ff4545;";
	}
	else if (g5 > 4 && g5 < 8 && g5 !== null)
	{
		document.getElementById("g5").style = "background-color: yellow;";
	}
	else if (g5 == null) {}
	else 
	{
		document.getElementById("g5").style = "background-color: #05ec05;";
	}
	if (g6 < 5 && g6 !== null)
	{
		document.getElementById("g6").style = "background-color: #ff4545;";
	}
	else if (g6 > 4 && g6 < 8 && g6 !== null)
	{
		document.getElementById("g6").style = "background-color: yellow;";
	}
	else if (g6 == null) {}
	else 
	{
		document.getElementById("g6").style = "background-color: #05ec05;";
	}
	if (fis1 < 5 && fis1 !== null)
	{
		document.getElementById("fis1").style = "background-color: #ff4545;";
	}
	else if (fis1 > 4 && fis1 < 8 && fis1 !== null)
	{
		document.getElementById("fis1").style = "background-color: yellow;";
	}
	else if (fis1 == null) {}
	else 
	{
		document.getElementById("fis1").style = "background-color: #05ec05;";
	}
	if (fis2 < 5 && fis2 !== null)
	{
		document.getElementById("fis2").style = "background-color: #ff4545;";
	}
	else if (fis2 > 4 && fis2 < 8 && fis2 !== null)
	{
		document.getElementById("fis2").style = "background-color: yellow;";
	}
	else if (fis2 == null) {}
	else 
	{
		document.getElementById("fis2").style = "background-color: #05ec05;";
	}
	if (fis3 < 5 && fis3 !== null)
	{
		document.getElementById("fis3").style = "background-color: #ff4545;";
	}
	else if (fis3 > 4 && fis3 < 8 && fis3 !== null)
	{
		document.getElementById("fis3").style = "background-color: yellow;";
	}
	else if (fis3 == null) {}
	else 
	{
		document.getElementById("fis3").style = "background-color: #05ec05;";
	}
	if (fis4 < 5 && fis4 !== null)
	{
		document.getElementById("fis4").style = "background-color: #ff4545;";
	}
	else if (fis4 > 4 && fis4 < 8 && fis4 !== null)
	{
		document.getElementById("fis4").style = "background-color: yellow;";
	}
	else if (fis4 == null) {}
	else 
	{
		document.getElementById("fis4").style = "background-color: #05ec05;";
	}
	if (fis5 < 5 && fis5 !== null)
	{
		document.getElementById("fis5").style = "background-color: #ff4545;";
	}
	else if (fis5 > 4 && fis5 < 8 && fis5 !== null)
	{
		document.getElementById("fis5").style = "background-color: yellow;";
	}
	else if (fis5 == null) {}
	else 
	{
		document.getElementById("fis5").style = "background-color: #05ec05;";
	}
	if (fis6 < 5 && fis6 !== null)
	{
		document.getElementById("fis6").style = "background-color: #ff4545;";
	}
	else if (fis6 > 4 && fis6 < 8 && fis6 !== null)
	{
		document.getElementById("fis6").style = "background-color: yellow;";
	}
	else if (fis6 == null) {}
	else 
	{
		document.getElementById("fis6").style = "background-color: #05ec05;";
	}
	if (c1 < 5 && c1 !== null)
	{
		document.getElementById("c1").style = "background-color: #ff4545;";
	}
	else if (c1 > 4 && c1 < 8 && c1 !== null)
	{
		document.getElementById("c1").style = "background-color: yellow;";
	}
	else if (c1 == null) {}
	else 
	{
		document.getElementById("c1").style = "background-color: #05ec05;";
	}
	if (c2 < 5 && c2 !== null)
	{
		document.getElementById("c2").style = "background-color: #ff4545;";
	}
	else if (c2 > 4 && c2 < 8 && c2 !== null)
	{
		document.getElementById("c2").style = "background-color: yellow;";
	}
	else if (c2 == null) {}
	else 
	{
		document.getElementById("c2").style = "background-color: #05ec05;";
	}
	if (c3 < 5 && c3 !== null)
	{
		document.getElementById("c3").style = "background-color: #ff4545;";
	}
	else if (c3 > 4 && c3 < 8 && c3 !== null)
	{
		document.getElementById("c3").style = "background-color: yellow;";
	}
	else if (c3 == null) {}
	else 
	{
		document.getElementById("c3").style = "background-color: #05ec05;";
	}
	if (c4 < 5 && c4 !== null)
	{
		document.getElementById("c4").style = "background-color: #ff4545;";
	}
	else if (c4 > 4 && c4 < 8 && c4 !== null)
	{
		document.getElementById("c4").style = "background-color: yellow;";
	}
	else if (c4 == null) {}
	else 
	{
		document.getElementById("c4").style = "background-color: #05ec05;";
	}
	if (c5 < 5 && c5 !== null)
	{
		document.getElementById("c5").style = "background-color: #ff4545;";
	}
	else if (c5 > 4 && c5 < 8 && c5 !== null)
	{
		document.getElementById("c5").style = "background-color: yellow;";
	}
	else if (c5 == null) {}
	else 
	{
		document.getElementById("c5").style = "background-color: #05ec05;";
	}
	if (c6 < 5 && c6 !== null)
	{
		document.getElementById("c6").style = "background-color: #ff4545;";
	}
	else if (c6 > 4 && c6 < 8 && c6 !== null)
	{
		document.getElementById("c6").style = "background-color: yellow;";
	}
	else if (c6 == null) {}
	else 
	{
		document.getElementById("c6").style = "background-color: #05ec05;";
	}
	if (cis1 < 5 && cis1 !== null)
	{
		document.getElementById("cis1").style = "background-color: #ff4545;";
	}
	else if (cis1 > 4 && cis1 < 8 && cis1 !== null)
	{
		document.getElementById("cis1").style = "background-color: yellow;";
	}
	else if (cis1 == null) {}
	else 
	{
		document.getElementById("cis1").style = "background-color: #05ec05;";
	}
	if (cis2 < 5 && cis2 !== null)
	{
		document.getElementById("cis2").style = "background-color: #ff4545;";
	}
	else if (cis2 > 4 && cis2 < 8 && cis2 !== null)
	{
		document.getElementById("cis2").style = "background-color: yellow;";
	}
	else if (cis2 == null) {}
	else 
	{
		document.getElementById("cis2").style = "background-color: #05ec05;";
	}
	if (cis3 < 5 && cis3 !== null)
	{
		document.getElementById("cis3").style = "background-color: #ff4545;";
	}
	else if (cis3 > 4 && cis3 < 8 && cis3 !== null)
	{
		document.getElementById("cis3").style = "background-color: yellow;";
	}
	else if (cis3 == null) {}
	else 
	{
		document.getElementById("cis3").style = "background-color: #05ec05;";
	}
	if (cis4 < 5 && cis4 !== null)
	{
		document.getElementById("cis4").style = "background-color: #ff4545;";
	}
	else if (cis4 > 4 && cis4 < 8 && cis4 !== null)
	{
		document.getElementById("cis4").style = "background-color: yellow;";
	}
	else if (cis4 == null) {}
	else 
	{
		document.getElementById("cis4").style = "background-color: #05ec05;";
	}
	if (cis5 < 5 && cis5 !== null)
	{
		document.getElementById("cis5").style = "background-color: #ff4545;";
	}
	else if (cis5 > 4 && cis5 < 8 && cis5 !== null)
	{
		document.getElementById("cis5").style = "background-color: yellow;";
	}
	else if (cis5 == null) {}
	else 
	{
		document.getElementById("cis5").style = "background-color: #05ec05;";
	}
	if (cis6 < 5 && cis6 !== null)
	{
		document.getElementById("cis6").style = "background-color: #ff4545;";
	}
	else if (cis6 > 4 && cis6 < 8 && cis6 !== null)
	{
		document.getElementById("cis6").style = "background-color: yellow;";
	}
	else if (cis6 == null) {}
	else 
	{
		document.getElementById("cis6").style = "background-color: #05ec05;";
	}
	if (f1 < 5 && f1 !== null)
	{
		document.getElementById("f1").style = "background-color: #ff4545;";
	}
	else if (f1 > 4 && f1 < 8 && f1 !== null)
	{
		document.getElementById("f1").style = "background-color: yellow;";
	}
	else if (f1 == null) {}
	else 
	{
		document.getElementById("f1").style = "background-color: #05ec05;";
	}
	if (f2 < 5 && f2 !== null)
	{
		document.getElementById("f2").style = "background-color: #ff4545;";
	}
	else if (f2 > 4 && f2 < 8 && f2 !== null)
	{
		document.getElementById("f2").style = "background-color: yellow;";
	}
	else if (f2 == null) {}
	else 
	{
		document.getElementById("f2").style = "background-color: #05ec05;";
	}
	if (f3 < 5 && f3 !== null)
	{
		document.getElementById("f3").style = "background-color: #ff4545;";
	}
	else if (f3 > 4 && f3 < 8 && f3 !== null)
	{
		document.getElementById("f3").style = "background-color: yellow;";
	}
	else if (f3 == null) {}
	else 
	{
		document.getElementById("f3").style = "background-color: #05ec05;";
	}
	if (f4 < 5 && f4 !== null)
	{
		document.getElementById("f4").style = "background-color: #ff4545;";
	}
	else if (f4 > 4 && f4 < 8 && f4 !== null)
	{
		document.getElementById("f4").style = "background-color: yellow;";
	}
	else if (f4 == null) {}
	else 
	{
		document.getElementById("f4").style = "background-color: #05ec05;";
	}
	if (f5 < 5 && f5 !== null)
	{
		document.getElementById("f5").style = "background-color: #ff4545;";
	}
	else if (f5 > 4 && f5 < 8 && f5 !== null)
	{
		document.getElementById("f5").style = "background-color: yellow;";
	}
	else if (f5 == null) {}
	else 
	{
		document.getElementById("f5").style = "background-color: #05ec05;";
	}
	if (f6 < 5 && f6 !== null)
	{
		document.getElementById("f6").style = "background-color: #ff4545;";
	}
	else if (f6 > 4 && f6 < 8 && f6 !== null)
	{
		document.getElementById("f6").style = "background-color: yellow;";
	}
	else if (f6 == null) {}
	else 
	{
		document.getElementById("f6").style = "background-color: #05ec05;";
	}
	if (gis1 < 5 && gis1 !== null)
	{
		document.getElementById("gis1").style = "background-color: #ff4545;";
	}
	else if (gis1 > 4 && gis1 < 8 && gis1 !== null)
	{
		document.getElementById("gis1").style = "background-color: yellow;";
	}
	else if (gis1 == null) {}
	else 
	{
		document.getElementById("gis1").style = "background-color: #05ec05;";
	}
	if (gis2 < 5 && gis2 !== null)
	{
		document.getElementById("gis2").style = "background-color: #ff4545;";
	}
	else if (gis2 > 4 && gis2 < 8 && gis2 !== null)
	{
		document.getElementById("gis2").style = "background-color: yellow;";
	}
	else if (gis2 == null) {}
	else 
	{
		document.getElementById("gis2").style = "background-color: #05ec05;";
	}
	if (gis3 < 5 && gis3 !== null)
	{
		document.getElementById("gis3").style = "background-color: #ff4545;";
	}
	else if (gis3 > 4 && gis3 < 8 && gis3 !== null)
	{
		document.getElementById("gis3").style = "background-color: yellow;";
	}
	else if (gis3 == null) {}
	else 
	{
		document.getElementById("gis3").style = "background-color: #05ec05;";
	}
	if (gis4 < 5 && gis4 !== null)
	{
		document.getElementById("gis4").style = "background-color: #ff4545;";
	}
	else if (gis4 > 4 && gis4 < 8 && gis4 !== null)
	{
		document.getElementById("gis4").style = "background-color: yellow;";
	}
	else if (gis4 == null) {}
	else 
	{
		document.getElementById("gis4").style = "background-color: #05ec05;";
	}
	if (gis5 < 5 && gis5 !== null)
	{
		document.getElementById("gis5").style = "background-color: #ff4545;";
	}
	else if (gis5 > 4 && gis5 < 8 && gis5 !== null)
	{
		document.getElementById("gis5").style = "background-color: yellow;";
	}
	else if (gis5 == null) {}
	else 
	{
		document.getElementById("gis5").style = "background-color: #05ec05;";
	}
	if (gis6 < 5 && gis6 !== null)
	{
		document.getElementById("gis6").style = "background-color: #ff4545;";
	}
	else if (gis6 > 4 && gis6 < 8 && gis6 !== null)
	{
		document.getElementById("gis6").style = "background-color: yellow;";
	}
	else if (gis6 == null) {}
	else 
	{
		document.getElementById("gis6").style = "background-color: #05ec05;";
	}
	if (b1 < 5 && b1 !== null)
	{
		document.getElementById("b1").style = "background-color: #ff4545;";
	}
	else if (b1 > 4 && b1 < 8 && b1 !== null)
	{
		document.getElementById("b1").style = "background-color: yellow;";
	}
	else if (b1 == null) {}
	else 
	{
		document.getElementById("b1").style = "background-color: #05ec05;";
	}
	if (b2 < 5 && b2 !== null)
	{
		document.getElementById("b2").style = "background-color: #ff4545;";
	}
	else if (b2 > 4 && b2 < 8 && b2 !== null)
	{
		document.getElementById("b2").style = "background-color: yellow;";
	}
	else if (b2 == null) {}
	else 
	{
		document.getElementById("b2").style = "background-color: #05ec05;";
	}
	if (b3 < 5 && b3 !== null)
	{
		document.getElementById("b3").style = "background-color: #ff4545;";
	}
	else if (b3 > 4 && b3 < 8 && b3 !== null)
	{
		document.getElementById("b3").style = "background-color: yellow;";
	}
	else if (b3 == null) {}
	else 
	{
		document.getElementById("b3").style = "background-color: #05ec05;";
	}
	if (b4 < 5 && b4 !== null)
	{
		document.getElementById("b4").style = "background-color: #ff4545;";
	}
	else if (b4 > 4 && b4 < 8 && b4 !== null)
	{
		document.getElementById("b4").style = "background-color: yellow;";
	}
	else if (b4 == null) {}
	else 
	{
		document.getElementById("b4").style = "background-color: #05ec05;";
	}
	if (b5 < 5 && b5 !== null)
	{
		document.getElementById("b5").style = "background-color: #ff4545;";
	}
	else if (b5 > 4 && b5 < 8 && b5 !== null)
	{
		document.getElementById("b5").style = "background-color: yellow;";
	}
	else if (b5 == null) {}
	else 
	{
		document.getElementById("b5").style = "background-color: #05ec05;";
	}
	if (b6 < 5 && b6 !== null)
	{
		document.getElementById("b6").style = "background-color: #ff4545;";
	}
	else if (b6 > 4 && b6 < 8 && b6 !== null)
	{
		document.getElementById("b6").style = "background-color: yellow;";
	}
	else if (b6 == null) {}
	else 
	{
		document.getElementById("b6").style = "background-color: #05ec05;";
	}
	if (dis1 < 5 && dis1 !== null)
	{
		document.getElementById("dis1").style = "background-color: #ff4545;";
	}
	else if (dis1 > 4 && dis1 < 8 && dis1 !== null)
	{
		document.getElementById("dis1").style = "background-color: yellow;";
	}
	else if (dis1 == null) {}
	else 
	{
		document.getElementById("dis1").style = "background-color: #05ec05;";
	}
	if (dis2 < 5 && dis2 !== null)
	{
		document.getElementById("dis2").style = "background-color: #ff4545;";
	}
	else if (dis2 > 4 && dis2 < 8 && dis2 !== null)
	{
		document.getElementById("dis2").style = "background-color: yellow;";
	}
	else if (dis2 == null) {}
	else 
	{
		document.getElementById("dis2").style = "background-color: #05ec05;";
	}
	if (dis3 < 5 && dis3 !== null)
	{
		document.getElementById("dis3").style = "background-color: #ff4545;";
	}
	else if (dis3 > 4 && dis3 < 8 && dis3 !== null)
	{
		document.getElementById("dis3").style = "background-color: yellow;";
	}
	else if (dis3 == null) {}
	else 
	{
		document.getElementById("dis3").style = "background-color: #05ec05;";
	}
	if (dis4 < 5 && dis4 !== null)
	{
		document.getElementById("dis4").style = "background-color: #ff4545;";
	}
	else if (dis4 > 4 && dis4 < 8 && dis4 !== null)
	{
		document.getElementById("dis4").style = "background-color: yellow;";
	}
	else if (dis4 == null) {}
	else 
	{
		document.getElementById("dis4").style = "background-color: #05ec05;";
	}
	if (dis5 < 5 && dis5 !== null)
	{
		document.getElementById("dis5").style = "background-color: #ff4545;";
	}
	else if (dis5 > 4 && dis5 < 8 && dis5 !== null)
	{
		document.getElementById("dis5").style = "background-color: yellow;";
	}
	else if (dis5 == null) {}
	else 
	{
		document.getElementById("dis5").style = "background-color: #05ec05;";
	}
	if (dis6 < 5 && dis6 !== null)
	{
		document.getElementById("dis6").style = "background-color: #ff4545;";
	}
	else if (dis6 > 4 && dis6 < 8 && dis6 !== null)
	{
		document.getElementById("dis6").style = "background-color: yellow;";
	}
	else if (dis6 == null) {}
	else 
	{
		document.getElementById("dis6").style = "background-color: #05ec05;";
	}
}
