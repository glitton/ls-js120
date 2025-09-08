// // Explain the following code? What does it return?
// function Human(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Human.prototype.toString = function () {
//   return `Name: ${this.name} | Age: ${this.age}`;
// };

// let aman = new Human("Aman", 73);

// console.log(aman.toString() + " Siuuu"); //

// function human(name, lastName) {
//   return {
//     name,
//     lastName,
//     fullName: `${this.name} ${this.lastName}`,
//     info() {
//       return this.fullName;
//     },
//   };
// }

// let person = human("Sergio", "Ravera");

// console.log(person.info()); //

// Is this polymorphism?
class Cat {
  makeNoise() {
    return "Dudah";
  }
}

let suzy = new Cat();
let ishu = new Cat();
ishu.makeNoise = function () {
  return "Meow meow";
};

[suzy, ishu].forEach((animal) => console.log(animal.makeNoise()));
