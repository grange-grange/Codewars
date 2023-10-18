/*Given three arrays of integers, return the sum of elements that are common in all three arrays.

For example:

common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
More examples in the test cases.

Good luck!*/

function common(a,b,c){
  a.sort((x, y) => x - y)
  b.sort((x, y) => x - y)
  c.sort((x, y) => x - y)
  
  let bCurrentIndex = 0
  let cCurrentIndex = 0
  
  return a.reduce((acc, x) => {
    let bI = b.indexOf(x, bCurrentIndex)
    if (bI > - 1) {
      let cI = c.indexOf(x, cCurrentIndex)
      if (cI > -1) {
        bCurrentIndex = bI + 1    
        cCurrentIndex = cI + 1
        return acc + x
      } 
    }
    return acc
  }, 0)
}