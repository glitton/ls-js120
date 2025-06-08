let bar = { a: 1, b: 2 };
let foo = Object.create(bar);
foo.a = 3;
foo.c = 4;

// // loops over all properties including enumerable props
// for (let property in foo) {
//   console.log(`${property}: ${foo[property]}`);
// }

// // loops only over foo's own properties
// Object.keys(foo).forEach((property) => {
//   console.log(`${property}: ${foo[property]}`);
// });

let bareObject = Object.create(null);

console.log(Object.getPrototypeOf(bareObject));
