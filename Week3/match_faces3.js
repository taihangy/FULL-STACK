function generateFaces() {
	var numberOfFaces = 5;
	var theLeftSide = document.getElementById("leftSide");
	var theRightSide = document.getElementById("rightSide");
	var top = 0; var left = 0;
	var width = 400; var height = 400; 
	for(var i = 0; i < numberOfFaces; i++) {
		leftImg = document.createElement("img");
		leftImg.setAttribute("src", "download.jpeg");
		top = Math.floor(Math.random() * height);
		left = Math.floor(Math.random() * width );
		leftImg.style.top = top + "px";
		leftImg.style.left = left + "px";
		theLeftSide.appendChild(leftImg);	
	}
	leftSideImages = theLeftSide.cloneNode(true);
	leftSideImages.removeChild(leftSideImages.lastChild);
	theRightSide.appendChild(leftSideImages);
}

