//Letters

var LetterCount = 0;
var LetterPlus = 1;
var LetterSecondMinus = 0;
var LetterSecond = 0;
var ClickUpgradeCost = 100;
var PenCost = 20;
var PenCount = 0;
var PenUpgradeCost = 5;
var PenMult = 1;
var MaxLetterCount = 1000;
var LetterClickTracker = 0;

//Pages

var PageCount = 0;
var PageSecond = 0;
var PageSecondMinus = 0;
var PrinterCost = 15;
var PrinterCount = 0;
var PrinterUpgradeCost = 5;
var PrinterMult = 1;
var MaxPageCount = 1000;
var PageClickTracker = 0;

//******


//******


//CLICK CLICK CLICK ---------------------------------------------------------


	function LettersCountTracker()
	{
		LetterCount = LetterCount + LetterPlus;
		LetterClickTracker = LetterClickTracker + 1;
		document.getElementById("ClickDiv").innerHTML = LetterCount.toFixed(0) + "/" + MaxLetterCount;
	}
	function LetterClickTrackerfunc()
	{
		LetterClickTracker = LetterClickTracker - 1;
	}
	setInterval(LetterClickTrackerfunc, 10);
		
		
				function PagePlusTracker()
				{
					if (LetterCount >= 500)
					{
					PageCount = PageCount + 1;
					LetterCount = LetterCount - 500;
					PageClickTracker = PageClickTracker + 1;
					document.getElementById("ClickPage").innerHTML = PageCount.toFixed(0) + "/" + MaxPageCount;
					}
					else
					{
						alert('You don\'t have enough letters!');
					}
				}
				function PageClickTrackerfunc()
				{
					PageClickTracker = PageClickTracker - 1;
				}
				setInterval(PageClickTrackerfunc, 10);


//LETTER UPGRADE CLICK -------------------------------------------------------------------


function LetterClickPlus()
{
	if (LetterCount >= ClickUpgradeCost)
	{
		LetterCount = LetterCount - ClickUpgradeCost;
		ClickUpgradeCost = ClickUpgradeCost * 10;
		LetterPlus = LetterPlus * 10;
		document.getElementById("ClickDiv").innerHTML = LetterCount.toFixed(0) + "/" + MaxLetterCount;
		document.getElementById("ClickButton").innerHTML = "+ " + LetterPlus.toFixed(0);
		document.getElementById("LetterClickPlusButton").innerHTML = ClickUpgradeCost.toFixed(0)  + " letters <br /><strong>Click x10</strong>";
	} 
	else
	{
		alert('You don\'t have enough letters!');
	}
}


//COLORS -------------------------------------------------------------------


function ColorsClickUpgrade()
{
	if (LetterCount >= ClickUpgradeCost)
	{
		var clickcolor = document.getElementById("LetterClickPlusButton");
		with (clickcolor.style)
		{
			paddingLeft = "5px";
			paddingRight = "5px";
			textAlign = "center";
			verticalAlign = "middle";
			width = "80%";
			height = "80%";
			fontSize = "16px";
			backgroundColor = "#68ff68";
			borderStyle = "none";
		}
	}
	else if (LetterCount < ClickUpgradeCost)
	{
		var clickcolor = document.getElementById("LetterClickPlusButton");
		with (clickcolor.style)
		{
			paddingLeft = "5px";
			paddingRight = "5px";
			textAlign = "center";
			verticalAlign = "middle";
			width = "80%";
			height = "80%";
			fontSize = "16px";
			backgroundColor = "#f75353";
			borderStyle = "none";
		}
	}
}
setInterval(ColorsClickUpgrade, 500);
function ColorsPen()
{
	if (LetterCount >= PenCost)
	{
		var pencolor = document.getElementById("PenButton");
		with (pencolor.style)
		{
			paddingLeft = "5px";
			paddingRight = "5px";
			textAlign = "center";
			verticalAlign = "middle";
			width = "80%";
			height = "80%";
			fontSize = "16px";
			backgroundColor = "#68ff68";
			borderStyle = "none";
		}
	}
	else if (LetterCount < PenCost)
	{
		var pencolor = document.getElementById("PenButton");
		with (pencolor.style)
		{
			paddingLeft = "5px";
			paddingRight = "5px";
			textAlign = "center";
			verticalAlign = "middle";
			width = "80%";
			height = "80%";
			fontSize = "16px";
			backgroundColor = "#f75353";
			borderStyle = "none";
		}
	}
}
setInterval(ColorsPen, 500);
function ColorsUpgradePen()
{
	if (PageCount >= PenUpgradeCost)
	{
		var penupgradecolor = document.getElementById("UpgradePen");
		with (penupgradecolor.style)
		{
			paddingLeft = "5px";
			paddingRight = "5px";
			textAlign = "center";
			verticalAlign = "middle";
			width = "80%";
			height = "80%";
			fontSize = "16px";
			backgroundColor = "#68ff68";
			borderStyle = "none";
		}
	}
	else if (PageCount < PenUpgradeCost)
	{
		var penupgradecolor = document.getElementById("UpgradePen");
		with (penupgradecolor.style)
		{
			paddingLeft = "5px";
			paddingRight = "5px";
			textAlign = "center";
			verticalAlign = "middle";
			width = "80%";
			height = "80%";
			fontSize = "16px";
			backgroundColor = "#f75353";
			borderStyle = "none";
		}
	}
}
setInterval(ColorsUpgradePen, 500);


//PER SECOND --------------------------------------------------------------


	function Pen()
	{
		if (LetterCount >= PenCost)
		{
			LetterCount = LetterCount - PenCost;
			PenCost = PenCost * 1.05;
			PenCount = PenCount + 1;
			LetterSecond = PenCount * PenMult;
			document.getElementById("ClickDiv").innerHTML = LetterCount.toFixed(0) + "/" + MaxLetterCount;
			document.getElementById("PerSecond").innerHTML = LetterSecond.toFixed(2);
			document.getElementById("PenButton").innerHTML = PenCost.toFixed(0) + " letters<br /><strong>1 Pen (" + PenMult.toFixed(2) + "/s)</strong>";
		}
		else
		{
			alert('You don\'t have enough letters!');
		}
	}
	function PenWork()
	{
		LetterCount = LetterCount + LetterSecond / 10;
		LetterSecond = LetterSecond - LetterSecondMinus /100;
		document.getElementById("ClickDiv").innerHTML = LetterCount.toFixed(0) + "/" + MaxLetterCount;
		document.getElementById("PerSecond").innerHTML = LetterSecond.toFixed(2);
	}
	setInterval(PenWork, 100);
				
				
		/*		function Printer()     ----------- DOKONCZYC
				{
					if (PageCount >= PrinterCost)
					{
						PageCount = PageCount - PrinterCost;
						PrinterCost = PrinterCost * 1.05;
						PrinterCount = PrinterCount + 1;
						PageSecond = PrinterCount * PrinterMult;
						LetterSecondMinus = PrinterCount * 500;
						document.getElementById("ClickPage").innerHTML = PageCount.toFixed(0) + "/" + MaxPageCount;
						document.getElementById("PerSecondPage").innerHTML = PageSecond.toFixed(2);
						document.getElementById("PrinterButton").innerHTML = PrinterCost.toFixed(0) + " pages<br /><strong>1 Printer (" + PrinterMult.toFixed(2) + "/s)</strong>"
					}
					else
					{
						alert('You don\'t have enough pages!');
					}
				}
				function PrinterWork()
				{
					if (LetterCount > 0 && PrinterCount >= 1)
					{
					PagesCount = PageCount + PageSecond / 100;
					LetterCount = LetterCount - LetterSecondMinus / 100;
					document.getElementById("ClickPage").innerHTML = PageCount.toFixed(2) + "/" + 		MaxPageCount;
					document.getElementById("ClickDiv").innerHTML = LetterCount.toFixed(0) + "/" + MaxLetterCount;
					clearTimeout(PrinterWork);
					}
					if (LetterCount <= 0 && PrinterCount >= 1)
					{
						setTimeout(PrinterWork, 1000);
					}
				}
			setInterval(PrinterWork, 100); */
	
// MAX VALUES -------------------------------------------------------------

function MaxLetters()
{
	if (LetterCount > MaxLetterCount)
	{
		if (LetterSecond == 0 || LetterClickTracker == 1)
		{
			LetterCount = MaxLetterCount;
			document.getElementById("ClickDiv").innerHTML = LetterCount.toFixed(0) + "/" + MaxLetterCount;
		}
		if (LetterSecond >= 1 || LetterClickTracker == 0)
		{
			LetterCount = MaxLetterCount;
			document.getElementById("ClickDiv").innerHTML = LetterCount.toFixed(0) + "/" + MaxLetterCount;
		}
		if (LetterSecond >= 1 || LetterClickTracker == 1)
		{
			LetterCount = MaxLetterCount;
			document.getElementById("ClickDiv").innerHTML = LetterCount.toFixed(0) + "/" + MaxLetterCount;
		}
	}
}
setInterval(MaxLetters, 0.0001);
function MaxPages()
{
	if (PageCount > MaxPageCount)
	{
		if (PageSecond == 0 || PageClickTracker == 1)
		{
			PageCount = MaxPageCount;
			document.getElementById("ClickPage").innerHTML = PageCount.toFixed(0) + "/" + MaxPageCount;
		}
		if (PageSecond >= 1 || PageClickTracker == 0)
		{
			PageCount = MaxPageCount;
			document.getElementById("ClickPage").innerHTML = PageCount.toFixed(0) + "/" + MaxPageCount;
		}
		if (PageSecond >= 1 || PageClickTracker == 1)
		{
			PageCount = MaxPageCount;
			document.getElementById("ClickPage").innerHTML = PageCount.toFixed(0) + "/" + MaxPageCount;
		}
	}
}
setInterval(MaxPages, 0.0001);


//UPGRADES -----------------------------------------------------------------------------------


function UpgradePenfunc()
{
	if (PageCount >= PenUpgradeCost)
	{
		PageCount = PageCount - PenUpgradeCost;
		PenUpgradeCost = PenUpgradeCost * 1.075;
		PenMult = PenMult + 0.05 * 1.01;
		LetterSecond = PenCount * PenMult;
		document.getElementById("ClickPage").innerHTML = PageCount.toFixed(0) + "/" + MaxPageCount;
		document.getElementById("PerSecond").innerHTML = LetterSecond.toFixed(2);
		document.getElementById("PenButton").innerHTML = PenCost.toFixed(0) + " letters<br /><strong>1 Pen (" + PenMult.toFixed(2) + "/s)</strong>";
		document.getElementById("UpgradePen").innerHTML = PenUpgradeCost.toFixed(0) + " pages<br /><strong>Pens upgrade</strong>";
	}
	else
	{
		alert('You don\'t have enough pages!');
	}
}

function save()
{
	var Save =
	{
		LetterCount: LetterCount, LetterPlus: LetterPlus, LetterSecond: LetterSecond, ClickUpgradeCost: ClickUpgradeCost, PenCost: PenCost, PenCount: PenCount, PenUpgradeCost: PenUpgradeCost, PenMult: PenMult, MaxLetterCount: MaxLetterCount, PageCount: PageCount, PageSecond: PageSecond, PrinterCost: PrinterCost, PrinterCount: PrinterCount, PrinterUpgradeCost: PrinterUpgradeCost, PrinterMult: PrinterMult, MaxPageCount: MaxPageCount,
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
	if (typeof SavedGame.MaxLetterCount !== "undefined") MaxLetterCount = SavedGame.MaxLetterCount;
	if (typeof SavedGame.PageCount !== "undefined") PageCount = SavedGame.PageCount;
	if (typeof SavedGame.PageSecond !== "undefined") PageSecond = SavedGame.PageSecond;
	if (typeof SavedGame.PrinterCost !== "undefined") PrinterCost = SavedGame.PrinterCost;
	if (typeof SavedGame.PrinterCount !== "undefined") PrinterCount = SavedGame.PrinterCount;
	if (typeof SavedGame.PrinterUpgradeCost !== "undefined") PrinterUpgradeCost = SavedGame.PrinterUpgradeCost;
	if (typeof SavedGame.PrinterMult !== "undefined") PrinterMult = SavedGame.PrinterMult;
	if (typeof SavedGame.MaxPageCount !== "undefined") MaxPageCount = SavedGame.MaxPageCount;
	document.getElementById("ClickDiv").innerHTML = LetterCount.toFixed(0) + "/" + MaxLetterCount;
	document.getElementById("ClickPage").innerHTML = PageCount.toFixed(0) + "/" + MaxPageCount;
	document.getElementById("PerSecondPage").innerHTML = PageSecond.toFixed(2);
	document.getElementById("PrinterButton").innerHTML = PrinterCost.toFixed(0) + " pages<br /><strong>1 Printer (" + PrinterMult.toFixed(2) + "/s)</strong>";
	document.getElementById("UpgradePrinter").innerHTML = PrinterUpgradeCost.toFixed(0) + " chapters<br /><strong>Printers upgrade</strong>";
	document.getElementById("ClickButton").innerHTML = "+ " + LetterPlus.toFixed();
	document.getElementById("LetterClickPlusButton").innerHTML = ClickUpgradeCost.toFixed(0)  + " letters<br /><strong>Click x10</strong>";
	document.getElementById("PenButton").innerHTML = PenCost.toFixed(0) + " letters<br /><strong>1 Pen (" + PenMult.toFixed(2) + "/s)</strong>";
	document.getElementById("UpgradePen").innerHTML = PenUpgradeCost.toFixed(0) + " pages<br /><strong>Pens upgrade</strong>";
	document.getElementById("PerSecond").innerHTML = LetterSecond.toFixed(2);
}
setInterval(save, 100);

function reset()
		{
			localStorage.clear();
			location.reload();
		}
