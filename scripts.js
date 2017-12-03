var iloscg = 1;
var maxiloscg = 100;
var przyrostgnas = 0;
var przyrostg = 1;
var fbgcost = 5;
var fbgcount = 0;

var iloscr = 1;
var maxiloscr = 100;
var przyrostrnas = 0;
var przyrostr = 1;
var fbrcost = 5;
var fbrcount = 0;

var iloscb = 1;
var maxiloscb = 100;
var przyrostb = 1;
var przyrostbnas = 0;
var fbbcost = 5;
var fbbcount = 0;

var testg = 0;
var testr = 0;
var testb = 0;



document.getElementById("strzalkag").onclick = function()
{
	if (testg == 0)
	{
	var gpokazany = document.createElement("div"); 
	gpokazany.id = "GPrzyrost";
	gpokazany.innerHTML = przyrostg + '<img src="cynka02.github.io/kulkag.png" id="kulkag" />';
	var gpokazanyp = document.getElementById("GPokaz"); 
	gpokazanyp.appendChild(gpokazany);
	document.getElementById("strzalkag").innerHTML = "/\\";
	testg = testg + 1;
	document.getElementById("GPrzyrost").onclick = function()
		{
			if (iloscg < maxiloscg)
			{
			var GPASEK = document.getElementById("pasekg");
			iloscg = iloscg+przyrostg;
			var gprocent = (iloscg / maxiloscg) * 100;
			GPASEK.style = "width: " + gprocent.toFixed(0) + "%;";
			GPASEK.innerHTML = gprocent.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
			}
			if (iloscg >= maxiloscg)
			{
				iloscg == maxiloscg;
				var GPASEK = document.getElementById("pasekg");
				var gprocent = (iloscg / maxiloscg) * 100;
				GPASEK.style = "width: " + gprocent.toFixed(0) + "%;";
				GPASEK.innerHTML = gprocent.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
			}
		}
	var gspokazany = document.createElement("div");
	gspokazany.id = "GSPrzyrost";
	gspokazany.innerHTML = '+1<img src="kulkag.png" id="kulkag" />/s<br />-' + fbgcost.toFixed(0) + '<img src="kulkar.png" id="kulkar" /><br />-' + fbgcost.toFixed(0) +'<img src="kulkab.png" id="kulkab" />';
	var gspokazanyp = document.getElementById("GSPokaz");
	gspokazanyp.appendChild(gspokazany);
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
				document.getElementById("pasekg").innerHTML = gprocent.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
				document.getElementById("pasekr").innerHTML = rprocent.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
				document.getElementById("pasekb").innerHTML = bprocent.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
				document.getElementById("pasekr").style = "width: " + rprocent.toFixed(0) + "%;";
				document.getElementById("pasekb").style = "width: " + bprocent.toFixed(0) + "%;";
			}
			else if (iloscr < fbgcost || iloscb < fbgcost)
			{
				alert("Nie masz tyle kolorków aby to kupić!");
			}
		}
	}
	else if (testg > 0)
	{
		document.getElementById("GPokaz").innerHTML = "";
		document.getElementById("GSPokaz").innerHTML ="";
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
	rpokazany.innerHTML = przyrostr + '<img src="kulkar.png" id="kulkar" />';
	var rpokazanyp = document.getElementById("RPokaz"); 
	rpokazanyp.appendChild(rpokazany);
	document.getElementById("strzalkar").innerHTML = "/\\";
	testr = testr + 1;
	document.getElementById("RPrzyrost").onclick = function()
		{
			if (iloscr < maxiloscr)
			{
			var RPASEK = document.getElementById("pasekr");
			iloscr = iloscr+przyrostr;
			var rprocent = (iloscr / maxiloscr) * 100;
			RPASEK.style = "width: " + rprocent.toFixed(0) + "%;";
			RPASEK.innerHTML = rprocent.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
			}
			if (iloscr >= maxiloscr)
			{
				iloscr == maxiloscr;
				var RPASEK = document.getElementById("pasekr");
				var rprocent = (iloscr / maxiloscr) * 100;
				RPASEK.style = "width: " + rprocent.toFixed(0) + "%;";
				RPASEK.innerHTML = rprocent.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
			}
		}
	var rspokazany = document.createElement("div");
	rspokazany.id = "RSPrzyrost";
	rspokazany.innerHTML = '+1<img src="kulkar.png" id="kulkar" />/s<br />-' + fbrcost.toFixed(0) + '<img src="kulkag.png" id="kulkag" /><br />-' + fbrcost.toFixed(0) +'<img src="kulkab.png" id="kulkab" />';
	var rspokazanyp = document.getElementById("RSPokaz");
	rspokazanyp.appendChild(rspokazany);
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
				document.getElementById("pasekg").innerHTML = gprocent.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
				document.getElementById("pasekr").innerHTML = rprocent.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
				document.getElementById("pasekb").innerHTML = bprocent.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
				document.getElementById("pasekg").style = "width: " + gprocent.toFixed(0) + "%;";
				document.getElementById("pasekb").style = "width: " + bprocent.toFixed(0) + "%;";
			}
			else if (iloscg < fbrcost || iloscb < fbrcost)
			{
				alert("Nie masz tyle kolorków aby to kupić!");
			}
		}
	}
	else if (testr > 0)
	{
		document.getElementById("RPokaz").innerHTML = "";
		document.getElementById("RSPokaz").innerHTML ="";
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
	bpokazany.innerHTML = przyrostb + '<img src="kulkab.png" id="kulkab" />';
	var bpokazanyp = document.getElementById("BPokaz"); 
	bpokazanyp.appendChild(bpokazany);
	document.getElementById("strzalkab").innerHTML = "/\\";
	testb = testb + 1;
	document.getElementById("BPrzyrost").onclick = function()
		{
			if (iloscb < maxiloscb)
			{
			var BPASEK = document.getElementById("pasekb");
			iloscb = iloscb + przyrostb;
			var bprocent = (iloscb / maxiloscb) * 100;
			BPASEK.style = "width: " + bprocent.toFixed(0) + "%;";
			BPASEK.innerHTML = bprocent.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
			}
			if (iloscb >= maxiloscb)
			{
				iloscb == maxiloscb;
				var BPASEK = document.getElementById("pasekb");
				var bprocent = (iloscb / maxiloscb) * 100;
				BPASEK.style = "width: " + bprocent.toFixed(0) + "%;";
				BPASEK.innerHTML = bprocent.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
			}
		}
	var bspokazany = document.createElement("div");
	bspokazany.id = "BSPrzyrost";
	bspokazany.innerHTML = '+1<img src="kulkab.png" id="kulkab" />/s<br />-' + fbbcost.toFixed(0) + '<img src="kulkar.png" id="kulkar" /><br />-' + fbbcost.toFixed(0) +'<img src="kulkag.png" id="kulkag" />';
	var bspokazanyp = document.getElementById("BSPokaz");
	bspokazanyp.appendChild(bspokazany);
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
				document.getElementById("pasekg").innerHTML = gprocent.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
				document.getElementById("pasekr").innerHTML = rprocent.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
				document.getElementById("pasekb").innerHTML = bprocent.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
				document.getElementById("pasekg").style = "width: " + gprocent.toFixed(0) + "%;";
				document.getElementById("pasekr").style = "width: " + rprocent.toFixed(0) + "%;";
			}
			else if (iloscr < fbbcost || iloscg < fbbcost)
			{
				alert("Nie masz tyle kolorków aby to kupić!");
			}
		}
	}
	else if (testb > 0)
	{
		document.getElementById("BPokaz").innerHTML = "";
		document.getElementById("BSPokaz").innerHTML = "";
		document.getElementById("strzalkab").innerHTML = "\\/";
		testb = 0;
	}
}

function PerSecond()
{
	iloscr = iloscr + przyrostrnas / 20;
	iloscg = iloscg + przyrostgnas / 20;
	iloscb = iloscb + przyrostbnas / 20;
	var gprocent = (iloscg / maxiloscg) * 100;
	var rprocent = (iloscr / maxiloscr) * 100;
	var bprocent = (iloscb / maxiloscb) * 100;
	document.getElementById("pasekg").innerHTML = gprocent.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
	document.getElementById("pasekr").innerHTML = rprocent.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
	document.getElementById("pasekb").innerHTML = bprocent.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
	document.getElementById("pasekr").style = "width: " + rprocent.toFixed(1) + "%;";
	document.getElementById("pasekb").style = "width: " + bprocent.toFixed(1) + "%;";
	document.getElementById("pasekg").style = "width: " + gprocent.toFixed(1) + "%;";
	if (iloscr >= maxiloscr)
	{
		iloscr = maxiloscr;
		var rprocent = (iloscr / maxiloscr) * 100;
		document.getElementById("pasekr").innerHTML = rprocent.toFixed(0) + "/" + maxiloscr.toFixed(0) + '(' + przyrostrnas.toFixed(0) + '/s)';
		document.getElementById("pasekr").style = "width: " + rprocent.toFixed(1) + "%;";
	}
	if (iloscg >= maxiloscg)
	{
		iloscg = maxiloscg;
		var gprocent = (iloscg / maxiloscg) * 100;
		document.getElementById("pasekg").innerHTML = gprocent.toFixed(0) + "/" + maxiloscg.toFixed(0) + '(' + przyrostgnas.toFixed(0) + '/s)';
		document.getElementById("pasekg").style = "width: " + gprocent.toFixed(1) + "%;";
	}
	if (iloscb >= maxiloscb)
	{
		iloscb = maxiloscb;
		var bprocent = (iloscb / maxiloscb) * 100;
		document.getElementById("pasekb").innerHTML = bprocent.toFixed(0) + "/" + maxiloscb.toFixed(0) + '(' + przyrostbnas.toFixed(0) + '/s)';
		document.getElementById("pasekb").style = "width: " + bprocent.toFixed(1) + "%;";
	}
}
setInterval(PerSecond, 50);
