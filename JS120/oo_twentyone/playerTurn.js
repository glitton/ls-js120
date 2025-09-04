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

      if (choice === "s" || this.isBusted(this.player)) {
        break;
      }
    }

    if (this.isBusted(this.player)) {
      console.log(`Your score is ${this.score(this.player)}. You busted!`);
    } else {
      console.log(
        `You chose to stay, your score is ${this.score(this.player)}`
      );
    }
  }