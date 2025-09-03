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
    if (this.hidden) {
      return "a Hidden Card";
    }
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
    this.hand.forEach((card) => {
      card.hidden = false;
    });
  }

  deal() {
    //STUB
  }
}

class TwentyOneGame {
  static GOAL_SUM = 21;
  static ACE_VALUE = 11;
  static FACE_VALUE = 10;
  static DEALER_MIN_SUM = 17;

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

    this.dealer.hand[1].hidden = true;
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

      if (choice === "s" || this.player.isBusted(this.player)) {
        break;
      }
    }

    if (this.isBusted(this.player)) {
      console.log(`Your score is ${this.score(this.player)} You busted!`);
    } else {
      console.log(
        `You chose to stay, your score is ${this.score(this.player)}`
      );
    }
  }

  dealerContinue() {
    readline.question("Press Return to continue ...");
  }

  dealerTurn() {
    console.log("\nDealer's turn ...");
    this.dealer.reveal();

    console.log("Dealer's cards are:");
    this.dealer.displayHand();

    while (this.score(this.dealer) <= this.DEALER_MIN_SUM) {
      console.log("Dealer hits ...");
      this.dealer.hand.push(this.deck.deal());
      this.dealer.displayHand();
      this.dealerContinue();
    }

    if (this.isBusted(this.dealer)) {
      console.log(`Dealer busted with a score of ${this.score(this.dealer)}!`);
    } else {
      console.log(`Dealer stays with a score of ${this.score(this.dealer)}.`);
    }
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

  isBusted(participant) {
    return game.score(participant) > TwentyOneGame.GOAL_SUM;
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
