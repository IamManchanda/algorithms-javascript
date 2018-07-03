// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse1 = (str) => {
  return str
    .split('')
    .reverse()
    .join('');
};

const reverse2 = (str) => {
  let reversed = '';
  for (const currentCharacter of str) {
    reversed = `${currentCharacter}${reversed}`;
  }
  return reversed;
};

const reverse3 = (str) => {
  return str
    .split('')
    .reduce((reversed, currentCharacter) => `${currentCharacter}${reversed}`, '');
};

const reverse = reverse3;
module.exports = reverse;
