
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

function findKeyByValue(obj, str) {
  for (let key in obj) {
    if (obj[key] == str) {
      console.log(key)
      return key
    }
  }
  console.log("Key not found..")
}




findKeyByValue(bestTVShowsByGenre, "The Wire")
findKeyByValue(bestTVShowsByGenre, "That '70s Show")