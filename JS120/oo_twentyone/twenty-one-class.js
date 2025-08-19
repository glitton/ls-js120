class Card {
  constructor() {
    //STUB
    //state of card?
    //rank, suit, points
  }
}

class Deck {
  constructor() {
    //STUB
    //state of deck
    //52 cards
    //data structure to keep track of cards
    //array or object?
  }

  deal() {
    //STUB
    // does the dealer or deck deal
  }
}

class Participant {
  constructor() {
    //STUB
    // state?
    //score, hand, amount of money available
    // what else
  }
}

class Player extends Participant {
  constructor() {
    //STUB
    //state of player
    //score, hand, money
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
  // Very similar to a Player; do we need this?
  constructor() {
    //STUB
    // What sort of state does a dealer need?
    // Score? Hand? Deck of cards? Bow tie?
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
    // does the dealer or the deck deal?
  }
}

class TwentyOneGame {
  constructor() {
    //STUB
    // What sort of state does the game need?
    // A deck? Two participants?
  }

  start() {
    //SPIKE
    this.displayWelcomeMessage();
    this.dealCards();
    this.showCards();
    this.playerTurn();
    this.dealerTurn();
    this.displayResult();
    this.displayGoodbyeMessage();
  }

  dealCards() {
    //STUB
  }

  showCards() {
    //STUB
  }

  playerTurn() {
    //STUB
  }

  dealerTurn() {
    //STUB
  }

  displayWelcomeMessage() {
    //STUB
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
