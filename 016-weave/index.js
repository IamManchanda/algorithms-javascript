// Solution
const Queue = require('./queue');

const weave = (sourceOne, sourceTwo) => {
  const q = new Queue();
  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) q.add(sourceOne.remove());
    if (sourceTwo.peek()) q.add(sourceTwo.remove());
  } 
  return q;
};

module.exports = weave;
