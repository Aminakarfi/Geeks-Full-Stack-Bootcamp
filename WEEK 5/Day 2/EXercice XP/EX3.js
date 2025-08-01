async function getStarshipData() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data.result); 
  } catch (error) {
    console.error("Fetch error:", error); 
  }
}

getStarshipData();
