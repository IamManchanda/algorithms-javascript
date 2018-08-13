// Solution
const levelWidth = (root) => {
  const arr = [root, 'stopper']; // 'stopper' is the pointer
  const counters = [0];
  while (arr.length > 1) {
    const node = arr.shift();
    if (node === 'stopper') {
      counters.push(0);
      arr.push('stopper');
    } else {
      arr.push(...node.children);
      counters[counters.length - 1] += 1;
    }
  }
  return counters;
};

module.exports = levelWidth;
