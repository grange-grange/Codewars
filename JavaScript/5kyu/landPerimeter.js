function landPerimeter(arr) {
  let width = arr[0].length + 1;
  let str = arr.join('-');
  let perimeter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'X') {
      let xSum = String(str[i - 1] + str[i + 1] + str[i + width] + str[i - width]).match(/X/g);
      if (/X/.test(xSum)) {
        xSum = xSum.join('');
        switch (xSum) {
            case 'XXX':
              perimeter += 1;
              break;
            case 'XX':
              perimeter += 2;
              break;
            case 'X':
              perimeter += 3;
              break;          
        }
      } else {
        perimeter += 4;
      }  
    }
  }
  return 'Total land perimeter: ' + perimeter;
}