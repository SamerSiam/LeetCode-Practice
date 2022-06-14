function singleNumber(nums) {
  let mapNumbers = {};

  for (let i = 0; i < nums.length; i++) {
    if (!mapNumbers[nums[i]]) {
      mapNumbers[nums[i]] = 1;
    } else {
      mapNumbers[nums[i]]++;
    }
  }
  console.log(mapNumbers);

  for (let num in mapNumbers) {
    if (mapNumbers[num] === 1) {
      return num;
    }
  }
  return -1;
}
let arr = [1, 1, 1, 2, 2, 3, 3, 5];
console.log(singleNumber(arr));
