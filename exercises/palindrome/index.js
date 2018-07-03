// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const palindrome1 = (str) => {
  return str === str.split('').reverse().join('');
};

const palindrome2 = (str) => {
  return str
    .split('')
    .every((char, index) => {
      return char === str[str.length - index - 1];
    });
};

const palindrome = palindrome2;
module.exports = palindrome;
