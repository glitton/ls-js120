// //Base factory
// function createGreeting() {
//   return {
//     message: " ",
//     display() {
//       console.log(this.message);
//     },
//   };
// }

// //Hello factory function

// function createHelloGreeting() {
//   let helloObj = createGreeting();
//   helloObj.message = "Hello!";
//   return helloObj;
// }

// //Goodbye factory function

// function createGoodbyeGreeting() {
//   let goodbyeObj = createGreeting();
//   goodbyeObj.message = "Goodbye!";
//   return goodbyeObj;
// }

// let hello = createHelloGreeting();
// hello.display(); // Logs: Hello!

// let goodbye = createGoodbyeGreeting();
// goodbye.display(); // Logs: Goodbye!

//Constructor and Prototypes
// function Greeting() {
//   this.message = "";
// }

// Greeting.prototype.display = function () {
//   console.log(this.message);
// };

// //Hello Constructor
// function HelloGreeting() {
//   Greeting.call(this);
//   this.message = "Hello!";
// }

// //Set up prototype chain
// HelloGreeting.prototype = Object.create(Greeting.prototype);
// HelloGreeting.prototype.constructor = HelloGreeting;

// //Goodbye Constructor
// function GoodbyeGreeting() {
//   Greeting.call(this);
//   this.message = "Goodbye!";
// }

// //Set up prototype Chain
// GoodbyeGreeting.prototype = Object.create(Greeting.prototype);
// GoodbyeGreeting.prototype.constructor = GoodbyeGreeting;

// let newHello = new HelloGreeting();
// newHello.display();

// let newGoodbye = new GoodbyeGreeting();
// newGoodbye.display();

//class
class Greeting {
  constructor() {
    this.message = "";
  }

  display() {
    console.log(this.message);
  }
}

class Hello extends Greeting {
  constructor() {
    super();
    this.message = "Hello!";
  }
}

class Goodbye extends Greeting {
  constructor() {
    super();
    this.message = "Goodbye";
  }
}

let helloCls = new Hello();
helloCls.display();
let goodbyeCls = new Goodbye();
goodbyeCls.display();
