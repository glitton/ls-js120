/*
P: Given a string of alphabetic characters, return a string where each character is replaced with the letter that is a certain number of positions away in the alphabet. If the shift takes you past the end of the alphabet, continue counting from the start.
input: string and int
output: new string
rules:
- shift all letters in the input string by the input integer
- if the shift is past the end of the alphabet (letter z), start again from letter a
- keep case as is

E: 
"Hello", 3 => shift each letter by 3, Khoor 

D: string, maybe an array to store the letters

A:
Initialize an alphabet constant, assign to the alphabet as a string
Iterate over the input string
- Get the new index of the new letter
  - get index of the currLetter from the ALPHABET constant and add the shift number to it
    - if index of currLetter is 25
    - make sure to keep the case of the currLetter 
      - if indexOf(letter) is -1 then it is uppercase
        - convert it to lower case to get the index, get the new letter by adding the shift number
        - append the new letter as upper case
      - if indexOf is not -1, get the new letter by adding the shift number
        - append the new letter as lower case  
Return shiftLetters as a string  

EDGE case for wrap around:


*/

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

function shiftLetters(str, shiftNumber) {
  return str
    .split("")
    .map((letter) => {
      let index = ALPHABET.indexOf(letter);
      if (index !== -1) {
        let newIndex = (index + shiftNumber) % ALPHABET.length;
        let newLetter = ALPHABET[newIndex];
        return newLetter;
      } else {
        index = ALPHABET.indexOf(letter.toLowerCase());
        let upperCaseIndex = (index + shiftNumber) % ALPHABET.length;
        newLetter = ALPHABET[upperCaseIndex].toUpperCase();
        return newLetter;
      }
    })
    .join("");
}

// Example:
console.log(shiftLetters("abc", 1) === "bcd"); // shift right by 1
console.log(shiftLetters("xyz", 2) === "zab"); // shift right by 2 (wraps around)
console.log(shiftLetters("Hello", 3) === "Khoor"); // Capital letters remain capitalized
