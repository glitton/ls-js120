/*
Find the longest vowel substring
    Create a function that takes a non-empty string as an argument. The string consists entirely of lowercase alphabetic characters. The function should return the length of the longest consecutive sequence of vowels. The vowels of interest are "a", "e", "i", "o", and "u".
*/

// Test cases
// console.log(longestVowelSubstring("cwm") === 0);
// console.log(longestVowelSubstring("many") === 1);
// console.log(longestVowelSubstring("launchschoolstudents") === 2);
// console.log(longestVowelSubstring("eau") === 3);
// console.log(longestVowelSubstring("beauteous") === 3);
// console.log(longestVowelSubstring("sequoia") === 4);

/*
  Find the index where left and right sums are equal
  Create a function that takes an array of integers as an argument. Determine and return the index N for which all numbers with an index less than N sum to the same value as the numbers with an index greater than N. If there is no index that would make this happen, return -1.
    If you are given an array with multiple answers, return the index with the smallest value.
    The sum of the numbers to the left of index 0 is 0.
1:04
Likewise, the sum of the numbers to the right of the last element is 0.
  */

// Test cases
// console.log(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
// console.log(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
// console.log(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
// console.log(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);
// console.log(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);

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
      return num;
    }
  }
  console.log(num);
}
// // Test cases
// console.log(whatIsDifferent([0, 1, 0]) === 1);
// console.log(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
// console.log(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
// console.log(whatIsDifferent([3, 4, 4, 4]) === 3);
// console.log(whatIsDifferent([4, 4, 4, 3]) === 3);

/*
1. Substring Palindromes (Intermediate)
Create a function countPalindromeSubstrings that takes a string argument and returns the number of substrings that are palindromes. A palindrome reads the same forward and backward. Single characters are not considered palindromes for this problem.
const p = console.log;

p(countPalindromeSubstrings("abba") === 1);
p(countPalindromeSubstrings("madam") === 3); // "ada", "madam", "ada"
p(countPalindromeSubstrings("hello") === 0);
p(countPalindromeSubstrings("racecar") === 4); // "aceca", "cec", "racecar", "aceca"
p(countPalindromeSubstrings("aaaa") === 6); // "aa" (3 times), "aaa" (2 times), "aaaa"
p(countPalindromeSubstrings("") === 0);
2. Alternating Sums (Intermediate)
Create a function alternatingSums that takes an array of integers and returns a new array with two elements. The first element is the sum of elements at even indices, and the second element is the sum of elements at odd indices.
const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(alternatingSums([1, 2, 3, 4, 5]), [9, 6])); // (1+3+5, 2+4)
p(eq(alternatingSums([1, 1, 1, 1, 1]), [3, 2]));
p(eq(alternatingSums([10, 20]), [10, 20]));
p(eq(alternatingSums([5]), [5, 0]));
p(eq(alternatingSums([]), [0, 0]));
p(eq(alternatingSums([-5, 10, 15, -20]), [10, -10]));
3. Word Sorting (Intermediate)
Create a function sortByConsonants that sorts an array of words based on the number of consonants they contain. Words with more consonants should come before words with fewer consonants. If two words have the same number of consonants, they should maintain their original order.
const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(sortByConsonants(["hello", "apple", "sky"]), ["hello", "apple", "sky"])); // 3, 2, 2
p(eq(sortByConsonants(["aa", "bbb", "cccc", "d"]), ["cccc", "bbb", "aa", "d"])); // 4, 3, 0, 0
p(eq(sortByConsonants(["aeiou", "rhythm"]), ["rhythm", "aeiou"])); // 5, 0
p(eq(sortByConsonants(["hi", "bye", "day"]), ["bye", "day", "hi"])); // 1, 1, 0
p(eq(sortByConsonants([]), []));
4. Merge Overlapping Intervals (Intermediate)
Create a function mergeIntervals that takes an array of intervals and merges any overlapping intervals. An interval is represented as an array of two integers [start, end].
2:37
Two intervals are considered overlapping if they share at least one common point.
const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]), [[1, 6], [8, 10], [15, 18]]));
p(eq(mergeIntervals([[1, 4], [4, 5]]), [[1, 5]]));
p(eq(mergeIntervals([[1, 4], [5, 6]]), [[1, 4], [5, 6]]));
p(eq(mergeIntervals([[1, 10], [2, 6], [3, 5]]), [[1, 10]]));
p(eq(mergeIntervals([]), []));
5. Number to Words (Intermediate)
Create a function numberToWords that converts a positive integer (up to 999) into its word representation. For example, 123 should become "one hundred twenty three".
const p = console.log;

p(numberToWords(1) === "one");
p(numberToWords(10) === "ten");
p(numberToWords(21) === "twenty one");
p(numberToWords(123) === "one hundred twenty three");
p(numberToWords(999) === "nine hundred ninety nine");
p(numberToWords(100) === "one hundred");
p(numberToWords(505) === "five hundred five");
6. Run-Length Encoding (Intermediate)
Create a function runLengthEncode that implements a simple form of run-length encoding. For consecutive identical characters, the function should return a string where each character is followed by its count. If a character appears only once, it should be followed by 1.
const p = console.log;

p(runLengthEncode("aaa") === "a3");
p(runLengthEncode("aaaabbc") === "a4b2c1");
p(runLengthEncode("abcde") === "a1b1c1d1e1");
p(runLengthEncode("") === "");
p(runLengthEncode("aaaaaaaaaaa") === "a11");
p(runLengthEncode("aabbaabb") === "a2b2a2b2");
*/
