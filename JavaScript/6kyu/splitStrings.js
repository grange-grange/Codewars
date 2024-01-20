/*Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']*/


function solution(str){
   let arr = []
   for (let i = 0; i < str.length; i += 2) {
     let a = str[i]
     let b = str[i + 1] || '_'
     arr.push(a + b)
   }
  return arr
}