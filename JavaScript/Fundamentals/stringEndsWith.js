/*Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false*/

//#1
function solution(str, ending) {
  let isTrue = 0;
  for (let i = 0; i < ending.length; i++) {
    ending[i] === str[str.length - ending.length + i] ? isTrue++ : isTrue;
  }
  return isTrue === ending.length ? true : false;
}
//#2
function solution(str, ending){
  return str.endsWith(ending);
}