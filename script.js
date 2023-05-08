function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound() {
  const playerSelection = prompt(`Rock, paper, or scissors?`).toLowerCase();
  const computerSelection = computerPlay();
  let result;

  if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
    alert(`"${playerSelection}" is not a valid choice.`);
    return playRound();
  }

  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    result = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    result = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }

  return result;
}

function game() {
  const score = {
    player: 0,
    computer: 0,
    tie: 0,
  };

  for (let i = 0; i < 5; i++) {
    const roundResult = playRound();
    alert(`Round ${i + 1}: ${roundResult}`);
    if (roundResult.startsWith('You win')) {
      score.player++;
    } else if (roundResult.startsWith('You lose')) {
      score.computer++;
    } else {
      score.tie++;
    }
  }

  const winner =
    score.player > score.computer
      ? 'You win!'
      : score.player < score.computer
      ? 'You lose!'
      : "It's a tie!";

  alert(`
    Final score:
    You: ${score.player}
    Computer: ${score.computer}
    Ties: ${score.tie}
    ${winner}
  `);

  const playAgain = confirm('Play again?');
  if (playAgain) {
    game();
  }
}

game();