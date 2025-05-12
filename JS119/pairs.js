/*
P: Count the repeated pairs in an array
    Create a function that takes an array of integers as an argument and returns the number of identical pairs of integers in that array. For instance, the number of identical pairs in [1, 2, 3, 2, 1] is 2: there are two occurrences each of both 2 and 1.
    If the array is empty or contains exactly one value, return 0.
    If a certain number occurs more than twice, count each complete pair once. For instance, for [1, 1, 1, 1], the function should return 2 as it contains two complete pairs.
input: array of numbers
output: integer that rep. the number of pairs in the array
rules:
- return an integer that rep. the number of complete pairs in the array
- if a number occurs more than twice, count each complete pair once
- if array is empty or contains one value, return 0

E:  => 
{
  1: 1,
  2: 1,
  3: 2,
  4: 1,
  5: 3,
  6: 1,
  7: 1,
  8: 1, 
  9: 2
  }
  3 complete pairs

D: arrays, object to get the number frequency

A: 
Populate the numberCount object where the key is the number and the value is the occurrence in the array
Iterate over the object
  - check if the value is greater than or equal to 2
    - yes append the Math.floor(value/2) to completePairs variable
Return complete pairs    
*/

function pairs(numbers) {
  let completePairs = 0;
  let numbersCount = {};

  // if (numbers.length <= 1) return 0;

  numbers.forEach((number) => {
    numbersCount[number] = (numbersCount[number] || 0) + 1;
  });

  for (let num in numbersCount) {
    if (numbersCount[num] >= 2) {
      completePairs += Math.floor(numbersCount[num] / 2);
    }
  }
  return completePairs;
}
// Test cases
console.log(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
console.log(pairs([]) === 0);
console.log(pairs([23]) === 0);
console.log(pairs([997, 997]) === 1);
console.log(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);

// console.log(7 / 2);
