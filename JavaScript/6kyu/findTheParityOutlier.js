/*You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)*/

// #1
function findOutlier(integers){
  const checkSum = Math.abs(integers[0] % 2) + Math.abs(integers[1] % 2) + Math.abs(integers[2] % 2)
  const length = integers.length
  
  const findOdd = (arr) => {
    for (let i = 0; i < length; i++) {
      if (arr[i] % 2 === 1 || arr[i] % 2 === -1) return arr[i]
    }
  }
  const findEven = (arr) => {
    for (let i = 0; i < length; i++) {
      if (arr[i] % 2 === 0) return arr[i]
    }
  }
  
  return checkSum > 1 ? findEven(integers) : findOdd(integers)
}

//#2 with Array.find
function findOutlier(integers){
  const checkSum = Math.abs(integers[0]) % 2 + Math.abs(integers[1]) % 2 + Math.abs(integers[2]) % 2
    
  const isOdd = (int) => {
    return Math.abs(int) % 2 === 1
  }
  const isEven = (int) => {
    return int % 2 === 0
  }
  
  return checkSum > 1 ? integers.find(isEven) : integers.find(isOdd)
}