
let emoji = String.fromCodePoint(0x1F621);

const eqArrays = function(arr1, arr2) {
  return arr1.toString() === arr2.toString();
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`${emoji}Assertion passed!`);
  } else {
    console.log(`${emoji}Assertion failed!`);
  }
};

assertArraysEqual([1], [1]);
assertArraysEqual(['hi'], ['hi']);
