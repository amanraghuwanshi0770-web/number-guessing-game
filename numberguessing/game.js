let Randomnumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessfield');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const loworhi = document.querySelector('.loworhi');
const startover = document.querySelector('.resultparas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    ValidateGuess(guess);
  });
}

function ValidateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } 
  else if (guess < 1) {
    alert('Please enter a number more than 1');
  } 
  else if (guess > 100) {
    alert('Please enter a number less than 100');
  } 
  else {
    prevGuess.push(guess);

    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over! Random number was ${Randomnumber}`);
      endGame();
    } 
    else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === Randomnumber) {
    displayMessage('🎉 You guessed it right!');
    endGame();
  } 
  else if (guess < Randomnumber) {
    displayMessage('Number is too low');
  } 
  else {
    displayMessage('Number is too high');
  }
}

function displayGuess(guess) {
  userinput.value = '';
  guessslot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  loworhi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newgame">Start New Game</h2>`;
  startover.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newgame');
  newGameButton.addEventListener('click', function () {
    Randomnumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessslot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userinput.removeAttribute('disabled');
    startover.removeChild(p);
    playGame = true;
  });
}
