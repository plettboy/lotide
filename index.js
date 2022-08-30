const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const assertArraysEqual = require("./assertArraysEqual");
const countOnly = require("./countOnly");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const countLetters = require("./countLetters");
const takeUntil = require("./takeUntil");
const eqObjects = require("./eqObjects");
const letterPositions = require("./letterPositions");
const map = require("./map");
const assertEqual = require("./assertEqual");
const assertObjectsEqual = require("./assertObjectsEqual");
const eqArrays = require("./eqArrays");
const without = require("./without");
const flatten = require("./flatten");

module.exports = {
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  tail,
  head,
  countLetters,
  countOnly,
  findKeyByValue,
  flatten,
  letterPositions,
  takeUntil,
  eqObjects,
  eqArrays,
  middle,
  map,
  findKey,
  without,
};
