/*
P: Given a string of alphabetic characters, return a string where each character is replaced with the letter that is a certain number of positions away in the alphabet. If the shift takes you past the end of the alphabet, continue counting from the start.
input: string and int
output: new string
rules:
- shift all letters in the input string by the input integer
- if the shift is past the end of the alphabet (letter z), start again from letter a
- keep case as is
- if char is not a letter, return as is

E: 
"Hello", 3 => shift each letter by 3, Khoor 

D: string, maybe an array to store the letters

A:
Initialize an alphabet constant, assign to the alphabet as a string
Iterate over the input string (using map)
- if the currLetter (lowercase) is part of the alphabet
  - get the new index which is the current index + shift Number modulo the alphabet length (to get the wrap around)
  - return the newLetter with its proper case
    - if currLetter is equal to the Alphabet using the current index in lower case
      - return the newLetter in lowercase
      - otherwise return the newLetter as upper case
Return array as a string
*/

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

function shiftLetters(str, shiftNumber) {
  return str
    .split("")
    .map((char) => {
      if (ALPHABET.includes(char.toLowerCase())) {
        let newIndex =
          (ALPHABET.indexOf(char.toLowerCase()) + shiftNumber) %
          ALPHABET.length;
        // console.log(ALPHABET[newIndex]);
        if (char === char.toLowerCase()) {
          return ALPHABET[newIndex];
        } else {
          return ALPHABET[newIndex].toUpperCase();
        }
      } else {
        return char;
      }
    })
    .join("");
}

// Example:
// console.log(shiftLetters("abc", 1) === "bcd"); // shift right by 1
// console.log(shiftLetters("xyz", 2) === "zab"); // shift right by 2 (wraps around)
// console.log(shiftLetters("Hello", 3) === "Khoor"); // Capital letters remain capitalized

/*
P: Write a function that takes a sentence as an argument and returns the average number of words per sentence. Sentences may end with periods, exclamation points, or question marks.
input: string
output: int
rules:
- calculate the ave number of words per sentence
- a sentence ends with a period, exclamation point or question mark
- It's is considered one word
- return the average up to one decimal point

E:
"I love JavaScript. It's a great language!" 
7 words, 2 sentences 
Average = # of words/# of sentences

D: input is a string, use an array to store words

A:
Initialize a punctuation constant, assign to ".?!"
Split the string into an array of words
Count the total number of words
- totalWords = array's length
Count the total number of sentences
  - Iterate over the array
  - for every word check the last character
    - if it ends in a period, exclamation point or question mark
      append totalSentences by 1
Return the totalWords divided by totalSentences 

"I love JavaScript. It's a great language!"
7 words/2 sentences
*/

function averageWordsPerSentence(sentence) {
  const punctuation = ".?!";
  let words = sentence.split(" ");
  let totalWords = words.length;
  let totalSentences = 0;

  words.forEach((word) => {
    if (punctuation.includes(word[word.length - 1])) {
      totalSentences++;
    }
  });

  let averageWords = totalWords / totalSentences;
  return Number(averageWords.toFixed(1));
}

// Example:
// console.log(averageWordsPerSentence("Hello world.") === 2);
// console.log(
//   averageWordsPerSentence("I love JavaScript. It's a great language!") === 3.5
// );
// console.log(
//   averageWordsPerSentence(
//     "What is your name? My name is John. Nice to meet you!"
//   ) === 4
// );

/*
P: Write a function that takes an array of numbers as an argument and returns the sum of alternating elements - the first, third, fifth, etc. elements.
input: array
output: integer
rules:
- return an integer that represents the sum of elements at even indexes (0, 2, 4, etc ...)
- if the array is empty, return zero

E: [10, 20, 30, 40] 10 + 30 = 40

D: arrays and int

A:
Iterate over the array
  - get just the numbers that have even indexes (filter)
  - sum them up (reduce)
Return the sum  
*/

function sumAlternatingElements(arr) {
  return arr
    .filter((_, idx) => idx % 2 === 0)
    .reduce((sum, num) => sum + num, 0);
}

// Example:
// console.log(sumAlternatingElements([1, 2, 3, 4, 5]) === 9); // 1 + 3 + 5
// console.log(sumAlternatingElements([10, 20, 30, 40]) === 40); // 10 + 30
// console.log(sumAlternatingElements([]) === 0);

/*
P: Create a function that takes a string of digits and returns the largest product of five consecutive digits.
input: string digits
output: int
rules:
- return the largest product of 5 consecutive digits
- the input is a string so it needs to be converted to numbers

E: "1234567890" : Get subString of digits of length 5
12345, 67890, 23456, 34567, 45678, 56789

D: string, use an array to store each of the 5 digits so it can be multiplied

A:
Get substrings of 5 digits
Split the substring into an array of 5 integers 
Get the currProduct
- compare the currProduct to the maxProduct
  - if currProduct is greater than maxProduct
    - reassign maxProduct to equal currProduct
Return maxProduct    

12345678 = str.slice(0, 5) => idx, idx + 5
currProduct = str.slice(idx, idx + 5).reduce((prod, num) => Number(prod) * Number(num), 1)
maxProduct = Math.max(currProduct, maxProduct)
return maxProduct
*/

function largestProductOfFive(strNumbers) {
  let maxProduct = 1;
  let strNumsArr = strNumbers.split("");

  for (let idx = 0; idx < strNumsArr.length - 4; idx++) {
    let currProduct = strNumsArr
      .slice(idx, idx + 5)
      .reduce((product, number) => Number(product) * Number(number), 1);
    maxProduct = Math.max(currProduct, maxProduct);
  }

  return maxProduct;
}
// Example:
// console.log(largestProductOfFive("12345") === 120); // 1 * 2 * 3 * 4 * 5
// console.log(largestProductOfFive("12345678") === 6720); // 4 * 5 * 6 * 7 * 8
// console.log(largestProductOfFive("1234567890") === 15120); // 5 * 6 * 7 * 8 * 9

/*
P: Write a function that takes an array of numbers and a target sum. The function should return all pairs of indices where the elements at those indices add up to the target sum.
input: array and int
output: array of subarrays
rules:
- the returned array of subarrays contain the pair of indices where the nums of the indices add up to the target sum
- if not elements add up to the target sum return an empty array

E: [1, 2, 3, 4, 5], 6) => [[1, 5], [2, 4]] => indices => [[0, 4], [1, 3]]

D: arrays

A:
Initialize an indicesPairs empty array

Iterate over the input array using a nested loop
  - get the firstNumber using the outer loop index and the secondNumber using the inner loop index
  - if the sum of firstNumber and secondNumber is equal to the target sum
    - append the indexes as an array to the indicesPairs array
Return the indicesPairs    
*/

function findPairs(arr, target) {
  let indicesPairs = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        indicesPairs.push([i, j]);
      }
    }
  }
  return indicesPairs;
}
// // Example:
// console.log(findPairs([1, 2, 3, 4, 5], 6)); // returns [[0, 4], [1, 3]]
// console.log(findPairs([7, 2, 4, 6, 9, 1], 10)); // returns [[2, 3], [4, 5]]
// console.log(findPairs([1, 2, 3], 10)); // returns []

/*
P: Implement a function that finds all permutations of a given string with non-repeating characters.
input: string
output: array of strings
rules:
- return an array that contains all the versions of the input string with non-repeating characters

E: "abc" => 012, 021, 102, 120, 201, 210
012, 021, 201, 210, 120, 102 
Pattern: shift last element left until it becomes the first element

D: strings and arrays

A: Use recursion
*/

// Example:
// console.log(permutations("abc")); // returns ["abc", "acb", "bac", "bca", "cab", "cba"]
// console.log(permutations("ab")); // returns ["ab", "ba"]
// console.log(permutations("a")); // returns ["a"]

/*
P: Create a function that takes an array of product objects and returns an array containing only unique products based on their name. If multiple products have the same name, keep only the first occurrence in the original array.
input: array of objects
output: array of objects
rules:
- return an array containing objects that have a unique name
- if there are multiple objectts with the same ame, keep the one that occurs first

E: 

D: array and objects

A:
My way:
Create a uniques empty array
Iterate over the array
  - if some of the product is not in the uniques array
  - append the product
Return uniques

MORE EFFICIENT
Filter the array to return only items that have unique names (most efficient)
Create a seenNames object so we can track what is already in the array
use filter to check if the name is already in the seenNames object, 
  if seen, return false
  if not seen, return true
*/

function uniqueProducts(arr) {
  let uniques = [];

  for (let product of arr) {
    if (!uniques.some((unique) => unique.name === product.name)) {
      uniques.push(product);
    }
  }
  return uniques;
}

// EFFICIENT
// function uniqueProducts(arr) {
//   let seenProducts = {};

//   return arr.filter((product) => {
//     if (seenProducts[product.name]) {
//       return false;
//     } else {
//       seenProducts[product.name] = true;
//       return true;
//     }
//   });
// }

// Example:
const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

const products = [
  { name: "Computer", price: 500 },
  { name: "Mouse", price: 20 },
  { name: "Computer", price: 700 },
  { name: "Keyboard", price: 50 },
  { name: "Mouse", price: 15 },
];

p(
  eq(uniqueProducts(products), [
    { name: "Computer", price: 500 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 50 },
  ])
);

const fruits = [
  { name: "Apple", color: "red" },
  { name: "Banana", color: "yellow" },
  { name: "Apple", color: "green" },
];

p(
  eq(uniqueProducts(fruits), [
    { name: "Apple", color: "red" },
    { name: "Banana", color: "yellow" },
  ])
);

p(eq(uniqueProducts([]), []));

/*
P: Create a function that takes a string and returns an object where each key is a character from the string and each value is the length of the longest consecutive sequence of that character in the string.
input: string
output: object
rules:
- return an object where the key is the char in the string and the value is the length of the longest consec sequence of the char in the string

E: 
"aaabbcccccdd"
a:3, b:2, c: 5, d:2

D: string and object, array

A:
EDGE: if str is empty, return an empty object
Initialize a charSequence object, {}
Initialize currChar to the first char in the string
Initialize count to 1
Initialize maxCount to 0

Iterate over the string starting from index 1
- if we are not at the end of the string and currChar matches the string at curr index
  - increment count by 1
- else 
  - check if charCount is greater than maxCount
    - maxCount is equal to charCount
    - update charSequence with the key and maxCount 
- check if we are not at the end
      - reset currChar to the string at index 
      - reset count to 1


*/

function characterSequences(str) {
  if (str === "") return {};

  let charSequence = {};
  let currentChar = str[0];
  let currCount = 1;
  let maxCount = 0;

  for (let idx = 1; idx <= str.length; idx++) {
    if (idx < str.length && str[idx] === currentChar) {
      currCount++;
    } else {
      // Update the max count for the curr char
      charSequence[currentChar] = charSequence[currentChar]
        ? Math.max(charSequence[currentChar], currCount)
        : currCount;

      if (idx < str.length) {
        currentChar = str[idx];
        currCount = 1;
      }
    }
  }

  console.log(charSequence);
  return charSequence;
}

// Example:
// const p = console.log;
const objeq = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);

p(objeq(characterSequences("aabbbccd"), { a: 2, b: 3, c: 2, d: 1 }));
// p(objeq(characterSequences(""), {}));
// p(objeq(characterSequences("xyz"), { x: 1, y: 1, z: 1 }));
// p(objeq(characterSequences("aaabbcccccdd"), { a: 3, b: 2, c: 5, d: 2 }));
// p(objeq(characterSequences("111222333"), { 1: 3, 2: 3, 3: 3 }));
