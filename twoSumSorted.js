numbers = [3, 4, 5, 8, 10, 12, 15];

function twoSum(arr, target) {
  let result = [];
  let first = 0;
  let second = 1;

  while (first < arr.length) {
    let lookup = target - arr[first];
    if (arr[second] === lookup) {
      result.push(first + 1, second + 1);
      break;
    } else if (arr[second] < lookup) {
      second++;
    } else if (arr[second] > lookup || second > arr.length - 1) {
      first++;
      second = first + 1;
    } else {
      return [];
    }
  }
  return result;
}

// this was a faster solution
function twoSum2(arr, target) {
  let result = [];
  let first = 0;
  let second = arr.length - 1;

  while (first < second) {
    let lookup = target - arr[first];

    if (arr[first] + arr[second] < target) {
      first++;
    } else if (arr[first] + arr[second] > target) {
      second--;
    } else {
      return [first + 1, second + 1];
    }
  }
  return [];
}

console.log(twoSum(numbers, 200));
console.log(twoSum2(numbers, 200));
