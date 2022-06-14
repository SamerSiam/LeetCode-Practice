const numArr = [1, 2, 3, 4, 5, 6, 7];

const arr2 = [1, 2, 3];

function reverseArray(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

/* Function to right rotate arr[]
of size n by d */
function rightRotate(arr, d) {
  const n = arr.length;

  d %= n;
  arr = reverseArray(arr, 0, n - 1);
  console.log(arr);
  arr = reverseArray(arr, 0, d - 1);
  console.log(arr);
  arr = reverseArray(arr, d, n - 1);
  return arr;
}
console.log(rightRotate(arr2, 5));

function arrRotate2(arr, k) {
  for (let i = 1; i <= k; i++) {
    let temp = arr.pop();
    arr.unshift(temp);
  }
  return arr;
}
// console.log(arrRotate2(arr2, 10));
