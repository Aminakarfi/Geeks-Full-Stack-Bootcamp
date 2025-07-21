const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const story = epic.reduce((accumulator, currentWord) => {
  return `${accumulator} ${currentWord}`;
});

console.log(story);
