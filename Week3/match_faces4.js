var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];
var up = 0; var left = 0;
var width = 400; var height = 400; 
function generateFaces() {
	
	for(var i = 0; i < numberOfFaces; i++) {
		leftImg = document.createElement("img");
		leftImg.setAttribute("src", "download.jpeg");
		up = Math.floor(Math.random() * height);
		left = Math.floor(Math.random() * width );
		leftImg.style.top = up + "px";
		leftImg.style.left = left + "px";
		theLeftSide.appendChild(leftImg);
	}
	leftSideImages = theLeftSide.cloneNode(true);
	leftSideImages.removeChild(leftSideImages.lastChild);
	theRightSide.appendChild(leftSideImages);

	// chick the right face
	theLeftSide.lastChild.onclick = function nextLevel(event) {
		event.stopPropagation();
		while(theLeftSide.firstChild) theLeftSide.removeChild(theLeftSide.firstChild);
		while(theRightSide.firstChild) theRightSide.removeChild(theRightSide.firstChild);
		numberOfFaces += 5;

		generateFaces();
	}	

	// click the body 
	theBody.onclick = function gameOver() {
		alert("Game over!");
		theBody.onclick = null;
		theLeftSide.lastChild.onclick = null;
	}
}

//delete faces
function deleteFaces() {

}

