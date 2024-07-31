function sorting(arr) {
  if (!Array.isArray(arr)) return "not an array";
  let swapped;
  let n = arr.length;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      let ind = i + 1;
      if (arr[i] > arr[ind]) {
        let temp = arr[i];
        arr[i] = arr[ind];
        arr[ind] = temp;
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  return arr;
}
