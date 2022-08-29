const assertEqual = require("./assertEqual");

// FUNCTION IMPLEMENTATION // Example from the Compass
/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};*/

let emoji = String.fromCodePoint(0x1f621);

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: [actual] === [expected]");
  } else {
    console.log(`${emoji}"Assertion Failed: [actual] !== [expected]"`);
  }
};

const head = function (arr) {
  return arr[0];
};

head([5, 6, 7], 5);
head(["Hello", "Lighthouse", "Labs"], "Hello");

module.exports = head;
