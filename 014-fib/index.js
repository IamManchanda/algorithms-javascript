// Solution 1 - Iterative & Linear => O(n)
const fib1 = (n) => {
  const result = [0, 1];
  for (let i = 2; i <= n; i += 1) {
    const a = result[result.length - 1];
    const b = result[result.length - 2];
    result.push(a + b);
  }
  return result[result.length - 1];
};

// Solution 2 - Recursive & Exponential => O(2 ** n)
const fib2 = (n) => {
  if (n < 2) return n;
  return fib2(n - 1) + fib2(n - 2);
};

// Solution 3 - Memoization/Recursive  & Linear => O(n)
const memoize = (fn) => { // Utility Memoize Function
  const cache = {};
  return (...args) => {
    if (cache[args]) { return cache[args]; }
    cache[args] = fn.apply(this, args);
    return cache[args];
  };
};

let fib3 = (n) => {
  if (n < 2) return n;
  return fib3(n - 1) + fib3(n - 2);
};
fib3 = memoize(fib3);

const fib = fib3;
module.exports = fib;
