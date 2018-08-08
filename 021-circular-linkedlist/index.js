// Solution
const circular = (list) => {
  let advBy1 = list.getFirst();
  let advBy2 = list.getFirst();
  while (advBy2.next && advBy2.next.next) {
    advBy1 = advBy1.next;
    advBy2 = advBy2.next.next;
    if (advBy1 === advBy2) return true;
  }
  return false;
};

module.exports = circular;
