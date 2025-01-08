//By using polyfills effectively, 
//full-stack developers can ensure
//their web applications are 
//accessible and functional across 
//a wide range of browsers, 
//providing a consistent and modern 
//user experience

if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
    'use strict';
    var o = Object(this);
    if (o == null) {
      throw new TypeError('Array.prototype.includes called on null or undefined');
    }

    var len = o.length >>> 0;
    if (len === 0) {
      return false;
    }

    var n = arguments.length > 1 ? Number(arguments[1]) || 0 : 0;
    var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    function sameValueZero(x, y) {
      return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
    }

    while (k < len) {
      if (sameValueZero(o[k], searchElement)) {
        return true;
      }
      k++;
    }
    return false;
  };
}

// Example usage:
const array = [1, 2, 3];

console.log(array.includes(2)); // Output: true
console.log(array.includes(4)); // Output: false
