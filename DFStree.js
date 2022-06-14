class Tree {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function traverseDF(root) {
  const arr = [root];
  while (arr.length) {
    const node = arr.shift();

    arr.unshift(...node.left);
    console.log(node);
    //   fn(node);
  }
}
traverseDF([3, 9, 20, null, null, 15, 7]);
