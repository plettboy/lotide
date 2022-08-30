const chai = require("chai");
const eqArrays = require('../eqArrays');
const assert = chai.assert;

describe('#eqArrays', function() {
  it("should return passed if the arrays are identical") {
    assert.strictEqual(eqArrays([1,2,3], [1,2,3]), true);
  }
});
describe('#eqArrays', function() {
  it("should return failed if the arrays are not identical") {
    assert.strictEqual(eqArrays([2,2,3], [1,2,3]), false);
  }
});