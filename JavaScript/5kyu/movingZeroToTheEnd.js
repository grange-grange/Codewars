/*Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]*/

function moveZeros(arr) {
  const arrInitLength = arr.length
  let newArr = arr.filter(x => x !== 0)
  const arrFilteredLength = newArr.length
  let zeroToAdd = arrInitLength - arrFilteredLength
  for (let i = 0; i < zeroToAdd; i++) {
    newArr.push(0)
  }
  return newArr
}