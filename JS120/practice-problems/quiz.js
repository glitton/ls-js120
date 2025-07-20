// const Animal = function (species) {
//   this.species = species;
//   return species;
// };

// Animal.prototype.sleep = function () {
//   console.log(`The ${this.species} is sleeping`);
// };

// let lion = new Animal("Panthera leo");
// lion.sleep(); // TypeError

function convertCase(char) {
  let finalChar = "";
  if (char === char.toLowerCase()) {
    finalChar = char.toUpperCase();
  } else {
    finalChar = char.toLowerCase();
  }
  return finalChar;
}

// console.log(convertCase("a"));

let fullName = "Bennie Litton";
// fullName = fullName.split("").map(convertCase);
fullName = Array.from(fullName).map(convertCase).join("");
console.log(fullName);
