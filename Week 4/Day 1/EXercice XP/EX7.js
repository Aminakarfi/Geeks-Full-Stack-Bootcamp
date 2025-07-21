(function(username) {
  const navbar = document.querySelector('.navbar');

  const welcomeDiv = document.createElement('div');
  welcomeDiv.classList.add('welcome');

  const img = document.createElement('img');
  img.src = 'https://i.pravatar.cc/40'; // Random profile pic

  const nameText = document.createElement('span');
  nameText.textContent = `Welcome, ${username}!`;

  welcomeDiv.appendChild(img);
  welcomeDiv.appendChild(nameText);

  navbar.appendChild(welcomeDiv);
})("John");
