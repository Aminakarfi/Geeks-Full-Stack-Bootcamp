// Step 1: Turn the function into an arrow function
const winBattle = () => true;

// Step 2: Use a ternary operator to assign experiencePoints
// If winBattle() is true → 10, else → 1
const experiencePoints = winBattle() ? 10 : 1;

// Step 3: Display the result
console.log(experiencePoints); // Output: 10