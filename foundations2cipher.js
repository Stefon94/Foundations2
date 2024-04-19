//foundations2
const alphabet = "abcdefghijklmnopqrstuvwxyz";
function encrypt(message, shiftValue) {
  let encryptedMessage = '';
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    if (alphabet.includes(char.toLowerCase())) {
      let isUpperCase = char === char.toUpperCase();
      let shiftedIndex = (alphabet.indexOf(char.toLowerCase()) + shiftValue) % alphabet.length;
      let shiftedChar = alphabet[shiftedIndex];
      encryptedMessage += isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
    } else {
      encryptedMessage += char;
    }

  }
  return encryptedMessage;
}
let secretMessage = "Hello Brutus, meet me at the high gardens.";
let shiftValue = 38;
let encryptedMessage = encrypt(secretMessage, shiftValue);
console.log (encryptedMessage);
function decrypt(encryptedMessage, shiftValue) {
  let decryptedMessage = '';
  for (let i = 0; i < encryptedMessage.length; i++) {
    let char = encryptedMessage[i];
    if (alphabet.includes(char.toLowerCase())) {

      let isUpperCase = char === char.toUpperCase();
      let shiftedIndex = (alphabet.indexOf(char.toLowerCase()) - shiftValue + alphabet.length) % alphabet.length;

      let shiftedChar = alphabet[shiftedIndex];
       
      if (shiftedChar){
      decryptedMessage += isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;}
    } else {
      decryptedMessage += char;
    }
  }
  return decryptedMessage;
}
let decryptedMessage = decrypt (encryptedMessage, shiftValue);
console.log(decryptedMessage);