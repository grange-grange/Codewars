/*Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'*/

function solution(str){
  let newWord = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newWord += str[i];
    }  
   return newWord; 
}