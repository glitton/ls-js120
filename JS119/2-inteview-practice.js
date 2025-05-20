/* Merge Overlapping Intervals (Intermediate)
Create a function mergeIntervals that takes an array of intervals and merges any overlapping intervals. An interval is represented as an array of two integers [start, end].

Two intervals are considered overlapping if they share at least one common point.

*/

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

// 6. Run-Length Encoding (Intermediate)
// Create a function runLengthEncode that implements a simple form of run-length encoding. For consecutive identical characters, the function should return a string where each character is followed by its count. If a character appears only once, it should be followed by 1.
// const p = console.log;

p(runLengthEncode("aaa") === "a3");
p(runLengthEncode("aaaabbc") === "a4b2c1");
p(runLengthEncode("abcde") === "a1b1c1d1e1");
p(runLengthEncode("") === "");
p(runLengthEncode("aaaaaaaaaaa") === "a11");
p(runLengthEncode("aabbaabb") === "a2b2a2b2");

/*Given a string of alphabetic characters, return a string where each character is replaced with the letter that is a certain number of positions away in the alphabet. If the shift takes you past the end of the alphabet, continue counting from the start.
 */

// Example:
console.log(shiftLetters("abc", 1) === "bcd"); // shift right by 1
console.log(shiftLetters("xyz", 2) === "zab"); // shift right by 2 (wraps around)
console.log(shiftLetters("Hello", 3) === "Khoor"); // Capital letters remain capitalized
