let secretNumber = Math.floor((Math.random() * 10) + 1);

let guess = parseInt(prompt("Guess a number between 1 and 10: "));

while (guess !== secretNumber) {
    if (guess < 1 || guess > 10) {
        alert("Please input a number between 1 and 10!");
    }
    guess = parseInt(prompt("Guess a number between 1 and 10: "));
}

alert("You guessed right!");
