export function encrypt(message: string, key: number): string {
  const regex = /^[a-zA-Z0-9 ]*$/
  if (!regex.test(message)) {
    return 'Message should contain only letters, numbers and spaces'
  }
  return message
    .split('')
    .map((char) => {
      const charCode : number = char.charCodeAt(0);
      if(charCode === 32) {
        return char;
      }
      if(charCode >= 48 && charCode <= 57) {
        return String.fromCharCode(((charCode - 48 + key) % 10) + 48);
      }
      const newCharCode : number = charCode + (key % 26);

      if(newCharCode > 122 || newCharCode < 97 && newCharCode > 90) {
        return String.fromCharCode(newCharCode - 26);
      }
      return String.fromCharCode(newCharCode);
    })
    .join('');
}
