// Solution 1
const reverse1 = (str) => str.split('').reverse().join('');

// Solution 2
const reverse2 = (str) => {
  let reversed = '';
  for (const currentCharacter of str) reversed = `${currentCharacter}${reversed}`;
  return reversed;
};

// Solution 3
const reverse3 = (str) => str.split('').reduce((reversed, currentCharacter) => `${currentCharacter}${reversed}`, '');

const reverse = reverse2;
module.exports = reverse;
