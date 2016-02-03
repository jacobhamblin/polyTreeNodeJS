function treeNode(options) {
  options = options || {};

  this.parent = options.parent || null;
  this.children = options.children || [];
  this.value = options.value || null;

  this.addChild = function (node) {
    return this.manipChild('add', node);
  };

  this.removeChild = function (node) {
    return this.manipChild('remove', node);
  };

  this.manipChild = function (action, node) {
    if (!(node instanceof treeNode)) {
      throw new TypeError("Parameter is not an instance of treeNode");
    }

    var present = false;
    var index = -1;

    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i];
      if (child === node) {
        present = true;
        index = i;
      }
    }

    switch(action) {
      case 'add':
        if (present === false) {
          node.parent = this;
          this.children.push(node);
        }
        break;
      case 'remove':
        if (present === true) {
          node.parent = null;
          this.children.splice(index, 1);
        } else {
          return index;
        }
        break;
    }
  };
}

module.exports = treeNode;
