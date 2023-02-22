class Player {
    constructor(name) {
      this.name = name;
      this.score = 0;
    }
  
    addPoints(points) {
      this.score += points;
    }
  
    removePoints(points) {
      this.score -= points;
    }
  }
  
  class Scoreboard {
    constructor() {
      this.players = [];
      this.winner = null;
    }
  
    static getInstance() {
      if (!Scoreboard.instance) {
        Scoreboard.instance = new Scoreboard();
      }
      return Scoreboard.instance;
    }
  
    addPlayer(player) {
      this.players.push(player);
    }
  
    removePlayer(player) {
      const index = this.players.indexOf(player);
      if (index !== -1) {
        this.players.splice(index, 1);
      }
    }
  
    updateWinner() {
      let maxScore = -Infinity;
      for (const player of this.players) {
        if (player.score > maxScore) {
          maxScore = player.score;
          this.winner = player;
        }
      }
    }
  
    display() {
      console.log("Scoreboard:");
      for (const player of this.players) {
        console.log(`${player.name}: ${player.score}`);
      }
      console.log(`The winner is: ${this.winner ? this.winner.name : "Nobody won this game!"}`);
    }
  }
  
  const scoreboard = Scoreboard.getInstance();
  const player1 = new Player("Freddy Mercury");
  const player2 = new Player("David Bowie");
  const player3 = new Player("Billy Idol");
  scoreboard.addPlayer(player1);
  scoreboard.addPlayer(player2);
  scoreboard.addPlayer(player3);
  
  player1.addPoints(5);
  player2.addPoints(3);
  player3.addPoints(1);
  scoreboard.updateWinner();
  scoreboard.display();
  
  player1.removePoints(4);
  scoreboard.updateWinner();
  scoreboard.display();
