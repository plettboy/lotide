//generate a dice array that goes between 1-6
//genereate multiple dice
//list them 

let diceRoll = function(diceNum) {
  for (let i = 0; i <= parseInt(diceNum); i++); {
    let newArr = diceNum[i];
    return newArr.map(Math.floor(Math.random() * 6) + 1);
  }

};

