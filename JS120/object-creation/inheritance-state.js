/*
Below are two constructor functions. Person initializes a name property. Doctor should be a "sub-type" of Person.
Your task is to modify the Doctor constructor and set up the prototype chain so that the final block of code runs without error and produces the expected output.
A Doctor should have both a name (from Person) and a specialty. It should also have its own diagnose method and be able to use the sayHello method from Person.prototype.
*/

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

function Doctor(name, specialty) {
  // Your code to initialize properties
}

// Your code to set up the prototype chain

Doctor.prototype.diagnose = function () {
  console.log("Performing diagnosis...");
};

// --- Verification ---
let doctor = new Doctor("Jane Doe", "Cardiology");

doctor.sayHello(); // Expected output: Hello, my name is Jane Doe
doctor.diagnose(); // Expected output: Performing diagnosis...
console.log(doctor.name); // Expected output: Jane Doe
console.log(doctor.specialty); // Expected output: Cardiology
console.log(doctor instanceof Person); // Expected output: true
console.log(doctor instanceof Doctor); // Expected output: true
