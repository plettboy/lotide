

const eqArrays = function(arr1, arr2) {
  return arr1.toString() === arr2.toString();
};


console.log(eqArrays([1], [2]));

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



const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

