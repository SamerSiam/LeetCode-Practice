/** Given a sorted array of distinct integers and a target value, 
 * return the index if the target is found. If not, 
 * return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity **/
const numArr = [-1, 0, 3, 5, 9, 12, 15, 18];

function BinarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (target === nums[mid]) {
      console.log("number found", nums[mid]);
      return mid;
    } else if (target < nums[start]) {
      return start;
    } else if (target > nums[end]) {
      return end + 1;
    } else if (target > nums[mid] && target < nums[mid + 1]) {
      console.log("number will be inserted at", mid + 1);
      return mid + 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else if (target < nums[mid]) {
      end = mid - 1;
    }
  }
}

console.log(BinarySearch(numArr, -100));
