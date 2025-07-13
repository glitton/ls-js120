function makeObj(propA, propB) {
  return {
    propA,
    propB,
  };
}

let nums = new makeObj(10, 20);
// console.log(nums);

// function createInvoice(services = {}) {
//   let phoneCharge = services.phone;
//   if (phoneCharge === undefined) {
//     phoneCharge = 3000;
//   }

//   let internetCharge = services.internet;
//   if (internetCharge === undefined) {
//     internetCharge = 5500;
//   }

//   return {
//     phone: phoneCharge,
//     internet: internetCharge,

//     total() {
//       return this.phone + this.internet;
//     },
//   };
// }

// function invoiceTotal(invoices) {
//   let total = 0;

//   for (let index = 0; index < invoices.length; index += 1) {
//     total += invoices[index].total();
//   }

//   return total;
// }

// let invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({ internet: 6500 }));
// invoices.push(createInvoice({ phone: 2000 }));
// invoices.push(
//   createInvoice({
//     phone: 1000,
//     internet: 4500,
//   })
// );

// console.log(invoiceTotal(invoices)); // 31000

function createInvoice(services = {}) {
  let phoneCharge = services.phone;
  if (phoneCharge === undefined) {
    phoneCharge = 3000;
  }

  let internetCharge = services.internet;
  if (internetCharge === undefined) {
    internetCharge = 5500;
  }

  return {
    phone: phoneCharge,
    internet: internetCharge,
    payments: [],

    total() {
      return this.phone + this.internet;
    },

    addPayment(payment){
      this.payments.push(payment)
    },

    addPayments(payments) {
      payments.forEach(this.addPayment, this);
    },

    paymentTotal() {
      return this.payments.reduce((sum, payment) => sum + payment.total(), 0);
    },

    amountDue() {
      return this.total() - this.paymentTotal();
    },
  };
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

function createPayment(services = {}) {
  let payment = {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
  };

  payment.total = function () {
    return this.amount || this.phone + this.internet;
  };

  return payment;
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment) => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(
  createPayment({
    internet: 6500,
  })
);

payments.push(
  createPayment({
    phone: 2000,
  })
);

payments.push(
  createPayment({
    phone: 1000,
    internet: 4500,
  })
);

payments.push(
  createPayment({
    amount: 10000,
  })
);

// console.log(paymentTotal(payments)); // => 24000
