const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns ['4', '5', '6'] for ['3', '4', '5', '6',]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
  it("returns ['two', 'three'] for ['one,' 'two', 'three']", () => {
    assert.equal(tail(["one", "two", "three"]), ["two", "three"]);
  });
});
