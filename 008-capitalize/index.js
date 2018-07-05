// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution 1
const capitalize1 = (str) => {
  const wordsArray = [];
  for (const word of str.split(' ')) { wordsArray.push(`${ word[0].toUpperCase() }${ word.slice(1) }`); }
  return wordsArray.join(' ');
};

// Solution 2
const range = (count) => Array.from({ length: count }, (v, i) => i + 1); // Helper Function
const capitalize2 = (str) => {
  let result = str[0].toUpperCase();
  for (i of range(str.length - 1)) { str[i - 1] === ' ' ? result += str[i].toUpperCase() : result += str[i]; }
  return result;
};

const capitalize = capitalize2;
module.exports = capitalize;
