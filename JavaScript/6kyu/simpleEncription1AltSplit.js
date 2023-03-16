/*Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.*/

function encrypt(text, n) {
  if (text === '' || text === null || n < 1) {
    return text;
  }
  let result = text;
  for (let j = 0; j < n; j++) {
    let str = '';
    for (let i = 1; i < text.length; i += 2) {
      str = str.concat(result[i]);
    }

    for (let i = 0; i < text.length; i += 2) {
      str = str.concat(result[i]);
    }
    result = str;
  }
  
  return result;
}


function decrypt(encryptedText, n) {
  if (encryptedText === '' || encryptedText === null || n < 1) {
    return encryptedText;
  }
  
  let start = Math.floor(encryptedText.length / 2);
    
  let result = encryptedText;
  for (let j = 0; j < n; j++) {
    let str = '';
    for (let i = start; i < encryptedText.length; i++) {
      str = str.concat(result[i], result[i - start]);
    }
    result = str;
  }
  
  if (start < encryptedText.length / 2) {
    result = result.slice(0, -1);
  }
    
  return result;
}