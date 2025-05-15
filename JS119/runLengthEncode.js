/*Run-Length Encoding (Intermediate)
P: Create a function runLengthEncode that implements a simple form of run-length encoding. For consecutive identical characters, the function should return a string where each character is followed by its count. If a character appears only once, it should be followed by 1.
input: string
output: string
rules: 
- return a string that contains the char followed by the number of times it repeats in the string

E: aabbaabb => a2b2a2b2




D: string

A: 
Initialize encodedString to empty string
Initialize count to 1
Iterate over the input string
  - if at the end of the string or if the currLetter is not equal to the nextLetter
    - encodedString is equal to currLetter + count
  else: increment count by 1

  aabbaabb
  idx = 0  count = 1  currLetter = a  nextLetter = a  equal = yes count = 2
  idx = 1  count = 2  currLetter = a  nextLetter = b  equal = no count = 2
  encodedString = a2  count = 1
  idx = 2   count = 1   currLetter = b  nextLetter = b  equal = yes   count = 2
  idx = 3   count = 2   currLetter = b  nextLetter = a  equal = no   count = 2
  encodedString = a2b2  count = 1
*/

function runLengthEncode(str) {
  if (str.length === 0) return "";

  let encodedString = "";
  let count = 1;

  for (let idx = 0; idx < str.length; idx++) {
    if (idx === str[str.length - 1] || str[idx] !== str[idx + 1]) {
      encodedString += `${str[idx]}${count}`;
      count = 1;
    } else {
      count++;
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
