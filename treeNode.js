function treeNode(parent, children, value) {
  this.parent = parent || null;
  this.children = children || [];
  this.value = value || null;
}

module.exports = treeNode;
