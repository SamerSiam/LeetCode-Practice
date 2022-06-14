var isPowerOfTwo = function (n) {
  if (n <= 0) {
    return false;
  }
  if (n < 1) {
    n = 1 / n;
  }
  let pow = 1;
  while (pow <= n) {
    if (pow == n) return true;
    pow *= 2;
  }
  return false;
};
