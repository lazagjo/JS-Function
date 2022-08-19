function reverseString(message){
  return (message === '') ? '' : reverseString(message.substr(1)) + message.charAt(0);
}

reverseString('hello');
console.log(reverseString('hello'));