// /*
// P: Create a function that takes a string argument and returns a new string with all non-alphabetic characters replaced by the number of consecutive non-alphabetic characters they represent.

// For example:
// •   "a-b" → "a1b"
// •   "a--b" → "a2b"
// •   "a---b" → "a3b"
// •   "a##b" → "a2b"
// •   "a#$%b" → "a3b"
// •   "a b" → "a1b"
// If non-alphabetic characters appear at the beginning or end of the string, they should also be replaced with the count:
// •   "#abc#" → "1abc1"
// •   "abc###" → "abc3"
// input: string
// output: new string
// rules:
// - return a new string where non-alpha chars are replaced by the count of consecutive non-alpha chars
// - if non-alphas chars appear in the beginning or end of the input string, replace them with the count

// E:

// D: string, use an array to store chars

// A:
// Variables: result = '', count = 0
// Transform string to an array of chars
// Iterate over the array of chars 
// - if currChar (lowercase) is not an alphabet (lowercase) 
//   - increment count by 1  
// - else char is alpha
//   if count is greater than 0 
//     - append count + char to result   
//     - reset count to 0
//   else append char to result   
// End of the loop:
// if count is greater than 0
//   append count to result 
// Return result 

//  a b
//  currChar = a  count = 0  result = 'a'
//  currChar = ' ' count = 1 result = 'a'
//  currChar = b   count = 1 result = 'a1b' count = 0

//  bc#
//  currChar=b   count = 0   result = 'b'
//  currChar=c   count = 0   result = 'bc'
//  currChar=#   count = 1   result = 'bc1'
 
// */

// // function replaceNonAlpha(string) {
// //   let result = "";
// //   let count = 0;
// //   let strArray = string.split("");

// //   strArray.forEach((char) => {
// //     const alphabet = "abcdefghijklmnopqrstuvwxyz";
// //     char = char.toLowerCase();
// //     if (!alphabet.includes(char)) {
// //       count++;
// //     } else {
// //       if (count > 0) {
// //         result += count + char;
// //         count = 0;
// //       } else {
// //         result += char;
// //       }
// //     }
// //   });

// //   if (count > 0) {
// //     result += count;
// //   }
// //   return result;
// // }

// // const p = console.log;
// // p(replaceNonAlpha("a-b") === "a1b");
// // p(replaceNonAlpha("a--b") === "a2b");
// // p(replaceNonAlpha("a---b") === "a3b");
// // p(replaceNonAlpha("a##b") === "a2b");
// // p(replaceNonAlpha("a#$%b") === "a3b");
// // p(replaceNonAlpha("a b") === "a1b");
// // p(replaceNonAlpha("#abc#") === "1abc1");
// // p(replaceNonAlpha("abc###") === "abc3");
// // p(replaceNonAlpha("abc") === "abc");
// // p(replaceNonAlpha("##abc##") === "2abc2");

// /*
// P: Create a function that takes a string as an argument and returns an array containing all substrings of the original string that are palindromes. A palindrome is a word that reads the same forwards and backwards. Your function should include palindromes that are only one character long.
// The returned array should be sorted by the starting position of the substring in the input string. If there are multiple palindromes starting at the same position, sort them by length (shortest first).
// input: string
// output: array
// rules:
// - return an array that contains palindromes that have at least a length of one
// - palindromes in the array should be sorted by starting position of the substring
// - if there are multiple palindromes starting at the same position, sort them by length, shortest first

// E: 

// D: string and arrays

// A:
// Create an isPalindrome helper function
// Create allPalindromes empty array
// GET ALL SUBSTRINGS
//   - iterate over the string using a nested loop
//   - get substring using slice (i, j)
//   - if the substring is a palindrome, append an object containing the substring and starting index into allPalindromes
// Sort the allPalindromes array by starting index
//   - if starting indexes are not the same, sort by index (a.startIdx - b.startIdx)
//   - else startIdx are the same, sort by length (a.length - b.length)
// return allPalindromes substrings (map)  
// */

// function palindromeSubstrings(string) {
//   let allPalindromes = [];
//   let lowerCaseStr = string.toLowerCase();
//   console.log(lowerCaseStr);

//   for (let i = 0; i < lowerCaseStr.length; i++) {
//     for (let j = i + 1; j <= lowerCaseStr.length; j++) {
//       let substring = lowerCaseStr.slice(i, j);

//       if (isPalindrome(substring)) {
//         allPalindromes.push({ substr: substring, startIdx: i });
//       }
//     }
//   }
//   //sort by starting idx
//   allPalindromes.sort((a, b) => {
//     if (a.substr.length === 1 && b.substr.length > 1) {
//       return -1; // Single characters come before multi-character palindromes
//     } else if (a.substr.length > 1 && b.substr.length === 1) {
//       return 1; // Multi-character palindromes come after single characters
//     } else {
//       // For palindromes of the same length category (single or multi)
//       return a.startIdx - b.startIdx;
//     }
//   });
//   return allPalindromes.map((item) => item.substr);
// }

// function isPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }

// const p = console.log;
// // p(isPalindrome("race"));
// // p(palindromeSubstrings("racecar"));
// p(
//   JSON.stringify(palindromeSubstrings("supercalifragilisticexpialidocious")) ===
//     JSON.stringify([
//       "s",
//       "u",
//       "p",
//       "e",
//       "r",
//       "c",
//       "a",
//       "l",
//       "i",
//       "f",
//       "r",
//       "a",
//       "g",
//       "i",
//       "l",
//       "i",
//       "ili",
//       "t",
//       "i",
//       "c",
//       "e",
//       "x",
//       "p",
//       "i",
//       "a",
//       "l",
//       "i",
//       "d",
//       "o",
//       "c",
//       "i",
//       "o",
//       "u",
//       "s",
//     ])
// );
// p(
//   JSON.stringify(palindromeSubstrings("abcddcbA")) ===
//     JSON.stringify([
//       "a",
//       "b",
//       "c",
//       "d",
//       "d",
//       "c",
//       "b",
//       "a",
//       "abcddcba",
//       "bcddcb",
//       "cddcc",
//     ])
// );
// p(
//   JSON.stringify(palindromeSubstrings("palindrome")) ===
//     JSON.stringify(["p", "a", "l", "i", "n", "d", "r", "o", "m", "e"])
// );
// p(JSON.stringify(palindromeSubstrings("")) === JSON.stringify([]));
// p(
//   JSON.stringify(palindromeSubstrings("racecar")) ===
//     JSON.stringify([
//       "r",
//       "a",
//       "c",
//       "e",
//       "c",
//       "a",
//       "r",
//       "racecar",
//       "aceca",
//       "cec",
//     ])
// );
