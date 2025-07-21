// Arrow function to check if the input is a string
const isString = (value) => {
  return typeof value === 'string';
};

// Test examples
console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false
