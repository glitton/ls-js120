/*
P: Find the index where left and right sums are equal

Create a function that takes an array of integers as an argument. Determine and return the index N for which all numbers with an index less than N sum to the same value as the numbers with an index greater than N. If there is no index that would make this happen, return -1.
If you are given an array with multiple answers, return the index with the smallest value.The sum of the numbers to the left of index 0 is 0.
Likewise, the sum of the numbers to the right of the last element is 0.

input: array
output: integer that rep the index for which numbers to its left sum up to the value of the numbers to its right
rules:
- sum of numbers to the left of index 0 is 0
- sum of numbers to the right of numbers.length - 1 is 0

E: [1, 2, 4, 4, 2, 3, 2]) === 3
1, 2, 4 === 2, 3, 2 sum of both are 7

[7, 99, 51, -48, 0, 4] === 1    7 === 51 - 48 + 0 + 4

[17, 20, 5, -60, 10, 25] === 0  0 === 20 + 5 - 60 + 10 + 25

IDEAS: numbers from index + 1 === index - 1
starting from index 0, get the sum of all numbers to its left (0)
and the sum of all numbers to its right
compare sums

D: array

A:
Variables: sumLeft, sumRight
Iterate over the input array
- currIndex = idx (3)
  - sumLeft: get a slice from 0 to currIdx and get the sum
  - sumRight: get a slice from currIdx + 1 and get the sum
  - compare sumLeft is equal to sumRight
    - yes, return currIdx
    - no continue

[0, 20, 10, -60, 5, 25]
currIdx = 0
sumLeft = slice(0, 0) => 0
sumRight = slice(1) => 0

[7, 99, 51, -48, 0, 4]
currIdx = 0   sumLeft = slice(0, 0) => 0    sumRight slice(1) => 99, 51, -48, 0, 4
currIdx = 1   sumLeft = slice(0, 1) => 7  sumRight slice(2) => 7
*/

// function equalSumIndex(numbers) {
//   for (let idx = 0; idx < numbers.length; idx++) {
//     let currIdx = idx;

//     let sumLeft = numbers
//       .slice(0, currIdx)
//       .reduce((acc, curr) => acc + curr, 0);
//     let sumRight = numbers
//       .slice(currIdx + 1)
//       .reduce((acc, curr) => acc + curr, 0);

//     if (sumLeft === sumRight) return currIdx;
//   }
//   return -1;
// }

/* Alternate Algo
Get the sum of all numbers in the array
Initialize leftSum to 0
Iterate over the input array
- get the rightSum: total minus left sum minus current number
- if rightSum is equal to leftSum, return index
- leftSum += currentNumber
else return -1
*/

function equalSumIndex(numbers) {
  const totalSum = numbers.reduce((acc, curr) => acc + curr, 0);
  let leftSum = 0;

  for (let idx = 0; idx < numbers.length; idx++) {
    let rightSum = totalSum - leftSum - numbers[idx];

    if (leftSum === rightSum) return idx;

    leftSum += numbers[idx];
  }
  return -1;
}
// Test cases
console.log(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
console.log(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
console.log(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
console.log(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);
console.log(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);
