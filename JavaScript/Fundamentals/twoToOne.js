/*Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"*/

function longest(s1, s2) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let newString = '';
  let s = s1 + s2;
  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[j] === alphabet[i] && s[j] !== newString[newString.length - 1]) {
        newString += s[j];
      }
    }
  }
  return newString;
}