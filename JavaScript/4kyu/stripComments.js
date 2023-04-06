/*Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"*/

function solution(input, markers) {
  let arr = input.split('');
  let output = '';
  let tmblr = true;
  arr.forEach(el => {
    if (el === markers[0] || el === markers[1]) {
      tmblr = false
      output = output.slice(0, -1)
    }
    if (el === '\n' ) tmblr = true
    if (tmblr) output += el      
  })
  
  return output.trim();
};