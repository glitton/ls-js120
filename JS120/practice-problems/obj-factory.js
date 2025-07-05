function createFruit(name, color) {
  return {
    name,
    color,

    isRipe: function () {
      return `This ${this.name} is ripe.`;
    },
    describe: function () {
      return `This ${this.name} is ${this.color}.`;
    },
  };
}

let apple = createFruit("Apple", "Red");
// console.log(apple.isRipe());

function createSmartPhone(brand, model, year) {
  return {
    brand,
    model,
    year,

    checkBatteryLevel: function () {
      return `${this.brand} ${this.model} has 75% battery remaining.`;
    },

    displayInfo: function () {
      return `${this.year} ${this.brand} ${this.model}`;
    },
  };
}

let iphone = createSmartPhone("Apple", "iPhone 12", 2020);
// console.log(iphone.displayInfo());

function createInstrument(instrument, type) {
  return {
    instrument,
    type,

    play() {
      return `We are playing a tune on this ${this.instrument}`;
    },

    showType() {
      return `This ${this.instrument} is a ${this.type} instrument`;
    },
  };
}

let violin = createInstrument("violin", "string");
console.log(violin.play());
console.log(violin.showType());
let flute = createInstrument("flute", "wind");
console.log(flute.play());
console.log(flute.showType());
let drum = createInstrument("drum", "percussion");
console.log(drum.play());
console.log(drum.showType());
