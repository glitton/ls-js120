// 1.
// function func() {
//   return this;
// }

// let context = func();

// console.log(context);
//The console will return the global object

//2.
let obj = {
  func: function () {
    return this;
  },
};

let context = obj.func();

console.log(context);

//The code logs the object.  The difference is that context invokes the method of the 
// object, it invokes the method func which receives an implicit execution context.

//3. 
message = "Hello from the global scope!";

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();

let foo = {
  message: "Hello from the function scope!",
};

foo.deliverMessage = deliverMessage;

foo.deliverMessage();

/*
The console will log:
Hello from the global scope! because of this.message where the value of this is 
the global object
Hello from the function scope!"
*/