function treeNode(options) {
  options = options || {};

  this.parent = options.parent || null;
  this.children = options.children || [];
  this.value = options.value || null;

  this.addChild = function (node) {
    if (node instanceof treeNode) {
      var present = false;
      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        if (child === node) present = true;
      }
      if (present === false) {
        node.parent = this;
        this.children.push(node);
      }
    } else {
      throw new TypeError("Parameter is not an instance of treeNode");
    }
  };


}

module.exports = treeNode;
