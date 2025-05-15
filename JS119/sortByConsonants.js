/*
P: Create a function sortByConsonants that sorts an array of words based on the number of consonants they contain. Words with more consonants should come before words with fewer consonants. If two words have the same number of consonants, they should maintain their original order.
input: array
output: array
rules:
- return an array that is sorted where the word with the most consonants in the list is first followed by the next word with the second most consonants and so on
- if two words have the same number of consonants, maintain their original order

E: ["hello", "apple", "sky"] each word have 3 consonants, maintain same order, output the same array

["aa", "bbb", "cccc", "d"] consonants 0, 3, 4, 1 => 4, 3, 1, 0 
need to get consonant count then append word and count as subarrays
[['aa', 0], ['bbb', 3], ["cccc", 4], ["d", 1]]
then sort descending based on index 1 (b - a)
then get all the words in a new array

D: arrays

A:
Create a countConsonants helper function
  - create a consonants constant assign to a string of consonants in lower case
  - filter each word (in lower case) so it just gets the consonants
  - return the length 

Create a subarray of word and consonant count (HELPER)
  - iterate over the array of strings
    - for each word, get the consonant count
    - push each word and consonant count as an array to a wordsConsonants array

Sort the subarrays in descending order using the consonant count (sortedWordsConsonants)
  iterate over the array of subarrays
  use index 1 (consonant count) to sort the subarrays in descending order
Iterate over the subarrays 
return the ordered words in a new array (use map)

["aa", "bbb", "cccc", "d"]
word = aa consonantCount = 0  wordsConsonants = [['aa', 0]]
word = bb consonantCount = 2  wordsConsonants = [['aa', 0], ['bb', 2]]
word = cccc consonantCount = 4  wordsConsonants = [['aa', 0], ['bb', 2], ['cccc', 4], ]
word = d consonantCount = 1  wordsConsonants = [['aa', 0], ['bb', 2], ['cccc', 4], ['d', 1]]
sortedWordsConsonants = [['cccc', 4], ['bb', 2],['d', 1], ['aa', 0]]
return wordConsonantCount[idx][0]
*/

function countConsonants(str) {
  const CONSONANTS = "bcdfghjklmnpqrstvwxyz";

  return str.split("").filter((letter) => CONSONANTS.includes(letter)).length;
}

function getSubarraysOfWordsConsonantCount(arr) {
  return arr.map((str) => {
    return [str, countConsonants(str)];
  });
}

function sortByConsonants(arr) {
  let sortedWordsConsonants = getSubarraysOfWordsConsonantCount(arr).sort(
    (a, b) => b[1] - a[1]
  );

  return sortedWordsConsonants.map((subArr) => subArr[0]);
}

// console.log(countConsonants("hello"));
// console.log(getSubarraysOfWordsConsonantCount(["hello", "apple", "sky"]));
const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(sortByConsonants(["hello", "apple", "sky"]), ["hello", "apple", "sky"])); // 3, 3, 3
p(eq(sortByConsonants(["aa", "bbb", "cccc", "d"]), ["cccc", "bbb", "d", "aa"])); // 4, 3, 1, 0
p(eq(sortByConsonants(["aeiou", "rhythm"]), ["rhythm", "aeiou"])); // 5, 0
p(eq(sortByConsonants(["hi", "bye", "day"]), ["bye", "day", "hi"])); // 1, 1, 0
p(eq(sortByConsonants([]), []));

// console.log(["hello", "apple", "sky"].sort((a, b) => b[1] - a[1]));
