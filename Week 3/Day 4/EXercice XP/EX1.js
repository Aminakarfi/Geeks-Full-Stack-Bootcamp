const heading = document.getElementsByTagName("h1")[0];
console.log(heading);
const article = document.querySelector("article");
const lastParagraph = article.querySelector("p:last-of-type");
article.removeChild(lastParagraph);
