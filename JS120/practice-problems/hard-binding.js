// let obj = {
//   a: 2,
//   b: 3,
// };

// function foo() {
//   return this.a + this.b;
// }

// let bar = foo.bind(obj);

// console.log(foo()); // NaN
// console.log(bar()); // 5

// let positivity = {
//   message: "JavaScript makes sense!",
// };

// let negativity = {
//   message: "JavaScript makes no sense!",
// };

// function foo() {
//   console.log(this.message);
// }

// let bar = foo.bind(positivity);

// negativity.logMessage = bar;
// negativity.logMessage(); //"JavaScript makes sense!",

let obj = {
  a: "Amazebulous!",
};
let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

let bar = foo.bind(obj);

bar.call(otherObj); //Amazebulous because bar is permanently bound to obj