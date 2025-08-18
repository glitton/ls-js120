class Vehicle {
  constructor({ make, model, wheels = 4, gasolineType = "regular" } = {}) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
    this.gasolineType = gasolineType;
  }
}

let options = {
  make: "Honda",
  model: "Element",
  wheels: 4,
  gasolineType: "regular",
};
