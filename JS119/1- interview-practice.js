/*
Practice Problem 1: Substring Pairs
Create a function that takes a string as an argument and returns the count of all unique pairs of adjacent characters in the string. A pair consists of two consecutive characters. If a pair occurs multiple times, count each occurrence separately.
*/

// Examples
console.log(adjacentPairs("abcde") === 4);      // ab, bc, cd, de
console.log(adjacentPairs("aabbc") === 4);      // aa, ab, bb, bc
console.log(adjacentPairs("") === 0);           // no pairs
console.log(adjacentPairs("a") === 0);          // no pairs
console.log(adjacentPairs("hello") === 4);      // he, el, ll, lo

/*
Practice Problem 2: Array Transformation
Create a function that takes an array of integers as an argument. The function should return a new array where each element is replaced by the sum of all elements in the original array that are greater than or equal to that element.
*/

// Examples
console.log(transformArray([1, 2, 3, 4]) === [10, 9, 7, 4]);
// [10, 9, 7, 4] because:
// 1: sum of numbers >= 1 (1+2+3+4) = 10
// 2: sum of numbers >= 2 (2+3+4) = 9
// 3: sum of numbers >= 3 (3+4) = 7
// 4: sum of numbers >= 4 (4) = 4

console.log(transformArray([5, 2, 7, 1]) === [12, 14, 7, 15]);
console.log(transformArray([]) === []);
console.log(transformArray([3]) === [3]);