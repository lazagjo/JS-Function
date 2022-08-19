function countWords(message){
  var messageArr = message.split(" ");

  return messageArr.length;
}
countWords('Good morning, I love JavaScript.'); // should return 5

console.log(countWords('Good morning, I love JavaScript.'));