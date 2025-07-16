/* 1. Suppose we want to use code to keep track of products in our hardware store's inventory. A first stab might look something like this:

let scissorsId = 0;
let scissorsName = 'Scissors';
let scissorsStock = 8;
let scissorsPrice = 10;

let drillId = 1;
let drillName = 'Cordless Drill';
let drillStock = 15;
let drillPrice = 45;

This code presents a number of problems, however. What if we want to add another kind of drill? Given what we've learned about object orientation in the previous assignment, how could we use objects to organize these two groups of data?
*/

// function trackProducts(id, name, stock, price) {
//   return {
//     id,
//     name,
//     stock,
//     price,
//   };
// }

// let scissors = {
//   id: 0,
//   name: "Scissors",
//   stock: 8,
//   price: 10,
// };

// let drill = {
//   id: 1,
//   name: "Cordless Drill",
//   stock: 15,
//   price: 45,
// };

/*
2. Create a function that takes one of our product objects as an argument, and sets the object's price to a non-negative number of our choosing, passed in as a second argument. If the new price is negative, let the user know that the new price is invalid.

*/

// function setProductPrice(product, newPrice) {
//   if (newPrice >= 0) {
//     product.price = newPrice;
//   } else {
//     console.log("Invalid price!");
//   }
// }

/*
3. It would also be useful to have the ability to output descriptions of our product objects. Implement such a function following the example below:

Copy Code
describeProduct(scissors);
// => Name: Scissors
// => ID: 0
// => Price: $10
// => Stock: 8
*/

// function describeProduct(product){
//   console.log("Name: " + product.name);
//   console.log("ID: " + product.id);
//   console.log("Price: $" + product.price);
//   console.log("Stock: " + product.stock);
// }

/*
4. Rewrite the code such that the functions describeProduct and setProductPrice become methods describe and setPrice on both our scissors and drill objects.
*/

// let scissors = {
//   id: 0,
//   name: "Scissors",
//   stock: 8,
//   price: 10,
//   setPrice(newPrice) {
//     if (newPrice >= 0) {
//       this.price = newPrice;
//     } else {
//       console.log("Invalid price!");
//     }
//   },
//   describe() {
//     console.log("Name: " + this.name);
//     console.log("ID: " + this.id);
//     console.log("Price: $" + this.price);
//     console.log("Stock: " + this.stock);
//   },
// };

/*
5.  Convert to a factory function, createProduct
*/

// function createProduct(id, name, stock, price) {
//   return {
//     id,
//     name,
//     stock,
//     price,

//     setPrice(newPrice) {
//       if (newPrice >= 0) {
//         this.price = newPrice;
//       } else {
//         console.log("Invalid Price!");
//       }
//     },

//     describe() {
//       console.log("Name: " + this.name);
//       console.log("ID: " + this.id);
//       console.log("Price: $" + this.price);
//       console.log("Stock: " + this.stock);
//     },
//   };
// }

/*
6. Recreate these objects using our createProduct factory function, along with two or three more products of your choosing.
*/

function createProduct(id, name, stock, price) {
  let newProduct = {};
  newProduct.id = id;
  newProduct.name = name;
  newProduct.stock = stock;
  newProduct.price = price;
  newProduct.setPrice = function (newPrice) {
    if (newPrice >= 0) {
      this.price = newPrice;
    } else {
      console.log("Invalid price!");
    }
  };

  newProduct.describe = function () {
    console.log("Name: " + this.name);
    console.log("ID: " + this.id);
    console.log("Price: $" + this.price);
    console.log("Stock: " + this.stock);
  };

  return newProduct;
}

let scissors = createProduct(0, "Scissors", 8, 10);
let drill = createProduct(1, "Cordless Drill", 15, 45);

// console.log(scissors, drill);

function Lizard() {
  this.scamper = function () {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper(); // ?
