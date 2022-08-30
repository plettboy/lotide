const assertEqual = require("./assertEqual");

let emoji = String.fromCodePoint(0x1f621);

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: [actual] === [expected]");
  } else {
    console.log(`${emoji}"Assertion Failed: [actual] !== [expected]"`);
  }
};

const tail = function (tail) {
  console.log(tail.slice(1));
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, "1");

module.exports = tail;
