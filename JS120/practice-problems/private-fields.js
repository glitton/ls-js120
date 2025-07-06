// class Person {
//   #name;
//   #age;

//   constructor(name, age) {
//     this.#name = name;
//     this.age = age;
//   }

//   set age(age) {
//     if (typeof age === "number" && age > 0) {
//       this.#age = age;
//     } else {
//       throw new RangeError("Age must be positive.");
//     }
//   }

//   showAge() {
//     console.log(this.#age);
//   }
// }

// let person = new Person("John", 30);
// person.showAge(); // 30
// person.age = 31;
// person.showAge(); // 31

// try {
//   // This line should raise a RangeError,
//   // but does not.
//   person.age = -5;
//   person.showAge(); // -5
// } catch (e) {
//   // The following line should run, but won't
//   console.log("RangeError: Age must be positive");
// }

class Book {
  #title;
  #author;
  #year;

  constructor(title, author, year) {
    this.#title = title;
    this.#author = author;
    this.#year = year;
  }

  get title() {
    return this.#title;
  }

  get author() {
    return this.#author;
  }

  get year() {
    return this.#year;
  }

  set year(newYear) {
    if (newYear < 1900) {
      throw new RangeError("Year must be at least 1900");
    } else {
      this.#year = newYear;
    }
  }
}

// let book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
// console.log(book.title); // The Great Gatsby
// console.log(book.author); // F. Scott Fitzgerald
// console.log(book.year); // 1925

// book.year = 1932; // Changing year
// console.log(book.year); // 1932

// try {
//   book.year = 1825;
// } catch (e) {
//   console.log(e); // RangeError: Invalid year
// }

// try {
//   let book2 = new Book("A Tale of Two Cities", "Charles Dickens", 1859);
// } catch (e) {
//   console.log(e); // RangeError: Invalid year
// }

class BankAccount {
  #balance = 0;

  #checkBalance() {
    console.log(`Current balance: ${this.#balance}`);
  }

  deposit(amount) {
    this.#balance += amount;
    this.#checkBalance();
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      throw new RangeError("Insufficient funds");
    } else {
      this.#balance -= amount;
      this.#checkBalance();
    }
  }
}

// let account = new BankAccount();
// account.deposit(100); // Current balance: $100
// account.withdraw(50); // Current balance: $50
// account.withdraw(100); // Insufficient funds

class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    // calls the setter
    this.width = width;
    this.height = height;
  }

  get width() {
    return this.#width;
  }

  set width(newWidth) {
    if (newWidth <= 0) {
      throw new RangeError("Width must be positive");
    } else {
      this.#width = newWidth;
    }
  }

  get height() {
    return this.#height;
  }

  set height(newHeight) {
    if (newHeight <= 0) {
      throw new RangeError("Height must be positive");
    } else {
      this.#height = newHeight;
    }
  }

  get area() {
    return this.width * this.height;
  }
}

// let rect = new Rectangle(10, 5);
// console.log(rect.area); // 50

// rect.width = 20;
// console.log(rect.area); // 100

// rect.height = 12;
// console.log(rect.area); // 240

// try {
//   rect.width = 0;
// } catch (e) {
//   console.log(e); // RangeError: width must be positive
// }

// try {
//   rect.height = -10;
// } catch (e) {
//   console.log(e); // RangeError: height must be positive
// }

class MathUtils {
  static add(num1, num2) {
    return num1 + num2;
  }
  static subtract(num1, num2) {
    return num1 - num2;
  }
  static multiply(num1, num2) {
    return num1 * num2;
  }
  static divide(num1, num2) {
    if (num2 === 0) {
      throw new RangeError("Can't divide by zero");
    } else {
      return num1 / num2;
    }
  }
}

console.log(MathUtils.add(5, 3));
console.log(MathUtils.subtract(10, 4)); // 6
console.log(MathUtils.multiply(6, 7)); // 42
console.log(MathUtils.divide(20, 5)); // 4
console.log(MathUtils.divide(10, 0)); // RangeError: Division by zero
