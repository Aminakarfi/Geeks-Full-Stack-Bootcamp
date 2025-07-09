const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");

console.log("By ID:");
console.log(fnameInput);
console.log(lnameInput);

const fnameByName = document.getElementsByName("firstname")[0];
const lnameByName = document.getElementsByName("lastname")[0];

console.log("By Name:");
console.log(fnameByName);
console.log(lnameByName);

const form = document.querySelector("form");
const usersAnswerList = document.querySelector(".usersAnswer");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const fnameValue = fnameInput.value.trim();
  const lnameValue = lnameInput.value.trim();

  if (fnameValue === "" || lnameValue === "") {
    alert("Please fill out both fields.");
    return;
  }

  const li1 = document.createElement("li");
  li1.textContent = "First name: " + fnameValue;

  const li2 = document.createElement("li");
  li2.textContent = "Last name: " + lnameValue;

  usersAnswerList.appendChild(li1);
  usersAnswerList.appendChild(li2);

  form.reset();
});
