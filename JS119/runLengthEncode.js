/*Run-Length Encoding (Intermediate)
P: Create a function runLengthEncode that implements a simple form of run-length encoding. For consecutive identical characters, the function should return a string where each character is followed by its count. If a character appears only once, it should be followed by 1.
input: string
output: string
rules: 
- return a string that contains the char followed by the number of times it repeats in the string

E: aabbaabb => a2b2a2b2

D: string

A: 
Initialize encodedString var, assign to empty string
Initialize count var, assign to 1
Iterate over the input string
  if the nextLetter is not undefined and is the same as the currLetter
    - yes: increment count by 1
    - no: add the current letter and count to the newString
  reset count to 1  
return encodedString 

*/

function runLengthEncode(str) {
  let encodedString = "";
  let count = 1;

  if (str.length === 0) return "";

  for (let idx = 0; idx < str.length; idx++) {
    let currLetter = str[idx];
    let nextLetter = str[idx + 1];

    if (nextLetter !== undefined && nextLetter === currLetter) {
      count++;
    } else {
      encodedString += `${currLetter}${count}`;
      count = 1;
    }
  }
  return encodedString;
}

const p = console.log;

p(runLengthEncode("aaa") === "a3");
p(runLengthEncode("aaaabbc") === "a4b2c1");
p(runLengthEncode("abcde") === "a1b1c1d1e1");
p(runLengthEncode("") === "");
p(runLengthEncode("aaaaaaaaaaa") === "a11");
p(runLengthEncode("aabbaabb") === "a2b2a2b2");
