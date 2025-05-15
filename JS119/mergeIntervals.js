/* Merge Overlapping Intervals (Intermediate)
Create a function mergeIntervals that takes an array of intervals and merges any overlapping intervals. An interval is represented as an array of two integers [start, end].

Two intervals are considered overlapping if they share at least one common point.

input: array
output: array
rules:
- return an array that merges any overlapping intervals
- an overlapping interval consists of an array of integers that share a common point between the start and end inclusive

E:  [[1, 3],[2, 6],[8, 10],[15, 18]] => [[1,6], [8,10], [15,18]]
compare start and end points in each interval
[1, 3],[2, 6] [a,b][c,d] they overlap if c <= b AND a <= d



D: arrays

A:
Sort the intervals by start values 
Initialize a result array with the first interval assigned to it as a subarray
Iterate through the input array starting from the next interval
- compare the currArray overlaps with the array in result (arr[idx][0] <= result[])
  - yes: merge them by taking the minStart and maxEnd (Math.min, Math.max)
  - no: add currInterval to result
return result  

*/

function mergeIntervals(numbersArray) {
  if (numbersArray.length === 0) return [];

  let sortedNumsArr = numbersArray.sort((a, b) => a[0] - b[0]);

  let result = [sortedNumsArr.shift()];
  let lastInterval = result[result.length - 1];
  sortedNumsArr.forEach((arr) => {
    let currentInterval = arr;
    if (
      currentInterval[0] <= lastInterval[1] &&
      lastInterval[0] <= currentInterval[1]
    ) {
      lastInterval[0] = Math.min(currentInterval[0], lastInterval[0]);
      lastInterval[1] = Math.max(currentInterval[1], lastInterval[1]);
    } else {
      result.push(arr);
    }
  });
  // console.log(result);
  return result;
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);
p(
  eq(
    mergeIntervals([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ]),
    [
      [1, 6],
      [8, 10],
      [15, 18],
    ]
  )
);
p(
  eq(
    mergeIntervals([
      [1, 4],
      [4, 5],
    ]),
    [[1, 5]]
  )
);
p(
  eq(
    mergeIntervals([
      [1, 4],
      [5, 6],
    ]),
    [
      [1, 4],
      [5, 6],
    ]
  )
);
p(
  eq(
    mergeIntervals([
      [1, 10],
      [2, 6],
      [3, 5],
    ]),
    [[1, 10]]
  )
);
p(eq(mergeIntervals([]), []));
