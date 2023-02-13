/*Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.*/

function encode(string) {
  let encodedStr = '';
  for (let i = 0; i < string.length; i++) {
    switch(string[i]) {
        case 'a':
          encodedStr += 1;
          break;
        case 'e':
          encodedStr += 2;
          break;
        case 'i':
          encodedStr += 3;
          break;
        case 'o':
          encodedStr += 4;
          break;
        case 'u':
          encodedStr += 5;
          break;
        default:
          encodedStr += string[i];
    }
  }
  return encodedStr;
}

function decode(string) {
  let decodedStr = '';
  for (let i = 0; i < string.length; i++) {
    switch(string[i]) {
        case '1':
          decodedStr += 'a';
          break;
        case '2':
          decodedStr += 'e';
          break;
        case '3':
          decodedStr += 'i';
          break;
        case '4':
          decodedStr += 'o';
          break;
        case '5':
          decodedStr += 'u';
          break;
        default:
          decodedStr += string[i];
    }
  }
  return decodedStr;
}