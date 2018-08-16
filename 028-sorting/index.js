// Solutions
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < (arr.length - i - 1); j += 1) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j += 1) if (arr[j] < arr[indexOfMin]) indexOfMin = j;
    if (indexOfMin !== i) [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
  }
  return arr;
};

const mergeSort = (arr) => {
};

const merge = (left, right) => {
};


module.exports = { 
  bubbleSort, 
  selectionSort, 
  mergeSort, 
  merge, 
};
