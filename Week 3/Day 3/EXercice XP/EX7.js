const allBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg",
    alreadyRead: true
  },
  {
    title: "1984",
    author: "George Orwell",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c3/1984first.jpg",
    alreadyRead: false
  }
];

const bookSection = document.querySelector(".listBooks");

allBooks.forEach(book => {
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");

  const bookInfo = document.createElement("p");
  bookInfo.textContent = `${book.title} written by ${book.author}`;
  if (book.alreadyRead) {
    bookInfo.style.color = "red";
  }

  const bookImg = document.createElement("img");
  bookImg.src = book.image;
  bookImg.style.width = "100px";

  bookDiv.appendChild(bookInfo);
  bookDiv.appendChild(bookImg);

  bookSection.appendChild(bookDiv);
});
