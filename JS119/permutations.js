// P: Implement a function that finds all permutations of a given string with non-repeating characters.
// input: string
// output: array of strings
// rules:
// - return an array that contains all the versions of the input string with non-repeating characters
//
// Recursive Permutation Algorithm:
// 1.  ​Base case​: If the input string has only 1 character, return an array containing just that string.
//    •   Example: If input is "a", return ["a"]
// 2.  ​Recursive step​: For each character in the string:
//    •   Take that character out
//    •   Find all permutations of the remaining characters (this is your recursive call)
//    •   Add the removed character to the beginning of each permutation
//    •   Add these new permutations to your result array
// Let me walk through an example with the string "abc":
// permutations("abc")
//   - Take out 'a' → remaining is "bc"
//     - Find permutations("bc") → ["bc", "cb"]
//     - Add 'a' to the beginning of each → ["abc", "acb"]
//   - Take out 'b' → remaining is "ac"
//     - Find permutations("ac") → ["ac", "ca"]
//     - Add 'b' to the beginning of each → ["bac", "bca"]
//   - Take out 'c' → remaining is "ab"
//     - Find permutations("ab") → ["ab", "ba"]
//     - Add 'c' to the beginning of each → ["cab", "cba"]
//   - Combine all results → ["abc", "acb", "bac", "bca", "cab", "cba"]

function permutations(string) {
  // Base case
  if (string.length === 1) {
    return [string];
  }

  let result = [];

  // Try each character as the first character
  for (let i = 0; i < string.length; i++) {
    // Take out current character
    const currentChar = string[i];

    // Get the remaining characters (all except the current one)
    const remainingChars = string.slice(0, i) + string.slice(i + 1);

    // Recursive call to find permutations of remaining characters
    const remainingPermutations = permutations(remainingChars);

    // Add current character to the beginning of each permutation of remaining chars
    for (let j = 0; j < remainingPermutations.length; j++) {
      result.push(currentChar + remainingPermutations[j]);
    }
  }

  return result;
}

// Example:
console.log(permutations("abc")); // returns ["abc", "acb", "bac", "bca", "cab", "cba"]
console.log(permutations("ab")); // returns ["ab", "ba"]
console.log(permutations("a")); // returns ["a"]
