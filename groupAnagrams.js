/* Problem 1: Group Anagrams
Create a function that takes an array of strings as an argument and returns a nested array where each inner array contains strings that are anagrams of each other.
The order of the anagram groups should follow the order of the first appearance of a word in each group.
input: array;
output: array of subarrays
rules:
- subarrays contain strings that are anagrams of each others
- the order of the anagrams in the subarrays should follow how they appear in the main array
- a word is an anagram of another word when they both contains the same letters 

E: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'] => [[eat, tea, ate], [tan, nat], [bat]]

D: arrays, use an object where the key is the sorted word and the value is the array that contains the anagrams

A:
Create a helper function, isAnagram with parameters word1, word2
  - sort word1
  - return sorted word1 is equal to sorted word2 
  - if true then the words are anagrams, false otherwise

1. Initialize an empty object to store anagram groups where keys are sorted words
2. Initialize an array to track the order of first appearances
3. Iterate through each word in the input array:
   - Create a "signature" by sorting the word's letters
   - If the signature isn't already a key in the object:
     - Add it to the object with an empty array as its value
     - Add the signature to the order tracking array
   - Push the current word to the array associated with its signature
4. Initialize result array
5. Iterate through the order tracking array:
   - For each signature, push its corresponding word array to the result
6. Return the result array 

*/

function groupAnagrams(words) {
  if(words.length === 0) return []
  
  let anagrams = {};
  let wordOrder = [];

  for (let word of words) {
    let sortedWord = word.split("").sort().join("");

    if (!anagrams[sortedWord]) {
      anagrams[sortedWord] = anagrams[sortedWord] || [];
      wordOrder.push(sortedWord);
    }
    anagrams[sortedWord].push(word);
  }

  let result = [];

  for (let word of wordOrder) {
    result.push(anagrams[word]);
  }
  return result;
}

function isAnagram(word1, word2) {
  return word1.split("").sort().join("") === word2.split("").sort().join("");
}

// // Test cases
const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

// p(isAnagram("eat", "bat"));

p(
  eq(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [
    ["eat", "tea", "ate"],
    ["tan", "nat"],
    ["bat"],
  ])
);
p(
  eq(groupAnagrams(["listen", "silent", "enlist", "hello"]), [
    ["listen", "silent", "enlist"],
    ["hello"],
  ])
);
p(eq(groupAnagrams(["abc", "def"]), [["abc"], ["def"]]));
p(eq(groupAnagrams([]), []));
