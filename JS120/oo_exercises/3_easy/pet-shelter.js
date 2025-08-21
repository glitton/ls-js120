/* Write the classes and methods that will be necessary to make this code run, and log the following output:

- Three Classes: Pet, Owner, and Shelter
The Pet class should have properties like animal (the type of pet) and name (the pet's name), and it typically includes a method like info() that returns a descriptive string.

The Owner class should hold the owner's name and also keep track of the pets they have adopted, usually with an array of Pet objects. It also needs methods like addPet() to add a pet to their list, and numberOfPets() to return how many pets they have.

The Shelter class generally keeps track of owners (not just names) and facilitates the adoption process via the adopt() method, which takes Owner and Pet objects—not just their names. It also needs a method like printAdoptions() to display adoption records.

*/

class Pet {
  constructor(animal, name) {
    this.animal = animal;
    this.name = name;
  }

  info() {
    return `a ${this.animal} named ${this.name}`;
  }
}

class Owner {
  constructor(ownerName, adoptedPets = []) {
    this.ownerName = ownerName;
    this.adoptedPets = adoptedPets;
  }

  addPet(animal) {
    return this.adoptedPets.push(animal);
  }

  numberOfPets() {
    return this.adoptedPets.length;
  }
}

class Shelter {
  constructor() {
    this.records = {};
  }

  adopt(ownerName, name) {
    if (!this.records.hasOwnProperty(ownerName.ownerName)) {
      this.records[ownerName.ownerName] = ownerName;
    }
    ownerName.addPet(name);
  }

  printAdoptions() {
    for (let name in this.records) {
      console.log(`${name} has adopted the following pets: \n `);
      this.records[name].adoptedPets.forEach((pet) => {
        console.log(`${pet.info()}\n`);
      });
    }
  }
}

let butterscotch = new Pet("cat", "Butterscotch");
let pudding = new Pet("cat", "Pudding");
let darwin = new Pet("bearded dragon", "Darwin");
let kennedy = new Pet("dog", "Kennedy");
let sweetie = new Pet("parakeet", "Sweetie Pie");
let molly = new Pet("dog", "Molly");
let chester = new Pet("fish", "Chester");

let phanson = new Owner("P Hanson");
let bholmes = new Owner("B Holmes");

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.ownerName} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.ownerName} has ${bholmes.numberOfPets()} adopted pets.`);

// P Hanson has adopted the following pets:
// a cat named Butterscotch
// a cat named Pudding
// a bearded dragon named Darwin

// B Holmes has adopted the following pets:
// a dog named Molly
// a parakeet named Sweetie Pie
// a dog named Kennedy
// a fish named Chester

// P Hanson has 3 adopted pets.
// B Holmes has 4 adopted pets.
