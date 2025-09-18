function createProduct(name, price) {
  return {
    name,
    price,
  };
}

function createInvoice(invoiceData) {
  

  // 2. Return the invoice object
  return {
    // The `products` property will be the array you created in step 1.
    products: /* your new array of product objects */

    // The `total` method will calculate the sum of the prices.
    total() {
      // Inside here, `this.products` will refer to the products array.
      // How can you sum all the `price` properties from the objects in `this.products`?
    }
  };
}

let invoiceData = {
  products: [
    { name: 'Pen', price: 1 },
    { name: 'Notebook', price: 3 },
    { name: 'Stapler', price: 5 },
  ]
};

let invoice = createInvoice(invoiceData);

console.log(invoice.total()); // Expected output: 9

// The invoice.products array should contain product objects
console.log(invoice.products[0]); // Expected output: { name: 'Pen', price: 1 }
