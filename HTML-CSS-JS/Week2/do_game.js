function do_game() {
	var count = 1;
	var range = 100;
	var ans = Math.floor(Math.random() * 100) + 1;
	do{
		var number = prompt("please enter a number between 1 and " + range + ": ");
		number = parseInt(number);
		if(number < ans) alert("it's too small! please guess again!");
		else if(number > ans) alert("it's too large!please guess again!");
		else {
			alert("You are correct and you guess " + count + " times.");
			break;
		}
		count++;
	} while(number != ans);
}