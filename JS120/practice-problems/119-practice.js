/*
1. Create a function that returns the sum of digits for each number in an array.
*/
function sumOfDigits(numbers) {
  return numbers.map((num) => {
    return String(num)
      .split("")
      .reduce((sum, curr) => sum + Number(curr), 0);
  });
}

// Test cases
// console.log(sumOfDigits([12, 34, 5]));
// console.log(sumOfDigits([12, 34, 5]).toString() === [3, 7, 5].toString());
// console.log(sumOfDigits([937, 4, 2]).toString() === [19, 4, 2].toString());
// console.log(sumOfDigits([]).toString() === [].toString());

/*
2.  Create a function that takes a string argument and returns the string with every word reversed, but the order of the words should remain the same.
*/

function reverseWords(s) {
  return s
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

// Test cases
console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");

/*
3. Write a function that takes an array of strings and returns the longest string. 
If there are multiple strings of the same longest length, return the first one.
*/

// function longestString(strings) {
//   let maxLength = 0;
//   let longestString = "";
//   strings.forEach((string) => {
//     let currLength = string.length;
//     if (currLength > maxLength) {
//       maxLength = currLength;
//       longestString = string;
//     }
//   });
//   return longestString;
// }

function longestString(strings) {
  if (strings.length === 0) return "";

  return strings.reduce((longest, currString) => {
    if (currString.length > longest.length) {
      return currString;
    } else {
      return longest;
    }
  });
}

// Test cases
// console.log(longestString(["a", "bb", "ccc"]));
console.log(longestString(["a", "bb", "ccc"]) === "ccc");
console.log(longestString(["one", "two", "three"]) === "three");
console.log(longestString(["yes", "you", "the"]) === "yes");

/*
4. Write a function that returns a new array with elements in reverse order without using the array.reverse method, the sort function, or array slicing.
*/

function reverseNewArray(arr) {
  let result = [];

  // for (let idx = arr.length - 1; idx >= 0; idx--) {
  //   result.push(arr[idx]);
  // }
  // return result;

  arr.forEach((num) => {
    result.unshift(num);
  });
  return result;
}

// Test cases
console.log(
  reverseNewArray([1, 2, 3, 4]).toString() === [4, 3, 2, 1].toString()
);
console.log(reverseNewArray([]).toString() === [].toString());

/*
5.  Create a function that takes an array of numbers as an argument. For each number, determine how many unique numbers in the array are smaller than it, and place the answer in an array. Return the resulting array.
*/

function smallerNumbersThanCurrent(numbers) {
  let uniques = uniqueValues(numbers);
  return numbers.map((num) => uniques.filter((n) => n < num).length);
}

function uniqueValues(arr) {
  // 1. `new Set(arr)` creates a set object with only the unique values from `arr`.
  // 2. The spread syntax `...` converts the set back into an array.
  return [...new Set(arr)];
}

// Test cases
// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
// console.log(
//   smallerNumbersThanCurrent([8, 1, 2, 2, 3]).toString() ===
//     [3, 0, 1, 1, 2].toString()
// );
// console.log(
//   smallerNumbersThanCurrent([7, 7, 7, 7]).toString() === [0, 0, 0, 0].toString()
// );
