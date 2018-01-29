var Speed = 15;
var SpeedforUpgrade1 = 0;
var SpeedAfterBoost = 0;
var Points = 0;
var PointsForUpgrade1 = Points / 10;
var PointsForUpgrade2 = Points / 10;
var MaxPoints = 10;
var LvlCount = 0;
var XPToReach = 50;
var XPOwned = 0;

var BoostTime = 2000;
var BoostStrenght = 0.3;

var AlternativePoints = MaxPoints / 10;
var AlternativePoints2 = MaxPoints / 5;
var AlternativePoints3 = (MaxPoints / 10) * 3;
var AlternativePoints4 = (MaxPoints / 10) * 4;
var AlternativePoints5 = MaxPoints / 2;
var AlternativePoints6 = (MaxPoints / 10) * 6;
var AlternativePoints7 = (MaxPoints / 10) * 7;
var AlternativePoints8 = (MaxPoints / 10) * 8;
var AlternativePoints9 = (MaxPoints / 10) * 9;

var Upgrade1Cost = 5;
var Upgrade1Value = 5;
var Upgrade1Count = 0;
var Upgrade1Count2 = 1;
var Upgrade1SpeedAdd = 1;
var Upgrade1Buy = 0;
var AlternativeUpgrade1Cost = Upgrade1Cost / 10;
var AlternativeUpgrade1Cost2 = Upgrade1Cost / 5;
var AlternativeUpgrade1Cost3 = (Upgrade1Cost / 10) * 3;
var AlternativeUpgrade1Cost4 = (Upgrade1Cost / 10) * 4;
var AlternativeUpgrade1Cost5 = Upgrade1Cost / 2;
var AlternativeUpgrade1Cost6 = (Upgrade1Cost / 10) * 6;
var AlternativeUpgrade1Cost7 = (Upgrade1Cost / 10) * 7;
var AlternativeUpgrade1Cost8 = (Upgrade1Cost / 10) * 8;
var AlternativeUpgrade1Cost9 = (Upgrade1Cost / 10) * 9;

var Upgrade2Cost = 20;
var Upgrade2Value = 20;
var Upgrade2Count = 0;
var Upgrade2Count2 = 1;
var Upgrade2Buy = 0;
var AlternativeUpgrade2Cost = Upgrade2Cost / 10;
var AlternativeUpgrade2Cost2 = Upgrade2Cost / 5;
var AlternativeUpgrade2Cost3 = (Upgrade2Cost / 10) * 3;
var AlternativeUpgrade2Cost4 = (Upgrade2Cost / 10) * 4;
var AlternativeUpgrade2Cost5 = Upgrade2Cost / 2;
var AlternativeUpgrade2Cost6 = (Upgrade2Cost / 10) * 6;
var AlternativeUpgrade2Cost7 = (Upgrade2Cost / 10) * 7;
var AlternativeUpgrade2Cost8 = (Upgrade2Cost / 10) * 8;
var AlternativeUpgrade2Cost9 = (Upgrade2Cost / 10) * 9;

var Upgrade3Cost = 30;
var Upgrade3Value = 30;
var Upgrade3Count = 0;
var Upgrade3Count2 = 1;
var Upgrade3Buy = 0;
var AlternativeUpgrade3Cost = Upgrade3Cost / 10;
var AlternativeUpgrade3Cost2 = Upgrade3Cost / 5;
var AlternativeUpgrade3Cost3 = (Upgrade3Cost / 10) * 3;
var AlternativeUpgrade3Cost4 = (Upgrade3Cost / 10) * 4;
var AlternativeUpgrade3Cost5 = Upgrade3Cost / 2;
var AlternativeUpgrade3Cost6 = (Upgrade3Cost / 10) * 6;
var AlternativeUpgrade3Cost7 = (Upgrade3Cost / 10) * 7;
var AlternativeUpgrade3Cost8 = (Upgrade3Cost / 10) * 8;
var AlternativeUpgrade3Cost9 = (Upgrade3Cost / 10) * 9;

var Upgrade4Cost = 50;
var Upgrade4Value = 50;
var Upgrade4Count = 0;
var Upgrade4Count2 = 1;
var Upgrade4Buy = 0;
var AlternativeUpgrade4Cost = Upgrade4Cost / 10;
var AlternativeUpgrade4Cost2 = Upgrade4Cost / 5;
var AlternativeUpgrade4Cost3 = (Upgrade4Cost / 10) * 3;
var AlternativeUpgrade4Cost4 = (Upgrade4Cost / 10) * 4;
var AlternativeUpgrade4Cost5 = Upgrade4Cost / 2;
var AlternativeUpgrade4Cost6 = (Upgrade4Cost / 10) * 6;
var AlternativeUpgrade4Cost7 = (Upgrade4Cost / 10) * 7;
var AlternativeUpgrade4Cost8 = (Upgrade4Cost / 10) * 8;
var AlternativeUpgrade4Cost9 = (Upgrade4Cost / 10) * 9;





function ScorePoints()
{
	AlternativePoints = MaxPoints / 10;
	AlternativePoints2 = MaxPoints / 5;
	AlternativePoints3 = (MaxPoints / 10) * 3;
	AlternativePoints4 = (MaxPoints / 10) * 4;
	AlternativePoints5 = MaxPoints / 2;
	AlternativePoints6 = (MaxPoints / 10) * 6;
	AlternativePoints7 = (MaxPoints / 10) * 7;
	AlternativePoints8 = (MaxPoints / 10) * 8;
	AlternativePoints9 = (MaxPoints / 10) * 9;
	if (Points <= AlternativePoints)
	{
		var LocalSpeed = SpeedAfterBoost + Speed;
		Points = Points + (LocalSpeed/6000);
		var LocalPoints = Points / MaxPoints; 
		var width = LocalPoints * 1000;
		document.getElementById("s2s1").style = "width: " + width +"%;";
		document.getElementById("s2s10").style = "width: 0%;";
		document.getElementById("s2s9").style = "width: 0%;";
		document.getElementById("s2s8").style = "width: 0%;";
		document.getElementById("s2s7").style = "width: 0%;";
		document.getElementById("s2s6").style = "width: 0%;";
		document.getElementById("s2s5").style = "width: 0%;";
		document.getElementById("s2s4").style = "width: 0%;";
		document.getElementById("s2s3").style = "width: 0%;";
		document.getElementById("s2s2").style = "width: 0%;";
		if (Points < 1000)
		{
			document.getElementById("PointsCount").innerHTML = Points.toFixed(1) + " Points";
		}
		else if (Points >= 1000 && Points < 1000000)
		{
			var LocalPoints2 = Points / 1000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "k Points";
		}
		else if (Points >= 1000000 && Points < 1000000000)
		{
			var LocalPoints2 = Points / 1000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "M Points";
		}
		else if (Points >= 1000000000 && Points < 1000000000000)
		{
			var LocalPoints2 = Points / 1000000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "B Points";
		}
		else if (Points >= 1000000000000)
		{
			var LocalPoints2 = Points / 1000000000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "T Points";
		}
	}
	else if (Points <= AlternativePoints2 && Points > AlternativePoints)
	{
		var LocalSpeed = SpeedAfterBoost + Speed;
		Points = Points + (LocalSpeed/6000);
		var LocalPoints = Points / MaxPoints;
		var width2 = (LocalPoints * 1000) - 100;
		document.getElementById("s2s2").style = "width: " + width2 +"%;";
		document.getElementById("s2s1").style = "width: 100%;";
		document.getElementById("s2s10").style = "width: 0%;";
		document.getElementById("s2s9").style = "width: 0%;";
		document.getElementById("s2s8").style = "width: 0%;";
		document.getElementById("s2s7").style = "width: 0%;";
		document.getElementById("s2s6").style = "width: 0%;";
		document.getElementById("s2s5").style = "width: 0%;";
		document.getElementById("s2s4").style = "width: 0%;";
		document.getElementById("s2s3").style = "width: 0%;";
		if (Points < 1000)
		{
			document.getElementById("PointsCount").innerHTML = Points.toFixed(1) + " Points";
		}
		else if (Points >= 1000 && Points < 1000000)
		{
			var LocalPoints2 = Points / 1000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "k Points";
		}
		else if (Points >= 1000000 && Points < 1000000000)
		{
			var LocalPoints2 = Points / 1000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "M Points";
		}
		else if (Points >= 1000000000 && Points < 1000000000000)
		{
			var LocalPoints2 = Points / 1000000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "B Points";
		}
		else if (Points >= 1000000000000)
		{
			var LocalPoints2 = Points / 1000000000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "T Points";
		}
	}
	else if (Points <= AlternativePoints3 && Points > AlternativePoints2)
	{
		var LocalSpeed = SpeedAfterBoost + Speed;
		Points = Points + (LocalSpeed/6000);
		var LocalPoints = Points / MaxPoints;
		var width3 = (LocalPoints * 1000) - 200;
		document.getElementById("s2s3").style = "width: " + width3 +"%;";
		document.getElementById("s2s2").style = "width: 100%;";
		document.getElementById("s2s1").style = "width: 100%;";
		document.getElementById("s2s10").style = "width: 0%;";
		document.getElementById("s2s9").style = "width: 0%;";
		document.getElementById("s2s8").style = "width: 0%;";
		document.getElementById("s2s7").style = "width: 0%;";
		document.getElementById("s2s6").style = "width: 0%;";
		document.getElementById("s2s5").style = "width: 0%;";
		document.getElementById("s2s4").style = "width: 0%;";
		if (Points < 1000)
		{
			document.getElementById("PointsCount").innerHTML = Points.toFixed(1) + " Points";
		}
		else if (Points >= 1000 && Points < 1000000)
		{
			var LocalPoints2 = Points / 1000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "k Points";
		}
		else if (Points >= 1000000 && Points < 1000000000)
		{
			var LocalPoints2 = Points / 1000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "M Points";
		}
		else if (Points >= 1000000000 && Points < 1000000000000)
		{
			var LocalPoints2 = Points / 1000000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "B Points";
		}
		else if (Points >= 1000000000000)
		{
			var LocalPoints2 = Points / 1000000000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "T Points";
		}
	}
	else if (Points <= AlternativePoints4 && Points > AlternativePoints3)
	{
		var LocalSpeed = SpeedAfterBoost + Speed;
		Points = Points + (LocalSpeed/6000);
		var LocalPoints = Points / MaxPoints;
		var width4 = (LocalPoints * 1000) - 300;
		document.getElementById("s2s4").style = "width: " + width4 +"%;";
		document.getElementById("s2s3").style = "width: 100%;";
		document.getElementById("s2s2").style = "width: 100%;";
		document.getElementById("s2s1").style = "width: 100%;";
		document.getElementById("s2s10").style = "width: 0%;";
		document.getElementById("s2s9").style = "width: 0%;";
		document.getElementById("s2s8").style = "width: 0%;";
		document.getElementById("s2s7").style = "width: 0%;";
		document.getElementById("s2s6").style = "width: 0%;";
		document.getElementById("s2s5").style = "width: 0%;";
		if (Points < 1000)
		{
			document.getElementById("PointsCount").innerHTML = Points.toFixed(1) + " Points";
		}
		else if (Points >= 1000 && Points < 1000000)
		{
			var LocalPoints2 = Points / 1000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "k Points";
		}
		else if (Points >= 1000000 && Points < 1000000000)
		{
			var LocalPoints2 = Points / 1000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "M Points";
		}
		else if (Points >= 1000000000 && Points < 1000000000000)
		{
			var LocalPoints2 = Points / 1000000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "B Points";
		}
		else if (Points >= 1000000000000)
		{
			var LocalPoints2 = Points / 1000000000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "T Points";
		}
	}
	else if (Points <= AlternativePoints5 && Points > AlternativePoints4)
	{
		var LocalSpeed = SpeedAfterBoost + Speed;
		Points = Points + (LocalSpeed/6000);
		var LocalPoints = Points / MaxPoints;
		var width5 = (LocalPoints * 1000) - 400;
		document.getElementById("s2s5").style = "width: " + width5 +"%;";
		document.getElementById("s2s4").style = "width: 100%;";
		document.getElementById("s2s3").style = "width: 100%;";
		document.getElementById("s2s2").style = "width: 100%;";
		document.getElementById("s2s1").style = "width: 100%;";
		document.getElementById("s2s10").style = "width: 0%;";
		document.getElementById("s2s9").style = "width: 0%;";
		document.getElementById("s2s8").style = "width: 0%;";
		document.getElementById("s2s7").style = "width: 0%;";
		document.getElementById("s2s6").style = "width: 0%;";
		if (Points < 1000)
		{
			document.getElementById("PointsCount").innerHTML = Points.toFixed(1) + " Points";
		}
		else if (Points >= 1000 && Points < 1000000)
		{
			var LocalPoints2 = Points / 1000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "k Points";
		}
		else if (Points >= 1000000 && Points < 1000000000)
		{
			var LocalPoints2 = Points / 1000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "M Points";
		}
		else if (Points >= 1000000000 && Points < 1000000000000)
		{
			var LocalPoints2 = Points / 1000000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "B Points";
		}
		else if (Points >= 1000000000000)
		{
			var LocalPoints2 = Points / 1000000000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "T Points";
		}
	}
	else if (Points <= AlternativePoints6 && Points > AlternativePoints5)
	{
		var LocalSpeed = SpeedAfterBoost + Speed;
		Points = Points + (LocalSpeed/6000);
		var LocalPoints = Points / MaxPoints;
		var width6 = (LocalPoints * 1000) - 500;
		document.getElementById("s2s6").style = "width: " + width6 +"%;";
		document.getElementById("s2s5").style = "width: 100%;";
		document.getElementById("s2s4").style = "width: 100%;";
		document.getElementById("s2s3").style = "width: 100%;";
		document.getElementById("s2s2").style = "width: 100%;";
		document.getElementById("s2s1").style = "width: 100%;";
		document.getElementById("s2s10").style = "width: 0%;";
		document.getElementById("s2s9").style = "width: 0%;";
		document.getElementById("s2s8").style = "width: 0%;";
		document.getElementById("s2s7").style = "width: 0%;";
		if (Points < 1000)
		{
			document.getElementById("PointsCount").innerHTML = Points.toFixed(1) + " Points";
		}
		else if (Points >= 1000 && Points < 1000000)
		{
			var LocalPoints2 = Points / 1000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "k Points";
		}
		else if (Points >= 1000000 && Points < 1000000000)
		{
			var LocalPoints2 = Points / 1000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "M Points";
		}
		else if (Points >= 1000000000 && Points < 1000000000000)
		{
			var LocalPoints2 = Points / 1000000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "B Points";
		}
		else if (Points >= 1000000000000)
		{
			var LocalPoints2 = Points / 1000000000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "T Points";
		}
	}
	else if (Points <= AlternativePoints7 && Points > AlternativePoints6)
	{
		var LocalSpeed = SpeedAfterBoost + Speed;
		Points = Points + (LocalSpeed/6000);
		var LocalPoints = Points / MaxPoints;
		var width7 = (LocalPoints * 1000) - 600;
		document.getElementById("s2s7").style = "width: " + width7 +"%;";
		document.getElementById("s2s6").style = "width: 100%;";
		document.getElementById("s2s5").style = "width: 100%;";
		document.getElementById("s2s4").style = "width: 100%;";
		document.getElementById("s2s3").style = "width: 100%;";
		document.getElementById("s2s2").style = "width: 100%;";
		document.getElementById("s2s1").style = "width: 100%;";
		document.getElementById("s2s10").style = "width: 0%;";
		document.getElementById("s2s9").style = "width: 0%;";
		document.getElementById("s2s8").style = "width: 0%;";
		if (Points < 1000)
		{
			document.getElementById("PointsCount").innerHTML = Points.toFixed(1) + " Points";
		}
		else if (Points >= 1000 && Points < 1000000)
		{
			var LocalPoints2 = Points / 1000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "k Points";
		}
		else if (Points >= 1000000 && Points < 1000000000)
		{
			var LocalPoints2 = Points / 1000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "M Points";
		}
		else if (Points >= 1000000000 && Points < 1000000000000)
		{
			var LocalPoints2 = Points / 1000000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "B Points";
		}
		else if (Points >= 1000000000000)
		{
			var LocalPoints2 = Points / 1000000000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "T Points";
		}
	}
	else if (Points <= AlternativePoints8 && Points > AlternativePoints7)
	{
		var LocalSpeed = SpeedAfterBoost + Speed;
		Points = Points + (LocalSpeed/6000);
		var LocalPoints = Points / MaxPoints;
		var width8 = (LocalPoints * 1000) - 700;
		document.getElementById("s2s8").style = "width: " + width8 +"%;";
		document.getElementById("s2s7").style = "width: 100%;";
		document.getElementById("s2s6").style = "width: 100%;";
		document.getElementById("s2s5").style = "width: 100%;";
		document.getElementById("s2s4").style = "width: 100%;";
		document.getElementById("s2s3").style = "width: 100%;";
		document.getElementById("s2s2").style = "width: 100%;";
		document.getElementById("s2s1").style = "width: 100%;";
		document.getElementById("s2s10").style = "width: 0%;";
		document.getElementById("s2s9").style = "width: 0%;";
		if (Points < 1000)
		{
			document.getElementById("PointsCount").innerHTML = Points.toFixed(1) + " Points";
		}
		else if (Points >= 1000 && Points < 1000000)
		{
			var LocalPoints2 = Points / 1000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "k Points";
		}
		else if (Points >= 1000000 && Points < 1000000000)
		{
			var LocalPoints2 = Points / 1000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "M Points";
		}
		else if (Points >= 1000000000 && Points < 1000000000000)
		{
			var LocalPoints2 = Points / 1000000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "B Points";
		}
		else if (Points >= 1000000000000)
		{
			var LocalPoints2 = Points / 1000000000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "T Points";
		}
	}
	else if (Points <= AlternativePoints9 && Points > AlternativePoints8)
	{
		var LocalSpeed = SpeedAfterBoost + Speed;
		Points = Points + (LocalSpeed/6000);
		var LocalPoints = Points / MaxPoints;
		var width9 = (LocalPoints * 1000) - 800;
		document.getElementById("s2s9").style = "width: " + width9 +"%;";
		document.getElementById("s2s8").style = "width: 100%;";
		document.getElementById("s2s7").style = "width: 100%;";
		document.getElementById("s2s6").style = "width: 100%;";
		document.getElementById("s2s5").style = "width: 100%;";
		document.getElementById("s2s4").style = "width: 100%;";
		document.getElementById("s2s3").style = "width: 100%;";
		document.getElementById("s2s2").style = "width: 100%;";
		document.getElementById("s2s1").style = "width: 100%;";
		document.getElementById("s2s10").style = "width: 0%;";
		if (Points < 1000)
		{
			document.getElementById("PointsCount").innerHTML = Points.toFixed(1) + " Points";
		}
		else if (Points >= 1000 && Points < 1000000)
		{
			var LocalPoints2 = Points / 1000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "k Points";
		}
		else if (Points >= 1000000 && Points < 1000000000)
		{
			var LocalPoints2 = Points / 1000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "M Points";
		}
		else if (Points >= 1000000000 && Points < 1000000000000)
		{
			var LocalPoints2 = Points / 1000000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "B Points";
		}
		else if (Points >= 1000000000000)
		{
			var LocalPoints2 = Points / 1000000000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "T Points";
		}
	}
	else if (Points < MaxPoints && Points > AlternativePoints9)
	{
		var LocalSpeed = SpeedAfterBoost + Speed;
		Points = Points + (LocalSpeed/6000);
		var LocalPoints = Points / MaxPoints;
		var width10 = (LocalPoints * 1000) - 900;
		document.getElementById("s2s10").style = "width: " + width10 + "%;";
		document.getElementById("s2s9").style = "width: 100%;";
		document.getElementById("s2s8").style = "width: 100%;";
		document.getElementById("s2s7").style = "width: 100%;";
		document.getElementById("s2s6").style = "width: 100%;";
		document.getElementById("s2s5").style = "width: 100%;";
		document.getElementById("s2s4").style = "width: 100%;";
		document.getElementById("s2s3").style = "width: 100%;";
		document.getElementById("s2s2").style = "width: 100%;";
		document.getElementById("s2s1").style = "width: 100%;";
		if (Points < 1000)
		{
			document.getElementById("PointsCount").innerHTML = Points.toFixed(1) + " Points";
		}
		else if (Points >= 1000 && Points < 1000000)
		{
			var LocalPoints2 = Points / 1000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "k Points";
		}
		else if (Points >= 1000000 && Points < 1000000000)
		{
			var LocalPoints2 = Points / 1000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "M Points";
		}
		else if (Points >= 1000000000 && Points < 1000000000000)
		{
			var LocalPoints2 = Points / 1000000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "B Points";
		}
		else if (Points >= 1000000000000)
		{
			var LocalPoints2 = Points / 1000000000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "T Points";
		}
	}
	else if (Points >= MaxPoints)
	{
		Points = MaxPoints;
		document.getElementById("PointsCount").innerHTML = Points.toFixed(1) + " Points";
		document.getElementById("s2s1").style = "width: 100%;";
		document.getElementById("s2s2").style = "width: 100%;";
		document.getElementById("s2s3").style = "width: 100%;";
		document.getElementById("s2s4").style = "width: 100%;";
		document.getElementById("s2s5").style = "width: 100%;";
		document.getElementById("s2s6").style = "width: 100%;";
		document.getElementById("s2s7").style = "width: 100%;";
		document.getElementById("s2s8").style = "width: 100%;";
		document.getElementById("s2s9").style = "width: 100%;";
		document.getElementById("s2s10").style = "width: 100%;";
		if (Points < 1000)
		{
			document.getElementById("PointsCount").innerHTML = Points.toFixed(1) + " Points";
		}
		else if (Points >= 1000 && Points < 1000000)
		{
			var LocalPoints2 = Points / 1000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "k Points";
		}
		else if (Points >= 1000000 && Points < 1000000000)
		{
			var LocalPoints2 = Points / 1000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "M Points";
		}
		else if (Points >= 1000000000 && Points < 1000000000000)
		{
			var LocalPoints2 = Points / 1000000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "B Points";
		}
		else if (Points >= 1000000000000)
		{
			var LocalPoints2 = Points / 1000000000000;
			document.getElementById("PointsCount").innerHTML = LocalPoints2.toFixed(1) + "T Points";
		}
	}
}
setInterval(ScorePoints, 10);





































document.getElementById("Boost").onclick = function()
{
	document.getElementById("Boost").style = "color: #f8ff00;";
	SpeedAfterBoost = Speed * BoostStrenght;
	function Timeout()
	{
		document.getElementById("Boost").style = "color: #e76666;";
		SpeedAfterBoost = 0;
	}
	setTimeout(Timeout, BoostTime);
}
































document.getElementById("Upgrade1").onclick = function() 
{
	PointsForUpgrade1 = Points;
	if (Upgrade1Value <= PointsForUpgrade1)
	{
		SpeedforUpgrade1 = SpeedforUpgrade1 + Upgrade1SpeedAdd;
		Speed = 15 + SpeedforUpgrade1;
		document.getElementById("s2su10").style = "width: 0%;";
		document.getElementById("s2su9").style = "width: 0%;";
		document.getElementById("s2su8").style = "width: 0%;";
		document.getElementById("s2su7").style = "width: 0%;";
		document.getElementById("s2su6").style = "width: 0%;";
		document.getElementById("s2su5").style = "width: 0%;";
		document.getElementById("s2su4").style = "width: 0%;";
		document.getElementById("s2su3").style = "width: 0%;";
		document.getElementById("s2su2").style = "width: 0%;";
		document.getElementById("s2su1").style = "width: 0%;";
		XPOwned = XPOwned + Upgrade1Value / 2;
		var LocalWidth = (XPOwned / XPToReach) * 100;
		document.getElementById("LvlProgressBar").style = "width: " + LocalWidth + "%;";
		document.getElementById("LvlProgress").title = XPOwned.toFixed(1) + "XP / " + XPToReach.toFixed(0) + "XP";
		Points = Points - Upgrade1Value;
		Upgrade1Count = Upgrade1Count + 1;
		Upgrade1Count2 = Upgrade1Count2 + 1;
		Upgrade1Cost = 5 * Math.pow(1.09, Upgrade1Count);
		Upgrade1Value = Upgrade1Cost;
		Upgrade1Buy = 0;
		document.getElementById("BuyInfo1").innerHTML = "Click to spend points (" + Upgrade1Value.toFixed(1) + " points left)";
		document.getElementById("Upgrade1Level").innerHTML = "Lvl " + Upgrade1Count + ", progress to lvl " + Upgrade1Count2 +":";
		if (Upgrade1Count == 10 || Upgrade1Count == 20 || Upgrade1Count == 30 || Upgrade1Count == 40 || Upgrade1Count == 50 || Upgrade1Count == 60 || Upgrade1Count == 70 || Upgrade1Count == 80 || Upgrade1Count == 90 || Upgrade1Count == 100 || Upgrade1Count == 110 || Upgrade1Count == 120 || Upgrade1Count == 130 || Upgrade1Count == 140 || Upgrade1Count == 150 || Upgrade1Count == 160 || Upgrade1Count == 170 || Upgrade1Count == 180 || Upgrade1Count == 190 || Upgrade1Count == 200)
		{
			SpeedforUpgrade1 = SpeedforUpgrade1 * 2;
			Upgrade1SpeedAdd = Upgrade1SpeedAdd * 2;
			Speed = 15 + SpeedforUpgrade1;
			document.getElementById("Upgrade1Add").innerHTML = "+ " + Upgrade1SpeedAdd + " Points Per Minute";
		}
	}
	else if (PointsForUpgrade1 < Upgrade1Value)
	{
		XPOwned = XPOwned + PointsForUpgrade1 / 2;
		var LocalWidth = (XPOwned / XPToReach) * 100;
		document.getElementById("LvlProgressBar").style = "width: " + LocalWidth + "%;";
		document.getElementById("LvlProgress").title = XPOwned.toFixed(1) + "XP / " + XPToReach.toFixed(0) + "XP";
		Upgrade1Buy = Upgrade1Buy + Points;
		Upgrade1Value = Upgrade1Value - Points;
		Points = 0;
		document.getElementById("BuyInfo1").innerHTML = "Click to spend points (" + Upgrade1Value.toFixed(1) + " points left)";
	}
}














function Upgrade1ProgressF()
{
		AlternativeUpgrade1Cost = Upgrade1Cost / 10;
		AlternativeUpgrade1Cost2 = Upgrade1Cost / 5;
		AlternativeUpgrade1Cost3 = (Upgrade1Cost / 10) * 3;
		AlternativeUpgrade1Cost4 = (Upgrade1Cost / 10) * 4;
		AlternativeUpgrade1Cost5 = Upgrade1Cost / 2;
		AlternativeUpgrade1Cost6 = (Upgrade1Cost / 10) * 6;
		AlternativeUpgrade1Cost7 = (Upgrade1Cost / 10) * 7;
		AlternativeUpgrade1Cost8 = (Upgrade1Cost / 10) * 8;
		AlternativeUpgrade1Cost9 = (Upgrade1Cost / 10) * 9;
		if (Upgrade1Buy <= AlternativeUpgrade1Cost)
		{
		var LocalValue = Upgrade1Buy / Upgrade1Cost; 
		var width = LocalValue * 1000;
		document.getElementById("s2su1").style = "width: " + width +"%;";
		document.getElementById("s2su10").style = "width: 0%;";
		document.getElementById("s2su9").style = "width: 0%;";
		document.getElementById("s2su8").style = "width: 0%;";
		document.getElementById("s2su7").style = "width: 0%;";
		document.getElementById("s2su6").style = "width: 0%;";
		document.getElementById("s2su5").style = "width: 0%;";
		document.getElementById("s2su4").style = "width: 0%;";
		document.getElementById("s2su3").style = "width: 0%;";
		document.getElementById("s2su2").style = "width: 0%;";
		}
		else if (Upgrade1Buy <= AlternativeUpgrade1Cost2 && Upgrade1Buy > AlternativeUpgrade1Cost)
		{
		var LocalValue = Upgrade1Buy / Upgrade1Cost; 
		var width2 = (LocalValue * 1000) - 100;
		document.getElementById("s2su1").style = "width: 100%;";
		document.getElementById("s2su10").style = "width: 0%;";
		document.getElementById("s2su9").style = "width: 0%;";
		document.getElementById("s2su8").style = "width: 0%;";
		document.getElementById("s2su7").style = "width: 0%;";
		document.getElementById("s2su6").style = "width: 0%;";
		document.getElementById("s2su5").style = "width: 0%;";
		document.getElementById("s2su4").style = "width: 0%;";
		document.getElementById("s2su3").style = "width: 0%;";
		document.getElementById("s2su2").style = "width: " + width2 +"%;";
		}
		else if (Upgrade1Buy <= AlternativeUpgrade1Cost3 && Upgrade1Buy > AlternativeUpgrade1Cost2)
		{
		var LocalValue = Upgrade1Buy / Upgrade1Cost; 
		var width3 = (LocalValue * 1000) - 200;
		document.getElementById("s2su1").style = "width: 100%;";
		document.getElementById("s2su10").style = "width: 0%;";
		document.getElementById("s2su9").style = "width: 0%;";
		document.getElementById("s2su8").style = "width: 0%;";
		document.getElementById("s2su7").style = "width: 0%;";
		document.getElementById("s2su6").style = "width: 0%;";
		document.getElementById("s2su5").style = "width: 0%;";
		document.getElementById("s2su4").style = "width: 0%;";
		document.getElementById("s2su3").style = "width: " + width3 + "%;";
		document.getElementById("s2su2").style = "width: 100%;";
		}
		else if (Upgrade1Buy <= AlternativeUpgrade1Cost4 && Upgrade1Buy > AlternativeUpgrade1Cost3)
		{
		var LocalValue = Upgrade1Buy / Upgrade1Cost; 
		var width4 = (LocalValue * 1000) - 300;
		document.getElementById("s2su1").style = "width: 100%;";
		document.getElementById("s2su10").style = "width: 0%;";
		document.getElementById("s2su9").style = "width: 0%;";
		document.getElementById("s2su8").style = "width: 0%;";
		document.getElementById("s2su7").style = "width: 0%;";
		document.getElementById("s2su6").style = "width: 0%;";
		document.getElementById("s2su5").style = "width: 0%;";
		document.getElementById("s2su4").style = "width: " + width4 + "%;";
		document.getElementById("s2su3").style = "width: 100%;";
		document.getElementById("s2su2").style = "width: 100%;";
		}
		else if (Upgrade1Buy <= AlternativeUpgrade1Cost5 && Upgrade1Buy > AlternativeUpgrade1Cost4)
		{
		var LocalValue = Upgrade1Buy / Upgrade1Cost; 
		var width5 = (LocalValue * 1000) - 400;
		document.getElementById("s2su1").style = "width: 100%;";
		document.getElementById("s2su10").style = "width: 0%;";
		document.getElementById("s2su9").style = "width: 0%;";
		document.getElementById("s2su8").style = "width: 0%;";
		document.getElementById("s2su7").style = "width: 0%;";
		document.getElementById("s2su6").style = "width: 0%;";
		document.getElementById("s2su5").style = "width: " + width5 + "%;";
		document.getElementById("s2su4").style = "width: 100%;";
		document.getElementById("s2su3").style = "width: 100%;";
		document.getElementById("s2su2").style = "width: 100%;";
		}
		else if (Upgrade1Buy <= AlternativeUpgrade1Cost6 && Upgrade1Buy > AlternativeUpgrade1Cost5)
		{
		var LocalValue = Upgrade1Buy / Upgrade1Cost; 
		var width6 = (LocalValue * 1000) - 500;
		document.getElementById("s2su1").style = "width: 100%;";
		document.getElementById("s2su10").style = "width: 0%;";
		document.getElementById("s2su9").style = "width: 0%;";
		document.getElementById("s2su8").style = "width: 0%;";
		document.getElementById("s2su7").style = "width: 0%;";
		document.getElementById("s2su6").style = "width: " + width6 + "%;";
		document.getElementById("s2su5").style = "width: 100%;";
		document.getElementById("s2su4").style = "width: 100%;";
		document.getElementById("s2su3").style = "width: 100%;";
		document.getElementById("s2su2").style = "width: 100%;";
		}
		else if (Upgrade1Buy <= AlternativeUpgrade1Cost7 && Upgrade1Buy > AlternativeUpgrade1Cost6)
		{
		var LocalValue = Upgrade1Buy / Upgrade1Cost; 
		var width7 = (LocalValue * 1000) - 600;
		document.getElementById("s2su1").style = "width: 100%;";
		document.getElementById("s2su10").style = "width: 0%;";
		document.getElementById("s2su9").style = "width: 0%;";
		document.getElementById("s2su8").style = "width: 0%;";
		document.getElementById("s2su7").style = "width: " + width7 + "%;";
		document.getElementById("s2su6").style = "width: 100%;";
		document.getElementById("s2su5").style = "width: 100%;";
		document.getElementById("s2su4").style = "width: 100%;";
		document.getElementById("s2su3").style = "width: 100%;";
		document.getElementById("s2su2").style = "width: 100%;";
		}
		else if (Upgrade1Buy <= AlternativeUpgrade1Cost8 && Upgrade1Buy > AlternativeUpgrade1Cost7)
		{
		var LocalValue = Upgrade1Buy / Upgrade1Cost; 
		var width8 = (LocalValue * 1000) - 700;
		document.getElementById("s2su1").style = "width: 100%;";
		document.getElementById("s2su10").style = "width: 0%;";
		document.getElementById("s2su9").style = "width: 0%;";
		document.getElementById("s2su8").style = "width: " + width8 + "%;";
		document.getElementById("s2su7").style = "width: 100%;";
		document.getElementById("s2su6").style = "width: 100%;";
		document.getElementById("s2su5").style = "width: 100%;";
		document.getElementById("s2su4").style = "width: 100%;";
		document.getElementById("s2su3").style = "width: 100%;";
		document.getElementById("s2su2").style = "width: 100%;";
		}
		else if (Upgrade1Buy <= AlternativeUpgrade1Cost9 && Upgrade1Buy > AlternativeUpgrade1Cost8)
		{
		var LocalValue = Upgrade1Buy / Upgrade1Cost; 
		var width9 = (LocalValue * 1000) - 800;
		document.getElementById("s2su1").style = "width: 100%;";
		document.getElementById("s2su10").style = "width: 0%;";
		document.getElementById("s2su9").style = "width: " + width9 + "%;";
		document.getElementById("s2su8").style = "width: 100%;";
		document.getElementById("s2su7").style = "width: 100%;";
		document.getElementById("s2su6").style = "width: 100%;";
		document.getElementById("s2su5").style = "width: 100%;";
		document.getElementById("s2su4").style = "width: 100%;";
		document.getElementById("s2su3").style = "width: 100%;";
		document.getElementById("s2su2").style = "width: 100%;";
		}
		else if (Upgrade1Buy <= Upgrade1Cost && Upgrade1Buy > AlternativeUpgrade1Cost9)
		{
		var LocalValue = Upgrade1Buy / Upgrade1Cost; 
		var width10 = (LocalValue * 1000) - 900;
		document.getElementById("s2su1").style = "width: 100%;";
		document.getElementById("s2su10").style = "width: " + width10 + "%;";
		document.getElementById("s2su9").style = "width: 100%;";
		document.getElementById("s2su8").style = "width: 100%;";
		document.getElementById("s2su7").style = "width: 100%;";
		document.getElementById("s2su6").style = "width: 100%;";
		document.getElementById("s2su5").style = "width: 100%;";
		document.getElementById("s2su4").style = "width: 100%;";
		document.getElementById("s2su3").style = "width: 100%;";
		document.getElementById("s2su2").style = "width: 100%;";
		}
		else if (Upgrade1Buy >= Upgrade1Cost)
		{
		document.getElementById("s2su10").style = "width: 100%;";
		document.getElementById("s2su9").style = "width: 100%;";
		document.getElementById("s2su8").style = "width: 100%;";
		document.getElementById("s2su7").style = "width: 100%;";
		document.getElementById("s2su6").style = "width: 100%;";
		document.getElementById("s2su5").style = "width: 100%;";
		document.getElementById("s2su4").style = "width: 100%;";
		document.getElementById("s2su3").style = "width: 100%;";
		document.getElementById("s2su2").style = "width: 100%;";
		document.getElementById("s2su1").style = "width: 100%;";
		}
}setInterval(Upgrade1ProgressF, 10);








































document.getElementById("Upgrade2").onclick = function() 
{
	PointsForUpgrade2 = Points;
	if (Upgrade2Value <= PointsForUpgrade2)
	{
		document.getElementById("s2su210").style = "width: 0%;";
		document.getElementById("s2su29").style = "width: 0%;";
		document.getElementById("s2su28").style = "width: 0%;";
		document.getElementById("s2su27").style = "width: 0%;";
		document.getElementById("s2su26").style = "width: 0%;";
		document.getElementById("s2su25").style = "width: 0%;";
		document.getElementById("s2su24").style = "width: 0%;";
		document.getElementById("s2su23").style = "width: 0%;";
		document.getElementById("s2su22").style = "width: 0%;";
		document.getElementById("s2su21").style = "width: 0%;";
		XPOwned = XPOwned + Upgrade2Value / 2;
		var LocalWidth = (XPOwned / XPToReach) * 100;
		document.getElementById("LvlProgressBar").style = "width: " + LocalWidth + "%;";
		document.getElementById("LvlProgress").title = XPOwned.toFixed(1) + "XP / " + XPToReach.toFixed(0) + "XP";
		Points = Points - Upgrade2Value;
		Upgrade2Count = Upgrade2Count + 1;
		Upgrade2Count2 = Upgrade2Count2 + 1;
		Upgrade2Cost = 20 * Math.pow(1.21, Upgrade2Count);
		Upgrade2Value = Upgrade2Cost;
		Upgrade2Buy = 0;
		BoostTime = BoostTime + 100;
		var LocalBoostTime = BoostTime / 1000;
		var LocalBoostStrenght = BoostStrenght + 1;
		document.getElementById("BuyInfo2").innerHTML = "Click to spend points (" + Upgrade2Value.toFixed(1) + " points left)";
		document.getElementById("Boost").title = "x" + LocalBoostStrenght.toFixed(2) + " PPM for " + LocalBoostTime + " seconds";
		document.getElementById("Upgrade2Level").innerHTML = "Lvl " + Upgrade2Count + ", progress to lvl " + Upgrade2Count2 +":";
	}
	else if (PointsForUpgrade2 < Upgrade2Value)
	{
		XPOwned = XPOwned + PointsForUpgrade2 / 2;
		var LocalWidth = (XPOwned / XPToReach) * 100;
		document.getElementById("LvlProgressBar").style = "width: " + LocalWidth + "%;";
		document.getElementById("LvlProgress").title = XPOwned.toFixed(1) + "XP / " + XPToReach.toFixed(0) + "XP";
		Upgrade2Buy = Upgrade2Buy + Points;
		Upgrade2Value = Upgrade2Value - Points;
		Points = Points - Points;
		document.getElementById("BuyInfo2").innerHTML = "Click to spend points (" + Upgrade2Value.toFixed(1) + " points left)";
	}
}










function Upgrade2ProgressF()
{
		AlternativeUpgrade2Cost = Upgrade2Cost / 10;
		AlternativeUpgrade2Cost2 = Upgrade2Cost / 5;
		AlternativeUpgrade2Cost3 = (Upgrade2Cost / 10) * 3;
		AlternativeUpgrade2Cost4 = (Upgrade2Cost / 10) * 4;
		AlternativeUpgrade2Cost5 = Upgrade2Cost / 2;
		AlternativeUpgrade2Cost6 = (Upgrade2Cost / 10) * 6;
		AlternativeUpgrade2Cost7 = (Upgrade2Cost / 10) * 7;
		AlternativeUpgrade2Cost8 = (Upgrade2Cost / 10) * 8;
		AlternativeUpgrade2Cost9 = (Upgrade2Cost / 10) * 9;
		if (Upgrade2Buy <= AlternativeUpgrade2Cost)
		{
		var LocalValue = Upgrade2Buy / Upgrade2Cost; 
		var width = LocalValue * 1000;
		document.getElementById("s2su21").style = "width: " + width +"%;";
		document.getElementById("s2su210").style = "width: 0%;";
		document.getElementById("s2su29").style = "width: 0%;";
		document.getElementById("s2su28").style = "width: 0%;";
		document.getElementById("s2su27").style = "width: 0%;";
		document.getElementById("s2su26").style = "width: 0%;";
		document.getElementById("s2su25").style = "width: 0%;";
		document.getElementById("s2su24").style = "width: 0%;";
		document.getElementById("s2su23").style = "width: 0%;";
		document.getElementById("s2su22").style = "width: 0%;";
		}
		else if (Upgrade2Buy <= AlternativeUpgrade2Cost2 && Upgrade2Buy > AlternativeUpgrade2Cost)
		{
		var LocalValue = Upgrade2Buy / Upgrade2Cost; 
		var width2 = (LocalValue * 1000) - 100;
		document.getElementById("s2su21").style = "width: 100%;";
		document.getElementById("s2su210").style = "width: 0%;";
		document.getElementById("s2su29").style = "width: 0%;";
		document.getElementById("s2su28").style = "width: 0%;";
		document.getElementById("s2su27").style = "width: 0%;";
		document.getElementById("s2su26").style = "width: 0%;";
		document.getElementById("s2su25").style = "width: 0%;";
		document.getElementById("s2su24").style = "width: 0%;";
		document.getElementById("s2su23").style = "width: 0%;";
		document.getElementById("s2su22").style = "width: " + width2 +"%;";
		}
		else if (Upgrade2Buy <= AlternativeUpgrade2Cost3 && Upgrade2Buy > AlternativeUpgrade2Cost2)
		{
		var LocalValue = Upgrade2Buy / Upgrade2Cost; 
		var width3 = (LocalValue * 1000) - 200;
		document.getElementById("s2su21").style = "width: 100%;";
		document.getElementById("s2su210").style = "width: 0%;";
		document.getElementById("s2su29").style = "width: 0%;";
		document.getElementById("s2su28").style = "width: 0%;";
		document.getElementById("s2su27").style = "width: 0%;";
		document.getElementById("s2su26").style = "width: 0%;";
		document.getElementById("s2su25").style = "width: 0%;";
		document.getElementById("s2su24").style = "width: 0%;";
		document.getElementById("s2su23").style = "width: " + width3 + "%;";
		document.getElementById("s2su22").style = "width: 100%;";
		}
		else if (Upgrade2Buy <= AlternativeUpgrade2Cost4 && Upgrade2Buy > AlternativeUpgrade2Cost3)
		{
		var LocalValue = Upgrade2Buy / Upgrade2Cost; 
		var width4 = (LocalValue * 1000) - 300;
		document.getElementById("s2su21").style = "width: 100%;";
		document.getElementById("s2su210").style = "width: 0%;";
		document.getElementById("s2su29").style = "width: 0%;";
		document.getElementById("s2su28").style = "width: 0%;";
		document.getElementById("s2su27").style = "width: 0%;";
		document.getElementById("s2su26").style = "width: 0%;";
		document.getElementById("s2su25").style = "width: 0%;";
		document.getElementById("s2su24").style = "width: " + width4 + "%;";
		document.getElementById("s2su23").style = "width: 100%;";
		document.getElementById("s2su22").style = "width: 100%;";
		}
		else if (Upgrade2Buy <= AlternativeUpgrade2Cost5 && Upgrade2Buy > AlternativeUpgrade2Cost4)
		{
		var LocalValue = Upgrade2Buy / Upgrade2Cost; 
		var width5 = (LocalValue * 1000) - 400;
		document.getElementById("s2su21").style = "width: 100%;";
		document.getElementById("s2su210").style = "width: 0%;";
		document.getElementById("s2su29").style = "width: 0%;";
		document.getElementById("s2su28").style = "width: 0%;";
		document.getElementById("s2su27").style = "width: 0%;";
		document.getElementById("s2su26").style = "width: 0%;";
		document.getElementById("s2su25").style = "width: " + width5 + "%;";
		document.getElementById("s2su24").style = "width: 100%;";
		document.getElementById("s2su23").style = "width: 100%;";
		document.getElementById("s2su22").style = "width: 100%;";
		}
		else if (Upgrade2Buy <= AlternativeUpgrade2Cost6 && Upgrade2Buy > AlternativeUpgrade2Cost5)
		{
		var LocalValue = Upgrade2Buy / Upgrade2Cost; 
		var width6 = (LocalValue * 1000) - 500;
		document.getElementById("s2su21").style = "width: 100%;";
		document.getElementById("s2su210").style = "width: 0%;";
		document.getElementById("s2su29").style = "width: 0%;";
		document.getElementById("s2su28").style = "width: 0%;";
		document.getElementById("s2su27").style = "width: 0%;";
		document.getElementById("s2su26").style = "width: " + width6 + "%;";
		document.getElementById("s2su25").style = "width: 100%;";
		document.getElementById("s2su24").style = "width: 100%;";
		document.getElementById("s2su23").style = "width: 100%;";
		document.getElementById("s2su22").style = "width: 100%;";
		}
		else if (Upgrade2Buy <= AlternativeUpgrade2Cost7 && Upgrade2Buy > AlternativeUpgrade2Cost6)
		{
		var LocalValue = Upgrade2Buy / Upgrade2Cost; 
		var width7 = (LocalValue * 1000) - 600;
		document.getElementById("s2su21").style = "width: 100%;";
		document.getElementById("s2su210").style = "width: 0%;";
		document.getElementById("s2su29").style = "width: 0%;";
		document.getElementById("s2su28").style = "width: 0%;";
		document.getElementById("s2su27").style = "width: " + width7 + "%;";
		document.getElementById("s2su26").style = "width: 100%;";
		document.getElementById("s2su25").style = "width: 100%;";
		document.getElementById("s2su24").style = "width: 100%;";
		document.getElementById("s2su23").style = "width: 100%;";
		document.getElementById("s2su22").style = "width: 100%;";
		}
		else if (Upgrade2Buy <= AlternativeUpgrade2Cost8 && Upgrade2Buy > AlternativeUpgrade2Cost7)
		{
		var LocalValue = Upgrade2Buy / Upgrade2Cost; 
		var width8 = (LocalValue * 1000) - 700;
		document.getElementById("s2su21").style = "width: 100%;";
		document.getElementById("s2su210").style = "width: 0%;";
		document.getElementById("s2su29").style = "width: 0%;";
		document.getElementById("s2su28").style = "width: " + width8 + "%;";
		document.getElementById("s2su27").style = "width: 100%;";
		document.getElementById("s2su26").style = "width: 100%;";
		document.getElementById("s2su25").style = "width: 100%;";
		document.getElementById("s2su24").style = "width: 100%;";
		document.getElementById("s2su23").style = "width: 100%;";
		document.getElementById("s2su22").style = "width: 100%;";
		}
		else if (Upgrade2Buy <= AlternativeUpgrade2Cost9 && Upgrade2Buy > AlternativeUpgrade2Cost8)
		{
		var LocalValue = Upgrade2Buy / Upgrade2Cost; 
		var width9 = (LocalValue * 1000) - 800;
		document.getElementById("s2su21").style = "width: 100%;";
		document.getElementById("s2su210").style = "width: 0%;";
		document.getElementById("s2su29").style = "width: " + width9 + "%;";
		document.getElementById("s2su28").style = "width: 100%;";
		document.getElementById("s2su27").style = "width: 100%;";
		document.getElementById("s2su26").style = "width: 100%;";
		document.getElementById("s2su25").style = "width: 100%;";
		document.getElementById("s2su24").style = "width: 100%;";
		document.getElementById("s2su23").style = "width: 100%;";
		document.getElementById("s2su22").style = "width: 100%;";
		}
		else if (Upgrade2Buy <= Upgrade2Cost && Upgrade2Buy > AlternativeUpgrade2Cost9)
		{
		var LocalValue = Upgrade2Buy / Upgrade2Cost; 
		var width10 = (LocalValue * 1000) - 900;
		document.getElementById("s2su21").style = "width: 100%;";
		document.getElementById("s2su210").style = "width: " + width10 + "%;";
		document.getElementById("s2su29").style = "width: 100%;";
		document.getElementById("s2su28").style = "width: 100%;";
		document.getElementById("s2su27").style = "width: 100%;";
		document.getElementById("s2su26").style = "width: 100%;";
		document.getElementById("s2su25").style = "width: 100%;";
		document.getElementById("s2su24").style = "width: 100%;";
		document.getElementById("s2su23").style = "width: 100%;";
		document.getElementById("s2su22").style = "width: 100%;";
		}
		else if (Upgrade2Buy >= Upgrade2Cost)
		{
		document.getElementById("s2su210").style = "width: 100%;";
		document.getElementById("s2su29").style = "width: 100%;";
		document.getElementById("s2su28").style = "width: 100%;";
		document.getElementById("s2su27").style = "width: 100%;";
		document.getElementById("s2su26").style = "width: 100%;";
		document.getElementById("s2su25").style = "width: 100%;";
		document.getElementById("s2su24").style = "width: 100%;";
		document.getElementById("s2su23").style = "width: 100%;";
		document.getElementById("s2su22").style = "width: 100%;";
		document.getElementById("s2su21").style = "width: 100%;";
		}
}setInterval(Upgrade2ProgressF, 10);








































document.getElementById("Upgrade3").onclick = function() 
{
	PointsForUpgrade3 = Points;
	if (Upgrade3Value <= PointsForUpgrade3)
	{
		document.getElementById("s2su310").style = "width: 0%;";
		document.getElementById("s2su39").style = "width: 0%;";
		document.getElementById("s2su38").style = "width: 0%;";
		document.getElementById("s2su37").style = "width: 0%;";
		document.getElementById("s2su36").style = "width: 0%;";
		document.getElementById("s2su35").style = "width: 0%;";
		document.getElementById("s2su34").style = "width: 0%;";
		document.getElementById("s2su33").style = "width: 0%;";
		document.getElementById("s2su32").style = "width: 0%;";
		document.getElementById("s2su31").style = "width: 0%;";
		XPOwned = XPOwned + Upgrade3Value / 2;
		var LocalWidth = (XPOwned / XPToReach) * 100;
		document.getElementById("LvlProgressBar").style = "width: " + LocalWidth + "%;";
		document.getElementById("LvlProgress").title = XPOwned.toFixed(1) + "XP / " + XPToReach.toFixed(0) + "XP";
		Points = Points - Upgrade3Value;
		Upgrade3Count = Upgrade3Count + 1;
		Upgrade3Count2 = Upgrade3Count2 + 1;
		Upgrade3Cost = 30 * Math.pow(1.22, Upgrade3Count);
		Upgrade3Value = Upgrade3Cost;
		Upgrade3Buy = 0;
		BoostStrenght = BoostStrenght + 0.01;
		var LocalBoostTime = BoostTime / 1000;
		var LocalBoostStrenght = BoostStrenght + 1;
		document.getElementById("BuyInfo3").innerHTML = "Click to spend points (" + Upgrade3Value.toFixed(1) + " points left)";
		document.getElementById("Boost").title = "x" + LocalBoostStrenght.toFixed(2) + " PPM for " + LocalBoostTime + " seconds";
		document.getElementById("Upgrade3Level").innerHTML = "Lvl " + Upgrade3Count + ", progress to lvl " + Upgrade3Count2 +":";
	}
	else if (PointsForUpgrade3 < Upgrade3Value)
	{
		XPOwned = XPOwned + PointsForUpgrade3 / 2;
		var LocalWidth = (XPOwned / XPToReach) * 100;
		document.getElementById("LvlProgressBar").style = "width: " + LocalWidth + "%;";
		document.getElementById("LvlProgress").title = XPOwned.toFixed(1) + "XP / " + XPToReach.toFixed(0) + "XP";
		Upgrade3Buy = Upgrade3Buy + Points;
		Upgrade3Value = Upgrade3Value - Points;
		Points = Points - Points;
		document.getElementById("BuyInfo3").innerHTML = "Click to spend points (" + Upgrade3Value.toFixed(1) + " points left)";
	}
}











function Upgrade3ProgressF()
{
	AlternativeUpgrade3Cost = Upgrade3Cost / 10;
	AlternativeUpgrade3Cost2 = Upgrade3Cost / 5;
	AlternativeUpgrade3Cost3 = (Upgrade3Cost / 10) * 3;
	AlternativeUpgrade3Cost4 = (Upgrade3Cost / 10) * 4;
	AlternativeUpgrade3Cost5 = Upgrade3Cost / 2;
	AlternativeUpgrade3Cost6 = (Upgrade3Cost / 10) * 6;
	AlternativeUpgrade3Cost7 = (Upgrade3Cost / 10) * 7;
	AlternativeUpgrade3Cost8 = (Upgrade3Cost / 10) * 8;
	AlternativeUpgrade3Cost9 = (Upgrade3Cost / 10) * 9;
		if (Upgrade3Buy <= AlternativeUpgrade3Cost)
		{
		var LocalValue = Upgrade3Buy / Upgrade3Cost; 
		var width = LocalValue * 1000;
		document.getElementById("s2su31").style = "width: " + width +"%;";
		document.getElementById("s2su310").style = "width: 0%;";
		document.getElementById("s2su39").style = "width: 0%;";
		document.getElementById("s2su38").style = "width: 0%;";
		document.getElementById("s2su37").style = "width: 0%;";
		document.getElementById("s2su36").style = "width: 0%;";
		document.getElementById("s2su35").style = "width: 0%;";
		document.getElementById("s2su34").style = "width: 0%;";
		document.getElementById("s2su33").style = "width: 0%;";
		document.getElementById("s2su32").style = "width: 0%;";
		}
		else if (Upgrade3Buy <= AlternativeUpgrade3Cost2 && Upgrade3Buy > AlternativeUpgrade3Cost)
		{
		var LocalValue = Upgrade3Buy / Upgrade3Cost; 
		var width2 = (LocalValue * 1000) - 100;
		document.getElementById("s2su31").style = "width: 100%;";
		document.getElementById("s2su310").style = "width: 0%;";
		document.getElementById("s2su39").style = "width: 0%;";
		document.getElementById("s2su38").style = "width: 0%;";
		document.getElementById("s2su37").style = "width: 0%;";
		document.getElementById("s2su36").style = "width: 0%;";
		document.getElementById("s2su35").style = "width: 0%;";
		document.getElementById("s2su34").style = "width: 0%;";
		document.getElementById("s2su33").style = "width: 0%;";
		document.getElementById("s2su32").style = "width: " + width2 +"%;";
		}
		else if (Upgrade3Buy <= AlternativeUpgrade3Cost3 && Upgrade3Buy > AlternativeUpgrade3Cost2)
		{
		var LocalValue = Upgrade3Buy / Upgrade3Cost; 
		var width3 = (LocalValue * 1000) - 200;
		document.getElementById("s2su31").style = "width: 100%;";
		document.getElementById("s2su310").style = "width: 0%;";
		document.getElementById("s2su39").style = "width: 0%;";
		document.getElementById("s2su38").style = "width: 0%;";
		document.getElementById("s2su37").style = "width: 0%;";
		document.getElementById("s2su36").style = "width: 0%;";
		document.getElementById("s2su35").style = "width: 0%;";
		document.getElementById("s2su34").style = "width: 0%;";
		document.getElementById("s2su33").style = "width: " + width3 + "%;";
		document.getElementById("s2su32").style = "width: 100%;";
		}
		else if (Upgrade3Buy <= AlternativeUpgrade3Cost4 && Upgrade3Buy > AlternativeUpgrade3Cost3)
		{
		var LocalValue = Upgrade3Buy / Upgrade3Cost; 
		var width4 = (LocalValue * 1000) - 300;
		document.getElementById("s2su31").style = "width: 100%;";
		document.getElementById("s2su310").style = "width: 0%;";
		document.getElementById("s2su39").style = "width: 0%;";
		document.getElementById("s2su38").style = "width: 0%;";
		document.getElementById("s2su37").style = "width: 0%;";
		document.getElementById("s2su36").style = "width: 0%;";
		document.getElementById("s2su35").style = "width: 0%;";
		document.getElementById("s2su34").style = "width: " + width4 + "%;";
		document.getElementById("s2su33").style = "width: 100%;";
		document.getElementById("s2su32").style = "width: 100%;";
		}
		else if (Upgrade3Buy <= AlternativeUpgrade3Cost5 && Upgrade3Buy > AlternativeUpgrade3Cost4)
		{
		var LocalValue = Upgrade3Buy / Upgrade3Cost; 
		var width5 = (LocalValue * 1000) - 400;
		document.getElementById("s2su31").style = "width: 100%;";
		document.getElementById("s2su310").style = "width: 0%;";
		document.getElementById("s2su39").style = "width: 0%;";
		document.getElementById("s2su38").style = "width: 0%;";
		document.getElementById("s2su37").style = "width: 0%;";
		document.getElementById("s2su36").style = "width: 0%;";
		document.getElementById("s2su35").style = "width: " + width5 + "%;";
		document.getElementById("s2su34").style = "width: 100%;";
		document.getElementById("s2su33").style = "width: 100%;";
		document.getElementById("s2su32").style = "width: 100%;";
		}
		else if (Upgrade3Buy <= AlternativeUpgrade3Cost6 && Upgrade3Buy > AlternativeUpgrade3Cost5)
		{
		var LocalValue = Upgrade3Buy / Upgrade3Cost; 
		var width6 = (LocalValue * 1000) - 500;
		document.getElementById("s2su31").style = "width: 100%;";
		document.getElementById("s2su310").style = "width: 0%;";
		document.getElementById("s2su39").style = "width: 0%;";
		document.getElementById("s2su38").style = "width: 0%;";
		document.getElementById("s2su37").style = "width: 0%;";
		document.getElementById("s2su36").style = "width: " + width6 + "%;";
		document.getElementById("s2su35").style = "width: 100%;";
		document.getElementById("s2su34").style = "width: 100%;";
		document.getElementById("s2su33").style = "width: 100%;";
		document.getElementById("s2su32").style = "width: 100%;";
		}
		else if (Upgrade3Buy <= AlternativeUpgrade3Cost7 && Upgrade3Buy > AlternativeUpgrade3Cost6)
		{
		var LocalValue = Upgrade3Buy / Upgrade3Cost; 
		var width7 = (LocalValue * 1000) - 600;
		document.getElementById("s2su31").style = "width: 100%;";
		document.getElementById("s2su310").style = "width: 0%;";
		document.getElementById("s2su39").style = "width: 0%;";
		document.getElementById("s2su38").style = "width: 0%;";
		document.getElementById("s2su37").style = "width: " + width7 + "%;";
		document.getElementById("s2su36").style = "width: 100%;";
		document.getElementById("s2su35").style = "width: 100%;";
		document.getElementById("s2su34").style = "width: 100%;";
		document.getElementById("s2su33").style = "width: 100%;";
		document.getElementById("s2su32").style = "width: 100%;";
		}
		else if (Upgrade3Buy <= AlternativeUpgrade3Cost8 && Upgrade3Buy > AlternativeUpgrade3Cost7)
		{
		var LocalValue = Upgrade3Buy / Upgrade3Cost; 
		var width8 = (LocalValue * 1000) - 700;
		document.getElementById("s2su31").style = "width: 100%;";
		document.getElementById("s2su310").style = "width: 0%;";
		document.getElementById("s2su39").style = "width: 0%;";
		document.getElementById("s2su38").style = "width: " + width8 + "%;";
		document.getElementById("s2su37").style = "width: 100%;";
		document.getElementById("s2su36").style = "width: 100%;";
		document.getElementById("s2su35").style = "width: 100%;";
		document.getElementById("s2su34").style = "width: 100%;";
		document.getElementById("s2su33").style = "width: 100%;";
		document.getElementById("s2su32").style = "width: 100%;";
		}
		else if (Upgrade3Buy <= AlternativeUpgrade3Cost9 && Upgrade3Buy > AlternativeUpgrade3Cost8)
		{
		var LocalValue = Upgrade3Buy / Upgrade3Cost; 
		var width9 = (LocalValue * 1000) - 800;
		document.getElementById("s2su31").style = "width: 100%;";
		document.getElementById("s2su310").style = "width: 0%;";
		document.getElementById("s2su39").style = "width: " + width9 + "%;";
		document.getElementById("s2su38").style = "width: 100%;";
		document.getElementById("s2su37").style = "width: 100%;";
		document.getElementById("s2su36").style = "width: 100%;";
		document.getElementById("s2su35").style = "width: 100%;";
		document.getElementById("s2su34").style = "width: 100%;";
		document.getElementById("s2su33").style = "width: 100%;";
		document.getElementById("s2su32").style = "width: 100%;";
		}
		else if (Upgrade3Buy <= Upgrade3Cost && Upgrade3Buy > AlternativeUpgrade3Cost9)
		{
		var LocalValue = Upgrade3Buy / Upgrade3Cost; 
		var width10 = (LocalValue * 1000) - 900;
		document.getElementById("s2su31").style = "width: 100%;";
		document.getElementById("s2su310").style = "width: " + width10 + "%;";
		document.getElementById("s2su39").style = "width: 100%;";
		document.getElementById("s2su38").style = "width: 100%;";
		document.getElementById("s2su37").style = "width: 100%;";
		document.getElementById("s2su36").style = "width: 100%;";
		document.getElementById("s2su35").style = "width: 100%;";
		document.getElementById("s2su34").style = "width: 100%;";
		document.getElementById("s2su33").style = "width: 100%;";
		document.getElementById("s2su32").style = "width: 100%;";
		}
		else if (Upgrade3Buy >= Upgrade3Cost)
		{
		document.getElementById("s2su310").style = "width: 100%;";
		document.getElementById("s2su39").style = "width: 100%;";
		document.getElementById("s2su38").style = "width: 100%;";
		document.getElementById("s2su37").style = "width: 100%;";
		document.getElementById("s2su36").style = "width: 100%;";
		document.getElementById("s2su35").style = "width: 100%;";
		document.getElementById("s2su34").style = "width: 100%;";
		document.getElementById("s2su33").style = "width: 100%;";
		document.getElementById("s2su32").style = "width: 100%;";
		document.getElementById("s2su31").style = "width: 100%;";
		}
}setInterval(Upgrade3ProgressF, 10);



























document.getElementById("Upgrade4").onclick = function() 
{
	PointsForUpgrade4 = Points;
	if (Upgrade4Value <= PointsForUpgrade4)
	{
		document.getElementById("s2su410").style = "width: 0%;";
		document.getElementById("s2su49").style = "width: 0%;";
		document.getElementById("s2su48").style = "width: 0%;";
		document.getElementById("s2su47").style = "width: 0%;";
		document.getElementById("s2su46").style = "width: 0%;";
		document.getElementById("s2su45").style = "width: 0%;";
		document.getElementById("s2su44").style = "width: 0%;";
		document.getElementById("s2su43").style = "width: 0%;";
		document.getElementById("s2su42").style = "width: 0%;";
		document.getElementById("s2su41").style = "width: 0%;";
		XPOwned = XPOwned + Upgrade4Value / 2;
		var LocalWidth = (XPOwned / XPToReach) * 100;
		document.getElementById("LvlProgressBar").style = "width: " + LocalWidth + "%;";
		document.getElementById("LvlProgress").title = XPOwned.toFixed(1) + "XP / " + XPToReach.toFixed(0) + "XP";
		Points = Points - Upgrade4Value;
		Upgrade4Count = Upgrade4Count + 1;
		Upgrade4Count2 = Upgrade4Count2 + 1;
		Upgrade4Cost = Upgrade4Cost * 10;
		Upgrade4Value = Upgrade4Cost;
		Upgrade4Buy = 0;
		MaxPoints = MaxPoints * 10;
		document.getElementById("BuyInfo4").innerHTML = "Click to spend points (" + Upgrade4Value.toFixed(1) + " points left)";
		document.getElementById("Upgrade4Add").innerHTML = "1 Square = " + MaxPoints + " points";
		document.getElementById("Upgrade4Level").innerHTML = "Lvl " + Upgrade4Count + ", progress to lvl " + Upgrade4Count2 +":";
	}
	else if (PointsForUpgrade4 < Upgrade4Value)
	{
		XPOwned = XPOwned + PointsForUpgrade4 / 2;
		var LocalWidth = (XPOwned / XPToReach) * 100;
		document.getElementById("LvlProgressBar").style = "width: " + LocalWidth + "%;";
		document.getElementById("LvlProgress").title = XPOwned.toFixed(1) + "XP / " + XPToReach.toFixed(0) + "XP";
		Upgrade4Buy = Upgrade4Buy + Points;
		Upgrade4Value = Upgrade4Value - Points;
		Points = Points - Points;
		document.getElementById("BuyInfo4").innerHTML = "Click to spend points (" + Upgrade4Value.toFixed(1) + " points left)";
	}
}











function Upgrade4ProgressF()
{
	AlternativeUpgrade4Cost = Upgrade4Cost / 10;
	AlternativeUpgrade4Cost2 = Upgrade4Cost / 5;
	AlternativeUpgrade4Cost3 = (Upgrade4Cost / 10) * 3;
	AlternativeUpgrade4Cost4 = (Upgrade4Cost / 10) * 4;
	AlternativeUpgrade4Cost5 = Upgrade4Cost / 2;
	AlternativeUpgrade4Cost6 = (Upgrade4Cost / 10) * 6;
	AlternativeUpgrade4Cost7 = (Upgrade4Cost / 10) * 7;
	AlternativeUpgrade4Cost8 = (Upgrade4Cost / 10) * 8;
	AlternativeUpgrade4Cost9 = (Upgrade4Cost / 10) * 9;
		if (Upgrade4Buy <= AlternativeUpgrade4Cost)
		{
		var LocalValue = Upgrade4Buy / Upgrade4Cost; 
		var width = LocalValue * 1000;
		document.getElementById("s2su41").style = "width: " + width +"%;";
		document.getElementById("s2su410").style = "width: 0%;";
		document.getElementById("s2su49").style = "width: 0%;";
		document.getElementById("s2su48").style = "width: 0%;";
		document.getElementById("s2su47").style = "width: 0%;";
		document.getElementById("s2su46").style = "width: 0%;";
		document.getElementById("s2su45").style = "width: 0%;";
		document.getElementById("s2su44").style = "width: 0%;";
		document.getElementById("s2su43").style = "width: 0%;";
		document.getElementById("s2su42").style = "width: 0%;";
		}
		else if (Upgrade4Buy <= AlternativeUpgrade4Cost2 && Upgrade4Buy > AlternativeUpgrade4Cost)
		{
		var LocalValue = Upgrade4Buy / Upgrade4Cost; 
		var width2 = (LocalValue * 1000) - 100;
		document.getElementById("s2su41").style = "width: 100%;";
		document.getElementById("s2su410").style = "width: 0%;";
		document.getElementById("s2su49").style = "width: 0%;";
		document.getElementById("s2su48").style = "width: 0%;";
		document.getElementById("s2su47").style = "width: 0%;";
		document.getElementById("s2su46").style = "width: 0%;";
		document.getElementById("s2su45").style = "width: 0%;";
		document.getElementById("s2su44").style = "width: 0%;";
		document.getElementById("s2su43").style = "width: 0%;";
		document.getElementById("s2su42").style = "width: " + width2 +"%;";
		}
		else if (Upgrade4Buy <= AlternativeUpgrade4Cost3 && Upgrade4Buy > AlternativeUpgrade4Cost2)
		{
		var LocalValue = Upgrade4Buy / Upgrade4Cost; 
		var width3 = (LocalValue * 1000) - 200;
		document.getElementById("s2su41").style = "width: 100%;";
		document.getElementById("s2su410").style = "width: 0%;";
		document.getElementById("s2su49").style = "width: 0%;";
		document.getElementById("s2su48").style = "width: 0%;";
		document.getElementById("s2su47").style = "width: 0%;";
		document.getElementById("s2su46").style = "width: 0%;";
		document.getElementById("s2su45").style = "width: 0%;";
		document.getElementById("s2su44").style = "width: 0%;";
		document.getElementById("s2su43").style = "width: " + width3 + "%;";
		document.getElementById("s2su42").style = "width: 100%;";
		}
		else if (Upgrade4Buy <= AlternativeUpgrade4Cost4 && Upgrade4Buy > AlternativeUpgrade4Cost3)
		{
		var LocalValue = Upgrade4Buy / Upgrade4Cost; 
		var width4 = (LocalValue * 1000) - 300;
		document.getElementById("s2su41").style = "width: 100%;";
		document.getElementById("s2su410").style = "width: 0%;";
		document.getElementById("s2su49").style = "width: 0%;";
		document.getElementById("s2su48").style = "width: 0%;";
		document.getElementById("s2su47").style = "width: 0%;";
		document.getElementById("s2su46").style = "width: 0%;";
		document.getElementById("s2su45").style = "width: 0%;";
		document.getElementById("s2su44").style = "width: " + width4 + "%;";
		document.getElementById("s2su43").style = "width: 100%;";
		document.getElementById("s2su42").style = "width: 100%;";
		}
		else if (Upgrade4Buy <= AlternativeUpgrade4Cost5 && Upgrade4Buy > AlternativeUpgrade4Cost4)
		{
		var LocalValue = Upgrade4Buy / Upgrade4Cost; 
		var width5 = (LocalValue * 1000) - 400;
		document.getElementById("s2su41").style = "width: 100%;";
		document.getElementById("s2su410").style = "width: 0%;";
		document.getElementById("s2su49").style = "width: 0%;";
		document.getElementById("s2su48").style = "width: 0%;";
		document.getElementById("s2su47").style = "width: 0%;";
		document.getElementById("s2su46").style = "width: 0%;";
		document.getElementById("s2su45").style = "width: " + width5 + "%;";
		document.getElementById("s2su44").style = "width: 100%;";
		document.getElementById("s2su43").style = "width: 100%;";
		document.getElementById("s2su42").style = "width: 100%;";
		}
		else if (Upgrade4Buy <= AlternativeUpgrade4Cost6 && Upgrade4Buy > AlternativeUpgrade4Cost5)
		{
		var LocalValue = Upgrade4Buy / Upgrade4Cost; 
		var width6 = (LocalValue * 1000) - 500;
		document.getElementById("s2su41").style = "width: 100%;";
		document.getElementById("s2su410").style = "width: 0%;";
		document.getElementById("s2su49").style = "width: 0%;";
		document.getElementById("s2su48").style = "width: 0%;";
		document.getElementById("s2su47").style = "width: 0%;";
		document.getElementById("s2su46").style = "width: " + width6 + "%;";
		document.getElementById("s2su45").style = "width: 100%;";
		document.getElementById("s2su44").style = "width: 100%;";
		document.getElementById("s2su43").style = "width: 100%;";
		document.getElementById("s2su42").style = "width: 100%;";
		}
		else if (Upgrade4Buy <= AlternativeUpgrade4Cost7 && Upgrade4Buy > AlternativeUpgrade4Cost6)
		{
		var LocalValue = Upgrade4Buy / Upgrade4Cost; 
		var width7 = (LocalValue * 1000) - 600;
		document.getElementById("s2su41").style = "width: 100%;";
		document.getElementById("s2su410").style = "width: 0%;";
		document.getElementById("s2su49").style = "width: 0%;";
		document.getElementById("s2su48").style = "width: 0%;";
		document.getElementById("s2su47").style = "width: " + width7 + "%;";
		document.getElementById("s2su46").style = "width: 100%;";
		document.getElementById("s2su45").style = "width: 100%;";
		document.getElementById("s2su44").style = "width: 100%;";
		document.getElementById("s2su43").style = "width: 100%;";
		document.getElementById("s2su42").style = "width: 100%;";
		}
		else if (Upgrade4Buy <= AlternativeUpgrade4Cost8 && Upgrade4Buy > AlternativeUpgrade4Cost7)
		{
		var LocalValue = Upgrade4Buy / Upgrade4Cost; 
		var width8 = (LocalValue * 1000) - 700;
		document.getElementById("s2su41").style = "width: 100%;";
		document.getElementById("s2su410").style = "width: 0%;";
		document.getElementById("s2su49").style = "width: 0%;";
		document.getElementById("s2su48").style = "width: " + width8 + "%;";
		document.getElementById("s2su47").style = "width: 100%;";
		document.getElementById("s2su46").style = "width: 100%;";
		document.getElementById("s2su45").style = "width: 100%;";
		document.getElementById("s2su44").style = "width: 100%;";
		document.getElementById("s2su43").style = "width: 100%;";
		document.getElementById("s2su42").style = "width: 100%;";
		}
		else if (Upgrade4Buy <= AlternativeUpgrade4Cost9 && Upgrade4Buy > AlternativeUpgrade4Cost8)
		{
		var LocalValue = Upgrade4Buy / Upgrade4Cost; 
		var width9 = (LocalValue * 1000) - 800;
		document.getElementById("s2su41").style = "width: 100%;";
		document.getElementById("s2su410").style = "width: 0%;";
		document.getElementById("s2su49").style = "width: " + width9 + "%;";
		document.getElementById("s2su48").style = "width: 100%;";
		document.getElementById("s2su47").style = "width: 100%;";
		document.getElementById("s2su46").style = "width: 100%;";
		document.getElementById("s2su45").style = "width: 100%;";
		document.getElementById("s2su44").style = "width: 100%;";
		document.getElementById("s2su43").style = "width: 100%;";
		document.getElementById("s2su42").style = "width: 100%;";
		}
		else if (Upgrade4Buy <= Upgrade4Cost && Upgrade4Buy > AlternativeUpgrade4Cost9)
		{
		var LocalValue = Upgrade4Buy / Upgrade4Cost; 
		var width10 = (LocalValue * 1000) - 900;
		document.getElementById("s2su41").style = "width: 100%;";
		document.getElementById("s2su410").style = "width: " + width10 + "%;";
		document.getElementById("s2su49").style = "width: 100%;";
		document.getElementById("s2su48").style = "width: 100%;";
		document.getElementById("s2su47").style = "width: 100%;";
		document.getElementById("s2su46").style = "width: 100%;";
		document.getElementById("s2su45").style = "width: 100%;";
		document.getElementById("s2su44").style = "width: 100%;";
		document.getElementById("s2su43").style = "width: 100%;";
		document.getElementById("s2su42").style = "width: 100%;";
		}
		else if (Upgrade4Buy >= Upgrade4Cost)
		{
		document.getElementById("s2su410").style = "width: 100%;";
		document.getElementById("s2su49").style = "width: 100%;";
		document.getElementById("s2su48").style = "width: 100%;";
		document.getElementById("s2su47").style = "width: 100%;";
		document.getElementById("s2su46").style = "width: 100%;";
		document.getElementById("s2su45").style = "width: 100%;";
		document.getElementById("s2su44").style = "width: 100%;";
		document.getElementById("s2su43").style = "width: 100%;";
		document.getElementById("s2su42").style = "width: 100%;";
		document.getElementById("s2su41").style = "width: 100%;";
		}
}setInterval(Upgrade4ProgressF, 10);
























function CountLevel()
{
	if (XPOwned == XPToReach)
	{
		XPOwned = 0;
		LvlCount = LvlCount + 1;
		XPToReach = 50 * Math.pow(1.5, LvlCount)
		var LocalWidth = (XPOwned / XPToReach) * 100;
		document.getElementById("LvlText").innerHTML = "Lvl " + LvlCount;
		document.getElementById("LvlProgress").title = XPOwned.toFixed(1) + "XP / " + XPToReach.toFixed(0) + "XP";
		document.getElementById("LvlProgressBar").style = "width: " + LocalWidth + "%;";
	}
	else if (XPOwned > XPToReach)
	{
		XPOwned = XPOwned - XPToReach;
		LvlCount = LvlCount + 1;
		XPToReach = 50 * Math.pow(1.5, LvlCount)
		var LocalWidth = (XPOwned / XPToReach) * 100;
		document.getElementById("LvlText").innerHTML = "Lvl " + LvlCount;
		document.getElementById("LvlProgress").title = XPOwned.toFixed(1) + "XP / " + XPToReach.toFixed(0) + "XP";
		document.getElementById("LvlProgressBar").style = "width: " + LocalWidth + "%;";
	}
	else if (XPOwned < XPToReach)
	{

	}
}setInterval(CountLevel, 1);

























function save()
{
	var Save =
	{
		Speed: Speed, Points: Points, MaxPoints: MaxPoints, Upgrade1Cost: Upgrade1Cost, Upgrade1Count: Upgrade1Count, Upgrade1Value: Upgrade1Value, Upgrade1Count2: Upgrade1Count2, Upgrade1Buy: Upgrade1Buy, SpeedforUpgrade1: SpeedforUpgrade1, Upgrade1SpeedAdd: Upgrade1SpeedAdd, Upgrade2Cost: Upgrade2Cost, Upgrade2Count: Upgrade2Count, Upgrade2Count2: Upgrade2Count2, Upgrade2Value: Upgrade2Value, Upgrade2Buy: Upgrade2Buy, BoostTime: BoostTime, BoostStrenght: BoostStrenght, Upgrade3Cost: Upgrade3Cost, Upgrade3Count: Upgrade3Count, Upgrade3Count2: Upgrade3Count2, Upgrade3Value: Upgrade3Value, Upgrade3Buy: Upgrade3Buy, Upgrade4Cost: Upgrade4Cost, Upgrade4Count: Upgrade4Count, Upgrade4Count2: Upgrade4Count2, Upgrade4Value: Upgrade4Value, Upgrade4Buy: Upgrade4Buy, LvlCount: LvlCount, XPToReach: XPToReach, XPOwned: XPOwned
	}
	localStorage.setItem("Saved", JSON.stringify(Save));
}
setInterval(save, 100);
function load()
{
	var SavedGame = JSON.parse(localStorage.getItem("Saved"));
	if (typeof SavedGame.Speed !== "undefined") Speed = SavedGame.Speed;
	if (typeof SavedGame.Points !== "undefined") Points = SavedGame.Points;
	if (typeof SavedGame.MaxPoints !== "undefined") MaxPoints = SavedGame.MaxPoints;
	if (typeof SavedGame.LvlCount !== "undefined") LvlCount = SavedGame.LvlCount;
	if (typeof SavedGame.XPToReach !== "undefined") XPToReach = SavedGame.XPToReach;
	if (typeof SavedGame.XPOwned !== "undefined") XPOwned = SavedGame.XPOwned;
	if (typeof SavedGame.Upgrade1Cost !== "undefined") Upgrade1Cost = SavedGame.Upgrade1Cost;
	if (typeof SavedGame.Upgrade1Count !== "undefined") Upgrade1Count = SavedGame.Upgrade1Count;
	if (typeof SavedGame.Upgrade1Count2 !== "undefined") Upgrade1Count2 = SavedGame.Upgrade1Count2;
	if (typeof SavedGame.Upgrade1Value !== "undefined") Upgrade1Value = SavedGame.Upgrade1Value;
	if (typeof SavedGame.Upgrade1Buy !== "undefined") Upgrade1Buy = SavedGame.Upgrade1Buy;
	if (typeof SavedGame.Upgrade1SpeedAdd !== "undefined") Upgrade1SpeedAdd = SavedGame.Upgrade1SpeedAdd;
	if (typeof SavedGame.SpeedforUpgrade1 !== "undefined") SpeedforUpgrade1 = SavedGame.SpeedforUpgrade1;
	if (typeof SavedGame.Upgrade2Cost !== "undefined") Upgrade2Cost = SavedGame.Upgrade2Cost;
	if (typeof SavedGame.Upgrade2Count !== "undefined") Upgrade2Count = SavedGame.Upgrade2Count;
	if (typeof SavedGame.Upgrade2Count2 !== "undefined") Upgrade2Count2 = SavedGame.Upgrade2Count2;
	if (typeof SavedGame.Upgrade2Value !== "undefined") Upgrade2Value = SavedGame.Upgrade2Value;
	if (typeof SavedGame.Upgrade2Buy !== "undefined") Upgrade2Buy = SavedGame.Upgrade2Buy;
	if (typeof SavedGame.Upgrade3Cost !== "undefined") Upgrade3Cost = SavedGame.Upgrade3Cost;
	if (typeof SavedGame.Upgrade3Count !== "undefined") Upgrade3Count = SavedGame.Upgrade3Count;
	if (typeof SavedGame.Upgrade3Count2 !== "undefined") Upgrade3Count2 = SavedGame.Upgrade3Count2;
	if (typeof SavedGame.Upgrade3Value !== "undefined") Upgrade3Value = SavedGame.Upgrade3Value;
	if (typeof SavedGame.Upgrade3Buy !== "undefined") Upgrade3Buy = SavedGame.Upgrade3Buy;
	if (typeof SavedGame.Upgrade4Cost !== "undefined") Upgrade4Cost = SavedGame.Upgrade4Cost;
	if (typeof SavedGame.Upgrade4Count !== "undefined") Upgrade4Count = SavedGame.Upgrade4Count;
	if (typeof SavedGame.Upgrade4Count2 !== "undefined") Upgrade4Count2 = SavedGame.Upgrade4Count2;
	if (typeof SavedGame.Upgrade4Value !== "undefined") Upgrade4Value = SavedGame.Upgrade4Value;
	if (typeof SavedGame.Upgrade4Buy !== "undefined") Upgrade4Buy = SavedGame.Upgrade4Buy;
	if (typeof SavedGame.BoostTime !== "undefined") BoostTime = SavedGame.BoostTime;
	if (typeof SavedGame.BoostStrenght !== "undefined") BoostStrenght = SavedGame.BoostStrenght;
	Speed = 15 + SpeedforUpgrade1;
	var LocalBoostTime = BoostTime / 1000;
	var LocalBoostStrenght = BoostStrenght + 1;
	var LocalWidth = (XPOwned / XPToReach) * 100;
	document.getElementById("LvlText").innerHTML = "Lvl " + LvlCount;
	document.getElementById("LvlProgressBar").style = "width: " + LocalWidth + "%;";
	document.getElementById("LvlProgress").title = XPOwned.toFixed(1) + "XP / " + XPToReach.toFixed(0) + "XP";
	document.getElementById("Boost").title = "x" + LocalBoostStrenght.toFixed(2) + " PPM for " + LocalBoostTime + " seconds";
	document.getElementById("BuyInfo1").innerHTML = "Click to spend points (" + Upgrade1Value.toFixed(1) + " points left)";
	document.getElementById("BuyInfo2").innerHTML = "Click to spend points (" + Upgrade2Value.toFixed(1) + " points left)";
	document.getElementById("BuyInfo3").innerHTML = "Click to spend points (" + Upgrade3Value.toFixed(1) + " points left)";
	document.getElementById("BuyInfo4").innerHTML = "Click to spend points (" + Upgrade4Value.toFixed(1) + " points left)";
	document.getElementById("Upgrade1Level").innerHTML = "Lvl " + Upgrade1Count + ", progress to lvl " + Upgrade1Count2 +":";
	document.getElementById("Upgrade2Level").innerHTML = "Lvl " + Upgrade2Count + ", progress to lvl " + Upgrade2Count2 +":";
	document.getElementById("Upgrade3Level").innerHTML = "Lvl " + Upgrade3Count + ", progress to lvl " + Upgrade3Count2 +":";
	document.getElementById("Upgrade4Level").innerHTML = "Lvl " + Upgrade4Count + ", progress to lvl " + Upgrade4Count2 +":";
	document.getElementById("Upgrade4Add").innerHTML = "1 Square = " + MaxPoints + " points";
	document.getElementById("Upgrade1Add").innerHTML = "+ " + Upgrade1SpeedAdd + " Points Per Minute";
}
document.getElementById("reset").onclick = function()
{
	localStorage.clear();
	location.reload();
}
