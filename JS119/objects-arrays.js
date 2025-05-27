// 1.  ​Basic​: Create a function that takes an object as an argument and returns an array of the object's keys and values as subarrays. Each subarray should contain exactly one key and its corresponding value.

function objectToArray(obj) {
  let result = [];
  for (let key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
}

// const p = console.log;
// const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

// p(
//   eq(objectToArray({ a: 1, b: 2, c: 3 }), [
//     ["a", 1],
//     ["b", 2],
//     ["c", 3],
//   ])
// );
// p(
//   eq(objectToArray({ name: "John", age: 30 }), [
//     ["name", "John"],
//     ["age", 30],
//   ])
// );
// p(eq(objectToArray({}), []));

/*
2.  ​Intermediate​: Write a function that takes an array of objects and a string representing a property name, and returns a new array where objects with duplicate values for the specified property are removed. Keep only the first occurrence of each value.
*/

function uniqueByProperty(arr, propName) {
  let result = [];
  let seenValues = {};

  arr.forEach((obj) => {
    if (!seenValues[obj[propName]]) {
      seenValues[obj[propName]] = true;
      result.push(obj);
    }
  });
  // console.log(result);
  return result;
}

// const p = console.log;
// const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

// let people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 25 },
//   { name: "Dave", age: 40 },
// ];

// p(
//   eq(uniqueByProperty(people, "age"), [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Dave", age: 40 },
//   ])
// );

/*3.  ​Intermediate​: Create a function that takes an array of objects and returns an object where the keys are the values of a specified property from each object, and the values are the number of times that key appears in the array.
 */

function countByProperty(arr, prop) {
  let result = {};

  arr.forEach((obj) => {
    let keys = obj[prop];
    result[keys] = (result[keys] || 0) + 1;
  });
  return result;
}

const p = console.log;
const objeq = function (obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

let items = [
  { type: "fruit", name: "apple" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "banana" },
  { type: "fruit", name: "orange" },
];

// p(countByProperty(items, "type"));

p(objeq(countByProperty(items, "type"), { fruit: 3, vegetable: 1 }));
