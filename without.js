
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


const without = (arr1, removeThese) => {
  let result = [];
  for (let el of arr1) {
    let removed = false;
    for (let removalItem of removeThese) {
      (el = removalItem) && (removed = true);
    }
    (removed === false) && (result.push(el));
  }
  console.log(result);
};

assertArraysEqual(without([3, 3, 3], [3]), [3, 2]);


