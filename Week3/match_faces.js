function generateFaces() {
	var numberOfFaces = 5;
	var theLeftSide = document.getElementById("leftSide");
	var top = 0; var left = 0;
	var width = 400; var height = 400; 
	for(var i = 0; i < numberOfFaces; i++) {
		img = document.createElement("img");
		img.setAttribute("src", "download.jpeg");
		top = Math.floor(Math.random() * height);
		left = Math.floor(Math.random() * width );
		img.style.top = top + "px";
		img.style.left = left + "px";
		theLeftSide.appendChild(img);
	}
}

