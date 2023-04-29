const options = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

const computerPlay = () => {
  const randomOptions = Math.floor(Math.random() * options.length);
  return options[randomOptions];
};

const playRound = (playerSelection, computerSelection) => {
  switch (playerSelection + computerSelection) {
    case 'scissorspaper':
      playerScore += 1;
      console.log(playerScore);
      console.log('You win! Scissors cut Papers🎉');
      break;
    case 'rockscissors':
      playerScore += 1;
      console.log(playerScore);
      console.log('You win! Rocks destroy Scissors🎉');
      break;
    case 'paperrock':
      playerScore += 1;
      console.log(playerScore);
      console.log('You win! Papers wrap Rocks🎉');
      break;
    case 'paperscissors':
      computerScore += 1;
      console.log(computerScore);
      console.log('You lose! Papers wrap Rocks😭');
      break;
    case 'scissorsrock':
      computerScore += 1;
      console.log(computerScore);
      console.log('You lose! Scissors are destroyed by Rocks😭');
      break;
    case 'rockpaper':
      computerScore += 1;
      console.log(computerScore);
      console.log('You lose! Rocks are wrapped by Papers😭');
      break;
    case 'paperpaper':
    case 'scissorsscissors':
    case 'rockrock':
      console.log('Its a draw!😰');
      break;
    default:
      console.log('Please enter a valid choise!🧐')
      break;
  }
};

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = window.prompt('Please enter your choice: ').toLowerCase();
    let computerSelection = computerPlay();
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();