// Solution 1
const capitalize1 = (str) => {
  const wordsArray = [];
  for (const word of str.split(' ')) wordsArray.push(`${ word[0].toUpperCase() }${ word.slice(1) }`);
  return wordsArray.join(' ');
};

// Solution 2
const range = (count) => Array.from({ length: count }, (v, i) => i + 1); // Helper Function
const capitalize2 = (str) => {
  let result = str[0].toUpperCase();
  for (i of range(str.length - 1)) str[i - 1] === ' ' ? result += str[i].toUpperCase() : result += str[i];
  return result;
};

const capitalize = capitalize2;
module.exports = capitalize;
