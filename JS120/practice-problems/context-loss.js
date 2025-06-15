// let turk = {
//   firstName: "Christopher",
//   lastName: "Turk",
//   occupation: "Surgeon",
//   getDescription() {
//     return (
//       this.firstName + " " + this.lastName + " is a " + this.occupation + "."
//     );
//   },
// };

// function logReturnVal(func, context) {
//   let returnVal = func.call(context);
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription, turk);

// let turk = {
//   firstName: "Christopher",
//   lastName: "Turk",
//   occupation: "Surgeon",
//   getDescription() {
//     return (
//       this.firstName + " " + this.lastName + " is a " + this.occupation + "."
//     );
//   },
// };

// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }

// let getTurkDescription = turk.getDescription.bind(turk);
// logReturnVal(getTurkDescription);

// const TESgames = {
//   titles: ["Arena", "Daggerfall", "Morrowind", "Oblivion", "Skyrim"],
//   seriesTitle: "The Elder Scrolls",
//   listGames: function () {
//     let self = this;
//     this.titles.forEach(function (title) {
//       console.log(self.seriesTitle + ": " + title);
//     });
//   },
// };

// TESgames.listGames();

// const TESgames = {
//   titles: ["Arena", "Daggerfall", "Morrowind", "Oblivion", "Skyrim"],
//   seriesTitle: "The Elder Scrolls",
//   listGames: function () {
//     this.titles.forEach(function (title) {
//       console.log(this.seriesTitle + ": " + title);
//     }, this);
//   },
// };

// TESgames.listGames();

// const TESgames = {
//   titles: ["Arena", "Daggerfall", "Morrowind", "Oblivion", "Skyrim"],
//   seriesTitle: "The Elder Scrolls",
//   listGames: function () {
//     this.titles.forEach((title) =>
//       console.log(this.seriesTitle + ": " + title)
//     );
//   },
// };

// TESgames.listGames();

// let foo = {
//   a: 0,
//   incrementA: function () {
//     function increment() {
//       this.a += 1;
//     }

//     increment();
//   },
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// console.log(foo.a);

let foo = {
  a: 0,
  incrementA: function () {
    function increment() {
      this.a += 1;
    }

    increment.apply(this);
  },
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

console.log(foo.a);
