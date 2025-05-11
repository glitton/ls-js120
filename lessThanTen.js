/*
P: Given an array of integers, write a function that will determine and return the number of subarrays of consecutive elements in the array such that each subarray sums to less than 10. If no subarrays sum to less than 10, return -1.
input: array
output: number of subarrays that sum to less than 10
rules: 
  - get subarrays of consecutive elements from length 1 to length of the array
  - if there is no subarray that meets the critera, return -1

E:   [1, 4, 5, 2]) === 7)
[1], [1, 4], [1,4,5], [1,4,5,2] => 2
[4], [4,5], [4,5,2] => 2
[5], [5,2] => 2
[2] => 1
Total: 7

[2, 7, 3, 5, 1] 
/2/, /2,7/, /2,7,3/, /2,7,3,5/  /2,7,3,5,1/ => 2
/7/, /7,3/, /7,3,5/, /7,3,5,1/ => 1
/3/,  /3,5/ /3,5,1/ => 3
/5/,  /5,1/ => 2
/1/   => 1
Total: 9

D: Arrays

A:
Variables:
- allSubarrays = []
- count = 0
Get all subarrays
  - Iterate over the input array using a nested loop
    - each subarray is a slice of the input array from i to j
    - push subarray to allSubarrays variable
Iterate over the array of subarrays
  - for each subarray, get the sum
  - if the sum of the subarray is less than 10
    - increment count by 1
if count is 0, return -1
Return count    

*/

function lessThanTen(numbers) {
  let allSubarrays = [];
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j <= numbers.length; j++) {
      let subarray = numbers.slice(i, j);
      let sum = subarray.reduce((acc, curr) => acc + curr, 0);

      if (sum < 10) count++;
    }
  }
  if (count === 0) return -1;
  return count;
}

let p = console.log;

p(lessThanTen([1, 4, 5, 2]) === 7);
p(lessThanTen([10]) === -1);
p(lessThanTen([10, 9]) === 1);
p(lessThanTen([2, 7, 3, 5, 1]) === 9);
p(lessThanTen([5, 5, 5, 5, 5]) === 5);
p(lessThanTen([6, 2, 6, 5, 1, 2]) === 11);
