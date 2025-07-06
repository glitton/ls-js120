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
  
}