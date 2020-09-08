// Solution 1
const palindrome1 = (str) => str === str.split('').reverse().join('');

// Solution 2
const palindrome2 = (str) => {
  return str.split('').every((char, index) => char === str[str.length - index - 1]);
};

// Solution 3
const palindrome3 = (str) => {
  for (let i = 0, j = str.length - 1; i < j; ++i, --j) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
};

const palindrome = palindrome2;
module.exports = palindrome;
