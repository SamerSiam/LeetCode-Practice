var climbStairs = function (n) {
  const stairs = memoizer(slowStairs);
  return stairs(n);
};
function memoizer(fn) {
  let cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}
function slowStairs(n) {
  if (n <= 3) {
    return n;
  }

  return stairs(n - 1) + stairs(n - 2);
}

const stairs = memoizer(slowStairs);
stairs(10);
