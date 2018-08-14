// Solution

const validate = (node, min = null, max = null) => {
  if (max !== null && node.data > max) return false;
  if (min !== null && node.data < min) return false;
  if (node.left && !validate(node.left, min, node.data)) return false;
  if (node.right && !validate(node.right, node.data, max)) return false;
  return true;
};

module.exports = validate;
