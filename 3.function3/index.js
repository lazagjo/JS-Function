function alphabetSort(message){
  var alphabet = message.split("");
  var sorted ="";

  alphabet.sort();

  for(var i=0; i<alphabet.length;i++)
  {
    sorted += alphabet[i];
  }

  return sorted;
}

alphabetSort('hello'); // should return 'ehllo'

console.log(alphabetSort('hello'));