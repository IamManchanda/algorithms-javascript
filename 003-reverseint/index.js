// Solution
const reverseInt = (num) =>  Math.sign(num) * parseInt(num.toString().split('').reverse().join(''), 10);

module.exports = reverseInt;
