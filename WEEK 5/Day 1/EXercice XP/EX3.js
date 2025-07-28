
const promiseResolved = Promise.resolve(3);

promiseResolved
  .then(value => console.log("Resolved value:", value)) 
  .catch(error => console.log("Error:", error)); 

const promiseRejected = Promise.reject("Boo!");

promiseRejected
  .then(value => console.log("Resolved value:", value)) 
  .catch(error => console.log("Rejected with:", error)); 
