let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Ties: 0
  };

updateScoreElement();

//score === null
// if(!score) {
//   score = {
//     Wins: 0,
//     Losses: 0,
//     Ties: 0
//   }
// }
let isAutoPlaying = false;
let intervalId;



//Autoplay feature - advanced funtions
function autoPlay() {
  if(!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000)
    isAutoPlaying = true;

    document.querySelector('.autoplay-score').innerHTML = 'Stop Playing';
  }
  else {
    clearInterval(intervalId);
    isAutoPlaying = false;

    document.querySelector('.autoplay-score').innerHTML = 'Auto Play';
    
  }
}

//add event listener 
// const buttonElement = document.querySelector('.js-rock-button').addEventListener('click', () => {
//   playGame('rock');
// });

//using event listener to play game with keys

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  }
  else if (event.key === 'p') {
    playGame('paper');
  }
  else if (event.key === 's') {
    playGame('scissors');
  }
  else if (event.key === 'a') {
    autoPlay();
  }
  else if (event.key === 'Backspace') {
      score.Wins = 0;
      score.Losses = 0;
      score.Ties = 0;
      localStorage.removeItem('score');
      updateScoreElement();
  }
})

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You win';
    } else if (computerMove === 'scissors') {
      result = 'Tie';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else if (computerMove === 'scissors') {
      result = 'You lose';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You lose';
    } else if (computerMove === 'scissors') {
      result = 'You win';
    }
  }

  if(result === 'You win') {
    score.Wins += 1;
  }

  else if(result === 'You lose') {
    score.Losses += 1;
  }

  else if(result === 'Tie') {
    score.Ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  
  document.querySelector('.js-moves').innerHTML = `You - <img src="./images/${playerMove}-emoji.png"> <br><br>Computer - <img src="./images/${computerMove}-emoji.png">`;

}

function updateScoreElement() 
{
  document.querySelector('.js-score').innerHTML = (`Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`);
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}