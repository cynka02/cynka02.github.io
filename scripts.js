//Letters

var LetterCount = 0;
var LetterPlus = 1;
//var LetterSecondMinus = 0;
var LetterSecond = 0;
var ClickUpgradeCost = 50;
var PenCost = 15;
var PenCount = 0;
var PenUpgradeCost = 5;
var PenMult = 1;
var MaxLetterCount = 1000;
var LetterClickTracker = 0;
var UpgradeClickOwned = 1;
var PenUpgradeCount = 1;
var MaxLetterUpgradeCost = 10;
var MaxLetterUpgradeCount = 1;

//Pages

var PageCount = 0;
var PageSecond = 0;
//var PageSecondMinus = 0;
var PrinterCost = 15;
var PrinterCount = 0;
var PrinterUpgradeCost = 5;
var PrinterMult = 1;
var MaxPageCount = 1000;
var PageClickTracker = 0;
var PrinterUpgradeCount = 1;
var MaxPageUpgradeCost = 10;
var MaxPageUpgradeCount = 1;

//Chapters

var ChapterCount = 0;
var ChapterSecond = 0;
var TextEditorCost = 15;
var TextEditorCount = 0;
var TextEditorUpgradeCost = 5;
var TextEditorMult = 1;
var MaxChapterCount = 1000;
var ChapterClickTracker = 0;
var TextEditorUpgradeCount = 1;
var MaxChapterUpgradeCost = 10;
var MaxChapterUpgradeCount = 1;

//******


//CLICK CLICK CLICK ---------------------------------------------------------


var clickbutton = document.getElementById("ClickButton");
clickbutton.onclick = function()
	{
		LetterCount = LetterCount + LetterPlus;
		LetterClickTracker = LetterClickTracker + 1;
		document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount);
	}
function LetterClickTrackerfunc()
{
	LetterClickTracker = LetterClickTracker - 1;
}
setInterval(LetterClickTrackerfunc, 10);
	
	
			var PagePlusTracker = document.getElementById("ButtonClickPage");
			PagePlusTracker.onclick = function()
			{
				if (LetterCount >= 500)
				{
				PageCount = PageCount + 1;
				LetterCount = LetterCount - 500;
				PageClickTracker = PageClickTracker + 1;
				document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount);
				document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount);
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
			
			
						var ChapterPlusTracker = document.getElementById("ButtonClickChapter");
						ChapterPlusTracker.onclick = function()
						{
							if (PageCount >= 500)
							{
								PageCount = PageCount - 500;
								ChapterCount = ChapterCount + 1;
								ChapterClickTracker = ChapterClickTracker + 1;
								document.getElementById("ClickChapter").innerHTML = Math.round(ChapterCount) + "/" + Math.round(MaxChapterCount);
								document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount);
							}
							else
							{
								alert('You don\'t have enough pages!');
							}
						}
			

//LETTER UPGRADE CLICK -------------------------------------------------------------------


var LetterClickPlus = document.getElementById("LetterClickPlusButton");
LetterClickPlus.onclick = function()
{
	if (LetterCount >= ClickUpgradeCost)
	{
		LetterCount = LetterCount - ClickUpgradeCost;
		UpgradeClickOwned = UpgradeClickOwned + 1;
		ClickUpgradeCost = 50 * Math.pow(1.15, UpgradeClickOwned);
		LetterPlus = Math.pow(1.2, UpgradeClickOwned) ;
		document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + MaxLetterCount;
		document.getElementById("ClickButton").innerHTML = "+ " + LetterPlus.toFixed(1);
		document.getElementById("LetterClickPlusButton").innerHTML = Math.round(ClickUpgradeCost)  + " letters <br /><strong>Upgrade click</strong>";
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
setInterval(ColorsClickUpgrade, 1);
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
setInterval(ColorsPen, 1);
function ColorsPrinter()
{
	if (PageCount >= PrinterCost)
	{
		var printercolor = document.getElementById("PrinterButton");
		with (printercolor.style)
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
	else if (PageCount < PrinterCost)
	{
		var printercolor = document.getElementById("PrinterButton");
		with (printercolor.style)
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
setInterval(ColorsPrinter, 1);
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
setInterval(ColorsUpgradePen, 1);
function ColorsBuyPage()
{
	if (LetterCount >= 500)
	{
		var buypagecolor = document.getElementById("ButtonClickPage");
		with (buypagecolor.style)
		{
			paddingLeft = "5px";
			paddingRight = "5px";
			textAlign = "center";
			verticalAlign = "middle";
			width = "85%";
			height = "80%";
			fontSize = "16px";
			backgroundColor = "#68ff68";
			borderStyle = "none";
		}
	}
	else if (LetterCount < 500)
	{
		var buypagecolor = document.getElementById("ButtonClickPage");
		with (buypagecolor.style)
		{
			paddingLeft = "5px";
			paddingRight = "5px";
			textAlign = "center";
			verticalAlign = "middle";
			width = "85%";
			height = "80%";
			fontSize = "16px";
			backgroundColor = "#f75353";
			borderStyle = "none";
		}
	}
}
setInterval(ColorsBuyPage, 1);
function ColorsUpgradeMaxLetters()
{
	if (PageCount >= MaxLetterUpgradeCost)
	{
		var upgrademaxletterscolor = document.getElementById("UpgradeMax");
		with (upgrademaxletterscolor.style)
		{
			paddingLeft = "5px";
			paddingRight = "5px";
			textAlign = "center";
			verticalAlign = "middle";
			width = "80%";
			height = "80%";
			fontWeight = "540";
			fontSize = "16px";
			backgroundColor = "#68ff68";
			borderStyle = "none";
		}
	}
	else if (PageCount < MaxLetterUpgradeCost)
	{
		var upgrademaxletterscolor = document.getElementById("UpgradeMax");
		with (upgrademaxletterscolor.style)
		{
			paddingLeft = "5px";
			paddingRight = "5px";
			textAlign = "center";
			verticalAlign = "middle";
			width = "80%";
			height = "80%";
			fontWeight = "540";
			fontSize = "16px";
			backgroundColor = "#f75353";
			borderStyle = "none";
		}
	}
}
setInterval(ColorsUpgradeMaxLetters, 1);
function ColorsUpgradePrinter()
{
	if (ChapterCount >= PrinterUpgradeCost)
	{
		var printerupgradecolor = document.getElementById("UpgradePrinter");
		with (printerupgradecolor.style)
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
	else if (ChapterCount < PrinterUpgradeCost)
	{
		var printerupgradecolor = document.getElementById("UpgradePrinter");
		with (printerupgradecolor.style)
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
setInterval(ColorsUpgradePrinter, 1);
function ColorsBuyChapter()
{
	if (PageCount >= 500)
	{
		var buychaptercolor = document.getElementById("ButtonClickChapter");
		with (buychaptercolor.style)
		{
			paddingLeft = "5px";
			paddingRight = "5px";
			textAlign = "center";
			verticalAlign = "middle";
			width = "85%";
			height = "80%";
			fontSize = "16px";
			backgroundColor = "#68ff68";
			borderStyle = "none";
		}
	}
	else if (PageCount < 500)
	{
		var buychaptercolor = document.getElementById("ButtonClickChapter");
		with (buychaptercolor.style)
		{
			paddingLeft = "5px";
			paddingRight = "5px";
			textAlign = "center";
			verticalAlign = "middle";
			width = "85%";
			height = "80%";
			fontSize = "16px";
			backgroundColor = "#f75353";
			borderStyle = "none";
		}
	}
}
setInterval(ColorsBuyChapter, 1);
function ColorsUpgradeMaxPages()
{
	if (ChapterCount >= MaxPageUpgradeCost)
	{
		var upgrademaxpagecolor = document.getElementById("UpgradeMaxPage");
		with (upgrademaxpagecolor.style)
		{
			paddingLeft = "5px";
			paddingRight = "5px";
			textAlign = "center";
			verticalAlign = "middle";
			width = "80%";
			height = "80%";
			fontWeight = "540";
			fontSize = "16px";
			backgroundColor = "#68ff68";
			borderStyle = "none";
		}
	}
	else if (ChapterCount < MaxPageUpgradeCost)
	{
		var upgrademaxpagecolor = document.getElementById("UpgradeMaxPage");
		with (upgrademaxpagecolor.style)
		{
			paddingLeft = "5px";
			paddingRight = "5px";
			textAlign = "center";
			verticalAlign = "middle";
			width = "80%";
			height = "80%";
			fontWeight = "540";
			fontSize = "16px";
			backgroundColor = "#f75353";
			borderStyle = "none";
		}
	}
}
setInterval(ColorsUpgradeMaxPages, 1);


//PER SECOND --------------------------------------------------------------


var Pen = document.getElementById("PenButton");
Pen.onclick = function()
{
	if (LetterCount >= PenCost)
	{
		LetterCount = LetterCount - PenCost;
		PenCount = PenCount + 1;
		PenCost = 15 * Math.pow(1.125, PenCount);
		LetterSecond = PenCount * PenMult;
		//LetterSecond = LetterSecond - LetterSecondMinus / 10;
		document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount);
		document.getElementById("PerSecond").innerHTML = LetterSecond.toFixed(2);
		document.getElementById("PenButton").innerHTML = Math.round(PenCost) + " letters<br /><strong>+1 Pen (" + PenMult.toFixed(2) + "/s)</strong>";
	}
	else
	{
		alert('You don\'t have enough letters!');
	}
}
function SecondWork()
{
	LetterCount = LetterCount + LetterSecond /20;
	PageCount = PageCount + PageSecond /20;
	document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount);
	document.getElementById("ClickPage").innerHTML = PageCount.toFixed(1) + "/" + Math.round(MaxPageCount);
}
setInterval(SecondWork, 50);
				
				
				var Printer = document.getElementById("PrinterButton");
				Printer.onclick = function()
				{
					if (PageCount >= PrinterCost)
					{
						PageCount = PageCount - PrinterCost;
						PrinterCount = PrinterCount + 1;
						PrinterCost = 15 * Math.pow(1.15, PrinterCount);
						PageSecond = PrinterCount / 2 * PrinterMult;
						//LetterSecondMinus = PrinterCount * 500;
						//LetterSecond = LetterSecond - LetterSecondMinus / 10;
						document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount);
						document.getElementById("PerSecondPage").innerHTML = PageSecond.toFixed(2);
						document.getElementById("PrinterButton").innerHTML = Math.round(PrinterCost) + " pages<br /><strong>+1 Printer (" + PrinterMult.toFixed(2) / 2 + "/s)</strong>";
						//document.getElementById("PerSecond").innerHTML = LetterSecond.toFixed(2);
					}
					else
					{
						alert('You don\'t have enough pages!');
					}
				}
				
	
// MAX VALUES -------------------------------------------------------------


function MaxLetters()
{
	if (LetterCount > MaxLetterCount)
	{
		if (LetterSecond == 0 || LetterClickTracker == 1)
		{
			LetterCount = MaxLetterCount;
			document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount);
		}
		if (LetterSecond >= 1 || LetterClickTracker == 0)
		{
			LetterCount = MaxLetterCount;
			document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount);
		}
		if (LetterSecond >= 1 || LetterClickTracker == 1)
		{
			LetterCount = MaxLetterCount;
			document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount);
		}
	}
}
setInterval(MaxLetters, 0.01);
function MaxPages()
{
	if (PageCount > MaxPageCount)
	{
		if (PageSecond == 0 || PageClickTracker == 1)
		{
			PageCount = MaxPageCount;
			document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount);
		}
		if (PageSecond >= 1 || PageClickTracker == 0)
		{
			PageCount = MaxPageCount;
			document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount);
		}
		if (PageSecond >= 1 || PageClickTracker == 1)
		{
			PageCount = MaxPageCount;
			document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount);
		}
	}
}
setInterval(MaxPages, 0.01);
function MaxChapters()
{
	if (ChapterCount > MaxChapterCount)
	{
		if (ChapterSecond == 0 || ChapterClickTracker == 1)
		{
			ChapterCount = MaxChapterCount;
			document.getElementById("ClickChapter").innerHTML = Math.round(ChapterCount) + "/" + Math.round(MaxChapterCount);
		}
		if (ChapterSecond >= 1 || ChapterClickTracker == 0)
		{
			ChapterCount = MaxChapterCount;
			document.getElementById("ClickChapter").innerHTML = Math.round(ChapterCount) + "/" + Math.round(MaxChapterCount);
		}
		if (ChapterSecond >= 1 || ChapterClickTracker == 1)
		{
			ChapterCount = MaxChapterCount;
			document.getElementById("ClickChapter").innerHTML = Math.round(ChapterCount) + "/" + Math.round(MaxChapterCount);
		}
	}
}
setInterval(MaxChapters, 0.01);


//UPGRADES -----------------------------------------------------------------------------------


var UpgradePenfunc = document.getElementById("UpgradePen");
UpgradePenfunc.onclick = function()
{
	if (PageCount >= PenUpgradeCost)
	{
		PageCount = PageCount - PenUpgradeCost;
		PenUpgradeCount = PenUpgradeCount + 1;
		PenUpgradeCost = 5 * Math.pow(1.2, PenUpgradeCount);
		PenMult = PenMult + Math.pow(1.1, PenUpgradeCount) * 0.1;
		LetterSecond = PenCount * PenMult;
		//LetterSecond = LetterSecond - LetterSecondMinus / 10;
		document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount);
		document.getElementById("PerSecond").innerHTML = LetterSecond.toFixed(2);
		document.getElementById("PenButton").innerHTML = Math.round(PenCost) + " letters<br /><strong>+1 Pen (" + PenMult.toFixed(2) + "/s)</strong>";
		document.getElementById("UpgradePen").innerHTML = Math.round(PenUpgradeCost) + " pages<br /><strong>Pens upgrade</strong>";
	}
	else
	{
		alert('You don\'t have enough pages!');
	}
}
var UpgradeMaxLetters = document.getElementById("UpgradeMax");
UpgradeMaxLetters.onclick = function()
{
	if (PageCount >= MaxLetterUpgradeCost)
	{
		PageCount = PageCount - MaxLetterUpgradeCost;
		MaxLetterUpgradeCount = MaxLetterUpgradeCount + 1;
		MaxLetterUpgradeCost = 10 * Math.pow(1.15, MaxLetterUpgradeCount);
		MaxLetterCount = 1000 * Math.pow(1.2, MaxLetterUpgradeCount);
		document.getElementById("UpgradeMax").innerHTML = Math.round(MaxLetterUpgradeCost) + ' pages<br /><strong><font size="2">Max letters upgrade</font></strong>';
		document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount);
		document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount);
	}
	else
	{
		alert('You don\'t have enough pages!');
	}
}
				
				
				var UpgradePrinterfunc = document.getElementById("UpgradePrinter");
				UpgradePrinterfunc.onclick = function()
				{
					if (ChapterCount >= PrinterUpgradeCost)
					{
						ChapterCount = ChapterCount - PrinterUpgradeCost;
						PrinterUpgradeCount = PrinterUpgradeCount + 1;
						PrinterUpgradeCost = 5 * Math.pow(1.2, PrinterUpgradeCount);
						PrinterMult = PrinterMult + Math.pow(1.1, PrinterUpgradeCount) * 0.1;
						PageSecond = PrinterCount /2 * PrinterMult;
						document.getElementById("ClickChapter").innerHTML = Math.round(ChapterCount) + "/" + Math.round(MaxChapterCount);
						document.getElementById("PerSecondPage").innerHTML = PageSecond.toFixed(2);
						document.getElementById("PrinterButton").innerHTML = Math.round(PrinterCost) + " pages<br /><strong>+1 Printer (" + PrinterMult.toFixed(2) /2+ "/s)</strong>";
						document.getElementById("UpgradePrinter").innerHTML = Math.round(PrinterUpgradeCost) + " chapters<br /><strong>Printers upgrade</strong>";
					}
					else
					{
						alert('You don\'t have enough chapters!');
					}
				}
				var UpgradeMaxPages = document.getElementById("UpgradeMaxPage");
				UpgradeMaxPages.onclick = function()
				{
					if (ChapterCount >= MaxPageUpgradeCost)
					{
						ChapterCount = ChapterCount - MaxPageUpgradeCost;
						MaxPageUpgradeCount = MaxPageUpgradeCount + 1;
						MaxPageUpgradeCost = 10 * Math.pow(1.15, MaxPageUpgradeCount);
						MaxPageCount = 1000 * Math.pow(1.2, MaxPageUpgradeCount);
						document.getElementById("UpgradeMaxPage").innerHTML = Math.round(MaxPageUpgradeCost) + ' chapters<br /><strong><font size="2">Max pages upgrade</font></strong>';
						document.getElementById("ClickChapter").innerHTML = Math.round(ChapterCount) + "/" + Math.round(MaxChapterCount);
						document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount);
					}
					else
					{
						alert('You don\'t have enough chapters!');
					}
				}
				

//SAVE LOAD RESET --------------------------------------------------------------


function save()
{
	var Save =
	{
		LetterCount: LetterCount, LetterPlus: LetterPlus, LetterSecond: LetterSecond, ClickUpgradeCost: ClickUpgradeCost, PenCost: PenCost, PenCount: PenCount, PenUpgradeCost: PenUpgradeCost, PenMult: PenMult, MaxLetterCount: MaxLetterCount, PageCount: PageCount, PageSecond: PageSecond, PrinterCost: PrinterCost, PrinterCount: PrinterCount, PrinterUpgradeCost: PrinterUpgradeCost, PrinterMult: PrinterMult, MaxPageCount: MaxPageCount, UpgradeClickOwned: UpgradeClickOwned, PenUpgradeCount, PenUpgradeCount, MaxLetterUpgradeCost: MaxLetterUpgradeCost, MaxLetterUpgradeCount: MaxLetterUpgradeCount, MaxPageUpgradeCost: MaxPageUpgradeCost, MaxPageUpgradeCount: MaxPageUpgradeCount, ChapterCount: ChapterCount, PrinterUpgradeCount: PrinterUpgradeCount
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
	if (typeof SavedGame.MaxLetterUpgradeCount !== "undefined") MaxLetterUpgradeCount = SavedGame.MaxLetterUpgradeCount;
	if (typeof SavedGame.MaxLetterUpgradeCost !== "undefined") MaxLetterUpgradeCost = SavedGame.MaxLetterUpgradeCost;
	if (typeof SavedGame.MaxPageUpgradeCount !== "undefined") MaxPageUpgradeCount = SavedGame.MaxPageUpgradeCount;
	if (typeof SavedGame.MaxPageUpgradeCost !== "undefined") MaxPageUpgradeCost = SavedGame.MaxPageUpgradeCost;
	if (typeof SavedGame.PageCount !== "undefined") PageCount = SavedGame.PageCount;
	if (typeof SavedGame.PageSecond !== "undefined") PageSecond = SavedGame.PageSecond;
	if (typeof SavedGame.PrinterCost !== "undefined") PrinterCost = SavedGame.PrinterCost;
	if (typeof SavedGame.PrinterCount !== "undefined") PrinterCount = SavedGame.PrinterCount;
	if (typeof SavedGame.PrinterUpgradeCost !== "undefined") PrinterUpgradeCost = SavedGame.PrinterUpgradeCost;
	if (typeof SavedGame.PrinterMult !== "undefined") PrinterMult = SavedGame.PrinterMult;
	if (typeof SavedGame.MaxPageCount !== "undefined") MaxPageCount = SavedGame.MaxPageCount;
	if (typeof SavedGame.UpgradeClickOwned !== "undefined") UpgradeClickOwned = SavedGame.UpgradeClickOwned;
	if (typeof SavedGame.PenUpgradeCount !== "undefined") PenUpgradeCount = SavedGame.PenUpgradeCount;
	if (typeof SavedGame.PrinterUpgradeCount !== "undefined") PrinterUpgradeCount = SavedGame.PrinterUpgradeCount;
	if (typeof SavedGame.ChapterCount !== "undefined") ChapterCount = SavedGame.ChapterCount;
	document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount);
	document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount);
	document.getElementById("ClickChapter").innerHTML = Math.round(ChapterCount) + "/" + Math.round(MaxChapterCount);
	document.getElementById("PerSecondPage").innerHTML = PageSecond.toFixed(2);
	document.getElementById("PrinterButton").innerHTML = Math.round(PrinterCost) + " pages<br /><strong>+1 Printer (" + PrinterMult.toFixed(2) / 2 + "/s)</strong>";
	document.getElementById("UpgradePrinter").innerHTML = Math.round(PrinterUpgradeCost) + " chapters<br /><strong>Printers upgrade</strong>";
	document.getElementById("ClickButton").innerHTML = "+ " + LetterPlus.toFixed(1);
	document.getElementById("LetterClickPlusButton").innerHTML = Math.round(ClickUpgradeCost)  + " letters<br /><strong>Upgrade click</strong>";
	document.getElementById("PenButton").innerHTML = Math.round(PenCost) + " letters<br /><strong>+1 Pen (" + PenMult.toFixed(2) + "/s)</strong>";
	document.getElementById("UpgradePen").innerHTML = Math.round(PenUpgradeCost) + " pages<br /><strong>Pens upgrade</strong>";
	document.getElementById("PerSecond").innerHTML = LetterSecond.toFixed(2);
	document.getElementById("UpgradeMax").innerHTML = Math.round(MaxLetterUpgradeCost) + ' pages<br /><strong><font size="2">Max letters upgrade</font></strong>';
	document.getElementById("UpgradeMaxPage").innerHTML = Math.round(MaxPageUpgradeCost) + ' chapters<br /><strong><font size="2">Max pages upgrade</font></strong>';
	document.getElementById("UpgradePrinter").innerHTML = Math.round(PrinterUpgradeCost) + " chapters<br /><strong>Printers upgrade</strong>";
}
setInterval(save, 100);
var reset = document.getElementById("reset");
reset.onclick = function()
		{
			localStorage.clear();
			location.reload();
		}
