var iloscg = 1;
var maxiloscg = 100;
var przyrostgnas = 0;
var fbgcost = 5;
var fbgcount = 0;
var sbgcost = 150;
var sbgcount = 0;
var tbgcost = 5000;
var tbgcount = 0;

var iloscr = 1;
var maxiloscr = 100;
var przyrostrnas = 0;
var fbrcost = 5;
var fbrcount = 0;
var sbrcost = 150;
var sbrcount = 0;
var tbrcost = 5000;
var tbrcount = 0;

var iloscb = 1;
var maxiloscb = 100;
var przyrostbnas = 0;
var fbbcost = 5;
var fbbcount = 0;
var sbbcost = 150;
var sbbcount = 0;
var tbbcost = 5000;
var tbbcount = 0;

var iloscy = 1;
var maxiloscy = 100;
var przyrostynas = 0;
var fbycost = 5;
var fbycount = 0;
var sbycost = 150;
var sbycount = 0;
var tbycost = 5000;
var tbycount = 0;

var Up1cost = 125;

var testg = 0;
var testr = 0;
var testb = 0;
var testy = 0;
var TESTy = 0;



document.getElementById("strzalkag").onclick = function()
{
	if (testg == 0)
	{
	var gpokazany = document.createElement("div"); 
	gpokazany.id = "GPrzyrost";
	gpokazany.innerHTML = '1<img src="kulkag.png" id="kulkag" />';
	document.getElementById("GPokaz").appendChild(gpokazany);
	document.getElementById("strzalkag").innerHTML = "/\\";
	testg = testg + 1;
	document.getElementById("GPrzyrost").onclick = function()
		{
			if (iloscg < maxiloscg)
			{
			iloscg = iloscg + 1;
			var gprocent = (iloscg / maxiloscg) * 100;
			document.getElementById("pasekg").style = "width: " + gprocent + "%;";
			document.getElementById("pasekg").innerHTML = iloscg.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
			}
			if (iloscg >= maxiloscg)
			{
				iloscg == maxiloscg;
				var gprocent = (iloscg / maxiloscg) * 100;
				document.getElementById("pasekg").style = "width: " + gprocent + "%;";
				document.getElementById("pasekg").innerHTML = iloscg.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
			}
		}
	var gspokazany = document.createElement("div");
	gspokazany.id = "GSPrzyrost";
	gspokazany.innerHTML = '+1<img src="kulkag.png" id="kulkag" />/s<br />-' + fbgcost.toFixed(0) + '<img src="kulkar.png" id="kulkar" /><br />-' + fbgcost.toFixed(0) +'<img src="kulkab.png" id="kulkab" />';
	document.getElementById("GSPokaz").appendChild(gspokazany);
	document.getElementById("GSPrzyrost").onclick = function()
		{
			if (iloscr >= fbgcost && iloscb >= fbgcost)
			{
				iloscr = iloscr - fbgcost;
				iloscb = iloscb - fbgcost;
				fbgcount = fbgcount + 1;
				fbgcost = 5 * Math.pow(1.15, fbgcount);
				przyrostgnas = przyrostgnas + 1;
				var gprocent = (iloscg / maxiloscg) * 100;
				var rprocent = (iloscr / maxiloscr) * 100;
				var bprocent = (iloscb / maxiloscb) * 100;
				document.getElementById("GSPrzyrost").innerHTML = '+1<img src="kulkag.png" id="kulkag" />/s<br />-' + fbgcost.toFixed(0) + '<img src="kulkar.png" id="kulkar" /><br />-' + fbgcost.toFixed(0) +'<img src="kulkab.png" id="kulkab" />';
				document.getElementById("pasekg").innerHTML = iloscg.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
				document.getElementById("pasekr").innerHTML = iloscr.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
				document.getElementById("pasekb").innerHTML = iloscb.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
				document.getElementById("pasekr").style = "width: " + rprocent + "%;";
				document.getElementById("pasekb").style = "width: " + bprocent + "%;";
			}
			else if (iloscr < fbgcost || iloscb < fbgcost)
			{
				var alert = document.createElement("div"); 
				alert.id = "Alert";
				alert.innerHTML = "Nie masz tylu kolorów!";
				document.getElementById("APokaz").appendChild(alert);
				function AlertW()
				{
					document.getElementById("APokaz").innerHTML = "";
				}
				setTimeout(AlertW, 1200);
			}
		}
	var gs2pokazany = document.createElement("div");
	gs2pokazany.id = "GS2Przyrost";
	gs2pokazany.innerHTML = '+10<img src="kulkag.png" id="kulkag" />/s<br />-' + sbgcost.toFixed(0) + '<img src="kulkar.png" id="kulkar" /><br />-' + sbgcost.toFixed(0) +'<img src="kulkab.png" id="kulkab" />';
	document.getElementById("GS2Pokaz").appendChild(gs2pokazany);
	document.getElementById("GS2Przyrost").onclick = function()
		{
			if (iloscr >= sbgcost && iloscb >= sbgcost)
			{
				iloscr = iloscr - sbgcost;
				iloscb = iloscb - sbgcost;
				sbgcount = sbgcount + 1;
				sbgcost = 150 * Math.pow(1.15, sbgcount);
				przyrostgnas = przyrostgnas + 10;
				var gprocent = (iloscg / maxiloscg) * 100;
				var rprocent = (iloscr / maxiloscr) * 100;
				var bprocent = (iloscb / maxiloscb) * 100;
				document.getElementById("GS2Przyrost").innerHTML = '+10<img src="kulkag.png" id="kulkag" />/s<br />-' + sbgcost.toFixed(0) + '<img src="kulkar.png" id="kulkar" /><br />-' + sbgcost.toFixed(0) +'<img src="kulkab.png" id="kulkab" />';
				document.getElementById("pasekg").innerHTML = iloscg.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
				document.getElementById("pasekr").innerHTML = iloscr.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
				document.getElementById("pasekb").innerHTML = iloscb.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
				document.getElementById("pasekr").style = "width: " + rprocent + "%;";
				document.getElementById("pasekb").style = "width: " + bprocent + "%;";
			}
			else if (iloscr < sbgcost || iloscb < sbgcost)
			{
				var alert = document.createElement("div"); 
				alert.id = "Alert";
				alert.innerHTML = "Nie masz tylu kolorów!";
				document.getElementById("APokaz").appendChild(alert);
				function AlertW()
				{
					document.getElementById("APokaz").innerHTML = "";
				}
				setTimeout(AlertW, 1200);
			}
		}
	var gs3pokazany = document.createElement("div");
	gs3pokazany.id = "GS3Przyrost";
	gs3pokazany.innerHTML = '+100<img src="kulkag.png" id="kulkag" />/s<br />-' + tbgcost.toFixed(0) + '<img src="kulkar.png" id="kulkar" /><br />-' + tbgcost.toFixed(0) +'<img src="kulkab.png" id="kulkab" />';
	document.getElementById("GS3Pokaz").appendChild(gs3pokazany);
	document.getElementById("GS3Przyrost").onclick = function()
		{
			if (iloscr >= tbgcost && iloscb >= tbgcost)
			{
				iloscr = iloscr - tbgcost;
				iloscb = iloscb - tbgcost;
				tbgcount = tbgcount + 1;
				tbgcost = 5000 * Math.pow(1.15, tbgcount);
				przyrostgnas = przyrostgnas + 100;
				var gprocent = (iloscg / maxiloscg) * 100;
				var rprocent = (iloscr / maxiloscr) * 100;
				var bprocent = (iloscb / maxiloscb) * 100;
				document.getElementById("GS3Przyrost").innerHTML = '+100<img src="kulkag.png" id="kulkag" />/s<br />-' + tbgcost.toFixed(0) + '<img src="kulkar.png" id="kulkar" /><br />-' + tbgcost.toFixed(0) +'<img src="kulkab.png" id="kulkab" />';
				document.getElementById("pasekg").innerHTML = iloscg.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
				document.getElementById("pasekr").innerHTML = iloscr.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
				document.getElementById("pasekb").innerHTML = iloscb.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
				document.getElementById("pasekr").style = "width: " + rprocent + "%;";
				document.getElementById("pasekb").style = "width: " + bprocent + "%;";
			}
			else if (iloscr < tbgcost || iloscb < tbgcost)
			{
				var alert = document.createElement("div"); 
				alert.id = "Alert";
				alert.innerHTML = "Nie masz tylu kolorów!";
				document.getElementById("APokaz").appendChild(alert);
				function AlertW()
				{
					document.getElementById("APokaz").innerHTML = "";
				}
				setTimeout(AlertW, 1200);
			}
		}
	var gmpokazany = document.createElement("div");
	gmpokazany.id = "GMUlepsz";
	hmaxiloscg = maxiloscg/2;
	gmpokazany.innerHTML = '+' + hmaxiloscg.toFixed(0) + '<img src="kulkag.png" id="kulkag" />/max<br />-' + maxiloscg.toFixed(0) + '<img src="kulkar.png" id="kulkar" /><br />-' + maxiloscg.toFixed(0) +'<img src="kulkab.png" id="kulkab" />';
	document.getElementById("GMPokaz").appendChild(gmpokazany);
	document.getElementById("GMUlepsz").onclick = function()
		{
			if (iloscr >= maxiloscg && iloscb >= maxiloscg)
			{
			iloscr = iloscr - maxiloscg;
			iloscb = iloscb - maxiloscg;
			hmaxiloscg = maxiloscg/2;
			maxiloscg = maxiloscg + hmaxiloscg;
			var gprocent = (iloscg / maxiloscg) * 100;
			var rprocent = (iloscr / maxiloscr) * 100;
			var bprocent = (iloscb / maxiloscb) * 100;
			document.getElementById("GMUlepsz").innerHTML = '+' + hmaxiloscg.toFixed(0) + '<img src="kulkag.png" id="kulkag" />/max<br />-' + maxiloscg.toFixed(0) + '<img src="kulkar.png" id="kulkar" /><br />-' + maxiloscg.toFixed(0) +'<img src="kulkab.png" id="kulkab" />';
			document.getElementById("pasekg").innerHTML = iloscg.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
			document.getElementById("pasekr").innerHTML = iloscr.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
			document.getElementById("pasekb").innerHTML = iloscb.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
			document.getElementById("pasekr").style = "width: " + rprocent + "%;";
			document.getElementById("pasekg").style = "width: " + gprocent + "%;";
			document.getElementById("pasekb").style = "width: " + bprocent + "%;";
			}
			else if (iloscr < maxiloscg || iloscb < maxiloscg)
			{
				var alert = document.createElement("div"); 
				alert.id = "Alert";
				alert.innerHTML = "Nie masz tylu kolorów!";
				document.getElementById("APokaz").appendChild(alert);
				function AlertW()
				{
					document.getElementById("APokaz").innerHTML = "";
				}
				setTimeout(AlertW, 1200);
			}
		}
	}
	else if (testg > 0)
	{
		document.getElementById("GPokaz").innerHTML = "";
		document.getElementById("GSPokaz").innerHTML ="";
		document.getElementById("GS2Pokaz").innerHTML ="";
		document.getElementById("GS3Pokaz").innerHTML ="";
		document.getElementById("GMPokaz").innerHTML ="";
		document.getElementById("strzalkag").innerHTML = "\\/";
		testg = 0;
	}
}


document.getElementById("strzalkar").onclick = function()
{
	if (testr == 0)
	{
	var rpokazany = document.createElement("div"); 
	rpokazany.id = "RPrzyrost";
	rpokazany.innerHTML = '1<img src="kulkar.png" id="kulkar" />';
	document.getElementById("RPokaz").appendChild(rpokazany);
	document.getElementById("strzalkar").innerHTML = "/\\";
	testr = testr + 1;
	document.getElementById("RPrzyrost").onclick = function()
		{
			if (iloscr < maxiloscr)
			{
			iloscr = iloscr + 1;
			var rprocent = (iloscr / maxiloscr) * 100;
			document.getElementById("pasekr").style = "width: " + rprocent + "%;";
			document.getElementById("pasekr").innerHTML = iloscr.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
			}
			if (iloscr >= maxiloscr)
			{
				iloscr == maxiloscr;
				var rprocent = (iloscr / maxiloscr) * 100;
				document.getElementById("pasekr").style = "width: " + rprocent + "%;";
				document.getElementById("pasekr").innerHTML = iloscr.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
			}
		}
	var rspokazany = document.createElement("div");
	rspokazany.id = "RSPrzyrost";
	rspokazany.innerHTML = '+1<img src="kulkar.png" id="kulkar" />/s<br />-' + fbrcost.toFixed(0) + '<img src="kulkag.png" id="kulkag" /><br />-' + fbrcost.toFixed(0) +'<img src="kulkab.png" id="kulkab" />';
	document.getElementById("RSPokaz").appendChild(rspokazany);
	document.getElementById("RSPrzyrost").onclick = function()
		{
			if (iloscg >= fbrcost && iloscb >= fbrcost)
			{
				iloscg = iloscg - fbrcost;
				iloscb = iloscb - fbrcost;
				fbrcount = fbrcount + 1;
				fbrcost = 5 * Math.pow(1.15, fbrcount);
				przyrostrnas = przyrostrnas + 1;
				var gprocent = (iloscg / maxiloscg) * 100;
				var rprocent = (iloscr / maxiloscr) * 100;
				var bprocent = (iloscb / maxiloscb) * 100;
				document.getElementById("RSPrzyrost").innerHTML = '+1<img src="kulkar.png" id="kulkar" />/s<br />-' + fbrcost.toFixed(0) + '<img src="kulkag.png" id="kulkag" /><br />-' + fbrcost.toFixed(0) +'<img src="kulkab.png" id="kulkab" />';
				document.getElementById("pasekg").innerHTML = iloscg.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
				document.getElementById("pasekr").innerHTML = iloscr.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
				document.getElementById("pasekb").innerHTML = iloscb.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
				document.getElementById("pasekg").style = "width: " + gprocent + "%;";
				document.getElementById("pasekb").style = "width: " + bprocent + "%;";
			}
			else if (iloscg < fbrcost || iloscb < fbrcost)
			{
				var alert = document.createElement("div"); 
				alert.id = "Alert";
				alert.innerHTML = "Nie masz tylu kolorów!";
				document.getElementById("APokaz").appendChild(alert);
				function AlertW()
				{
					document.getElementById("APokaz").innerHTML = "";
				}
				setTimeout(AlertW, 1200);
			}
		}
	var rs2pokazany = document.createElement("div");
	rs2pokazany.id = "RS2Przyrost";
	rs2pokazany.innerHTML = '+10<img src="kulkar.png" id="kulkar" />/s<br />-' + sbrcost.toFixed(0) + '<img src="kulkag.png" id="kulkag" /><br />-' + sbrcost.toFixed(0) +'<img src="kulkab.png" id="kulkab" />';
	document.getElementById("RS2Pokaz").appendChild(rs2pokazany);
	document.getElementById("RS2Przyrost").onclick = function()
		{
			if (iloscg >= sbrcost && iloscb >= sbrcost)
			{
				iloscg = iloscg - sbrcost;
				iloscb = iloscb - sbrcost;
				sbrcount = sbrcount + 1;
				sbrcost = 150 * Math.pow(1.15, sbrcount);
				przyrostrnas = przyrostrnas + 10;
				var gprocent = (iloscg / maxiloscg) * 100;
				var rprocent = (iloscr / maxiloscr) * 100;
				var bprocent = (iloscb / maxiloscb) * 100;
				document.getElementById("RS2Przyrost").innerHTML = '+10<img src="kulkar.png" id="kulkar" />/s<br />-' + sbrcost.toFixed(0) + '<img src="kulkag.png" id="kulkag" /><br />-' + sbrcost.toFixed(0) +'<img src="kulkab.png" id="kulkab" />';
				document.getElementById("pasekg").innerHTML = iloscg.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
				document.getElementById("pasekr").innerHTML = iloscr.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
				document.getElementById("pasekb").innerHTML = iloscb.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
				document.getElementById("pasekg").style = "width: " + gprocent + "%;";
				document.getElementById("pasekb").style = "width: " + bprocent + "%;";
			}
			else if (iloscg < sbrcost || iloscb < sbrcost)
			{
				var alert = document.createElement("div"); 
				alert.id = "Alert";
				alert.innerHTML = "Nie masz tylu kolorów!";
				document.getElementById("APokaz").appendChild(alert);
				function AlertW()
				{
					document.getElementById("APokaz").innerHTML = "";
				}
				setTimeout(AlertW, 1200);
			}
		}
	var rs3pokazany = document.createElement("div");
	rs3pokazany.id = "RS3Przyrost";
	rs3pokazany.innerHTML = '+100<img src="kulkar.png" id="kulkar" />/s<br />-' + tbrcost.toFixed(0) + '<img src="kulkag.png" id="kulkag" /><br />-' + tbrcost.toFixed(0) +'<img src="kulkab.png" id="kulkab" />';
	document.getElementById("RS3Pokaz").appendChild(rs3pokazany);
	document.getElementById("RS3Przyrost").onclick = function()
		{
			if (iloscg >= tbrcost && iloscb >= tbrcost)
			{
				iloscg = iloscg - tbrcost;
				iloscb = iloscb - tbrcost;
				tbrcount = tbrcount + 1;
				tbrcost = 5000 * Math.pow(1.15, tbrcount);
				przyrostrnas = przyrostrnas + 100;
				var gprocent = (iloscg / maxiloscg) * 100;
				var rprocent = (iloscr / maxiloscr) * 100;
				var bprocent = (iloscb / maxiloscb) * 100;
				document.getElementById("RS3Przyrost").innerHTML = '+100<img src="kulkar.png" id="kulkar" />/s<br />-' + tbrcost.toFixed(0) + '<img src="kulkag.png" id="kulkag" /><br />-' + tbrcost.toFixed(0) +'<img src="kulkab.png" id="kulkab" />';
				document.getElementById("pasekg").innerHTML = iloscg.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
				document.getElementById("pasekr").innerHTML = iloscr.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
				document.getElementById("pasekb").innerHTML = iloscb.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
				document.getElementById("pasekg").style = "width: " + gprocent + "%;";
				document.getElementById("pasekb").style = "width: " + bprocent + "%;";
			}
			else if (iloscg < tbrcost || iloscb < tbrcost)
			{
				var alert = document.createElement("div"); 
				alert.id = "Alert";
				alert.innerHTML = "Nie masz tylu kolorów!";
				document.getElementById("APokaz").appendChild(alert);
				function AlertW()
				{
					document.getElementById("APokaz").innerHTML = "";
				}
				setTimeout(AlertW, 1200);
			}
		}
	var rmpokazany = document.createElement("div");
	rmpokazany.id = "RMUlepsz";
	hmaxiloscr = maxiloscr/2;
	rmpokazany.innerHTML = '+' + hmaxiloscr.toFixed(0) + '<img src="kulkar.png" id="kulkar" />/max<br />-' + maxiloscr.toFixed(0) + '<img src="kulkag.png" id="kulkag" /><br />-' + maxiloscr.toFixed(0) +'<img src="kulkab.png" id="kulkab" />';
	document.getElementById("RMPokaz").appendChild(rmpokazany);
	document.getElementById("RMUlepsz").onclick = function()
		{
			if (iloscg >= maxiloscr && iloscb >= maxiloscr)
			{
			iloscg = iloscg - maxiloscr;
			iloscb = iloscb - maxiloscr;
			hmaxiloscr = maxiloscr/2;
			maxiloscr = maxiloscr + hmaxiloscr;
			var gprocent = (iloscg / maxiloscg) * 100;
			var rprocent = (iloscr / maxiloscr) * 100;
			var bprocent = (iloscb / maxiloscb) * 100;
			document.getElementById("RMUlepsz").innerHTML = '+' + hmaxiloscr.toFixed(0) + '<img src="kulkar.png" id="kulkar" />/max<br />-' + maxiloscr.toFixed(0) + '<img src="kulkag.png" id="kulkag" /><br />-' + maxiloscr.toFixed(0) +'<img src="kulkab.png" id="kulkab" />';
			document.getElementById("pasekg").innerHTML = iloscg.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
			document.getElementById("pasekr").innerHTML = iloscr.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
			document.getElementById("pasekb").innerHTML = iloscb.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
			document.getElementById("pasekr").style = "width: " + rprocent + "%;";
			document.getElementById("pasekg").style = "width: " + gprocent + "%;";
			document.getElementById("pasekb").style = "width: " + bprocent + "%;";
			}
			else if (iloscg < maxiloscr || iloscb < maxiloscr)
			{
				var alert = document.createElement("div"); 
				alert.id = "Alert";
				alert.innerHTML = "Nie masz tylu kolorów!";
				document.getElementById("APokaz").appendChild(alert);
				function AlertW()
				{
					document.getElementById("APokaz").innerHTML = "";
				}
				setTimeout(AlertW, 1200);
			}
		}
	}
	else if (testr > 0)
	{
		document.getElementById("RPokaz").innerHTML = "";
		document.getElementById("RSPokaz").innerHTML ="";
		document.getElementById("RS2Pokaz").innerHTML ="";
		document.getElementById("RS3Pokaz").innerHTML ="";
		document.getElementById("RMPokaz").innerHTML ="";
		document.getElementById("strzalkar").innerHTML = "\\/";
		testr = 0;
	}
}


document.getElementById("strzalkab").onclick = function()
{
	if (testb == 0)
	{
	var bpokazany = document.createElement("div"); 
	bpokazany.id = "BPrzyrost";
	bpokazany.innerHTML = '1<img src="kulkab.png" id="kulkab" />';
	document.getElementById("BPokaz").appendChild(bpokazany);
	document.getElementById("strzalkab").innerHTML = "/\\";
	testb = testb + 1;
	document.getElementById("BPrzyrost").onclick = function()
		{
			if (iloscb < maxiloscb)
			{
			iloscb = iloscb + 1;
			var bprocent = (iloscb / maxiloscb) * 100;
			document.getElementById("pasekb").style = "width: " + bprocent + "%;";
			document.getElementById("pasekb").innerHTML = iloscb.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
			}
			if (iloscb >= maxiloscb)
			{
				iloscb == maxiloscb;
				var bprocent = (iloscb / maxiloscb) * 100;
				document.getElementById("pasekb").style = "width: " + bprocent + "%;";
				document.getElementById("pasekb").innerHTML = iloscb.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
			}
		}
	var bspokazany = document.createElement("div");
	bspokazany.id = "BSPrzyrost";
	bspokazany.innerHTML = '+1<img src="kulkab.png" id="kulkab" />/s<br />-' + fbbcost.toFixed(0) + '<img src="kulkar.png" id="kulkar" /><br />-' + fbbcost.toFixed(0) +'<img src="kulkag.png" id="kulkag" />';
	document.getElementById("BSPokaz").appendChild(bspokazany);
	document.getElementById("BSPrzyrost").onclick = function()
		{
			if (iloscr >= fbbcost && iloscg >= fbbcost)
			{
				iloscr = iloscr - fbbcost;
				iloscg = iloscg - fbbcost;
				fbbcount = fbbcount + 1;
				fbbcost = 5 * Math.pow(1.15, fbbcount);
				przyrostbnas = przyrostbnas + 1;
				var gprocent = (iloscg / maxiloscg) * 100;
				var rprocent = (iloscr / maxiloscr) * 100;
				var bprocent = (iloscb / maxiloscb) * 100;
				bspokazany.innerHTML = '+1<img src="kulkab.png" id="kulkab" />/s<br />-' + fbbcost.toFixed(0) + '<img src="kulkar.png" id="kulkar" /><br />-' + fbbcost.toFixed(0) +'<img src="kulkag.png" id="kulkag" />';
				document.getElementById("pasekg").innerHTML = iloscg.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
				document.getElementById("pasekr").innerHTML = iloscr.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
				document.getElementById("pasekb").innerHTML = iloscb.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
				document.getElementById("pasekg").style = "width: " + gprocent + "%;";
				document.getElementById("pasekr").style = "width: " + rprocent + "%;";
			}
			else if (iloscr < fbbcost || iloscg < fbbcost)
			{
				var alert = document.createElement("div"); 
				alert.id = "Alert";
				alert.innerHTML = "Nie masz tylu kolorów!";
				document.getElementById("APokaz").appendChild(alert);
				function AlertW()
				{
					document.getElementById("APokaz").innerHTML = "";
				}
				setTimeout(AlertW, 1200);
			}
		}
	var bs2pokazany = document.createElement("div");
	bs2pokazany.id = "BS2Przyrost";
	bs2pokazany.innerHTML = '+10<img src="kulkab.png" id="kulkab" />/s<br />-' + sbbcost.toFixed(0) + '<img src="kulkar.png" id="kulkar" /><br />-' + sbbcost.toFixed(0) +'<img src="kulkag.png" id="kulkag" />';
	document.getElementById("BS2Pokaz").appendChild(bs2pokazany);
	document.getElementById("BS2Przyrost").onclick = function()
		{
			if (iloscr >= sbbcost && iloscg >= sbbcost)
			{
				iloscr = iloscr - sbbcost;
				iloscg = iloscg - sbbcost;
				sbbcount = sbbcount + 1;
				sbbcost = 150 * Math.pow(1.15, sbbcount);
				przyrostbnas = przyrostbnas + 10;
				var gprocent = (iloscg / maxiloscg) * 100;
				var rprocent = (iloscr / maxiloscr) * 100;
				var bprocent = (iloscb / maxiloscb) * 100;
				bs2pokazany.innerHTML = '+10<img src="kulkab.png" id="kulkab" />/s<br />-' + sbbcost.toFixed(0) + '<img src="kulkar.png" id="kulkar" /><br />-' + sbbcost.toFixed(0) +'<img src="kulkag.png" id="kulkag" />';
				document.getElementById("pasekg").innerHTML = iloscg.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
				document.getElementById("pasekr").innerHTML = iloscr.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
				document.getElementById("pasekb").innerHTML = iloscb.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
				document.getElementById("pasekg").style = "width: " + gprocent + "%;";
				document.getElementById("pasekr").style = "width: " + rprocent + "%;";
			}
			else if (iloscr < sbbcost || iloscg < sbbcost)
			{
				var alert = document.createElement("div"); 
				alert.id = "Alert";
				alert.innerHTML = "Nie masz tylu kolorów!";
				document.getElementById("APokaz").appendChild(alert);
				function AlertW()
				{
					document.getElementById("APokaz").innerHTML = "";
				}
				setTimeout(AlertW, 1200);
			}
		}
	var bs3pokazany = document.createElement("div");
	bs3pokazany.id = "BS3Przyrost";
	bs3pokazany.innerHTML = '+100<img src="kulkab.png" id="kulkab" />/s<br />-' + tbbcost.toFixed(0) + '<img src="kulkar.png" id="kulkar" /><br />-' + tbbcost.toFixed(0) +'<img src="kulkag.png" id="kulkag" />';
	document.getElementById("BS3Pokaz").appendChild(bs3pokazany);
	document.getElementById("BS3Przyrost").onclick = function()
		{
			if (iloscr >= tbbcost && iloscg >= tbbcost)
			{
				iloscr = iloscr - tbbcost;
				iloscg = iloscg - tbbcost;
				tbbcount = tbbcount + 1;
				tbbcost = 5000 * Math.pow(1.15, tbbcount);
				przyrostbnas = przyrostbnas + 100;
				var gprocent = (iloscg / maxiloscg) * 100;
				var rprocent = (iloscr / maxiloscr) * 100;
				var bprocent = (iloscb / maxiloscb) * 100;
				bs3pokazany.innerHTML = '+100<img src="kulkab.png" id="kulkab" />/s<br />-' + tbbcost.toFixed(0) + '<img src="kulkar.png" id="kulkar" /><br />-' + tbbcost.toFixed(0) +'<img src="kulkag.png" id="kulkag" />';
				document.getElementById("pasekg").innerHTML = iloscg.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
				document.getElementById("pasekr").innerHTML = iloscr.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
				document.getElementById("pasekb").innerHTML = iloscb.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
				document.getElementById("pasekg").style = "width: " + gprocent + "%;";
				document.getElementById("pasekr").style = "width: " + rprocent + "%;";
			}
			else if (iloscr < sbbcost || iloscg < sbbcost)
			{
				var alert = document.createElement("div"); 
				alert.id = "Alert";
				alert.innerHTML = "Nie masz tylu kolorów!";
				document.getElementById("APokaz").appendChild(alert);
				function AlertW()
				{
					document.getElementById("APokaz").innerHTML = "";
				}
				setTimeout(AlertW, 1200);
			}
		}
	var bmpokazany = document.createElement("div");
	bmpokazany.id = "BMUlepsz";
	hmaxiloscb = maxiloscb/2;
	bmpokazany.innerHTML = '+' + hmaxiloscb.toFixed(0) + '<img src="kulkab.png" id="kulkab" />/max<br />-' + maxiloscb.toFixed(0) + '<img src="kulkar.png" id="kulkar" /><br />-' + maxiloscb.toFixed(0) +'<img src="kulkag.png" id="kulkag" />';
	document.getElementById("BMPokaz").appendChild(bmpokazany);
	document.getElementById("BMUlepsz").onclick = function()
		{
			if (iloscr >= maxiloscb && iloscg >= maxiloscb)
			{
			iloscg = iloscg - maxiloscb;
			iloscr = iloscr - maxiloscb;
			hmaxiloscb = maxiloscb/2;
			maxiloscb = maxiloscb + hmaxiloscb;
			var gprocent = (iloscg / maxiloscg) * 100;
			var rprocent = (iloscr / maxiloscr) * 100;
			var bprocent = (iloscb / maxiloscb) * 100;
			document.getElementById("BMUlepsz").innerHTML = '+' + hmaxiloscb.toFixed(0) + '<img src="kulkab.png" id="kulkab" />/max<br />-' + maxiloscb.toFixed(0) + '<img src="kulkar.png" id="kulkar" /><br />-' + maxiloscb.toFixed(0) +'<img src="kulkag.png" id="kulkag" />';
			document.getElementById("pasekg").innerHTML = iloscg.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
			document.getElementById("pasekr").innerHTML = iloscr.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
			document.getElementById("pasekb").innerHTML = iloscb.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
			document.getElementById("pasekr").style = "width: " + rprocent + "%;";
			document.getElementById("pasekg").style = "width: " + gprocent + "%;";
			document.getElementById("pasekb").style = "width: " + bprocent + "%;";
			}
			else if (iloscr < maxiloscb || iloscg < maxiloscb)
			{
				var alert = document.createElement("div"); 
				alert.id = "Alert";
				alert.innerHTML = "Nie masz tylu kolorów!";
				document.getElementById("APokaz").appendChild(alert);
				function AlertW()
				{
					document.getElementById("APokaz").innerHTML = "";
				}
				setTimeout(AlertW, 1200);
			}
		}
	}
	else if (testb > 0)
	{
		document.getElementById("BPokaz").innerHTML = "";
		document.getElementById("BSPokaz").innerHTML = "";
		document.getElementById("BS2Pokaz").innerHTML = "";
		document.getElementById("BS3Pokaz").innerHTML = "";
		document.getElementById("BMPokaz").innerHTML = "";
		document.getElementById("strzalkab").innerHTML = "\\/";
		testb = 0;
	}
}

function StrzalkaY()
{
	if (TESTy == 1)
	{
		document.getElementById("strzalkay").onclick = function()
		{
			if (testy == 0)
			{
			var ypokazany = document.createElement("div"); 
			ypokazany.id = "YPrzyrost";
			ypokazany.innerHTML = '+1<img src="kulkay.png" id="kulkay" /><br />-10<img src="kulkar.png" id="kulkar" /><br />-10<img src="kulkag.png" id="kulkag" /><br />-10<img src="kulkab.png" id="kulkab" />';
			document.getElementById("YPokaz").appendChild(ypokazany);
			document.getElementById("strzalkay").innerHTML = "/\\";
			testy = testy + 1;
			document.getElementById("YPrzyrost").onclick = function()
				{
					if (iloscy < maxiloscy)
					{
						if (iloscr >= 10 && iloscg >= 10 && iloscb >= 10)
						{
						iloscr = iloscr - 10;
						iloscg = iloscg - 10;
						iloscb = iloscb - 10;
						iloscy = iloscy + 1;
						var yprocent = (iloscy / maxiloscy) * 100;
						document.getElementById("paseky").style = "width: " + yprocent + "%;";
						document.getElementById("paseky").innerHTML = iloscy.toFixed(0) + "/" + maxiloscy.toFixed(0) + '(' + przyrostynas.toFixed(0) + '/s)';
						}
						else
						{
							var alert = document.createElement("div"); 
							alert.id = "Alert";
							alert.innerHTML = "Nie masz tylu kolorów!";
							document.getElementById("APokaz").appendChild(alert);
							function AlertW()
							{
								document.getElementById("APokaz").innerHTML = "";
							}
							setTimeout(AlertW, 1200);
						}
					}
					if (iloscy >= maxiloscy)
					{
					iloscy == maxiloscy;
					var yprocent = (iloscy / maxiloscy) * 100;
					document.getElementById("paseky").style = "width: " + yprocent + "%;";
					document.getElementById("paseky").innerHTML = iloscy.toFixed(0) + "/" + maxiloscy.toFixed(0) + '(' + przyrostynas.toFixed(0) + '/s)';
					}
				}
				var yspokazany = document.createElement("div");
				yspokazany.id = "YSPrzyrost";
				yspokazany.innerHTML = '+1<img src="kulkay.png" id="kulkay" />/s<br />-' + fbycost.toFixed(0) + '<img src="kulkar.png" id="kulkar" /> & -1<img src="kulkar.png" id="kulkar" />/s (min. 1/s)<br />-' + fbycost.toFixed(0) +'<img src="kulkag.png" id="kulkag" /> & -1<img src="kulkag.png" id="kulkag" />/s (min. 1/s)<br />-' + fbycost.toFixed(0) +'<img src="kulkab.png" id="kulkab" /> & -1<img src="kulkab.png" id="kulkab" />/s (min. 1/s)';
				document.getElementById("YSPokaz").appendChild(yspokazany);
				document.getElementById("YSPrzyrost").onclick = function()
				{
					if (iloscr >= fbycost && iloscg >= fbycost && iloscb >= fbycost)
					{
						if (przyrostrnas >= 1 && przyrostgnas >= 1 && przyrostbnas >=1)
						{
							iloscr = iloscr - fbycost;
							iloscg = iloscg - fbycost;
							iloscb = iloscb - fbycost;
							przyrostrnas = przyrostrnas - 1;
							przyrostgnas = przyrostgnas - 1;
							przyrostbnas = przyrostbnas - 1;
							przyrostynas = przyrostynas + 1;
							fbycount = fbycount + 1;
							fbycost = 5 * Math.pow(1.15, fbycount);
							var gprocent = (iloscg / maxiloscg) * 100;
							var rprocent = (iloscr / maxiloscr) * 100;
							var bprocent = (iloscb / maxiloscb) * 100;
							var yprocent = (iloscy / maxiloscy) * 100;
							document.getElementById("pasekg").innerHTML = iloscg.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
							document.getElementById("pasekr").innerHTML = iloscr.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
							document.getElementById("pasekb").innerHTML = iloscb.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
							document.getElementById("paseky").innerHTML = iloscy.toFixed(0) + "/" + maxiloscy.toFixed(0) + '(' + przyrostynas.toFixed(0) + '/s)';
							document.getElementById("pasekr").style = "width: " + rprocent + "%;";
							document.getElementById("pasekb").style = "width: " + bprocent + "%;";
							document.getElementById("pasekg").style = "width: " + gprocent + "%;";
							document.getElementById("paseky").style = "width: " + yprocent + "%;";
							document.getElementById("YSPrzyrost").innerHTML = '+1<img src="kulkay.png" id="kulkay" />/s<br />-' + fbycost.toFixed(0) + '<img src="kulkar.png" id="kulkar" /> & -1<img src="kulkar.png" id="kulkar" />/s (min. 1/s)<br />-' + fbycost.toFixed(0) +'<img src="kulkag.png" id="kulkag" /> & -1<img src="kulkag.png" id="kulkag" />/s (min. 1/s)<br />-' + fbycost.toFixed(0) +'<img src="kulkab.png" id="kulkab" /> & -1<img src="kulkab.png" id="kulkab" />/s (min. 1/s)';
						}
						else
						{
							var alert = document.createElement("div"); 
							alert.id = "Alert";
							alert.innerHTML = "Nie zostały spełnione wszystkie wymagania!";
							document.getElementById("APokaz").appendChild(alert);
							function AlertW()
							{
								document.getElementById("APokaz").innerHTML = "";
							}
							setTimeout(AlertW, 1500);
						}
					}
					else
					{
						var alert = document.createElement("div"); 
						alert.id = "Alert";
						alert.innerHTML = "Nie masz tylu kolorów!";
						document.getElementById("APokaz").appendChild(alert);
						function AlertW()
						{
							document.getElementById("APokaz").innerHTML = "";
						}
						setTimeout(AlertW, 1200);
					}
				}
				var ys2pokazany = document.createElement("div");
				ys2pokazany.id = "YS2Przyrost";
				ys2pokazany.innerHTML = '+10<img src="kulkay.png" id="kulkay" />/s<br />-' + sbycost.toFixed(0) + '<img src="kulkar.png" id="kulkar" /> & -10<img src="kulkar.png" id="kulkar" />/s (min. 10/s)<br />-' + sbycost.toFixed(0) +'<img src="kulkag.png" id="kulkag" /> & -10<img src="kulkag.png" id="kulkag" />/s (min. 10/s)<br />-' + sbycost.toFixed(0) +'<img src="kulkab.png" id="kulkab" /> & -10<img src="kulkab.png" id="kulkab" />/s (min. 10/s)';
				document.getElementById("YS2Pokaz").appendChild(ys2pokazany);
				document.getElementById("YS2Przyrost").onclick = function()
				{
					if (iloscr >= sbycost && iloscg >= sbycost && iloscb >= sbycost)
					{
						if (przyrostrnas >= 10 && przyrostgnas >= 10 && przyrostbnas >=10)
						{
							iloscr = iloscr - sbycost;
							iloscg = iloscg - sbycost;
							iloscb = iloscb - sbycost;
							przyrostrnas = przyrostrnas - 10;
							przyrostgnas = przyrostgnas - 10;
							przyrostbnas = przyrostbnas - 10;
							przyrostynas = przyrostynas + 10;
							sbycount = sbycount + 1;
							sbycost = 150 * Math.pow(1.15, sbycount);
							var gprocent = (iloscg / maxiloscg) * 100;
							var rprocent = (iloscr / maxiloscr) * 100;
							var bprocent = (iloscb / maxiloscb) * 100;
							var yprocent = (iloscy / maxiloscy) * 100;
							document.getElementById("pasekg").innerHTML = iloscg.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
							document.getElementById("pasekr").innerHTML = iloscr.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
							document.getElementById("pasekb").innerHTML = iloscb.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
							document.getElementById("paseky").innerHTML = iloscy.toFixed(0) + "/" + maxiloscy.toFixed(0) + '(' + przyrostynas.toFixed(0) + '/s)';
							document.getElementById("pasekr").style = "width: " + rprocent + "%;";
							document.getElementById("pasekb").style = "width: " + bprocent + "%;";
							document.getElementById("pasekg").style = "width: " + gprocent + "%;";
							document.getElementById("paseky").style = "width: " + yprocent + "%;";
							document.getElementById("YS2Przyrost").innerHTML = '+10<img src="kulkay.png" id="kulkay" />/s<br />-' + sbycost.toFixed(0) + '<img src="kulkar.png" id="kulkar" /> & -10<img src="kulkar.png" id="kulkar" />/s (min. 10/s)<br />-' + sbycost.toFixed(0) +'<img src="kulkag.png" id="kulkag" /> & -10<img src="kulkag.png" id="kulkag" />/s (min. 10/s)<br />-' + sbycost.toFixed(0) +'<img src="kulkab.png" id="kulkab" /> & -10<img src="kulkab.png" id="kulkab" />/s (min. 10/s)';
						}
						else
						{
							var alert = document.createElement("div"); 
							alert.id = "Alert";
							alert.innerHTML = "Nie zostały spełnione wszystkie wymagania!";
							document.getElementById("APokaz").appendChild(alert);
							function AlertW()
							{
								document.getElementById("APokaz").innerHTML = "";
							}
							setTimeout(AlertW, 1500);
						}
					}
					else
					{
						var alert = document.createElement("div"); 
						alert.id = "Alert";
						alert.innerHTML = "Nie masz tylu kolorów!";
						document.getElementById("APokaz").appendChild(alert);
						function AlertW()
						{
							document.getElementById("APokaz").innerHTML = "";
						}
						setTimeout(AlertW, 1200);
					}
				}
				var ys3pokazany = document.createElement("div");
				ys3pokazany.id = "YS3Przyrost";
				ys3pokazany.innerHTML = '+100<img src="kulkay.png" id="kulkay" />/s<br />-' + tbycost.toFixed(0) + '<img src="kulkar.png" id="kulkar" /> & -100<img src="kulkar.png" id="kulkar" />/s (min. 100/s)<br />-' + tbycost.toFixed(0) +'<img src="kulkag.png" id="kulkag" /> & -100<img src="kulkag.png" id="kulkag" />/s (min. 100/s)<br />-' + tbycost.toFixed(0) +'<img src="kulkab.png" id="kulkab" /> & -100<img src="kulkab.png" id="kulkab" />/s (min. 100/s)';
				document.getElementById("YS3Pokaz").appendChild(ys3pokazany);
				document.getElementById("YS3Przyrost").onclick = function()
				{
					if (iloscr >= tbycost && iloscg >= tbycost && iloscb >= tbycost)
					{
						if (przyrostrnas >= 100 && przyrostgnas >= 100 && przyrostbnas >=100)
						{
							iloscr = iloscr - tbycost;
							iloscg = iloscg - tbycost;
							iloscb = iloscb - tbycost;
							przyrostrnas = przyrostrnas - 100;
							przyrostgnas = przyrostgnas - 100;
							przyrostbnas = przyrostbnas - 100;
							przyrostynas = przyrostynas + 100;
							tbycount = tbycount + 1;
							tbycost = 5000 * Math.pow(1.15, tbycount);
							var gprocent = (iloscg / maxiloscg) * 100;
							var rprocent = (iloscr / maxiloscr) * 100;
							var bprocent = (iloscb / maxiloscb) * 100;
							var yprocent = (iloscy / maxiloscy) * 100;
							document.getElementById("pasekg").innerHTML = iloscg.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
							document.getElementById("pasekr").innerHTML = iloscr.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
							document.getElementById("pasekb").innerHTML = iloscb.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
							document.getElementById("paseky").innerHTML = iloscy.toFixed(0) + "/" + maxiloscy.toFixed(0) + '(' + przyrostynas.toFixed(0) + '/s)';
							document.getElementById("pasekr").style = "width: " + rprocent + "%;";
							document.getElementById("pasekb").style = "width: " + bprocent + "%;";
							document.getElementById("pasekg").style = "width: " + gprocent + "%;";
							document.getElementById("paseky").style = "width: " + yprocent + "%;";
							document.getElementById("YS3Przyrost").innerHTML = '+100<img src="kulkay.png" id="kulkay" />/s<br />-' + tbycost.toFixed(0) + '<img src="kulkar.png" id="kulkar" /> & -100<img src="kulkar.png" id="kulkar" />/s (min. 100/s)<br />-' + tbycost.toFixed(0) +'<img src="kulkag.png" id="kulkag" /> & -100<img src="kulkag.png" id="kulkag" />/s (min. 100/s)<br />-' + tbycost.toFixed(0) +'<img src="kulkab.png" id="kulkab" /> & -100<img src="kulkab.png" id="kulkab" />/s (min. 100/s)';
						}
						else
						{
							var alert = document.createElement("div"); 
							alert.id = "Alert";
							alert.innerHTML = "Nie zostały spełnione wszystkie wymagania!";
							document.getElementById("APokaz").appendChild(alert);
							function AlertW()
							{
								document.getElementById("APokaz").innerHTML = "";
							}
							setTimeout(AlertW, 1500);
						}
					}
					else
					{
						var alert = document.createElement("div"); 
						alert.id = "Alert";
						alert.innerHTML = "Nie masz tylu kolorów!";
						document.getElementById("APokaz").appendChild(alert);
						function AlertW()
						{
							document.getElementById("APokaz").innerHTML = "";
						}
						setTimeout(AlertW, 1200);
					}
				}
				var ympokazany = document.createElement("div");
				ympokazany.id = "YMUlepsz";
				hmaxiloscy = maxiloscy/2;
				ympokazany.innerHTML = '+' + hmaxiloscy.toFixed(0) + '<img src="kulkay.png" id="kulkay" />/max<br />-' + maxiloscy.toFixed(0) + '<img src="kulkar.png" id="kulkar" /><br />-' + maxiloscy.toFixed(0) +'<img src="kulkag.png" id="kulkag" /><br />-' + maxiloscy.toFixed(0) +'<img src="kulkab.png" id="kulkab" />';
				document.getElementById("YMPokaz").appendChild(ympokazany);
				document.getElementById("YMUlepsz").onclick = function()
					{
						if (iloscr >= maxiloscy && iloscg >= maxiloscy && iloscb >= maxiloscy)
						{
						iloscg = iloscg - maxiloscy;
						iloscr = iloscr - maxiloscy;
						iloscb = iloscb - maxiloscy;
						hmaxiloscy = maxiloscy/2;
						maxiloscy = maxiloscy + hmaxiloscy;
						var gprocent = (iloscg / maxiloscg) * 100;
						var rprocent = (iloscr / maxiloscr) * 100;
						var bprocent = (iloscb / maxiloscb) * 100;
						var yprocent = (iloscy / maxiloscy) * 100;
						document.getElementById("YMUlepsz").innerHTML = '+' + hmaxiloscy.toFixed(0) + '<img src="kulkay.png" id="kulkay" />/max<br />-' + maxiloscy.toFixed(0) + '<img src="kulkar.png" id="kulkar" /><br />-' + maxiloscy.toFixed(0) +'<img src="kulkag.png" id="kulkag" /><br />-' + maxiloscy.toFixed(0) +'<img src="kulkab.png" id="kulkab" />';
						document.getElementById("pasekg").innerHTML = iloscg.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
						document.getElementById("pasekr").innerHTML = iloscr.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
						document.getElementById("pasekb").innerHTML = iloscb.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
						document.getElementById("paseky").innerHTML = iloscy.toFixed(0) + "/" + maxiloscy.toFixed(0) + '(' + przyrostynas.toFixed(0) + '/s)';
						document.getElementById("pasekr").style = "width: " + rprocent + "%;";
						document.getElementById("pasekg").style = "width: " + gprocent + "%;";
						document.getElementById("pasekb").style = "width: " + bprocent + "%;";
						document.getElementById("paseky").style = "width: " + yprocent + "%;";
						}
						else
						{
							var alert = document.createElement("div"); 
							alert.id = "Alert";
							alert.innerHTML = "Nie masz tylu kolorów!";
							document.getElementById("APokaz").appendChild(alert);
							function AlertW()
							{
								document.getElementById("APokaz").innerHTML = "";
							}
							setTimeout(AlertW, 1200);
						}
					}
			}
			else if (testy > 0)
			{
			document.getElementById("YPokaz").innerHTML = "";
			document.getElementById("YSPokaz").innerHTML = "";
			document.getElementById("YS2Pokaz").innerHTML = "";
			document.getElementById("YS3Pokaz").innerHTML = "";
			document.getElementById("YMPokaz").innerHTML = "";
			document.getElementById("strzalkay").innerHTML = "\\/";
			testy = 0;
			}
		}
	} 
	else if (TESTy == 0)
	{
	
	}
}
setInterval(StrzalkaY, 10);

function PerSecond()
{
	iloscr = iloscr + przyrostrnas / 20;
	iloscg = iloscg + przyrostgnas / 20;
	iloscb = iloscb + przyrostbnas / 20;
	var gprocent = (iloscg / maxiloscg) * 100;
	var rprocent = (iloscr / maxiloscr) * 100;
	var bprocent = (iloscb / maxiloscb) * 100;
	document.getElementById("pasekg").innerHTML = iloscg.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
	document.getElementById("pasekr").innerHTML = iloscr.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
	document.getElementById("pasekb").innerHTML = iloscb.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
	document.getElementById("pasekr").style = "width: " + rprocent + "%;";
	document.getElementById("pasekb").style = "width: " + bprocent + "%;";
	document.getElementById("pasekg").style = "width: " + gprocent + "%;";
	if (iloscr >= maxiloscr)
	{
		iloscr = maxiloscr;
		var rprocent = (iloscr / maxiloscr) * 100;
		document.getElementById("pasekr").innerHTML = iloscr.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
		document.getElementById("pasekr").style = "width: " + rprocent + "%;";
	}
	if (iloscg >= maxiloscg)
	{
		iloscg = maxiloscg;
		var gprocent = (iloscg / maxiloscg) * 100;
		document.getElementById("pasekg").innerHTML = iloscg.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
		document.getElementById("pasekg").style = "width: " + gprocent + "%;";
	}
	if (iloscb >= maxiloscb)
	{
		iloscb = maxiloscb;
		var bprocent = (iloscb / maxiloscb) * 100;
		document.getElementById("pasekb").innerHTML = iloscb.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
		document.getElementById("pasekb").style = "width: " + bprocent + "%;";
	}
}
setInterval(PerSecond, 50);
function PerSecondy()
{
	iloscy = iloscy + przyrostynas / 20;
	var yprocent = (iloscy / maxiloscy) * 100;
	document.getElementById("paseky").innerHTML = iloscy.toFixed(0) + "/" + maxiloscy.toFixed(0) + '(' + przyrostynas.toFixed(0) + '/s)';
	document.getElementById("paseky").style = "width: " + yprocent + "%;";
	if (iloscy >= maxiloscy)
	{
	iloscy = maxiloscy
	var yprocent = (iloscy / maxiloscy) * 100;
	document.getElementById("paseky").innerHTML = iloscy.toFixed(0) + "/" + maxiloscy.toFixed(0) + '(' + przyrostynas.toFixed(0) + '/s)';
	document.getElementById("paseky").style = "width: " + yprocent + "%;";
	}
}
setInterval(PerSecondy, 50);


document.getElementById("Upgrade1").onclick = function()
{
	if (iloscr >= Up1cost && iloscg >= Up1cost && iloscb >= Up1cost && TESTy == 0)
	{
		iloscr = iloscr - Up1cost;
		iloscg = iloscg - Up1cost;
		iloscb = iloscb - Up1cost;
		TESTy = 1;
		yprocent = (iloscy / maxiloscy) * 100;
		document.getElementById("UPGRADE1").innerHTML = "Kupione";
		var up1pokazany = document.createElement("div");
		up1pokazany.id = "progressy";
		var up1bpokazany = document.createElement("div");
		up1bpokazany.id = "paseky";
		up1bpokazany.role = "progressbar";
		up1bpokazany.style = "width: " + yprocent + "%;";
		up1bpokazany.style = "align: center;";
		up1bpokazany.innerHTML = iloscy.toFixed(0) + "/" + maxiloscy.toFixed(0) + '(' + przyrostynas.toFixed(0) + '/s)';
		var up1cpokazany = document.createElement("div");
		up1cpokazany.id = "strzalkay";
		up1cpokazany.innerHTML = "\\/";
		document.getElementById("UP1Pokaz").appendChild(up1pokazany);
		document.getElementById("progressy").appendChild(up1bpokazany);
		document.getElementById("ystrzalka").appendChild(up1cpokazany);
	}
	else if (TESTy == 1)
	{
		var alert = document.createElement("div"); 
		alert.id = "Alert";
		alert.innerHTML = "Juz to kupiles/as!";
		document.getElementById("APokaz").appendChild(alert);
		function AlertW()
		{
			document.getElementById("APokaz").innerHTML = "";
		}
		setTimeout(AlertW, 1200);
		document.getElementById("UPGRADE1").innerHTML = "Kupione";
	}
	else
	{
		var alert = document.createElement("div"); 
		alert.id = "Alert";
		alert.innerHTML = "Nie masz tylu kolorów!";
		document.getElementById("APokaz").appendChild(alert);
		function AlertW()
		{
			document.getElementById("APokaz").innerHTML = "";
		}
		setTimeout(AlertW, 1200);
	}
}


function save()
{
	var Save =
	{
		iloscg: iloscg, maxiloscg: maxiloscg, przyrostgnas: przyrostgnas, fbgcost: fbgcost, fbgcount: fbgcount, iloscr: iloscr, maxiloscr: maxiloscr, przyrostrnas: przyrostrnas, fbrcost: fbrcost, fbrcount: fbrcount, iloscb: iloscb, maxiloscb: maxiloscb, przyrostbnas: przyrostbnas, fbbcost: fbbcost, fbbcount: fbbcount, sbgcost: sbgcost, sbgcount: sbgcount, sbrcost: sbrcost, sbrcount: sbrcount, sbbcost: sbbcost, sbbcount: sbbcount, tbgcost: tbgcost, tbgcount: tbgcount, tbrcost: tbrcost, tbrcount: tbrcount, tbbcost: tbbcost, tbbcount: tbbcount, TESTy: TESTy, iloscy: iloscy, maxiloscy: maxiloscy, przyrostynas: przyrostynas, fbycost: fbycost, fbycount: fbycount, sbycost: sbycost, sbycount: sbycount, tbycost: tbycost, tbycount: tbycount
	}
	localStorage.setItem("Saved", JSON.stringify(Save));
}
function load()
{
	var SavedGame = JSON.parse(localStorage.getItem("Saved"));
	if (typeof SavedGame.iloscr !== "undefined") iloscr = SavedGame.iloscr;
	if (typeof SavedGame.iloscg !== "undefined") iloscg = SavedGame.iloscg;
	if (typeof SavedGame.iloscb !== "undefined") iloscb = SavedGame.iloscb;
	if (typeof SavedGame.iloscy !== "undefined") iloscy = SavedGame.iloscy;
	if (typeof SavedGame.maxiloscr !== "undefined") maxiloscr = SavedGame.maxiloscr;
	if (typeof SavedGame.maxiloscg !== "undefined") maxiloscg = SavedGame.maxiloscg;
	if (typeof SavedGame.maxiloscb !== "undefined") maxiloscb = SavedGame.maxiloscb;
	if (typeof SavedGame.maxiloscy !== "undefined") maxiloscy = SavedGame.maxiloscy;
	if (typeof SavedGame.przyrostrnas !== "undefined") przyrostrnas = SavedGame.przyrostrnas;
	if (typeof SavedGame.przyrostgnas !== "undefined") przyrostgnas = SavedGame.przyrostgnas;
	if (typeof SavedGame.przyrostbnas !== "undefined") przyrostbnas = SavedGame.przyrostbnas;
	if (typeof SavedGame.przyrostynas !== "undefined") przyrostynas = SavedGame.przyrostynas;
	if (typeof SavedGame.fbrcost !== "undefined") fbrcost = SavedGame.fbrcost;
	if (typeof SavedGame.fbgcost !== "undefined") fbgcost = SavedGame.fbgcost;
	if (typeof SavedGame.fbbcost !== "undefined") fbbcost = SavedGame.fbbcost;
	if (typeof SavedGame.fbycost !== "undefined") fbycost = SavedGame.fbycost;
	if (typeof SavedGame.sbrcost !== "undefined") sbrcost = SavedGame.sbrcost;
	if (typeof SavedGame.sbgcost !== "undefined") sbgcost = SavedGame.sbgcost;
	if (typeof SavedGame.sbbcost !== "undefined") sbbcost = SavedGame.sbbcost;
	if (typeof SavedGame.sbycost !== "undefined") sbycost = SavedGame.sbycost;
	if (typeof SavedGame.tbrcost !== "undefined") tbrcost = SavedGame.tbrcost;
	if (typeof SavedGame.tbgcost !== "undefined") tbgcost = SavedGame.tbgcost;
	if (typeof SavedGame.tbbcost !== "undefined") tbbcost = SavedGame.tbbcost;
	if (typeof SavedGame.tbycost !== "undefined") tbycost = SavedGame.tbycost;
	if (typeof SavedGame.fbrcount !== "undefined") fbrcount = SavedGame.fbrcount;
	if (typeof SavedGame.fbgcount !== "undefined") fbgcount = SavedGame.fbgcount;
	if (typeof SavedGame.fbbcount !== "undefined") fbbcount = SavedGame.fbbcount;
	if (typeof SavedGame.fbycount !== "undefined") fbycount = SavedGame.fbycount;
	if (typeof SavedGame.sbrcount !== "undefined") sbrcount = SavedGame.sbrcount;
	if (typeof SavedGame.sbgcount !== "undefined") sbgcount = SavedGame.sbgcount;
	if (typeof SavedGame.sbbcount !== "undefined") sbbcount = SavedGame.sbbcount;
	if (typeof SavedGame.sbycount !== "undefined") sbycount = SavedGame.sbycount;
	if (typeof SavedGame.tbrcount !== "undefined") tbrcount = SavedGame.tbrcount;
	if (typeof SavedGame.tbgcount !== "undefined") tbgcount = SavedGame.tbgcount;
	if (typeof SavedGame.tbbcount !== "undefined") tbbcount = SavedGame.tbbcount;
	if (typeof SavedGame.tbycount !== "undefined") fbycount = SavedGame.tbycount;
	if (typeof SavedGame.TESTy !== "undefined") TESTy = SavedGame.TESTy;
	var gprocent = (iloscg / maxiloscg) * 100;
	var rprocent = (iloscr / maxiloscr) * 100;
	var bprocent = (iloscb / maxiloscb) * 100;
	document.getElementById("pasekg").innerHTML = iloscg.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
	document.getElementById("pasekr").innerHTML = iloscr.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
	document.getElementById("pasekb").innerHTML = iloscb.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
	document.getElementById("pasekr").style = "width: " + rprocent + "%;";
	document.getElementById("pasekb").style = "width: " + bprocent + "%;";
	document.getElementById("pasekg").style = "width: " + gprocent + "%;";
	if (TESTy == 1)
	{
		yprocent = (iloscy / maxiloscy) * 100;
		document.getElementById("UPGRADE1").innerHTML = "Kupione";
		var up1pokazany = document.createElement("div");
		up1pokazany.id = "progressy";
		var up1bpokazany = document.createElement("div");
		up1bpokazany.id = "paseky";
		up1bpokazany.role = "progressbar";
		up1bpokazany.style = "width: " + yprocent + "%;";
		up1bpokazany.style = "align: center;";
		up1bpokazany.innerHTML = iloscy.toFixed(0) + "/" + maxiloscy.toFixed(0) + '(' + przyrostynas.toFixed(0) + '/s)';
		var up1cpokazany = document.createElement("div");
		up1cpokazany.id = "strzalkay";
		up1cpokazany.innerHTML = "\\/";
		document.getElementById("UP1Pokaz").appendChild(up1pokazany);
		document.getElementById("progressy").appendChild(up1bpokazany);
		document.getElementById("ystrzalka").appendChild(up1cpokazany);
	}
}
setInterval(save, 100);
document.getElementById("reset").onclick = function()
		{
			localStorage.clear();
			location.reload();
		}
