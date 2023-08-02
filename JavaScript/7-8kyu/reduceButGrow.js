/*Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24*/

function grow(x){
  return x.reduce((a, b) => a * b)
}

function twoSum(numbers, target) {
    let res = []
    cicle: for (let i = 0; i < numbers.length; i++) {
      numbers.slice(i + 1)
      .forEach((x, ind) => {
        if (x + numbers[i] === target) {
          res = [i, ind]
          break cicle
        }
      })
    }
    return res  
  }