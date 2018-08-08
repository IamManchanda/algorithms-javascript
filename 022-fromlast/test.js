const fromLast = require('./index');
const { LinkedList } = require('./linkedlist');

test('fromLast is a function', () => {
  expect(typeof fromLast).toEqual('function');
});

test('fromLast returns the node n elements from the end', () => {
  const list = new LinkedList();

  list.insertLast('a');
  list.insertLast('b');
  list.insertLast('c');
  list.insertLast('d');
  list.insertLast('e');

  expect(fromLast(list, 3).data).toEqual('b');
});
