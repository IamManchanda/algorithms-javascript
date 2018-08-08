// Solution
const midpoint = (list) => {
  let slowIncrement = list.getFirst();
  let fastIncrement = list.getFirst();
  while (fastIncrement.next && fastIncrement.next.next) {
    slowIncrement = slowIncrement.next;
    fastIncrement = fastIncrement.next.next;
  }
  return slowIncrement;
};

module.exports = midpoint;
