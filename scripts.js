var LetterCount = 0;
var LetterPlus = 1;
var LetterSecond = 0;
var ClickUpgradeCost = 100;
var PenCost = 20;
var PenCount = 0;
var PenUpgradeCost = 30;
var PenMult = 1;

function LettersCountTracker()
{
	LetterCount = LetterCount + LetterPlus;
	document.getElementById("ClickDiv").innerHTML = LetterCount.toFixed(2);
}

function LetterClickPlus()
{
	if (LetterCount >= ClickUpgradeCost)
	{
		LetterCount = LetterCount - ClickUpgradeCost;
		ClickUpgradeCost = ClickUpgradeCost * 2;
		LetterPlus = LetterPlus * 1.3;
		document.getElementById("ClickDiv").innerHTML = LetterCount.toFixed(2);
		document.getElementById("ClickButton").innerHTML = "+ " + LetterPlus.toFixed(1);
		document.getElementById("LetterClickPlusButton").innerHTML = ClickUpgradeCost.toFixed(0)  + " letters --> upgrade click";
	} 
	else
	{
		alert('You don\'t have enough letters!');
	}
}
// PER SECOND
function Pen()
{
	if (LetterCount >= PenCost)
	{
		LetterCount = LetterCount - PenCost;
		PenCost = PenCost * 1.075;
		PenCount = PenCount + 1;
		LetterSecond = PenCount * PenMult;
		document.getElementById("ClickDiv").innerHTML = LetterCount.toFixed(2);
		document.getElementById("PerSecond").innerHTML = LetterSecond.toFixed(2);
		document.getElementById("PenButton").innerHTML = PenCost.toFixed(0) + " letters --> +" + PenMult.toFixed(2) + " letters per second";
	}
	else
	{
		alert('You don\'t have enough letters!');
	}
}

function PenWork()
{
	LetterCount = LetterCount + LetterSecond / 13.333;
	document.getElementById("ClickDiv").innerHTML = LetterCount.toFixed(2);
}
setInterval(PenWork, 75);

function UpgradePenfunc()
{
	if (LetterCount >= PenUpgradeCost)
	{
		LetterCount = LetterCount - PenUpgradeCost;
		PenUpgradeCost = PenUpgradeCost * 1.075;
		PenMult = PenMult + 0.05 * 1.01;
		LetterSecond = PenCount * PenMult;
		document.getElementById("ClickDiv").innerHTML = LetterCount.toFixed(2);
		document.getElementById("PerSecond").innerHTML = LetterSecond.toFixed(2);
		document.getElementById("PenButton").innerHTML = PenCost.toFixed(0) + " letters --> +" + PenMult.toFixed(2) + " letters per second";
		document.getElementById("UpgradePen").innerHTML = PenUpgradeCost.toFixed(0) + " letters --> pens upgrade";
	}
	else
	{
		alert('You don\'t have enough letters!');
	}
}

function save()
{
	var Save =
	{
		LetterCount: LetterCount, LetterPlus: LetterPlus, LetterSecond: LetterSecond, ClickUpgradeCost: ClickUpgradeCost, PenCost: PenCost, PenCount: PenCount, PenUpgradeCost: PenUpgradeCost, PenMult: PenMult
	}
	localStorage.setItem("Saved", JSON.stringify(Save));
}

function load()
{
	var SavedGame = JSON.parse(localStorage.getItem("Saved"));
	if (typeof SavedGame.LetterCount !== "undefined") LetterCount = SavedGame.LetterCount;
	if (typeof SavedGame.LetterPlus !== "undefined") LetterPlus = SavedGame.LetterPlus;
	if (typeof SavedGame.LetterSecond !== "undefined") LetterSecond = SavedGame.LetterSecond;
	if (typeof SavedGame.ClickUpgradeCost !== "undefined") ClickUpgradeCost = SavedGame.ClickUpgradeCost;
	if (typeof SavedGame.PenCost !== "undefined") PenCost = SavedGame.PenCost;
	if (typeof SavedGame.PenCount !== "undefined") PenCount = SavedGame.PenCount;
	if (typeof SavedGame.PenUpgradeCost !== "undefined") PenUpgradeCost = SavedGame.PenUpgradeCost;
	if (typeof SavedGame.PenMult !== "undefined") PenMult = SavedGame.PenMult;
	document.getElementById("ClickDiv").innerHTML = LetterCount.toFixed(2);
	document.getElementById("ClickButton").innerHTML = "+ " + LetterPlus.toFixed(1);
	document.getElementById("LetterClickPlusButton").innerHTML = ClickUpgradeCost.toFixed(0)  + " letters --> upgrade click";
	document.getElementById("PenButton").innerHTML = PenCost.toFixed(0) + " letters --> +" + PenMult.toFixed(2) + " letters per second";
	document.getElementById("UpgradePen").innerHTML = PenUpgradeCost.toFixed(0) + " letters --> pens upgrade";
	document.getElementById("PerSecond").innerHTML = LetterSecond.toFixed(2);
}
setInterval(save, 1000);

function reset()
		{
			localStorage.clear();
			location.reload();
		}