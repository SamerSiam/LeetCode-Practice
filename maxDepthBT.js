function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  if (leftDepth > rightDepth) return leftDepth + 1;
  else return rightDepth + 1;
};
let root = new TreeNode(3, 9, 20);

console.log(maxDepth(root));
