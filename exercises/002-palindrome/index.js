// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1
const palindrome1 = (str) => str === str.split('').reverse().join('');

// Solution 2
const palindrome2 = (str) => {
  return str
    .split('')
    .every((char, index) => {
      return char === str[str.length - index - 1];
    });
};

const palindrome = palindrome2;
module.exports = palindrome;
