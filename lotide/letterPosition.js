const letterPositions = function(word) {
  const result = {};

  for (let i = 0; i < word.length; i++) {
    if (!result[word[i]]) {
      result[word[i]] = [];
    }
    result[word[i]].push(i);
  }
  return result;
};

console.log(letterPositions('lighthouse').h);