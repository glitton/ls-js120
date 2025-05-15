/*Alternating Sums (Intermediate)
Create a function alternatingSums that takes an array of integers and returns a new array with two elements. The first element is the sum of elements at even indices, and the second element is the sum of elements at odd indices.
input: array
output: array
rules:
- return an array that contains two elements
- first element is the sum of numbers from the input array at even indices
- second element is the sum of numbers from the input array at odd indices
- if there are no numbers at the odd/even indices, the sum is 0
- if input array is empty, sums are both 0

E: [1, 2, 3, 4, 5]
even: 1, 3, 5 => 9    odd: 2, 4 => 6    sums = [9,6]

D: arrays

A:
Variables: sums array, evenSum, oddSum
EDGE cases:
If array is empty, sums is [0, 0]

Iterate over the input array
- if index is even, add that number to evenSum
- else index is odd, add that number to oddSum
Push evenSum and oddSum to sums
Return sums 

[1, 1, 1, 1, 1] 
even at index 0, 2, 4 => 1, 1, 1 => evenSum = 3
odd at index 1, 3 => 1, 1, => oddSum = 2
sums = [3,2]

*/

// function alternatingSums(numbers) {
// let evenSum = 0;
// let oddSum = 0;

// if (numbers.length === 0) return [0, 0];

// for (let idx = 0; idx < numbers.length; idx++) {
//   if (idx % 2 === 0) {
//     evenSum += numbers[idx];
//   } else {
//     oddSum += numbers[idx];
//   }
// }
// return [evenSum, oddSum];

// }

// function alternatingSums(arr) {
//   let evenSum = 0;
//   let oddSum = 0;

//   arr.forEach((num, idx) => {
//     if (idx % 2 === 0) {
//       evenSum += num;
//     } else {
//       oddSum += num;
//     }
//   });

//   return [evenSum, oddSum];
// }

// Using filter and reduce

function alternatingSums(arr) {
  return [
    arr.filter((_, idx) => idx % 2 === 0).reduce((sum, num) => sum + num, 0),
    arr.filter((_, idx) => idx % 2 === 1).reduce((sum, num) => sum + num, 0),
  ];
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(alternatingSums([1, 2, 3, 4, 5]), [9, 6])); // (1+3+5, 2+4)
// p(eq(alternatingSums([1, 1, 1, 1, 1]), [3, 2]));
// p(eq(alternatingSums([10, 20]), [10, 20]));
// p(eq(alternatingSums([5]), [5, 0]));
// p(eq(alternatingSums([]), [0, 0]));
// p(eq(alternatingSums([-5, 10, 15, -20]), [10, -10]));
