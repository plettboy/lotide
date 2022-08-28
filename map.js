//will be implemented into assert equals

const map = function(array, callback) {
    const results = [];
    for (let item of array) {
     results.push(callback(item));
    }
    return results;
  }
//test case
  const words = ["ground", "control", "to", "major", "tom"];
