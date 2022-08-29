
function countLetters(word) {
  const count = {};

  for (let letter of word) {

    if (count[letter]) {
      count[letter] += 1;
    } else {
      count[letter] = 1;
    }
  }

  return count;
}



console.log(countLetters("lighthouse in the house"));