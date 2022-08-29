


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

//assertArraysEquals


console.log(eqArrays([1], [2]));
//eqArrays

const eqObjects = (object1, object2) => {
  //assign and compare keys
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) return false;
  for (let key of keys1) {
    //compare if is array, pass to eqArrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
    } else if (object1[key] !== object2[key]) return false;
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};