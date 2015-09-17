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
	alert(random_color);
	while(!finish) {
		guess = prompt("Please guess a color from the following:\n" + colors);
		if(guess == random_color) finish = true;
	}
}
