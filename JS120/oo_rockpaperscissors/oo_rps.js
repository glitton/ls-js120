const readline = require("readline-sync");
const MESSAGES = require("./game_messages.json");

const WINNING_COMBOS = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"],
};

const VALID_CHOICES = Object.keys(WINNING_COMBOS); //words of choices

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
          "Please choose r for rock, p for paper, sc for scissors, l for lizard or sp for spock:"
        );
        choice = readline.question();
        if (
          [
            "r",
            "rock",
            "p",
            "paper",
            "sc",
            "scissors",
            "l",
            "lizard",
            "sp",
            "spock",
          ].includes(choice)
        )
          break;
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
      const choices = ["rock", "paper", "scissors", "lizard", "spock"];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.setMove(choices[randomIndex]);
    },
  };
  return Object.assign(playerObject, computerObject);
}

function createMove(value) {
  let moveMap = {
    r: "rock",
    p: "paper",
    sc: "scissors",
    l: "lizard",
    sp: "spock",
    rock: "rock",
    paper: "paper",
    scissors: "scissors",
    lizard: "lizard",
    spock: "spock",
  };

  return {
    value: moveMap[value] || value,

    beats(otherMove) {
      return WINNING_COMBOS[this.value]?.includes(otherMove.value) || false;
    },
  };
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  score: {
    human: 0,
    computer: 0,
  },

  displayWelcomeMessage() {
    console.log(`${MESSAGES["welcome"]}`);
  },

  displayGameRules(options) {
    console.log(`\n Here are the winning combinations`);
    options.map((option) =>
      console.log(`\n----------> ${option} beats ${WINNING_COMBOS[option]} \n`)
    );
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

  updateScore() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if (humanMove.beats(computerMove)) {
      this.score.human += 1;
    } else if (computerMove.beats(humanMove)) {
      this.score.computer += 1;
    }
  },

  displayScore() {
    console.log(
      `Current game score - You: ${this.score.human}, Computer: ${this.score.computer}`
    );
  },

  isMatchWinner() {
    return this.score.human >= 5 || this.score.computer >= 5;
  },

  playAgain() {
    console.log("Would you like to play again? (y/n)");
    let answer = readline.question();
    return answer.toLowerCase()[0] === "y";
  },

  play() {
    this.displayWelcomeMessage();
    this.displayGameRules(VALID_CHOICES);
    this.score = { human: 0, computer: 0 }; // Reset score at the start of a new game

    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      this.updateScore();
      this.displayScore();

      if (this.isMatchWinner()) {
        console.log(
          `${this.score.human >= 5 ? "You are" : "Computer is"} the winner!`
        );
        this.score = { human: 0, computer: 0 }; // Reset score after match ends
        if (!this.playAgain()) break;
      } else if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();
