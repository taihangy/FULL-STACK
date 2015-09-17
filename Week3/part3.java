<!DOCTYPE html>
<html>
<head>
	<title>Matching Game</title>
	<style type="text/css">
		div {
			position: absolute;
			width: 500px; 
			height: 500px;
		}
		#rightSide { 
			left: 500px;
			border-left: solid black 1px;
		}
		h1 {text-align: center;}
		img {position: absolute;}
	</style>
</head>
<body onload="generateFaces()">
	<h1>Matching Game</h1>
	<p>Click on the extra smiling face on the left.</p>
	<div id = "leftSide"></div>
	<div id = "rightSide"></div>
	<script src="match_faces3.js"></script>
</body>
</html>