/* P: Create a function that takes a string as an argument and returns the count of all unique pairs of adjacent characters in the string. A pair consists of two consecutive characters. If a pair occurs multiple times, count each occurrence separately.
input: string
output: int
rules:
- count unique pairs of adjacent chars
- a pair is two consec chars
- if a pair occurs multiple times, count each one separateley
- if the input string has a length less than 2, return 0

E: aabbc => aa, ab, bb, bc => 4

D: string, array to store each pair

A:
Initialize a pairs empty array
EDGE: if string's length is less than 2, return 0
Iterate over the string
  - append to pairs: char at index and char at index + 1
Return pairs length  

abcde 0a, 1b, 2c, 3d, 4e
currChar = a  b c d
nextChar = b  c d e
pairs = ['ab', 'bc', 'cd', 'de' ]
*/

function adjacentPairs(str) {
  let pairs = [];
  if (str.length < 2) return 0;

  for (let idx = 0; idx < str.length - 1; idx++) {
    let currChar = str[idx];
    let nextChar = str[idx + 1];

    pairs.push(currChar + nextChar);
  }
  return pairs.length;
}

// Examples
// console.log(adjacentPairs("abcde") === 4); // ab, bc, cd, de
// console.log(adjacentPairs("aabbc") === 4); // aa, ab, bb, bc
// console.log(adjacentPairs("") === 0); // no pairs
// console.log(adjacentPairs("a") === 0); // no pairs
// console.log(adjacentPairs("hello") === 4); // he, el, ll, lo

/*
P: Create a function that takes an array of integers as an argument. The function should return a new array where each element is replaced by the sum of all elements in the original array that are greater than or equal to that element.
input: array
output: new array 
rules:
- new array where each element is the sum of all el from the input array that are greater than or equal to the el

E: [5, 2, 7, 1] 
>= 5 => 5, 7 = 12
>= 2 => 2, 5, 7 = 14
>= 7 => 7 = 7
>= 1 => 1, 2, 5, 7 => 15
[12, 14, 7, 15]

D: arrays

A:
Iterate over the input array (map)
For the currNumber, filter the array and return a new array where each number is greater than or equal to the curr number
Get the sum of the numbers that are filtered into a new array (reduce)
Return the new array

[5, 2, 7, 1].map(number => [5, 2, 7, 1].filter(num => num >= number )).reduce((sum, curr) => sum + curr, 0)
*/

function transformArray(arr) {
  return arr.map((number) =>
    arr.filter((num) => num >= number).reduce((sum, curr) => sum + curr, 0)
  );
}

// function arraysEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) return false;
//   }
//   return true;
// }

// console.log(
//   JSON.stringify(transformArray([1, 2, 3, 4])) === JSON.stringify([10, 9, 7, 4])
// );

console.log(
  JSON.stringify(transformArray([1, 2, 3, 4])) === JSON.stringify([10, 9, 7, 4])
);
// Examples
// console.log(transformArray([1, 2, 3, 4]) === [10, 9, 7, 4]);
// [10, 9, 7, 4] because:
// 1: sum of numbers >= 1 (1+2+3+4) = 10
// 2: sum of numbers >= 2 (2+3+4) = 9
// 3: sum of numbers >= 3 (3+4) = 7
// 4: sum of numbers >= 4 (4) = 4

console.log(
  JSON.stringify(transformArray([5, 2, 7, 1])) ===
    JSON.stringify([12, 14, 7, 15])
);
console.log(JSON.stringify(transformArray([])) === JSON.stringify([]));
console.log(JSON.stringify(transformArray([3])) === JSON.stringify([3]));

// Finished both in 30 mins

/*P:Create a function that takes a string as an argument and returns a new string where each letter is replaced by its position in the alphabet. For uppercase letters, add 100 to the position value. Non-alphabetic characters should remain unchanged.
input: string
output: string that rep the position of the lower-case letter in the alphabet
rules:
- return a string number that is the position of the lowercase letter in the alphabet
- if the letter is uppercase, add 100 to the string
- Non-alpha chars should remain the same

E: "A") === "101" => 'a' = 1 + 100 for capital
"LaunchSchool" 
L => 112  a => 1 => u => 20 => n => 15 => 

D: input string, use array to store each letter

A:
Create an alphabet constant, assign to the alphabet string
Create a finalAlphaString 
If str.length is 0, return empty string
Iterate over the input string
  - check if each char in lower case is between a and z
    - yes: check if the char is equal to lowercase
      - yes: append the index of the char + 1 as a string
      - no: append the index of the char + 1 + 100
    - no: append char as is  

*/

// function alphabetPosition(str) {
//   const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
//   let finalAlphaString = "";

//   if (str.length === 0) return "";

//   str.split("").forEach((char) => {
//     if (ALPHABET.includes(char.toLowerCase())) {
//       if (char === char.toLowerCase()) {
//         finalAlphaString += ALPHABET.indexOf(char) + 1;
//       } else {
//         finalAlphaString += ALPHABET.indexOf(char.toLowerCase()) + 101;
//       }
//     } else {
//       finalAlphaString += char;
//     }
//   });

//   return finalAlphaString;
// }

//Alternate solution using map and arrays, better for strings

function alphabetPosition(str) {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  if (str.length === 0) return "";

  return str
    .split("")
    .map((char) => {
      if (ALPHABET.includes(char.toLowerCase())) {
        let position = ALPHABET.indexOf(char.toLowerCase()) + 1;
        return char === char.toLowerCase()
          ? String(position)
          : String(position + 100);
      } else {
        return char;
      }
    })
    .join("");
}
// Examples
// console.log(alphabetPosition("a") === "1");
// console.log(alphabetPosition("z") === "26");
// console.log(alphabetPosition("A") === "101");
// console.log(alphabetPosition("Z") === "126");
// console.log(alphabetPosition("ab2c!") === "1223!"); // Only letters are replaced
// console.log(alphabetPosition("LaunchSchool") === "112121143811938151512");
// console.log(alphabetPosition("") === "");
// console.log(alphabetPosition("123!@#") === "123!@#"); // No letters to replace

/*
P: Create a function that takes an array of integers and returns the length of the longest "balanced" subarray. A balanced subarray is one where the sum of all elements is equal to 0. If no balanced subarray exists, return 0.
input: array
output: integer
rules:
- if the sum of the array is 0, it is considered balanced, return its length
- If the sum isn't zero, return 0

E: [1, 2, 3] => sum is 6, now way to balance the array, not balanced, return 0
Get all subarrays
For those that sum up to zero, get the one with the longest length

A:
Initialize a longest assign to 0
Get all subarrays and filter those that sum up to zero (use a helper function)
Iterate over the zeroSumSubarrays
  - assign sum to current
    - if current's length is longer than longest
      - reassign longest to current
Check current versus longest at the end of the loop
Return longest      
*/

function zeroSumSubarrays(arr) {
  let result = [];

  for (let startIdx = 0; startIdx < arr.length; startIdx++) {
    for (let endIdx = startIdx + 1; endIdx <= arr.length; endIdx++) {
      let subArrays = arr.slice(startIdx, endIdx);
      if (subArrays.reduce((sum, num) => sum + num, 0) === 0) {
        result.push(subArrays);
      }
    }
  }
  return result;
}

function balancedSubarray(arr) {
  let longest = 0;
  let zeroSumNumbers = zeroSumSubarrays(arr);

  zeroSumNumbers.forEach((arr) => {
    let current = arr.length;
    if (current > longest) {
      longest = current;
    }
  });
  return longest;
}

// console.log(zeroSumSubarrays([5, 2, -2, 3, 1, 0, -3]));
// Examples
console.log(balancedSubarray([1, -1]) === 2); // [1, -1] sums to 0
console.log(balancedSubarray([1, 2, -2, -1]) === 4); // The entire array sums to 0
console.log(balancedSubarray([1, 2, 3, -3, -2]) === 4); // [2, 3, -3, -2] sums to 0
console.log(balancedSubarray([5, 2, -2, 3, 1, 0, -3]) === 2); // [2, -2] sums to 0
console.log(balancedSubarray([0]) === 1); // [0] sums to 0
console.log(balancedSubarray([1, 2, 3]) === 0); // No subarray sums to 0
console.log(balancedSubarray([]) === 0); // Empty array
