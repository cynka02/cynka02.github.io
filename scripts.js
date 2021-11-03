var Speed = 15;
var SpeedforUpgrade1 = 0;
var SpeedAfterBoost = 0;
var Points = 0;
var MaxPoints = 10;
var LvlCount = 0;
var XPToReach = 50;
var XPOwned = 0;
var LocalSpeed = SpeedAfterBoost + Speed;

var BoostTime = 2000;
var BoostStrenght = 0.3;

var AlternativePoints = MaxPoints/10;
var AlternativePoints2 = MaxPoints/5;
var AlternativePoints3 = (MaxPoints/10) * 3;
var AlternativePoints4 = (MaxPoints/10) * 4;
var AlternativePoints5 = MaxPoints/2;
var AlternativePoints6 = (MaxPoints/10) * 6;
var AlternativePoints7 = (MaxPoints/10) * 7;
var AlternativePoints8 = (MaxPoints/10) * 8;
var AlternativePoints9 = (MaxPoints/10) * 9;

var Upgrade1Cost = 5;
var Upgrade1Value = 5;
var Upgrade1Count = 0;
var Upgrade1SpeedAdd = 1;
var Upgrade1Buy = 0;
var AlternativeUpgrade1Cost = Upgrade1Cost/10;
var AlternativeUpgrade1Cost2 = Upgrade1Cost/5;
var AlternativeUpgrade1Cost3 = (Upgrade1Cost/10) * 3;
var AlternativeUpgrade1Cost4 = (Upgrade1Cost/10) * 4;
var AlternativeUpgrade1Cost5 = Upgrade1Cost/2;
var AlternativeUpgrade1Cost6 = (Upgrade1Cost/10) * 6;
var AlternativeUpgrade1Cost7 = (Upgrade1Cost/10) * 7;
var AlternativeUpgrade1Cost8 = (Upgrade1Cost/10) * 8;
var AlternativeUpgrade1Cost9 = (Upgrade1Cost/10) * 9;

var Upgrade2Cost = 20;
var Upgrade2Value = 20;
var Upgrade2Count = 0;
var Upgrade2Buy = 0;
var AlternativeUpgrade2Cost = Upgrade2Cost/10;
var AlternativeUpgrade2Cost2 = Upgrade2Cost/5;
var AlternativeUpgrade2Cost3 = (Upgrade2Cost/10) * 3;
var AlternativeUpgrade2Cost4 = (Upgrade2Cost/10) * 4;
var AlternativeUpgrade2Cost5 = Upgrade2Cost/2;
var AlternativeUpgrade2Cost6 = (Upgrade2Cost/10) * 6;
var AlternativeUpgrade2Cost7 = (Upgrade2Cost/10) * 7;
var AlternativeUpgrade2Cost8 = (Upgrade2Cost/10) * 8;
var AlternativeUpgrade2Cost9 = (Upgrade2Cost/10) * 9;

var Upgrade3Cost = 30;
var Upgrade3Value = 30;
var Upgrade3Count = 0;
var Upgrade3Buy = 0;
var AlternativeUpgrade3Cost = Upgrade3Cost/10;
var AlternativeUpgrade3Cost2 = Upgrade3Cost/5;
var AlternativeUpgrade3Cost3 = (Upgrade3Cost/10) * 3;
var AlternativeUpgrade3Cost4 = (Upgrade3Cost/10) * 4;
var AlternativeUpgrade3Cost5 = Upgrade3Cost/2;
var AlternativeUpgrade3Cost6 = (Upgrade3Cost/10) * 6;
var AlternativeUpgrade3Cost7 = (Upgrade3Cost/10) * 7;
var AlternativeUpgrade3Cost8 = (Upgrade3Cost/10) * 8;
var AlternativeUpgrade3Cost9 = (Upgrade3Cost/10) * 9;

var Upgrade4Cost = 50;
var Upgrade4Value = 50;
var Upgrade4Count = 0;
var Upgrade4Buy = 0;
var AlternativeUpgrade4Cost = Upgrade4Cost/10;
var AlternativeUpgrade4Cost2 = Upgrade4Cost/5;
var AlternativeUpgrade4Cost3 = (Upgrade4Cost/10) * 3;
var AlternativeUpgrade4Cost4 = (Upgrade4Cost/10) * 4;
var AlternativeUpgrade4Cost5 = Upgrade4Cost/2;
var AlternativeUpgrade4Cost6 = (Upgrade4Cost/10) * 6;
var AlternativeUpgrade4Cost7 = (Upgrade4Cost/10) * 7;
var AlternativeUpgrade4Cost8 = (Upgrade4Cost/10) * 8;
var AlternativeUpgrade4Cost9 = (Upgrade4Cost/10) * 9;

var Upgrade5Cost = 200;
var Upgrade5Value = 200;
var Upgrade5Count = 0;
var Upgrade5Buy = 0;
var AlternativeUpgrade5Cost = Upgrade5Cost/10;
var AlternativeUpgrade5Cost2 = Upgrade5Cost/5;
var AlternativeUpgrade5Cost3 = (Upgrade5Cost/10) * 3;
var AlternativeUpgrade5Cost4 = (Upgrade5Cost/10) * 4;
var AlternativeUpgrade5Cost5 = Upgrade5Cost/2;
var AlternativeUpgrade5Cost6 = (Upgrade5Cost/10) * 6;
var AlternativeUpgrade5Cost7 = (Upgrade5Cost/10) * 7;
var AlternativeUpgrade5Cost8 = (Upgrade5Cost/10) * 8;
var AlternativeUpgrade5Cost9 = (Upgrade5Cost/10) * 9;

var Upgrade6Cost = 5000;
var Upgrade6Value = 5000;
var Upgrade6Count = 0;
var Upgrade6Buy = 0;
var AlternativeUpgrade6Cost = Upgrade6Cost/10;
var AlternativeUpgrade6Cost2 = Upgrade6Cost/5;
var AlternativeUpgrade6Cost3 = (Upgrade6Cost/10) * 3;
var AlternativeUpgrade6Cost4 = (Upgrade6Cost/10) * 4;
var AlternativeUpgrade6Cost5 = Upgrade6Cost/2;
var AlternativeUpgrade6Cost6 = (Upgrade6Cost/10) * 6;
var AlternativeUpgrade6Cost7 = (Upgrade6Cost/10) * 7;
var AlternativeUpgrade6Cost8 = (Upgrade6Cost/10) * 8;
var AlternativeUpgrade6Cost9 = (Upgrade6Cost/10) * 9;

var FilledPerSecond = 0;
var FillingTime = 15;
var FillBonus = 10;



function ScorePoints(){
	LocalSpeed = SpeedAfterBoost + Speed;
	Points += LocalSpeed/6000;
	if (Points <= AlternativePoints){
		var LocalPoints = Points / MaxPoints; 
		var width1 = LocalPoints*1000;
		Widths(width1, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s2s");
		NumbersConverter();
	}
	else if (Points <= AlternativePoints2 && Points > AlternativePoints){
		var LocalPoints = Points / MaxPoints;
		var width2 = (LocalPoints*1000) - 100;
		Widths(100, width2, 0, 0, 0, 0, 0, 0, 0, 0, "s2s");
		NumbersConverter();
	}
	else if (Points <= AlternativePoints3 && Points > AlternativePoints2){
		var LocalPoints = Points / MaxPoints;
		var width3 = (LocalPoints*1000) - 200;
		Widths(100, 100, width3, 0, 0, 0, 0, 0, 0, 0, "s2s");
		NumbersConverter();
	}
	else if (Points <= AlternativePoints4 && Points > AlternativePoints3){
		var LocalPoints = Points / MaxPoints;
		var width4 = (LocalPoints*1000) - 300;
		Widths(100, 100, 100, width4, 0, 0, 0, 0, 0, 0, "s2s");
		NumbersConverter();
	}
	else if (Points <= AlternativePoints5 && Points > AlternativePoints4){
		var LocalPoints = Points / MaxPoints;
		var width5 = (LocalPoints*1000) - 400;
		Widths(100, 100, 100, 100, width5, 0, 0, 0, 0, 0, "s2s");
		NumbersConverter();
	}
	else if (Points <= AlternativePoints6 && Points > AlternativePoints5){
		var LocalPoints = Points / MaxPoints;
		var width6 = (LocalPoints*1000) - 500;
		Widths(100, 100, 100, 100, 100, width6, 0, 0, 0, 0, "s2s");
		NumbersConverter();
	}
	else if (Points <= AlternativePoints7 && Points > AlternativePoints6){
		var LocalPoints = Points / MaxPoints;
		var width7 = (LocalPoints*1000) - 600;
		Widths(100, 100, 100, 100, 100, 100, width7, 0, 0, 0, "s2s");
		NumbersConverter();
	}
	else if (Points <= AlternativePoints8 && Points > AlternativePoints7){
		var LocalPoints = Points / MaxPoints;
		var width8 = (LocalPoints*1000) - 700;
		Widths(100, 100, 100, 100, 100, 100, 100, width8, 0, 0, "s2s");
		NumbersConverter();
	}
	else if (Points <= AlternativePoints9 && Points > AlternativePoints8){
		var LocalPoints = Points / MaxPoints;
		var width9 = (LocalPoints*1000) - 800;
		Widths(100, 100, 100, 100, 100, 100, 100, 100, width9, 0, "s2s");
		NumbersConverter();
	}
	else if (Points < MaxPoints && Points > AlternativePoints9){
		var LocalPoints = Points / MaxPoints;
		var width10 = (LocalPoints*1000) - 900;
		Widths(100, 100, 100, 100, 100, 100, 100, 100, 100, width10, "s2s");
		NumbersConverter();
	}
	else if (Points >= MaxPoints){
		Points = MaxPoints;
		Widths(100, 100, 100, 100, 100, 100, 100, 100, 100, 100, "s2s");
		NumbersConverter();
	}
}setInterval(ScorePoints, 10);



function NumbersConverter(){
	LocalSpeed = SpeedAfterBoost + Speed;
	var LocalLocalSpeed = LocalSpeed/60;
	if (Points < 1000){
		document.getElementById("PointsCount").innerHTML = Points.toFixed(1) + " Points";
	}
	else if (Points >= 1000 && Points < 1000000){
		var LocalPoints = Points/1000;
		document.getElementById("PointsCount").innerHTML = LocalPoints.toFixed(1) + "K Points";
	}
	else if (Points >= 1000000 && Points < 1000000000){
		var LocalPoints = Points/1000000;
		document.getElementById("PointsCount").innerHTML = LocalPoints.toFixed(1) + "M Points";
	}
	else if (Points >= 1000000000 && Points < 1000000000000){
		var LocalPoints = Points/1000000000;
		document.getElementById("PointsCount").innerHTML = LocalPoints.toFixed(1) + "B Points";
	}
	else if (Points >= 1000000000000){
		var LocalPoints = Points/1000000000000;
		document.getElementById("PointsCount").innerHTML = LocalPoints.toFixed(1) + "T Points";
	}
	if (LocalLocalSpeed < 1000){
		document.getElementById("SecondsText").innerHTML = LocalLocalSpeed.toFixed(1) + " p/s";
	}
	else if (LocalLocalSpeed >= 1000 && LocalLocalSpeed < 1000000){
		var LocalLocalSpeedText = LocalLocalSpeed/1000;
		document.getElementById("SecondsText").innerHTML = LocalLocalSpeedText.toFixed(1) + "K p/s";
	}
	else if (LocalLocalSpeed >= 1000000 && LocalLocalSpeed < 1000000000){
		var LocalLocalSpeedText = LocalLocalSpeed/1000000;
		document.getElementById("SecondsText").innerHTML = LocalLocalSpeedText.toFixed(1) + "M p/s";
	}
	else if (LocalLocalSpeed >= 1000000000 && LocalLocalSpeed < 1000000000000){
		var LocalLocalSpeedText = LocalLocalSpeed/1000000000;
		document.getElementById("SecondsText").innerHTML = LocalLocalSpeedText.toFixed(1) + "B p/s";
	}
	else if (LocalLocalSpeed >= 1000000000000){
		var LocalLocalSpeedText = LocalLocalSpeed/1000000000000;
		document.getElementById("SecondsText").innerHTML = LocalLocalSpeedText.toFixed(1) + "T p/s";
	}
	if (Upgrade1Value < 1000){
		document.getElementById("BuyInfo1").innerHTML = "Click to spend points (" + Upgrade1Value.toFixed(1) + " points left)";
	}
	else if (Upgrade1Value >= 1000 && Upgrade1Value < 1000000){
		var LocalUpgrade1Value = Upgrade1Value/1000;
		document.getElementById("BuyInfo1").innerHTML = "Click to spend points (" + LocalUpgrade1Value.toFixed(1) + "K points left)";
	}
	else if (Upgrade1Value >= 1000000 && Upgrade1Value < 1000000000){
		var LocalUpgrade1Value = Upgrade1Value/1000000;
		document.getElementById("BuyInfo1").innerHTML = "Click to spend points (" + LocalUpgrade1Value.toFixed(1) + "M points left)";
	}
	else if (Upgrade1Value >= 1000000000 && Upgrade1Value < 1000000000000){
		var LocalUpgrade1Value = Upgrade1Value/1000000000;
		document.getElementById("BuyInfo1").innerHTML = "Click to spend points (" + LocalUpgrade1Value.toFixed(1) + "B points left)";
	}
	else if (Upgrade1Value >= 1000000000000){
		var LocalUpgrade1Value = Upgrade1Value/1000000000000;
		document.getElementById("BuyInfo1").innerHTML = "Click to spend points (" + LocalUpgrade1Value.toFixed(1) + "T points left)";
	}
	if (Upgrade2Value < 1000){
		document.getElementById("BuyInfo2").innerHTML = "Click to spend points (" + Upgrade2Value.toFixed(1) + " points left)";
	}
	else if (Upgrade2Value >= 1000 && Upgrade2Value < 1000000){
		var LocalUpgrade2Value = Upgrade2Value/1000;
		document.getElementById("BuyInfo2").innerHTML = "Click to spend points (" + LocalUpgrade2Value.toFixed(1) + "K points left)";
	}
	else if (Upgrade2Value >= 1000000 && Upgrade2Value < 1000000000){
		var LocalUpgrade2Value = Upgrade2Value/1000000;
		document.getElementById("BuyInfo2").innerHTML = "Click to spend points (" + LocalUpgrade2Value.toFixed(1) + "M points left)";
	}
	else if (Upgrade2Value >= 1000000000 && Upgrade2Value < 1000000000000){
		var LocalUpgrade2Value = Upgrade2Value/1000000000;
		document.getElementById("BuyInfo2").innerHTML = "Click to spend points (" + LocalUpgrade2Value.toFixed(1) + "B points left)";
	}
	else if (Upgrade2Value >= 1000000000000){
		var LocalUpgrade2Value = Upgrade2Value/1000000000000;
		document.getElementById("BuyInfo2").innerHTML = "Click to spend points (" + LocalUpgrade2Value.toFixed(1) + "T points left)";
	}
	if (Upgrade3Value < 1000){
		document.getElementById("BuyInfo3").innerHTML = "Click to spend points (" + Upgrade3Value.toFixed(1) + " points left)";
	}
	else if (Upgrade3Value >= 1000 && Upgrade3Value < 1000000){
		var LocalUpgrade3Value = Upgrade3Value/1000;
		document.getElementById("BuyInfo3").innerHTML = "Click to spend points (" + LocalUpgrade3Value.toFixed(1) + "K points left)";
	}
	else if (Upgrade3Value >= 1000000 && Upgrade3Value < 1000000000){
		var LocalUpgrade3Value = Upgrade3Value/1000000;
		document.getElementById("BuyInfo3").innerHTML = "Click to spend points (" + LocalUpgrade3Value.toFixed(1) + "M points left)";
	}
	else if (Upgrade3Value >= 1000000000 && Upgrade3Value < 1000000000000){
		var LocalUpgrade3Value = Upgrade3Value/1000000000;
		document.getElementById("BuyInfo3").innerHTML = "Click to spend points (" + LocalUpgrade3Value.toFixed(1) + "B points left)";
	}
	else if (Upgrade3Value >= 1000000000000){
		var LocalUpgrade3Value = Upgrade3Value/1000000000000;
		document.getElementById("BuyInfo3").innerHTML = "Click to spend points (" + LocalUpgrade3Value.toFixed(1) + "T points left)";
	}
	if (Upgrade4Value < 1000){
		document.getElementById("BuyInfo4").innerHTML = "Click to spend points (" + Upgrade4Value.toFixed(1) + " points left)";
	}
	else if (Upgrade4Value >= 1000 && Upgrade4Value < 1000000){
		var LocalUpgrade4Value = Upgrade4Value/1000;
		document.getElementById("BuyInfo4").innerHTML = "Click to spend points (" + LocalUpgrade4Value.toFixed(1) + "K points left)";
	}
	else if (Upgrade4Value >= 1000000 && Upgrade4Value < 1000000000){
		var LocalUpgrade4Value = Upgrade4Value/1000000;
		document.getElementById("BuyInfo4").innerHTML = "Click to spend points (" + LocalUpgrade4Value.toFixed(1) + "M points left)";
	}
	else if (Upgrade4Value >= 1000000000 && Upgrade4Value < 1000000000000){
		var LocalUpgrade4Value = Upgrade4Value/1000000000;
		document.getElementById("BuyInfo4").innerHTML = "Click to spend points (" + LocalUpgrade4Value.toFixed(1) + "B points left)";
	}
	else if (Upgrade4Value >= 1000000000000){
		var LocalUpgrade4Value = Upgrade4Value/1000000000000;
		document.getElementById("BuyInfo4").innerHTML = "Click to spend points (" + LocalUpgrade4Value.toFixed(1) + "T points left)";
	}
	if (XPToReach < 1000 && XPOwned < 1000){
		document.getElementById("LvlProgress").title = XPOwned.toFixed(1) + " XP / " + XPToReach.toFixed(1) + " XP";
	}
	else if (XPToReach >= 1000 && XPToReach < 1000000 && XPOwned < 1000){
		var LocalXPToReach = XPToReach/1000;
		document.getElementById("LvlProgress").title = XPOwned.toFixed(1) + " XP / " + LocalXPToReach.toFixed(1) + "K XP";
	}
	else if (XPToReach >= 1000 && XPToReach < 1000000 && XPOwned >= 1000 && XPOwned < 1000000){
		var LocalXPToReach = XPToReach/1000;
		var LocalXPOwned = XPOwned/1000;
		document.getElementById("LvlProgress").title = LocalXPOwned.toFixed(1) + "K XP / " + LocalXPToReach.toFixed(1) + "K XP";
	}
	else if (XPToReach >= 1000000 && XPToReach < 1000000000 && XPOwned < 1000){
		var LocalXPToReach = XPToReach/1000000;
		document.getElementById("LvlProgress").title = XPOwned.toFixed(1) + " XP / " + LocalXPToReach.toFixed(1) + "M XP";
	}
	else if (XPToReach >= 1000000 && XPToReach < 1000000000 && XPOwned >= 1000 && XPOwned < 1000000){
		var LocalXPToReach = XPToReach/1000000;
		var LocalXPOwned = XPOwned/1000;
		document.getElementById("LvlProgress").title = LocalXPOwned.toFixed(1) + "K XP / " + LocalXPToReach.toFixed(1) + "M XP";
	}
	else if (XPToReach >= 1000000 && XPToReach < 1000000000 && XPOwned >= 1000000 && XPOwned < 1000000000){
		var LocalXPToReach = XPToReach/1000000;
		var LocalXPOwned = XPOwned/1000000;
		document.getElementById("LvlProgress").title = LocalXPOwned.toFixed(1) + "M XP / " + LocalXPToReach.toFixed(1) + "M XP";
	}
	else if (XPToReach >= 1000000000 && XPToReach < 1000000000000 && XPOwned < 1000){
		var LocalXPToReach = XPToReach/1000000000;
		document.getElementById("LvlProgress").title = XPOwned.toFixed(1) + " XP / " + LocalXPToReach.toFixed(1) + "B XP";
	}
	else if (XPToReach >= 1000000000 && XPToReach < 1000000000000 && XPOwned >= 1000 && XPOwned < 1000000){
		var LocalXPToReach = XPToReach/1000000000;
		var LocalXPOwned = XPOwned/1000;
		document.getElementById("LvlProgress").title = LocalXPOwned.toFixed(1) + "K XP / " + LocalXPToReach.toFixed(1) + "B XP";
	}
	else if (XPToReach >= 1000000000 && XPToReach < 1000000000000 && XPOwned >= 1000000 && XPOwned < 1000000000){
		var LocalXPToReach = XPToReach/1000000000;
		var LocalXPOwned = XPOwned/1000000;
		document.getElementById("LvlProgress").title = LocalXPOwned.toFixed(1) + "M XP / " + LocalXPToReach.toFixed(1) + "B XP";
	}
	else if (XPToReach >= 1000000000 && XPToReach < 1000000000000 && XPOwned >= 1000000000 && XPOwned < 1000000000000){
		var LocalXPToReach = XPToReach/1000000000;
		var LocalXPOwned = XPOwned/1000000000;
		document.getElementById("LvlProgress").title = LocalXPOwned.toFixed(1) + "B XP / " + LocalXPToReach.toFixed(1) + "B XP";
	}
	else if (XPToReach >= 1000000000000 && XPOwned < 1000){
		var LocalXPToReach = XPToReach/1000000000000;
		document.getElementById("LvlProgress").title = XPOwned.toFixed(1) + " XP / " + LocalXPToReach.toFixed(1) + "T XP";
	}
	else if (XPToReach >= 1000000000000 && XPOwned >= 1000 && XPOwned < 1000000){
		var LocalXPToReach = XPToReach/1000000000000;
		var LocalXPOwned = XPOwned/1000;
		document.getElementById("LvlProgress").title = LocalXPOwned.toFixed(1) + "K XP / " + LocalXPToReach.toFixed(1) + "T XP";
	}
	else if (XPToReach >= 1000000000000 && XPOwned >= 1000000 && XPOwned < 1000000000){
		var LocalXPToReach = XPToReach/1000000000000;
		var LocalXPOwned = XPOwned/1000000;
		document.getElementById("LvlProgress").title = LocalXPOwned.toFixed(1) + "M XP / " + LocalXPToReach.toFixed(1) + "T XP";
	}
	else if (XPToReach >= 1000000000000 && XPOwned >= 1000000000 && XPOwned < 1000000000000){
		var LocalXPToReach = XPToReach/1000000000000;
		var LocalXPOwned = XPOwned/1000000000;
		document.getElementById("LvlProgress").title = LocalXPOwned.toFixed(1) + "B XP / " + LocalXPToReach.toFixed(1) + "T XP";
	}
	else if (XPToReach >= 1000000000000 && XPOwned >= 1000000000000){
		var LocalXPToReach = XPToReach/1000000000000;
		var LocalXPOwned = XPOwned/1000000000000;
		document.getElementById("LvlProgress").title = LocalXPOwned.toFixed(1) + "T XP / " + LocalXPToReach.toFixed(1) + "T XP";
	}
	if (Upgrade5Value < 1000){
		document.getElementById("BuyInfo5").innerHTML = "Click to spend points (" + Upgrade5Value.toFixed(1) + " points left)";
	}
	else if (Upgrade5Value >= 1000 && Upgrade5Value < 1000000){
		var LocalUpgrade5Value = Upgrade5Value/1000;
		document.getElementById("BuyInfo5").innerHTML = "Click to spend points (" + LocalUpgrade5Value.toFixed(1) + "K points left)";
	}
	else if (Upgrade5Value >= 1000000 && Upgrade5Value < 1000000000){
		var LocalUpgrade5Value = Upgrade5Value/1000000;
		document.getElementById("BuyInfo5").innerHTML = "Click to spend points (" + LocalUpgrade5Value.toFixed(1) + "M points left)";
	}
	else if (Upgrade5Value >= 1000000000 && Upgrade5Value < 1000000000000){
		var LocalUpgrade5Value = Upgrade5Value/1000000000;
		document.getElementById("BuyInfo5").innerHTML = "Click to spend points (" + LocalUpgrade5Value.toFixed(1) + "B points left)";
	}
	else if (Upgrade5Value >= 1000000000000){
		var LocalUpgrade5Value = Upgrade5Value/1000000000000;
		document.getElementById("BuyInfo5").innerHTML = "Click to spend points (" + LocalUpgrade5Value.toFixed(1) + "T points left)";
	}
	if (Upgrade6Value < 1000){
		document.getElementById("BuyInfo6").innerHTML = "Click to spend points (" + Upgrade6Value.toFixed(1) + " points left)";
	}
	else if (Upgrade6Value >= 1000 && Upgrade6Value < 1000000){
		var LocalUpgrade6Value = Upgrade6Value/1000;
		document.getElementById("BuyInfo6").innerHTML = "Click to spend points (" + LocalUpgrade6Value.toFixed(1) + "K points left)";
	}
	else if (Upgrade6Value >= 1000000 && Upgrade6Value < 1000000000){
		var LocalUpgrade6Value = Upgrade6Value/1000000;
		document.getElementById("BuyInfo6").innerHTML = "Click to spend points (" + LocalUpgrade6Value.toFixed(1) + "M points left)";
	}
	else if (Upgrade6Value >= 1000000000 && Upgrade6Value < 1000000000000){
		var LocalUpgrade6Value = Upgrade6Value/1000000000;
		document.getElementById("BuyInfo6").innerHTML = "Click to spend points (" + LocalUpgrade6Value.toFixed(1) + "B points left)";
	}
	else if (Upgrade6Value >= 1000000000000){
		var LocalUpgrade6Value = Upgrade6Value/1000000000000;
		document.getElementById("BuyInfo6").innerHTML = "Click to spend points (" + LocalUpgrade6Value.toFixed(1) + "T points left)";
	}
	if (FillBonus < 1000){
		document.getElementById("ps").title = "every " + FillingTime.toFixed(1) + " seconds gives " + FillBonus.toFixed(1) + " points";
	}
	else if (FillBonus >= 1000 && FillBonus < 1000000){
		var LocalFillBonus = FillBonus/1000;
		document.getElementById("ps").title = "every " + FillingTime.toFixed(1) + " seconds gives " + LocalFillBonus.toFixed(1) + "K points";
	}
	else if (FillBonus >= 1000000 && FillBonus < 1000000000){
		var LocalFillBonus = FillBonus/1000000;
		document.getElementById("ps").title = "every " + FillingTime.toFixed(1) + " seconds gives " + LocalFillBonus.toFixed(1) + "M points";
	}
	else if (FillBonus >= 1000000000 && FillBonus < 1000000000000){
		var LocalFillBonus = FillBonus/1000000000;
		document.getElementById("ps").title = "every " + FillingTime.toFixed(1) + " seconds gives " + LocalFillBonus.toFixed(1) + "B points";
	}
	else if (FillBonus >= 1000000000000){
		var LocalFillBonus = FillBonus/1000000000000;
		document.getElementById("ps").title = "every " + FillingTime.toFixed(1) + " seconds gives " + LocalFillBonus.toFixed(1) + "T points";
	}
	if (MaxPoints < 1000){
		document.getElementById("Upgrade4Add").innerHTML = "Increase maximum capacity x10 (current: " + MaxPoints +")";
	}
	else if (MaxPoints >= 1000 && MaxPoints < 1000000){
		var LocalMaxPoints = MaxPoints/1000;
		document.getElementById("Upgrade4Add").innerHTML = "Increase maximum capacity x10 (current: " + LocalMaxPoints.toFixed(1) +"K)";
	}
	else if (MaxPoints >= 1000000 && MaxPoints < 1000000000){
		var LocalMaxPoints = MaxPoints/1000000;
		document.getElementById("Upgrade4Add").innerHTML = "Increase maximum capacity x10 (current: " + LocalMaxPoints.toFixed(1) +"M)";
	}
	else if (MaxPoints >= 1000000000 && MaxPoints < 1000000000000){
		var LocalMaxPoints = MaxPoints/1000000000;
		document.getElementById("Upgrade4Add").innerHTML = "Increase maximum capacity x10 (current: " + LocalMaxPoints.toFixed(1) +"B)";
	}
	else if (MaxPoints >= 1000000000000){
		var LocalMaxPoints = MaxPoints/1000000000000;
		document.getElementById("Upgrade4Add").innerHTML = "Increase maximum capacity x10 (current: " + LocalMaxPoints.toFixed(1) +"T)";
	}
}



function Widths(width1, width2, width3, width4, width5, width6, width7, width8, width9, width10, ss){
	var ss1 = ss + "1";
	var ss2 = ss + "2";
	var ss3 = ss + "3";
	var ss4 = ss + "4";
	var ss5 = ss + "5";
	var ss6 = ss + "6";
	var ss7 = ss + "7";
	var ss8 = ss + "8";
	var ss9 = ss + "9";
	var ss10 = ss + "10";
	document.getElementById(ss1).style = "width: " + width1 +"%;";
	document.getElementById(ss2).style = "width: " + width2 +"%;";
	document.getElementById(ss3).style = "width: " + width3 +"%;";
	document.getElementById(ss4).style = "width: " + width4 +"%;";
	document.getElementById(ss5).style = "width: " + width5 +"%;";
	document.getElementById(ss6).style = "width: " + width6 +"%;";
	document.getElementById(ss7).style = "width: " + width7 +"%;";
	document.getElementById(ss8).style = "width: " + width8 +"%;";
	document.getElementById(ss9).style = "width: " + width9 +"%;";
	document.getElementById(ss10).style = "width: " + width10 +"%;";
}



document.getElementById("Boost").onclick = function(){
	document.getElementById("Boost").style = "color: #f8ff00;";
	SpeedAfterBoost = Speed * BoostStrenght;
	NumbersConverter();
	function Timeout(){
		document.getElementById("Boost").style = "color: #e76666;";
		SpeedAfterBoost = 0;
		NumbersConverter();
	} setTimeout(Timeout, BoostTime);
}



document.getElementById("Upgrade1").onclick = function() {
	if (Upgrade1Value <= Points){
		SpeedforUpgrade1 += Upgrade1SpeedAdd;
		Speed += SpeedforUpgrade1;
		Widths(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s2su");
		XPOwned += Upgrade1Value/2;
		Points -= Upgrade1Value;
		Upgrade1Count += 1;
		Upgrade1Cost = 5*Math.pow(1.09, Upgrade1Count);
		Upgrade1Value = Upgrade1Cost;
		Upgrade1Buy = 0;
		document.getElementById("Upgrade1Level").innerHTML = "Lvl " + Upgrade1Count + ", progress to lvl " + (Upgrade1Count+1) +":";
		if (Upgrade1Count % 10 == 0){
			SpeedforUpgrade1 = SpeedforUpgrade1*2;
			Upgrade1SpeedAdd = Upgrade1SpeedAdd*2;
			Speed += SpeedforUpgrade1;
			document.getElementById("Upgrade1Add").innerHTML = "+ " + Upgrade1SpeedAdd + " Points Per Minute";
		}
	}
	else if (Points < Upgrade1Value){
		XPOwned += Points/2;
		Upgrade1Buy += Points;
		Upgrade1Value -= Points;
		Points = 0;
	}
	Upgrade1ProgressF();
	CountLevel();
	NumbersConverter();
}



function Upgrade1ProgressF(){
	AlternativeUpgrade1Cost = Upgrade1Cost/10;
	AlternativeUpgrade1Cost2 = Upgrade1Cost/5;
	AlternativeUpgrade1Cost3 = (Upgrade1Cost/10) * 3;
	AlternativeUpgrade1Cost4 = (Upgrade1Cost/10) * 4;
	AlternativeUpgrade1Cost5 = Upgrade1Cost/2;
	AlternativeUpgrade1Cost6 = (Upgrade1Cost/10) * 6;
	AlternativeUpgrade1Cost7 = (Upgrade1Cost/10) * 7;
	AlternativeUpgrade1Cost8 = (Upgrade1Cost/10) * 8;
	AlternativeUpgrade1Cost9 = (Upgrade1Cost/10) * 9;
	if (Upgrade1Buy <= AlternativeUpgrade1Cost){
		var LocalValue = Upgrade1Buy / Upgrade1Cost; 
		var width1 = LocalValue*1000;
		Widths(width1, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s2su");
	}
	else if (Upgrade1Buy <= AlternativeUpgrade1Cost2 && Upgrade1Buy > AlternativeUpgrade1Cost){
		var LocalValue = Upgrade1Buy / Upgrade1Cost; 
		var width2 = (LocalValue*1000) - 100;
		Widths(100, width2, 0, 0, 0, 0, 0, 0, 0, 0, "s2su");
	}
	else if (Upgrade1Buy <= AlternativeUpgrade1Cost3 && Upgrade1Buy > AlternativeUpgrade1Cost2){
		var LocalValue = Upgrade1Buy / Upgrade1Cost; 
		var width3 = (LocalValue*1000) - 200;
		Widths(100, 100, width3, 0, 0, 0, 0, 0, 0, 0, "s2su");
	}
	else if (Upgrade1Buy <= AlternativeUpgrade1Cost4 && Upgrade1Buy > AlternativeUpgrade1Cost3){
		var LocalValue = Upgrade1Buy / Upgrade1Cost; 
		var width4 = (LocalValue*1000) - 300;
		Widths(100, 100, 100, width4, 0, 0, 0, 0, 0, 0, "s2su");
	}
	else if (Upgrade1Buy <= AlternativeUpgrade1Cost5 && Upgrade1Buy > AlternativeUpgrade1Cost4){
		var LocalValue = Upgrade1Buy / Upgrade1Cost; 
		var width5 = (LocalValue*1000) - 400;
		Widths(100, 100, 100, 100, width5, 0, 0, 0, 0, 0, "s2su");
	}
	else if (Upgrade1Buy <= AlternativeUpgrade1Cost6 && Upgrade1Buy > AlternativeUpgrade1Cost5){
		var LocalValue = Upgrade1Buy / Upgrade1Cost; 
		var width6 = (LocalValue*1000) - 500;
		Widths(100, 100, 100, 100, 100, width6, 0, 0, 0, 0, "s2su");
	}
	else if (Upgrade1Buy <= AlternativeUpgrade1Cost7 && Upgrade1Buy > AlternativeUpgrade1Cost6){
		var LocalValue = Upgrade1Buy / Upgrade1Cost; 
		var width7 = (LocalValue*1000) - 600;
		Widths(100, 100, 100, 100, 100, 100, width7, 0, 0, 0, "s2su");
	}
	else if (Upgrade1Buy <= AlternativeUpgrade1Cost8 && Upgrade1Buy > AlternativeUpgrade1Cost7){
		var LocalValue = Upgrade1Buy / Upgrade1Cost; 
		var width8 = (LocalValue*1000) - 700;
		Widths(100, 100, 100, 100, 100, 100, 100, width8, 0, 0, "s2su");
	}
	else if (Upgrade1Buy <= AlternativeUpgrade1Cost9 && Upgrade1Buy > AlternativeUpgrade1Cost8){
		var LocalValue = Upgrade1Buy / Upgrade1Cost; 
		var width9 = (LocalValue*1000) - 800;
		Widths(100, 100, 100, 100, 100, 100, 100, 100, width9, 0, "s2su");
	}
	else if (Upgrade1Buy <= Upgrade1Cost && Upgrade1Buy > AlternativeUpgrade1Cost9){
		var LocalValue = Upgrade1Buy / Upgrade1Cost; 
		var width10 = (LocalValue*1000) - 900;
		Widths(100, 100, 100, 100, 100, 100, 100, 100, 100, width10, "s2su");
	}
	else if (Upgrade1Buy >= Upgrade1Cost){
		Widths(100, 100, 100, 100, 100, 100, 100, 100, 100, 100, "s2su");
	}
}



document.getElementById("Upgrade2").onclick = function(){
	if (Upgrade2Value <= Points){
		Widths(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s2su2");
		XPOwned += Upgrade2Value/2;
		Points -= Upgrade2Value;
		Upgrade2Count += 1;
		Upgrade2Cost = 20*Math.pow(1.21, Upgrade2Count);
		Upgrade2Value = Upgrade2Cost;
		Upgrade2Buy = 0;
		BoostTime += 100;
		var LocalBoostTime = BoostTime/1000;
		var LocalBoostStrenght = BoostStrenght + 1;
		document.getElementById("Boost").title = "x" + LocalBoostStrenght.toFixed(2) + " PPM for " + LocalBoostTime + " seconds";
		document.getElementById("Upgrade2Level").innerHTML = "Lvl " + Upgrade2Count + ", progress to lvl " + (Upgrade2Count+1) +":";
	}
	else if (Upgrade2Value > Points){
		XPOwned += Points/2;
		Upgrade2Buy += Points;
		Upgrade2Value -= Points;
		Points = 0;
	}
	Upgrade2ProgressF();
	CountLevel();
	NumbersConverter();
}



function Upgrade2ProgressF(){
	AlternativeUpgrade2Cost = Upgrade2Cost/10;
	AlternativeUpgrade2Cost2 = Upgrade2Cost/5;
	AlternativeUpgrade2Cost3 = (Upgrade2Cost/10) * 3;
	AlternativeUpgrade2Cost4 = (Upgrade2Cost/10) * 4;
	AlternativeUpgrade2Cost5 = Upgrade2Cost/2;
	AlternativeUpgrade2Cost6 = (Upgrade2Cost/10) * 6;
	AlternativeUpgrade2Cost7 = (Upgrade2Cost/10) * 7;
	AlternativeUpgrade2Cost8 = (Upgrade2Cost/10) * 8;
	AlternativeUpgrade2Cost9 = (Upgrade2Cost/10) * 9;
	if (Upgrade2Buy <= AlternativeUpgrade2Cost){
		var LocalValue = Upgrade2Buy / Upgrade2Cost; 
		var width1 = LocalValue*1000;
		Widths(width1, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s2su2");
	}
	else if (Upgrade2Buy <= AlternativeUpgrade2Cost2 && Upgrade2Buy > AlternativeUpgrade2Cost){
		var LocalValue = Upgrade2Buy / Upgrade2Cost; 
		var width2 = (LocalValue*1000) - 100;
		Widths(100, width2, 0, 0, 0, 0, 0, 0, 0, 0, "s2su2");
	}
	else if (Upgrade2Buy <= AlternativeUpgrade2Cost3 && Upgrade2Buy > AlternativeUpgrade2Cost2){
		var LocalValue = Upgrade2Buy / Upgrade2Cost; 
		var width3 = (LocalValue*1000) - 200;
		Widths(100, 100, width3, 0, 0, 0, 0, 0, 0, 0, "s2su2");
	}
	else if (Upgrade2Buy <= AlternativeUpgrade2Cost4 && Upgrade2Buy > AlternativeUpgrade2Cost3){
		var LocalValue = Upgrade2Buy / Upgrade2Cost; 
		var width4 = (LocalValue*1000) - 300;
		Widths(100, 100, 100, width4, 0, 0, 0, 0, 0, 0, "s2su2");
	}
	else if (Upgrade2Buy <= AlternativeUpgrade2Cost5 && Upgrade2Buy > AlternativeUpgrade2Cost4){
		var LocalValue = Upgrade2Buy / Upgrade2Cost; 
		var width5 = (LocalValue*1000) - 400;
		Widths(100, 100, 100, 100, width5, 0, 0, 0, 0, 0, "s2su2");
	}
	else if (Upgrade2Buy <= AlternativeUpgrade2Cost6 && Upgrade2Buy > AlternativeUpgrade2Cost5){
		var LocalValue = Upgrade2Buy / Upgrade2Cost; 
		var width6 = (LocalValue*1000) - 500;
		Widths(100, 100, 100, 100, 100, width6, 0, 0, 0, 0, "s2su2");
	}
	else if (Upgrade2Buy <= AlternativeUpgrade2Cost7 && Upgrade2Buy > AlternativeUpgrade2Cost6){
		var LocalValue = Upgrade2Buy / Upgrade2Cost; 
		var width7 = (LocalValue*1000) - 600;
		Widths(100, 100, 100, 100, 100, 100, width7, 0, 0, 0, "s2su2");
	}
	else if (Upgrade2Buy <= AlternativeUpgrade2Cost8 && Upgrade2Buy > AlternativeUpgrade2Cost7){
		var LocalValue = Upgrade2Buy / Upgrade2Cost; 
		var width8 = (LocalValue*1000) - 700;
		Widths(100, 100, 100, 100, 100, 100, 100, width8, 0, 0, "s2su2");
	}
	else if (Upgrade2Buy <= AlternativeUpgrade2Cost9 && Upgrade2Buy > AlternativeUpgrade2Cost8){
		var LocalValue = Upgrade2Buy / Upgrade2Cost; 
		var width9 = (LocalValue*1000) - 800;
		Widths(100, 100, 100, 100, 100, 100, 100, 100, width9, 0, "s2su2");
	}
	else if (Upgrade2Buy <= Upgrade2Cost && Upgrade2Buy > AlternativeUpgrade2Cost9){
		var LocalValue = Upgrade2Buy / Upgrade2Cost; 
		var width10 = (LocalValue*1000) - 900;
		Widths(100, 100, 100, 100, 100, 100, 100, 100, 100, width10, "s2su2");
	}
	else if (Upgrade2Buy >= Upgrade2Cost){
		Widths(100, 100, 100, 100, 100, 100, 100, 100, 100, 100, "s2su2");
	}
}



document.getElementById("Upgrade3").onclick = function(){
	if (Upgrade3Value <= Points){
		Widths(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s2su3");
		XPOwned += Upgrade3Value/2;
		Points -= Upgrade3Value;
		Upgrade3Count += 1;
		Upgrade3Cost = 30*Math.pow(1.22, Upgrade3Count);
		Upgrade3Value = Upgrade3Cost;
		Upgrade3Buy = 0;
		BoostStrenght += 0.01;
		var LocalBoostTime = BoostTime/1000;
		var LocalBoostStrenght = BoostStrenght + 1;
		document.getElementById("Boost").title = "x" + LocalBoostStrenght.toFixed(2) + " PPM for " + LocalBoostTime + " seconds";
		document.getElementById("Upgrade3Level").innerHTML = "Lvl " + Upgrade3Count + ", progress to lvl " + (Upgrade3Count+1) +":";
	}
	else if (Upgrade3Value > Points){
		XPOwned += Points/2;
		Upgrade3Buy += Points;
		Upgrade3Value -= Points;
		Points = 0;
	}
	Upgrade3ProgressF();
	CountLevel();
	NumbersConverter();
}



function Upgrade3ProgressF(){
	AlternativeUpgrade3Cost = Upgrade3Cost/10;
	AlternativeUpgrade3Cost2 = Upgrade3Cost/5;
	AlternativeUpgrade3Cost3 = (Upgrade3Cost/10) * 3;
	AlternativeUpgrade3Cost4 = (Upgrade3Cost/10) * 4;
	AlternativeUpgrade3Cost5 = Upgrade3Cost/2;
	AlternativeUpgrade3Cost6 = (Upgrade3Cost/10) * 6;
	AlternativeUpgrade3Cost7 = (Upgrade3Cost/10) * 7;
	AlternativeUpgrade3Cost8 = (Upgrade3Cost/10) * 8;
	AlternativeUpgrade3Cost9 = (Upgrade3Cost/10) * 9;
	if (Upgrade3Buy <= AlternativeUpgrade3Cost){
		var LocalValue = Upgrade3Buy / Upgrade3Cost; 
		var width1 = LocalValue*1000;
		Widths(width1, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s2su3");
	}
	else if (Upgrade3Buy <= AlternativeUpgrade3Cost2 && Upgrade3Buy > AlternativeUpgrade3Cost){
		var LocalValue = Upgrade3Buy / Upgrade3Cost; 
		var width2 = (LocalValue*1000) - 100;
		Widths(100, width2, 0, 0, 0, 0, 0, 0, 0, 0, "s2su3");
	}
	else if (Upgrade3Buy <= AlternativeUpgrade3Cost3 && Upgrade3Buy > AlternativeUpgrade3Cost2){
		var LocalValue = Upgrade3Buy / Upgrade3Cost; 
		var width3 = (LocalValue*1000) - 200;
		Widths(100, 100, width3, 0, 0, 0, 0, 0, 0, 0, "s2su3");
	}
	else if (Upgrade3Buy <= AlternativeUpgrade3Cost4 && Upgrade3Buy > AlternativeUpgrade3Cost3){
		var LocalValue = Upgrade3Buy / Upgrade3Cost; 
		var width4 = (LocalValue*1000) - 300;
		Widths(100, 100, 100, width4, 0, 0, 0, 0, 0, 0, "s2su3");
	}
	else if (Upgrade3Buy <= AlternativeUpgrade3Cost5 && Upgrade3Buy > AlternativeUpgrade3Cost4){
		var LocalValue = Upgrade3Buy / Upgrade3Cost; 
		var width5 = (LocalValue*1000) - 400;
		Widths(100, 100, 100, 100, width5, 0, 0, 0, 0, 0, "s2su3");
	}
	else if (Upgrade3Buy <= AlternativeUpgrade3Cost6 && Upgrade3Buy > AlternativeUpgrade3Cost5){
		var LocalValue = Upgrade3Buy / Upgrade3Cost; 
		var width6 = (LocalValue*1000) - 500;
		Widths(100, 100, 100, 100, 100, width6, 0, 0, 0, 0, "s2su3");
	}
	else if (Upgrade3Buy <= AlternativeUpgrade3Cost7 && Upgrade3Buy > AlternativeUpgrade3Cost6){
		var LocalValue = Upgrade3Buy / Upgrade3Cost; 
		var width7 = (LocalValue*1000) - 600;
		Widths(100, 100, 100, 100, 100, 100, width7, 0, 0, 0, "s2su3");
	}
	else if (Upgrade3Buy <= AlternativeUpgrade3Cost8 && Upgrade3Buy > AlternativeUpgrade3Cost7){
		var LocalValue = Upgrade3Buy / Upgrade3Cost; 
		var width8 = (LocalValue*1000) - 700;
		Widths(100, 100, 100, 100, 100, 100, 100, width8, 0, 0, "s2su3");
	}
	else if (Upgrade3Buy <= AlternativeUpgrade3Cost9 && Upgrade3Buy > AlternativeUpgrade3Cost8){
		var LocalValue = Upgrade3Buy / Upgrade3Cost; 
		var width9 = (LocalValue*1000) - 800;
		Widths(100, 100, 100, 100, 100, 100, 100, 100, width9, 0, "s2su3");
	}
	else if (Upgrade3Buy <= Upgrade3Cost && Upgrade3Buy > AlternativeUpgrade3Cost9){
		var LocalValue = Upgrade3Buy / Upgrade3Cost; 
		var width10 = (LocalValue*1000) - 900;
		Widths(100, 100, 100, 100, 100, 100, 100, 100, 100, width10, "s2su3");
	}
	else if (Upgrade3Buy >= Upgrade3Cost){
		Widths(100, 100, 100, 100, 100, 100, 100, 100, 100, 100, "s2su3");
	}
}



document.getElementById("Upgrade4").onclick = function() {
	if (Upgrade4Value <= Points){
		Widths(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s2su4");
		XPOwned += Upgrade4Value/2;
		Points -= Upgrade4Value;
		Upgrade4Count += 1;
		Upgrade4Cost = 50*Math.pow(10, Upgrade4Count);
		Upgrade4Value = Upgrade4Cost;
		Upgrade4Buy = 0;
		MaxPoints = MaxPoints*10;
		document.getElementById("Upgrade4Level").innerHTML = "Lvl " + Upgrade4Count + ", progress to lvl " + (Upgrade4Count+1) +":";
		AlternativePoints = MaxPoints/10;
		AlternativePoints2 = MaxPoints/5;
		AlternativePoints3 = (MaxPoints/10) * 3;
		AlternativePoints4 = (MaxPoints/10) * 4;
		AlternativePoints5 = MaxPoints/2;
		AlternativePoints6 = (MaxPoints/10) * 6;
		AlternativePoints7 = (MaxPoints/10) * 7;
		AlternativePoints8 = (MaxPoints/10) * 8;
		AlternativePoints9 = (MaxPoints/10) * 9;
	}
	else if (Upgrade4Value > Points){
		XPOwned += Points/2;
		Upgrade4Buy += Points;
		Upgrade4Value -= Points;
		Points = 0;
	}
	Upgrade4ProgressF();
	CountLevel();
	NumbersConverter();
}



function Upgrade4ProgressF(){
	AlternativeUpgrade4Cost = Upgrade4Cost/10;
	AlternativeUpgrade4Cost2 = Upgrade4Cost/5;
	AlternativeUpgrade4Cost3 = (Upgrade4Cost/10) * 3;
	AlternativeUpgrade4Cost4 = (Upgrade4Cost/10) * 4;
	AlternativeUpgrade4Cost5 = Upgrade4Cost/2;
	AlternativeUpgrade4Cost6 = (Upgrade4Cost/10) * 6;
	AlternativeUpgrade4Cost7 = (Upgrade4Cost/10) * 7;
	AlternativeUpgrade4Cost8 = (Upgrade4Cost/10) * 8;
	AlternativeUpgrade4Cost9 = (Upgrade4Cost/10) * 9;
	if (Upgrade4Buy <= AlternativeUpgrade4Cost){
		var LocalValue = Upgrade4Buy / Upgrade4Cost; 
		var width1 = LocalValue*1000;
		Widths(width1, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s2su4");
	}
	else if (Upgrade4Buy <= AlternativeUpgrade4Cost2 && Upgrade4Buy > AlternativeUpgrade4Cost){
		var LocalValue = Upgrade4Buy / Upgrade4Cost; 
		var width2 = (LocalValue*1000) - 100;
		Widths(100, width2, 0, 0, 0, 0, 0, 0, 0, 0, "s2su4");
	}
	else if (Upgrade4Buy <= AlternativeUpgrade4Cost3 && Upgrade4Buy > AlternativeUpgrade4Cost2){
		var LocalValue = Upgrade4Buy / Upgrade4Cost; 
		var width3 = (LocalValue*1000) - 200;
		Widths(100, 100, width3, 0, 0, 0, 0, 0, 0, 0, "s2su4");
	}
	else if (Upgrade4Buy <= AlternativeUpgrade4Cost4 && Upgrade4Buy > AlternativeUpgrade4Cost3){
		var LocalValue = Upgrade4Buy / Upgrade4Cost; 
		var width4 = (LocalValue*1000) - 300;
		Widths(100, 100, 100, width4, 0, 0, 0, 0, 0, 0, "s2su4");
	}
	else if (Upgrade4Buy <= AlternativeUpgrade4Cost5 && Upgrade4Buy > AlternativeUpgrade4Cost4){
		var LocalValue = Upgrade4Buy / Upgrade4Cost; 
		var width5 = (LocalValue*1000) - 400;
		Widths(100, 100, 100, 100, width5, 0, 0, 0, 0, 0, "s2su4");
	}
	else if (Upgrade4Buy <= AlternativeUpgrade4Cost6 && Upgrade4Buy > AlternativeUpgrade4Cost5){
		var LocalValue = Upgrade4Buy / Upgrade4Cost; 
		var width6 = (LocalValue*1000) - 500;
		Widths(100, 100, 100, 100, 100, width6, 0, 0, 0, 0, "s2su4");
	}
	else if (Upgrade4Buy <= AlternativeUpgrade4Cost7 && Upgrade4Buy > AlternativeUpgrade4Cost6){
		var LocalValue = Upgrade4Buy / Upgrade4Cost; 
		var width7 = (LocalValue*1000) - 600;
		Widths(100, 100, 100, 100, 100, 100, width7, 0, 0, 0, "s2su4");
	}
	else if (Upgrade4Buy <= AlternativeUpgrade4Cost8 && Upgrade4Buy > AlternativeUpgrade4Cost7){
		var LocalValue = Upgrade4Buy / Upgrade4Cost; 
		var width8 = (LocalValue*1000) - 700;
		Widths(100, 100, 100, 100, 100, 100, 100, width8, 0, 0, "s2su4");
	}
	else if (Upgrade4Buy <= AlternativeUpgrade4Cost9 && Upgrade4Buy > AlternativeUpgrade4Cost8){
		var LocalValue = Upgrade4Buy / Upgrade4Cost; 
		var width9 = (LocalValue*1000) - 800;
		Widths(100, 100, 100, 100, 100, 100, 100, 100, width9, 0, "s2su4");
	}
	else if (Upgrade4Buy <= Upgrade4Cost && Upgrade4Buy > AlternativeUpgrade4Cost9){
		var LocalValue = Upgrade4Buy / Upgrade4Cost; 
		var width10 = (LocalValue*1000) - 900;
		Widths(100, 100, 100, 100, 100, 100, 100, 100, 100, width10, "s2su4");
	}
	else if (Upgrade4Buy >= Upgrade4Cost){
		Widths(100, 100, 100, 100, 100, 100, 100, 100, 100, 100, "s2su4");
	}
}



document.getElementById("Upgrade5").onclick = function() {
	if (Upgrade5Value <= Points){
		Widths(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s2su5");
		XPOwned += Upgrade5Value/2;
		Points -= Upgrade5Value;
		Upgrade5Count += 1;
		Upgrade5Cost = 200*Math.pow(1.12, Upgrade5Count);
		Upgrade5Value = Upgrade5Cost;
		Upgrade5Buy = 0;
		FillBonus += 1/10*FillBonus;
		document.getElementById("Upgrade5Level").innerHTML = "Lvl " + Upgrade5Count + ", progress to lvl " + (Upgrade5Count+1) +":";
		document.getElementById("ps").title = "every " + FillingTime.toFixed(1) + " seconds gives " + FillBonus.toFixed(1) + " points";
	}
	else if (Upgrade5Value > Points){
		XPOwned += Points/2;
		Upgrade5Buy += Points;
		Upgrade5Value -= Points;
		Points = 0;
	}
	Upgrade5ProgressF();
	CountLevel();
	NumbersConverter();
}



function Upgrade5ProgressF(){
	AlternativeUpgrade5Cost = Upgrade5Cost/10;
	AlternativeUpgrade5Cost2 = Upgrade5Cost/5;
	AlternativeUpgrade5Cost3 = (Upgrade5Cost/10) * 3;
	AlternativeUpgrade5Cost4 = (Upgrade5Cost/10) * 4;
	AlternativeUpgrade5Cost5 = Upgrade5Cost/2;
	AlternativeUpgrade5Cost6 = (Upgrade5Cost/10) * 6;
	AlternativeUpgrade5Cost7 = (Upgrade5Cost/10) * 7;
	AlternativeUpgrade5Cost8 = (Upgrade5Cost/10) * 8;
	AlternativeUpgrade5Cost9 = (Upgrade5Cost/10) * 9;
	if (Upgrade5Buy <= AlternativeUpgrade5Cost){
		var LocalValue = Upgrade5Buy / Upgrade5Cost; 
		var width1 = LocalValue*1000;
		Widths(width1, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s2su5");
	}
	else if (Upgrade5Buy <= AlternativeUpgrade5Cost2 && Upgrade5Buy > AlternativeUpgrade5Cost){
		var LocalValue = Upgrade5Buy / Upgrade5Cost; 
		var width2 = (LocalValue*1000) - 100;
		Widths(100, width2, 0, 0, 0, 0, 0, 0, 0, 0, "s2su5");
	}
	else if (Upgrade5Buy <= AlternativeUpgrade5Cost3 && Upgrade5Buy > AlternativeUpgrade5Cost2){
		var LocalValue = Upgrade5Buy / Upgrade5Cost; 
		var width3 = (LocalValue*1000) - 200;
		Widths(100, 100, width3, 0, 0, 0, 0, 0, 0, 0, "s2su5");
	}
	else if (Upgrade5Buy <= AlternativeUpgrade5Cost4 && Upgrade5Buy > AlternativeUpgrade5Cost3){
		var LocalValue = Upgrade5Buy / Upgrade5Cost; 
		var width4 = (LocalValue*1000) - 300;
		Widths(100, 100, 100, width4, 0, 0, 0, 0, 0, 0, "s2su5");
	}
	else if (Upgrade5Buy <= AlternativeUpgrade5Cost5 && Upgrade5Buy > AlternativeUpgrade5Cost4){
		var LocalValue = Upgrade5Buy / Upgrade5Cost; 
		var width5 = (LocalValue*1000) - 400;
		Widths(100, 100, 100, 100, width5, 0, 0, 0, 0, 0, "s2su5");
	}
	else if (Upgrade5Buy <= AlternativeUpgrade5Cost6 && Upgrade5Buy > AlternativeUpgrade5Cost5){
		var LocalValue = Upgrade5Buy / Upgrade5Cost; 
		var width6 = (LocalValue*1000) - 500;
		Widths(100, 100, 100, 100, 100, width6, 0, 0, 0, 0, "s2su5");
	}
	else if (Upgrade5Buy <= AlternativeUpgrade5Cost7 && Upgrade5Buy > AlternativeUpgrade5Cost6){
		var LocalValue = Upgrade5Buy / Upgrade5Cost; 
		var width7 = (LocalValue*1000) - 600;
		Widths(100, 100, 100, 100, 100, 100, width7, 0, 0, 0, "s2su5");
	}
	else if (Upgrade5Buy <= AlternativeUpgrade5Cost8 && Upgrade5Buy > AlternativeUpgrade5Cost7){
		var LocalValue = Upgrade5Buy / Upgrade5Cost; 
		var width8 = (LocalValue*1000) - 700;
		Widths(100, 100, 100, 100, 100, 100, 100, width8, 0, 0, "s2su5");
	}
	else if (Upgrade5Buy <= AlternativeUpgrade5Cost9 && Upgrade5Buy > AlternativeUpgrade5Cost8){
		var LocalValue = Upgrade5Buy / Upgrade5Cost; 
		var width9 = (LocalValue*1000) - 800;
		Widths(100, 100, 100, 100, 100, 100, 100, 100, width9, 0, "s2su5");
	}
	else if (Upgrade5Buy <= Upgrade5Cost && Upgrade5Buy > AlternativeUpgrade5Cost9){
		var LocalValue = Upgrade5Buy / Upgrade5Cost; 
		var width10 = (LocalValue*1000) - 900;
		Widths(100, 100, 100, 100, 100, 100, 100, 100, 100, width10, "s2su5");
	}
	else if (Upgrade5Buy >= Upgrade5Cost){
		Widths(100, 100, 100, 100, 100, 100, 100, 100, 100, 100, "s2su5");
	}
}



document.getElementById("Upgrade6").onclick = function(){
	if (Upgrade6Value <= Points){
		Widths(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s2su6");
		XPOwned += Upgrade6Value/2;
		Points -= Upgrade6Value;
		Upgrade6Count += 1;
		Upgrade6Cost = 5000*Math.pow(1.15, Upgrade6Count);
		Upgrade6Value = Upgrade6Cost;
		Upgrade6Buy = 0;
		FillingTime -= 0.1;
		document.getElementById("Upgrade6Level").innerHTML = "Lvl " + Upgrade6Count + ", progress to lvl " + (Upgrade6Count+1) +":";
		document.getElementById("ps").title = "every " + FillingTime.toFixed(1) + " seconds gives " + FillBonus.toFixed(1) + " points";
		UpgradesUnlock();
		CountLevel();
	}
	else if (Upgrade6Value > Points){
		XPOwned += Points/2;
		Upgrade6Buy += Points;
		Upgrade6Value -= Points;
		Points = 0;
	}
	Upgrade6ProgressF();
	CountLevel();
	NumbersConverter();
}



function Upgrade6ProgressF(){
	AlternativeUpgrade6Cost = Upgrade6Cost/10;
	AlternativeUpgrade6Cost2 = Upgrade6Cost/5;
	AlternativeUpgrade6Cost3 = (Upgrade6Cost/10) * 3;
	AlternativeUpgrade6Cost4 = (Upgrade6Cost/10) * 4;
	AlternativeUpgrade6Cost5 = Upgrade6Cost/2;
	AlternativeUpgrade6Cost6 = (Upgrade6Cost/10) * 6;
	AlternativeUpgrade6Cost7 = (Upgrade6Cost/10) * 7;
	AlternativeUpgrade6Cost8 = (Upgrade6Cost/10) * 8;
	AlternativeUpgrade6Cost9 = (Upgrade6Cost/10) * 9;
	if (Upgrade6Buy <= AlternativeUpgrade6Cost){
		var LocalValue = Upgrade6Buy / Upgrade6Cost; 
		var width1 = LocalValue*1000;
		Widths(width1, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s2su6");
	}
	else if (Upgrade6Buy <= AlternativeUpgrade6Cost2 && Upgrade6Buy > AlternativeUpgrade6Cost){
		var LocalValue = Upgrade6Buy / Upgrade6Cost; 
		var width2 = (LocalValue*1000) - 100;
		Widths(100, width2, 0, 0, 0, 0, 0, 0, 0, 0, "s2su6");
	}
	else if (Upgrade6Buy <= AlternativeUpgrade6Cost3 && Upgrade6Buy > AlternativeUpgrade6Cost2){
		var LocalValue = Upgrade6Buy / Upgrade6Cost; 
		var width3 = (LocalValue*1000) - 200;
		Widths(100, 100, width3, 0, 0, 0, 0, 0, 0, 0, "s2su6");
	}
	else if (Upgrade6Buy <= AlternativeUpgrade6Cost4 && Upgrade6Buy > AlternativeUpgrade6Cost3){
		var LocalValue = Upgrade6Buy / Upgrade6Cost; 
		var width4 = (LocalValue*1000) - 300;
		Widths(100, 100, 100, width4, 0, 0, 0, 0, 0, 0, "s2su6");
	}
	else if (Upgrade6Buy <= AlternativeUpgrade6Cost5 && Upgrade6Buy > AlternativeUpgrade6Cost4){
		var LocalValue = Upgrade6Buy / Upgrade6Cost; 
		var width5 = (LocalValue*1000) - 400;
		Widths(100, 100, 100, 100, width5, 0, 0, 0, 0, 0, "s2su6");
	}
	else if (Upgrade6Buy <= AlternativeUpgrade6Cost6 && Upgrade6Buy > AlternativeUpgrade6Cost5){
		var LocalValue = Upgrade6Buy / Upgrade6Cost; 
		var width6 = (LocalValue*1000) - 500;
		Widths(100, 100, 100, 100, 100, width6, 0, 0, 0, 0, "s2su6");
	}
	else if (Upgrade6Buy <= AlternativeUpgrade6Cost7 && Upgrade6Buy > AlternativeUpgrade6Cost6){
		var LocalValue = Upgrade6Buy / Upgrade6Cost; 
		var width7 = (LocalValue*1000) - 600;
		Widths(100, 100, 100, 100, 100, 100, width7, 0, 0, 0, "s2su6");
	}
	else if (Upgrade6Buy <= AlternativeUpgrade6Cost8 && Upgrade6Buy > AlternativeUpgrade6Cost7){
		var LocalValue = Upgrade6Buy / Upgrade6Cost; 
		var width8 = (LocalValue*1000) - 700;
		Widths(100, 100, 100, 100, 100, 100, 100, width8, 0, 0, "s2su6");
	}
	else if (Upgrade6Buy <= AlternativeUpgrade6Cost9 && Upgrade6Buy > AlternativeUpgrade6Cost8){
		var LocalValue = Upgrade6Buy / Upgrade6Cost; 
		var width9 = (LocalValue*1000) - 800;
		Widths(100, 100, 100, 100, 100, 100, 100, 100, width9, 0, "s2su6");
	}
	else if (Upgrade6Buy <= Upgrade6Cost && Upgrade6Buy > AlternativeUpgrade6Cost9){
		var LocalValue = Upgrade6Buy / Upgrade6Cost; 
		var width10 = (LocalValue*1000) - 900;
		Widths(100, 100, 100, 100, 100, 100, 100, 100, 100, width10, "s2su6");
	}
	else if (Upgrade6Buy >= Upgrade6Cost){
		Widths(100, 100, 100, 100, 100, 100, 100, 100, 100, 100, "s2su6");
	}
}



function PerSecond(){
	if (LvlCount >= 3){
		var LocalPoints = MaxPoints - FillBonus;
		if (Points < MaxPoints && LocalPoints > Points){
			if (FilledPerSecond < 1){
				var LocalFilling = 1/FillingTime;
				FilledPerSecond += LocalFilling/100;
				var LocalWidth = FilledPerSecond*100;
				document.getElementById("ps2").style = "width: " + LocalWidth + "%;";
			}
			else if (FilledPerSecond >= 1){
				Points += FillBonus;
				FilledPerSecond = 0;
				document.getElementById("ps2").style = "width: 0%;";
				document.getElementById("BonusText").style = "display: block;"
				if (FillBonus < 1000){
					document.getElementById("BonusText").innerHTML = "+ " + FillBonus.toFixed(1) + " Points";
				}
				else if (FillBonus >= 1000 && FillBonus < 1000000){
					var LocalFillBonus = FillBonus/1000;
					document.getElementById("BonusText").innerHTML = "+ " + LocalFillBonus.toFixed(1) + "K 	Points";
				}
				else if (FillBonus >= 1000000 && FillBonus < 1000000000){
					var LocalFillBonus = FillBonus/1000000;
					document.getElementById("BonusText").innerHTML = "+ " + LocalFillBonus.toFixed(1) + "M Points";
				}
				else if (FillBonus >= 1000000000 && FillBonus < 1000000000000){
					var LocalFillBonus = FillBonus/1000000000;
					document.getElementById("BonusText").innerHTML = "+ " + LocalFillBonus.toFixed(1) + "B Points";
				}
				else if (FillBonus >= 1000000000000){
					var LocalFillBonus = FillBonus/1000000000000;
					document.getElementById("BonusText").innerHTML = "+ " + LocalFillBonus.toFixed(1) + "T Points";
				}
				function AnimationBonusOut(){
					document.getElementById("BonusText").innerHTML = "";
					document.getElementById("BonusText").style = "display: none;"
				}setTimeout(AnimationBonusOut, 700);
			}
		}
		else if (Points < MaxPoints && LocalPoints <= Points){
			if (FilledPerSecond < 1){
				var LocalFilling = 1/FillingTime;
				FilledPerSecond += LocalFilling/100;
				var LocalWidth = FilledPerSecond*100;
				document.getElementById("ps2").style = "width: " + LocalWidth + "%;";
			}
			else if (FilledPerSecond >= 1){
				var LocalPoints = MaxPoints - FillBonus;
				var LocalBonus = (MaxPoints - LocalPoints) - (Points - LocalPoints);
				Points += FillBonus;
				FilledPerSecond = 0;
				document.getElementById("ps2").style = "width: 0%;";
				document.getElementById("BonusText").style = "display: block;"
				if (LocalBonus < 1000){
					document.getElementById("BonusText").innerHTML = "+ " + LocalBonus.toFixed(1) + " Points";
				}
				else if (LocalBonus >= 1000 && LocalBonus < 1000000){
					var LocalLocalBonus = LocalBonus/1000;
					document.getElementById("BonusText").innerHTML = "+ " + LocalLocalBonus.toFixed(1) + "K Points";
				}
				else if (LocalBonus >= 1000000 && LocalBonus < 1000000000){
					var LocalLocalBonus = LocalBonus/1000000;
					document.getElementById("BonusText").innerHTML = "+ " + LocalLocalBonus.toFixed(1) + "M Points";
				}
				else if (LocalBonus >= 1000000000 && LocalBonus < 1000000000000){
					var LocalLocalBonus = LocalBonus/1000000000;
					document.getElementById("BonusText").innerHTML = "+ " + LocalLocalBonus.toFixed(1) + "B Points";
				}
				else if (LocalBonus >= 1000000000000){
					var LocalLocalBonus = LocalBonus/1000000000000;
					document.getElementById("BonusText").innerHTML = "+ " + LocalLocalBonus.toFixed(1) + "T Points";
				}
				function AnimationBonusOut(){
					document.getElementById("BonusText").innerHTML = "";
					document.getElementById("BonusText").style = "display: none;"
				}setTimeout(AnimationBonusOut, 700);
			}
		}
		else if (Points >= MaxPoints){
			if (FilledPerSecond < 1){
				var LocalFilling = 1/FillingTime;
				FilledPerSecond += LocalFilling/100;
				var LocalWidth = FilledPerSecond*100;
				document.getElementById("ps2").style = "width: " + LocalWidth + "%;";
			}
			else if (FilledPerSecond >= 1){
				Points += FillBonus;
				FilledPerSecond = 0;
				document.getElementById("ps2").style = "width: 0%;";
				document.getElementById("BonusText").style = "display: block;"
				document.getElementById("BonusText").innerHTML = "+ 0.0 Points";
				function AnimationBonusOut(){
					document.getElementById("BonusText").innerHTML = "";
					document.getElementById("BonusText").style = "display: none;"
				}setTimeout(AnimationBonusOut, 700);
			}
		}
	}
	else{}
}setInterval(PerSecond, 10);



function CountLevel(){
	if (XPOwned == XPToReach){
		XPOwned = 0;
		LvlCount += 1;
		XPToReach = 50*Math.pow(1.5, LvlCount)
		var LocalWidth = (XPOwned / XPToReach) * 100;
		document.getElementById("LvlText").innerHTML = "Lvl " + LvlCount;
		document.getElementById("LvlProgressBar").style = "width: " + LocalWidth + "%;";
		document.getElementById("lvlup").style = "display: block;";
		function lvlupTimeout(){
			document.getElementById("lvlup").style = "display: none;";
		}setTimeout(lvlupTimeout, 1500);
	}
	else if (XPOwned > XPToReach){
		XPOwned -= XPToReach;
		LvlCount += 1;
		XPToReach = 50*Math.pow(1.5, LvlCount)
		var LocalWidth = (XPOwned / XPToReach) * 100;
		document.getElementById("LvlText").innerHTML = "Lvl " + LvlCount;
		document.getElementById("LvlProgressBar").style = "width: " + LocalWidth + "%;";
		document.getElementById("lvlup").style = "display: block;";
		function lvlupTimeout(){
			document.getElementById("lvlup").style = "display: none;";
		}setTimeout(lvlupTimeout, 1500);
	}
	else if (XPOwned < XPToReach){
		var LocalWidth = (XPOwned / XPToReach) * 100;
		document.getElementById("LvlText").innerHTML = "Lvl " + LvlCount;
		document.getElementById("LvlProgressBar").style = "width: " + LocalWidth + "%;";
	}
	NumbersConverter();
	UpgradesUnlock();
}



function UpgradesUnlock(){
	if (LvlCount >= 3 && LvlCount < 5){
		document.getElementById("PerSecondsNo").style = "display: none;";
		document.getElementById("PerSeconds").style = "display: block;";
		document.getElementById("Upgrade5No").style = "display: block;";
		document.getElementById("Upgrade5").style = "display: none;";
		document.getElementById("Upgrade6No").style = "display: block;";
		document.getElementById("Upgrade6").style = "display: none;";
	}
	else if (LvlCount >= 5 && LvlCount < 15){
		document.getElementById("Upgrade5No").style = "display: none;";
		document.getElementById("Upgrade5").style = "display: block;";
		document.getElementById("PerSecondsNo").style = "display: none;";
		document.getElementById("PerSeconds").style = "display: block;";
		document.getElementById("Upgrade6No").style = "display: block;";
		document.getElementById("Upgrade6").style = "display: none;";
	}
	else if (LvlCount >= 15){
		document.getElementById("Upgrade5No").style = "display: none;";
		document.getElementById("Upgrade5").style = "display: block;";
		document.getElementById("Upgrade6No").style = "display: none;";
		document.getElementById("Upgrade6").style = "display: block;";
		document.getElementById("PerSecondsNo").style = "display: none;";
		document.getElementById("PerSeconds").style = "display: block;";
	}
	if (FillingTime == 5){
		document.getElementById("Upgrade6").style = "display: none;";
		document.getElementById("Upgrade6yes").style = "display: block;";
	}
}



function save()
{
	var Save =
	{
		Speed: Speed,
		Points: Points,
		MaxPoints: MaxPoints,
		Upgrade1Cost: Upgrade1Cost,
		Upgrade1Count: Upgrade1Count,
		Upgrade1Value: Upgrade1Value,
		Upgrade1Buy: Upgrade1Buy,
		SpeedforUpgrade1: SpeedforUpgrade1,
		Upgrade1SpeedAdd: Upgrade1SpeedAdd,
		Upgrade2Cost: Upgrade2Cost,
		Upgrade2Count: Upgrade2Count,
		Upgrade2Value: Upgrade2Value,
		Upgrade2Buy: Upgrade2Buy,
		BoostTime: BoostTime,
		BoostStrenght: BoostStrenght,
		Upgrade3Cost: Upgrade3Cost,
		Upgrade3Count: Upgrade3Count,
		Upgrade3Value: Upgrade3Value,
		Upgrade3Buy: Upgrade3Buy,
		Upgrade4Cost: Upgrade4Cost,
		Upgrade4Count: Upgrade4Count,
		Upgrade4Value: Upgrade4Value,
		Upgrade4Buy: Upgrade4Buy,
		LvlCount: LvlCount,
		XPToReach: XPToReach,
		XPOwned: XPOwned,
		Upgrade5Cost: Upgrade5Cost,
		Upgrade5Count: Upgrade5Count,
		Upgrade5Value: Upgrade5Value,
		Upgrade5Buy: Upgrade5Buy,
		FilledPerSecond: FilledPerSecond,
		FillingTime: FillingTime,
		FillBonus: FillBonus,
		Upgrade6Cost: Upgrade6Cost,
		Upgrade6Count: Upgrade6Count,
		Upgrade6Value: Upgrade6Value,
		Upgrade6Buy: Upgrade6Buy
	}
	localStorage.setItem("Saved", JSON.stringify(Save));
}setInterval(save, 100);



function load(){
	var SavedGame = JSON.parse(localStorage.getItem("Saved"));
	if (typeof SavedGame.Speed !== "undefined") Speed = SavedGame.Speed;
	if (typeof SavedGame.Points !== "undefined") Points = SavedGame.Points;
	if (typeof SavedGame.MaxPoints !== "undefined") MaxPoints = SavedGame.MaxPoints;
	if (typeof SavedGame.LvlCount !== "undefined") LvlCount = SavedGame.LvlCount;
	if (typeof SavedGame.XPToReach !== "undefined") XPToReach = SavedGame.XPToReach;
	if (typeof SavedGame.XPOwned !== "undefined") XPOwned = SavedGame.XPOwned;
	if (typeof SavedGame.Upgrade1Cost !== "undefined") Upgrade1Cost = SavedGame.Upgrade1Cost;
	if (typeof SavedGame.Upgrade1Count !== "undefined") Upgrade1Count = SavedGame.Upgrade1Count;
	if (typeof SavedGame.Upgrade1Value !== "undefined") Upgrade1Value = SavedGame.Upgrade1Value;
	if (typeof SavedGame.Upgrade1Buy !== "undefined") Upgrade1Buy = SavedGame.Upgrade1Buy;
	if (typeof SavedGame.Upgrade1SpeedAdd !== "undefined") Upgrade1SpeedAdd = SavedGame.Upgrade1SpeedAdd;
	if (typeof SavedGame.SpeedforUpgrade1 !== "undefined") SpeedforUpgrade1 = SavedGame.SpeedforUpgrade1;
	if (typeof SavedGame.Upgrade2Cost !== "undefined") Upgrade2Cost = SavedGame.Upgrade2Cost;
	if (typeof SavedGame.Upgrade2Count !== "undefined") Upgrade2Count = SavedGame.Upgrade2Count;
	if (typeof SavedGame.Upgrade2Value !== "undefined") Upgrade2Value = SavedGame.Upgrade2Value;
	if (typeof SavedGame.Upgrade2Buy !== "undefined") Upgrade2Buy = SavedGame.Upgrade2Buy;
	if (typeof SavedGame.Upgrade3Cost !== "undefined") Upgrade3Cost = SavedGame.Upgrade3Cost;
	if (typeof SavedGame.Upgrade3Count !== "undefined") Upgrade3Count = SavedGame.Upgrade3Count;
	if (typeof SavedGame.Upgrade3Value !== "undefined") Upgrade3Value = SavedGame.Upgrade3Value;
	if (typeof SavedGame.Upgrade3Buy !== "undefined") Upgrade3Buy = SavedGame.Upgrade3Buy;
	if (typeof SavedGame.Upgrade4Cost !== "undefined") Upgrade4Cost = SavedGame.Upgrade4Cost;
	if (typeof SavedGame.Upgrade4Count !== "undefined") Upgrade4Count = SavedGame.Upgrade4Count;
	if (typeof SavedGame.Upgrade4Value !== "undefined") Upgrade4Value = SavedGame.Upgrade4Value;
	if (typeof SavedGame.Upgrade4Buy !== "undefined") Upgrade4Buy = SavedGame.Upgrade4Buy;
	if (typeof SavedGame.Upgrade5Cost !== "undefined") Upgrade5Cost = SavedGame.Upgrade5Cost;
	if (typeof SavedGame.Upgrade5Count !== "undefined") Upgrade5Count = SavedGame.Upgrade5Count;
	if (typeof SavedGame.Upgrade5Value !== "undefined") Upgrade5Value = SavedGame.Upgrade5Value;
	if (typeof SavedGame.Upgrade5Buy !== "undefined") Upgrade5Buy = SavedGame.Upgrade5Buy;
	if (typeof SavedGame.Upgrade6Cost !== "undefined") Upgrade6Cost = SavedGame.Upgrade6Cost;
	if (typeof SavedGame.Upgrade6Count !== "undefined") Upgrade6Count = SavedGame.Upgrade6Count;
	if (typeof SavedGame.Upgrade6Value !== "undefined") Upgrade6Value = SavedGame.Upgrade6Value;
	if (typeof SavedGame.Upgrade6Buy !== "undefined") Upgrade6Buy = SavedGame.Upgrade6Buy;
	if (typeof SavedGame.BoostTime !== "undefined") BoostTime = SavedGame.BoostTime;
	if (typeof SavedGame.BoostStrenght !== "undefined") BoostStrenght = SavedGame.BoostStrenght;
	if (typeof SavedGame.FilledPerSecond !== "undefined") FilledPerSecond = SavedGame.FilledPerSecond;
	if (typeof SavedGame.FillingTime !== "undefined") FillingTime = SavedGame.FillingTime;
	if (typeof SavedGame.FillBonus !== "undefined") FillBonus = SavedGame.FillBonus;
	Speed = 15 + SpeedforUpgrade1;
	var LocalBoostTime = BoostTime/1000;
	var LocalBoostStrenght = BoostStrenght + 1;
	document.getElementById("LvlText").innerHTML = "Lvl " + LvlCount;
	document.getElementById("Boost").title = "x" + LocalBoostStrenght.toFixed(2) + " PPM for " + LocalBoostTime + " seconds";
	document.getElementById("Upgrade1Level").innerHTML = "Lvl " + Upgrade1Count + ", progress to lvl " + (Upgrade1Count+1) +":";
	document.getElementById("Upgrade2Level").innerHTML = "Lvl " + Upgrade2Count + ", progress to lvl " + (Upgrade2Count+1) +":";
	document.getElementById("Upgrade3Level").innerHTML = "Lvl " + Upgrade3Count + ", progress to lvl " + (Upgrade3Count+1) +":";
	document.getElementById("Upgrade4Level").innerHTML = "Lvl " + Upgrade4Count + ", progress to lvl " + (Upgrade4Count+1) +":";
	document.getElementById("Upgrade5Level").innerHTML = "Lvl " + Upgrade5Count + ", progress to lvl " + (Upgrade5Count+1) +":";
	document.getElementById("Upgrade6Level").innerHTML = "Lvl " + Upgrade6Count + ", progress to lvl " + (Upgrade6Count+1) +":";
	document.getElementById("Upgrade4Add").innerHTML = "Increase maximum capacity x10 (current: " + MaxPoints +")";
	document.getElementById("Upgrade1Add").innerHTML = "+ " + Upgrade1SpeedAdd + " Points Per Minute";
	AlternativePoints = MaxPoints/10;
	AlternativePoints2 = MaxPoints/5;
	AlternativePoints3 = (MaxPoints/10) * 3;
	AlternativePoints4 = (MaxPoints/10) * 4;
	AlternativePoints5 = MaxPoints/2;
	AlternativePoints6 = (MaxPoints/10) * 6;
	AlternativePoints7 = (MaxPoints/10) * 7;
	AlternativePoints8 = (MaxPoints/10) * 8;
	AlternativePoints9 = (MaxPoints/10) * 9;
	Upgrade1ProgressF();
	Upgrade2ProgressF();
	Upgrade3ProgressF();
	Upgrade4ProgressF();
	Upgrade5ProgressF();
	Upgrade6ProgressF();
	NumbersConverter();
	CountLevel();
	UpgradesUnlock();
}
document.getElementById("reset").onclick = function(){
	localStorage.clear();
	location.reload();
}
