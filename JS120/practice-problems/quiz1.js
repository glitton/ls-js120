// let foo = {
//   bar: 42,
//   qux() {
//     console.log("Pudding");
//   },
// };

// let baz = Object.create(foo);
// baz.qux();

// let foo = { bar: 1, xyz: 3 };
// let baz = Object.create(foo);
// baz.qux = "Why not?";

// console.log(Object.keys(baz).toString());

// Object.keys(baz).forEach((prop) => {
//   if (baz.hasOwnProperty(prop)) {
//     console.log(prop);
//   }
// });

const OPERATIONS = {
  "+": (num1, num2) => num1 + num2,
  "-": (num1, num2) => num1 - num2,
  "*": (num1, num2) => num1 * num2,
  "/": (num1, num2) => num1 / num2,
};

let getOperation = (operation) => OPERATIONS[operation];

let compute = function (operation, num1, num2) {
  return operation(num1, num2);
};

// console.log(compute(getOperation("/", 18, 6)) === 3);
// // console.log(compute(getOperation("%", 9, 4)) === 5);

// console.log(compute(getOperation("+"), 5, 9) === 14);

// function bar() {
//   console.log("good morning");
// }

// global.inner = {
//   bar() {
//     console.log("good afternoon");
//   },
// };

// let obj = {
//   inner: {
//     bar() {
//       console.log("good night");
//     },

//     foo() {
//       bar();
//     },
//   },

//   bar() {
//     console.log("wake up");
//   },

//   foo() {
//     this.inner.bar();
//     inner.bar();
//     bar();
//   },
// };

// obj.foo();

function bar() {
  console.log("good morning");
}

global.inner = {
  bar() {
    console.log("good afternoon");
  },
};

// let obj = {
//   inner: {
//     bar() {
//       console.log("good night");
//     },

//     foo() {
//       bar();
//     },
//   },

//   bar() {
//     console.log("wake up");
//   },

//   foo() {
//     this.inner.bar();
//     inner.bar();
//     bar();
//   },
// };

// let foo = function () {
//   console.log("go to sleep");
// };

// function go(foo) {
//   foo();
// }

// go(obj.foo);

let cat = {
  name: "Pudding",
  colors: "black and white",
  identify() {
    let that = this;
    let report = function () {
      console.log(`${that.name} is a ${that.colors} cat.`);
    };
    report();
  },
};

// cat.identify();

// let logResult = function (func) {
//   let result = func();
//   console.log(result);
//   return result;
// };

// let foo = function () {
//   let sue = {
//     name: "Sue Perkins",
//     age: 37,
//     myAge() {
//       return `${this.name} is ${this.age} years old`;
//     },
//   };
//   logResult(sue.myAge.call(sue));
// };

// foo();
// Expected output: Sue Perkins is 37 years old.

let cats = {
  names: ["Butterscotch", "Pudding", "Fluffy"],
  foo() {
    [1, 2, 3].forEach(function (number) {
      console.log(`${number}: ${this.names[number - 1]}`);
    }, this);
  },
};

cats.foo();
