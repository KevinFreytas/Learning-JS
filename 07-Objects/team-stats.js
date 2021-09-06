/* We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, 
you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

Once created, you can manipulate these data structures as well as gain insights from them. 
For example, you might want to get the total number of games your team has played, or the average score of all 
of their games. */

// Object "team" to store the information about our team.
const team = {
    // Our team has players. They have first and last name and an age.
    _players: [
      {firstName: 'Lionel', lastName: 'Messi', age: 34},
      {firstName: 'Neymar', lastName: 'Junior', age: 29},
      {firstName: 'Kylian', lastName: 'Mbappé', age: 23}
    ],
    get players() {
      return this._players;
    },

    // Our team plays games. They have an opponent and the amount of goals score by the team and by the opponent.
    _games: [
      {opponent: 'Club Brugge', teamGoals: 5, opponentGoals: 1},
      {opponent: 'RB Leipzig', teamGoals: 3, opponentGoals: 1},
      {opponent: 'Manchester City', teamGoals: 3, opponentGoals: 4}
    ],
    get games() {
      return this._games;
    },
    
    // If we want to add more players to our team, we can use this method.
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      }
      this.players.push(player);
    },
    
    // If we want to add more games that our team played, we can use this method.
    addGame(opponentName, teamGoals, opponentGoals) {
      let game = {
        opponent: opponentName,
        teamGoals: teamGoals,
        opponentGoals: opponentGoals
      }
      this.games.push(game);
    },

    // Here we can get the information about a random player in our team.
    getRandomPlayer() {
        let randomIndex = Math.floor(Math.random() * this.players.length);
        let firstName = this.players[randomIndex].firstName;
        let lastName = this.players[randomIndex].lastName;
        let age = this.players[randomIndex].age;
        return `The player is ${firstName} ${lastName}. He is ${age} years old.`
    },

    // Here we can get the information about a random game our team has played.
    getRandomGame() {
        let randomIndex = Math.floor(Math.random() * this.players.length);
        let team = 'PSG';
        let opponent = this.games[randomIndex].opponent;
        let teamGoals = this.games[randomIndex].teamGoals;
        let opponentGoals = this.games[randomIndex].opponentGoals;
        return `The game was ${team} ${teamGoals} x ${opponentGoals} ${opponent}.`
    }
  }
  
// Here I add more players to our team
team.addPlayer('Sergio', 'Ramos', 35);
team.addPlayer('Gianluigi', 'Donnarumma', 22);
team.addPlayer('Angel', 'Di Maria', 33);
  
// Adding more games played by our team
team.addGame('Juventus', 3, 0);
team.addGame('Real Madrid', 7, 1);
team.addGame('Barcelona', 1, 6);

console.log(team.getRandomPlayer());
console.log(team.getRandomGame());