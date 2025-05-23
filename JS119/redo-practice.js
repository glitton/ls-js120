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
(Stack approach)
*/

// Examples:
console.log(balancedString("()") === true);
console.log(balancedString("(hello)") === true);
console.log(balancedString("([])") === true);
console.log(balancedString("({[]})") === true);
console.log(balancedString("(") === false);
console.log(balancedString(")(") === false);
console.log(balancedString("({[}])") === false);
console.log(balancedString("({[})") === false);
console.log(balancedString("hello world") === true);

