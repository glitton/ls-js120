/*
Find the different number
Create a function that takes an array of numbers, all of which are the same except one. Find and return the number in the array that differs from all the rest.
The array will always contain at least 3 numbers, and there will always be exactly one number that is different.
*/

function whatIsDifferent(arr) {
  let numberCount = {};

  arr.forEach((num) => {
    numberCount[num] = (numberCount[num] || 0) + 1;
  });

  for (let num in numberCount) {
    if (numberCount[num] === 1) {
      return Number(num);
    }
  }
}
// Test cases
console.log(whatIsDifferent([0, 1, 0]) === 1);
console.log(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
console.log(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
console.log(whatIsDifferent([3, 4, 4, 4]) === 3);
console.log(whatIsDifferent([4, 4, 4, 3]) === 3);
