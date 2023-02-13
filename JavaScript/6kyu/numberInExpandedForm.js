/*Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!*/

function expandedForm(num) {
  let newNum = String(num);
  let str = '';
  
  
  for (let i = 0; i < newNum.length; i++) {
    if (newNum[i] !== '0') {
      if (i !== 0) {
        str += ' + ' + String(newNum[i]);        
      } else {
        str += String(newNum[i]);
      }
      for (let j = 0; j < newNum.length - i - 1; j++) {
        str += '0';
      }
    }      
  }         
  
  return str;
  
}