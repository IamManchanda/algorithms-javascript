// Solution
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter += 1;
      node = node.next;
    }
    return counter;
  }

  clear() {
    this.head = null;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) return node;
      counter += 1;
      node = node.next;
    }
    return null;
  }

  getFirst() {
    return this.getAt(0);
  }

  getLast() {
    return this.getAt(this.size() - 1);
  }

  removeAt(index) {
    if (!this.head) return;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) return;
    previous.next = previous.next.next;
  }

  removeFirst() {
    return this.removeAt(0);
  }

  removeLast() {
    return this.removeAt(this.size() - 1);
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  insertFirst(data) {
    return this.insertAt(data, 0);
  }

  insertLast(data) {
    // `this.size()`  instead of `this.size() - 1` because we are adding a node after the current last item (hence last item `index + 1`)
    return this.insertAt(data, this.size());
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter += 1;
    }
  }

  * [Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
