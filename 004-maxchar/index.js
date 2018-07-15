// Solution
const maxChar = (str) => {
  const charMap = {};
  for (const char of str) charMap[char] = charMap[char] + 1 || 1;
  let solution;
  let maxValue = 0;
  for (const char in charMap) {
    if (charMap[char] > maxValue) {
      maxValue = charMap[char];
      solution = char;
    }
  }
  return solution;
};

module.exports = maxChar;
