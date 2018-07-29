// Solution
const Stack = require('./stack');

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  pushToFirstFromSecond() {
    while (this.second.peek()) this.first.push(this.second.pop());
  }

  pushToSecondFromFirst() {
    while (this.first.peek()) this.second.push(this.first.pop());
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    this.pushToSecondFromFirst();
    const record = this.second.pop();
    this.pushToFirstFromSecond();
    return record;
  }
  
  peek() {
    this.pushToSecondFromFirst();
    const record = this.second.peek();
    this.pushToFirstFromSecond();
    return record;
  }
}

module.exports = Queue;
