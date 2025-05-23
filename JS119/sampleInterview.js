/*Problem 1: Balanced Strings
Write a function balancedString that takes a string as an argument and returns a boolean indicating whether the string has balanced parentheses, brackets, and braces. A string is balanced if each opening character has a corresponding closing character and the pairs are properly nested.
•   Parentheses: ( and )
•   Brackets: [ and ]
•   Braces: { and }
input: string
output: boolean
rules:
- return true if the string has a balance of parens, brackets and braces
- balanced pairs need to be properly nested
- if string length is 1, return false
- if there are no brackets, return true

E: ({[}]) = 
from index 0 to 2 => ({[  from index 5 to 3 )]}
compare index 0 and index 5 => idx0: ( idx5: )
compare index 1 and index 4 => { ] => return false right away

D: strings

A: 
1.  Create an empty stack (array)
2.  Iterate through each character in the string
3.  If you encounter an opening bracket, push it onto the stack
4.  If you encounter a closing bracket:
   •   If the stack is empty, return false (closing bracket with no matching opening)
   •   Pop the top item from the stack
   •   Check if the popped item matches the current closing bracket
   •   If not, return false

   Let me walk through how this solution works:
1.  We create an object pairs that maps each opening bracket to its corresponding closing bracket.
2.  We create an empty array stack to keep track of opening brackets.
3.  We iterate through each character in the string:
   •   If the character is an opening bracket (found in the pairs object keys), we push it onto the stack.
   •   If the character is a closing bracket (found in the pairs object values), we:
       •   Pop the most recent opening bracket from the stack
       •   Check if the current closing bracket matches the expected closing bracket for the popped opening bracket
       •   If they don't match, return false immediately
4.  After processing all characters, we check if the stack is empty. If it is, all brackets were properly closed.
This approach works because the stack naturally handles the nesting requirement. The most recently opened bracket must be closed first for proper nesting.
As mentioned in the "Matching Parentheses?" exercise from the Small Problems set, this type of problem seems challenging at first but becomes clear once you understand the stack approach. As noted in that exercise: "A string is balanced if for each left parentheses we have a matching right parentheses." But they also need to be in the correct order, which is where the stack helps.
*/

function balancedString(str) {
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let balancedPairs = [];
  let closingPair = Object.values(pairs);

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (pairs[char]) {
      balancedPairs.push(char);
    } else if (closingPair.includes(char)) {
      // pop the last opening
      let lastOpeningPair = balancedPairs.pop();
      // compare lastOpeningPair with
      if (pairs[lastOpeningPair] !== char) return false;
    }
  }
  return balancedPairs.length === 0;
}

// Examples:
// console.log(balancedString("()") === true);
// console.log(balancedString("(hello)") === true);
// console.log(balancedString("([])") === true);
// console.log(balancedString("({[]})") === true);
// console.log(balancedString("(") === false);
// console.log(balancedString(")(") === false);
// console.log(balancedString("({[}])") === false);
// console.log(balancedString("({[})") === false);
// console.log(balancedString("hello world") === true);

/*Array Transformations
Write a function transformArray that takes an array of numbers and returns a new array where each element is transformed according to these rules:
•   If the number is odd, multiply it by 2
•   If the number is even, divide it by 2
•   If the number is divisible by 3, add 3 to it (after applying the above rules)
input: array of numbers
output: array of transformed numbers
rules: 
  - if the number is odd, multiply it by 2
  - if the number is even, divide it by 2
  - for the transformed array, if the number is divisible by 3, add 3 to it
  - if array is empty, return an empty array

E:   
[1, 2, 3, 4, 5] => [2, 1, 6, 2, 10] => [2, 1, 9, 2, 10]
[10, 15, 20, 25, 30] => [5, 30, 10, 50, 15] => [5, 33, 10, 50, 18]
[6, 9, 12] => [3, 18, 6] => [6, 21, 9]

D: arrays
A:
Iterate through the array
  - if the element is odd, multiply it by 2 and append to new array
  - if the element is even, divide it by 2, and append to the new array
  Iterate over the new array
  - if the number is divisible by 3, add 3 to it
  - else keep it as is
*/

function transformArray(numbers) {
  let newNumbers = numbers.map((number) => {
    if (number % 2 === 1) {
      number = number * 2;
    } else {
      number = number / 2;
    }
    return number;
  });

  return newNumbers.map((num) => {
    if (num % 3 === 0) {
      num += 3;
    }
    return num;
  });
}

// Examples:
console.log(
  JSON.stringify(transformArray([1, 2, 3, 4, 5])) ===
    JSON.stringify([2, 1, 9, 2, 10])
);
console.log(
  JSON.stringify(transformArray([10, 15, 20, 25, 30])) ===
    JSON.stringify([5, 33, 10, 50, 18])
);
console.log(
  JSON.stringify(transformArray([6, 9, 12])) === JSON.stringify([6, 21, 9])
);
console.log(JSON.stringify(transformArray([])) === JSON.stringify([]));
