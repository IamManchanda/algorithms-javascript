// Solution 1
const pyramid1 = (n) => {
  const midpoint = Math.floor(((2 * n) - 1) / 2);
  for (let row = 0; row < n; row += 1) {
    let level = '';
    for (let column = 0; column < (2 * n) - 1; column += 1) {
      midpoint - row <= column && midpoint + row >= column ? level += '#' : level += ' ';
    }
    console.log(level);
  }
};

// Solution 2
const pyramid2 = (n, row = 0, level = '') => {
  if (n === row) { return; }
  if (level.length === (2 * n) - 1) {
    console.log(level);
    return pyramid2(n, row + 1); 
  }
  const midpoint = Math.floor(((2 * n) - 1) / 2);
  const addToLevel = midpoint - row <= level.length && midpoint + row >= level.length ? '#' : ' ';
  pyramid2(n, row, level + addToLevel);
};

const pyramid = pyramid2;
module.exports = pyramid;
