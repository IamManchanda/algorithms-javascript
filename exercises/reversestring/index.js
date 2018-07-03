// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
const reverse1 = (str) => {
  return str
    .split('')
    .reverse()
    .join('');
};

// Solution 2
const reverse2 = (str) => {
  let reversed = '';
  for (const currentCharacter of str) {
    reversed = `${currentCharacter}${reversed}`;
  }
  return reversed;
};

// Solution 3
const reverse3 = (str) => {
  return str
    .split('')
    .reduce((reversed, currentCharacter) => `${currentCharacter}${reversed}`, '');
};

const reverse = reverse3;
module.exports = reverse;
