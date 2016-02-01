var expect = require('expect.js');
var treeNode = require('../treeNode.js');

describe('treeNode', function () {
  before('provide two empty nodes', function() {
    emptyNode = new treeNode();
    secondEmptyNode = new treeNode();
  });

  beforeEach('ensure our empty nodes are empty nodes', function() {
    emptyNode = new treeNode();
    secondEmptyNode = new treeNode();
  });

  describe('value', function() {
    it('should return null if no value is supplied in construction', function () {
      expect(new treeNode().value).to.eql(null);
    });

    it('should return the value supplied in construction', function () {
      expect(new treeNode({value: 5}).value).to.eql(5);
    });
  });

  describe('parent', function() {
    it('should return null if no parent is supplied in construction', function () {
      expect(new treeNode().parent).to.eql(null);
    });

    it('should return the parent supplied in construction', function () {
      expect(new treeNode({parent: emptyNode}).parent).to.eql(emptyNode);
    });
  });

  describe('#addChild', function() {
    it('should add the node to its children', function () {
      emptyNode.addChild(secondEmptyNode);
      expect(emptyNode.children[0]).to.eql(secondEmptyNode);
    });

    it('should become the output of the node\'s property \'parent\'', function () {
      emptyNode.addChild(secondEmptyNode);
      expect(secondEmptyNode.parent).to.eql(emptyNode);
    })
  });
});
