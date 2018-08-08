// Solution
const circular = (list) => {
  let slowIncrement = list.getFirst();
  let fastIncrement = list.getFirst();
  while (fastIncrement.next && fastIncrement.next.next) {
    slowIncrement = slowIncrement.next;
    fastIncrement = fastIncrement.next.next;
    if (slowIncrement === fastIncrement) return true;
  }
  return false;
};

module.exports = circular;
