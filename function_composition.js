const compose =
  (...funcs) =>
  (arg) =>
    funcs.reduceRight((prev, fn) => fn(prev), arg);
const add = (x) => x + 1;
const multiply = (x) => x * 2;
const addThenMultiply = compose(multiply, add);
console.log(addThenMultiply(5)); // 12

//Function composition allows you to create a new function by combining
//multiple functions, making your code more modular and reusable.

//Combining multiple functions into a single operation can be cumbersome.
