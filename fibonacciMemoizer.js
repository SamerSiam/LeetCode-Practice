var fib = function (n) {
  if (n < 2) {
    return n;
  }

  return result(n - 1) + result(n - 2);
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

const result = memoizer(fib);
