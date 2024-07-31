function successive(arr) {
  let even_length = arr.length / 2;
  let successiveVal = 0;

  if (!Array.isArray(arr)) {
    return "please input array in right format";
  }
  if (arr.length % 2 !== 0) {
    return "please provide input of even length";
  }

  for (let i = even_length - 1; i >= 0; i--) {
    //index 1 = 4
    let j = arr.length - 1 - i;
    //4-1 = 3 - 1 = 2 = 7
    console.log(arr[i], "+", arr[j]);
    successiveVal += arr[i] + arr[j];
  }

  return successiveVal;
}
const input1 = [1, 4, 7, 8];
console.log(successive(input1)); // Output: 20
