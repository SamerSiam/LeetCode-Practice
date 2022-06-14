var isHappy = function (n) {
  let sum = 0;
  let numArr = n.toString().split("");

  for (let i = 0; i < numArr.length; i++) {
    sum += Number(Math.pow(numArr[i], 2));
    console.log(sum);
  }

  return sum;
};

console.log(isHappy(19));
