// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

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
