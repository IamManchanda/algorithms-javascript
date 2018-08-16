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

const merge = (left, right) => {
  const results = [];
  while (left.length && right.length) (left[0] < right[0]) ? results.push(left.shift()) : results.push(right.shift());
  return [...results, ...left, ...right];
};

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;
  const centerPoint = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, centerPoint)), mergeSort(arr.slice(centerPoint)));
};

module.exports = { 
  bubbleSort, 
  selectionSort, 
  merge, 
  mergeSort, 
};
