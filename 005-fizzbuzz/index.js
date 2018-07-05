// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// Solution 1
const fizzBuzz1 = (n) => {
  for (let i = 1; i <= n; i += 1) {
    if (i % (3 * 5) === 0) { console.log('fizzbuzz'); } 
    else if (i % 3 === 0) { console.log('fizz'); }
    else if (i % 5 === 0) { console.log('buzz'); }
    else { console.log(i); }
  }
};

// Solution 2
// => https://codepen.io/IamManchanda/pen/KZXQYr
const range = (count) => Array.from({ length: count }, (v, i) => i + 1); // Helper Function
const fizzBuzz2 = (n) => {
  for (i of range(n)) {
    if (i % (3 * 5) === 0) { console.log('fizzbuzz'); } 
    else if (i % 3 === 0) { console.log('fizz'); }
    else if (i % 5 === 0) { console.log('buzz'); }
    else { console.log(i); }
  }
};

const fizzBuzz = fizzBuzz2;
module.exports = fizzBuzz;
