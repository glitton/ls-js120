/*
You are given two constructor functions, Animal and Fish. Animal has a method on its prototype. 
Add the necessary code where the // Your code here comment is located to make 
Fish inherit from Animal so that the final line of code works as expected. 
Ensure that the constructor property on Fish.prototype correctly points back to Fish.
*/

function Animal() {}

Animal.prototype.eat = function () {
  console.log("Eating...");
};

function Fish() {}

Fish.prototype = Object.create(Animal.prototype);
Fish.prototype.constructor = Fish;

let fish = new Fish();
fish.eat(); // Should log 'Eating...'
console.log(Object.getPrototypeOf(fish).constructor === Fish);
console.log(fish.constructor === Fish);
