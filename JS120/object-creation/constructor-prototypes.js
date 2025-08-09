// //Given the following constructor function,
// 1.  Create a new object named car that is an instance of Vehicle. Its make should be 'Honda' and its model should be 'Civic'.
// 2.  Write code that logs true to the console by checking if car is an instance of Vehicle.
// 3.  Write code that logs true to the console by checking if the prototype of the car object is the same as the prototype property of the Vehicle constructor.

function Vehicle(make, model) {
  this.make = make;
  this.model = model;
}

let car = new Vehicle("Honda", "Civic");
console.log(car instanceof Vehicle);
console.log(Object.getPrototypeOf(car) === Vehicle.prototype); // car shares the same prototype with Vehicle
console.log(Object.getPrototypeOf(car).constructor === Vehicle);

// 1.  ​Object.getPrototypeOf(car)​: This part of the expression retrieves the prototype object of car. When you created car using new Vehicle(...), JavaScript automatically set the prototype of car to be Vehicle.prototype.
// 2.  ​.constructor​: We are now accessing the constructor property of the object returned in step 1. So, we're looking at Vehicle.prototype.constructor.
// 3.  ​Vehicle.prototype.constructor​: By default, a constructor's prototype object (like Vehicle.prototype) has a constructor property that points right back to the constructor function itself (the Vehicle function).
// So, the expression Object.getPrototypeOf(car).constructor === Vehicle is effectively the same as Vehicle.prototype.constructor === Vehicle, which evaluates to true.
// The car object itself doesn't have its own constructor property. It inherits this property from its prototype, Vehicle.prototype. This is why you can also write car.constructor === Vehicle and get true. JavaScript looks for the constructor property on car, doesn't find it, and then follows the prototype chain up to Vehicle.prototype, where it finds the property.

