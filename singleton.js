/* Construeix una aplicació que creï diversos Jugadors/es. Els jugadors/es podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador/a. L'aplicació ha de poder afegir o treure punts a cada jugador/a perquè el marcador canviï. La classe Marcador ha d'implementar un patró Singleton com a requisit indispensable.*/

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
      console.log(`Winner: ${this.winner ? this.winner.name : "none"}`);
    }
  }
  
  const scoreboard = Scoreboard.getInstance();
  const player1 = new Player("Alice");
  const player2 = new Player("Bob");
  scoreboard.addPlayer(player1);
  scoreboard.addPlayer(player2);
  
  player1.addPoints(5);
  player2.addPoints(3);
  scoreboard.updateWinner();
  scoreboard.display();
  
  player1.removePoints(2);
  scoreboard.updateWinner();
  scoreboard.display();
  