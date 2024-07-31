//for...in: Loops through the properties of an object.
const obj = { a: 1, b: 2 };
for (const key in obj) console.log("for in", key);

//for...of: Iterates over iterable objects (like arrays, strings, etc.), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
for (const value of [1, 2, 3, 4, 5]) console.log("for of", value);

//do...while: Loops through a block of code once, and then repeats the loop as long as a specified condition is true.
let i = 0;
do {
  console.log("do while", i++);
} while (i < 5);

//while: Loops through a block of code as long as a specified condition is true.
let i1 = 0;
while (i1 < 5) console.log("while", i1++);

//for: Loops through a block of code a specified number of times.
for (let i = 0; i < 5; i++) console.log("for loop", i);

// Array.prototype.forEach: Executes a provided function once for each array element.
[1, 2, 3, 4, 5].forEach((num) => console.log("for each", num));

//Array.prototype.map: Creates a new array with the results of calling a provided function on every element in the calling array.
console.log(
  "js map loop (iteration)",
  [1, 2, 3, 4, 5].map((num) => num * 2)
); // [2, 4, 6, 8, 10])
// Array.prototype.filter: Creates a new array with all elements that pass the test implemented by the provided function.
console.log(
  "js filter loop (iteration)",
  [1, 2, 3, 4, 5].filter((num) => num % 2 === 0)
); // [2, 4]

//Array.prototype.reduce: Executes a reducer function on each element of the array, resulting in a single output value.
console.log(
  "js reduce loop (iteration)",
  [1, 2, 3, 4, 5].reduce((acc, num) => acc + num, 0)
);

//Array.prototype.some: Tests whether at least one element in the array passes the test implemented by the provided function.
console.log(
  "js some loop (iteration)",
  [1, 2, 3, 4, 5].some((num) => num > 3) // true
);

//Array.prototype.every: Tests whether all elements in the array pass the test implemented by the provided function.
console.log(
  "js every loop (iteration)",
  [1, 2, 3, 4, 5].every((num) => num > 0) // true
);

//Array.prototype.find: Returns the value of the first element in the array that satisfies the provided testing function.
console.log(
  "js find loop (iteration)",
  [1, 2, 3, 4, 5].find((num) => num > 3) // 4
);

//Array.prototype.findIndex: Returns the index of the first element in the array that satisfies the provided testing function.
console.log(
  "js findindex loop (iteration)",
  [1, 2, 3, 4, 5].findIndex((num) => num > 3) // 3
);
