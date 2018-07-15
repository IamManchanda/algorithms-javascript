// Solution
class Queue {
  constructor() { 
    this.data = []; 
  }

  add(record) { 
    this.data.unshift(record); 
  }

  remove() { 
    return this.data.pop(); 
  }
}

module.exports = Queue;
