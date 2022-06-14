var plusOne = function (digits) {
  let strDigit = "";
  let intDigit = 0;
  digits.forEach(function (d) {
    strDigit += d;
  });
  console.log(strDigit);
  intDigit = Number(strDigit);
  console.log(intDigit);
  const result = intDigit.toString().split("").map(Number);

  return result;
};

var plusOne2 = function (digits) {
  let l = digits.length - 1;

  for (let i = l; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      break;
    } else {
      digits[i] = 0;
    }
  }

  if (digits[0] == 0) {
    digits.unshift(1);
  }

  return digits;
};
const test = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
const test2 = [99];
console.log(plusOne2(test2));
