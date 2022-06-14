/**Given an integer array nums sorted in non-decreasing order, return an array of
 * the squares of each number sorted in non-decreasing order. */
const numArr = [-6, -3, -1, 2, 4, 5];

function sortSquares(arr) {
  let n = arr.length,
    left = 0,
    right = n - 1,
    result = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    // Here, Math.abs() is used to convert any negative numbers to their
    // integer equivalent... i.e. -4 becomes 4.
    if (Math.abs(arr[left]) > Math.abs(arr[right])) {
      result[i] = arr[left] ** 2;
      left++;
    } else {
      result[i] = arr[right] ** 2;
      right--;
    }
  }

  return result;
}
console.log(sortSquares(numArr));
