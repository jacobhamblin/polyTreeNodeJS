var expect = require('expect.js');
var treeNode = require('../treeNode.js');

describe('treeNode', function () {
  describe('value', function() {
    it('should return null if no value is supplied in construction', function () {
      expect(new treeNode().value).to.eql(null);
    });
  });

  describe('')
});
