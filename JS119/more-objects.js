/*
Write a function that takes an array of objects representing people with name and age properties, and returns an object where the keys are age decades ('10s', '20s', etc.) and the values are arrays of names of people in those age groups.
input: array of objects
output: object
rules:
- return an object where the keys are age in decades and the values are in an array and contains the names of the people in the age group

E: 
age between 0 and 19 => 10s
age between 20 and 29 => 20s

D: array and objects

A:
Initialize a result empty object
Iterate over the array
  GET THE KEY IN AGE DECADES
  - if the age is > 0 and less than 19, key is "10s"
  - else if age is >= 20 and less than 29, key is "20s"
  - else key is "30s"

  GET THE ITEMS IN THE ARRAY
  if the result doesn't have the key, 
    - add it and assign and empty array as the value
    - push the name as the value to the array
Return the object    

*/

// function groupByAgeDecade(people) {
//   let ageGroup = {};

//   people.forEach((obj) => {
//     let ageKey = "";

//     if (obj.age >= 0 && obj.age <= 19) {
//       ageKey = "10s";
//     } else if (obj.age >= 20 && obj.age <= 29) {
//       ageKey = "20s";
//     } else {
//       ageKey = "30s";
//     }

//     if (!ageGroup[ageKey]) {
//       ageGroup[ageKey] = [];
//     }

//     ageGroup[ageKey].push(obj.name);
//   });
//   return ageGroup;
// }

//LS solution, based on all decades

function groupByAgeDecade(people) {
  return people.reduce((ageGroup, person) => {
    const decade = Math.floor(person.age / 10) * 10;
    const ageKey = `${decade}s`;

    if (!ageGroup[ageKey]) {
      ageGroup[ageKey] = [];
    }

    ageGroup[ageKey].push(person.name);

    return ageGroup;
  }, {});
}

// const p = console.log;

// const people = [
//   { name: "Alice", age: 21 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 31 },
//   { name: "Diana", age: 19 },
//   { name: "Edward", age: 24 },
// ];

// const result = groupByAgeDecade(people);
// p(result["10s"].includes("Diana")); // true
// p(result["20s"].includes("Alice")); // true
// p(result["20s"].includes("Bob")); // true
// p(result["20s"].includes("Edward")); // true
// p(result["30s"].includes("Charlie")); // true

// Implement a function similar to countLetters from the retrieved practice problems, but with additional functionality to count all alphanumeric characters (both letters and numbers), ignoring case for letters.

// const p = console.log;

// function countChars(str) {
//   let charCount = {};

//   str
//     .toLowerCase()
//     .split("")
//     .forEach((char) => {
//       charCount[char] = (charCount[char] || 0) + 1;
//     });
//   return charCount;
// }

// with regex
function countChars(str) {
  let charCount = {};

  str
    .toLowerCase()
    .split("")
    .filter((char) => /[a-z0-9]/.test(char))
    .forEach((char) => {
      charCount[char] = (charCount[char] || 0) + 1;
    });
  return charCount;
}
// no regex
function countChars(str) {
  let charCount = {};

  str
    .toLowerCase()
    .split("")
    .forEach((char) => {
      // Check if character is a letter (a-z) or a digit (0-9)
      if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
        charCount[char] = (charCount[char] || 0) + 1;
      }
    });

  return charCount;
}

function countChars(str) {
  let charCount = {};
  const validChars = "abcdefghijklmnopqrstuvwxyz0123456789";

  str
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (validChars.includes(char)) {
        charCount[char] = (charCount[char] || 0) + 1;
      }
    });

  return charCount;
}

// const obj1 = countChars("Hello123");
// p(obj1["h"] === 1); // true
// p(obj1["e"] === 1); // true
// p(obj1["l"] === 2); // true
// p(obj1["o"] === 1); // true
// p(obj1["1"] === 1); // true
// p(obj1["2"] === 1); // true
// p(obj1["3"] === 1); // true

// const obj2 = countChars("aA123bB");
// p(obj2["a"] === 2); // true
// p(obj2["b"] === 2); // true

/*
4.  ​Advanced​: Create a function that takes an array of objects representing products with name, price, and category properties. Return an object where keys are category names and values are objects containing the average price and count of products in that category.
*/

const p = console.log;

function analyzeInventory(products) {
  // Your code here
}

const inventory = [
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "Headphones", price: 100, category: "Electronics" },
  { name: "Book", price: 20, category: "Books" },
  { name: "Notebook", price: 5, category: "Stationery" },
  { name: "Pen", price: 2, category: "Stationery" },
  { name: "Tablet", price: 300, category: "Electronics" },
];

const analysis = analyzeInventory(inventory);
p(analysis.Electronics.average === 533.33); // true (may need to round for floating point precision)
p(analysis.Electronics.count === 3); // true
p(analysis.Books.average === 20); // true
p(analysis.Books.count === 1); // true
p(analysis.Stationery.average === 3.5); // true
p(analysis.Stationery.count === 2); // true
