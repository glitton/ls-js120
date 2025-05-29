/*
P: Create a function that takes an array of integers and a target sum. The function should return the number of contiguous subarrays that sum to the target value.
input: array and int
output: int
rules:
- return the number of subarrays that contain numbers that sum up to the target value
- each subarray will contain continous numbers that sum up to the target
- if no subarrays sum up to the target, return 0

E: 

D: arrays and int

A:
Initialize a count var, assign to 0
Iterate over the input array and get subarrays using a nested loop
  - get subarrays using slice where startIdx is outer loop and endIdx is inner loop
  - if the sum of the subarray is equal to the target
    - increment count by 1
return count   

*/

// function countSubarraySums(arr, targetSum) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j <= arr.length; j++) {
//       let subarray = arr.slice(i, j);
//       let sum = subarray.reduce((sum, num) => sum + num, 0);
//       if (sum === targetSum) {
//         count++;
//       }
//     }
//   }

//   return count;
// }

// More optimal

function countSubarraySums(arr, targetSum) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === targetSum) {
        count++;
      }
    }
  }

  return count;
}

// const p = console.log;
// p(countSubarraySums([1, 2, 3, 4, 5], 9) === 2); // [4, 5] and [2, 3, 4]
// p(countSubarraySums([1, 1, 1], 2) === 2); // [1, 1] occurs twice
// p(countSubarraySums([1, -1, 1, -1], 0) === 4); // [1, -1], [1, -1], [-1, 1], [1, -1, 1, -1]
// p(countSubarraySums([10, 5, 0, 2, 3, -5, 7], 5) === 6); // [ 5, 0 ],[ 5, 0, 2, 3, -5 ],[ 0, 2, 3 ],[ 2, 3 ],[ 3, -5, 7 ]
// p(countSubarraySums([4, 2, 22, 8, 5], 30) === 1); // [22, 8]

/*
P: Create a function that transforms a string by replacing each word with a new word according to the following rules:
   • If the word has an even number of letters, replace it with the word reversed
   • If the word has an odd number of letters, replace the middle letter with the next letter in the alphabet (wrapping from 'z' to 'a')
   • Preserve the original capitalization of each word
   • Punctuation should remain unchanged
input: string
output: new string
rules:
- if the word in the input string has an even number of letters, new string should reverse the word
- if the word has an odd number of letters, replace the middle letter with the next one in the alphabet
- keep case as is

E: 

D: input string, use an array to store each word

A:
Initialize an alphabet constant, assign to lowercase alphabet string
Initialize result empty array
Convert input string to an array of words ["Hello", "world"]
Iterate over array
- for each word
  - if the length is even
    - reverse the word an append it to result array (create reverse helper)
    result = ["olleH"]
  - else length is odd "world"
    - get the letter at the middle index middleIdx = Math.floor(length/2), word[2], letter r
    - find the next letter from the alphabet constant (use index + 1 and modulo alpha length )  "s"
    - build a new string, first half as is + new letter + last half
      - (ex, length is 5: slice(0, middleIdx) + newLetter[middleIdx] + slice(middleIdx + 1))
        wo + s + ld = wosld
      - push newString to result array ["olleH", "wosld"]
Return result array as a string join(' ')  
*/

function transformString(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = [];
  let strArr = str.split(" ");

  for (let idx = 0; idx < strArr.length; idx++) {
    let word = strArr[idx];
    if (word.length % 2 === 0) {
      result.push(reverseWord(word));
    } else {
      let middleLetterIdx = Math.floor(word.length / 2);
      let middleLetter = word[middleLetterIdx];
      let newMiddleLetter =
        alphabet[(alphabet.indexOf(middleLetter) + 1) % alphabet.length];

      let newWord =
        word.slice(0, middleLetterIdx) +
        newMiddleLetter +
        word.slice(middleLetterIdx + 1);
      result.push(newWord);
    }
  }
  return result.join(" ");
}

function reverseWord(str) {
  return str.split("").reverse().join("");
}

const p = console.log;
// p(reverseWord("cool"));
p(transformString("Hello world") === "Hemlo wosld");
p(transformString("OpenAI is cool") === "IAnepO si looc");
p(transformString("a b c d e") === "b c d e f");
p(transformString("JavaScript") === "tpircSavaJ");
p(transformString("Code review") === "edoC weiver");
p(transformString("razie whales") === "raaie selahw");
