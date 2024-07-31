function dup_remove(arr) {
  if (!Array.isArray(arr)) {
    return "please input array in right format";
  }
  return arr.filter((val, index) => arr.indexOf(val) === index);
}

const input = [1, 2, 5, 2, 5, 6, 7, 3, 5, 6, 2];
console.log(dup_remove(input)); // Output: [1, 2, 5, 6, 7, 3]
