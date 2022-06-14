const arr = [2, 5, 5, 11];
const goal = 10;

const twoSum = (nums, target) => {
  let mapOfNumbers = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (mapOfNumbers[diff] !== undefined) {
      return [mapOfNumbers[diff], i];
    }
    mapOfNumbers[nums[i]] = i;
  }
};
console.log(twoSum(arr, goal));
