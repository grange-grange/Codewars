function computerToPhone(numbers){
  const keypad = "7894561230";
  const cellPhone = "1234567890";
  let str = "";
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < keypad.length; j++) {
      if (numbers[i] === keypad[j]) {
        str += cellPhone[j];
      }
    }
  }
  return str;
}