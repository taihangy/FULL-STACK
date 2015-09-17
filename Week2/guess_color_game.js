var colors = ["red", "blue", "yellow", "black", "white", "purple", "green", "orange", "gray", "gold"];
colors.sort();
var count = 0;
var finish = false;
var random_index = 0;
var random_color;
var guess;

function do_game() {
	random_index = Math.floor(Math.random() * colors.length);
	random_color = colors[random_index];
	console.log(random_color);
	while(!finish) {
		guess = prompt("Please guess a color from the following:\n" + colors);
		count++;
		finish = check_guess();
	}
}

function check_guess() {
	if(colors.indexOf(guess) == -1) {
		alert("Color is not in the list!");
		return false;
	}
	else if(guess > random_color) {
		alert("Your input is alphabetically higher than mine");
		return false;
	}
	else if(guess < random_color) {
		alert("Your input is alphabetically lower than mine");
		return false;
	}
	alert("You are right! You took " + count +" guesses!");
	myBody=document.getElementsByTagName("body")[0];
	myBody.style.background=guess;
	return true;
}