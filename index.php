<!DOCTYPE html>
<html>
<head>
	<title>Points Idle</title>
	<link rel="stylesheet" href="styles.css">
</head>
<body onload="load()">
	<?php
$homepage = file_get_contents('http://www.example.com/');
echo $homepage;
?>
	<div id="lvlup">LVL UP!</div>
	<div id="title2">
		<div id="LVLContainer">
			<div id="LVL" title="Buy upgrades to lvl up !">
				<div id="LvlText">Lvl 0</div>
				<div id="LvlProgress" title="0.0 XP / 50.0 XP">
					<div id="LvlProgressBar" role="progressbar" style="width: 0%;"></div>
				</div>
			</div>
		</div>
		<div id="PerSecondsNo">You need<br /><span id="LEVEL2">LVL 3</span></div>
		<div id="PerSeconds">
			<div id="ps" title="every  15.0 seconds gives 10.0 points"><div id="ps2" role="progressbar" style="width: 0%;"></div></div>
			<div id="BonusText">+ 0.0 Points</div>
		</div>
		<div id="PointsSeconds">
			<div id="PointsCount">0.0 Points</div>
			<div id="SecondsText"></div>
		</div>
		<div id="Boost" title="x1.30 PPM for 2 seconds">Boost!</div>
	</div>
	
	<br />
	
	<div id="Points">
		<div id="HelpPoints">
			<div class="s1"><div id="s2s1" role="progressbar" style="width: 0%;"></div></div>
			<div class="s2"><div id="s2s2" role="progressbar" style="width: 0%;"></div></div>
			<div class="s3"><div id="s2s3" role="progressbar" style="width: 0%;"></div></div>
			<div class="s4"><div id="s2s4" role="progressbar" style="width: 0%;"></div></div>
			<div class="s5"><div id="s2s5" role="progressbar" style="width: 0%;"></div></div>
			<div class="s6"><div id="s2s6" role="progressbar" style="width: 0%;"></div></div>
			<div class="s7"><div id="s2s7" role="progressbar" style="width: 0%;"></div></div>
			<div class="s8"><div id="s2s8" role="progressbar" style="width: 0%;"></div></div>
			<div class="s9"><div id="s2s9" role="progressbar" style="width: 0%;"></div></div>
			<div class="s10"><div id="s2s10" role="progressbar" style="width: 0%;"></div></div>
		</div>
	</div>
	
	<br /><br /><br /><br /><br />
	
	<div id="Upgrades">
		<div id="Upgrade1">
			<div id="Upgrade1Add">+ 1 Points Per Minute</div>
			<div id="Upgrade1Level">Lvl 0, progress to lvl 1:</div>
			<div id="Upgrade1Progress">
				<div class="su1"><div id="s2su1" role="progressbar" style="width: 0%;"></div></div>
				<div class="su2"><div id="s2su2" role="progressbar" style="width: 0%;"></div></div>
				<div class="su3"><div id="s2su3" role="progressbar" style="width: 0%;"></div></div>
				<div class="su4"><div id="s2su4" role="progressbar" style="width: 0%;"></div></div>
				<div class="su5"><div id="s2su5" role="progressbar" style="width: 0%;"></div></div>
				<div class="su6"><div id="s2su6" role="progressbar" style="width: 0%;"></div></div>
				<div class="su7"><div id="s2su7" role="progressbar" style="width: 0%;"></div></div>
				<div class="su8"><div id="s2su8" role="progressbar" style="width: 0%;"></div></div>
				<div class="su9"><div id="s2su9" role="progressbar" style="width: 0%;"></div></div>
				<div class="su10"><div id="s2su10" role="progressbar" style="width: 0%;"></div></div>
			</div>
			<div id="BuyInfo1">Click to spend points (5.0 points left)</div>
		</div>
		
		
		<div id="Upgrade2">
			<div id="Upgrade2Add">Boost works 0.1 second longer</div>
			<div id="Upgrade2Level">Lvl 0, progress to lvl 1:</div>
			<div id="Upgrade2Progress">
				<div class="su21"><div id="s2su21" role="progressbar" style="width: 0%;"></div></div>
				<div class="su22"><div id="s2su22" role="progressbar" style="width: 0%;"></div></div>
				<div class="su23"><div id="s2su23" role="progressbar" style="width: 0%;"></div></div>
				<div class="su24"><div id="s2su24" role="progressbar" style="width: 0%;"></div></div>
				<div class="su25"><div id="s2su25" role="progressbar" style="width: 0%;"></div></div>
				<div class="su26"><div id="s2su26" role="progressbar" style="width: 0%;"></div></div>
				<div class="su27"><div id="s2su27" role="progressbar" style="width: 0%;"></div></div>
				<div class="su28"><div id="s2su28" role="progressbar" style="width: 0%;"></div></div>
				<div class="su29"><div id="s2su29" role="progressbar" style="width: 0%;"></div></div>
				<div class="su210"><div id="s2su210" role="progressbar" style="width: 0%;"></div></div>
			</div>
			<div id="BuyInfo2">Click to spend points (20.0 points left)</div>
		</div>
		
		
		<div id="Upgrade3">
			<div id="Upgrade3Add">+ 0.01 Boost multiplier</div>
			<div id="Upgrade3Level">Lvl 0, progress to lvl 1:</div>
			<div id="Upgrade3Progress">
				<div class="su31"><div id="s2su31" role="progressbar" style="width: 0%;"></div></div>
				<div class="su32"><div id="s2su32" role="progressbar" style="width: 0%;"></div></div>
				<div class="su33"><div id="s2su33" role="progressbar" style="width: 0%;"></div></div>
				<div class="su34"><div id="s2su34" role="progressbar" style="width: 0%;"></div></div>
				<div class="su35"><div id="s2su35" role="progressbar" style="width: 0%;"></div></div>
				<div class="su36"><div id="s2su36" role="progressbar" style="width: 0%;"></div></div>
				<div class="su37"><div id="s2su37" role="progressbar" style="width: 0%;"></div></div>
				<div class="su38"><div id="s2su38" role="progressbar" style="width: 0%;"></div></div>
				<div class="su39"><div id="s2su39" role="progressbar" style="width: 0%;"></div></div>
				<div class="su310"><div id="s2su310" role="progressbar" style="width: 0%;"></div></div>
			</div>
			<div id="BuyInfo3">Click to spend points (30.0 points left)</div>
		</div>
		
		
		<div id="Upgrade4">
			<div id="Upgrade4Add">Increase maximum capacity x10 (current: 10)</div>
			<div id="Upgrade4Level">Lvl 0, progress to lvl 1:</div>
			<div id="Upgrade4Progress">
				<div class="su41"><div id="s2su41" role="progressbar" style="width: 0%;"></div></div>
				<div class="su42"><div id="s2su42" role="progressbar" style="width: 0%;"></div></div>
				<div class="su43"><div id="s2su43" role="progressbar" style="width: 0%;"></div></div>
				<div class="su44"><div id="s2su44" role="progressbar" style="width: 0%;"></div></div>
				<div class="su45"><div id="s2su45" role="progressbar" style="width: 0%;"></div></div>
				<div class="su46"><div id="s2su46" role="progressbar" style="width: 0%;"></div></div>
				<div class="su47"><div id="s2su47" role="progressbar" style="width: 0%;"></div></div>
				<div class="su48"><div id="s2su48" role="progressbar" style="width: 0%;"></div></div>
				<div class="su49"><div id="s2su49" role="progressbar" style="width: 0%;"></div></div>
				<div class="su410"><div id="s2su410" role="progressbar" style="width: 0%;"></div></div>
			</div>
			<div id="BuyInfo4">Click to spend points (50.0 points left)</div>
		</div>
	
	
		<div id="Upgrade5No">
			You need<br />
			<span id="LEVEL">LEVEL 5</span><br />
			to unlock this upgrade!
		</div>

		<div id="Upgrade5">
			<div id="Upgrade5Add">Time bonus give 10% more points</div>
			<div id="Upgrade5Level">Lvl 0, progress to lvl 1:</div>
			<div id="Upgrade5Progress">
				<div class="su51"><div id="s2su51" role="progressbar" style="width: 0%;"></div></div>
				<div class="su52"><div id="s2su52" role="progressbar" style="width: 0%;"></div></div>
				<div class="su53"><div id="s2su53" role="progressbar" style="width: 0%;"></div></div>
				<div class="su54"><div id="s2su54" role="progressbar" style="width: 0%;"></div></div>
				<div class="su55"><div id="s2su55" role="progressbar" style="width: 0%;"></div></div>
				<div class="su56"><div id="s2su56" role="progressbar" style="width: 0%;"></div></div>
				<div class="su57"><div id="s2su57" role="progressbar" style="width: 0%;"></div></div>
				<div class="su58"><div id="s2su58" role="progressbar" style="width: 0%;"></div></div>
				<div class="su59"><div id="s2su59" role="progressbar" style="width: 0%;"></div></div>
				<div class="su510"><div id="s2su510" role="progressbar" style="width: 0%;"></div></div>
			</div>
			<div id="BuyInfo5">Click to spend points (200.0 points left)</div>
		</div>


		<div id="Upgrade6No">
			You need<br />
			<span id="LEVEL">LEVEL 15</span><br />
			to unlock this upgrade!
		</div>
		
		<div id="Upgrade6yes">
			Maximum level !
		</div>

		<div id="Upgrade6">
			<div id="Upgrade6Add">Time bonus cooldown - 0.1 second (max. - 10s)</div>
			<div id="Upgrade6Level">Lvl 0, progress to lvl 1:</div>
			<div id="Upgrade6Progress">
				<div class="su61"><div id="s2su61" role="progressbar" style="width: 0%;"></div></div>
				<div class="su62"><div id="s2su62" role="progressbar" style="width: 0%;"></div></div>
				<div class="su63"><div id="s2su63" role="progressbar" style="width: 0%;"></div></div>
				<div class="su64"><div id="s2su64" role="progressbar" style="width: 0%;"></div></div>
				<div class="su65"><div id="s2su65" role="progressbar" style="width: 0%;"></div></div>
				<div class="su66"><div id="s2su66" role="progressbar" style="width: 0%;"></div></div>
				<div class="su67"><div id="s2su67" role="progressbar" style="width: 0%;"></div></div>
				<div class="su68"><div id="s2su68" role="progressbar" style="width: 0%;"></div></div>
				<div class="su69"><div id="s2su69" role="progressbar" style="width: 0%;"></div></div>
				<div class="su610"><div id="s2su610" role="progressbar" style="width: 0%;"></div></div>
			</div>
			<div id="BuyInfo6">Click to spend points (5.0K points left)</div>
		</div>

	</div>

	<br /><br /><br />

	<button id="reset">Reset game</button>

</body>
<script src="scripts.js"></script>
</html>
