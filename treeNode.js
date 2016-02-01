function treeNode(options) {
  if (options) {
    this.parent = options.parent || null;
    this.children = options.children || [];
    this.value = options.value || null;
  } else {
    this.parent = null;
    this.children = [];
    this.value = null;
  }

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
