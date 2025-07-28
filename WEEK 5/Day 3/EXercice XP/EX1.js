const infoBox = document.getElementById("info-box");
const button = document.getElementById("btn");

function getRandomId() {
    return Math.floor(Math.random() * 83) + 1;
}

async function fetchCharacter() {
    const id = getRandomId();

    infoBox.innerHTML = `
    <img src="loading.png" alt="Loading" style="width:80px;"><p><strong>Loading...</strong></p>
  `;

    try {
        const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
        if (!response.ok) throw new Error();

        const data = await response.json();
        const character = data.result.properties;

        const homeworldRes = await fetch(character.homeworld);
        const homeworldData = await homeworldRes.json();
        const homeworld = homeworldData.result.properties.name;

        infoBox.innerHTML = `
      <h2>${character.name}</h2>
      <p><strong>Height:</strong> ${character.height}</p>
      <p><strong>Gender:</strong> ${character.gender}</p>
      <p><strong>Birth Year:</strong> ${character.birth_year}</p>
      <p><strong>Home World:</strong> ${homeworld}</p>
    `;
    } catch (error) {
        infoBox.innerHTML = `
      <img src="ERROR.png" alt="Error" style="width:80px;"><p><strong>Oh No! That person isn't available.</strong></p>
    `;
    }
}

button.addEventListener("click", fetchCharacter);
