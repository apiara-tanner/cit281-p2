/*
CIT 281 Project 2
Name: Tanner Gill
*/
// Returns a random number between min (inclusive) and max (exclusive)

function getRandomInteger(min, max) {
return Math.floor(Math.random() * (max - min) + min);
}
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";
for (let i = 0; i < getRandomInteger(5, 26); i++) {
result += getRandomLetter();
}
console.log(result);

//Calls gets a random number and then calls that number with array
function getRandomLetter(){
    randNum = getRandomInteger(1,alphabet.length-1)
    result = alphabet[randNum];
  return result;
}
console.log(getRandomLetter());

function getRandomString(minLength, maxLength){
  for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) {
    result += getRandomLetter();
  }
  return result;
}
console.log(getRandomString(10, 20));

function getSortedString(string) {
  return result = string.split("").sort().join("");
}

console.log(getSortedString("xpacd"));
