// Helper Function for both solutions
const cleanString = (str) => str.replace(/[^\w]/g, '').toLowerCase();

// Solution 1
const sortString = (str) => cleanString(str).split('').sort().join(''); // Helper Function
const anagrams1 = (stringA, stringB) => sortString(stringA) === sortString(stringB);

// Solution 2
const buildCharMap = (str) => { // Helper Function
  const charMap = {};
  for (const char of cleanString(str)) { charMap[char] = charMap[char] + 1 || 1; }
  return charMap;
};
const anagrams2 = (stringA, stringB) => {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) { return false; }
  for (const char in aCharMap) { if (aCharMap[char] !== bCharMap[char]) { return false; } }
  return true;
};

const anagrams = anagrams2;
module.exports = anagrams;
