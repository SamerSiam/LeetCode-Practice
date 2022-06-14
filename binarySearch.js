const numArr = [-1, 0, 3, 5, 9, 12, 15, 18];

function BinarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (target === nums[mid]) {
      console.log("number found", nums[mid]);
      return mid;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else if (target < nums[mid]) {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(BinarySearch(numArr, 50));
