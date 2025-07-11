// hado les couleurs de la palette
const colorList = [
  "red", "orange", "gold", "yellow", "green", "lightgreen", "darkgreen", "turquoise",
  "cyan", "lightblue", "blue", "darkblue", "navy", "purple", "violet", "pink",
  "lightpink", "lightgray", "gray", "black", "white"
];

// Selecting elements from the DOM
const colorsContainer = document.querySelector('.lescouleurs');
const grid = document.querySelector('.gg');
const clearBtn = document.getElementById('clear');
let selectedColor = 'black';

// Create color buttons
colorList.forEach(function(color) {
  const colorBox = document.createElement('div');
  colorBox.classList.add('color');
  colorBox.style.backgroundColor = color;

  // When we click a color, it's selectedd
  colorBox.addEventListener('click', function() {
    selectedColor = color;
  });

  colorsContainer.appendChild(colorBox);
});

// (1500 squares)
for (let i = 0; i < 1500; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  // Click to color a square
  square.addEventListener('click', function() {
    square.style.backgroundColor = selectedColor;
  });

  grid.appendChild(square);
}

// button colore byed
clearBtn.addEventListener('click', function() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(function(sq) {
    sq.style.backgroundColor = 'white';
  });
});
