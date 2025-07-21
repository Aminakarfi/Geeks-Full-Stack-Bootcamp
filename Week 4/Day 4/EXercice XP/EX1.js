const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const message = params.get("message");
console.log(name, message);
// The data appears in the URL