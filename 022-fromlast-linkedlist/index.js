// Solution
const fromLast = (list, n) => {
  let slowIncrement = list.getFirst();
  let fastIncrement = list.getFirst();
  while (n > 0) {
    fastIncrement = fastIncrement.next;
    n -= 1;
  }
  while (fastIncrement.next) {
    slowIncrement = slowIncrement.next;
    fastIncrement = fastIncrement.next;
  }
  return slowIncrement;
};

module.exports = fromLast;
