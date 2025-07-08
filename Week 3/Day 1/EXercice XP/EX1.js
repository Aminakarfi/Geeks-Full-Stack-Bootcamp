const people = ["Greg", "Mary", "Devon", "James"];

// 1. Remove “Greg”
people.shift(); // removes the first element
console.log(people); // ["Mary", "Devon", "James"]

// 2. Replace “James” with “Jason”
people[people.indexOf("James")] = "Jason";
console.log(people); // ["Mary", "Devon", "Jason"]

// 3. Add your name to the end
people.push("Amina");
console.log(people); // ["Mary", "Devon", "Jason", "Amina"]

// 4. Console.log Mary's index
console.log(people.indexOf("Mary")); // 0

// 5. Make a copy (without Mary and your name)
const peopleCopy = people.slice(1, -1);
console.log(peopleCopy); // ["Devon", "Jason"]

// 6. Get the index of “Foo”
console.log(people.indexOf("Foo")); // -1
// Explanation: "Foo" is not in the array, so indexOf returns -1.

// 7. Get the last element using the length
const last = people[people.length - 1];
console.log(last); // "Amina"
const people = ["Mary", "Devon", "Jason", "Amina"];

// 1. Loop through and log each person
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2. Exit the loop after logging “Devon”
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break; // exits the loop
  }
}
