/*Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/

function numberOfPairs(gloves) {
  let pairs = 0;
  let arr = [...gloves];
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] !== '') {
      for (let j = 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && i !== j) {
          pairs++;
          arr.splice(i, 1, '');
          arr.splice(j, 1, '');
          break;
        }
      }
    }
  }
  
  return pairs;
}