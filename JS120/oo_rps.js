const readline = require("readline-sync");

function createPlayer() {
  return {
    move: null,

    setMove(value) {
      this.move = createMove(value);
    },
  };
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log(
          "Please choose r for rock, p for paper, or sc for scissors:"
        );
        choice = readline.question();
        if (["r", "p", "sc"].includes(choice)) break;
        console.log("Sorry, invalid choice.");
      }

      this.setMove(choice);
    },
  };
  return Object.assign(playerObject, humanObject);
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      const choices = ["rock", "paper", "scissors"];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.setMove(choices[randomIndex]);
    },
  };
  return Object.assign(playerObject, computerObject);
}

function createMove(value) {
  return {
    value,

    beats(otherMove) {
      if (this.value === "rock") {
        return otherMove.value === "scissors";
      } else if (this.value === "paper") {
        return otherMove.value === "rock";
      } else if (this.value === "scissors") {
        return otherMove.value === "paper";
      }
      return false;
    },
  };
}

// function createRule() {
//   return {
//     // possible state? not clear whether Rules need state
//   };
// }

// // Since we don't yet know where to put `compare`, let's define
// // it as an ordinary function.
// let compare = function (move1, move2) {
//   // not yet implemented
// };

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log("Welcome to Rock, Paper, Scissors!");
  },

  displayGoodbyeMessage() {
    console.log("Thanks for playing Rock, Paper, Scissors!");
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You choose: ${humanMove.value}`);
    console.log(`The computer chose: ${computerMove.value}`);

    if (humanMove.beats(computerMove)) {
      console.log("You win!");
    } else if (computerMove.beats(humanMove)) {
      console.log("Computer wins!");
    } else {
      console.log("It's a tie!");
    }
  },

  playAgain() {
    console.log("Would you like to play again? (y/n)");
    let answer = readline.question();
    return answer.toLowerCase()[0] === "y";
  },

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();
