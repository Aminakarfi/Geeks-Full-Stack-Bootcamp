const form = document.getElementById("gifForm");
const searchInput = document.getElementById("searchInput");
const gifResults = document.getElementById("gifResults");
const deleteAllBtn = document.getElementById("deleteAllBtn");

const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";


async function fetchGif(category) {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${category}&rating=g`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    const gifUrl = data.data.images.original.url;


    const gifContainer = document.createElement("div");
    gifContainer.classList.add("gif-container");

    const img = document.createElement("img");
    img.src = gifUrl;
    img.alt = category;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    deleteBtn.onclick = () => gifContainer.remove();

    gifContainer.appendChild(img);
    gifContainer.appendChild(deleteBtn);
    gifResults.appendChild(gifContainer);

  } catch (error) {
    console.error("Error fetching GIF:", error);
    alert("Could not fetch a GIF. Try another category.");
  }
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const category = searchInput.value.trim();
  if (category) {
    fetchGif(category);
    searchInput.value = "";
  }
});


deleteAllBtn.addEventListener("click", () => {
  gifResults.innerHTML = "";
});
