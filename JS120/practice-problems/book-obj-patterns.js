// Base factory function
// function createBook(title, author) {
//   return {
//     title,
//     author,
//     getDescription() {
//       return `${this.title} was written by ${this.author}.`;
//     },
//   };
// }

// // Fac fun for Fiction books
// function createFictionBook(title, author) {
//   let book = createBook(title, author);
//   book.genre = "Fiction";
//   return book;
// }

// // Fac fun for NonFiction books
// function createNonFictionBook(title, author) {
//   let book = createBook(title, author);
//   book.genre = "Non-Fiction";
//   return book;
// }

// let fiction = createFictionBook("Dune", "Frank Herbert");
// console.log(fiction.getDescription()); // => Dune was written by Frank Herbert.
// console.log(fiction.genre); // => Fiction

//Base constructor

// function Book(title, author) {
//   this.title = title;
//   this.author = author;
// }

// Book.prototype.getDescription = function () {
//   return `${this.title} was written by ${this.author}.`;
// };

// //FictionBook constructor
// function FictionBook(title, author) {
//   Book.call(this, title, author);
//   this.genre = "Fiction";
// }

// FictionBook.prototype = Object.create(Book.prototype);
// FictionBook.prototype.constructor = FictionBook;

// //NonfictionBook constructor
// function NonFictionBook(title, author) {
//   Book.call(this, title, author);
//   this.genre = "Non-Fiction";
// }

// NonFictionBook.prototype = Object.create(Book.prototype);
// NonFictionBook.prototype.constructor = NonFictionBook;

// let nonfiction = new NonFictionBook('A Short History of Nearly Everything', 'Bill Bryson');
// console.log(nonfiction.getDescription()); // => A Short History of Nearly Everything was written by Bill Bryson.
// console.log(nonfiction.genre);          // => Non-Fiction

// Base class

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getDescription() {
    return `${this.title} was written by ${this.author}.`;
  }
}

class Fiction extends Book {
  constructor(title, author) {
    super(title, author);
    this.genre = "Fiction";
  }
}

class NonFiction extends Book {
  constructor(title, author) {
    super(title, author);
    this.genre = "Non-Fiction";
  }
}

let fictionCls = new Fiction("The Hobbit", "J.R.R. Tolkien");
console.log(fictionCls.getDescription()); // => The Hobbit was written by J.R.R. Tolkien.
console.log(fictionCls.genre); // => Fiction
