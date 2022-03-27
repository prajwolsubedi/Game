'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 120;
document.querySelector('.guess').value = 55;
*/
//Whatever we get from input is always a string.

// const number = Math.trunc(Math.random()*20) + 1;
// document.querySelector('.number').textContent = number;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //If there is no guess
  if (!guess) {
    document.querySelector('.message').textContent = '🚫🚫 No Number!!!';
  }

  //If the guess is right (playeres win the game)
  else if (guess === secretNumber) {
    displayMessage('🏆🏆 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  } else {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? '😌😁🥲Your guess is high!'
          : '😅😌Your guess is low!'
      );
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game 🥲');
    }
  }

  // //If the guess is low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '😅😌Your guess is low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //   }
  // }
  // //If the guess is high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       '😌😁🥲Your guess is high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
