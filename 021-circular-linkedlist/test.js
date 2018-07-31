const circular = require('./index');
const { Node, LinkedList } = require('./linkedlist');

test('circular', () => {
  expect(typeof circular).toEqual('function');
});

test('circular detects circular linked lists', () => {
  const list = new LinkedList();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');

  list.head = a;
  a.next = b;
  b.next = c;
  c.next = b;

  expect(circular(list)).toEqual(true);
});

test('circular detects circular linked lists linked at the head', () => {
  const list = new LinkedList();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');

  list.head = a;
  a.next = b;
  b.next = c;
  c.next = a;

  expect(circular(list)).toEqual(true);
});

test('circular detects non-circular linked lists', () => {
  const list = new LinkedList();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');

  list.head = a;
  a.next = b;
  b.next = c;
  c.next = null;

  expect(circular(list)).toEqual(false);
});
