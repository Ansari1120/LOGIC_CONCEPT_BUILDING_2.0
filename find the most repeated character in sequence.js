const arr = [1, 3, 9, 6, 2, 3, 4, 1, 1, 1, 2, 4, 1, 1, 1, 1, 8, 1];
let isRepeat = 1;
let maxcount = 1;
let mostRepeat = arr[0];

function repeater() {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      isRepeat++;
      if (isRepeat > maxcount) {
        console.log(isRepeat, maxcount);

        maxcount = isRepeat;
        mostRepeat = arr[i];
      }
    } else {
      isRepeat = 1;
    }
  }
}
repeater();
console.log(
  "most repeated number in sequence",
  mostRepeat,
  "number of times repeated",
  maxcount
);
