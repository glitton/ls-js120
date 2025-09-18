//2.
let obj2 = {
  message: "JavaScript",
};

function foo() {
  console.log(this.message);
}

foo.bind(obj2);
//Logs nothing, bind creates a new function while call and apply invoke the function

//3.
// let obj = {
//   a: 2,
//   b: 3,
// };

// function foo() {
//   return this.a + this.b;
// }

// let bar = foo.bind(obj);

// console.log(foo());
// console.log(bar());

/*
console.log(foo()) returns NaN
5
*/

//4.
let positivity = {
  message: "JavaScript makes sense!",
};

let negativity = {
  message: "JavaScript makes no sense!",
};

function foo() {
  console.log(this.message);
}

let bar = foo.bind(positivity);

negativity.logMessage = bar;
negativity.logMessage();

/*
The console logs JavaScript makes sense!",
logMessage is added as a property to the negativity object which in essence is a
method equal to the function foo bound to the object positivity
The method is then invoked and the value of this is the positivity message.

1.  let bar = foo.bind(positivity);
   •   The bind method creates and returns a ​new function​, which we assign to bar.
   •   This new function is permanently bound to the positivity object. bind doesn't call the function; it just creates this new, bound function.
2.  negativity.logMessage = bar;
   •   This line adds a new property, logMessage, to the negativity object and assigns the bound function bar to it.
3.  negativity.logMessage();
   •   This invokes the function stored in negativity.logMessage.
   •   Even though it's called as a method on negativity, the context was permanently set when bar was created. Therefore, this inside the function refers to positivity.
   •   The function executes console.log(this.message), which becomes console.log(positivity.message), outputting 'JavaScript makes sense!'.
*/
