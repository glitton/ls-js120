/*
P: Create a function that takes an array of product objects and returns an array containing only unique products based on their name. If multiple products have the same name, keep only the first occurrence in the original array.
input: array of objects
output: array of objects
rules:
- return an array containing objects that have a unique name
- if there are multiple objectts with the same ame, keep the one that occurs first

E: 

D: array and objects

A:
My way:
Create a uniques empty array
Iterate over the array
  - if some of the product is not in the uniques array
  - append the product
Return uniques

MORE EFFICIENT
Filter the array to return only items that have unique names (most efficient)
Create a seenNames object so we can track what is already in the array
use filter to check if the name is already in the seenNames object, 
  if seen, return false
  if not seen, return true
*/

function uniqueProducts(arr) {
  let uniques = [];

  for (let product of arr) {
    if (!uniques.some((unique) => unique.name === product.name)) {
      uniques.push(product);
    }
  }
  return uniques;
}

// EFFICIENT
// function uniqueProducts(arr) {
//   let seenProducts = {};

//   return arr.filter((product) => {
//     if (seenProducts[product.name]) {
//       return false;
//     } else {
//       seenProducts[product.name] = true;
//       return true;
//     }
//   });
// }

// Example:
// const p = console.log;
// const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

// const products = [
//   { name: "Computer", price: 500 },
//   { name: "Mouse", price: 20 },
//   { name: "Computer", price: 700 },
//   { name: "Keyboard", price: 50 },
//   { name: "Mouse", price: 15 },
// ];

// p(
//   eq(uniqueProducts(products), [
//     { name: "Computer", price: 500 },
//     { name: "Mouse", price: 20 },
//     { name: "Keyboard", price: 50 },
//   ])
// );

// const fruits = [
//   { name: "Apple", color: "red" },
//   { name: "Banana", color: "yellow" },
//   { name: "Apple", color: "green" },
// ];

// p(
//   eq(uniqueProducts(fruits), [
//     { name: "Apple", color: "red" },
//     { name: "Banana", color: "yellow" },
//   ])
// );

// p(eq(uniqueProducts([]), []));

/*
P: Create a function that takes a string and returns an object where each key is a character from the string and each value is the length of the longest consecutive sequence of that character in the string.
input: string
output: object
rules:
- return an object where the key is the char in the string and the value is the length of the longest consec sequence of the char in the string

E: 
"aaabbcccccdd"
a:3, b:2, c: 5, d:2

D: string and object, array

A:
EDGE: if str is empty, return an empty object
Initialize a charSequence object, {}
Initialize currChar to the first char in the string
Initialize count to 1
Initialize maxCount to 0

Iterate over the string starting from index 1
- if we are not at the end of the string and currChar matches the string at curr index
  - increment count by 1
- else 
  - check if charCount is greater than maxCount
    - maxCount is equal to charCount
    - update charSequence with the key and maxCount 
- check if we are not at the end
      - reset currChar to the string at index 
      - reset count to 1


*/

function characterSequences(str) {
  if (str === "") return {};

  let charSequence = {};
  let currentChar = str[0];
  let currCount = 1;
  let maxCount = 0;

  for (let idx = 1; idx <= str.length; idx++) {
    if (idx < str.length && str[idx] === currentChar) {
      currCount++;
    } else {
      // Update the max count for the curr char
      charSequence[currentChar] = charSequence[currentChar]
        ? Math.max(charSequence[currentChar], currCount)
        : currCount;

      if (idx < str.length) {
        currentChar = str[idx];
        currCount = 1;
      }
    }
  }

  // console.log(charSequence);
  return charSequence;
}

// Example:
// const p = console.log;
// const objeq = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);

// p(objeq(characterSequences("aabbbccd"), { a: 2, b: 3, c: 2, d: 1 }));
// p(objeq(characterSequences(""), {}));
// p(objeq(characterSequences("xyz"), { x: 1, y: 1, z: 1 }));
// p(objeq(characterSequences("aaabbcccccdd"), { a: 3, b: 2, c: 5, d: 2 }));
// p(objeq(characterSequences("111222333"), { 1: 3, 2: 3, 3: 3 }));

/*
P: Create a function that takes an array of objects and a property name, and returns an object where the keys are the unique values of the specified property, and the values are arrays containing all objects that have that value for the specified property.
input: array of objects, prop
output: object 
rules:
-return an object where the keys are the unique prop and the values are arrays containing objects that have the same key
- if input array is empty, return an empty object

E: 

D: arrays, objects

A:
Initialize a result empty object
Iterate over the input array
  - populate the result object where the key is the input prop and the value is an empty array
  if the object prop is equal to the key, push it to the value array
return result  
*/

function groupBy(arr, property) {
  let result = {};

  arr.forEach((obj) => {
    let key = obj[property];

    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(obj);
  });
  return result;
}

// Example:
// const p = console.log;
// const objeq = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);

// const people = [
//   { name: "Alice", age: 21, city: "New York" },
//   { name: "Bob", age: 25, city: "Chicago" },
//   { name: "Charlie", age: 21, city: "Boston" },
//   { name: "Dave", age: 25, city: "New York" },
// ];

// p(
//   objeq(groupBy(people, "age"), {
//     21: [
//       { name: "Alice", age: 21, city: "New York" },
//       { name: "Charlie", age: 21, city: "Boston" },
//     ],
//     25: [
//       { name: "Bob", age: 25, city: "Chicago" },
//       { name: "Dave", age: 25, city: "New York" },
//     ],
//   })
// );

// p(
//   objeq(groupBy(people, "city"), {
//     "New York": [
//       { name: "Alice", age: 21, city: "New York" },
//       { name: "Dave", age: 25, city: "New York" },
//     ],
//     Chicago: [{ name: "Bob", age: 25, city: "Chicago" }],
//     Boston: [{ name: "Charlie", age: 21, city: "Boston" }],
//   })
// );

// p(objeq(groupBy([], "age"), {}));

/*
P: Find Object Differences
Create a function that takes two objects and returns an array of keys where the values are different between the two objects. If a key exists in one object but not the other, it should be included in the result.
input: two objects
output: array of keys 
rules:
- return an array of keys that have diff values between the two input objects
- if a key exists in one object but not the other, it should be included in the output array

E: 

{ a: 1, b: 2, c: 3 }, { a: 1, b: 4, d: 5 } => ["b", "c", "d"]
 array consists of keys where the values are different

D: input objects, output array

A:
Initialize a difference empty array
Edge: If one of the arrays is empty, return an array of keys from the other object
Get an array of values for obj1 and obj2
- if one of the values length is 0, return the keys of the other object

Iterate over obj1
  - if the obj1 key/value is not equal to obj2 key/value
    - append the obj1 key to the difference array
return difference    
*/

function findDifferences(obj1, obj2) {
  let difference = [];

  if (Object.keys(obj1).length === 0) {
    return Object.keys(obj2);
  }

  if (Object.keys(obj2).length === 0) {
    return Object.keys(obj1);
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      difference.push(key);
    }
  }

  for (let key in obj2) {
    if (obj2[key] !== obj1[key] && !difference.includes(key)) {
      difference.push(key);
    }
  }

  return difference;
}

// Example:
const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(
  eq(findDifferences({ a: 1, b: 2, c: 3 }, { a: 1, b: 4, d: 5 }), [
    "b",
    "c",
    "d",
  ])
);
p(eq(findDifferences({}, { a: 1, b: 2 }), ["a", "b"]));
p(eq(findDifferences({ a: 1, b: 2 }, {}), ["a", "b"]));
p(eq(findDifferences({ a: 1, b: 2 }, { a: 1, b: 2 }), []));
p(
  eq(
    findDifferences(
      { name: "Alice", age: 25, hobbies: ["reading", "hiking"] },
      { name: "Alice", age: 26, hobbies: ["reading", "swimming"] }
    ),
    ["age", "hobbies"]
  )
);
