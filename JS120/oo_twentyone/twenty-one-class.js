const shuffle = require("shuffle-array");
const readline = require("readline-sync");

class Card {
  static SUITS = ["Hearts", "Diamonds", "Clubs", "Spades"];
  static RANKS = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    this.hidden = false;
  }

  toString() {
    return `${this.rank} of ${this.suit}`;
  }
}

class Deck {
  constructor() {
    this.cards = [];

    Card.SUITS.forEach((suit) => {
      Card.RANKS.forEach((rank) => {
        this.cards.push(new Card(suit, rank));
      });
    });
    this.shuffleCards();
  }

  shuffleCards() {
    shuffle(this.cards);
  }

  deal() {
    return this.cards.pop();
  }
}

class Participant {
  constructor() {
    this.hand = [];
  }

  displayHand() {
    this.hand.forEach((card) => console.log(`${card.toString()}`));
  }

  isBusted(game) {
    return game.score(this) > TwentyOneGame.GOAL_SUM;
  }
}

class Player extends Participant {
  constructor() {
    super();
  }

  hit() {
    //STUB
  }

  stay() {
    //STUB
  }

  isBusted() {
    //STUB
  }

  score() {
    //STUB
  }
}

class Dealer extends Participant {
  constructor() {
    super();
  }

  hit() {
    //STUB
  }

  stay() {
    //STUB
  }

  isBusted() {
    //STUB
  }

  score() {
    //STUB
  }

  hide() {
    //STUB
  }

  reveal() {
    //STUB
  }

  deal() {
    //STUB
  }
}

class TwentyOneGame {
  static GOAL_SUM = 21;
  static ACE_VALUE = 11;
  static FACE_VALUE = 10;

  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
  }

  start() {
    this.displayWelcomeMessage();
    this.dealCards();
    this.showCards();
    this.playerTurn();
    this.dealerTurn();
    this.displayResult();
    this.displayGoodbyeMessage();
  }

  dealCards() {
    for (let count = 0; count < 2; count++) {
      this.player.hand.push(this.deck.deal());
      this.dealer.hand.push(this.deck.deal());
    }
  }

  showCards() {
    console.log("");
    console.log("Player has:");
    this.player.displayHand();

    console.log("\nDealer has:");
    console.log(`  ${this.dealer.hand[0].toString()}`);
    console.log("  and one hidden card.");
    console.log("");
  }

  playerTurn() {
    while (true) {
      let choice;
      while (true) {
        choice = readline
          .question("Would you like to (h)it or (s)tay? ")
          .toLowerCase();
        if (["h", "s"].includes(choice)) break;
        console.log("Sorry, that's not a valid choice.");
      }

      if (choice === "h") {
        this.player.hand.push(this.deck.deal());
        console.log("You chose to hit!");
        this.showCards();
      }

      if (choice === "s" || this.player.isBusted(this)) {
        break;
      }
    }

    if (this.player.isBusted(this)) {
      console.log(`Your score is ${this.score(this.player)} You busted!`);
    } else {
      console.log(
        `You chose to stay, your score is ${this.score(this.player)}`
      );
    }
  }

  dealerTurn() {
    //STUB
  }

  playerHitsOrStays() {
    let choice;

    while (true) {
      choice = readline
        .question("Would you like to (h)it or (s)tay?")
        .toLowerCase();
      if (["h", "s"].includes(choice)) break;
      console.log(
        "Sorry, that's not a valid option.  Choose 'h' to hit or 's' to stay"
      );
      return choice;
    }
  }

  score(participant) {
    let hand = participant.hand;
    let ranks = hand.map((card) => card.rank);

    let sum = 0;
    ranks.forEach((rank) => {
      if (rank === "Ace") {
        sum += TwentyOneGame.ACE_VALUE;
      } else if (["Jack", "Queen", "King"].includes(rank)) {
        sum += TwentyOneGame.FACE_VALUE;
      } else {
        sum += Number(rank);
      }
    });
    // Correct for Aces
    ranks
      .filter((rank) => rank === "Ace")
      .forEach((_) => {
        if (sum > TwentyOneGame.GOAL_SUM) {
          sum -= 10;
        }
      });

    return sum;
  }

  displayWelcomeMessage() {
    console.log("Welcome to Twenty One!");
  }

  displayGoodbyeMessage() {
    //STUB
  }

  displayResult() {
    //STUB
  }
}

let game = new TwentyOneGame();
game.start();
