/*Substring Palindromes 
P: Create a function countPalindromeSubstrings that takes a string argument and returns the number of substrings that are palindromes. A palindrome reads the same forward and backward. Single characters are not considered palindromes for this problem.
input: string
output: integer
rules:
- return the number of substrings of length greater than 1 that are palindromes
- if string is empty return 0
- single chars are not palindromes
- a palindrome are words that read the same forward and backward
- duplicate palindromes are counted as they occur

E: "madam" => "madam" "ada"
"aaaa" =? "aa", "aaa", "aaaa", "aa", "aaa", "aa"

"racecar" => ra, rac, race, racec, raceca, racecar, ac, ace, acec, aceca, acecar, ce, cec, ceca, cecar, ec, eca, ecar, ca, car => 3

D: Strings

A:
HELPER: Create an isPalindrome function
  - for strings with length greater than 1
  - split the string and reverse it
  - if the input string is equal to the reverse string, it is a palindrome

HELPER: Create a function to generate all substrings
  - iterate over the input string using a nested loop
  - get each substring starting from startIndex to endIndex

MAIN:
Filter each substring and get the palindromes
  - iterate over the substring array, return a new array of palindromes
Return the length of the palindromes array
*/

function isPalindrome(str) {
  return str.length > 1 && str === str.split("").reverse().join("");
}

function generateSubstrings(str) {
  let allSubstrings = [];

  for (let startIndex = 0; startIndex < str.length; startIndex++) {
    for (let endIndex = startIndex + 1; endIndex <= str.length; endIndex++) {
      allSubstrings.push(str.slice(startIndex, endIndex));
    }
  }
  return allSubstrings;
}

function countPalindromeSubstrings(str) {
  let substrings = generateSubstrings(str);

  return substrings.filter((str) => isPalindrome(str)).length;
}

const p = console.log;
// p(isPalindrome("aheebba"));
// p(generateSubstrings("abba"));
p(countPalindromeSubstrings("abba") === 2); //"bb", "abba";
p(countPalindromeSubstrings("madam") === 2); // "ada", "madam",
p(countPalindromeSubstrings("hello") === 1); // 'll'
p(countPalindromeSubstrings("racecar") === 3); // "aceca", "cec", "racecar",
p(countPalindromeSubstrings("aaaa") === 6); // "aa" (3 times), "aaa" (2 times), "aaaa"
p(countPalindromeSubstrings("") === 0);
