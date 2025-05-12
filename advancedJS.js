/* Here are 6 advanced practice problems to help you prepare for your JS119 interview assessment. These problems focus on string manipulation, array processing, and algorithmic thinking - all key areas for the assessment.


// Problem 2: Balanced Substrings
// Difficulty: Advanced
// Create a function that takes a string containing only lowercase letters and returns the length of the longest substring that has an equal number of each character that appears in it.
// function balancedSubstring(str) {
//   // Your implementation here
// }

// // Test cases
// const p = console.log;
// p(balancedSubstring('abababa') === 7); // All 'a's and 'b's are balanced
// p(balancedSubstring('aaabb') === 4);   // 'aabb' has 2 'a's and 2 'b's
// p(balancedSubstring('xyz') === 0);     // No balanced substring with more than one character
// p(balancedSubstring('abccba') === 6);  // Entire string is balanced
// p(balancedSubstring('abcdef') === 0);  // No balanced substring with more than one character
// Problem 3: Longest Arithmetic Subsequence
// Difficulty: Advanced
// Create a function that takes an array of integers and returns the length of the longest arithmetic subsequence (a sequence where the difference between consecutive elements is constant).
// function longestArithmeticSubsequence(nums) {
//   // Your implementation here
// }

// // Test cases
// const p = console.log;
// p(longestArithmeticSubsequence([3, 6, 9, 12]) === 4); // Difference of 3
// p(longestArithmeticSubsequence([9, 4, 7, 2, 10]) === 3); // Subsequence [9, 7, 5] or [4, 7, 10] with difference of -2 or 3
// p(longestArithmeticSubsequence([20, 1, 15, 3, 10, 5, 8]) === 4); // Subsequence [20, 15, 10, 5] with difference of -5
// p(longestArithmeticSubsequence([1, 2, 4, 8, 16]) === 2); // No 3+ element subsequence has a constant difference
// Problem 4: Zigzag Conversion
// Difficulty: Advanced
// Create a function that converts a string into a zigzag pattern across a specified number of rows, and then reads the pattern line by line to produce a new string.
// For example, if the string is "PAYPALISHIRING" and the number of rows is 3, the zigzag pattern would be:
// P   A   H   N
// A P L S I I G
// Y   I   R
// And reading line by line would give the string "PAHNAPLSIIGYIR".
// ```
// function zigzagConvert(str, numRows) {
//   // Your implementation here
// }
// // Test cases
// const p = console.log;
// p(zigzagConvert("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR");
// p(zigzagConvert("PAYPALISHIRING", 4) === "PINALSIGYAHRPI");
// p(zigzagConvert("ABCDE", 2) === "ACEBD");
// p(zigzagConvert("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 5) === "AIQYBHJPRXZCGKOSWDFLNTVEMU");
// 2:35
// p(zigzagConvert("A", 1) === "A");

// *Problem 5: Word Pattern Matcher*

// *Difficulty: Advanced*

// Create a function that takes a pattern string and a text string. The pattern consists of lowercase letters where each letter represents a word. The function should return true if the text follows the same pattern, and false otherwise.

// For example, with pattern "aba" and text "cat dog cat", each 'a' maps to "cat" and 'b' maps to "dog", so the function should return true.

// function wordPatternMatch(pattern, text) {
//  // Your implementation here
// }
// // Test cases
// const p = console.log;
// p(wordPatternMatch("aba", "cat dog cat") === true);
// p(wordPatternMatch("aabb", "cat cat dog dog") === true);
// p(wordPatternMatch("abab", "cat dog cat rat") === false); // 'b' maps to both "dog" and "rat"
// p(wordPatternMatch("abba", "dog dog dog dog") === false); // 'a' and 'b' map to the same word
// p(wordPatternMatch("aaaa", "cat cat cat cat") === true);
// p(wordPatternMatch("abcd", "the quick brown fox") === true);

// *Problem 6: Rotate Matrix*

// *Difficulty: Advanced*

// Create a function that rotates an n×n matrix 90 degrees clockwise in-place. The function should modify the input matrix directly and not return anything.

// function rotateMatrix(matrix) {
//  // Your implementation here
// }
// Test cases
// const p = console.log;
// const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);
// let matrix1 = [
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
// ];
// rotateMatrix(matrix1);
// p(eq(matrix1, [
//  [7, 4, 1],
//  [8, 5, 2],
//  [9, 6, 3]
// ]));
// let matrix2 = [
//  [5, 1, 9, 11],
//  [2, 4, 8, 10],
//  [13, 3, 6, 7],
//  [15, 14, 12, 16]
// ];
// rotateMatrix(matrix2);
// p(eq(matrix2, [
//  [15, 13, 2, 5],
//  [14, 3, 4, 1],
//  [12, 6, 8, 9],
//  [16, 7, 10, 11]
// ]));