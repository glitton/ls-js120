// 1.  ​Basic​: Create a function that takes an array of numbers and returns an object where the keys are the numbers in the array and the values are the frequency of each number in the array.

const frequencyCounter = (arr) => {
  let count = {};
  arr.forEach((char) => {
    count[char] = (count[char] || 0) + 1;
  });
  return count;
};

// console.log(frequencyCounter([1, 2, 3, 1, 2, 1])); // { '1': 3, '2': 2, '3': 1 }
// console.log(frequencyCounter([5, 5, 5])); // { '5': 3 }
// console.log(frequencyCounter([])); // {}

/* 2.  ​Intermediate​: Write a function that takes an array of strings and returns an object where each key is the first letter of a string and each value is an array of all strings that start with that letter.
input: array of strings
output: object
rules:
return an object where each key is the first letter of the string and the values is an array of string that start with the key

E:
D: array and objects
A:
Initialize a firstLetterGroup object, {}
Iterate over the array
  assign the first letter to a var, key
  if the key doesn't exist, assign the value as an empty array
  - append the current string to the value of the letter key
Return the object  

*/

const groupByFirstLetter = (arr) => {
  let firstLetterGroup = {};

  for (let item of arr) {
    let key = item[0];

    if (!firstLetterGroup[key]) {
      firstLetterGroup[key] = [];
    }
    firstLetterGroup[key].push(item);
  }
  return firstLetterGroup;
};

// console.log(
//   groupByFirstLetter(["apple", "banana", "cherry", "avocado", "blueberry"])
// );
// { 'a': ['apple', 'avocado'], 'b': ['banana', 'blueberry'], 'c': ['cherry'] }

/* 3. 
Create a function that takes an array of objects with 'name' and 'score' properties and returns the name of the person with the highest score.
*/

const highestScorer = (arr) => {
  return arr.sort((a, b) => b["score"] - a["score"])[0].name;
};

// console.log(
//   highestScorer([
//     { name: "Alice", score: 85 },
//     { name: "Bob", score: 92 },
//     { name: "Charlie", score: 78 },
//   ])
// ); // 'Bob'

/* 4.  ​Advanced​: 
Implement a function that takes a string argument and returns an object where keys are the characters in the string and values are arrays containing the indices where each character appears.

A: 
Initialize a result empty object
Iterate over the string
  - assign the letter to a var, key
  assign the key to result with a value of an empty array
  push the index of the key to the empty array

return result
*/

const charIndices = (str) => {
  let result = {};

  str.split("").forEach((letter, idx) => {
    result[letter] = result[letter] || [];
    result[letter].push(idx);
  });
  return result;
};

// console.log(charIndices("hello"));
// { 'h': [0], 'e': [1], 'l': [2, 3], 'o': [4] }

/* 5.
Advanced​: Write a function similar to Problem 5 from the retrieved data that takes a string argument and returns the character that occurs most often in the string. If there are multiple characters with the same greatest frequency, return the one that appears first in the string. Consider uppercase and lowercase versions to be the same.

*/

const mostCommonChar = (str) => {
  if (!str || str.length === 0) return null;

  let letterCount = {};
  let maxChar = "";
  let maxCount = 0;

  str
    .toLowerCase()
    .split("")
    .forEach((ltr) => {
      letterCount[ltr] = (letterCount[ltr] || 0) + 1;

      if (letterCount[ltr] > maxCount) {
        maxCount = letterCount[ltr];
        maxChar = ltr;
      }
    });

  // let highestCount = Object.values(letterCount).sort((a, b) => b - a)[0];

  // for (let ltr in letterCount) {
  //   if (letterCount[ltr] === highestCount) {
  //     return ltr;
  //   }
  // }

  return maxChar;
};

// console.log(mostCommonChar("Hello World") === "l"); // true
// console.log(mostCommonChar("Mississippi") === "i"); // true
// console.log(mostCommonChar("Happy birthday!") === "h"); // true
// console.log(mostCommonChar("aaaaaAAAA") === "a"); // true

/* 6.
Advanced​: Implement a function similar to Problem 7 from the retrieved data that takes an array of integers and returns the number of identical pairs in the array.
input: array
output: integer
rules:
return the number of identical pairs in the array
if the array is empty or contains one item, return 0

E: 
sorted [1, 2, 3, 3, 4, 5, 5, 5, 6, 7, 8, 9, 9]

D: arrays and int

A:
Initialize a pairCount var, assign to 0
EDGE cases: if array's length is less than or equal to 1, return 0
Create a sorted array
Iterate over the array
  if arr[i] is equal to arr[i + 1]
  - increment count by 1
  - increment i by 1
return count  

*/

// const pairs = (arr) => {
//   let count = 0;

//   if (arr.length <= 1) return 0;

//   let sortedArr = arr.slice().sort((a, b) => a - b);

//   for (let i = 0; i < sortedArr.length; i++) {
//     if (sortedArr[i] === sortedArr[i + 1]) {
//       count++;
//       i++;
//     }
//   }
//   return count;
// };

// LS solution

const pairs = (arr) => {
  if (arr.length <= 1) return 0;

  let frequencies = {};

  arr.forEach((num) => {
    frequencies[num] = (frequencies[num] || 0) + 1;
  });

  return Object.values(frequencies).reduce((count, freq) => {
    return count + Math.floor(freq / 2);
  }, 0);
};

console.log(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3); // true
console.log(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4); // true
console.log(pairs([]) === 0); // true
console.log(pairs([23]) === 0); // true
console.log(pairs([7, 7, 7, 7, 7, 7, 7]) === 3); // true
