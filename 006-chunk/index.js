// Solution 1
const chunk1 = (array, size) => {
  const chunked = [];

  for (const element of array) {
    const lastElement = chunked[chunked.length - 1];
    
    if (!lastElement || lastElement.length === size) {
      chunked.push([element]);
    } else {
      lastElement.push(element);
    }
  }
  
  return chunked;
};

// Solution 2
const chunk2 = (array, size) => {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
};

const chunk = chunk2;
module.exports = chunk;
