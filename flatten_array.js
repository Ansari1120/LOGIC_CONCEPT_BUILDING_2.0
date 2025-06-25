function flattenArray(arr) {
 let result = [];
  for (const element of arr) {
   if (Array.isArray(element)) {
       result = result.concat(flattenArray(element));
    } else {
      result.push(element);
    }   }
   return result;
}

 const nestedArray = [1, [2, [3, 4]], 5];/ const flattenedArray = flattenArray(nestedArray);
 console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]
