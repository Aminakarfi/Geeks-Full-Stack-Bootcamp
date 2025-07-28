const promise = new Promise((resolve, reject) => {
  const random = Math.random();
  if (random > 0.5) {
    resolve("Yay! Greater than 0.5");
  } else {
    reject("Oops! Less than or equal to 0.5");
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));
