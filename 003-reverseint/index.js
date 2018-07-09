// Solution
const reverseInt = (num) => {
  return Math.sign(num) * parseInt(num.toString().split('').reverse().join(''), 10);
};

module.exports = reverseInt;
