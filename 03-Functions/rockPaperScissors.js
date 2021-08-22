// This function, using arrow function notation, checks if the user input is valid. If yes, return this input. If no, returns a message indicating the error.
const getUserChoice = userInput =>  {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    return 'Invalid choice.';
  }
}

// This function generates a computer choice in the game. It picks a random number and turns that numbers into one of the 3 possibilities of play.
const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);
  
  switch (computerChoice) {
    case 0:
    return 'rock';
    break;

    case 1:
    return 'paper';
    break;

    case 2:
    return 'scissors';
    break;
  }
}

// This function determine who was the winner of the game. It takes the choices from both user and computer as parameters. First, checks if the game was a tie and return a message. If it's not a tie, it keeps comparing the choices to determine who was the winner.
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game was a tie.';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The game was won by the computer.';
    } else {
      return 'The game was won by the user.';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The game was won by the computer.';
    } else {
      return 'The game was won by the user.';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The game was won by the computer.';
    } else {
      return 'The game was won by the user.';
    }
  }
}

const playGame = () => {
  // Here's where the user choose what their going to play.
  let userChoice = getUserChoice('scissors');
  console.log(`The user has chosen ${userChoice}.`);

  // Here's where the computer plays.
  let computerChoice = getComputerChoice();
  console.log(`The computer has chosen ${computerChoice}.`);

  // Here's printed on the screen the result of the game.
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

