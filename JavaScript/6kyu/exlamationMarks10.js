/* Description:
Remove the minimum number of exclamation marks from the start/end of each word in the sentence to make their amount equal on both sides.

Notes:
Words are separated with spaces
Each word will include at least 1 letter
There will be no exclamation marks in the middle of a word
Examples
remove("Hi!") === "Hi"
remove("!Hi! Hi!") === "!Hi! Hi"
remove("!!Hi! !Hi!!") === "!Hi! !Hi!"
remove("!!!!Hi!! !!!!Hi !Hi!!!") === "!!Hi!! Hi !Hi!"*/

function remove(s) {
  s = s.split(' ');
  
  for (let i = 0; i < s.length; i++) {
    let front = 0;
    let back = 0;
    for (let j = 0; s[i][j] === '!'; j++) {
      front++;
    }
    for (let j = s[i].length - 1; s[i][j] === '!'; j--) {
      back++;
    }
    if (front - back > 0) {
      s[i] = s[i].slice(front - back);
    } else if (front - back < 0) {
      s[i] = s[i].slice(0, front - back);
    }
  }
  
  return s.join(' ');
}