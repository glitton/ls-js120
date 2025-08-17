// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {}

// class Car extends Vehicle {}

// let truck = new Truck(2003);
// console.log(truck.year); // 2003

// let car = new Car(2015);
// console.log(car.year); // 2015

// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year) {
//     super(year);
//     this.startEngine();
//   }
//   startEngine() {
//     console.log("Ready to go!");
//   }
// }

// let truck = new Truck(2003);
// console.log(truck.year); // 2003

// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year, bedType) {
//     super(year);
//     this.bedType = bedType;
//   }
// }

// class Car extends Vehicle {}

// let truck1 = new Truck(2003, "Short");
// console.log(truck1.year);
// console.log(truck1.bedType);

class Vehicle {
  startEngine() {
    return "Ready to go!";
  }
}

class Truck extends Vehicle {
  startEngine(speed) {
    return super.startEngine() + ` Drive ${speed}, please!`;
  }
}

let truck1 = new Truck();
console.log(truck1.startEngine("fast"));

let truck2 = new Truck();
console.log(truck2.startEngine("slow"));
