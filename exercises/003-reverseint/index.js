// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution
const reverseInt = (num) => Math.sign(num) * parseInt(num.toString().split('').reverse().join(''), 10);

module.exports = reverseInt;
