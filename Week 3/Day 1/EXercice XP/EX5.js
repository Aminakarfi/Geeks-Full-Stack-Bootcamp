const family = {
  father: "Ali",
  mother: "Amina",
  daughter: "Sara",
  son: "Omar"
};
console.log("Family keys:");
for (let key in family) {
  console.log(key);
}
console.log("Family values:");
for (let key in family) {
  console.log(family[key]);
}
