const arr = ["h", "e", "l", "l", "o"];
const arr2 = ["a", "b", "c", "d", "e", "f"];

var reverseString = function (s) {
  let start = 0;
  let end = s.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (end > mid) {
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }
  return s;
};

console.log(reverseString(arr2));
