// Solution 1
const palindrome1 = (str) => str === str.split('').reverse().join('');

// Solution 2
const palindrome2 = (str) => {
  return str.split('').every((char, index) => char === str[str.length - index - 1]);
};

const palindrome = palindrome2;
module.exports = palindrome;
