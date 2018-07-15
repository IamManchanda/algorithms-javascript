const matrix = (n) => {
  const results = [];
  for (let i = 0; i < n; i += 1) results.push([]);
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top Row
    for (let tr = startColumn; tr <= endColumn; tr += 1) {
      results[startRow][tr] = counter;
      counter += 1;
    }
    startRow += 1;
    // Right column
    for (let rc = startRow; rc <= endRow; rc += 1) {
      results[rc][endColumn] = counter;
      counter += 1;
    }
    endColumn -= 1;
    // Bottom row
    for (let br = endColumn; br >= startColumn; br -= 1) {
      results[endRow][br] = counter;
      counter += 1;
    }
    endRow -= 1;
    // Left Column
    for (let lc = endRow; lc >= startRow; lc -= 1) {
      results[lc][startColumn] = counter;
      counter += 1;
    }
    startColumn += 1;
  }
  return results;
};

module.exports = matrix;
