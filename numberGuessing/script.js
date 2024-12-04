let input = document.querySelector("#number");
let button = document.querySelector("#btn");
let previous = document.querySelector("#previous");
let remaining = document.querySelector("#remaining");
let preAttempts = [];
const guessNumber = Math.floor(Math.random() * 100 + 1);
console.log(guessNumber,typeof(guessNumber))
let count = 10;

button.addEventListener("click", () => {
  let userGuess = parseInt(input.value); 
  if (isNaN(userGuess)) {
    document.getElementById("message").innerText = "Please enter a valid number.";
    return;
  }

  if (userGuess < 1 || userGuess > 100) {
    document.getElementById("message").innerText = 
      userGuess < 1 ? "Number is less than 1" : "Number is greater than 100";
    return;
  }

  if (userGuess === guessNumber) {
    document.getElementById("won").innerText = "You have won the game!";
    button.disabled = true;
  } else {
    preAttempts.push(userGuess);
    previous.innerText = preAttempts.join(", ");
    count -= 1;
    remaining.innerText = count;

    if (count <= 0) {
      document.getElementById("won").innerText = "Game Over! You've used all attempts.";
      button.disabled = true;
    }
  }
});
