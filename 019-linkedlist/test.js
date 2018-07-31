const { Node, LinkedList } = require('./index');

describe('Node', () => {
  describe('constructor', () => {
    test('is a class (has prototype constructor which is equal to a function)', () => {
      expect(typeof Node.prototype.constructor).toEqual('function');
    });
  
    test('has properties "data" and "next" when both defined in a function', () => {
      const node = new Node('a', 'b');
      expect(node.data).toEqual('a');
      expect(node.next).toEqual('b');
    });
  
    test('has property "data" whereas "next" returns "null" if not defined', () => {
      const node = new Node('a');
      expect(node.data).toEqual('a');
      expect(node.next).toEqual(null);
    });
  });
});

describe('LinkedList', () => {
  describe('constructor', () => {
    test('is a class (has prototype constructor which is equal to a function)', () => {
      expect(typeof LinkedList.prototype.constructor).toEqual('function');
    });

    test('has property "head" which returns "null" without any definition in a function', () => {
      const list = new LinkedList();
      expect(list.head).toEqual(null);
    });
  });

  describe('insertFirst', () => {
    test('appends a node to the start of the list', () => {
      const list = new LinkedList();
      list.insertFirst(1);
      expect(list.head.data).toEqual(1);
      list.insertFirst(2);
      expect(list.head.data).toEqual(2);
      list.insertFirst(3);
      expect(list.head.data).toEqual(3);
    });
  });
  
  describe('size', () => {
    test('returns the number of items in the linked list', () => {
      const list = new LinkedList();
      expect(list.size()).toEqual(0);
      list.insertFirst(1);
      list.insertFirst(1);
      list.insertFirst(1);
      list.insertFirst(1);
      expect(list.size()).toEqual(4);
    });
  });
  
  describe('getFirst', () => {
    test('returns the first element', () => {
      const list = new LinkedList();
      list.insertFirst(1);
      expect(list.getFirst().data).toEqual(1);
      list.insertFirst(2);
      expect(list.getFirst().data).toEqual(2);
    });
  });
  
  describe('getLast', () => {
    test('returns the last element', () => {
      const list = new LinkedList();
      list.insertFirst(2);
      expect(list.getLast()).toEqual({ data: 2, next: null });
      list.insertFirst(1);
      expect(list.getLast()).toEqual({ data: 2, next: null });
    });
  });
  
  describe('clear', () => {
    test('empties out the list', () => {
      const list = new LinkedList();
      expect(list.size()).toEqual(0);
      list.insertFirst(1);
      list.insertFirst(1);
      list.insertFirst(1);
      list.insertFirst(1);
      expect(list.size()).toEqual(4);
      list.clear();
      expect(list.size()).toEqual(0);
    });
  });
  
  describe('removeFirst', () => {
    test('removes the first node when the list has a size of one', () => {
      const list = new LinkedList();
      list.insertFirst('a');
      list.removeFirst();
      expect(list.size()).toEqual(0);
      expect(list.getFirst()).toEqual(null);
    });
  
    test('removes the first node when the list has a size of three', () => {
      const list = new LinkedList();
      list.insertFirst('c');
      list.insertFirst('b');
      list.insertFirst('a');
      list.removeFirst();
      expect(list.size()).toEqual(2);
      expect(list.getFirst().data).toEqual('b');
      list.removeFirst();
      expect(list.size()).toEqual(1);
      expect(list.getFirst().data).toEqual('c');
    });
  });
  
  describe('removeLast', () => {
    test('removes the last node when list is empty', () => {
      const list = new LinkedList();
      expect(() => {
        list.removeLast();
      }).not.toThrow();
    });
  
    test('removes the last node when list is length 1', () => {
      const list = new LinkedList();
      list.insertFirst('a');
      list.removeLast();
      expect(list.head).toEqual(null);
    });
  
    test('removes the last node when list is length 2', () => {
      const list = new LinkedList();
      list.insertFirst('b');
      list.insertFirst('a');
      list.removeLast();
      expect(list.size()).toEqual(1);
      expect(list.head.data).toEqual('a');
    });
  
    test('removes the last node when list is length 3', () => {
      const list = new LinkedList();
      list.insertFirst('c');
      list.insertFirst('b');
      list.insertFirst('a');
      list.removeLast();
      expect(list.size()).toEqual(2);
      expect(list.getLast().data).toEqual('b');
    });
  });
  
  describe('insertLast', () => {
    test('adds to the end of the list', () => {
      const list = new LinkedList();
      list.insertFirst('a');
      list.insertLast('b');
      expect(list.size()).toEqual(2);
      expect(list.getLast().data).toEqual('b');
    });
  });
  
  describe('getAt', () => {
    test('returns the node at given index', () => {
      const list = new LinkedList();
      expect(list.getAt(10)).toEqual(null);
      list.insertLast(1);
      list.insertLast(2);
      list.insertLast(3);
      list.insertLast(4);
      expect(list.getAt(0).data).toEqual(1);
      expect(list.getAt(1).data).toEqual(2);
      expect(list.getAt(2).data).toEqual(3);
      expect(list.getAt(3).data).toEqual(4);
    });
  });
  
  describe('removeAt', () => {
    test('doesnt crash on an empty list', () => {
      const list = new LinkedList();
      expect(() => {
        list.removeAt(0);
        list.removeAt(1);
        list.removeAt(2);
      }).not.toThrow();
    });
  
    test('doesnt crash on an index out of bounds', () => {
      const list = new LinkedList();
      expect(() => {
        // eslint-disable-next-line no-shadow
        const list = new LinkedList();
        list.insertFirst('a');
        list.removeAt(1);
      }).not.toThrow();
    });
  
    test('deletes the first node', () => {
      const list = new LinkedList();
      list.insertLast(1);
      list.insertLast(2);
      list.insertLast(3);
      list.insertLast(4);
      expect(list.getAt(0).data).toEqual(1);
      list.removeAt(0);
      expect(list.getAt(0).data).toEqual(2);
    });
  
    test('deletes the node at the given index', () => {
      const list = new LinkedList();
      list.insertLast(1);
      list.insertLast(2);
      list.insertLast(3);
      list.insertLast(4);
      expect(list.getAt(1).data).toEqual(2);
      list.removeAt(1);
      expect(list.getAt(1).data).toEqual(3);
    });
  
    test('works on the last node', () => {
      const list = new LinkedList();
      list.insertLast(1);
      list.insertLast(2);
      list.insertLast(3);
      list.insertLast(4);
      expect(list.getAt(3).data).toEqual(4);
      list.removeAt(3);
      expect(list.getAt(3)).toEqual(null);
    });
  });
  
  describe('insertAt', () => {
    test('inserts a new node with data at the 0 index when the list is empty', () => {
      const list = new LinkedList();
      list.insertAt('hi', 0);
      expect(list.getFirst().data).toEqual('hi');
    });
  
    test('inserts a new node with data at the 0 index when the list has elements', () => {
      const list = new LinkedList();
      list.insertLast('a');
      list.insertLast('b');
      list.insertLast('c');
      list.insertAt('hi', 0);
      expect(list.getAt(0).data).toEqual('hi');
      expect(list.getAt(1).data).toEqual('a');
      expect(list.getAt(2).data).toEqual('b');
      expect(list.getAt(3).data).toEqual('c');
    });
  
    test('inserts a new node with data at a middle index', () => {
      const list = new LinkedList();
      list.insertLast('a');
      list.insertLast('b');
      list.insertLast('c');
      list.insertLast('d');
      list.insertAt('hi', 2);
      expect(list.getAt(0).data).toEqual('a');
      expect(list.getAt(1).data).toEqual('b');
      expect(list.getAt(2).data).toEqual('hi');
      expect(list.getAt(3).data).toEqual('c');
      expect(list.getAt(4).data).toEqual('d');
    });
  
    test('inserts a new node with data at a last index', () => {
      const list = new LinkedList();
      list.insertLast('a');
      list.insertLast('b');
      list.insertAt('hi', 2);
      expect(list.getAt(0).data).toEqual('a');
      expect(list.getAt(1).data).toEqual('b');
      expect(list.getAt(2).data).toEqual('hi');
    });
  
    test('insert a new node when index is out of bounds', () => {
      const list = new LinkedList();
      list.insertLast('a');
      list.insertLast('b');
      list.insertAt('hi', 30);
  
      expect(list.getAt(0).data).toEqual('a');
      expect(list.getAt(1).data).toEqual('b');
      expect(list.getAt(2).data).toEqual('hi');
    });
  });
  
  describe('forEach', () => {
    test('applies a transform to each node', () => {
      const list = new LinkedList();
  
      list.insertLast(1);
      list.insertLast(2);
      list.insertLast(3);
      list.insertLast(4);
  
      list.forEach(node => {
        node.data += 10;
      });
  
      expect(list.getAt(0).data).toEqual(11);
      expect(list.getAt(1).data).toEqual(12);
      expect(list.getAt(2).data).toEqual(13);
      expect(list.getAt(3).data).toEqual(14);
    });
  });
  
  describe('for...of loops', () => {
    test('works with the linked list', () => {
      const list = new LinkedList();
  
      list.insertLast(1);
      list.insertLast(2);
      list.insertLast(3);
      list.insertLast(4);
  
      for (let node of list) {
        node.data += 10;
      }
  
      expect(list.getAt(0).data).toEqual(11);
      expect(list.getAt(1).data).toEqual(12);
      expect(list.getAt(2).data).toEqual(13);
      expect(list.getAt(3).data).toEqual(14);
    });
  
    test('for...of works on an empty list', () => {
      const list = new LinkedList();
      expect(() => {
        for (let node of list) {
        }
      }).not.toThrow();
    });
  });
});
