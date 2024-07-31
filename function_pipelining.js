const pipe =
  (...funcs) =>
  (arg) =>
    funcs.reduce((prev, fn) => fn(prev), arg);

const add = (x) => x + 1;
const multiply = (x) => x * 2;

const addThenMultiply = pipe(add, multiply);
console.log(addThenMultiply(5)); // 12

//Function pipelining allows you to apply a series of
//functions to a value in sequence, improving code readability and maintainability.

//Applying a series of functions to a value can be verbose.
