const score = document.querySelector('#score');
const cardHolder = document.querySelector('#cards');
const reset = document.querySelector('.restart');
const allCards = document.querySelectorAll('.card');
const allCardsItems = document.querySelectorAll('.card i');
let nextCard = document.querySelector('#next-card i');
let scoreCounter = 0;
let cardRandomSymbol;
let nextCardArr;
let coolDownReady = true;
// Reset the Cards so that thier symbols are random again
randomCardSymbols();
// Reset the Cards to remove thier "Matched" class and set the variable nextCardArr to have a value
resetCards();

cardHolder.addEventListener('click', function(e) {
  if (e.target.nodeName === "LI" && !e.target.classList.contains('matched') && coolDownReady === true) {
    coolDownReady = false;
    scoreCounter++;
    score.textContent = scoreCounter;
    e.target.classList.add('show');
    setTimeout(() => {
      e.target.classList.remove('show');
      coolDownReady = true;
      if (e.target.querySelector('i').classList.contains(nextCard.classList[1])) {
        e.target.classList.add('matched');
        nextCard.classList.replace(nextCard.classList[1], nextCardArr[0]);
        if (nextCardArr.length === 0) {
          setTimeout(() => {
            alert('You won with the score of ' + scoreCounter);
          }, 100);
        }

        nextCardArr.shift();
      }
    }, 500);
  }
});

reset.addEventListener('click', function() {
  nextCard.classList.replace(nextCard.classList[1], 'fa-anchor');
  scoreCounter = 0;
  score.textContent = scoreCounter;
  // Reset the Cards so that thier symbols are random again
  randomCardSymbols();
  // Reset the Cards to remove thier "Matched" class
  resetCards();
});

function randomCardSymbols() {
  cardRandomSymbol = ['fa-anchor', 'fa-frog', 'fa-atom', 'fa-feather-alt', 'fa-cogs', 'fa-hat-wizard', 'fa-bolt', 'fa-fan', 'fa-apple-alt', 'fa-bell', 'fa-bomb', 'fa-brain'];
  cardRandomSymbol.sort(() => 0.5 - Math.random());
  allCardsItems.forEach(element => {
    element.classList.replace(element.classList[1], cardRandomSymbol[0]);
    cardRandomSymbol.shift();
  });
}

function resetCards() {
  nextCardArr = ['fa-frog', 'fa-atom', 'fa-feather-alt', 'fa-cogs', 'fa-hat-wizard', 'fa-bolt', 'fa-fan', 'fa-apple-alt', 'fa-bell', 'fa-bomb', 'fa-brain'];
  allCards.forEach(element => {
    element.classList.remove('matched');
  });
}