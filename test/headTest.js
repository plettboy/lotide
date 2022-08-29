const assertEqual = require("../assertEqual");

const head = function (parameter) {
  let firstValue = parameter[0];
  return firstValue;
};

module.exports = head;
