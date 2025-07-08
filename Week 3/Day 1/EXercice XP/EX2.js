const colors = ["blue", "red", "green", "purple", "yellow"];
const suffixes = ["st", "nd", "rd", "th", "th"]; // manually made for first 5

for (let i = 0; i < colors.length; i++) {
  const position = i + 1;
  const suffix = suffixes[i] || "th"; // fallback in case you have more than 5
  console.log(`My ${position}${suffix} choice is ${colors[i]}`);
}
