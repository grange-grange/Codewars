/*Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000*/

function solution (roman) {
  let arr = [];
  let decoded = 0;
  for (i = 0; i < roman.length; i++) {
    switch(roman[i]) {
        case 'I':
          arr.push(1);
          break;
        case 'V':
          arr.push(5);
          break;
        case 'X':
          arr.push(10);
          break;
        case 'L':
          arr.push(50);
          break;
        case 'C':
          arr.push(100);
          break;
        case 'D':
          arr.push(500);
          break;
        case 'M':
          arr.push(1000);
          break;        
    }
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      arr[i] *= -1;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    decoded += arr[i];
  }
  return decoded;
}