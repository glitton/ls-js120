class Vehicle {
  constructor(make, model, wheels, gasolineType = "regular") {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
    this.gasolineType = gasolineType;
  }

  info() {
    return `${this.make} ${this.model}`;
  }

  getWheels() {
    return `${this.wheels}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, wheels = 4, gasolineType) {
    super(make, model, wheels, gasolineType);
  }
}

let honda = new Car("Honda", "Civic");
let porsche = new Car("Porsche", "911", 4, "premium");
console.log(honda, porsche);
