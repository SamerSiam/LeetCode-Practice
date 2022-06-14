const nums = [5, 1, 3, 2, 11, 5, 7, 8];
function maxSum(arr, num) {
  let maxSum = 0,
    tempSum = 0;

  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }

  maxSum = tempSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSum(nums, 3));
