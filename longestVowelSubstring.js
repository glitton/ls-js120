/*
Find the longest vowel substring
P: Create a function that takes a non-empty string as an argument. The string consists entirely of lowercase alphabetic characters. The function should return the length of the longest consecutive sequence of vowels. The vowels of interest are "a", "e", "i", "o", and "u".
input: string
output: int
rules:
- for the lowercase input string, return the number of consecutive vowels
- vowels are 'aeiou'

E: launchschoolstudents => l, a, u, n, c, h, s, c, h, o, o, l, s, t, u, d, e, n, t, s
au => 2
oo => 2
"sequoia" => s, e, q, u, o, i, a => uoia => 4
Last 4 (loop)

D: string, array to store each letter

A:
Variables:
VOWELS constant 'aeiou'
current, longest = 0
Convert the string to an array of letters

Iterate over the array of letters
  - if currLetter is a vowel
    - increment current by 1
  - not a vowel
    - check if current is greater than longest
    - yes: 
      - longest = current
  - not a vowel: reset current to 0
Outside the loop check again if current is greater than longest  
- yes: longest = current
return longest

[s,e,q,u,o,i,a]
currLetter = e  current = 1
currLetter = q 
  longest = 1
  current = 0
currLetter = u, o, i, a current = 4  longest = 1
longest = 4

*/

// function longestVowelSubstring(str) {
//   const VOWELS = "aeiou";
//   let current = 0;
//   let longest = 0;

//   let letters = str.split("");

//   letters.forEach((letter) => {
//     if (VOWELS.includes(letter)) {
//       current += 1;
//       // console.log(letter, current);
//     } else {
//       if (current >= longest) {
//         longest = current;
//       }
//       current = 0;
//     }
//   });
//   if (current > longest) {
//     longest = current;
//   }

//   return longest;
// }

function longestVowelSubstring(str) {
  const VOWELS = "aeiou";
  let current = 0;
  let longest = 0;

  let letters = str.split("");

  letters.forEach((letter) => {
    if (VOWELS.includes(letter)) {
      current += 1;
      // console.log(letter, current);
    } else {
      longest = Math.max(longest, current);
      current = 0;
    }
  });

  longest = Math.max(longest, current);

  return longest;
}

// Test cases
console.log(longestVowelSubstring("cwm") === 0);
console.log(longestVowelSubstring("many") === 1);
console.log(longestVowelSubstring("launchschoolstudents") === 2);
console.log(longestVowelSubstring("eau") === 3);
console.log(longestVowelSubstring("beauteous") === 3);
console.log(longestVowelSubstring("sequoia") === 4);
