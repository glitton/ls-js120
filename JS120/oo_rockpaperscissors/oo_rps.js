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
        console.log(`${MESSAGES["gameChoice"]}`);
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
        console.log(`${MESSAGES["invalidChoice"]}`);
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
  let MOVE_MAP = {
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
    value: MOVE_MAP[value] || value,

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
  history: [],

  displayWelcomeMessage() {
    console.log(`${MESSAGES["welcome"]}`);
  },

  displayGameRules(options) {
    console.log(`\nHere are the winning combinations`);
    options.map((option) =>
      console.log(`\n----------> ${option} beats ${WINNING_COMBOS[option]} \n`)
    );
  },

  displayGoodbyeMessage() {
    console.log(`${MESSAGES["gameEnd"]}`);
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You choose: ${humanMove.value}`);
    console.log(`The computer chose: ${computerMove.value}`);

    if (humanMove.beats(computerMove)) {
      console.log(`${MESSAGES["playerWins"]}`);
    } else if (computerMove.beats(humanMove)) {
      console.log(`${MESSAGES["computerWins"]}`);
    } else {
      console.log(`${MESSAGES["tie"]}`);
    }
  },

  updateScore() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    let result = "tie";

    if (humanMove.beats(computerMove)) {
      this.score.human += 1;
      result = "human";
    } else if (computerMove.beats(humanMove)) {
      this.score.computer += 1;
      result = "computer";
    }

    //Round info to track history
    this.history.push({
      round: this.history.length + 1,
      humanMove: humanMove.value,
      computerMove: computerMove.value,
      result: result,
      score: {
        human: this.score.human,
        computer: this.score.computer,
      },
    });
  },

  displayScore() {
    console.log(
      `Current game score - You: ${this.score.human}, Computer: ${this.score.computer}`
    );
  },

  displayHistory() {
    console.log("n=====***** GAME HISTORY *****======");

    if (this.history.length === 0) {
      console.log("No moves have been made yet.");
      return;
    }

    this.history.forEach((round) => {
      console.log(`Round: ${round.round}`);
      console.log(`  You chose: ${round.humanMove}`);
      console.log(`  Computer chose: ${round.computerMove}`);

      let resultText = "It was a tie.";

      if (round.result === "human") {
        resultText = "You won!";
      } else if (round.result === "computer") {
        resultText = "Computer won!";
      }

      console.log(`  Result: ${resultText}`);
      console.log(
        `  Score: You ${round.score.human}, Computer ${round.score.computer}`
      );
      console.log("");
    });
  },

  isMatchWinner() {
    return this.score.human >= 5 || this.score.computer >= 5;
  },

  playAgain() {
    console.log(`${MESSAGES["anotherGame"]}`);
    let answer = readline.question();

    if (answer.toLowerCase() === "h") {
      this.displayHistory();
      return this.playAgain();
    }
    console.clear();
    return answer.toLowerCase()[0] === "y";
  },

  playRound() {
    this.human.choose();
    this.computer.choose();
    this.displayWinner();
    this.updateScore();
    this.displayScore();
  },

  play() {
    this.displayWelcomeMessage();
    this.displayGameRules(VALID_CHOICES);
    this.score = { human: 0, computer: 0 }; // Reset score at the start of a new game

    while (true) {
      this.playRound();

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
