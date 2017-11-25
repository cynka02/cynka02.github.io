//Letters

var LetterCount = 0;
var LetterPlus = 1;
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

//Language

var lang = 1;


//CLICK CLICK CLICK ---------------------------------------------------------


var clickbutton = document.getElementById("ClickButton");
clickbutton.onclick = function()
	{
		if (lang == 1)
		{
		LetterCount = LetterCount + LetterPlus;
		LetterClickTracker = LetterClickTracker + 1;
		document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount) + "<br />Letters";
		}
		else if (lang == 2)
		{
		LetterCount = LetterCount + LetterPlus;
		LetterClickTracker = LetterClickTracker + 1;
		document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount) + "<br />Litery";
		}
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
					if (lang == 1)
					{
					PageCount = PageCount + 1;
					LetterCount = LetterCount - 500;
					PageClickTracker = PageClickTracker + 1;
					document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Pages";
					document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount) + "<br />Letters";
					}
					else if (lang == 2)
					{
					PageCount = PageCount + 1;
					LetterCount = LetterCount - 500;
					PageClickTracker = PageClickTracker + 1;
					document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Strony";
					document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount) + "<br />Litery";
					}
				}
				else
				{
					if (lang == 1)
					{
					alert('You don\'t have enough letters!');
					}
					else if (lang == 2)
					{
					alert('Nie masz tylu liter!');
					}
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
								if (lang == 1)
								{
								PageCount = PageCount - 500;
								ChapterCount = ChapterCount + 1;
								ChapterClickTracker = ChapterClickTracker + 1;
								document.getElementById("ClickChapter").innerHTML = Math.round(ChapterCount) + "/" + Math.round(MaxChapterCount) + "<br />Chapters";
								document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Pages";
								}
								else if (lang == 2)
								{
								PageCount = PageCount - 500;
								ChapterCount = ChapterCount + 1;
								ChapterClickTracker = ChapterClickTracker + 1;
								document.getElementById("ClickChapter").innerHTML = Math.round(ChapterCount) + "/" + Math.round(MaxChapterCount) + "<br />Rozdziały";
								document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Strony";
								}
							}
							else
							{
								if (lang == 1)
								{
								alert('You don\'t have enough pages!');
								}
								else if (lang == 2)
								{
								alert('Nie masz tylu liter!');
								}
							}
						}
			

//LETTER UPGRADE CLICK -------------------------------------------------------------------


var LetterClickPlus = document.getElementById("LetterClickPlusButton");
LetterClickPlus.onclick = function()
{
	if (LetterCount >= ClickUpgradeCost)
	{
		if (lang == 1)
		{
		LetterCount = LetterCount - ClickUpgradeCost;
		UpgradeClickOwned = UpgradeClickOwned + 1;
		ClickUpgradeCost = 50 * Math.pow(1.15, UpgradeClickOwned);
		LetterPlus = Math.pow(1.2, UpgradeClickOwned) ;
		document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount) + "<br />Letters";
		document.getElementById("ClickButton").innerHTML = "+ " + LetterPlus.toFixed(1);
		document.getElementById("LetterClickPlusButton").innerHTML = Math.round(ClickUpgradeCost)  + " letters<br /><strong>Upgrade click</strong>";
		}
		else if (lang == 2)
		{
		LetterCount = LetterCount - ClickUpgradeCost;
		UpgradeClickOwned = UpgradeClickOwned + 1;
		ClickUpgradeCost = 50 * Math.pow(1.15, UpgradeClickOwned);
		LetterPlus = Math.pow(1.2, UpgradeClickOwned) ;
		document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount) + "<br />Litery";
		document.getElementById("ClickButton").innerHTML = "+ " + LetterPlus.toFixed(1);
		document.getElementById("LetterClickPlusButton").innerHTML = Math.round(ClickUpgradeCost)  + " liter<br /><strong>Ulepszenie kliknięcia</strong>";
		}
	} 
	else
	{
		if (lang == 1)
		{
		alert('You don\'t have enough letters!');
		}
		else if (lang == 2)
		{
		alert('Nie masz tylu liter!');
		}
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
function ColorsLanguage()
{
	if (lang == 1)
	{
		var languagecolor = document.getElementById("langen");
		with (languagecolor.style)
		{
				float = "right";
				widht = "10px";
				height = "18px";
				backgroundColor = "#68ff68";
				fontSize = "15px";
				marginRight = "4px";
				marginTop = "-10px";
		}
		var languagecolor2 = document.getElementById("langpl")
		with (languagecolor2.style)
		{
				float = "right";
				widht = "10px";
				height = "18px";
				backgroundColor = "#f75353";
				fontSize = "15px";
				marginRight = "2px";
				marginTop = "-10px";
		}
	}
	else if (lang == 2)
	{
		var languagecolor = document.getElementById("langen");
		with (languagecolor.style)
		{
				float = "right";
				widht = "10px";
				height = "18px";
				backgroundColor = "#f75353";
				fontSize = "15px";
				marginRight = "4px";
				marginTop = "-10px";
		}
		var languagecolor2 = document.getElementById("langpl")
		with (languagecolor2.style)
		{
				float = "right";
				widht = "10px";
				height = "18px";
				backgroundColor = "#68ff68";
				fontSize = "15px";
				marginRight = "2px";
				marginTop = "-10px";
		}
	}
}
setInterval(ColorsLanguage, 1);


//PER SECOND --------------------------------------------------------------


var Pen = document.getElementById("PenButton");
Pen.onclick = function()
{
	if (LetterCount >= PenCost)
	{
		if (lang == 1)
		{
		LetterCount = LetterCount - PenCost;
		PenCount = PenCount + 1;
		PenCost = 15 * Math.pow(1.125, PenCount);
		LetterSecond = PenCount * PenMult;
		document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount) + "<br />Letters";
		document.getElementById("PerSecond").innerHTML = LetterSecond.toFixed(2) + "<br />Letters per second";
		document.getElementById("PenButton").innerHTML = Math.round(PenCost) + " letters<br /><strong>+1 Pen (" + PenMult.toFixed(2) + "/s)</strong>";
		}
		else if (lang == 2)
		{
		LetterCount = LetterCount - PenCost;
		PenCount = PenCount + 1;
		PenCost = 15 * Math.pow(1.125, PenCount);
		LetterSecond = PenCount * PenMult;
		document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount) + "<br />Litery";
		document.getElementById("PerSecond").innerHTML = LetterSecond.toFixed(2) + "<br />Liter na sekundę";
		document.getElementById("PenButton").innerHTML = Math.round(PenCost) + " liter<br /><strong>+1 Długopis (" + PenMult.toFixed(2) + "/s)</strong>";
		}
	}
	else
	{
		if (lang == 1)
		{
		alert('You don\'t have enough letters!');
		}
		else if (lang == 2)
		{
		alert('Nie masz tylu liter!');
		}
	}
}
function SecondWork()
{
	if (lang == 1)
	{
	LetterCount = LetterCount + LetterSecond /20;
	PageCount = PageCount + PageSecond /20;
	document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount) + "<br />Letters";
	document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Pages";
	}
	else if (lang == 2)
	{
	LetterCount = LetterCount + LetterSecond /20;
	PageCount = PageCount + PageSecond /20;
	document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount) + "<br />Litery";
	document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Strony";
	}
}
setInterval(SecondWork, 50);
				
				
				var Printer = document.getElementById("PrinterButton");
				Printer.onclick = function()
				{
					if (PageCount >= PrinterCost)
					{
						if (lang == 1)
						{
						PageCount = PageCount - PrinterCost;
						PrinterCount = PrinterCount + 1;
						PrinterCost = 15 * Math.pow(1.15, PrinterCount);
						PageSecond = PrinterCount / 2 * PrinterMult;
						document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Pages";
						document.getElementById("PerSecondPage").innerHTML = PageSecond.toFixed(2) + "<br />Pages per second";
						document.getElementById("PrinterButton").innerHTML = Math.round(PrinterCost) + " pages<br /><strong>+1 Printer (" + PrinterMult.toFixed(2) / 2 + "/s)</strong>";
						}
						else if (lang == 2)
						{
						PageCount = PageCount - PrinterCost;
						PrinterCount = PrinterCount + 1;
						PrinterCost = 15 * Math.pow(1.15, PrinterCount);
						PageSecond = PrinterCount / 2 * PrinterMult;
						document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Strony";
						document.getElementById("PerSecondPage").innerHTML = PageSecond.toFixed(2) + "<br />Stron na sekundę";
						document.getElementById("PrinterButton").innerHTML = Math.round(PrinterCost) + " stron<br /><strong>+1 Drukarka (" + PrinterMult.toFixed(2) / 2 + "/s)</strong>";
						}
					}
					else
					{
						if (lang == 1)
						{
						alert('You don\'t have enough pages!');
						}
						else if (lang == 2)
						{
						alert('Nie masz tylu stron!');
						}
					}
				}
				
	
// MAX VALUES -------------------------------------------------------------


function MaxLetters()
{
	if (LetterCount > MaxLetterCount)
	{
		if (lang == 1)
		{
			if (LetterSecond == 0 || LetterClickTracker == 1)
			{
				LetterCount = MaxLetterCount;
				document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount) + "<br />Letters";
			}
			if (LetterSecond >= 1 || LetterClickTracker == 0)
			{
				LetterCount = MaxLetterCount;
				document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount) + "<br />Letters";
			}
			if (LetterSecond >= 1 || LetterClickTracker == 1)
			{
				LetterCount = MaxLetterCount;
				document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount) + "<br />Letters";
			}
		}
		else if (lang == 2)
		{
			if (LetterSecond == 0 || LetterClickTracker == 1)
			{
				LetterCount = MaxLetterCount;
				document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount) + "<br />Litery";
			}
			if (LetterSecond >= 1 || LetterClickTracker == 0)
			{
				LetterCount = MaxLetterCount;
				document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount) + "<br />Litery";
			}
			if (LetterSecond >= 1 || LetterClickTracker == 1)
			{
				LetterCount = MaxLetterCount;
				document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount) + "<br />Litery";
			}
		}
	}
}
setInterval(MaxLetters, 0.01);
function MaxPages()
{
	if (PageCount > MaxPageCount)
	{
		if (lang == 1)
		{
			if (PageSecond == 0 || PageClickTracker == 1)
			{
				PageCount = MaxPageCount;
				document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Pages";
			}
			if (PageSecond >= 1 || PageClickTracker == 0)
			{
				PageCount = MaxPageCount;
				document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Pages";
			}
			if (PageSecond >= 1 || PageClickTracker == 1)
			{
				PageCount = MaxPageCount;
				document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Pages";
			}
		}
		else if (lang == 2)
		{
			if (PageSecond == 0 || PageClickTracker == 1)
			{
				PageCount = MaxPageCount;
				document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Strony";
			}
			if (PageSecond >= 1 || PageClickTracker == 0)
			{
				PageCount = MaxPageCount;
				document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Strony";
			}
			if (PageSecond >= 1 || PageClickTracker == 1)
			{
				PageCount = MaxPageCount;
				document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Strony";
			}
		}
	}
}
setInterval(MaxPages, 0.01);
function MaxChapters()
{
	if (ChapterCount > MaxChapterCount)
	{
		if (lang == 1)
		{
			if (ChapterSecond == 0 || ChapterClickTracker == 1)
			{
				ChapterCount = MaxChapterCount;
				document.getElementById("ClickChapter").innerHTML = Math.round(ChapterCount) + "/" + Math.round(MaxChapterCount) + "<br />Chapters";
			}
			if (ChapterSecond >= 1 || ChapterClickTracker == 0)
			{
				ChapterCount = MaxChapterCount;
				document.getElementById("ClickChapter").innerHTML = Math.round(ChapterCount) + "/" + Math.round(MaxChapterCount) + "<br />Chapters";
			}
			if (ChapterSecond >= 1 || ChapterClickTracker == 1)
			{
				ChapterCount = MaxChapterCount;
				document.getElementById("ClickChapter").innerHTML = Math.round(ChapterCount) + "/" + Math.round(MaxChapterCount) + "<br />Chapters";
			}
		}
		else if (lang == 2)
		{
			if (ChapterSecond == 0 || ChapterClickTracker == 1)
			{
				ChapterCount = MaxChapterCount;
				document.getElementById("ClickChapter").innerHTML = Math.round(ChapterCount) + "/" + Math.round(MaxChapterCount) + "<br />Rozdziały";
			}
			if (ChapterSecond >= 1 || ChapterClickTracker == 0)
			{
				ChapterCount = MaxChapterCount;
				document.getElementById("ClickChapter").innerHTML = Math.round(ChapterCount) + "/" + Math.round(MaxChapterCount) + "<br />Rozdziały";
			}
			if (ChapterSecond >= 1 || ChapterClickTracker == 1)
			{
				ChapterCount = MaxChapterCount;
				document.getElementById("ClickChapter").innerHTML = Math.round(ChapterCount) + "/" + Math.round(MaxChapterCount) + "<br />Rozdziały";
			}
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
		if (lang == 1)
		{
		PageCount = PageCount - PenUpgradeCost;
		PenUpgradeCount = PenUpgradeCount + 1;
		PenUpgradeCost = 5 * Math.pow(1.2, PenUpgradeCount);
		PenMult = PenMult + Math.pow(1.1, PenUpgradeCount) * 0.1;
		LetterSecond = PenCount * PenMult;
		document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Pages";
		document.getElementById("PerSecond").innerHTML = LetterSecond.toFixed(2) + "<br />Letters per second";
		document.getElementById("PenButton").innerHTML = Math.round(PenCost) + " letters<br /><strong>+1 Pen (" + PenMult.toFixed(2) + "/s)</strong>";
		document.getElementById("UpgradePen").innerHTML = Math.round(PenUpgradeCost) + " pages<br /><strong>Pens upgrade</strong>";
		}
		else if (lang == 2)
		{
		PageCount = PageCount - PenUpgradeCost;
		PenUpgradeCount = PenUpgradeCount + 1;
		PenUpgradeCost = 5 * Math.pow(1.2, PenUpgradeCount);
		PenMult = PenMult + Math.pow(1.1, PenUpgradeCount) * 0.1;
		LetterSecond = PenCount * PenMult;
		document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Stron";
		document.getElementById("PerSecond").innerHTML = LetterSecond.toFixed(2) + "<br />Liter na sekundę";
		document.getElementById("PenButton").innerHTML = Math.round(PenCost) + " liter<br /><strong>+1 Długopis (" + PenMult.toFixed(2) + "/s)</strong>";
		document.getElementById("UpgradePen").innerHTML = Math.round(PenUpgradeCost) + " stron<br /><strong>Ulepszenie długopisów</strong>";
		}
	}
	else
	{
		if (lang == 1)
		{
		alert('You don\'t have enough pages!');
		}
		else if (lang == 2)
		{
		alert('Nie masz tylu stron!');
		}
	}
}
var UpgradeMaxLetters = document.getElementById("UpgradeMax");
UpgradeMaxLetters.onclick = function()
{
	if (PageCount >= MaxLetterUpgradeCost)
	{
		if (lang == 1)
		{
		PageCount = PageCount - MaxLetterUpgradeCost;
		MaxLetterUpgradeCount = MaxLetterUpgradeCount + 1;
		MaxLetterUpgradeCost = 10 * Math.pow(1.15, MaxLetterUpgradeCount);
		MaxLetterCount = 1000 * Math.pow(1.2, MaxLetterUpgradeCount);
		document.getElementById("UpgradeMax").innerHTML = Math.round(MaxLetterUpgradeCost) + ' pages<br /><strong><font size="2">Max letters upgrade</font></strong>';
		document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Pages";
		document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount) + "<br />Letters";
		}
		else if (lang == 2)
		{
		PageCount = PageCount - MaxLetterUpgradeCost;
		MaxLetterUpgradeCount = MaxLetterUpgradeCount + 1;
		MaxLetterUpgradeCost = 10 * Math.pow(1.15, MaxLetterUpgradeCount);
		MaxLetterCount = 1000 * Math.pow(1.2, MaxLetterUpgradeCount);
		document.getElementById("UpgradeMax").innerHTML = Math.round(MaxLetterUpgradeCost) + ' stron<br /><strong><font size="2">Ulepszenie maks. ilości liter</font></strong>';
		document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Stron";
		document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount) + "<br />Liter";
		}
	}
	else
	{
		if (lang == 1)
		{
		alert('You don\'t have enough pages!');
		}
		else if (lang == 2)
		{
		alert('Nie masz tylu stron!');
		}
	}
}
				
				
				var UpgradePrinterfunc = document.getElementById("UpgradePrinter");
				UpgradePrinterfunc.onclick = function()
				{
					if (ChapterCount >= PrinterUpgradeCost)
					{
						if (lang == 1)
						{
						ChapterCount = ChapterCount - PrinterUpgradeCost;
						PrinterUpgradeCount = PrinterUpgradeCount + 1;
						PrinterUpgradeCost = 5 * Math.pow(1.2, PrinterUpgradeCount);
						PrinterMult = PrinterMult + Math.pow(1.1, PrinterUpgradeCount) * 0.1;
						PageSecond = PrinterCount /2 * PrinterMult;
						document.getElementById("ClickChapter").innerHTML = Math.round(ChapterCount) + "/" + Math.round(MaxChapterCount) + "<br />Chapters";
						document.getElementById("PerSecondPage").innerHTML = PageSecond.toFixed(2) + "<br />Pages per second";
						document.getElementById("PrinterButton").innerHTML = Math.round(PrinterCost) + " pages<br /><strong>+1 Printer (" + PrinterMult.toFixed(2) /2+ "/s)</strong>";
						document.getElementById("UpgradePrinter").innerHTML = Math.round(PrinterUpgradeCost) + " chapters<br /><strong>Printers upgrade</strong>";
						}
						else if (lang == 2)
						{
						ChapterCount = ChapterCount - PrinterUpgradeCost;
						PrinterUpgradeCount = PrinterUpgradeCount + 1;
						PrinterUpgradeCost = 5 * Math.pow(1.2, PrinterUpgradeCount);
						PrinterMult = PrinterMult + Math.pow(1.1, PrinterUpgradeCount) * 0.1;
						PageSecond = PrinterCount /2 * PrinterMult;
						document.getElementById("ClickChapter").innerHTML = Math.round(ChapterCount) + "/" + Math.round(MaxChapterCount) + "<br />Rozdziałów";
						document.getElementById("PerSecondPage").innerHTML = PageSecond.toFixed(2) + "<br />Stron na sekundę";
						document.getElementById("PrinterButton").innerHTML = Math.round(PrinterCost) + " stron<br /><strong>+1 Drukarka (" + PrinterMult.toFixed(2) /2+ "/s)</strong>";
						document.getElementById("UpgradePrinter").innerHTML = Math.round(PrinterUpgradeCost) + " rozdziałów<br /><strong>Ulepszenie drukarek</strong>";
						}
					}
					else
					{
						if (lang == 1)
						{
						alert('You don\'t have enough chapters!');
						}
						else if (lang == 2)
						{
							alert('Nie masz tylu rozdziałów!');
						}
					}
				}
				var UpgradeMaxPages = document.getElementById("UpgradeMaxPage");
				UpgradeMaxPages.onclick = function()
				{
					if (ChapterCount >= MaxPageUpgradeCost)
					{
						if (lang == 1)
						{
						ChapterCount = ChapterCount - MaxPageUpgradeCost;
						MaxPageUpgradeCount = MaxPageUpgradeCount + 1;
						MaxPageUpgradeCost = 10 * Math.pow(1.15, MaxPageUpgradeCount);
						MaxPageCount = 1000 * Math.pow(1.2, MaxPageUpgradeCount);
						document.getElementById("UpgradeMaxPage").innerHTML = Math.round(MaxPageUpgradeCost) + ' chapters<br /><strong><font size="2">Max pages upgrade</font></strong>';
						document.getElementById("ClickChapter").innerHTML = Math.round(ChapterCount) + "/" + Math.round(MaxChapterCount) + "<br />Chapters";
						document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Pages";
						}
						else if (lang == 2)
						{
						ChapterCount = ChapterCount - MaxPageUpgradeCost;
						MaxPageUpgradeCount = MaxPageUpgradeCount + 1;
						MaxPageUpgradeCost = 10 * Math.pow(1.15, MaxPageUpgradeCount);
						MaxPageCount = 1000 * Math.pow(1.2, MaxPageUpgradeCount);
						document.getElementById("UpgradeMaxPage").innerHTML = Math.round(MaxPageUpgradeCost) + ' rozdziałów<br /><strong><font size="2">Ulepszenie maks. ilości stron</font></strong>';
						document.getElementById("ClickChapter").innerHTML = Math.round(ChapterCount) + "/" + Math.round(MaxChapterCount) + "<br />Rozdziały";
						document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Strony";
						}
					}
					else
					{
						if (lang == 1)
						{
						alert('You don\'t have enough chapters!');
						}
						else if (lang == 2)
						{
							alert('Nie masz tylu rozdziałów!');
						}
					}
				}
				

//LANGUAGE ----------------------------------------------------------------------


var language = document.getElementById("langen");
language.onclick = function()
{
	lang = 1;
	document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount) + "<br />Letters";
	document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Pages";
	document.getElementById("ClickChapter").innerHTML = Math.round(ChapterCount) + "/" + Math.round(MaxChapterCount) + "<br />Chapters";
	document.getElementById("PerSecondPage").innerHTML = PageSecond.toFixed(2) + "<br />Pages per second";
	document.getElementById("PrinterButton").innerHTML = Math.round(PrinterCost) + " pages<br /><strong>+1 Printer (" + PrinterMult.toFixed(2) / 2 + "/s)</strong>";
	document.getElementById("UpgradePrinter").innerHTML = Math.round(PrinterUpgradeCost) + " chapters<br /><strong>Printers upgrade</strong>";
	document.getElementById("ClickButton").innerHTML = "+ " + LetterPlus.toFixed(1);
	document.getElementById("LetterClickPlusButton").innerHTML = Math.round(ClickUpgradeCost)  + " letters<br /><strong>Upgrade click</strong>";
	document.getElementById("PenButton").innerHTML = Math.round(PenCost) + " letters<br /><strong>+1 Pen (" + PenMult.toFixed(2) + "/s)</strong>";
	document.getElementById("UpgradePen").innerHTML = Math.round(PenUpgradeCost) + " pages<br /><strong>Pens upgrade</strong>";
	document.getElementById("PerSecond").innerHTML = LetterSecond.toFixed(2) + "<br />Letters per second";
	document.getElementById("UpgradeMax").innerHTML = Math.round(MaxLetterUpgradeCost) + ' pages<br /><strong><font size="2">Max letters upgrade</font></strong>';
	document.getElementById("UpgradeMaxPage").innerHTML = Math.round(MaxPageUpgradeCost) + ' chapters<br /><strong><font size="2">Max pages upgrade</font></strong>';
	document.getElementById("UpgradePrinter").innerHTML = Math.round(PrinterUpgradeCost) + " chapters<br /><strong>Printers upgrade</strong>";
	document.getElementById("ButtonClickPage").innerHTML = "500 letters<br /><strong>1 Page</strong>";
	document.getElementById("ButtonClickChapter").innerHTML = "500 pages<br /><strong>1 Chapter</strong>";
	document.getElementById("PerSecondChapter").innerHTML = "0.00<br />Chapters per second";
	document.getElementById("reset").innerHTML = "Reset game";
}
var language2 = document.getElementById("langpl");
language2.onclick = function()
{
	lang = 2;
	document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount) + "<br />Litery";
	document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Strony";
	document.getElementById("ClickChapter").innerHTML = Math.round(ChapterCount) + "/" + Math.round(MaxChapterCount) + "<br />Rozdziały";
	document.getElementById("PerSecondPage").innerHTML = PageSecond.toFixed(2) + "<br />Stron na sekundę";
	document.getElementById("PrinterButton").innerHTML = Math.round(PrinterCost) + " stron<br /><strong>+1 Drukarka (" + PrinterMult.toFixed(2) / 2 + "/s)</strong>";
	document.getElementById("UpgradePrinter").innerHTML = Math.round(PrinterUpgradeCost) + " rozdziałów<br /><strong>Ulepszenie drukarek</strong>";
	document.getElementById("ClickButton").innerHTML = "+ " + LetterPlus.toFixed(1);
	document.getElementById("LetterClickPlusButton").innerHTML = Math.round(ClickUpgradeCost)  + " liter<br /><strong>Ulepszenie kliknięcia</strong>";
	document.getElementById("PenButton").innerHTML = Math.round(PenCost) + " liter<br /><strong>+1 Długopis (" + PenMult.toFixed(2) + "/s)</strong>";
	document.getElementById("UpgradePen").innerHTML = Math.round(PenUpgradeCost) + " stron<br /><strong>Ulepszenie długopisów</strong>";
	document.getElementById("PerSecond").innerHTML = LetterSecond.toFixed(2) + "<br />Liter na sekundę";
	document.getElementById("UpgradeMax").innerHTML = Math.round(MaxLetterUpgradeCost) + ' stron<br /><strong><font size="2">Ulepszenie maks. ilości liter</font></strong>';
	document.getElementById("UpgradeMaxPage").innerHTML = Math.round(MaxPageUpgradeCost) + ' rozdziałów<br /><strong><font size="2">Ulepszenie maks. ilości stron</font></strong>';
	document.getElementById("UpgradePrinter").innerHTML = Math.round(PrinterUpgradeCost) + " rozdziałów<br /><strong>Ulepszenie drukarek</strong>";
	document.getElementById("ButtonClickPage").innerHTML = "500 liter<br /><strong>1 Strona</strong>";
	document.getElementById("ButtonClickChapter").innerHTML = "500 stron<br /><strong>1 Rozdział</strong>";
	document.getElementById("PerSecondChapter").innerHTML = "0.00<br />Rozdziałów na sekundę";
	document.getElementById("reset").innerHTML = "Zresetuj grę";
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
	document.getElementById("ClickDiv").innerHTML = Math.round(LetterCount) + "/" + Math.round(MaxLetterCount) + "<br />Letters";
	document.getElementById("ClickPage").innerHTML = Math.round(PageCount) + "/" + Math.round(MaxPageCount) + "<br />Pages";
	document.getElementById("ClickChapter").innerHTML = Math.round(ChapterCount) + "/" + Math.round(MaxChapterCount) + "<br />Chapters";
	document.getElementById("PerSecondPage").innerHTML = PageSecond.toFixed(2) + "<br />Pages per second";
	document.getElementById("PrinterButton").innerHTML = Math.round(PrinterCost) + " pages<br /><strong>+1 Printer (" + PrinterMult.toFixed(2) / 2 + "/s)</strong>";
	document.getElementById("UpgradePrinter").innerHTML = Math.round(PrinterUpgradeCost) + " chapters<br /><strong>Printers upgrade</strong>";
	document.getElementById("ClickButton").innerHTML = "+ " + LetterPlus.toFixed(1);
	document.getElementById("LetterClickPlusButton").innerHTML = Math.round(ClickUpgradeCost)  + " letters<br /><strong>Upgrade click</strong>";
	document.getElementById("PenButton").innerHTML = Math.round(PenCost) + " letters<br /><strong>+1 Pen (" + PenMult.toFixed(2) + "/s)</strong>";
	document.getElementById("UpgradePen").innerHTML = Math.round(PenUpgradeCost) + " pages<br /><strong>Pens upgrade</strong>";
	document.getElementById("PerSecond").innerHTML = LetterSecond.toFixed(2) + "<br />Letters per second";
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
