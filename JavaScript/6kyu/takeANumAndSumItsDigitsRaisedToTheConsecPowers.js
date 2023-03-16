/*
*/

function sumDigPow(a, b) {
  let arr = [];
  
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
    
  return arr.filter((a) => {
    let str = String(a);
    let sum = 0;
    for (let i = 1; i <= str.length; i++) {
      sum += str[i - 1] ** i;
    }
    return a == sum;
  });
}
