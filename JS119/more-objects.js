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
input: array
output: object
rules:
return an object where the keys are the category names, and the values are objects containing the ave price and count of products in the key 

E:
{
category: "Electronics" : {
    "ave-price": 500
    "count": 2
  }
}

D: objects and arrays

A:
1.  Initialize an empty result object
2.  Iterate through the products array once
3.  For each product, check if its category exists in the result object
   •   If not, create it with initial values
   •   If yes, update the existing values
4.  After populating the result object with totals and counts, calculate the averages

*/

// const p = console.log;

function analyzeInventory(products) {
  let result = {};

  products.forEach((product) => {
    const { category, price } = product;

    if (!result[category]) {
      result[category] = {
        total: 0,
        count: 0,
        average: 0,
      };
    }

    result[category].total += price;
    result[category].count += 1;
  });

  //Calcuate average price

  for (let category in result) {
    result[category].average = Number(
      (result[category].total / result[category].count).toFixed(2)
    );

    delete result[category].total;
  }
  return result;
}

// const inventory = [
//   { name: "Laptop", price: 1200, category: "Electronics" },
//   { name: "Headphones", price: 100, category: "Electronics" },
//   { name: "Book", price: 20, category: "Books" },
//   { name: "Notebook", price: 5, category: "Stationery" },
//   { name: "Pen", price: 2, category: "Stationery" },
//   { name: "Tablet", price: 300, category: "Electronics" },
// ];

// const analysis = analyzeInventory(inventory);
// p(analysis.Electronics.average === 533.33); // true (may need to round for floating point precision)
// p(analysis.Electronics.count === 3); // true
// p(analysis.Books.average === 20); // true
// p(analysis.Books.count === 1); // true
// p(analysis.Stationery.average === 3.5); // true
// p(analysis.Stationery.count === 2); // true

/*5.  ​Advanced​: Create a function that takes an object and a path string (dot notation) and returns the value at that path. If the path doesn't exist, return undefined.

1.  We split the path string (like "user.name") into an array of keys ["user", "name"]
2.  We start with the original object as our current position
3.  For each key, we try to access the property at that key
4.  If at any point the current value is null/undefined, we return undefined
5.  Otherwise, we update our current position to the value at that key
6.  After going through all keys, we return whatever value we ended up with
 */

const p = console.log;

function getValueAtPath(obj, path) {
  let keys = path.split(".");
  let current = obj;

  for (let key of keys) {
    if (current === null || current === undefined) {
      return undefined;
    }
    current = current[key];
  }
  return current;
}

const data = {
  user: {
    name: "John",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
    },
    hobbies: ["reading", "coding"],
  },
};

p(getValueAtPath(data, "user.name") === "John"); // true
p(getValueAtPath(data, "user.address.city") === "Anytown"); // true
p(getValueAtPath(data, "user.hobbies.0") === "reading"); // true
p(getValueAtPath(data, "user.job") === undefined); // true

/*6.  ​Advanced​: Write a function that merges two objects deeply, where values from the second object override values from the first object at the same key. Arrays should be concatenated.

1.  We create a new empty object to hold our merged result
2.  We copy all properties from obj1 into this result
3.  Then we process obj2's properties:
    •   For arrays, we concatenate them using the spread operator
    •   For nested objects, we recursively call deepMerge
    •   For other values, obj2's value overrides obj1's
4.



6:04
Finally, we return the merged object
This approach creates a deep copy where arrays are concatenated, nested objects are recursively merged, and primitive values from obj2 take precedence.
 */

function deepMerge(obj1, obj2) {
  // Create a new object to avoid modifying the originals
  const result = {};

  // First, copy all properties from obj1
  for (let key in obj1) {
    result[key] = obj1[key];
  }

  // Then process obj2, handling different data types appropriately
  for (let key in obj2) {
    // If this key exists in both objects
    if (key in obj1) {
      // Handle arrays specially - concatenate them
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        result[key] = [...obj1[key], ...obj2[key]];
      }
      // If both values are objects (but not arrays), recursively merge them
      else if (
        typeof obj1[key] === "object" &&
        typeof obj2[key] === "object" &&
        !Array.isArray(obj1[key]) &&
        !Array.isArray(obj2[key]) &&
        obj1[key] !== null &&
        obj2[key] !== null
      ) {
        result[key] = deepMerge(obj1[key], obj2[key]);
      }
      // Otherwise use value from obj2
      else {
        result[key] = obj2[key];
      }
    }
    // If the key only exists in obj2, just copy it
    else {
      result[key] = obj2[key];
    }
  }

  return result;
}

const obj1 = {
  a: 1,
  b: { c: 3, d: 4 },
  e: [1, 2],
};

const obj2 = {
  a: 5,
  b: { c: 6, f: 7 },
  e: [3, 4],
};

// const merged = deepMerge(obj1, obj2);
// p(merged.a === 5); // true
// p(merged.b.c === 6); // true
// p(merged.b.d === 4); // true
// p(merged.b.f === 7); // true
// p(JSON.stringify(merged.e) === JSON.stringify([1, 2, 3, 4])); // true
