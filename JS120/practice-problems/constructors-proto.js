// Constructors and Prototypes Practice Problems

// let RECTANGLE = {
//   area: function () {
//     return this.width * this.height;
//   },
//   perimeter: function () {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area();
//   this.perimeter = RECTANGLE.perimeter();
// }

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = function () {
//     return this.width * this.height;
//   };
//   this.perimeter = function () {
//     return 2 * (this.width + this.height);
//   };
// }

// let rect1 = new Rectangle(2, 3);

// console.log("area", rect1.area()); // 6
// console.log("peri", rect1.perimeter()); //10
/*
The value of this within the RECTANGLE.area and RECTANGLE.perimeter methods gets set to the RECTANGLE object when they are called. Since RECTANGLE doesn't define width and height properties, the property accesses both return undefined. Since mathematical operations on undefined produce a value of NaN, the return value of the methods is NaN.
*/

//2.  Fix previous
let RECTANGLE = {
  area: function () {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

let rect1 = new Rectangle(2, 3);
// console.log(rect1.area); // => 6
// console.log(rect1.perimeter); // => 10

// 3.  Write a constructor function called Circle that takes a radius as an argument. You should be able to call an area method on any objects created by the constructor to get the circle's area. Test your implementation with the following code:

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function () {
  return MATH.PI * this.radius * this.radius;
};

let a = new Circle(3);
let b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27
// console.log(a.hasOwnProperty("area")); // => false

// 6.

function Ninja() {
  this.swung = false;
}

Ninja.prototype.swing = function () {
  this.swung = true;
  return this;
};
// Add a swing method to the Ninja prototype which
// modifies `swung` and returns the calling object

// let ninjaA = new Ninja();
// let ninjaB = new Ninja();

// console.log(ninjaA.swing().swung); // logs `true`
// console.log(ninjaB.swing().swung); // logs `true`

// 7.

let ninjaA;

{
  const Ninja = function () {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else
let ninjaB = new ninjaA.constructor();
let p = console.log;
p(ninjaA.constructor === ninjaB.constructor); // => true
