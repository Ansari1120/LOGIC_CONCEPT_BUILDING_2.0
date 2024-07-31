function memoize(func) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
const expensiveFunction = memoize((num) => {
  console.log("Computing…");
  return num * 2;
});
console.log(expensiveFunction(2)); // "Comput
console.log(expensiveFunction(2)); // 4

//Memoization improves performance by caching results of expensive function calls and returning the cached result for subsequent calls with the same arguments.
