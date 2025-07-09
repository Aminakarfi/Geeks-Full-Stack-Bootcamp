
  const libForm = document.getElementById("libform");
  const storyOutput = document.getElementById("story");
  const libButton = document.getElementById("lib-button");

  
  let storyTemplates = [
    (noun, adjective, person, verb, place) =>
      `${person} saw a very ${adjective} ${noun} that could ${verb} in ${place}.`,
    (noun, adjective, person, verb, place) =>
      `In ${place}, ${person} found a ${noun} that was strangely ${adjective} and began to ${verb}.`,
    (noun, adjective, person, verb, place) =>
      `Everyone was shocked when ${person} started to ${verb} with a ${adjective} ${noun} at ${place}!`
  ];

  let currentInputs = {};

  libForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const noun = document.getElementById("noun").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const person = document.getElementById("person").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const place = document.getElementById("place").value.trim();

    if (!noun || !adjective || !person || !verb || !place) {
      alert("Please fill in all fields.");
      return;
    }
    currentInputs = { noun, adjective, person, verb, place };
 
    displayRandomStory();
  });

  function displayRandomStory() {
    const { noun, adjective, person, verb, place } = currentInputs;
  
    const randomIndex = Math.floor(Math.random() * storyTemplates.length);
    const story = storyTemplates[randomIndex](noun, adjective, person, verb, place);

    storyOutput.textContent = story;
  }
  
  const shuffleButton = document.createElement("button");
  shuffleButton.textContent = "Shuffle Story";
  shuffleButton.type = "button";
  libForm.appendChild(shuffleButton);

  shuffleButton.addEventListener("click", function () {
    
    if (Object.keys(currentInputs).length === 0) {
      alert("Please generate a story first!");
      return;
    }
    displayRandomStory();
  });

