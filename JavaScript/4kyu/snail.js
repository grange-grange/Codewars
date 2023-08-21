/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
*/

snail = function(array) {
  let newArr = []
  let i = 0
  while (array.length > 0) {
    newArr.push(...array.splice(0, 1)[0])
    
    for (let i = 0; i < array.length - 1; i++) {
      newArr.push(array[i].splice(array[i].length - 1, 1)[0])
    }
    
    if (array.length === 0) return newArr

    newArr.push(...array.splice(array.length - 1, 1)[0].reverse())
    
    for (let i = array.length - 1; i > 0; i--) {
      newArr.push(array[i].splice(0, 1)[0])
    }
  }
  return newArr
}