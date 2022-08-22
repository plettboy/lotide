
let emoji = String.fromCodePoint(0x1F621);

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: [actual] === [expected]");
  } else {
    console.log(`${emoji}"Assertion Failed: [actual] !== [expected]"`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, '1');
