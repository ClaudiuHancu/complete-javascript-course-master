'use strict';

// Slectia Elementelor
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
const diceEl = document.querySelector(`.dice`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

console.log(document.querySelector(`#name--0`).textContent);
console.log(document.querySelector(`#name--1`).textContent);
//Conditii de Start
score0El.textContent = 0;
score1El.textContent = 0;

// current0.textContent = 0;
// current1.textContent = 0;
diceEl.classList.add(`hidden`);

//Scorul Current

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
  currentScore = 0;
};

//Datul cu Zarul
btnRoll.addEventListener(`click`, function () {
  //1.Generare de zar
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2.Arata zarul
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${dice}.png`;

    //3.Verifica daca este 1
    if (dice !== 1) {
      //4. Adauga Zarul la scorul Curent
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      //5.schimba Jucatorul
      switchPlayer();
    }
  }
});

btnHold.addEventListener(`click`, function () {
  //1.Adauga currentScore la Playerul Activ
  if (playing) {
    scores[activePlayer] += currentScore;

    //   scores[1]=scores[1]+currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2.Verifica daca Scorul este mai >=100
    if (scores[activePlayer] >= 100) {
      //sfarsit de JOC
      playing = false;
      diceEl.classList.add(`hidden`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener(`click`, function () {
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add(`hidden`);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  playing = true;
});
const player1 = (document.querySelector(`#name--0`).textContent = prompt(
  `Adauga Jucatorul 1`
));
const player2 = (document.querySelector(`#name--1`).textContent = prompt(
  `Adauga Jucatorul 2`
));
