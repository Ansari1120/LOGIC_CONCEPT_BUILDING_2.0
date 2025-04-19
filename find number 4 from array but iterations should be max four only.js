const arr = [1, 3, 9, 6, 2, 3, 4, 1, 1, 1, 2, 4, 1, 1, 1, 1, 8, 1];
function finder(value, array) {
  let index = 0;
  const chunkSize = 4;

  while (index < array.length) {
    for (let i = 0; i < chunkSize && index + i < array.length; i++) {
      if (array[index + i] === value) {
        console.log("Item", value, "found at index", index + i);
        return;
      }
    }
    index += chunkSize;
  }

  console.log("Item", value, "not found");
}

finder(4, arr);
