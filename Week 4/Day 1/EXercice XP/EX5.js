// ✅ 1. Function Declaration
function convertKgToGrams(kg) {
  return kg * 1000;
}

console.log(convertKgToGrams(5)); // Output: 5000

// ✅ 2. Function Expression
const convertKgToGramsExp = function(kg) {
  return kg * 1000;
};

console.log(convertKgToGramsExp(3)); // Output: 3000

// ➕ Difference:
// Function declarations are hoisted, meaning you can call them before they're defined.
// Function expressions are NOT hoisted, so you must define them before using.

// ✅ 3. One-line Arrow Function
const convertKgToGramsArrow = kg => kg * 1000;

console.log(convertKgToGramsArrow(2)); // Output: 2000
