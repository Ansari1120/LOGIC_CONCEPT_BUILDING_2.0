function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
  };
}
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1

//Exposing internal details of a function can lead to misuse.

//Closures allow you to encapsulate internal details and expose only the necessary
//functionality, improving code security and maintainability.
