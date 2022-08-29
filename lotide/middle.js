
function middleEl(arr) {
  if (!arr.length)
    return;
    
  const middle = arr.length / 2;
  if (arr.length % 2 === 1) {
    return arr[Math.floor(middle)];
  } else {
    return [
      arr[middle - 1],
      arr[middle],
    ];
  }
}


console.log(middleEl([1]));
console.log(middleEl([0,1,2,3,4,5,6,7]));
console.log(middleEl([1,2,3,4,5,6]));