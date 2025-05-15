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