var combine = function (n, k) {
  let set = [],
    comb = [];

  //populate the original set

  for (let i = 1; i <= n; i++) {
    set.push(i);
  }

  let p1 = 0,
    p2 = k - p1;
  for (let i = 0; i <= n; i++) {
    comb.push(set.slice(p1, p2));
    p1++;
    p2++;
  }
  return comb;
};

console.log(combine(4, 2));
