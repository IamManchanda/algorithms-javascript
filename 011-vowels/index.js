// Solution 1
const vowels1 = (str) => {
  let count = 0;
  const checker = ['a', 'i', 'e', 'o', 'u'];
  for (const char of str.toLowerCase()) checker.includes(char) ? count += 1 : count += 0;
  return count;
};

// Solution 2
const vowels2 = (str) => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

const vowels = vowels2;
module.exports = vowels;
