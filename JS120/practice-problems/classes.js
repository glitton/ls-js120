class SmartPhone {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  checkBatteryLevel() {
    return `${this.year} ${this.brand} ${this.model} has 75% battery remaining.`;
  }

  displayInfo() {
    return `${this.year} ${this.brand} ${this.model}`;
  }
}

const iPhone12 = new SmartPhone("Apple", "iPhone 12", 2020);
// console.log(iPhone12.displayInfo());

class Vehicle {
  constructor(color, weight) {
    this.color = color;
    this.weight = weight;
  }

  accelerate() {
    console.log(`accelerating`);
  }

  decelerate() {
    console.log(`decelerating`);
  }
}

class Car extends Vehicle {
  constructor(color, weight, licenseNumber) {
    super(color, weight);
    this.licenseNumber = licenseNumber;
  }

  honk() {
    console.log("Honk!");
  }
}

class Boat extends Vehicle {
  constructor(color, weight, homePort) {
    super(color, weight);
    this.homePort = homePort;
  }

  dropAnchor() {
    console.log("Drop anchor!");
  }
}

class Plane extends Vehicle {
  constructor(color, weight, airlineName) {
    super(color, weight);
    this.airlineName = airlineName;
  }

  takeOff() {
    console.log("Taking off!");
  }

  land() {
    console.log("Landing!");
  }
}

let car = new Car("red", 3300, "BXY334");
// car.accelerate(); // Accelerate
// car.honk(); // Honk
// car.decelerate(); // Decelerate
// console.log(car.color, car.weight, car.licenseNumber);
// red 3300 BXY334

let boat = new Boat("yellow", 12000, "Bahamas");
// boat.accelerate(); // Accelerate
// boat.decelerate(); // Decelerate
// boat.dropAnchor(); // Drop anchor
// console.log(boat.color, boat.weight, boat.homePort);
// yellow 12000 Bahamas

let plane = new Plane("blue", 83000, "Southwest");
// plane.accelerate(); // Accelerate
// plane.takeOff(); // Take off
// plane.land(); // Land
// plane.decelerate(); // Decelerate
// console.log(plane.color, plane.weight, plane.airline);
// blue 83000 Southwest

// console.log(car instanceof Vehicle);
// console.log(boat instanceof Vehicle);
console.log(car instanceof Car);
console.log(boat instanceof Car);
