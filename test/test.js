var expect = require('chai').expect;
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
    });

    it ('should not add the same node twice', function () {
      emptyNode.addChild(secondEmptyNode);
      emptyNode.addChild(secondEmptyNode);
      expect(emptyNode.children.length).to.eql(1);
    });

    it('should throw an error if the parameter is not a node', function () {
      var err = new TypeError("Parameter is not an instance of treeNode");
      expect(function() {emptyNode.addChild('string')}).to.throw(TypeError);
    });
  });

  describe('#removeChild', function () {
    it('should remove paremeter node from children array', function () {
      emptyNode.addChild(secondEmptyNode);
      emptyNode.removeChild(secondEmptyNode);
      expect(emptyNode.children).to.eql([]);
    });

    it('should remove self from supplied node\'s "parent" property', function () {
      emptyNode.addChild(secondEmptyNode);
      emptyNode.removeChild(secondEmptyNode);
      expect(secondEmptyNode.parent).to.eql(null);
    });

    it('should return -1 if the parameter node is not a child of the node', function () {
      expect(emptyNode.removeChild(secondEmptyNode)).to.eql(-1);
    });

    it('should throw an error if the parameter is not a node', function () {
      expect(function() {emptyNode.removeChild({})}).to.throw(TypeError);
    });
  });
});
