/*
CIT 281 Project 2
Name: Tanner Gill
*/

// Returns a random number between min (inclusive) and max (exclusive)
const randInt = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

//Calls gets a random number and then calls that number with array,
const randLetter = function(){
  randNum = randInt(1,alphabet.length-1)
  result = alphabet[randNum];
return result;
}
console.log(randLetter());

for (let i = 0; i < randInt(5, 26); i++) {
  result += randLetter();
}
console.log(result);

//Creates string of given max and min values
const randString = function(minLength, maxLength){
  for (let i = 0; i < randInt(minLength, maxLength); i++) {
    result += randLetter();
  }
  return result;
}
console.log(randString(10, 20));

//alphabatizes given string
const sortedString = function(string) {
  return result = string.split("").sort().join("");
}

console.log(sortedString("xpacd"));
