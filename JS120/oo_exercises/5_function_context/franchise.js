// let franchise = {
//   name: "How to Train Your Dragon",
//   allMovies: function () {
//     return [1, 2, 3].map(function (number) {
//       return this.name + " " + number;
//     });
//   },
// };

// Solution 1
// let franchise = {
//   name: "How to Train Your Dragon",
//   allMovies: function () {
//     let self = this;
//     return [1, 2, 3].map(function (number) {
//       return self.name + " " + number;
//     });
//   },
// };

// Solution 2
let franchise = {
  name: "How to Train Your Dragon",
  allMovies: function () {
    return [1, 2, 3].map(
      function (number) {
        return this.name + " " + number;
      }.bind(this)
    );
  },
};

console.log(franchise.allMovies());
