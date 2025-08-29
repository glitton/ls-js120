// function objectsEqual(obj1, obj2) {
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// }

/*
P: Write a function objectsEqual that accepts two object arguments and returns true or false depending on whether the objects have the same key/value pairs.
input: two objects
output: boolean
rules:
- return true if both objects have the same key value pairs
- false otherwise

E:
D: objects, use array as intermediate
A:
Compare the key lengths, if they are not equal return false
Iterate through obj1 keys
- If obj1 key/value is not in obj2 return false
return true
*/


function objectsEqual(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) return false;

  for (let key of obj1Keys) {
    if (obj1[key] !== obj2[key] || obj2[key] === undefined) {
      return false;
    }
  }
  return true;
}

console.log(objectsEqual({ a: "foo" }, { a: "foo" }));
console.log(objectsEqual({ a: "foo", b: "bar" }, { a: "foo" })); // false
console.log(objectsEqual({ a: "foo", b: "bar" }, { b: "bar", a: "foo" })); // true
console.log(objectsEqual({}, {})); // true
console.log(objectsEqual({ a: "foo", b: undefined }, { a: "foo", c: 1 })); //false
