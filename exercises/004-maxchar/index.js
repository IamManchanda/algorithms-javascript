// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Solution
const maxChar = (str) => {
  const charMap = {};

  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

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
