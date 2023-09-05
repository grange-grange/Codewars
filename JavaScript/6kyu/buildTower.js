/*Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]*/

function towerBuilder(nFloors) {
  let result = ['*'.repeat(nFloors * 2 - 1)]
  for (let i = 1; i < nFloors; i++) {
    let newRow = result[result.length - 1].split('')
    newRow.splice(0, i, ' '.repeat(i))
    newRow.splice(-i, i, ' '.repeat(i))
    result.unshift(newRow.join(''))
  }
  return result
}