function palindrome(message){

  var len = message.length;

    for (var i = 0; i < len / 2; i++) {   
        if (message[i] != message[len - 1 - i]) {
            return false;
        }
    }
    
    return true;
}


palindrome('hello'); // should return false
palindrome('abcba'); // should return true

console.log(palindrome('hello'));
console.log(palindrome('abcba'));