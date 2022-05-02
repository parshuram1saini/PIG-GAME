"use strict";
//selecting the element;
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const currentscore0 = document.getElementById("current--0");
const currentscore1 = document.getElementById("current--1");

// adding add event listener on   start , roll, hold button
const dicenew = document.querySelector(".btn--new");
const diceroll = document.querySelector(".btn--roll");
const dicehold = document.querySelector(".btn--hold");

//starting condition
//selected the textcontent zero
// score0.textContent = 0;
// score1.textContent = 0;
// dice.classList.add("hidden");

// const scores = [0, 0];
// let playerscore = 0;
// let currentplayer = 0;
// let playing = true;

//starting condition  used function for more readilablity
let scores,
  playerscore,
  currentplayer,
  playing = true;
const start = function () {
  score0.textContent = 0;
  score1.textContent = 0;
  currentscore0.textContent = 0;
  currentscore1.textContent = 0;
  dice.classList.add("hidden");
  scores = [0, 0];

  playerscore = 0;
  currentplayer = 0;
  playing = true;
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
};
start();
//used function for  switch player...............
const switchplayer = function () {
  document.getElementById(`current--${currentplayer}`).textContent = 0;
  currentplayer = currentplayer === 0 ? 1 : 0;
  playerscore = 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

//dice roll functionlity
document.addEventListener("click", function () {
  if (playing) {
    //random number generate................
    let random = Math.trunc(Math.random() * 6) + 1;
    console.log(random);

    //display the dice acc. to random no..............
    dice.classList.remove("hidden");
    dice.src = `dice-${random}.png`;

    //check for rolled 1
    if (random !== 1) {
      //add the  dice no. to current score
      playerscore += random;
      document.getElementById(`current--${currentplayer}`).textContent =
        playerscore;
    } else {
      //switch to next player
      switchplayer();
    }
  }
});

//used for game hold
dicehold.addEventListener("click", function () {
  if (playing) {
    //add current score to  active player.................
    scores[currentplayer] += playerscore;
    document.getElementById(`score--${currentplayer}`).textContent =
      scores[currentplayer];

    //  if  active player  score is  >=100,finish the game.............
    if (scores[currentplayer] >= 100) {
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player--${currentplayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${currentplayer}`)
        .classList.remove("player--active");
    }

    //switch to next player.......
    switchplayer();
  }
});
dicenew.addEventListener("click", start);
