const container = document.getElementById("container");
console.log(container);


const firstUl = document.querySelectorAll("ul")[0];
firstUl.children[1].textContent = "Richard";

const secondUl = document.querySelectorAll("ul")[1];
secondUl.removeChild(secondUl.children[1]); 

const allUls = document.querySelectorAll("ul");
allUls.forEach(ul => {
  ul.children[0].textContent = "Amina";
});

allUls.forEach(ul => {
  ul.classList.add("student_list");
});

firstUl.classList.add("university", "attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "20px";

const listItems = document.querySelectorAll("li");
listItems.forEach(li => {
  if (li.textContent === "Dan") {
    li.style.display = "none";
  }
});

listItems.forEach(li => {
  if (li.textContent === "Richard") {
    li.style.border = "1px solid black";
  }
});

document.body.style.fontSize = "18px";

if (container.style.backgroundColor === "lightblue") {
  const users = firstUl.querySelectorAll("li");
  if (users.length >= 2) {
    alert(`Hello ${users[0].textContent} and ${users[1].textContent}`);
  }
}
