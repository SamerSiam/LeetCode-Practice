const numArr = [1, 0, 3, 5, 0, 6, 7];

function moveZeros(arr) {
  arr.sort(function (a, b) {
    if (a === 0 && b !== 0) {
      return 1;
    } else if (b === 0 && a !== 0) {
      return -1;
    } else return 0;
  });
  return arr;
}

console.log(moveZeros(numArr));
