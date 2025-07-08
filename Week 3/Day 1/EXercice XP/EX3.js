let userInput = prompt("Enter a number:");
let number = Number(userInput); // Convert input to a number

while (number < 10 || isNaN(number)) {
  userInput = prompt("Number is too small. Please enter a number >= 10:");
  number = Number(userInput);
}

alert(`Thanks! You entered: ${number}`);
