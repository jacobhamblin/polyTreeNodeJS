function treeNode(options) {
  options = options || {};

  this.parent = options.parent || null;
  this.children = options.children || [];
  this.value = options.value || null;

  this.addChild = function (node) {
    if (
      node.hasOwnProperty('parent') &&
      node.hasOwnProperty('children') &&
      node.hasOwnProperty('value')
    ) {
      node.parent = this;
      this.children.push(node);
    } else {
      throw new TypeError("parameter is not an instance of treeNode");
    }
  };
}

module.exports = treeNode;
