//Lodash
const _ = require('lodash');

const users = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'John', age: 28 }
];

// Grouping users by name
const groupedByName = _.groupBy(users, 'name');
console.log(groupedByName);
// Output:
// { John: [{ id: 1, name: 'John', age: 25 }, { id: 3, name: 'John', age: 28 }],
//   Jane: [{ id: 2, name: 'Jane', age: 30 }] }

//Shim 

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(callback, thisArg) {
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

[1, 2, 3].forEach((item) => console.log(item));  // Output: 1 2 3

//Polyfill


if (typeof Object.assign !== 'function') {
  Object.assign = function(target) {
    if (target == null) throw new TypeError('Cannot convert undefined or null to object');
    const to = Object(target);
    for (let i = 1; i < arguments.length; i++) {
      const source = arguments[i];
      if (source != null) {
        for (const key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            to[key] = source[key];
          }
        }
      }
    }
    return to;
  };
}

const obj1 = { a: 1 };
const obj2 = { b: 2 };
console.log(Object.assign(obj1, obj2));  // Output: { a: 1, b: 2 }

