const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
  let pos = index + 1;
  
  let suffix =
    pos === 1 ? ordinal[1] :
    pos === 2 ? ordinal[2] :
    pos === 3 ? ordinal[3] :
    ordinal[0]; 

  console.log(`${pos}${suffix} choice is ${color}.`);
});
